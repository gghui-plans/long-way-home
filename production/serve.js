// Tiny static file server for local previews (no dependencies). Usage: node serve.js <root> <port>
const http=require('http'),fs=require('fs'),path=require('path');
const root=path.resolve(process.argv[2]||'.'),port=+(process.argv[3]||8765);
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript','.json':'application/json','.mp3':'audio/mpeg','.png':'image/png','.svg':'image/svg+xml',
  '.gltf':'model/gltf+json','.glb':'model/gltf-binary','.bin':'application/octet-stream','.obj':'text/plain','.mtl':'text/plain','.jpg':'image/jpeg'};
http.createServer((req,res)=>{
  if(req.method==='PUT'&&req.url.startsWith('/__shot/')){ // save a screenshot sent from the page (PNG data URL) into production/raw/shots (private)
    let b='';req.on('data',c=>b+=c);req.on('end',()=>{const n=req.url.slice(8).replace(/[^a-z0-9-]/gi,'');fs.writeFileSync(path.join(root,'production','raw','shots',n+'.png'),Buffer.from(b.split(',')[1],'base64'));res.end('ok')});return;
  }
  const p=path.join(root,decodeURIComponent(req.url.split('?')[0]));
  if(!p.startsWith(root)){res.writeHead(403);return res.end()}
  fs.stat(p,(e,s)=>{
    const f=!e&&s.isDirectory()?path.join(p,'index.html'):p;
    // assets (audio, models) live in docs/; fall back there so the source index.html at the root plays with real files
    fs.readFile(f,(err,d)=>{if(err&&!f.startsWith(path.join(root,'docs')))return fs.readFile(path.join(root,'docs',path.relative(root,f)),(e2,d2)=>e2?(res.writeHead(404),res.end('not found')):send(d2));if(err){res.writeHead(404);return res.end('not found')}send(d)});
    const send=d=>{res.writeHead(200,{'Content-Type':types[path.extname(f).toLowerCase()]||'application/octet-stream','Cache-Control':'no-store'});res.end(d)};
  });
}).listen(port,'127.0.0.1',()=>console.log('serving '+root+' on http://127.0.0.1:'+port));
