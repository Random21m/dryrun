// SeedQR masks as SeedSigner draws them. SeedSigner makes its QR codes with the Python `qrcode` library (7.x), which picks the
// mask with the lowest penalty by its own rules (qrcode/util.py lost_point, main.py best_mask_pattern), scored on a matrix whose
// format and version bits are still blank. the original page's qrBuild picks by the ISO rules on the finished matrix, so for about half of
// all seeds it chose another mask: a correct hand-drawn SeedQR from a real SeedSigner would not match square by square.
// ssPyQrBuild(spec) is qrBuild(spec, mask) with Python qrcode's mask. Ported line by line from qrcode 7.3.1 (the same in 7.4.2).
function ssPyQrLostPoint(m) {
  const n = m.length;
  let lost = 0;
  // level 1: runs of 5 or more of one colour, in rows and in columns
  const container = new Array(n + 1).fill(0);
  for (let row = 0; row < n; row++) {
    let prev = m[row][0], len = 0;
    for (let col = 0; col < n; col++) { if (m[row][col] === prev) len++; else { if (len >= 5) container[len]++; len = 1; prev = m[row][col]; } }
    if (len >= 5) container[len]++;
  }
  for (let col = 0; col < n; col++) {
    let prev = m[0][col], len = 0;
    for (let row = 0; row < n; row++) { if (m[row][col] === prev) len++; else { if (len >= 5) container[len]++; len = 1; prev = m[row][col]; } }
    if (len >= 5) container[len]++;
  }
  for (let L = 5; L <= n; L++) lost += container[L] * (L - 2);
  // level 2: 2 x 2 blocks of one colour (with Python's skip of the next block when the right column differs)
  for (let row = 0; row < n - 1; row++) {
    const a = m[row], b = m[row + 1];
    for (let col = 0; col < n - 1; col++) {
      const tr = a[col + 1];
      if (tr !== b[col + 1]) { col++; continue; }
      if (tr !== a[col]) continue;
      if (tr !== b[col]) continue;
      lost += 3;
    }
  }
  // level 3: 1:1:3:1:1 finder-like patterns with 4 light modules on one side (Python's Horspool skips included)
  const pat = (g) => !g(1) && g(4) && !g(5) && g(6) && !g(9) && ((g(0) && g(2) && g(3) && !g(7) && !g(8) && !g(10)) || (!g(0) && !g(2) && !g(3) && g(7) && g(8) && g(10)));
  for (let row = 0; row < n; row++) for (let col = 0; col < n - 10; col++) {
    const g = (k) => m[row][col + k];
    if (pat(g)) lost += 40;
    if (g(10)) col++;
  }
  for (let col = 0; col < n; col++) for (let row = 0; row < n - 10; row++) {
    const g = (k) => m[row + k][col];
    if (pat(g)) lost += 40;
    if (g(10)) row++;
  }
  // level 4: the share of dark modules
  let dark = 0; for (const r of m) for (const c of r) if (c) dark++;
  lost += Math.floor(Math.abs(dark / (n * n) * 100 - 50) / 5) * 10;
  return lost;
}
// the matrix as Python scores it: format bits, the dark module and version bits blank (light)
function ssPyQrTestMatrix(rows) {
  const n = rows.length, m = rows.map((r) => r.map(Boolean));
  for (let i = 0; i < 15; i++) {
    if (i < 6) m[i][8] = false; else if (i < 8) m[i + 1][8] = false; else m[n - 15 + i][8] = false;
    if (i < 8) m[8][n - i - 1] = false; else if (i < 9) m[8][15 - i] = false; else m[8][15 - i - 1] = false;
  }
  m[n - 8][8] = false;
  if (n >= 45) for (let i = 0; i < 18; i++) { m[Math.floor(i / 3)][i % 3 + n - 11] = false; m[i % 3 + n - 11][Math.floor(i / 3)] = false; }
  return m;
}
function ssPyQrBuild(spec) {
  let best = 0, min = 0;
  for (let mask = 0; mask < 8; mask++) {
    const lp = ssPyQrLostPoint(ssPyQrTestMatrix(qrBuild(spec, mask).rows));
    if (mask === 0 || min > lp) { min = lp; best = mask; }
  }
  return qrBuild(spec, best);
}
// seedQrMatrix (the original page) with SeedSigner's mask
function ssPySeedQrMatrix(words, kind) {
  const d = seedQrData(words); if (!d) throw new Error("SeedQR exists only for 12 and 24 words");
  return ssPyQrBuild(kind === "compact" ? { mode: "byte", bytes: d.bytes, level: "L" } : { mode: "numeric", digits: d.digits, level: "L" });
}
