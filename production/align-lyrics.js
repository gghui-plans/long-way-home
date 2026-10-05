// Builds docs/audio/music/lyrics.json: when each lyric line starts in the part of each song the game plays (the first 1:45).
// Word timings come from whisper.cpp (production/raw/tools/whisper/work/<id>.json, see AUDIO-WORKFLOW.md); the words themselves
// come from LYRICS.md, so whisper mishearing a word doesn't matter. The two are matched with a forgiving sequence alignment.
// Usage: node production/align-lyrics.js
const fs=require('fs'),path=require('path');
const here=__dirname,work=path.join(here,'raw/tools/whisper/work'),out=path.join(here,'../docs/audio/music/lyrics.json');
const PLAYED=103; // seconds of each song the game plays before its fade

// lyric blocks from LYRICS.md, keyed by the file each song is saved as
const md=fs.readFileSync(path.join(here,'LYRICS.md'),'utf8').replace(/\r\n/g,'\n'),blocks={};
for(const part of md.split('**Save as:** ').slice(1)){ // only the block inside each song's own section (instrumentals have none)
  const id=part.slice(0,part.indexOf('.mp3')),m=part.split(/\n#{2,3} /)[0].match(/```\n([\s\S]*?)```/);if(m)blocks[id]=m[1];
}
const lyricLines=b=>b.split('\n').map(s=>s.trim()).filter(s=>s&&!/^\[.*\]$/.test(s));

const norm=w=>w.toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]/g,'');
function lev(a,b){const d=[...Array(b.length+1).keys()];for(let i=1;i<=a.length;i++){let p=d[0];d[0]=i;for(let j=1;j<=b.length;j++){const t=d[j];d[j]=Math.min(d[j]+1,d[j-1]+1,p+(a[i-1]===b[j-1]?0:1));p=t}}return d[b.length]}
const sim=(a,b)=>a===b?3:(a.length>=4&&b.length>=4&&lev(a,b)<=1)||(a.length>=3&&b.length>=3&&(a.startsWith(b)||b.startsWith(a)))?1.5:-1;

function align(lines,words){ // global alignment; the lyrics may run past the end of the clip for free
  const L=[];lines.forEach((l,li)=>l.split(/\s+/).map(norm).filter(Boolean).forEach((w,wi)=>L.push({w,li,wi})));
  const n=L.length,m=words.length,G=-.6,S=new Float32Array((n+1)*(m+1)),T=new Uint8Array((n+1)*(m+1)),at=(i,j)=>i*(m+1)+j;
  for(let i=1;i<=n;i++){S[at(i,0)]=i*G;T[at(i,0)]=1}for(let j=1;j<=m;j++){S[at(0,j)]=j*G;T[at(0,j)]=2}
  for(let i=1;i<=n;i++)for(let j=1;j<=m;j++){
    const d=S[at(i-1,j-1)]+sim(L[i-1].w,words[j-1].w),u=S[at(i-1,j)]+G,l=S[at(i,j-1)]+G;
    if(d>=u&&d>=l){S[at(i,j)]=d;T[at(i,j)]=0}else if(u>=l){S[at(i,j)]=u;T[at(i,j)]=1}else{S[at(i,j)]=l;T[at(i,j)]=2}
  }
  let bi=n,bj=m;for(let i=0;i<=n;i++)if(S[at(i,m)]>S[at(bi,m)])bi=i; // lyrics after the last heard word cost nothing
  const hit=new Array(n).fill(null);let i=bi,j=bj;
  while(i>0&&j>0){const t=T[at(i,j)];if(t===0){if(sim(L[i-1].w,words[j-1].w)>0)hit[i-1]=words[j-1].t;i--;j--}else if(t===1)i--;else j--}
  return{L,hit};
}

const result={},report=[];
for(const f of fs.readdirSync(path.join(here,'../docs/audio/music')).filter(f=>f.endsWith('.mp3'))){
  const id=f.replace('.mp3',''),block=blocks[id];
  const over=path.join(work,id+'.lines.json');
  if(fs.existsSync(over)){result[id]=JSON.parse(fs.readFileSync(over,'utf8')).lines.filter(l=>l[0]<PLAYED);report.push(id.padEnd(26)+'hand-timed, '+result[id].length+' lines');continue}
  const jf=path.join(work,id+'.json');
  const words=fs.existsSync(jf)?JSON.parse(fs.readFileSync(jf,'utf8')).transcription.filter(s=>!/[♪\[\(]|music\)/i.test(s.text)).map(s=>({w:norm(s.text),t:s.offsets.from/1000})).filter(x=>x.w):[];
  if(!block||!lyricLines(block).length||words.length<8){result[id]='instrumental';report.push(id.padEnd(26)+'instrumental');continue}
  const lines=lyricLines(block),{L,hit}=align(lines,words);
  // a line starts at its first matched word (pulled back by the words before it); unmatched lines are spread between their neighbours
  const start=lines.map((_,li)=>{const k=L.findIndex((x,q)=>x.li===li&&hit[q]!=null);if(k<0)return null;return Math.max(0,hit[k]-L[k].wi*.4)});
  const lastHeard=Math.max(...hit.filter(t=>t!=null));
  for(let li=0;li<lines.length;li++)if(start[li]==null){
    let a=li-1;while(a>=0&&start[a]==null)a--;let b=li+1;while(b<lines.length&&start[b]==null)b++;
    if(a>=0&&b<lines.length)start[li]=start[a]+(start[b]-start[a])*(li-a)/(b-a);
  }
  const res=[];for(let li=0;li<lines.length;li++){const t=start[li];if(t==null||t>=PLAYED||t>lastHeard+1)continue;if(res.length&&t<=res[res.length-1][0])continue;res.push([+t.toFixed(2),lines[li]])}
  const matched=hit.filter(t=>t!=null).length,rate=matched/Math.max(1,L.filter(x=>start[x.li]!=null&&start[x.li]<PLAYED).length);
  if(rate<.8){ // Suno strayed from the written order (repeated a chorus, dropped a verse): follow what was actually sung instead.
    // Carve the heard words into runs and label each run with the lyric line it matches best, choosing the best overall split.
    const ws=words.filter(x=>x.t<PLAYED+3),N=ws.length,LW=lines.map(l=>l.split(/\s+/).map(norm).filter(Boolean));
    const fit=(i,k,li)=>{const lw=LW[li];let sc=0;for(let q=i;q<i+k;q++)sc+=Math.max(0,...lw.map(w=>sim(ws[q].w,w)))/3;return sc/Math.max(k,lw.length)};
    const best=new Float32Array(N+1).fill(-1e9),from=new Array(N+1);best[0]=0;
    for(let i=1;i<=N;i++){
      if(best[i-1]-.3>best[i]){best[i]=best[i-1]-.3;from[i]=null} // a stray word
      LW.forEach((lw,li)=>{for(let k=Math.max(2,lw.length-2);k<=lw.length+2&&k<=i;k++){const f=fit(i-k,k,li);if(f<.45)continue;const v=best[i-k]+f*k-.5;if(v>best[i]){best[i]=v;from[i]=[i-k,li]}}});
    }
    const segs=[];for(let i=N;i>0;){const f=from[i];if(!f){i--;continue}segs.push([ws[f[0]].t,lines[f[1]]]);i=f[0]}
    res.length=0;for(const [t,l] of segs.reverse())if(t<PLAYED)res.push([+t.toFixed(2),l]);
  }
  result[id]=res;
  report.push(id.padEnd(26)+String(res.length).padStart(3)+' lines, '+Math.round(100*matched/Math.max(1,L.filter((x,q)=>start[x.li]!=null&&start[x.li]<PLAYED).length))+'% words matched | '+res.slice(0,3).map(r=>r[0].toFixed(1)+' '+r[1]).join(' / '));
}
fs.writeFileSync(out,JSON.stringify(result));
console.log(report.join('\n'));console.log('wrote',out,fs.statSync(out).size,'bytes');
