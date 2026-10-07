// Generates the Coffee Cabin voice files with the ElevenLabs text-to-dialogue API: one MP3 per clip, in production/raw/voice/coffee-cabin/.
// Reads the script from COFFEE-CABIN-SCRIPT.md and the voice IDs from voices.json. The API key is read from
// production/elevenlabs-key.txt (never committed, never printed). Numbers are spelled out for the voices here.
//
//   node generate-coffee-voices.js --dry              list the clips, the casting and the character count, without calling the API
//   node generate-coffee-voices.js                    generate every clip that doesn't exist yet
//   node generate-coffee-voices.js --only a,b         just these clips (e.g. --only fog-01,call-04)
//   node generate-coffee-voices.js --force            regenerate even if the file exists (for retakes)
//   --model id (default eleven_v4)   --stability n (default 0.75)
const fs=require('fs'),path=require('path');
const here=__dirname,out=path.join(here,'raw','voice','coffee-cabin');
const arg=n=>{const i=process.argv.indexOf(n);return i<0?null:process.argv[i+1]};
const DRY=process.argv.includes('--dry'),FORCE=process.argv.includes('--force'),ONLY=(arg('--only')||'').split(',').map(s=>s.trim()).filter(Boolean);
const MODEL=arg('--model')||'eleven_v4',STAB=+(arg('--stability')||.75);
const voices=JSON.parse(fs.readFileSync(path.join(here,'voices.json'),'utf8'));
// the Coffee Cabin's townsfolk reuse the K-JAM caller voices (the phone filter helps them sound different)
const CAST={MARJ:'MARJ',WALT:'WALT',RICK:'RICK',DANA:'DANA',BECKY:'Becky',DOLORES:'Rosa',DOT:'Linda',TYLER:'Marcus',NORM:'Doug',GUS:'Hal',EARL:'Dale',ERNIE:'Marco',GLEN:'Kevin'};
const voiceFor=sp=>{const k=CAST[sp];if(!k||!voices[k])throw new Error('no voice for '+sp);return voices[k]};

// numbers the way they're spoken
const ONES=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],TENS=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
function words(n){
  if(n<20)return ONES[n];if(n<100)return TENS[Math.floor(n/10)]+(n%10?'-'+ONES[n%10]:'');
  if(n<1000)return ONES[Math.floor(n/100)]+' hundred'+(n%100?' and '+words(n%100):'');
  return words(Math.floor(n/1000))+' thousand'+(n%1000?(n%1000<100?' and ':' ')+words(n%1000):'');
}
const year=y=>y>=2000&&y<2010?'two thousand'+(y%10?' '+ONES[y%10]:''):words(Math.floor(y/100))+' '+(y%100===0?'hundred':y%100<10?'oh '+ONES[y%100]:words(y%100));
function spoken(t){
  return t.replace(/K-JAM/g,'K-Jam')
    .replace(/\b(\d+)\.(\d)\b/g,(m,a,b)=>words(+a)+' point '+ONES[+b])               // 89.3
    .replace(/\b(\d{1,2}):(\d{2})\b/g,(m,h,mi)=>words(+h)+' '+(+mi<10?'oh '+ONES[+mi]:words(+mi))) // 7:15
    .replace(/'(\d{2})\b/g,(m,y)=>words(+y))                                         // '87
    .replace(/\b(1[89]\d{2}|20[0-2]\d)\b/g,m=>year(+m))                              // 1987, 2009
    .replace(/\b\d+\b/g,m=>words(+m))
    .replace(/(^|\] |[.!?] )([a-z])/g,(m,p,c)=>p+c.toUpperCase()); // a sentence that now starts with a number word
}

// the script: **clip-id · title** headers, then "- SPEAKER *(note)*: [tag] text" lines; town names in a table
const md=fs.readFileSync(path.join(here,'COFFEE-CABIN-SCRIPT.md'),'utf8').replace(/\r/g,'').split('\n');
const clips=new Map();let cur=null;
for(const L of md){
  let m=L.match(/^\*\*([a-z0-9-]+)(?:\s·[^*]*)?\*\*/);if(m){cur=m[1];clips.set(cur,[]);continue}
  m=L.match(/^\| ([a-z-]+) \| ([A-Z]+): (.*) \|$/);if(m){clips.set('townname-'+m[1],[[m[2],m[3]]]);cur=null;continue}
  m=L.match(/^- ([A-Z]+)(?: \*\([^)]*\)\*)?: (.*)$/);if(m&&cur){clips.get(cur).push([m[1],m[2]]);continue}
  if(/^#{1,3} /.test(L))cur=null;
}
for(const [k,v] of clips)if(!v.length)clips.delete(k);
const bits=[...clips].map(([id,lines])=>({id,inputs:lines.map(([sp,text])=>({text:spoken(text.replace(/\s*`\[cut\]`/,'')).trim(),voice_id:voiceFor(sp)}))}));
fs.mkdirSync(out,{recursive:true});
const todo=bits.filter(b=>(!ONLY.length||ONLY.includes(b.id))&&(FORCE||!fs.existsSync(path.join(out,b.id+'.mp3'))));
const chars=todo.reduce((s,b)=>s+b.inputs.reduce((t,i)=>t+i.text.length,0),0);
console.log(`${todo.length} clips to generate (${bits.length} in the script), ${chars} characters, model ${MODEL}, stability ${STAB}`);
if(DRY){
  console.log('casting: '+Object.entries(CAST).filter(([s,k])=>!['MARJ','WALT','RICK','DANA'].includes(s)).map(([s,k])=>s+' = '+k).join(', '));
  for(const b of todo)console.log('  '+b.id+' ('+b.inputs.length+' lines)');
  const sample=bits.filter(b=>/^(id-03|introb-woodstove-waltz|ad-03|call-08)$/.test(b.id));
  console.log('\nhow the numbers will be said:');for(const b of sample)for(const i of b.inputs)if(/hundred|thousand|point|nineteen|oh |eighty|forty|seven/.test(i.text))console.log('  '+b.id+': '+i.text);
  process.exit(0);
}
const key=fs.readFileSync(path.join(here,'elevenlabs-key.txt'),'utf8').trim();
(async()=>{
  let ok=0;const failed=[];
  for(const b of todo){
    const file=path.join(out,b.id+'.mp3');let done=false;
    for(let tr=1;tr<=2&&!done;tr++){
      try{
        const r=await fetch('https://api.elevenlabs.io/v1/text-to-dialogue?output_format=mp3_44100_128',{method:'POST',headers:{'xi-api-key':key,'Accept':'audio/mpeg','Content-Type':'application/json'},body:JSON.stringify({inputs:b.inputs,model_id:MODEL,settings:{stability:STAB}})});
        if(!r.ok)throw new Error(r.status+' '+(await r.text()).slice(0,200));
        fs.writeFileSync(file,Buffer.from(await r.arrayBuffer()));console.log(`  ok    ${b.id}  (${Math.round(fs.statSync(file).size/1024)} KB)`);ok++;done=true;
      }catch(e){if(tr===2){console.log(`  FAIL  ${b.id}  ${e.message}`);failed.push(b.id)}else await new Promise(r=>setTimeout(r,3000))}
    }
  }
  console.log(`done: ${ok} generated, ${failed.length} failed${failed.length?' ('+failed.join(', ')+')':''}`);
})();
