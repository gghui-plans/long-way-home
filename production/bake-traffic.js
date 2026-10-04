// Bakes the Quaternius car OBJs (CC0) into docs/models/traffic.bin: one small file the game loads for traffic.
// Each car is turned to face +z, scaled to a real length, sat on the ground and centred. Colours come from the MTL
// files; the body paint is stored as white with a paint flag, so the game can give every car its own colour
// without tinting the windows and tyres. Usage: node production/bake-traffic.js
const fs=require('fs'),path=require('path');
const src=path.join(__dirname,'raw/models/quaternius-cars'),out=path.join(__dirname,'../docs/models/traffic.bin');
// name, file, length (m), body paint materials (value = shade of the paint), colour overrides
const CARS=[
  ['sedan1','NormalCar1',4.5,{Blue:1}],
  ['sedan2','NormalCar2',4.5,{LightBlue:1}],
  ['suv','SUV',4.7,{White:1}],
  ['sport1','SportsCar',4.4,{Orange:1,DarkOrange:.85}],
  ['sport2','SportsCar2',4.4,{White:1}],
  ['taxi','Taxi',4.6,{}],
  ['cop','Cop',4.7,{}],
];
const OVERRIDE={Headlights:[1,.9,.68]}; // warm white lamps instead of orange
function readMtl(f){const m={};let cur=null;for(const l of fs.readFileSync(f,'utf8').split(/\r?\n/)){const p=l.trim().split(/\s+/);if(p[0]==='newmtl')cur=p[1];else if(p[0]==='Kd'&&cur)m[cur]=p.slice(1,4).map(Number)}return m}
const chunks=[],header={scale:2000,cars:[]};let off=0;
const push=(buf)=>{const pad=(4-buf.length%4)%4;chunks.push(buf,Buffer.alloc(pad));const o=off;off+=buf.length+pad;return o};
for(const [name,file,len,paint] of CARS){
  const mtl=readMtl(path.join(src,file+'.mtl')),V=[],N=[],tris=[];let mat='';
  for(const l of fs.readFileSync(path.join(src,file+'.obj'),'utf8').split(/\r?\n/)){
    const p=l.trim().split(/\s+/);
    if(p[0]==='v')V.push(p.slice(1,4).map(Number));else if(p[0]==='vn')N.push(p.slice(1,4).map(Number));else if(p[0]==='usemtl')mat=p[1];
    else if(p[0]==='f'){const c=p.slice(1).map(s=>{const q=s.split('/');return[+q[0]-1,+q[2]-1]});for(let k=1;k+1<c.length;k++)tris.push([c[0],c[k],c[k+1],mat])}
  }
  // orientation: length along the longer horizontal axis; the front is where the headlights are
  let mn=[1e9,1e9,1e9],mx=[-1e9,-1e9,-1e9];for(const v of V)for(let i=0;i<3;i++){mn[i]=Math.min(mn[i],v[i]);mx[i]=Math.max(mx[i],v[i])}
  const alongX=mx[0]-mn[0]>mx[2]-mn[2];let hx=0,hz=0,hn=0;
  for(const t of tris)if(t[3]==='Headlights')for(let k=0;k<3;k++){hx+=V[t[k][0]][0];hz+=V[t[k][0]][2];hn++}
  hx/=hn;hz/=hn;const cx=(mn[0]+mx[0])/2,cz=(mn[2]+mx[2])/2;
  // rotate so the front points to +z
  const rot=alongX?(hx>cx?([x,y,z])=>[-z,y,x]:([x,y,z])=>[z,y,-x]):(hz>cz?(v=>v):([x,y,z])=>[-x,y,-z]);
  const RV=V.map(rot);
  mn=[1e9,1e9,1e9];mx=[-1e9,-1e9,-1e9];for(const v of RV)for(let i=0;i<3;i++){mn[i]=Math.min(mn[i],v[i]);mx[i]=Math.max(mx[i],v[i])}
  const s=len/(mx[2]-mn[2]),ox=(mn[0]+mx[0])/2,oz=(mn[2]+mx[2])/2;
  // indexed vertices: position + material (flat shaded: the GPU works out face normals, so vertices are shared)
  const map=new Map(),pos=[],col=[],idx=[];
  for(const t of tris)for(let k=0;k<3;k++){
    const [vi]=t[k],key=vi+'/'+t[3];let id=map.get(key);
    if(id===undefined){
      id=pos.length/3;map.set(key,id);const v=RV[vi];
      pos.push((v[0]-ox)*s,(v[1]-mn[1])*s,(v[2]-oz)*s);
      const pk=paint[t[3]],kd=OVERRIDE[t[3]]||mtl[t[3]]||[.5,.5,.5];
      if(pk)col.push(pk,pk,pk,1);else col.push(kd[0],kd[1],kd[2],0);
    }
    idx.push(id);
  }
    const P=Int16Array.from(pos,v=>Math.round(v*header.scale)),C=Uint8Array.from(col,v=>Math.round(Math.min(1,v)*255)),I=Uint16Array.from(idx);
  const h=(mx[2]-mn[2])*s/2,w=(mx[0]-mn[0])*s/2,ht=(mx[1]-mn[1])*s;
  header.cars.push({name,hl:+h.toFixed(3),hw:+w.toFixed(3),h:+ht.toFixed(3),vc:pos.length/3,ic:idx.length,
    pos:push(Buffer.from(P.buffer)),col:push(Buffer.from(C.buffer)),idx:push(Buffer.from(I.buffer))});
  console.log(name.padEnd(7),'verts',pos.length/3,'tris',idx.length/3,'size',(len).toFixed(1)+'x'+(2*w).toFixed(2)+'x'+ht.toFixed(2),alongX?'(was along x)':'');
}
const hj=Buffer.from(JSON.stringify(header)),hpad=(4-(hj.length+4)%4)%4,hl=Buffer.alloc(4);hl.writeUInt32LE(hj.length+hpad);
fs.mkdirSync(path.dirname(out),{recursive:true});
fs.writeFileSync(out,Buffer.concat([hl,hj,Buffer.alloc(hpad,32),...chunks]));
console.log('wrote',out,fs.statSync(out).size,'bytes');
