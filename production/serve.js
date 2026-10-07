// Tiny static file server for local previews (no dependencies). Usage: node serve.js <root> <port> [host]
// host 0.0.0.0 makes it reachable from a phone on the same wifi (screenshot saving stays limited to this computer)
const http=require('http'),fs=require('fs'),path=require('path');
const root=path.resolve(process.argv[2]||'.'),port=+(process.argv[3]||8765),host=process.argv[4]||'127.0.0.1';
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript','.json':'application/json','.mp3':'audio/mpeg','.png':'image/png','.svg':'image/svg+xml',
  '.gltf':'model/gltf+json','.glb':'model/gltf-binary','.bin':'application/octet-stream','.obj':'text/plain','.mtl':'text/plain','.jpg':'image/jpeg'};
http.createServer((req,res)=>{
  if(req.method==='PUT'&&req.url.startsWith('/__shot/')){if(!/^(::1|127.|::ffff:127.)/.test(req.socket.remoteAddress||'')){res.writeHead(403);return res.end()} // save a screenshot sent from the page (PNG data URL) into production/raw/shots (private)
    let b='';req.on('data',c=>b+=c);req.on('end',()=>{const n=req.url.slice(8).replace(/[^a-z0-9-]/gi,'');fs.writeFileSync(path.join(root,'production','raw','shots',n+'.png'),Buffer.from(b.split(',')[1],'base64'));res.end('ok')});return;
  }
  const p=path.join(root,decodeURIComponent(req.url.split('?')[0]));
  if(!p.startsWith(root)){res.writeHead(403);return res.end()}
  fs.stat(p,(e,s)=>{
    const f=!e&&s.isDirectory()?path.join(p,'index.html'):p;
    // assets (audio, models) live in docs/; fall back there so the source index.html at the root plays with real files
    fs.readFile(f,(err,d)=>{if(err&&!f.startsWith(path.join(root,'docs')))return fs.readFile(path.join(root,'docs',path.relative(root,f)),(e2,d2)=>e2?(res.writeHead(404),res.end('not found')):send(d2));if(err){res.writeHead(404);return res.end('not found')}send(d)});
    // the source index.html is artifact-format (no head); give it the same charset and phone viewport tags build.ps1 adds, so phones lay it out like the live site
    const HEAD='<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">';
    const send=d=>{if(path.extname(f)==='.html'&&!/^\s*<!doctype/i.test(d.toString('utf8',0,64)))d=Buffer.concat([Buffer.from(HEAD),d]);res.writeHead(200,{'Content-Type':types[path.extname(f).toLowerCase()]||'application/octet-stream','Cache-Control':'no-store'});res.end(d)};
  });
}).listen(port,host,()=>console.log('serving '+root+' on http://'+host+':'+port));
