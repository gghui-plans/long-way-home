// Builds the Fireside's radio tables in index.html from FIRESIDE-SCRIPT.md (the words) and REGION-SONGS.md (titles and bands).
// Usage: node production/fireside-bits.js   (rewrites the FS_SONGS, FS_BITS and Sierra-handoff lines in index.html; run it after editing a line)
// Subtitles drop the [tags] and the [cut] marks; one subtitle line per script line, so they match the timings process-fireside-voices.js wrote.
const fs=require('fs'),path=require('path');
const {readScript}=require('./fireside-script');
const here=__dirname,html=path.join(here,'..','index.html');

// speaker keys: the hosts (V and O: M is K-JAM's male caller), the other stations' hosts, then callers by voice
const KEY={VERA:'V',MOOSE:'O',RICK:'R',DANA:'D',MARJ:'J',WALT:'W'};
const FEMALE=new Set(['DARLENE','PEARL','RANGER JO','EDNA']);
const clips=readScript(),used=new Set();
const text=t=>t.replace(/`?\[cut\]`?/g,'').replace(/\[[^\]]*\]\s*/g,'').replace(/\s+/g,' ').trim();
const line=l=>KEY[l.sp]?[KEY[l.sp],text(l.text)]:[FEMALE.has(l.sp)?'F':'M',text(l.text),l.sp];
function bit(id){const c=clips.get(id);if(!c)throw new Error('not in the script: '+id);used.add(id);return{id,lines:c.lines.map(line)}}
const ids=re=>[...clips.keys()].filter(k=>re.test(k)).sort();
const all=re=>ids(re).map(bit);
const keyed=(re,f)=>Object.fromEntries(ids(re).map(k=>[f(k),bit(k)]));

// the songs, in REGION-SONGS.md's order
const md=fs.readFileSync(path.join(here,'REGION-SONGS.md'),'utf8').replace(/\r/g,'');
const sec=md.slice(md.indexOf('### Settings for every High Sierra song'));
const songs=[];let cur=null;
for(const L of sec.split('\n')){
  let m=L.match(/^### \d+\. /);if(m){cur={};songs.push(cur);continue}
  if(!cur)continue;
  if((m=L.match(/^- \*\*Save as:\*\* (.+)\.mp3/)))cur.id=m[1];
  if((m=L.match(/^- \*\*Title:\*\* (.+)/)))cur.title=m[1].trim();
  if((m=L.match(/^- \*\*Band \(for the radio\):\*\* (.+)/)))cur.band=m[1].trim();
}
const FS_SONGS=songs.map(s=>({id:s.id,title:s.title,band:s.band,introLines:bit('intro-'+s.id).lines}));

const FS_BITS={
  welcome:bit('welcome-01'),
  handoff:{out:all(/^leave-/),in:all(/^arrive-south-/),from:{redwood:all(/^arrive-coast-/)}},
  id:all(/^id-/),after:all(/^after-/),red:all(/^red-/),
  clock:keyed(/^clock-/,k=>k.slice(6)),
  introb:keyed(/^introb-/,k=>k.slice(7)),
  traffic:all(/^chains-/),sigalert:all(/^plow-/),shortcut:all(/^stash-/),ad:all(/^ad-/),facts:all(/^snow-/),call:all(/^call-/),
  town:all(/^town-/),townname:keyed(/^townname-/,k=>k.slice(9)),
  place:Object.fromEntries(['pines','lake','snowshed','mainstreet','cabins','skihill','rink','sledhill'].map(p=>[p,all(new RegExp('^'+p+'-'))])),
  pier:all(/^summit-/), // the summit pull-out takes the pier's slot
  steer:all(/^steer-/),speed:{fast:bit('speed-fast'),slow:bit('speed-slow')},postcard:all(/^postcard-/),
  milestone:keyed(/^milestone-/,k=>String(+k.slice(10))),record:bit('record-01'),back:all(/^back-/),
  request:all(/^request-/),plug:bit('plug-01'),
  focus:keyed(/^focus-/,k=>k.slice(6)),
  holiday:all(/^holiday-/),
};
const hand=`VBITS.handoff.to={sierra:${JSON.stringify(all(/^kjam-out-sierra-/))}};VBITS.handoff.from={sierra:${JSON.stringify(all(/^kjam-return-sierra-/))}};`+
  `CC_BITS.handoff.to={sierra:${JSON.stringify(all(/^cabin-out-sierra-/))}};CC_BITS.handoff.from={sierra:${JSON.stringify(all(/^cabin-return-sierra-/))}};`+
  ' // Rick and Dana, Marj and Walt: goodbyes to the mountains and welcome-backs from them (by production/fireside-bits.js)';

const left=[...clips.keys()].filter(k=>!used.has(k));
if(left.length)throw new Error('clips in the script with no slot: '+left.join(' '));
for(const s of FS_SONGS)if(!s.title||!s.band||!FS_BITS.introb[s.id])throw new Error('song missing a title, band or story intro: '+s.id);

const src=fs.readFileSync(html,'utf8'),eol=src.includes('\r\n')?'\r\n':'\n',L=src.split(eol);
const put=(start,body)=>{const i=L.findIndex(l=>l.startsWith(start));if(i<0)throw new Error('no line in index.html starts with '+start);L[i]=body};
put('const FS_SONGS=','const FS_SONGS='+JSON.stringify(FS_SONGS)+';');
put('const FS_BITS=','const FS_BITS='+JSON.stringify(FS_BITS)+';');
put('VBITS.handoff.to=',hand);
fs.writeFileSync(html,L.join(eol));
console.log(`index.html: ${FS_SONGS.length} songs, ${used.size} clips`);
