// Generates the Fireside voice files (96.1, Vera and Moose) with the ElevenLabs text-to-dialogue API: one MP3 per clip,
// in production/raw/voice/fireside/. Reads FIRESIDE-SCRIPT.md (via fireside-script.js) and the voice IDs from voices.json.
// The API key is read from production/elevenlabs-key.txt (never committed, never printed). Numbers are spelled out here.
//
//   node generate-fireside-voices.js --dry               list the clips and the character count, without calling the API
//   node generate-fireside-voices.js --batch 1-4         generate the clips in script batches 1 to 4 that don't exist yet
//   node generate-fireside-voices.js --only a,b          just these clips (e.g. --only id-01,snow-08)
//   node generate-fireside-voices.js --skip a,b          leave these out
//   node generate-fireside-voices.js --show a,b          print those clips exactly as they'd be sent
//   --force  regenerate even if the file exists (retakes)   --model id (default eleven_v4)   --stability n (default 0.75)
// Spends credits: about one per character sent. Check the balance first (WORKFLOW.md).
const fs=require('fs'),path=require('path');
const {readScript,spoken}=require('./fireside-script.js');
const here=__dirname,out=path.join(here,'raw','voice','fireside');
const arg=n=>{const i=process.argv.indexOf(n);return i<0?null:process.argv[i+1]};
const list=n=>(arg(n)||'').split(',').map(s=>s.trim()).filter(Boolean);
const DRY=process.argv.includes('--dry'),FORCE=process.argv.includes('--force'),ONLY=list('--only'),SKIP=list('--skip'),SHOW=list('--show');
const bm=(arg('--batch')||'1-99').split('-').map(Number),B0=bm[0],B1=bm[1]||bm[0];
const MODEL=arg('--model')||'eleven_v4',STAB=+(arg('--stability')||.75);
const voices=JSON.parse(fs.readFileSync(path.join(here,'voices.json'),'utf8'));
// the hosts and the other stations' hosts use their own voices; callers reuse K-JAM caller voices (cast 2026-10-29 from their library labels)
const CAST={VERA:'VERA',MOOSE:'MOOSE',RICK:'RICK',DANA:'DANA',MARJ:'MARJ',WALT:'WALT',
  HANK:'Marco',DARLENE:'June',BRAD:'Marcus',PEARL:'Linda',CARL:'Cousin Kevin','BIG MOOSE':'Hal',STEVE:'Doug',LEON:'Kevin','RANGER JO':'Brenda',EDNA:'Rosa'};
const voiceFor=sp=>{const k=CAST[sp];if(!k||!voices[k])throw new Error('no voice cast for '+sp+' (add it to CAST)');return voices[k]};

const clips=readScript();
if(SHOW.length){for(const [id,c] of clips)if(SHOW.includes(id))for(const l of c.lines)console.log(id+': '+l.sp+': '+spoken(l.text.replace(/\s*`\[cut\]`/,'')).trim());process.exit(0)}
const inBatch=c=>c.batch>=B0&&c.batch<=B1;
const todo=[...clips].filter(([id,c])=>(ONLY.length?ONLY.includes(id):inBatch(c))&&!SKIP.includes(id)&&(FORCE||!fs.existsSync(path.join(out,id+'.mp3'))))
  .map(([id,c])=>({id,inputs:c.lines.map(l=>({text:spoken(l.text.replace(/\s*`\[cut\]`/,'')).trim(),voice_id:voiceFor(l.sp)}))}));
const chars=todo.reduce((s,b)=>s+b.inputs.reduce((t,i)=>t+i.text.length,0),0);
console.log(`${todo.length} clips to generate (${clips.size} in the script), ${chars} characters, model ${MODEL}, stability ${STAB}`);
if(DRY){for(const b of todo)console.log('  '+b.id+' ('+b.inputs.length+' lines)');process.exit(0)}
fs.mkdirSync(out,{recursive:true});
const key=fs.readFileSync(path.join(here,'elevenlabs-key.txt'),'utf8').trim();
(async()=>{
  let ok=0,sent=0,stop=false;const failed=[];
  for(const b of todo){
    if(stop)break;
    const file=path.join(out,b.id+'.mp3');let done=false;
    for(let tr=1;tr<=2&&!done&&!stop;tr++){
      try{
        const r=await fetch('https://api.elevenlabs.io/v1/text-to-dialogue?output_format=mp3_44100_128',{method:'POST',headers:{'xi-api-key':key,'Accept':'audio/mpeg','Content-Type':'application/json'},body:JSON.stringify({inputs:b.inputs,model_id:MODEL,settings:{stability:STAB}})});
        if(!r.ok){const t=(await r.text()).slice(0,200);if(/quota|credit/i.test(t)){console.log('  STOP  out of credits: '+t);failed.push(b.id);stop=true;break}throw new Error(r.status+' '+t)}
        fs.writeFileSync(file,Buffer.from(await r.arrayBuffer()));sent+=b.inputs.reduce((t,i)=>t+i.text.length,0);
        console.log(`  ok    ${b.id}  (${Math.round(fs.statSync(file).size/1024)} KB)`);ok++;done=true;
      }catch(e){if(tr===2){console.log(`  FAIL  ${b.id}  ${e.message}`);failed.push(b.id)}else await new Promise(r=>setTimeout(r,3000))}
    }
  }
  console.log(`done: ${ok} generated (${sent} characters), ${failed.length} failed${failed.length?' ('+failed.join(', ')+')':''}`);
})();
