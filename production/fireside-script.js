// Shared by generate-fireside-voices.js and process-fireside-voices.js: reads FIRESIDE-SCRIPT.md into clips,
// says which folder each clip belongs in, and spells numbers the way the hosts say them.
const fs=require('fs'),path=require('path');
const here=__dirname;

// the script: "## Batch N" headings, "**clip-id · title**" headers, then "- SPEAKER *(note)*: [tag] text" lines; village names in a table
function readScript(){
  const md=fs.readFileSync(path.join(here,'FIRESIDE-SCRIPT.md'),'utf8').replace(/\r/g,'').split('\n');
  const clips=new Map();let cur=null,batch=0;
  for(const L of md){
    let m=L.match(/^## Batch (\d+)/);if(m){batch=+m[1];cur=null;continue}
    m=L.match(/^\*\*([a-z0-9-]+)(?:\s·[^*]*)?\*\*/);if(m){cur=m[1];clips.set(cur,{batch,lines:[]});continue}
    m=L.match(/^\| ([a-z-]+) \| ([A-Z][A-Z ]*?): (.*) \|$/);if(m&&batch){clips.set('townname-'+m[1],{batch,lines:[{sp:m[2],note:'',text:m[3]}]});cur=null;continue}
    m=L.match(/^- ([A-Z][A-Z ]*?)(?: \*\(([^)]*)\)\*)?: (.*)$/);if(m&&cur){clips.get(cur).lines.push({sp:m[1],note:m[2]||'',text:m[3]});continue}
    if(/^#{1,3} /.test(L))cur=null;
  }
  for(const [k,v] of clips)if(!v.lines.length)clips.delete(k);
  return clips;
}

// where each clip's file goes: Rick and Dana's goodbyes and welcome-backs sit with K-JAM's voices, Marj and Walt's with the Cabin's
const folder=id=>/^kjam-/.test(id)?'':/^cabin-/.test(id)?'coffee-cabin':'fireside';
const HOSTS=['VERA','MOOSE'];

// numbers the way they're spoken (as in generate-coffee-voices.js, plus thousands with commas and K-JAM's 101.1)
const ONES=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],TENS=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
function words(n){
  if(n<20)return ONES[n];if(n<100)return TENS[Math.floor(n/10)]+(n%10?'-'+ONES[n%10]:'');
  if(n<1000)return ONES[Math.floor(n/100)]+' hundred'+(n%100?' and '+words(n%100):'');
  return words(Math.floor(n/1000))+' thousand'+(n%1000?(n%1000<100?' and ':' ')+words(n%1000):'');
}
const year=y=>y>=2000&&y<2010?'two thousand'+(y%10?' '+ONES[y%10]:''):words(Math.floor(y/100))+' '+(y%100===0?'hundred':y%100<10?'oh '+ONES[y%100]:words(y%100));
function spoken(t){
  return t.replace(/K-JAM/g,'K-Jam')
    .replace(/\b101\.1\b/g,'one oh one point one')                                       // K-JAM's frequency
    .replace(/\b(\d),(\d{3})\b/g,(m,a,b)=>{const n=+(a+b);return n%1000&&n%100===0?words(n/100)+' hundred':String(n)}) // 7,000; 1,600 is "sixteen hundred"
    .replace(/\b(\d+)\.(\d)\b/g,(m,a,b)=>words(+a)+' point '+ONES[+b])                 // 96.1
    .replace(/\b(\d{1,2}):(\d{2})\b/g,(m,h,mi)=>words(+h)+' '+(+mi<10?'oh '+ONES[+mi]:words(+mi)))
    .replace(/'(\d{2})\b/g,(m,y)=>words(+y))
    .replace(/\b(1[89]\d{2}|20[0-2]\d)\b/g,m=>year(+m))                                // 1911, 2011
    .replace(/\b\d+\b/g,m=>words(+m))
    .replace(/(^|\] |[.!?] )([a-z])/g,(m,p,c)=>p+c.toUpperCase());
}
module.exports={readScript,folder,HOSTS,spoken};
