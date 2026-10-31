// Turns the raw Fireside clips (production/raw/voice/fireside/) into game-ready files, plus timings.json for the subtitles.
// The same steps as process-coffee-voices.js: each multi-line clip is timed from the words actually spoken (whisper.cpp),
// with each line start snapped back to the pause just before it, then the processing notes are applied:
//   callers (anyone but Vera and Moose in a call-* clip) and *(on the phone)*   phone line
//   *(in the background)*                                                       quieter, further from the phone
//   *(outside)*                                                                 muffled and far off
// Files go where fireside-script.js says: Rick and Dana's (kjam-*) with K-JAM's in docs/audio/voice/, Marj and Walt's
// (cabin-*) in docs/audio/voice/coffee-cabin/, everything else in docs/audio/voice/fireside/. Each folder keeps its own timings.json.
//   node production/process-fireside-voices.js              every recorded clip not processed yet
//   node production/process-fireside-voices.js --all        every recorded clip, again
//   node production/process-fireside-voices.js id-01 ...    just these
const fs=require('fs'),path=require('path'),{execFileSync,spawnSync}=require('child_process');
const {readScript,folder,HOSTS}=require('./fireside-script.js');
const here=__dirname,root=path.join(here,'..'),raw=path.join(here,'raw/voice/fireside'),wdir=path.join(here,'raw/tools/whisper');
const bin=path.join(process.env.LOCALAPPDATA,'Microsoft/WinGet/Links'),ff=path.join(bin,'ffmpeg.exe'),fp=path.join(bin,'ffprobe.exe');
const tmp=path.join(process.env.TEMP,'claude','fireside-voice');fs.mkdirSync(tmp,{recursive:true});
const outDir=id=>path.join(root,'docs/audio/voice',folder(id));

const clips=new Map([...readScript()].map(([id,c])=>[id,c.lines]));
const fx=(id,l)=>/outside/.test(l.note)?'outside':/background/.test(l.note)?'background':/phone/.test(l.note)||(/^call-/.test(id)&&!HOSTS.includes(l.sp))?'phone':'';
const CHAIN={phone:'highpass=f=320,lowpass=f=3400',background:'highpass=f=400,lowpass=f=2400,volume=0.4',outside:'lowpass=f=1500,aecho=0.8:0.6:70|140:0.35|0.2,volume=0.85'};

// word matching, as in time-voices.js and process-coffee-voices.js
const norm=w=>w.toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]/g,'');
function lev(a,b){const d=[...Array(b.length+1).keys()];for(let i=1;i<=a.length;i++){let p=d[0];d[0]=i;for(let j=1;j<=b.length;j++){const t=d[j];d[j]=Math.min(d[j]+1,d[j-1]+1,p+(a[i-1]===b[j-1]?0:1));p=t}}return d[b.length]}
const sim=(a,b)=>a===b?3:(a.length>=4&&b.length>=4&&lev(a,b)<=1)||(a.length>=3&&b.length>=3&&(a.startsWith(b)||b.startsWith(a)))?1.5:-1;
function lineStarts(ls,words,D){
  const L=[];ls.forEach((l,li)=>l.split(/\s+/).map(norm).filter(Boolean).forEach((w,wi)=>L.push({w,li,wi})));
  const n=L.length,m=words.length,G=-.6,S=new Float32Array((n+1)*(m+1)),B=new Uint8Array((n+1)*(m+1)),at=(i,j)=>i*(m+1)+j;
  for(let i=1;i<=n;i++){S[at(i,0)]=i*G;B[at(i,0)]=1}for(let j=1;j<=m;j++){S[at(0,j)]=j*G;B[at(0,j)]=2}
  for(let i=1;i<=n;i++)for(let j=1;j<=m;j++){const d=S[at(i-1,j-1)]+sim(L[i-1].w,words[j-1].w),u=S[at(i-1,j)]+G,l=S[at(i,j-1)]+G;
    if(d>=u&&d>=l){S[at(i,j)]=d;B[at(i,j)]=0}else if(u>=l){S[at(i,j)]=u;B[at(i,j)]=1}else{S[at(i,j)]=l;B[at(i,j)]=2}}
  const hit=new Array(n).fill(null);for(let i=n,j=m;i>0&&j>0;){const b=B[at(i,j)];if(b===0){if(sim(L[i-1].w,words[j-1].w)>0)hit[i-1]=words[j-1].t;i--;j--}else if(b===1)i--;else j--}
  const st=ls.map((_,li)=>{const k=L.findIndex((x,q)=>x.li===li&&hit[q]!=null);return k<0?null:Math.max(0,hit[k]-L[k].wi*.35)});st[0]=0;
  for(let li=1;li<st.length;li++)if(st[li]!=null&&st[li]<=st[li-1])st[li]=null;
  for(let li=1;li<st.length;li++)if(st[li]==null){let b=li+1;while(b<st.length&&st[b]==null)b++;const end=b<st.length?st[b]:D-.8;st[li]=st[li-1]+(end-st[li-1])/(b-li+1)}
  return{st,matched:Math.round(100*hit.filter(x=>x!=null).length/Math.max(1,n))};
}

const T={},tfile=id=>path.join(outDir(id),'timings.json');
const tim=id=>{const f=tfile(id);if(!T[f]){try{T[f]=JSON.parse(fs.readFileSync(f,'utf8'))}catch(e){T[f]={}}}return T[f]};
const ALL=process.argv.includes('--all'),want=process.argv.slice(2).filter(a=>!a.startsWith('--'));
const done=id=>{const o=path.join(outDir(id),id+'.mp3'),r=path.join(raw,id+'.mp3');return tim(id)[id]&&fs.existsSync(o)&&fs.statSync(o).mtimeMs>fs.statSync(r).mtimeMs};
const todo=[...clips.keys()].filter(id=>fs.existsSync(path.join(raw,id+'.mp3'))&&(want.length?want.includes(id):ALL||!done(id)));
for(const id of want)if(!clips.has(id))console.log('not in the script:',id);
const low=[];
function save(file,txt){for(let k=0;;k++){try{return fs.writeFileSync(file,txt)}catch(e){if(k>=20)throw e;Atomics.wait(new Int32Array(new SharedArrayBuffer(4)),0,0,250)}}} // the game may be reading it right then
for(const id of todo){
  const ls=clips.get(id),src=path.join(raw,id+'.mp3');fs.mkdirSync(outDir(id),{recursive:true});
  const D=+execFileSync(fp,['-v','error','-show_entries','format=duration','-of','csv=p=0',src]).toString().trim();
  let t=[0],note='';
  if(ls.length>1){
    const wav=path.join(tmp,id+'.wav'),o=path.join(tmp,id);
    execFileSync(ff,['-hide_banner','-loglevel','error','-y','-i',src,'-ar','16000','-ac','1','-c:a','pcm_s16le',wav]);
    execFileSync(path.join(wdir,'bin/Release/whisper-cli.exe'),['-m',path.join(wdir,'ggml-small.en.bin'),'-f',wav,'-ml','1','-sow','-oj','-of',o,'-np','-t','8'],{stdio:'ignore'});
    const words=JSON.parse(fs.readFileSync(o+'.json','utf8')).transcription.map(s=>({w:norm(s.text),t:s.offsets.from/1000})).filter(x=>x.w);
    const r=lineStarts(ls.map(l=>l.text.replace(/\[[^\]]*\]/g,'').replace(/`\[cut\]`/,'')),words,D);
    const s=spawnSync(ff,['-hide_banner','-i',src,'-af','silencedetect=noise=-40dB:d=0.15','-f','null','-']).stderr.toString();
    const ends=[...s.matchAll(/silence_end: ([0-9.]+)/g)].map(m=>+m[1]);
    t=r.st.map((x,i)=>{if(!i)return 0;const e=ends.filter(e=>e>x-.9&&e<x+.25).sort((a,b)=>Math.abs(a-x)-Math.abs(b-x))[0];return +(e!=null?Math.max(0,e-.05):x).toFixed(2)});
    for(let i=1;i<t.length;i++)if(t[i]<=t[i-1]+.2)t[i]=+(r.st[i]).toFixed(2);
    note=r.matched+'% words';if(r.matched<60)low.push(id);
  }
  const seg=i=>`between(t,${t[i]},${i<t.length-1?t[i+1]:D+1})`,used=[...new Set(ls.map(l=>fx(id,l)).filter(Boolean))];
  const out=path.join(outDir(id),id+'.mp3'),mid=path.join(tmp,id+'-fx.wav');
  if(used.length){
    const on=k=>ls.map((l,i)=>fx(id,l)===k?seg(i):null).filter(Boolean).join('+');
    const all=ls.map((l,i)=>fx(id,l)?seg(i):null).filter(Boolean).join('+');
    let g=`[0:a]asplit=${used.length+1}[d]${used.map((_,i)=>'[s'+i+']').join('')};[d]volume=0:enable='${all}'[dd];`;
    used.forEach((k,i)=>{g+=`[s${i}]${CHAIN[k]},volume=0:enable='not(${on(k)})'[f${i}];`});
    g+=`[dd]${used.map((_,i)=>'[f'+i+']').join('')}amix=inputs=${used.length+1}:normalize=0`;
    execFileSync(ff,['-hide_banner','-loglevel','error','-y','-i',src,'-filter_complex',g,'-ac','1','-c:a','pcm_s16le',mid]);
  }else execFileSync(ff,['-hide_banner','-loglevel','error','-y','-i',src,'-ac','1','-c:a','pcm_s16le',mid]);
  const lo=spawnSync(ff,['-hide_banner','-i',mid,'-af','loudnorm=print_format=json','-f','null','-']).stderr.toString(),j=JSON.parse(lo.slice(lo.lastIndexOf('{'),lo.lastIndexOf('}')+1));
  const gain=Math.min(-17-(+j.input_i),-1.5-(+j.input_tp));
  execFileSync(ff,['-hide_banner','-loglevel','error','-y','-i',mid,'-af','volume='+gain.toFixed(2)+'dB','-ar','44100','-ac','1','-c:a','libmp3lame','-b:a','64k',out]);
  tim(id)[id]={d:+D.toFixed(2),t};save(tfile(id),JSON.stringify(tim(id)));
  console.log(id.padEnd(30),D.toFixed(1).padStart(5)+'s',String(ls.length).padStart(2)+' lines',(used.length?'['+used.join(',')+'] ':'')+note,'|',t.join(' '));
}
console.log(`done: ${todo.length} clips${low.length?'; under 60% of words heard, check by ear: '+low.join(', '):''}`);
