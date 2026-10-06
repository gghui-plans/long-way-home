// Re-times the subtitle lines of long voice bits from the words actually spoken, and patches docs/audio/voice/timings.json.
// process-voices.ps1 places line starts by pauses and pitch, which breaks down past ~8 lines (long caller scenes).
// This runs whisper.cpp on the processed clip and matches its words to the script lines in PRODUCTION-PACK.md.
// Usage: node production/time-voices.js call-05 call-06 ...   (run after process-voices.ps1, which rewrites timings.json)
const fs=require('fs'),path=require('path'),{execFileSync}=require('child_process');
const here=__dirname,root=path.join(here,'..'),wdir=path.join(here,'raw/tools/whisper');
const ff=path.join(process.env.LOCALAPPDATA,'Microsoft/WinGet/Links/ffmpeg.exe'),tmp=path.join(process.env.TEMP,'claude','voice-time');
fs.mkdirSync(tmp,{recursive:true});
const tfile=path.join(root,'docs/audio/voice/timings.json'),T=JSON.parse(fs.readFileSync(tfile,'utf8'));

// script lines per bit, from the pack's Part 1 tables
const pack=fs.readFileSync(path.join(here,'PRODUCTION-PACK.md'),'utf8'),part1=pack.slice(0,pack.indexOf('## Part 2')),lines={};
for(const m of part1.matchAll(/^\| ([a-z]+(?:-[a-z0-9]+)+) \| [^|]+ \| ([^|]+) \| [^|]+ \|\r?$/gm)){
  const bit=/^(townname|intro)-/.test(m[1])?m[1]:m[1].replace(/-\d+$/,'');(lines[bit]=lines[bit]||[]).push(m[2].trim().replace(/\[[^\]]*\]/g,''));
}
const norm=w=>w.toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]/g,'');
function lev(a,b){const d=[...Array(b.length+1).keys()];for(let i=1;i<=a.length;i++){let p=d[0];d[0]=i;for(let j=1;j<=b.length;j++){const t=d[j];d[j]=Math.min(d[j]+1,d[j-1]+1,p+(a[i-1]===b[j-1]?0:1));p=t}}return d[b.length]}
const sim=(a,b)=>a===b?3:(a.length>=4&&b.length>=4&&lev(a,b)<=1)||(a.length>=3&&b.length>=3&&(a.startsWith(b)||b.startsWith(a)))?1.5:-1;

for(const bit of process.argv.slice(2)){
  const ls=lines[bit];if(!ls){console.log(bit,'not in the pack');continue}
  const wav=path.join(tmp,bit+'.wav'),out=path.join(tmp,bit);
  execFileSync(ff,['-hide_banner','-loglevel','error','-y','-i',path.join(root,'docs/audio/voice',bit+'.mp3'),'-ar','16000','-ac','1','-c:a','pcm_s16le',wav]);
  execFileSync(path.join(wdir,'bin/Release/whisper-cli.exe'),['-m',path.join(wdir,'ggml-small.en.bin'),'-f',wav,'-ml','1','-sow','-oj','-of',out,'-np','-t','8'],{stdio:'ignore'});
  const words=JSON.parse(fs.readFileSync(out+'.json','utf8')).transcription.map(s=>({w:norm(s.text),t:s.offsets.from/1000})).filter(x=>x.w);
  // global alignment of script words to heard words
  const L=[];ls.forEach((l,li)=>l.split(/\s+/).map(norm).filter(Boolean).forEach((w,wi)=>L.push({w,li,wi})));
  const n=L.length,m=words.length,G=-.6,S=new Float32Array((n+1)*(m+1)),B=new Uint8Array((n+1)*(m+1)),at=(i,j)=>i*(m+1)+j;
  for(let i=1;i<=n;i++){S[at(i,0)]=i*G;B[at(i,0)]=1}for(let j=1;j<=m;j++){S[at(0,j)]=j*G;B[at(0,j)]=2}
  for(let i=1;i<=n;i++)for(let j=1;j<=m;j++){const d=S[at(i-1,j-1)]+sim(L[i-1].w,words[j-1].w),u=S[at(i-1,j)]+G,l=S[at(i,j-1)]+G;
    if(d>=u&&d>=l){S[at(i,j)]=d;B[at(i,j)]=0}else if(u>=l){S[at(i,j)]=u;B[at(i,j)]=1}else{S[at(i,j)]=l;B[at(i,j)]=2}}
  const hit=new Array(n).fill(null);for(let i=n,j=m;i>0&&j>0;){const b=B[at(i,j)];if(b===0){if(sim(L[i-1].w,words[j-1].w)>0)hit[i-1]=words[j-1].t;i--;j--}else if(b===1)i--;else j--}
  // a line starts at its first matched word, pulled back by the words before it; wordless or missed lines go between their neighbours
  const st=ls.map((_,li)=>{const k=L.findIndex((x,q)=>x.li===li&&hit[q]!=null);return k<0?null:Math.max(0,hit[k]-L[k].wi*.35)});st[0]=0;
  for(let li=1;li<st.length;li++)if(st[li]!=null&&st[li]<=st[li-1])st[li]=null; // out of order: treat as missed
  for(let li=1;li<st.length;li++)if(st[li]==null){let b=li+1;while(b<st.length&&st[b]==null)b++;const end=b<st.length?st[b]:T[bit].d-.8;st[li]=st[li-1]+(end-st[li-1])/(b-li+1)}
  const matched=hit.filter(x=>x!=null).length;
  T[bit].t=st.map(x=>+x.toFixed(2));
  console.log(bit.padEnd(9),Math.round(100*matched/n)+'% words matched |',T[bit].t.join(' '));
}
fs.writeFileSync(tfile,JSON.stringify(T));
