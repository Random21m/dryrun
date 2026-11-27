#!/usr/bin/env bash
# Signed release in one command (the same script in every repo; the repo's details are in tools/release.conf).
# On your own computer, after main is pushed and the site has deployed. Easiest: type `release` (see release-all.sh), which runs
# this for every project that needs it. Or by hand, in the clone:
#
#   bash tools/release.sh            (finds the version on main itself)
#   bash tools/release.sh 1.2.3      (or say which version it must be)
#   bash tools/release.sh --pending  (only prints the version if it is live but not released yet; changes nothing)
#
# 1. gets main from GitHub and reads its version (release.conf: VERSION_FILE, CHECKS)
# 2. makes SHA256SUMS: one line per site file, and checks every file on the live site is the one in main
# 3. shows you the checksums and, after you type yes, signs SHA256SUMS with your key (gpg asks for its passphrase itself)
#    (RELEASE_YES=1 means you already said yes, in `release`)
# 4. makes the GitHub release vX: the notes (this version's part of CHANGELOG.md, or the notebook's notes file), SHA256SUMS
#    and its signature
# 5. downloads the release again and checks the files, the signature and the tag
#
# Your private key never leaves this computer, and this script never sees its passphrase. Every step checks before it acts and
# stops at the first thing that does not match. Needs: git, gpg, gh (logged in: gh auth login), curl.
set -euo pipefail

RELEASE_KEY=2509D11503B72CBFBCB5408F4B729F056A529340   # the release key (signing-key.asc in the repo)
NOTES_REPO=Random21m/second-brain

say()  { printf '\n\033[1m%s\033[0m\n' "$*"; }
ok()   { printf '  \033[32mOK\033[0m  %s\n' "$*"; }
die()  { printf '\n\033[31mSTOP:\033[0m %s\nNothing after this point was done.\n' "$*" >&2; exit 1; }
need() { command -v "$1" >/dev/null 2>&1 || die "$1 is not installed. $2"; }
sha()  { if command -v sha256sum >/dev/null 2>&1; then sha256sum | cut -d' ' -f1; else shasum -a 256 | cut -d' ' -f1; fi; }

MODE=release; V=
case "${1:-}" in
  -h|--help) sed -n '2,21p' "$0"; exit 0 ;;
  --pending) MODE=pending ;;
  "") ;;
  *) V=${1#v} ;;
esac
[ -z "$V" ] || [[ $V =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]] || die "the version should look like 1.2.3"
need git "Install git."; need gpg "Install GnuPG."; need gh "Install the GitHub CLI and run: gh auth login"; need curl "Install curl."
git rev-parse --show-toplevel >/dev/null 2>&1 || die "run this inside your clone of the repository."
cd "$(git rev-parse --show-toplevel)"
[ -f tools/release.conf ] || die "tools/release.conf is missing."
NAME=; REPO=; SITE=; SITE_ROOT=; SITE_FILES=(); VERSION_FILE=; VERSION_RE=; CHECKS=(); ASSETS=()
# shellcheck source=/dev/null
. tools/release.conf
[ -n "$NAME" ] && [ -n "$REPO" ] && [ -n "$SITE" ] && [ ${#SITE_FILES[@]} -ge 1 ] && [ -n "$VERSION_FILE" ] && [ -n "$VERSION_RE" ] \
  || die "tools/release.conf is not filled in (NAME, REPO, SITE, SITE_FILES, VERSION_FILE, VERSION_RE)."
FPR=${RELEASE_SIGNING_FPR:-$RELEASE_KEY}
SITE=${RELEASE_SITE:-$SITE}
REMOTE=${RELEASE_REMOTE:-origin}
P=${SITE_ROOT:+${SITE_ROOT%/}/}
[ "$FPR" = "$RELEASE_KEY" ] || printf '\n\033[33mNOTE:\033[0m signing and checking with %s, NOT the release key (RELEASE_SIGNING_FPR is set). Only for testing.\n' "$FPR" >&2
shopt -s nocasematch   # GitHub names are not case-sensitive
case "$(git remote get-url "$REMOTE" 2>/dev/null)" in
  *"$REPO"|*"$REPO.git"|*"$REPO/") ;;
  *) [ -n "${RELEASE_REMOTE_OK:-}" ] || die "the remote \"$REMOTE\" is $(git remote get-url "$REMOTE" 2>/dev/null || echo missing), not github.com/$REPO." ;;
esac
shopt -u nocasematch
[ "$MODE" = pending ] || gpg --list-secret-keys "$FPR" >/dev/null 2>&1 || die "the release key $FPR is not on this computer."

[ "$MODE" = pending ] || say "1/5  Getting main from GitHub"
git fetch -q "$REMOTE" main || die "could not fetch main."
M=$(git rev-parse FETCH_HEAD)
PV=$(git show "$M:$VERSION_FILE" 2>/dev/null | grep -o "$VERSION_RE" | head -1 | grep -o "[0-9][0-9.]*[0-9]" | tail -1 || true)
[ -n "$PV" ] || die "could not read the version in main's $VERSION_FILE."
if [ "$MODE" = pending ]; then
  gh release view "v$PV" -R "$REPO" >/dev/null 2>&1 || echo "$PV"
  exit 0
fi
ok "main is $(git log --oneline -1 "$M")"
if [ -z "$V" ]; then
  V=$PV
  if gh release view "v$V" -R "$REPO" >/dev/null 2>&1; then say "$NAME $V is already released. Nothing to do."; exit 0; fi
fi
TAG=v$V
[ "$PV" = "$V" ] || die "main's $VERSION_FILE says it is $PV, not $V. Push the release to main first."
for c in ${CHECKS[@]+"${CHECKS[@]}"}; do
  f=${c%%|*}; t=${c#*|}; t=${t//\{V\}/$V}
  git show "$M:$f" 2>/dev/null | grep -qF -- "$t" || die "main's $f does not have: $t"
done
ok "main is $NAME $V ($VERSION_FILE${CHECKS[0]+ and ${#CHECKS[@]} more checks})"
! gh release view "$TAG" -R "$REPO" >/dev/null 2>&1 || die "a GitHub release $TAG already exists."

say "2/5  The checksums of main's site files, and the live site"
D=".release/$TAG"; mkdir -p "$D"; rm -f "$D/SHA256SUMS" "$D/SHA256SUMS.asc" "$D/notes.md"; rm -rf "$D/check" "$D/assets"
paths=(); for f in "${SITE_FILES[@]}"; do paths+=("$P$f"); done
n=0
while IFS= read -r g; do
  f=${g#"$P"}
  h=$(git show "$M:$g" | sha)
  live=$(curl -fsS -H "Cache-Control: no-cache" "$SITE/$f?$(date +%s)" | sha) || die "could not download $SITE/$f."
  [ "$h" = "$live" ] || die "$f on the site is not the one in main. The site may not have deployed yet: wait until the Pages run is green, then run this again."
  printf '%s  %s\n' "$h" "$f" >> "$D/SHA256SUMS"; n=$((n + 1))
done < <(git ls-tree -r --name-only "$M" -- "${paths[@]}" | LC_ALL=C sort)
[ "$n" -ge 1 ] || die "no site files found in main."
ok "$n site files: every one on the live site is the one in main"

say "3/5  Signing"
printf '  You are signing the checksums of %s files of main %s (the live site). The first lines:\n\n' "$n" "${M:0:7}"
head -5 "$D/SHA256SUMS" | sed 's/^/    /'
printf '    ...\n\n  SHA256SUMS itself: %s\n  If Claude gave you a checksum for this release, it must be this one.\n' "$(sha < "$D/SHA256SUMS")"
if [ "${RELEASE_YES:-}" = 1 ]; then ok "you said yes in release"; else
  read -r -p "  Type yes to sign it with $FPR: " a; [ "$a" = yes ] || die "not signed (you did not type yes)."; fi
gpg --local-user "$FPR" --armor --detach-sign --yes --output "$D/SHA256SUMS.asc" "$D/SHA256SUMS"
gpg --status-fd 1 --verify "$D/SHA256SUMS.asc" "$D/SHA256SUMS" 2>/dev/null | grep -q "^\[GNUPG:\] VALIDSIG $FPR " || die "the new signature does not verify as made by $FPR."
ok "SHA256SUMS.asc is a good signature by $FPR"

say "4/5  Making the GitHub release $TAG"
lc=$(printf '%s' "$NAME" | tr '[:upper:]' '[:lower:]')
git show "$M:CHANGELOG.md" 2>/dev/null | awk -v v="## $V" '$0 == v {on = 1; next} on && /^## / {exit} on' > "$D/notes.md" || true
if [ -s "$D/notes.md" ]; then
  ok "notes: the \"## $V\" part of CHANGELOG.md"
elif gh api -H "Accept: application/vnd.github.raw" "repos/$NOTES_REPO/contents/releases/$lc/$lc-$TAG-notes.md" > "$D/notes.md" 2>/dev/null && [ -s "$D/notes.md" ]; then
  ok "notes: releases/$lc/$lc-$TAG-notes.md from the notebook"
else
  printf '%s %s\n' "$NAME" "$TAG" > "$D/notes.md"
  ok "notes: no CHANGELOG part or notebook notes for $V, so just the name and the checksums (edit them on GitHub later if you like)"
fi
printf '\nSHA256SUMS (signed with the release key %s; the public key is in the repository) lists every file of the site at this version:\n```\ngpg --verify SHA256SUMS.asc SHA256SUMS\n```\n' "$FPR" >> "$D/notes.md"
files=("$D/SHA256SUMS" "$D/SHA256SUMS.asc")
for a in ${ASSETS[@]+"${ASSETS[@]}"}; do   # more files from main to attach (release.conf: ASSETS)
  mkdir -p "$D/assets"; git show "$M:$a" > "$D/assets/${a##*/}" 2>/dev/null || die "main has no $a (release.conf ASSETS)."; files+=("$D/assets/${a##*/}")
done
gh release create "$TAG" -R "$REPO" --target "$M" --title "$NAME $TAG" --notes-file "$D/notes.md" "${files[@]}" >/dev/null
ok "released: https://github.com/$REPO/releases/tag/$TAG"

say "5/5  Checking the release"
mkdir -p "$D/check"
gh release download "$TAG" -R "$REPO" -D "$D/check" -p SHA256SUMS -p SHA256SUMS.asc >/dev/null || die "could not download the release files again."
cmp -s "$D/check/SHA256SUMS" "$D/SHA256SUMS" && cmp -s "$D/check/SHA256SUMS.asc" "$D/SHA256SUMS.asc" || die "the files on the release page are not the ones signed here."
gpg --status-fd 1 --verify "$D/check/SHA256SUMS.asc" "$D/check/SHA256SUMS" 2>/dev/null | grep -q "^\[GNUPG:\] VALIDSIG $FPR " || die "the signature on the release page does not verify."
git fetch -q "$REMOTE" "refs/tags/$TAG:refs/tags/$TAG" 2>/dev/null || true
[ "$(git rev-parse "$TAG^{commit}" 2>/dev/null || true)" = "$M" ] || die "the tag $TAG on GitHub is not main ($M)."
ok "the release page holds the signed checksums, and $TAG is main ${M:0:7}"
say "Done. Tell Claude \"published\"."
