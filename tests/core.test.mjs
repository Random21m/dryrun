// DRYRUN core test (test grid items 1-5, 7, 8): the money code, driven through the page in a real Chromium, offline.
// Every expected value comes from independent code (@scure/bip39, @scure/bip32, @scure/btc-signer, jsqr, node:crypto) or from
// published vectors (SeedSigner's example, trezor's BIP39 vectors, SeedQR vectors, Ian Coleman's card vectors), never from the page.
//   1. dice and coin flips -> words, as SeedSigner makes them (SHA-256 of the string; 12 words: first 16 bytes)
//   2. cards -> words, as the original code (Ian Coleman hashed, and Ian Coleman raw entropy)
//   3. SeedQR standard and compact: encode (read back from the page's canvas with jsqr) and decode
//   4. fingerprint, xpub (zpub / ypub / xpub as SeedSigner exports them) and the first receive address of each script type
//   5. backup check: wrong, missing or out-of-place words are refused; no paste yields a different seed (v2.18.1 review M1, round 4)
//   7. no network request, no seed in storage, no link to a removed tool; the unofficial note; the theme
//   8. the templates print on one A4 and one Letter page each
// Run: node tests/core.test.mjs [path/to/dryrun.html]
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
import nc from 'node:crypto';
const require = createRequire(import.meta.url);
const pw = require('playwright-core');
const bip39 = require('@scure/bip39');
const { wordlist } = require('@scure/bip39/wordlists/english');
const { HDKey } = require('@scure/bip32');
const btc = require('@scure/btc-signer');
const jsQR = require('jsqr');
const here = path.dirname(fileURLToPath(import.meta.url));
const FILE = process.argv.find((a) => a.endsWith('.html')) || process.env.DR_FILE || path.join(here, '..', 'dryrun.html');
let pass = 0; const fails = [];
const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); c ? pass++ : fails.push(m); };
const sha = (s) => nc.createHash('sha256').update(s, 'utf8').digest();
const AB = 'abandon '.repeat(11) + 'about';
const fpOf = (m, p = '') => HDKey.fromMasterSeed(bip39.mnemonicToSeedSync(m, p)).fingerprint.toString(16).padStart(8, '0');
const VERS = { 84: { private: 0x04b2430c, public: 0x04b24746 }, 49: { private: 0x049d7878, public: 0x049d7cb2 }, 86: { private: 0x0488ade4, public: 0x0488b21e } };
const xpubOf = (m, p, pu) => HDKey.fromMasterSeed(bip39.mnemonicToSeedSync(m, p), VERS[pu]).derive(`m/${pu}'/0'/0'`).publicExtendedKey;
const ADDR = { 84: (k) => btc.p2wpkh(k).address, 49: (k) => btc.p2sh(btc.p2wpkh(k)).address, 86: (k) => btc.p2tr(k.slice(1)).address };
const addrOf = (m, p, pu) => ADDR[pu](HDKey.fromMasterSeed(bip39.mnemonicToSeedSync(m, p)).derive(`m/${pu}'/0'/0'/0/0`).publicKey);
const diceWords = (r, n) => bip39.entropyToMnemonic(new Uint8Array(sha(r).subarray(0, n === 12 ? 16 : 32)), wordlist);
const rnd = (n, k) => Array.from({ length: n }, () => String(k === 2 ? nc.randomInt(2) : 1 + nc.randomInt(6))).join('');

const browser = await pw.chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1100, height: 900 } });
await ctx.setOffline(true);
const requests = [], problems = [];
ctx.on('request', (r) => { if (!r.url().startsWith('file:') && !r.url().startsWith('data:') && !r.url().startsWith('blob:')) requests.push(r.url()); });
const page = await ctx.newPage();
page.on('pageerror', (e) => problems.push('pageerror: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') problems.push('console.error: ' + m.text().slice(0, 200)); });
page.on('dialog', (d) => d.accept());
let loaded = true;
try {
  await page.goto('file://' + FILE);
  await page.waitForFunction(() => window.selfTestDone !== undefined, null, { timeout: 30000 });
  await page.evaluate(() => window.selfTestDone);
} catch (e) { loaded = false; ok(false, 'the page loads and runs its self-test (' + String(e.message).split('\n')[0] + ')'); }
const $t = (id) => page.evaluate((id) => { const e = document.getElementById(id); return e ? e.textContent.trim() : null; }, id);
const set = (id, v) => page.evaluate(([id, v]) => { const e = document.getElementById(id); if (!e) throw new Error('no #' + id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); }, [id, v]);
const click = async (id) => { await page.evaluate((id) => { const e = document.getElementById(id); if (!e) throw new Error('no #' + id); e.click(); }, id); await page.evaluate(() => window.drBusy && window.drBusy()); };
const safe = async (name, f) => { try { await f(); } catch (e) { ok(false, name + ': ' + String(e.message).split('\n')[0]); } };

if (loaded) {
  ok(/^SELF-TEST PASSED/.test(await $t('selfTestBadge') || ''), 'the self-test passes (' + await $t('selfTestBadge') + ')');
  ok(await page.title() === 'DRYRUN', 'the page is called DRYRUN');
  { const lg = await page.evaluate(() => { const i = document.querySelector('.brand img.logo'), l = document.querySelector('link[rel=icon]'); return { w: i ? i.naturalWidth : 0, icon: l ? l.href.slice(0, 26) : '' }; });
    ok(lg.w > 0 && lg.icon === 'data:image/svg+xml;base64,', 'the logo (the die) shows in the header and is the tab icon (' + JSON.stringify(lg) + ')'); }

  // ---------------- 1. dice and coin flips -> words (SeedSigner) ----------------
  const ent = async (kind, wc, text) => { await page.evaluate(() => showTab('check')); await set('enKind', kind); await set('enWc', String(wc)); await set('enIn', text); await click('enGo'); return { words: await $t('enWords'), msg: await $t('enMsg') }; };
  await safe('dice', async () => {
    const r = await ent('dice', 12, '65515223131652132161133154444123616466443112153441');
    ok(r.words === 'hole luggage safe present express tragic orbit shed switch metal identify path', 'dice: SeedSigner\'s published 50-roll example gives its words (' + r.words + ')');
    for (let i = 0; i < 4; i++) { const R = rnd(50); ok((await ent('dice', 12, R)).words === diceWords(R, 12), 'dice: 50 random rolls -> 12 words = SHA-256, first 16 bytes (@scure/bip39)'); }
    for (let i = 0; i < 3; i++) { const R = rnd(99); ok((await ent('dice', 24, R)).words === diceWords(R, 24), 'dice: 99 random rolls -> 24 words = SHA-256 (@scure/bip39)'); }
    { const R = rnd(50); ok((await ent('dice', 12, R.split('').join(' '))).words === diceWords(R, 12), 'dice: spaces between rolls are fine'); }
    { const r = await ent('dice', 12, rnd(49)); ok(!r.words && /exactly 50/i.test(r.msg), 'dice: 49 rolls are refused: SeedSigner takes exactly 50 (' + r.msg + ')'); }
    { const r = await ent('dice', 12, rnd(51)); ok(!r.words && /exactly 50/i.test(r.msg), 'dice: 51 rolls are refused (' + r.msg + ')'); }
    { const r = await ent('dice', 24, rnd(98)); ok(!r.words && /exactly 99/i.test(r.msg), 'dice: 98 rolls for 24 words are refused (' + r.msg + ')'); }
    { const r = await ent('dice', 12, rnd(49) + '7'); ok(!r.words && /1 to 6/.test(r.msg), 'dice: a 7 is refused, not dropped (' + r.msg + ')'); }
    { const r = await ent('dice', 12, rnd(49) + '0'); ok(!r.words && /1 to 6/.test(r.msg), 'dice: a 0 is refused (' + r.msg + ')'); }
  });
  await safe('coins', async () => {
    for (const [n, wc] of [[128, 12], [256, 24]]) for (let i = 0; i < 3; i++) {
      const B = rnd(n, 2), HT = B.replace(/1/g, 'H').replace(/0/g, 'T');
      ok((await ent('coin', wc, B)).words === diceWords(B, wc), 'coins: ' + n + ' flips as 1/0 -> ' + wc + ' words = SHA-256 of the bit string (@scure/bip39)');
      ok((await ent('coin', wc, HT.toLowerCase())).words === diceWords(B, wc), 'coins: the same ' + n + ' flips as h/t (Heads = 1, Tails = 0) give the same words');
    }
    { const r = await ent('coin', 12, rnd(127, 2)); ok(!r.words && /exactly 128/i.test(r.msg), 'coins: 127 flips are refused (' + r.msg + ')'); }
    { const r = await ent('coin', 12, rnd(127, 2) + '2'); ok(!r.words && /H.*T|1.*0/.test(r.msg), 'coins: a 2 is refused (' + r.msg + ')'); }
    { const r = await ent('coin', 12, 'HT'.repeat(63) + 'H1'); ok(!r.words, 'coins: H/T and 1/0 mixed in one list are refused (' + r.msg + ')'); }
  });

  // ---------------- 2. cards -> words (the original code) ----------------
  await safe('cards', async () => {
    const SU = { C: '♣', D: '♦', H: '♥', S: '♠' }, cs = (t) => t.split(' ').map((x) => x[0] + SU[x[1]]).join(' ');
    const expC = (t, n) => bip39.entropyToMnemonic(new Uint8Array(sha(cs(t)).subarray(0, n === 24 ? 32 : 16)), wordlist);
    const C25 = 'KS 3D 9H AC TC 5S JD 2H 8C QS 4D 7H 6C AH TS 9D 3C KH 5D JS 2S 8H QC 4H 7S';
    { const r = await ent('cards', 12, C25); ok(r.words === expC(C25, 12), 'cards: 25 cards, hashed -> the words of SHA-256 of the card text (Ian Coleman)'); }
    { const r = await ent('cards', 12, C25.toLowerCase().replace(/t/g, '10')); ok(r.words === expC(C25, 12), 'cards: lower case and 10 for T give the same words'); }
    { const r = await ent('cards', 12, C25.split(' ').slice(0, 24).join(' ')); ok(!r.words && /more/.test(r.msg), 'cards: 24 cards are not enough for 12 words (' + r.msg + ')'); }
    { const r = await ent('cards', 12, C25 + ' ZZ'); ok(!r.words && /not a card/.test(r.msg), 'cards: a bad card is refused (' + r.msg + ')'); }
    const KS30 = 'KS 3D 9H AC TC 5S JD 2H 8C QS 4D 7H 6C AH TS 9D 3C KH 5D JS 2S 8H QC 4H 7S AD 2D 3H 4C 5C';
    { const r = await ent('cardsraw', 12, KS30); ok(r.words === 'velvet beach salute key actual earn charge fix quick stove swing silk', 'cards: raw entropy, 30 cards -> Ian Coleman\'s words (' + r.words + ')'); }
    { const deck = []; for (const s of 'CDHS') for (const r of 'A23456789TJQK') deck.push(r + s); const D = deck.sort(() => nc.randomInt(3) - 1).join(' ');
      const r0 = await ent('cards', 24, D); ok(!r0.words && /more to go/.test(r0.msg), 'cards: one whole deck (226 bits) is not enough for 24 words (' + r0.msg + ')');
      const D2 = D + ' ' + deck.slice(0, 7).join(' '), r = await ent('cards', 24, D2); ok(r.words === expC(D2, 24), 'cards: a whole shuffled deck and 7 cards of the next shuffle -> 24 words, hashed'); }
  });

  // ---------------- 3. SeedQR encode and decode ----------------
  const SQ = JSON.parse(fs.readFileSync(path.join(here, 'fixtures', 'seedqr.json'), 'utf8'));
  const readQr = async (id) => {
    const d = await page.evaluate((id) => { const c = document.getElementById(id); if (!c || !c.width) return null; const x = c.getContext('2d').getImageData(0, 0, c.width, c.height); return { w: c.width, h: c.height, px: Array.from(x.data) }; }, id);
    if (!d) return null; const q = jsQR(Uint8ClampedArray.from(d.px), d.w, d.h); return q ? { text: q.data, bytes: Buffer.from(q.binaryData).toString('hex'), version: q.version } : null;
  };
  const check = async (words, pass = '') => { await page.evaluate(() => showTab('check')); await set('bkIn', words); await set('bkPass', pass); await click('bkGo'); };
  await safe('seedqr', async () => {
    for (const v of SQ.slice(0, 7)) {
      await check(v.words); await click('bkQrGo');
      const s = await readQr('bkQrStd'), c = await readQr('bkQrCompact');
      ok(s && s.text === v.digits && s.version === v.formats.seedqr.version, 'SeedQR: standard SeedQR of ' + v.words.split(' ').length + ' words reads back as the vector\'s digits, version ' + v.formats.seedqr.version);
      ok(c && c.bytes === v.entropy && c.version === v.formats.compact.version, 'SeedQR: compact SeedQR reads back as the entropy bytes, version ' + v.formats.compact.version);
      const d1 = await page.evaluate((x) => drSeedQrDecode(x), v.digits), d2 = await page.evaluate((h) => drSeedQrDecode(Uint8Array.from(h.match(/../g).map((x) => parseInt(x, 16)))), v.entropy);
      ok(d1 === v.words && d2 === v.words, 'SeedQR: decoding the digits and the compact bytes gives the words back');
      const px = await page.evaluate((id) => { const c = document.getElementById(id), g = c.getContext('2d'), n = c.width / 8 - 8, rows = []; for (let y = 0; y < n; y++) { const r = []; for (let x = 0; x < n; x++) r.push(g.getImageData((x + 4) * 8 + 4, (y + 4) * 8 + 4, 1, 1).data[0] < 128 ? '1' : '0'); rows.push(r.join('')); } return rows.join(''); }, 'bkQrStd');
      const pc = await page.evaluate((id) => { const c = document.getElementById(id), g = c.getContext('2d'), n = c.width / 8 - 8, rows = []; for (let y = 0; y < n; y++) { const r = []; for (let x = 0; x < n; x++) r.push(g.getImageData((x + 4) * 8 + 4, (y + 4) * 8 + 4, 1, 1).data[0] < 128 ? '1' : '0'); rows.push(r.join('')); } return rows.join(''); }, 'bkQrCompact');
      const H = (s) => nc.createHash('sha256').update(s).digest('hex');
      ok(H(px) === v.formats.seedqr.auto && H(pc) === v.formats.compact.auto, 'SeedQR: both are drawn square for square as SeedSigner draws them (the mask Python qrcode picks)');
    }
    ok(await page.evaluate(() => drSeedQrDecode('1'.repeat(47))) === '' && await page.evaluate(() => drSeedQrDecode('2048' + '0'.repeat(44))) === '', 'SeedQR: a wrong digit count or a number over 2047 decodes to nothing');
    ok(await page.evaluate(() => drSeedQrDecode('0'.repeat(48))) === '', 'SeedQR: digits with a bad checksum decode to nothing');
  });

  // ---------------- 4. fingerprint, xpub, first addresses ----------------
  await safe('keys', async () => {
    const V = JSON.parse(fs.readFileSync(path.join(here, 'fixtures', 'bip39-vectors-english.json'), 'utf8')).english;
    const cases = [[AB, ''], [AB, 'TREZOR'], [V[3][1], ''], [V[10][1], 'Ab1 x'], [V[17][1], ''], [bip39.generateMnemonic(wordlist, 256), 'pässwörd'], [bip39.generateMnemonic(wordlist, 128), '']];
    for (const [m, p] of cases) {
      await check(m, p);
      const fp = await $t('bkFp'); ok(fp === fpOf(m, p), 'keys: fingerprint ' + fp + ' for ' + m.split(' ').length + ' words' + (p ? ' with a passphrase' : '') + ' (@scure/bip32)');
      for (const pu of [84, 49, 86]) {
        ok(await $t('bkXpub' + pu) === xpubOf(m, p, pu), 'keys: ' + { 84: 'native segwit zpub', 49: 'nested segwit ypub', 86: 'taproot xpub' }[pu] + ' at m/' + pu + "'/0'/0'");
        ok(await $t('bkAddr' + pu) === addrOf(m, p, pu), 'keys: first receive address m/' + pu + "'/0'/0'/0/0 (@scure/btc-signer)");
      }
    }
    ok(await $t('bkFp') !== '' && (await page.evaluate(() => { clearAll(); return [document.getElementById('bkIn').value, document.getElementById('bkPass').value, document.getElementById('bkFp').textContent, document.getElementById('enIn').value, document.getElementById('enWords').textContent].join(''); })) === '', 'CLEAR ALL empties the boxes and the results');
  });

  // ---------------- 5. backup check: mistakes are refused, never read as another seed ----------------
  await safe('mistakes', async () => {
    const vm = (m) => bip39.validateMnemonic(m, wordlist);
    const res = async (t) => { await check(t); return { fp: await $t('bkFp'), msg: await $t('bkMsg') }; };
    const m12 = bip39.entropyToMnemonic(new Uint8Array(sha('dr m12').subarray(0, 16)), wordlist).split(' ');
    { const r = await res(m12.join(' ')); ok(r.fp === fpOf(m12.join(' ')), 'mistakes: the right words read'); }
    { const w = [...m12]; w[5] = w[5] === 'zoo' ? 'abandon' : 'zoo'; const t = w.join(' '); if (vm(t)) w[5] = 'wrong'; const r = await res(w.join(' ')); ok(!r.fp && /checksum|not a valid|Unknown/i.test(r.msg), 'mistakes: one wrong word is refused (' + r.msg.slice(0, 70) + ')'); }
    { const r = await res(m12.slice(0, 11).join(' ')); ok(!r.fp && /11/.test(r.msg), 'mistakes: a missing word is refused (' + r.msg.slice(0, 70) + ')'); }
    { const r = await res(m12.slice(0, 11).join(' ') + ' qwerty'); ok(!r.fp && /Unknown word: qwerty/.test(r.msg), 'mistakes: an unknown word is named (' + r.msg.slice(0, 70) + ')'); }
    // review fixes: numbers and hex are refused (word numbers counted from 1 would be read as SeedQR digits: another valid seed)
    { const real = 'broccoli south penalty session pizza south argue inhale woman fox truly program', from1 = real.split(' ').map((x) => String(wordlist.indexOf(x) + 1).padStart(4, '0')).join(' ');
      const r = await res(from1); ok(!r.fp && /not words/.test(r.msg), 'review: word numbers counted from 1 (' + from1.slice(0, 19) + '...) are refused, not read as another seed (' + r.msg.slice(0, 50) + ')');
      const r2 = await res(real.split(' ').map((x) => String(wordlist.indexOf(x)).padStart(4, '0')).join('')); ok(!r2.fp && /not words/.test(r2.msg), 'review: SeedQR digits are refused in the words box'); }
    { const r = await res('0'.repeat(32)); ok(!r.fp && /not words/.test(r.msg), 'review: hex is refused in the words box'); }
    { const r = await res('twenty lion wast logic giant now spare doll blame hint prevent theme'); ok(!!r.fp && /\u201cwast\u201d read as \u201cwaste\u201d/.test(r.msg) && await page.evaluate(() => /warn/.test(document.getElementById('bkMsg').className)), 'review: a word read from its first letters is named as a warning (' + r.msg.slice(-60) + ')'); }
    { const r = await res(bip39.entropyToMnemonic(new Uint8Array(20), wordlist)); ok(!r.fp && /12 or 24 words\. This list has 15\./.test(r.msg), 'review: a 15-word phrase gets a plain refusal (' + r.msg + ')'); }
    { const w = [...m12]; w[5] = w[5] === 'zoo' ? 'abandon' : 'zoo'; if (vm(w.join(' '))) w[5] = 'abandon'; const r = await res(w.join(' ')); ok(!r.fp && /probably wrong, missing or out of order\./.test(r.msg) && !/Reforge/.test(r.msg), 'review: a checksum failure keeps its advice (' + r.msg.slice(0, 80) + ')'); }
    // M1 (v2.18.1 review round 3): a two-column sheet copied row by row, chosen so that the wrong order also has a valid checksum
    const pick = (n, tag) => { for (let i = 0; ; i++) { const m = bip39.entropyToMnemonic(new Uint8Array(sha(tag + ' ' + n + ' ' + i).subarray(0, n * 4 / 3)), wordlist).split(' '), h = n / 2, rows = []; for (let r = 0; r < h; r++) rows.push(m[r], m[r + h]); if (vm(rows.join(' '))) return { m, rowOrder: rows }; } };
    const P = { 12: pick(12, 'm1 twocol'), 24: pick(24, 'm1 twocol') };
    ok([12, 24].every((n) => vm(P[n].m.join(' ')) && vm(P[n].rowOrder.join(' ')) && P[n].m.join(' ') !== P[n].rowOrder.join(' ')), 'M1: the true seed and its row-by-row reading are both valid phrases, and different (@scure/bip39)');
    const two = (m, f = (i, x) => (i + 1) + '. ' + x, gap = '    ', nl = '\n') => { const h = m.length / 2, rows = []; for (let r = 0; r < h; r++) rows.push(f(r, m[r]) + gap + f(r + h, m[r + h])); return rows.join(nl); };
    const forms = (m) => [['count line', m.length + ' words:\n' + two(m)], ['no count line', two(m)], ['Windows line ends', two(m).replace(/\n/g, '\r\n')], ['"1)" style', two(m, (i, x) => (i + 1) + ') ' + x)],
      ['"1.word" joined', two(m, (i, x) => (i + 1) + '.' + x)], ['numbers on their own lines', two(m, (i, x) => (i + 1) + '.\n' + x, '\n')], ['all on one line', two(m, undefined, ' ', ' ')]];
    for (const n of [12, 24]) for (const [name, t] of forms(P[n].m)) { const r = await res(t);
      ok(!r.fp && new RegExp('out of order \\(' + (n / 2 + 1) + ' comes before 2\\)').test(r.msg), 'M1: ' + n + ' words from a two-column sheet, ' + name + ': refused (' + r.msg.slice(0, 80) + ')'); }
    const inOrder = (m) => [['"1. w"', m.map((x, i) => (i + 1) + '. ' + x).join('\n')], ['"1) w"', m.map((x, i) => (i + 1) + ') ' + x).join(' ')], ['"#1 w"', m.map((x, i) => '#' + (i + 1) + ' ' + x).join('\n')], ['plain', m.join(' ')], ['count first', m.length + ' ' + m.join(' ')]];
    for (const n of [12, 24]) for (const [name, t] of inOrder(P[n].m)) { const r = await res(t); ok(r.fp === fpOf(P[n].m.join(' ')), 'M1: ' + n + ' words in number order, ' + name + ': read as the true seed'); }
    { const r = await res(P[12].m.map((x, i) => (i < 3 ? i + 1 : i + 2) + '. ' + x).join('\n')); ok(!r.fp && /number 4 is not in it/.test(r.msg), 'M1: a list with number 4 left out is refused (' + r.msg.slice(0, 70) + ')'); }
    { const r = await res(P[12].m.map((x, i) => (i === 2 ? 2 : i + 1) + '. ' + x).join('\n')); ok(!r.fp && /number 2 comes twice/.test(r.msg), 'M1: a number given twice is refused (' + r.msg.slice(0, 70) + ')'); }
    // round 4 (F2, F3): a list number sits on the word at its place
    const seed = (tag, n) => bip39.entropyToMnemonic(new Uint8Array(sha(tag).subarray(0, n * 4 / 3)), wordlist).split(' ');
    const r12 = seed('f2 row 12', 12), r24 = seed('f2 row 24', 24);
    const rows = (m, k, f = (n) => n + '.') => { const L = []; for (let i = 0; i < m.length; i += k) L.push(f(i + 1) + ' ' + m.slice(i, i + k).join(' ')); return L.join('\n'); };
    for (const [name, m, t] of [['rows of 4 labelled 1. 5. 9.', r12, rows(r12, 4)], ['rows of 3 labelled 1: 4: 7: 10:', r12, rows(r12, 3, (n) => n + ':')], ['24 words, rows of 6 labelled #1 #7 #13 #19', r24, rows(r24, 6, (n) => '#' + n)],
      ['rows numbered from 0', r12, rows(r12, 4, (n) => n - 1 + '.')], ['only words 1 and 7 numbered', r12, '1. ' + r12.slice(0, 6).join(' ') + ' 7. ' + r12.slice(6).join(' ')]]) {
      const r = await res(t); ok(r.fp === fpOf(m.join(' ')), 'F2: ' + name + ': read as typed (' + r.msg.slice(0, 60) + ')'); }
    const pk = (n) => { for (let i = 0; ; i++) { const m = seed('f3 half ' + n + ' ' + i, n), h = n / 2, ro = []; for (let r = 0; r < h; r++) ro.push(m[r], m[r + h]); if (vm(ro.join(' '))) return m; } };
    const half = (m, f = (n) => n + '.') => { const h = m.length / 2, L = []; for (let r = 0; r < h; r++) L.push(f(r + 1) + ' ' + m[r] + '    ' + m[r + h]); return L.join('\n'); };
    for (const n of [12, 24]) for (const [fn, f] of [['1.', (k) => k + '.'], ['1)', (k) => k + ')'], ['#1', (k) => '#' + k], ['1', (k) => '' + k]]) {
      const r = await res(half(pk(n), f)); ok(!r.fp && /number 2 is on word 3/.test(r.msg), 'F3: ' + n + ' words, a two-column sheet with only the left numbers (' + fn + '): refused (' + r.msg.slice(0, 70) + ')'); }
    { const r = await res(r12.slice(0, 4).join(' ') + ' 7. ' + r12.slice(4).join(' ')); ok(!r.fp && /number 7 is on word 5/.test(r.msg), 'F3: a lone "7." on word 5 is refused'); }
    // no paste ever reads as a different seed: every layout above, and random shuffles of the numbered words, give the true fingerprint or nothing
    let other = 0; const truth = fpOf(P[12].m.join(' '));
    for (let i = 0; i < 25; i++) { const num = P[12].m.map((x, k) => (k + 1) + '. ' + x), sh = [...num].sort(() => nc.randomInt(3) - 1).join(' '); const r = await res(sh); if (r.fp && r.fp !== truth) other++; }
    ok(other === 0, 'mistakes: 25 shuffles of a numbered list never read as another seed');
    { const before = P[12].m.map((x, i) => (i + 1) + '. ' + x).reverse().join('\n'); await check(before); ok(await page.evaluate(() => document.getElementById('bkIn').value) === before, 'mistakes: the page never reorders the words in the box'); }
  });

  // ---------------- 7. offline, nothing stored, no link to a removed tool ----------------
  await safe('privacy', async () => {
    await check(AB); await ent('dice', 12, rnd(50));
    const st = await page.evaluate(async () => { const all = []; for (const s of [localStorage, sessionStorage]) for (let i = 0; i < s.length; i++) { const k = s.key(i); all.push(k + '=' + s.getItem(k)); }
      const dbs = indexedDB.databases ? (await indexedDB.databases()).map((d) => d.name) : []; return { all, dbs, cookie: document.cookie }; });
    const blob = st.all.join('\n');
    ok(!/abandon|about|[0-9a-f]{32}|\b[1-6]{20,}\b/.test(blob) && !st.dbs.length && !st.cookie, 'privacy: no seed, words, rolls or keys in localStorage, sessionStorage, IndexedDB or cookies (' + st.all.length + ' entries: ' + st.all.map((x) => x.split('=')[0]).join(', ') + ')');
    const links = await page.evaluate(() => [...document.querySelectorAll('a[href]')].map((a) => a.getAttribute('href')));
    const okLink = (h) => /^https:\/\/(github\.com\/SeedSigner\/seedsigner|seedsigner\.com)\b/.test(h) || (h.startsWith('#') && !!h.slice(1));
    ok(links.length > 0 && links.every(okLink), 'links: only SeedSigner\'s own project and in-page anchors (' + links.join(' ') + ')');
    const anchorsOk = await page.evaluate(() => [...document.querySelectorAll('a[href^="#"]')].every((a) => document.getElementById(a.getAttribute('href').slice(1))));
    ok(anchorsOk, 'links: every in-page link has its target');
    const text = await page.evaluate(() => document.body.innerText + ' ' + [...document.querySelectorAll('[title],[aria-label]')].map((e) => (e.title || '') + ' ' + (e.getAttribute('aria-label') || '')).join(' '));
    const gone = ['the original page', 'MAKE A SEED', 'CHECK A BACKUP', 'FORGE SEED', 'Damascus', 'Reforge', 'Wallet Detective', 'Seed XOR', 'SLIP39', 'END SESSION'].filter((x) => text.toUpperCase().includes(x.toUpperCase()));
    ok(await page.evaluate(() => !document.getElementById('ssOwnIn') && !document.getElementById('ssOwnGo') && !/Use it for real/.test(document.body.innerText)), '1.1.0: there is no way to paste your own PSBT or sign for real (Use it for real is gone)');
    ok(await page.evaluate(() => typeof safeCopy === 'function' && typeof showCopied === 'function'), 'review: the device\'s COPY buttons have their copy function');
    ok(!gone.length, 'links: no text points to a the original page tool DRYRUN does not have (' + gone.join(', ') + ')');
    ok(/DRYRUN is an unofficial practice tool, not made by or connected to SeedSigner/.test(text), 'the unofficial note is shown');
    const csp = await page.evaluate(() => (document.querySelector('meta[http-equiv="Content-Security-Policy"]') || {}).content || '');
    ok(/default-src 'none'/.test(csp) && !/connect-src (?!'none')/.test(csp), 'the page\'s own rules block network access (' + csp.slice(0, 90) + ')');
    const th = await page.evaluate(() => { const g = () => getComputedStyle(document.documentElement).getPropertyValue('--bg').trim() + ' ' + getComputedStyle(document.body).backgroundColor; const a = g(); document.getElementById('themeBtn').click(); const b = g(); document.getElementById('themeBtn').click(); return [a, b, g()]; });
    ok(th[0] === '#0e0d0c rgb(14, 13, 12)' && th[1] === '#eae3d2 rgb(234, 227, 210)' && th[2] === th[0], 'theme: BLOCKHORIZON dark by default, light on THEME, and back (' + th.join(' | ') + ')');
  });

  // ---------------- 8. templates print on one A4 and one Letter page ----------------
  await safe('print', async () => {
    for (const [id, cells, what] of [['prWords12', 12, 'word sheet, 12 words'], ['prWords24', 24, 'word sheet, 24 words'], ['prQr21', 21 * 21, 'SeedQR grid 21 x 21 (compact, 12 words)'], ['prQr25', 25 * 25, 'SeedQR grid 25 x 25 (standard 12 / compact 24)'], ['prQr29', 29 * 29, 'SeedQR grid 29 x 29 (standard, 24 words)']]) {
      await page.evaluate(() => { window.__printed = 0; window.print = () => { window.__printed++; }; showTab('print'); });
      await click(id);
      const n = await page.evaluate(() => ({ p: window.__printed, cells: document.querySelectorAll('#printArea .cell').length }));
      ok(n.p === 1 && n.cells === cells, 'print: ' + what + ': opens the print dialog with ' + cells + ' boxes (' + n.cells + ')');
      await page.emulateMedia({ media: 'print' });
      for (const format of ['A4', 'Letter']) {
        const pdf = (await page.pdf({ format, printBackground: true })).toString('latin1'), pages = (pdf.match(/\/Type\s*\/Page[^s]/g) || []).length;
        ok(pages === 1, 'print: ' + what + ' fits on one ' + format + ' page (' + pages + ')');
      }
      const vis = await page.evaluate(() => { const a = document.getElementById('printArea'), r = a.getBoundingClientRect(); const hidden = [...document.body.children].filter((e) => e !== a && getComputedStyle(e).display !== 'none' && e.tagName !== 'SCRIPT'); return { w: r.width, hidden: hidden.map((e) => e.id || e.tagName) }; });
      ok(vis.w > 0 && !vis.hidden.length, 'print: only the template is printed (' + vis.hidden.join(',') + ')');
      await page.emulateMedia({ media: 'screen' });
    }
  });
}
{ const c2 = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true }); await c2.setOffline(true); const q = await c2.newPage();
  try { await q.goto('file://' + FILE); await q.evaluate(() => window.selfTestDone);
    for (const tab of ['check', 'print', 'guide']) { const m = await q.evaluate((tab) => { showTab(tab); return { sw: document.documentElement.scrollWidth, iw: innerWidth, small: [...document.querySelectorAll('button,select,input')].filter((e) => e.offsetParent && e.getBoundingClientRect().height < 40).map((e) => e.id || e.textContent) }; }, tab);
      ok(m.sw <= m.iw && !m.small.length, 'phone (390 px): the ' + tab.toUpperCase() + ' tab does not scroll sideways and every button is at least 40 px tall (' + m.small.join(', ') + ')'); } }
  catch (e) { ok(false, 'phone: ' + String(e.message).split('\n')[0]); }
  await c2.close(); }
ok(!requests.length, 'no network request of any kind (' + requests.slice(0, 3).join(' ') + ')');
ok(!problems.length, 'no page error or console error (' + problems.slice(0, 3).join(' | ') + ')');
await browser.close();
console.log(`\ncore: ${pass} passed, ${fails.length} failed`);
if (fails.length) { console.log('FAILED:\n  ' + fails.join('\n  ')); process.exit(1); }
