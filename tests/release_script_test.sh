#!/usr/bin/env bash
# Tests tools/release.sh without touching GitHub, the live site or your real key: a throwaway gpg key, a local stand-in for GitHub
# (a bare repository and a fake `gh`), and a local web server for the site. Run: bash tests/release_script_test.sh
set -euo pipefail
ROOT=$(cd "$(dirname "$0")/.." && pwd)
T=$(mktemp -d); SRV=''; trap '[ -n "$SRV" ] && kill "$SRV" 2>/dev/null; rm -rf "$T"' EXIT
pass=0; fail=0
ok()  { if eval "$2"; then echo "PASS $1"; pass=$((pass + 1)); else echo "FAIL $1"; fail=$((fail + 1)); fi; }
export GNUPGHOME=$T/gnupg; mkdir -m 700 "$GNUPGHOME"
gpg --batch --quiet --passphrase '' --quick-gen-key 'release test' ed25519 sign 1d 2>/dev/null
FPR=$(gpg --with-colons --list-secret-keys | awk -F: '/^fpr/ {print $10; exit}')
# GitHub: a bare repository with main (version 9.9.9, the site in public/), and a fake gh that keeps releases in a folder
V=9.9.9
mkdir -p "$T/gh/Random21m"; git init -q --bare "$T/gh/Random21m/testapp.git"
git clone -q "$T/gh/Random21m/testapp.git" "$T/work" 2>/dev/null; cd "$T/work"
mkdir -p tools public/icons; cp "$ROOT/tools/release.sh" tools/
cat > tools/release.conf <<'CONF'
NAME=TESTAPP
REPO=Random21m/testapp
SITE=https://example.invalid/testapp
SITE_ROOT=public
SITE_FILES=(index.html sw.js icons)
VERSION_FILE=public/index.html
VERSION_RE="const APP_VERSION = '[0-9.]*'"
CHECKS=("public/sw.js|const CACHE = 'testapp-v{V}';")
ASSETS=(public/index.html)
CONF
printf "<script>const APP_VERSION = '%s';</script>\n" "$V" > public/index.html; printf "const CACHE = 'testapp-v%s';\n" "$V" > public/sw.js
printf 'icon\n' > public/icons/a.png; printf 'not on the site\n' > public/draft.txt; printf 'readme\n' > README.md
printf '# Changelog\n\n## %s\n\n- New thing in %s.\n\n## 0.0.1\n\n- Old.\n' "$V" "$V" > CHANGELOG.md
git add -A; git -c user.name=t -c user.email=t@t commit -q -m one; git push -q origin HEAD:main 2>/dev/null
mkdir -p "$T/site"; cp -r public/index.html public/sw.js public/icons "$T/site/"
python3 -m http.server 0 --bind 127.0.0.1 --directory "$T/site" > "$T/http.log" 2>&1 < /dev/null & SRV=$!
for i in $(seq 50); do PORT=$(grep -o 'port [0-9]*' "$T/http.log" | grep -o '[0-9]*' || true); [ -n "$PORT" ] && break; sleep 0.1; done
mkdir -p "$T/bin" "$T/rel" "$T/notes"
cat > "$T/bin/gh" <<FAKE
#!/usr/bin/env bash
# fake gh: release view / create / download, and api (the notebook notes)
R=$T/rel
case "\$1 \$2" in
  "release view") [ -d "\$R/\$3" ] ;;
  "release create") tag=\$3; shift 3; target=""; notes=""; files=()
    while [ \$# -gt 0 ]; do case "\$1" in -R|--title) shift 2;; --target) target=\$2; shift 2;; --notes-file) notes=\$2; shift 2;; *) files+=("\$1"); shift;; esac; done
    mkdir -p "\$R/\$tag"; cp "\${files[@]}" "\$R/\$tag/"; for f in "\${files[@]}"; do echo "\${f##*/}" >> "\$R/\$tag/assets.txt"; done; cp "\$notes" "\$R/\$tag/notes.md"; git -C $T/gh/Random21m/testapp.git tag "\$tag" "\$target" ;;
  "release download") tag=\$3; shift 3; dir=""; while [ \$# -gt 0 ]; do case "\$1" in -D) dir=\$2; shift 2;; *) shift;; esac; done
    cp "\$R/\$tag/SHA256SUMS" "\$R/\$tag/SHA256SUMS.asc" "\$dir/" ;;
  "api -H") [ -f "$T/notes/\${4##*/}" ] && cat "$T/notes/\${4##*/}" || exit 1 ;;
  *) echo "fake gh: \$*" >&2; exit 2 ;;
esac
FAKE
chmod +x "$T/bin/gh"
export PATH="$T/bin:$PATH" RELEASE_SIGNING_FPR=$FPR RELEASE_SITE="http://127.0.0.1:$PORT" RELEASE_REMOTE_OK=1
run() { (cd "$T/work" && echo "${2:-yes}" | bash tools/release.sh "$1" > "$T/out" 2>&1); }
# --pending: the version is live and not released yet
P1=$(cd "$T/work" && bash tools/release.sh --pending 2>/dev/null)
ok "--pending prints the version main has, and changes nothing" '[ "$P1" = "$V" ] && [ ! -d "$T/rel/v$V" ]'
# a wrong version is refused before anything is signed
run 9.9.8 && r=0 || r=$?
ok "a version main does not have is refused" '[ $r -ne 0 ] && grep -q "not 9.9.8" "$T/out" && [ ! -d "$T/rel/v9.9.8" ]'
# the site still on the old files: refused
cp "$T/site/sw.js" "$T/sw.keep"; printf 'old\n' > "$T/site/sw.js"
run $V && r=0 || r=$?
ok "a site that is not main yet is refused (nothing signed, no release)" '[ $r -ne 0 ] && grep -q "not the one in main" "$T/out" && [ ! -d "$T/rel/v$V" ]'
cp "$T/sw.keep" "$T/site/sw.js"
# no is no
run $V no && r=0 || r=$?
ok "not typing yes signs nothing" '[ $r -ne 0 ] && grep -q "you did not type yes" "$T/out" && [ ! -d "$T/rel/v$V" ]'
# the real run
run $V && r=0 || r=$?
ok "the release is made: signed checksums of the site files only, the CHANGELOG notes, the tag on main" '[ $r -eq 0 ] && grep -q "Done. Tell Claude" "$T/out" && gpg --verify "$T/rel/v$V/SHA256SUMS.asc" "$T/rel/v$V/SHA256SUMS" 2>/dev/null && (cd "$T/site" && sha256sum -c --quiet "$T/rel/v$V/SHA256SUMS") && [ "$(wc -l < "$T/rel/v$V/SHA256SUMS")" -eq 3 ] && ! grep -qE "README|draft" "$T/rel/v$V/SHA256SUMS" && [ "$(sort "$T/rel/v$V/assets.txt" | tr "\n" " ")" = "SHA256SUMS SHA256SUMS.asc index.html " ] && cmp -s "$T/rel/v$V/index.html" "$T/work/public/index.html" && grep -q "New thing in $V" "$T/rel/v$V/notes.md" && ! grep -q "Old." "$T/rel/v$V/notes.md" && [ "$(git -C "$T/gh/Random21m/testapp.git" rev-parse v$V)" = "$(git -C "$T/gh/Random21m/testapp.git" rev-parse main)" ]'
# --pending after: nothing; no version given: nothing to do
P2=$(cd "$T/work" && bash tools/release.sh --pending 2>/dev/null)
(cd "$T/work" && bash tools/release.sh < /dev/null > "$T/out" 2>&1) && r=0 || r=$?
ok "once released: --pending prints nothing, and with no version it says nothing to do" '[ -z "$P2" ] && [ $r -eq 0 ] && grep -q "already released" "$T/out"'
# and not twice
run $V && r=0 || r=$?
ok "a release that exists already is refused" '[ $r -ne 0 ] && grep -q "already exists" "$T/out"'
# a version with no CHANGELOG part: the notebook notes are used; the CHECKS line is checked
W=9.9.10; sed -i "s/$V/$W/" public/index.html public/sw.js; cp public/index.html public/sw.js "$T/site/"
git -c user.name=t -c user.email=t@t commit -qam two; git push -q origin HEAD:main 2>/dev/null
printf 'Notes for v%s from the notebook\n' "$W" > "$T/notes/testapp-v$W-notes.md"
(cd "$T/work" && RELEASE_YES=1 bash tools/release.sh < /dev/null > "$T/out" 2>&1) && r=0 || r=$?
ok "no version given and RELEASE_YES=1: finds $W on main, signs with no question, uses the notebook notes" '[ $r -eq 0 ] && grep -q "you said yes in release" "$T/out" && [ -f "$T/rel/v$W/SHA256SUMS.asc" ] && grep -q "from the notebook" "$T/rel/v$W/notes.md"'
# no notes anywhere: just the name and the checksums
X=9.9.12; sed -i "s/$W/$X/" public/index.html public/sw.js; cp public/index.html public/sw.js "$T/site/"
git -c user.name=t -c user.email=t@t commit -qam nonotes; git push -q origin HEAD:main 2>/dev/null
run $X && r=0 || r=$?
ok "no notes anywhere: still released, the notes are the name and the checksums" '[ $r -eq 0 ] && grep -q "^TESTAPP v$X" "$T/rel/v$X/notes.md"'
W=$X
sed -i "s/testapp-v$W/testapp-vX/" public/sw.js; git -c user.name=t -c user.email=t@t commit -qam three; git push -q origin HEAD:main 2>/dev/null
sed -i "s/$W/9.9.11/" public/index.html; git -c user.name=t -c user.email=t@t commit -qam four; git push -q origin HEAD:main 2>/dev/null
run 9.9.11 && r=0 || r=$?
ok "a CHECKS line main does not have is refused" '[ $r -ne 0 ] && grep -q "does not have" "$T/out" && [ ! -d "$T/rel/v9.9.11" ]'
echo; echo "release.sh: $pass passed, $fail failed"; [ "$fail" -eq 0 ]
