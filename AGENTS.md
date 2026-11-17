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
- 漏洞修補期限（依嚴重度）：Critical 7 天、High 30 天、Medium／Low 90 天。回報管道見 `SECURITY.md`。
- agent 不自己新增或升級依賴：先列出套件與版本，確認套件真的存在、不是剛註冊的，等 Will 同意。
