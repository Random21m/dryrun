// Draws the DRYRUN die (logo.svg). Run: node tools/logo.js  (writes die.svg in the current folder; copy it to logo.svg)
const fs=require('fs');
// a slightly turned cube (not flat isometric): the right face a little wider than the left
const B=[34,5], R=[57,17], Fr=[30,29], L=[7,16], H=27;   // top face corners; edge height
const down=(p)=>[p[0],p[1]+H];
const F={top:{o:L,u:[B[0]-L[0],B[1]-L[1]],v:[Fr[0]-L[0],Fr[1]-L[1]]},
         left:{o:L,u:[Fr[0]-L[0],Fr[1]-L[1]],v:[0,H]},
         right:{o:Fr,u:[R[0]-Fr[0],R[1]-Fr[1]],v:[0,H]}};
const M=(f)=>{const {o,u,v}=F[f];return `matrix(${u[0]},${u[1]},${v[0]},${v[1]},${o[0]},${o[1]})`;};
// a face as a rounded square in its own unit space (corner radius k), drawn through the face matrix
const rsq=(k)=>`M${k},0 H${1-k} Q1,0 1,${k} V${1-k} Q1,1 ${1-k},1 H${k} Q0,1 0,${1-k} V${k} Q0,0 ${k},0 Z`;
const PIPS={top:[[.5,.5]],left:[[.27,.27],[.73,.73]],right:[[.25,.25],[.5,.5],[.75,.75]]};
const pip=(a,b,id)=>`<circle cx="${a-.012}" cy="${b-.016}" r=".118" fill="#6e2416" opacity=".85"/>`+
  `<circle cx="${a}" cy="${b}" r=".108" fill="url(#${id}pw)"/>`+
  `<circle cx="${a+.01}" cy="${b+.014}" r=".108" fill="none" stroke="#ffffff" stroke-width=".012" opacity=".7"/>`;
function die(id){
  const d=`<defs>
  <linearGradient id="${id}t" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffb4a2"/><stop offset=".55" stop-color="#f28c76"/><stop offset="1" stop-color="#e47560"/></linearGradient>
  <linearGradient id="${id}l" x1="0" y1="0" x2=".3" y2="1"><stop offset="0" stop-color="#ea7660"/><stop offset="1" stop-color="#c9563f"/></linearGradient>
  <linearGradient id="${id}r" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#b84c38"/><stop offset="1" stop-color="#7f2e20"/></linearGradient>
  <radialGradient id="${id}pw" cx=".6" cy=".65" r=".7"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#f4eee5"/><stop offset="1" stop-color="#d9cfc2"/></radialGradient>
  <radialGradient id="${id}g" cx=".3" cy=".25" r=".7"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".5" stop-color="#fff" stop-opacity=".12"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
  <filter id="${id}s" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="2.6"/></filter>
  <filter id="${id}e" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation=".55"/></filter></defs>`;
  let s=d;
  // contact shadow and soft ambient shadow
  s+=`<ellipse cx="34" cy="56.5" rx="22" ry="3.2" fill="#000" opacity=".4" filter="url(#${id}s)"/><ellipse cx="31" cy="56.6" rx="13" ry="1.3" fill="#000" opacity=".45" filter="url(#${id}e)"/>`;
  // body: a dark rounded silhouette that shows as the rounded edges between the faces
  const hull=[L,B,R,down(R),down(Fr),down(L)].map(p=>p.join(',')).join(' ');
  s+=`<polygon points="${hull}" fill="#c9563f" stroke="#c9563f" stroke-width="4" stroke-linejoin="round"/>`;
  // faces, each a rounded square inset a little, so the bevels show between them
  for(const [f,n] of [['left','l'],['right','r'],['top','t']]) s+=`<g transform="${M(f)}"><path d="${rsq(.1)}" transform="translate(.017,.017) scale(.966)" fill="url(#${id}${n})"/></g>`;
  // bevels: light along the top edges, soft along the front edge
  s+=`<g fill="none" stroke-linecap="round" filter="url(#${id}e)"><polyline points="${[[L[0]+1.5,L[1]+1.2],[Fr[0],Fr[1]+0.6],[R[0]-1.5,R[1]+1.0]].map(p=>p.join(',')).join(' ')}" stroke="#ffc9bb" stroke-width="1.5" opacity=".95"/>`+
       `<polyline points="${[[L[0]+1.5,L[1]-0.8],[B[0],B[1]+0.9],[R[0]-1.5,R[1]-0.6]].map(p=>p.join(',')).join(' ')}" stroke="#ffd6cb" stroke-width=".8" opacity=".45"/>`+
       `<line x1="${Fr[0]}" y1="${Fr[1]+2}" x2="${Fr[0]}" y2="${Fr[1]+H-2}" stroke="#f08a76" stroke-width="1.1" opacity=".55"/></g>`;
  // gloss on the top face
  s+=`<g transform="${M('top')}"><path d="${rsq(.1)}" transform="translate(.017,.017) scale(.966)" fill="url(#${id}g)"/></g>`;
  for(const f of ['top','left','right']) s+=`<g transform="${M(f)}">`+PIPS[f].map(([a,b])=>pip(a,b,id)).join('')+'</g>';
  // a soft reflection of the table on the right face's bottom
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">${s}</svg>`;
}
fs.writeFileSync('die.svg',die('d'));
