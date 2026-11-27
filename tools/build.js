// Builds dryrun.html: src/page.html + the device's style (src/sim.css) and box (src/ssbox.html) + the scripts:
// the money code (src/crypto.js, copied from the original code), the simulator (src/sim/*.js, in the order the original page builds them),
// and the page (src/app.js). Run: node tools/build.js   (tests/build.test.mjs checks dryrun.html is the build of the sources)
"use strict";
const fs = require("fs"), path = require("path");
const R = path.join(__dirname, ".."), rd = (f) => fs.readFileSync(path.join(R, f), "utf8");
const must = (c, m) => { if (!c) throw new Error("build: " + m); };
function build() {
  let html = rd("src/page.html");
  const one = (a, b) => { must(html.split(a).length === 2, "not exactly once: " + a); html = html.replace(a, () => b); };
  one("/*SIMCSS*/", rd("src/sim.css"));
  html = html.split("/*LOGO64*/").join(fs.readFileSync(path.join(R, "logo.svg")).toString("base64"));   // the die: tab icon and header
  one("/*APPLE64*/", fs.readFileSync(path.join(R, "apple-touch-icon.png")).toString("base64"));   // the die on the home screen (iPhone, iPad)
  one("<!--SSBOX-->", rd("src/ssbox.html").replace('<details id="ssBox">', '<details id="ssBox" open>'));
  const tools = rd("src/sim/ss_tools_settings.js");
  const mark = tools.indexOf("/* ====", tools.indexOf("PART B: views and screens") - 200);
  must(mark > 0 && tools.slice(mark, mark + 400).includes("PART B: views and screens"), "PART B marker");
  const strip = (s) => s.replace(/^"use strict";$/m, "");
  const parts = [
    ["crypto.js (the original code money code)", rd("src/crypto.js")],
    ["pyqr.js (SeedSigner's QR mask)", rd("src/pyqr.js")],
    ["ss_fonts.js", rd("src/sim/ss_fonts.js")],
    ["ss_tools_settings.js PART A", tools.slice(0, mark)],
    ["ss_engine.js", rd("src/sim/ss_engine.js")],
    ["ss_seeds.js", rd("src/sim/ss_seeds.js")],
    ["ss_tools_settings.js PART B and ss_psbt.js", tools.slice(mark) + "\n" + strip(rd("src/sim/ss_psbt.js"))],
    ["ss_page.js, ss_learn.js and ss_own.js", rd("src/sim/ss_page.js") + "\n" + strip(rd("src/sim/ss_learn.js")) + "\n" + strip(rd("src/sim/ss_own.js"))],
    ["app.js (DRYRUN page)", rd("src/app.js")],
  ];
  let blocks = "";
  for (const [name, code] of parts) {
    must(!/<\/script/i.test(code), name + " contains </script");
    must(!/<!--/.test(code), name + " contains <!--");
    must(!/\bfetch\(|XMLHttpRequest|WebSocket|sendBeacon|EventSource|@import/.test(code), name + " uses a network API");
    must(!/https?:\/\//.test(code.replace(/\/\/[^\n]*/g, "").replace(/\/\*[\s\S]*?\*\//g, "")), name + " has a URL outside a comment");
    blocks += `<script>\n"use strict";\n// DRYRUN: ${name}\n${strip(code)}\n</script>\n`;
  }
  one("<!--SCRIPTS-->\n", blocks);
  return html;
}
module.exports = { build };
if (require.main === module) {
  const html = build();
  fs.writeFileSync(path.join(R, "dryrun.html"), html);
  console.log("dryrun.html:", Buffer.byteLength(html), "bytes");
}
