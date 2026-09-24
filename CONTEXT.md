# linz/basemaps context
> refreshed 2026-09-24 | upstream default: master @ fc77e1e5d7e34b365d53a6d3b2014df5b4954abc

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
- `2026-09-09` quick-start bundle `--output $PWD/` (should be a file path) — pr-opened (fork PR #10, fix/quick-start-bundle-output) — verified against action.bundle.ts (output is a file, default config/config.json); tied to upstream issue #3622; not yet upstream
- `2026-09-24` trivial-fix pass (typos: gebco `lastest`, sprites README `Refference`, lambda-tiler README `boudning`+`ont he`, version.bump.sh `formated`) — pr-opened (fork PR #13, docs/fix-typos-in-docs-and-scripts, 4 files 5 fixes) — new distinct pass after PR #9; conflict-free files; fork CI fully GREEN (build macos+windows, build-deploy, build-containers ubuntu+arm, lint all success; deploy/screenshot/smoke jobs skipped - gated to linz/basemaps, expected fork artifact); mergeable True, mergeable_state clean (transient macos npm ci infra flake on first run, rerun-failed-jobs -> success)
- `2026-09-24` trivial-fix pass (source-file comment/string typos, distinct from docs passes #9/#13) — pr-opened (fork PR #14, docs/fix-comment-typos, 10 files 18 fixes) — new distinct pass: codespell found 18 genuine misspellings in code comments, log messages and one CLI error message, all unclaimed by prior fork PRs #1/#2/#4/#9/#10/#13; no upstream PR touches any fixed string (dedupe checked open+closed); conflict-free files (avoids files touched by open fork PRs #4/#13); fork CI lint passed, build jobs pending
- `2026-09-24` trivial-fix pass (packed PR #15: typos + stale refs in docs/source comments, distinct from passes #9/#13/#14) — pr-opened (fork PR #15, docs/fix-typos-and-broken-links, 9 files 10 fixes) — genuine typo fixes (overwrite, bounding, on the, approximately, separate, comparison(s), doesn't, exhaustive comparison) + 2 stale refs (CONTRIBUTING CloudFront pkg name/path, config README imagery.ts link); deduped vs fork PRs #4/#9/#10/#13/#14 and all upstream PRs; conflict-free files; fork CI pending
- `2026-09-24` trivial-fix pass (source comment/log typos, distinct from docs passes #9/#13/#15 and comment pass #14) — pr-opened (fork PR #16, docs/fix-comment-and-log-typos, 9 files 15 fixes) — genuine single-token misspellings in source comments, log messages and test descriptions (significantly, Convert, actually, divisible, overridden x7, output, gzipped, state x2); deduped vs fork PRs #4/#9/#10/#13/#14/#15 and all upstream PRs (none claim any fixed string); deliberately left valid UK/NZ variants (co-ordinates, convertor) and shared.ts overidden (overlaps PR #14); conflict-free files; fork CI green (lint, build macos+windows, build-deploy, build-containers ubuntu amd64 all success; arm64 cancelled = fork-only deploy artifact; deploy/screenshot/smoke skipped - gated to linz/basemaps, expected fork artifact); mergeable True

- `2026-09-25` trivial-fix pass (docs grammar + typo, distinct from passes #9/#13/#14/#15/#16) — pr-opened (fork PR #17, docs/fix-doc-typos-and-grammar, 5 files 6 fixes) — genuine fixes: `specifity`->`specificity` (landing index.css comment) + article fixes in unclaimed docs (`a imagery`->`an imagery`, `a output layer`->`an output layer` in configuration.md; `a error state`->`an error state` in empty-tiles.md; `a entire`->`an entire` in landing/README.md; `a echo`->`an echo` in linzjs-docker-command/README.md); deduped vs fork PRs #4/#13 + prior passes, all 5 files unclaimed (no intra-fork conflict); English variants respected (`a uniform` untouched - correct y-sound); fork CI monitored to green.
## Mined gaps (discovered, not yet attempted)
- `2026-09-08` docs/README.md "utlize" typo (should be "utilise" in NZ dialect) — status: proposed
- `2026-09-08` docs/README.md duplicated "the basemaps service service" — status: proposed
- `2026-09-08` docs/README.md basemaps-config link points to linz/basemaps (should be linz/basemaps-config) — status: proposed
- `2026-09-08` trivial-fix pass (docs typos + broken links) — pr-opened (fork PR #9, docs/fix-doc-typos-and-links) — 10 files, 19 fixes, fork CI green; not yet upstream
- `2026-09-09` docs/operator-guide/quick-start.md bundle `--output $PWD/` should be `--output $PWD/config.json` (EISDIR, issue #3622) — status: attempted (fork PR #10)
