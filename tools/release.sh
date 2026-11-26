#!/usr/bin/env bash
# DRYRUN release, the maintainer's three steps. Run from a clone of the dryrun repository on your own computer.
# (Adapted from the original page's tools/release.sh: the same steps, for dryrun.html in Random21m/dryrun.)
#
#   bash tools/release.sh sign 1.0.0      1. checks the frozen file, signs SHA256SUMS with your key, pushes the signature
#   bash tools/release.sh publish 1.0.0   2. after main and the tag are pushed: checks them, makes the GitHub release, stamps it
#   bash tools/release.sh stamp 1.0.0     3. a few hours later: adds the Bitcoin block to the timestamp
#
# Your private key never leaves this computer: gpg asks for its passphrase itself, and this script never sees it.
# Every step checks before it acts and stops at the first thing that doesn't match.
set -euo pipefail

RELEASE_KEY=2509D11503B72CBFBCB5408F4B729F056A529340   # the release key in SECURITY.md
FPR=${VF_SIGNING_FPR:-$RELEASE_KEY}
REPO=${VF_REPO:-Random21m/dryrun}
REMOTE=${VF_REMOTE:-origin}

say()  { printf '\n\033[1m%s\033[0m\n' "$*"; }
ok()   { printf '  \033[32mOK\033[0m  %s\n' "$*"; }
die()  { printf '\n\033[31mSTOP:\033[0m %s\nNothing after this point was done.\n' "$*" >&2; exit 1; }
need() { command -v "$1" >/dev/null 2>&1 || die "$1 is not installed. $2"; }

sha() { if command -v sha256sum >/dev/null 2>&1; then sha256sum "$1" | cut -d' ' -f1; else shasum -a 256 "$1" | cut -d' ' -f1; fi; }
cid() { python3 -c "import hashlib,base64,sys; h=hashlib.sha256(open(sys.argv[1],'rb').read()).digest(); print('b'+base64.b32encode(bytes([1,0x55,0x12,0x20])+h).decode().lower().rstrip('='))" "$1"; }

# the frozen files must agree with each other: SHA256SUMS names dryrun.html with its real hash, CID.txt is its content ID,
# and the page says it is this version
check_files() {
  local v=$1
  [ -f dryrun.html ] && [ -f SHA256SUMS ] && [ -f CID.txt ] || die "dryrun.html, SHA256SUMS or CID.txt is missing here."
  local h; h=$(sha dryrun.html)
  [ "$(cat SHA256SUMS)" = "$h  dryrun.html" ] || die "SHA256SUMS does not match dryrun.html (file hash $h)."
  ok "SHA256SUMS matches dryrun.html: $h"
  [ "$(tr -d '\n' < CID.txt)" = "$(cid dryrun.html)" ] || die "CID.txt does not match dryrun.html."
  ok "CID.txt matches: $(tr -d '\n' < CID.txt)"
  local pv; pv=$(grep -o '<span id="drVersion">DRYRUN v[0-9.]*</span>' dryrun.html | grep -o 'v[0-9][0-9.]*' | head -1)
  [ "$pv" = "v$v" ] || die "the page says it is ${pv:-no version}, not v$v."
  ok "the page is v$v"
  grep -q "^const CACHE = 'dryrun-$v';" sw.js || die "sw.js does not name the cache dryrun-$v (bump CACHE)."
  ok "the offline copy's cache is dryrun-$v"
}

check_sig() {
  local st; st=$(gpg --status-fd 1 --verify SHA256SUMS.asc SHA256SUMS 2>/dev/null) || die "the signature on SHA256SUMS does not verify."
  echo "$st" | grep -q "^\[GNUPG:\] VALIDSIG $FPR " || die "SHA256SUMS.asc is valid but not made by the release key $FPR."
  ok "SHA256SUMS.asc is a good signature by $FPR"
}

clean_tree() { [ -z "$(git status --porcelain --untracked-files=no)" ] || die "this clone has uncommitted changes. Commit or stash them first."; }

[ $# -eq 2 ] || { sed -n '2,10p' "$0"; exit 1; }
CMD=$1; V=${2#v}
[[ $V =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]] || die "the version should look like 1.0.0"
TAG=v$V
git rev-parse --show-toplevel >/dev/null 2>&1 || die "run this inside your clone of dryrun."
cd "$(git rev-parse --show-toplevel)"
[ "$FPR" = "$RELEASE_KEY" ] || printf '\n\033[33mNOTE:\033[0m signing and checking with %s, NOT the release key in SECURITY.md (VF_SIGNING_FPR is set). Only for testing.\n' "$FPR"
case "$(git remote get-url "$REMOTE" 2>/dev/null)" in
  *"$REPO"|*"$REPO.git"|*"$REPO/") ;;
  *) [ -n "${VF_REMOTE_OK:-}" ] || die "the remote \"$REMOTE\" is $(git remote get-url "$REMOTE" 2>/dev/null || echo missing), not github.com/$REPO." ;;
esac
need git "Install git."; need python3 "Install Python 3."

case $CMD in
sign)
  need gpg "Install GnuPG."
  BR=${VF_BRANCH:-dev-$V}
  BACK=$(git symbolic-ref -q --short HEAD || git rev-parse HEAD)
  gpg --list-secret-keys "$FPR" >/dev/null 2>&1 || die "the release key $FPR is not on this computer."
  clean_tree
  say "1/4  Getting the frozen $BR from GitHub"
  git fetch -q "$REMOTE" "$BR" || die "could not fetch $BR."
  git checkout -q --detach FETCH_HEAD; ok "at $(git log --oneline -1)"
  say "2/4  Checking the frozen files"
  check_files "$V"
  [ ! -f SHA256SUMS.asc ] || ! gpg --verify SHA256SUMS.asc SHA256SUMS >/dev/null 2>&1 || die "SHA256SUMS is already signed on $BR."
  say "3/4  Signing"
  printf '  You are signing:  %s\n' "$(cat SHA256SUMS)"
  printf '  It must match the SHA-256 Claude gave you for this release. If it differs, do not sign.\n'
  read -r -p "  Type yes to sign it with $FPR: " a; [ "$a" = yes ] || die "not signed (you did not type yes)."
  gpg --local-user "$FPR" --armor --detach-sign --yes --output SHA256SUMS.asc SHA256SUMS
  check_sig
  say "4/4  Sending the signature to GitHub ($BR)"
  git add SHA256SUMS.asc
  git commit -q -m "Signed SHA256SUMS for $TAG (maintainer key ${FPR:0:8} ${FPR:8:8} ${FPR:16:8} ${FPR:24:8} ${FPR:32:8})"
  git push -q "$REMOTE" "HEAD:refs/heads/$BR" || die "the push failed; the signature is committed here, run: git push $REMOTE HEAD:$BR"
  ok "pushed $(git log --oneline -1)"
  git checkout -q "$BACK" 2>/dev/null || true
  say "Done. Tell Claude \"signed\". Claude checks the signature, pushes main and the tag $TAG, then you run: bash tools/release.sh publish $V"
  ;;
publish)
  need gpg "Install GnuPG."; need gh "Install the GitHub CLI and run gh auth login."
  clean_tree
  say "1/5  Getting $TAG and main from GitHub"
  git fetch -q --tags "$REMOTE" main
  RT=$(git ls-remote "$REMOTE" "refs/tags/$TAG^{}" | cut -f1); [ -n "$RT" ] || RT=$(git ls-remote "$REMOTE" "refs/tags/$TAG" | cut -f1)
  [ -n "$RT" ] || die "the tag $TAG is not on GitHub yet."
  git fetch -q "$REMOTE" "refs/tags/$TAG:refs/tags/$TAG" 2>/dev/null || true
  [ "$(git rev-parse "$TAG^{commit}")" = "$RT" ] || die "your local tag $TAG is not the one on GitHub."
  [ "$(git rev-parse "$TAG^{commit}")" = "$(git rev-parse FETCH_HEAD)" ] || die "main on GitHub is not at $TAG."
  git checkout -q --detach "$TAG"; ok "main and $TAG are $(git log --oneline -1)"
  say "2/5  Checking the files and the signature"
  check_files "$V"; check_sig
  ! gh release view "$TAG" -R "$REPO" >/dev/null 2>&1 || die "a GitHub release $TAG already exists."
  PREV=$(gh release list -R "$REPO" --limit 1 --json tagName --jq '.[0].tagName' 2>/dev/null || true)
  say "3/5  Making the GitHub release $TAG"
  RAW="https://github.com/$REPO/raw/$TAG"
  NOTES=$(printf 'SHA256 of dryrun.html: `%s`\nContent ID: `%s`\n\nSigned with the release key %s (see SECURITY.md). Check before use:\n```\ngpg --verify SHA256SUMS.asc SHA256SUMS\nsha256sum -c SHA256SUMS\n```\n\n[dryrun.html](%s/dryrun.html)\n[SHA256SUMS](%s/SHA256SUMS)\n[SHA256SUMS.asc](%s/SHA256SUMS.asc)\n[CID.txt](%s/CID.txt)\n' \
    "$(sha dryrun.html)" "$(tr -d '\n' < CID.txt)" "$FPR" "$RAW" "$RAW" "$RAW" "$RAW")
  gh release create "$TAG" -R "$REPO" --verify-tag --title "$TAG" --latest --notes "$NOTES" dryrun.html SHA256SUMS SHA256SUMS.asc CID.txt >/dev/null
  ok "released: https://github.com/$REPO/releases/tag/$TAG"
  say "4/5  Marking $PREV as superseded"
  if [ -n "$PREV" ] && [ "$PREV" != "$TAG" ]; then
    B=$(gh release view "$PREV" -R "$REPO" --json body --jq .body)
    case "$B" in "Superseded by"*) ok "$PREV already says so";; *) gh release edit "$PREV" -R "$REPO" --notes "Superseded by $TAG.

$B" >/dev/null; ok "$PREV now starts with \"Superseded by $TAG\"";; esac
  else ok "no earlier release to mark"; fi
  say "5/5  Timestamp (OpenTimestamps)"
  if command -v ots >/dev/null 2>&1; then
    mkdir -p .release/"$TAG"; cp SHA256SUMS .release/"$TAG"/
    ( cd .release/"$TAG" && rm -f SHA256SUMS.ots && ots stamp SHA256SUMS ) && gh release upload "$TAG" -R "$REPO" .release/"$TAG"/SHA256SUMS.ots >/dev/null \
      && ok "stamped and attached SHA256SUMS.ots. In a few hours run: bash tools/release.sh stamp $V" \
      || printf '  The timestamp did not go through (the release itself is done). Try again later: bash tools/release.sh stamp %s\n' "$V"
  else printf '  ots is not installed (pip install opentimestamps-client); skipped. The release itself is done.\n'; fi
  git checkout -q - 2>/dev/null || true
  say "Done. Tell Claude \"published\" so it can check the release files."
  ;;
stamp)
  need ots "Install it with: pip install opentimestamps-client"; need gh "Install the GitHub CLI."
  D=.release/"$TAG"; mkdir -p "$D"
  if [ ! -f "$D/SHA256SUMS" ]; then gh release download "$TAG" -R "$REPO" -D "$D" -p SHA256SUMS -p SHA256SUMS.ots --clobber 2>/dev/null || true; fi
  [ -f "$D/SHA256SUMS" ] || gh release download "$TAG" -R "$REPO" -D "$D" -p SHA256SUMS --clobber
  if [ ! -f "$D/SHA256SUMS.ots" ]; then ( cd "$D" && ots stamp SHA256SUMS ); gh release upload "$TAG" -R "$REPO" "$D/SHA256SUMS.ots" --clobber >/dev/null; say "Stamped now. Run this again in a few hours to add the Bitcoin block."; exit 0; fi
  say "Upgrading the timestamp"
  ( cd "$D" && ots upgrade SHA256SUMS.ots ) || true   # it says "not complete" while the stamp waits for a block
  BLOCK=$( cd "$D" && ots info SHA256SUMS.ots 2>/dev/null | grep -o 'BitcoinBlockHeaderAttestation([0-9]*)' | grep -o '[0-9][0-9]*' | sort -n | head -1 || true )
  if [ -n "$BLOCK" ]; then
    gh release upload "$TAG" -R "$REPO" "$D/SHA256SUMS.ots" --clobber >/dev/null
    ok "SHA256SUMS.ots now proves SHA256SUMS existed by Bitcoin block $BLOCK; the release file is updated"
    say "Done. Tell Claude \"stamped, block $BLOCK\"."
  else
    say "Not in a Bitcoin block yet (this usually takes a few hours). Run the same command again later."
  fi
  ;;
*) die "unknown step \"$CMD\": use sign, publish or stamp." ;;
esac
