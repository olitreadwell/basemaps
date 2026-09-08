# linz/basemaps context
> refreshed 2026-09-08 | upstream default: master @ 11271e7127c24d4ceb6aded57fe6a62541c1c2b9

## Identity & policies
- upstream: linz/basemaps, default branch master, primary language TypeScript (monorepo, lerna/nx)
- English-first: yes (docs, issues, UI all English; NZ govt agency LINZ)
- CLA/DCO: none found (no CLA bot, no DCO/sign-off requirement in CONTRIBUTING or workflows)
- AI-assisted PR policy: unstated (no explicit policy found)
- signed commits required: no
- PR template: .github/pull_request_template.md (Motivation / Modifications / Verification)
- external tracker: JIRA (projects BM, TDE) — PR lint warns on missing JIRA ref, not error
- PR lint: linz/action-pull-request-lint@v1, conventional title required (error), jira warn

## Conventions (verified from merged PRs)
- branch naming: `<type>/<kebab-description>` (e.g. fix/log-api-key, docs/fix-broken-gdal-link, feat/2x-scale)
- commit style: Conventional Commits (build/ci/docs/feat/fix/perf/refactor/style/test)
- test command: `npm run test`; lint/check: `npm run check` (oxlint); build: `npm run build`
- CI gates merge: push.yml Build job (matrix macos/windows: npm ci, build, check, test) runs on PRs; deploy jobs gated to linz/basemaps only
- outside PRs merge: yes — olitreadwell PR #3656 (docs: fix broken GDAL link) merged 2026-08-19; other external merges seen (Wentao-Kuang, ccbblin)

## Maintainer picture
- active maintainers: blacha (Blayne Chard), Wentao-Kuang, amfage, ccbblin; linz-li-bot (release-please)
- responsive: recent external PRs merged within days-weeks

## Issue-area health
- docs/README.md has several genuine typos/wrong links (utlize, duplicated "service service", basemaps-config link points to linz/basemaps)
- no contested/redesign signals relevant to trivial doc cleanup

## Gap ledger (dedupe — READ FIRST, never re-pick)
- `2026-08-19` PR #3656 (docs: fix broken GDAL link in cli-raster README) — pr-opened, merged upstream — GDAL link already fixed, do not re-touch

## Mined gaps (discovered, not yet attempted)
- `2026-09-08` docs/README.md "utlize" typo (should be "utilise" in NZ dialect) — status: proposed
- `2026-09-08` docs/README.md duplicated "the basemaps service service" — status: proposed
- `2026-09-08` docs/README.md basemaps-config link points to linz/basemaps (should be linz/basemaps-config) — status: proposed
- `2026-09-08` trivial-fix pass (docs typos + broken links) — pr-opened (fork PR #9, docs/fix-doc-typos-and-links) — 10 files, 19 fixes, fork CI green; not yet upstream
