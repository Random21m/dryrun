# Releasing DRYRUN

## Current build

- **Version:** 1.1.1, frozen Fri Nov 27, 2026 on branch `home-screen-icon`
- **dryrun.html SHA-256:** `a887eeb390e170a6b944ecb6ec31031487eb55684edd28b78c78dde30ff4e1a5` (1,498,830 bytes)
- **Content ID:** `bafkreifiq7xlhehboctlsrhmw3wdcayuq7vvk2co3uulpddy3xrq75hbuu`
- **Offline cache name:** `dryrun-1.1.1`
- **Changes:** saved to a phone's home screen, DRYRUN now shows its die (an apple-touch-icon built into the page, and a web app manifest with 192 and 512 icons; the page's rules allow only that manifest, next to it). Nothing else changes.
- **Tests at freeze:** build 15/15, core 207/207, screens 18/18, offline 8/8, simulator 244/244 (npm test). The money code and the device code did not change (frozen fingerprints pass).

## Steps

1. **Build and test** (Claude): `npm ci`, `npm run build`, `npm test`, then the mutation run on the money code (`npm run mutation`). Every test passes; every surviving change is looked at.
2. **Freeze** (Claude): `SHA256SUMS` (`sha256sum dryrun.html > SHA256SUMS`), `CID.txt`, this file's "Current build", the README changelog, and the `sw.js` cache name (`dryrun-<version>`) all name the same build.
3. **Merge** (Claude, only with the owner's OK): `main` deploys the page (GitHub Pages, `main`, folder `/`).
4. **Release** (the owner, one paste in any terminal on his computer, the same line for every project):

   ```bash
   bash <(gh api -H "Accept: application/vnd.github.raw" repos/Random21m/second-brain/contents/how-to/release-kit/release-all.sh)
   ```

   For DRYRUN it runs `tools/release.sh` from main: it reads the version on the page, checks `sw.js`, checks the live
   `dryrun.html` is main's, signs `SHA256SUMS` with the release key (gpg asks for the key's passphrase, if it has one; the
   key never leaves his computer), and makes the GitHub release `v<version>` with `SHA256SUMS`, `SHA256SUMS.asc`,
   `dryrun.html` and `CID.txt`, then checks it. DRYRUN's details are in `tools/release.conf`; the script is the same in
   every project. By hand, in a clone: `bash tools/release.sh`. Test: `bash tests/release_script_test.sh`.

Releases up to 1.1.0 were signed before the merge (`release.sh sign` / `publish`); their files are on the release pages.

## The CID

```
python3 -c "import hashlib,base64,sys; h=hashlib.sha256(open(sys.argv[1],'rb').read()).digest(); print('b'+base64.b32encode(bytes([1,0x55,0x12,0x20])+h).decode().lower().rstrip('='))" dryrun.html
```
