# portfolio

個人主頁（讀者是用人主管），**強調呈現與可驗證的證據**而非 tech showcase。

## Stack

Next.js + pnpm（`packageManager: pnpm@10.26.2`，lockfile 是 `pnpm-lock.yaml`）+ Biome（linter / formatter）+ Tailwind CSS v4（設計 token 在 `src/app/globals.css`）+ next-intl（多語系，見 `messages/`）。

- `pnpm install` / `pnpm run`（非 npm / bun）
- `biome check` / `biome format`（非 ESLint / Prettier）
- Branch model：日常改動推到 `dev`；`main` 只經 `dev`→`main` 的 PR 以 merge commit 合併（不 squash、不 rebase），不直推 `main`；推 `main` 才觸發 Vercel Production。
- repo root 驗證入口：`pnpm lint`、`pnpm test`、`pnpm build`；依行為變更選受影響測試，純文字／文件改動核對內容與路徑即可。

## 取捨

- ✅ SEO、可讀性、載入速度、手機體驗；用新技術但不為了新而新（穩定 > 前沿）
- ❌ 不為了 portfolio 過度工程化（反例：用 Redux toolkit + Saga 做一個只有 5 頁的站）

## 供應鏈與 CI 關卡

- 會擋下改動的點：`main` 只能經 PR 進入，required check 是 `gate (CI)`；它要求 `CI.yml` 的所有 job（build、static、test、secrets、vulnerabilities、workflows）都通過。`dev` 可直接推，CI 會跑但不擋。
- 檢查：gitleaks（外洩的密鑰）、osv-scanner（依賴的已知漏洞，`osv-weekly.yml` 每週另外重掃 `main`）、actionlint（workflow 語法）、zizmor（workflow 安全，設定在 `.github/zizmor.yml`）。本機重現：`gitleaks git .`、`osv-scanner scan --lockfile=pnpm-lock.yaml`、`actionlint`、`zizmor --strict-collection --config .github/zizmor.yml .github`。
- Action 一律用完整 commit SHA 引用，行尾註明版本；workflow 預設 `permissions: contents: read`，需要寫入的 job 個別開。
- 新版本冷卻期 7 天：pnpm 的 `minimumReleaseAge`（`pnpm-workspace.yaml`）與 Dependabot 的 `cooldown`。lockfile 一律進版控。
- 漏洞修補期限（依嚴重度）：Critical 7 天、High 30 天、Medium／Low 90 天。回報管道見 `SECURITY.md`。沒有修補版時才在 `osv-scanner.toml` 加例外，必須附理由與不超過期限的 `ignoreUntil`。
- agent 不自己新增或升級依賴：先列出套件與版本，確認套件真的存在、不是剛註冊的，等 Will 同意。

## 依賴方向

`src/` 分層，只准上層 import 下層：`app/`、`proxy.ts` → `components/layout`、`components/analytics.tsx` → `components/shared` → `i18n/` → `lib/`；`lib/` 不 import `src/` 內任何程式，全專案不得有依賴環。

- 檢查：`pnpm check:arch`（dependency-cruiser，規則在 `.dependency-cruiser.cjs`），CI 的 static job 會跑。
- 例外清單 `.dependency-cruiser-known-violations.json` 目前為空，`src/__tests__/architecture.test.ts` 把條數鎖成等於現值，只減不增；清掉一條就在同一個改動調低。
- 同一個測試對每條規則跑故意違規的 fixture，並確認每個路徑 pattern 都對到實際檔案；改規則時同步改 fixture。

## 設計反模式檢查與鎖定值

- Biome（`pnpm lint` 帶 `--error-on-warnings`）另開 `noFloatingPromises`、`noMisusedPromises`、`useExhaustiveSwitchCases`、`useMaxParams`、`noProcessEnv`、`noFocusedTests`、`noSkippedTests`；環境變數只准在 `src/lib/site-url.ts`、`src/components/analytics.tsx` 讀（`biome.json` 的 overrides），`src/proxy.ts` 一處列為既有例外。
- knip（`pnpm check:deps`）會擋；既有的 7 條忽略寫在 `knip.json`。
- 鎖定值，只減不增（`src/__tests__/baselines.test.ts`）：`biome-ignore` 2 個、`@ts-ignore`／`@ts-expect-error`／`eslint-disable` 0 個、`knip.json` 忽略 7 條。清掉一條就在同一個改動調低；往壞的方向動要在 commit 訊息寫理由。
- 執行的測試數只增不減：CI 跑 `pnpm test:ci`，`scripts/check-test-count.mjs` 的 `MIN_TESTS` 是下限；加測試時調高，刪測試要在 commit 訊息列出。
- pre-commit 的 biome 用 `--write` 加 `stage_fixed: true`，自動修正會一起進 commit。
