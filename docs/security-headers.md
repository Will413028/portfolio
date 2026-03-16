# 安全標頭與 CSP 設定指南

> 本文件說明專案中 HTTP 安全標頭的設定方式，重點在 Content Security Policy (CSP)。
> 適用對象：新加入的開發者、需要修改 CSP 規則的維護者。

---

## 快速總覽

本專案的安全標頭分成兩個地方設定：

| 設定位置 | 負責內容 | 為什麼放這裡 |
|----------|----------|-------------|
| `next.config.ts` → `headers()` | 靜態安全標頭（X-Frame-Options 等） | 不需要每次請求動態產生 |
| `middleware.ts` | Content-Security-Policy（CSP） | 與認證、多語系邏輯統一管理 |

---

## 什麼是 CSP？為什麼需要它？

Content Security Policy 是一個 HTTP 回應標頭，告訴瀏覽器「哪些來源的資源可以載入」。沒有 CSP 的話，攻擊者如果能注入一段 `<script>`，瀏覽器會毫不猶豫地執行它（XSS 攻擊）。

CSP 的作用：**即使攻擊者成功注入了 HTML，瀏覽器也會因為 CSP 規則而拒絕載入未授權來源的資源。**

---

## 為什麼用 `'unsafe-inline'` 而不是 Nonce？

| 方式 | 安全性 | 條件 |
|------|--------|------|
| `'nonce-xxx'` | 高 | 需要 SSR（每次請求動態渲染） |
| `'unsafe-inline'` | 中 | 相容 SSG（靜態生成） |

本專案所有頁面都是 **SSG（Static Site Generation）**，HTML 在 build 時就產生好了。Nonce 需要在每次請求時動態注入到 `<script>` 標籤上，這與 SSG 不相容。

`'unsafe-inline'` 搭配其他嚴格的 CSP 指令（`connect-src`、`frame-ancestors`、`img-src` 等），對一個沒有使用者輸入的作品集網站來說是務實且業界常見的做法。

> **未來如果改成 SSR**：可以改用 nonce-based CSP，在 middleware 動態產生 nonce，Next.js 會自動把 nonce 加到 inline `<script>` 上。

---

## 運作流程

```
瀏覽器發出請求
       │
       ▼
┌─────────────────────────────────┐
│  middleware.ts                  │
│                                 │
│  1. 處理認證（redirect 保護路由）│
│  2. 呼叫 intlMiddleware         │
│     → 處理多語系               │
│  3. 設定 CSP response header    │
│     → 瀏覽器強制執行 CSP       │
└─────────────────────────────────┘
       │
       ▼
┌─────────────────────────────────┐
│  瀏覽器接收 HTML（SSG 快取）    │
│                                 │
│  看到 CSP header，對所有資源    │
│  載入進行來源檢查              │
│  → 來源允許：載入 ✅           │
│  → 來源未列：拒絕 ❌           │
└─────────────────────────────────┘
```

---

## 目前的 CSP 規則明細

以下是 `middleware.ts` 中每條 CSP 指令的說明：

```
default-src 'self'
```
- **預設規則**：只允許載入同源（自己的 domain）的資源
- 未被其他指令覆蓋的資源類型都套用這條

```
script-src 'self' 'unsafe-inline' https://*.sentry.io
```
- **JavaScript**：允許同源腳本、inline script、Sentry SDK
- `'unsafe-inline'` 是 SSG 所必需的 — Next.js 會產生 inline script 來做 hydration

```
style-src 'self' 'unsafe-inline'
```
- **CSS**：允許同源樣式表和 inline styles
- Tailwind CSS 會產生 inline styles，所以必須允許

```
img-src 'self' data: blob: https://*.unsplash.com https://*.same-assets.com
```
- **圖片**：同源 + data URI（小圖 base64）+ blob URL + 外部圖片服務

```
font-src 'self'
```
- **字型**：只允許同源（`next/font` 會自動 self-host 字型）

```
connect-src 'self' https://*.sentry.io
```
- **API 請求**（fetch、XHR、WebSocket）：同源 + Sentry 的錯誤回報端點

```
frame-ancestors 'none'
```
- **禁止被嵌入 iframe**：防止點擊劫持（Clickjacking）

---

## 開發環境的處理

middleware 中有這段判斷：

```typescript
if (process.env.NODE_ENV !== "development") {
  response.headers.set("Content-Security-Policy", csp);
}
```

**開發環境跳過 CSP**，因為：
- Next.js HMR（Hot Module Replacement）使用 `eval()` 和大量 inline script
- Turbopack 也會動態注入開發用腳本
- 這些在嚴格 CSP 下會被擋住，導致開發體驗壞掉

---

## 常見情境操作指南

### 新增第三方腳本（例如 Google Analytics）

打開 `middleware.ts`，在 `csp` 陣列的 `script-src` 加上該腳本的 domain：

```typescript
"script-src 'self' 'unsafe-inline' https://*.sentry.io https://www.googletagmanager.com",
```

如果該腳本還會發 API 請求，也要加到 `connect-src`：

```typescript
"connect-src 'self' https://*.sentry.io https://www.google-analytics.com",
```

### 新增外部圖片來源

在 `img-src` 加上新的 domain：

```typescript
"img-src 'self' data: blob: https://*.unsplash.com https://*.same-assets.com https://cdn.example.com",
```

同時也要在 `next.config.ts` 的 `images.remotePatterns` 加上對應設定（Next.js Image 元件的獨立限制）。

### 需要載入外部字型（例如 Google Fonts CDN）

```typescript
"font-src 'self' https://fonts.gstatic.com",
"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
```

> 但建議優先使用 `next/font`，它會自動下載字型到專案中（self-host），不需要改 CSP。

### 嵌入外部 iframe（例如 YouTube）

需要新增 `frame-src` 指令：

```typescript
"frame-src https://www.youtube.com https://player.vimeo.com",
```

---

## 靜態安全標頭說明

以下標頭在 `next.config.ts` 的 `headers()` 中設定，每次請求都一樣：

| 標頭 | 值 | 作用 |
|------|-----|------|
| `X-Content-Type-Options` | `nosniff` | 禁止瀏覽器猜測 MIME 類型（防止把非 JS 檔當 JS 執行） |
| `X-Frame-Options` | `DENY` | 禁止被嵌入 iframe（與 CSP `frame-ancestors 'none'` 雙重防護） |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | 跨域請求只送 origin，不送完整 URL（保護用戶隱私） |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | 禁用攝影機、麥克風、定位（本站不需要這些權限） |

---

## 除錯：CSP 擋住了東西怎麼辦？

### 症狀辨識

- **頁面白畫面 / 一直轉圈**：inline script 被 CSP 擋住，React hydration 失敗
- **Console 出現紅色 CSP 錯誤**：`Refused to execute inline script because it violates the following Content Security Policy directive...`
- **特定功能壞掉但頁面能載入**：某個第三方資源被擋

### 除錯步驟

1. **打開 Chrome DevTools → Console**，找 CSP 相關錯誤訊息
2. 錯誤訊息會明確告訴你是哪個指令擋住了什麼資源，例如：
   ```
   Refused to load the script 'https://example.com/sdk.js'
   because it violates the following Content Security Policy directive:
   "script-src 'self' 'unsafe-inline' https://*.sentry.io"
   ```
3. 根據被擋的資源類型，到 `middleware.ts` 的 `csp` 陣列加上對應的 domain
4. 部署後用 `vercel --prod` 更新

### 快速驗證

用 curl 檢查 response header：

```bash
curl -sI https://your-domain.vercel.app/en | grep content-security-policy
```

---

## 踩坑紀錄與決策背景

### 坑 1：CSP 沒有 `'unsafe-inline'` 導致 SSG 頁面白畫面

**症狀**：部署後頁面一直轉圈（loading spinner），Console 充滿 CSP 錯誤。

**原因**：最初在 `next.config.ts` 的 `headers()` 中設定了嚴格的 CSP：

```typescript
"script-src 'self' https://*.sentry.io"  // 沒有 'unsafe-inline'
"style-src 'self'"                        // 沒有 'unsafe-inline'
```

Next.js 會在 SSG 頁面中注入多個 inline `<script>` 來傳遞 RSC payload 和 hydration 資料。沒有 `'unsafe-inline'`，這些全部被瀏覽器擋住 → React 無法 hydrate → 頁面永遠停在 loading。

**修法**：加上 `'unsafe-inline'`。

### 坑 2：嘗試用 Nonce 取代 `'unsafe-inline'`，但 SSG 不支援

**決策過程**：

1. 先嘗試在 middleware 產生隨機 nonce，設定 `script-src 'nonce-xxx'`
2. 同時透過 `NextResponse.next({ request: { headers } })` 把 nonce 傳給 Next.js 渲染管線
3. 部署後用 `curl` 檢查 — CSP header 正確包含 nonce，`x-middleware-request-x-nonce` 也有值
4. **但 inline `<script>` 上完全沒有 `nonce` 屬性**

**根本原因**：

```
Build 輸出：
●  (SSG)  prerendered as static HTML (uses generateStaticParams)
```

所有頁面都是 SSG — HTML 在 **build 時**就固定了。Middleware 在 **request 時**才執行，只能加 response header，**無法修改已經 pre-render 好的 HTML body**。所以 nonce 永遠不會出現在 `<script>` 標籤上。

**結論**：Nonce-based CSP 需要 SSR（每次請求動態渲染），才能在渲染時把 nonce 注入 `<script nonce="xxx">`。

### 坑 3：CSP 放在 `next.config.ts` vs `middleware.ts`

**最初做法**：CSP 放在 `next.config.ts` 的 `headers()` 中。

**問題**：`headers()` 是靜態設定，無法動態產生值（如 nonce）。雖然最終沒用 nonce，但 CSP 仍然移到 middleware，原因是：

- 與認證邏輯和多語系處理集中管理
- middleware 是 request 級別的 hook，未來如果需要動態 CSP（例如改成 SSR + nonce）可以直接擴展
- `next.config.ts` 的 `headers()` 保留給真正不會變的靜態標頭

### 坑 4：開發環境要跳過 CSP

**症狀**：本地 `pnpm dev` 頁面壞掉，Console 出現 CSP 錯誤。

**原因**：Next.js 開發模式使用 `eval()`（HMR）和大量動態注入的 inline script（Turbopack），在嚴格 CSP 下全部被擋。

**修法**：在 middleware 中判斷 `NODE_ENV !== "development"` 才設定 CSP。

### 決策總結

| 問題 | 選擇 | 理由 |
|------|------|------|
| Nonce vs `'unsafe-inline'` | `'unsafe-inline'` | SSG 不支援 nonce（HTML 在 build 時固定） |
| SSR vs SSG | 維持 SSG | 作品集網站效能優先，XSS 風險低（無使用者輸入） |
| CSP 放哪裡 | middleware.ts | 集中管理、未來擴展性好 |
| 開發環境 CSP | 跳過 | HMR / Turbopack 需要 eval 和 inline script |

---

## 檔案對照速查

| 檔案 | 安全相關的職責 |
|------|--------------|
| `middleware.ts` | CSP header、認證路由保護 |
| `next.config.ts` | 靜態安全標頭（X-Frame-Options 等）、圖片 domain 白名單 |
| `sentry.client.config.ts` | Sentry 前端初始化（需要 CSP 允許 `*.sentry.io`） |
| `sentry.server.config.ts` | Sentry 後端初始化 |
| `sentry.edge.config.ts` | Sentry Edge Runtime 初始化 |
