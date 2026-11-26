// Offline copy of DRYRUN on its web page (GitHub Pages). Network first: online you always get the current files; offline the
// last copy you opened is used. Bump CACHE on every release (tools/release.sh checks it names the version). Only DRYRUN's own
// old caches are removed: other pages on the same site (random21m.github.io) keep theirs.
const CACHE = 'dryrun-1.1.0';
const FILES = ['./', 'index.html', 'dryrun.html', 'logo.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('dryrun-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== self.location.origin) return;
  e.respondWith(fetch(r, { cache: 'no-store' }).then((resp) => {
    if (resp && resp.ok) { const copy = resp.clone(); caches.open(CACHE).then((c) => c.put(r, copy)).catch(() => {}); }
    return resp;
  }).catch(() => caches.match(r, { ignoreSearch: true }).then((m) => m || (r.mode === 'navigate' ? caches.match('dryrun.html') : undefined) || new Response('Offline and not saved yet. Open this page once while online.', { status: 503, headers: { 'Content-Type': 'text/plain' } }))));
});
