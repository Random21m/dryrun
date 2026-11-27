// DRYRUN offline test (grid item 9): served over http like GitHub Pages, the page keeps an offline copy after the first load
// (sw.js, network first) and opens with the network off. Also: index.html leads to it, and the cache name names the version.
// Run: node tests/offline.test.mjs
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const require = createRequire(import.meta.url);
const pw = require('playwright-core');
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
let pass = 0; const fails = []; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); c ? pass++ : fails.push(m); };
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.png': 'image/png', '.webmanifest': 'application/manifest+json' };
const srv = http.createServer((q, s) => { let f = decodeURIComponent(q.url.split('?')[0]); if (f === '/') f = '/index.html';
  const p = path.join(root, path.normalize(f)); if (!p.startsWith(root) || !['/index.html', '/dryrun.html', '/sw.js', '/logo.png', '/manifest.webmanifest', '/logo-192.png', '/logo-512.png', '/apple-touch-icon.png'].includes(f) || !fs.existsSync(p)) { s.writeHead(404); return s.end('no'); }
  s.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(s); });
await new Promise((r) => srv.listen(0, '127.0.0.1', r)); const base = 'http://127.0.0.1:' + srv.address().port + '/';
const ver = (fs.readFileSync(path.join(root, 'dryrun.html'), 'utf8').match(/DRYRUN v(\d+\.\d+\.\d+)/) || [])[1];
ok(new RegExp("const CACHE = 'dryrun-" + ver + "'").test(fs.readFileSync(path.join(root, 'sw.js'), 'utf8')), 'sw.js: the cache name names the version on the page (' + ver + ')');
const b = await pw.chromium.launch(), ctx = await b.newContext(), p = await ctx.newPage(), errs = [];
p.on('pageerror', (e) => errs.push(e.message));
try {
  await p.goto(base + 'sw.js'); await p.evaluate(async () => { const c = await caches.open('original-demo-2.18.0'); await c.put('/other', new Response('x')); });   // another page on the same site
  await p.goto(base); await p.waitForURL(/dryrun\.html$/, { timeout: 30000 });
  ok(true, 'index.html leads to dryrun.html');
  await p.waitForFunction(() => window.selfTestDone !== undefined, null, { timeout: 60000 }); await p.evaluate(() => window.selfTestDone);
  const ready = await p.evaluate(async () => { const r = await navigator.serviceWorker.ready; for (let i = 0; i < 100 && !navigator.serviceWorker.controller; i++) await new Promise((x) => setTimeout(x, 100)); const c = await caches.open('dryrun-' + document.getElementById('drVersion').textContent.replace('DRYRUN v', '')); return { active: !!r.active, keys: (await c.keys()).map((k) => new URL(k.url).pathname) }; });
  ok(ready.active && ['/', '/index.html', '/dryrun.html', '/logo.png', '/manifest.webmanifest', '/logo-192.png', '/logo-512.png', '/apple-touch-icon.png'].every((k) => ready.keys.includes(k)), 'first load: the offline copy is kept (' + ready.keys.join(' ') + ')');
  { const cdp = await ctx.newCDPSession(p), am = await cdp.send('Page.getAppManifest');   // what Chrome itself reads for "Add to home screen"
    const m = JSON.parse(am.data || '{}'), out = [];
    for (const i of m.icons || []) { const r = await fetch(new URL(i.src, base)); const b = Buffer.from(await r.arrayBuffer());
      out.push(i.sizes + '=' + (r.ok && b.toString('latin1', 1, 4) === 'PNG' ? b.readUInt32BE(16) + 'x' + b.readUInt32BE(20) : 'missing')); }
    ok(am.url.endsWith('/manifest.webmanifest') && !(am.errors || []).length && m.name === 'DRYRUN' && m.start_url === 'dryrun.html' && m.display === 'standalone' && out.length === 3 && out.every((x) => x.split('=')[0] === x.split('=')[1]),
      '1.1.1: home screen: Chrome reads the manifest with no error; name DRYRUN, opens dryrun.html, and every icon is there at its size (' + JSON.stringify({ errors: am.errors, icons: out }) + ')'); }
  ok(await p.evaluate(() => caches.has('original-demo-2.18.0')), 'review: another page\'s offline copy on the same site is left alone');
  await ctx.setOffline(true); srv.close();
  for (const u of [base + 'dryrun.html', base]) {
    await p.goto(u); await p.waitForURL(/dryrun\.html$/, { timeout: 30000 }); await p.waitForFunction(() => window.selfTestDone !== undefined, null, { timeout: 60000 }); await p.evaluate(() => window.selfTestDone);
    ok(/^SELF-TEST PASSED/.test(await p.textContent('#selfTestBadge')) && await p.title() === 'DRYRUN', 'offline, server gone: ' + u.replace(base, '/') + ' opens and passes its self-test');
  }
} catch (e) { ok(false, 'offline: ' + String(e.message).split('\n')[0]); }
ok(!errs.length, 'no page error (' + errs.slice(0, 2).join(' | ') + ')');
await b.close(); try { srv.close(); } catch (e) { /* closed */ }
console.log(`\noffline: ${pass} passed, ${fails.length} failed`); process.exit(fails.length ? 1 : 0);
