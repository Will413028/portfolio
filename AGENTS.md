# portfolio

個人主頁（讀者是用人主管），**強調呈現與可驗證的證據**而非 tech showcase。

## Stack

Next.js + pnpm（`packageManager: pnpm@10.26.2`，lockfile 是 `pnpm-lock.yaml`）+ Biome（linter / formatter）+ Tailwind CSS v4（設計 token 在 `src/app/globals.css`）+ next-intl（多語系，見 `messages/`）。

- `pnpm install` / `pnpm run`（非 npm / bun）
- `biome check` / `biome format`（非 ESLint / Prettier）
- repo root 驗證入口：`pnpm lint`、`pnpm test`、`pnpm build`；依行為變更選受影響測試，純文字／文件改動核對內容與路徑即可。

## 取捨

- ✅ SEO、可讀性、載入速度、手機體驗；用新技術但不為了新而新（穩定 > 前沿）
- ❌ 不為了 portfolio 過度工程化（反例：用 Redux toolkit + Saga 做一個只有 5 頁的站）
