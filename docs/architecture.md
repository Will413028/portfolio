# 前端接案萬用模板架構文件

> 本文件為 Claude Code 開發前端專案時的架構參考。適用於形象網站、電商、後台儀表板等各類專案。
> 基於 Next.js 16 App Router，可直接套用至新專案。

---

## 技術棧總覽

| 領域 | 技術選擇 | 用途 |
|------|----------|------|
| 框架核心 | Next.js 16 (App Router) | SSR/SSG/ISR，路由，中介層 |
| UI 與樣式 | Tailwind CSS v4 + shadcn/ui | 原子化 CSS + 可客製化元件庫 |
| 元件工具 | class-variance-authority + tailwind-merge + clsx | 元件 variant 管理 + class 合併（`cn()` 函式） |
| 圖標 | Lucide React | 開源 SVG icon 庫，搭配 shadcn/ui 使用 |
| 動畫基礎 | tailwindcss-animate | shadcn/ui 動畫依賴（Tailwind v4 用 `@plugin` 載入） |
| 全域狀態 | Zustand | 客戶端狀態（購物車、UI 開關、主題） |
| 伺服器資料 | TanStack Query v5 | API 快取、重新抓取、樂觀更新 |
| 表單驗證 | React Hook Form + Zod v4 | 高效能表單 + 端到端型別安全驗證 |
| 動畫效果 | Motion（原 Framer Motion） | 頁面轉場、微互動、滾動動畫 |
| 語系切換 | next-intl | App Router 原生支援，Server/Client Component 皆可用 |
| URL 狀態 | nuqs | 搜尋、過濾器、分頁同步至 URL |
| 錯誤監控 | Sentry | 前後端錯誤追蹤、Session Replay |
| 程式碼品質 | Biome | 格式化 + Lint，唯一 linter（無 ESLint） |
| 部署 | Vercel | 圖片自動優化、Edge Functions、ISR |

### 漸進式採用策略

並非每個專案都需要全部套件。依專案規模分階段導入：

- **Phase 1（必選）**：目錄結構、Tailwind + shadcn/ui、Zustand、Zod、原生 fetch 封裝、Biome
- **Phase 2（規模成長時）**：TanStack Query、React Hook Form、nuqs
- **Phase 3（正式上線時）**：Sentry、CSP 安全標頭、Motion 頁面轉場

> **關於 `next-intl`**：多語系未列入固定 Phase，因為它取決於專案需求。如果確定需要多語系，建議 Phase 1 就加入 — 事後遷移需要把所有路由搬進 `[locale]/`，成本很高。

---

## 目錄結構

> 本專案採用 next-intl 多語系架構，URL 自動變成 `/en/about`、`/zh-TW/about`。
> next-intl 要求所有頁面必須放在 `[locale]` 動態路段下。

```
my-project/
├── src/
│   ├── app/                        # 1. 路由層 (Next.js App Router)
│   │   ├── layout.tsx              #    Root Layout（pass-through + 全域 metadata）
│   │   ├── globals.css             #    Tailwind 進入點 + shadcn/ui 色彩變數 + 自訂動畫
│   │   ├── [locale]/               #    next-intl 語系路段（所有頁面都在這裡面）
│   │   │   ├── layout.tsx          #    語系 Layout（<html lang={locale}> + Providers）
│   │   │   ├── not-found.tsx       #    自訂 404 頁面
│   │   │   ├── (marketing)/        #    路由群組：公開頁面（首頁、關於、定價）
│   │   │   │   ├── page.tsx
│   │   │   │   └── layout.tsx      #    含 Header + Footer
│   │   │   ├── (auth)/             #    路由群組：授權頁面（登入、註冊）
│   │   │   │   ├── login/page.tsx
│   │   │   │   └── layout.tsx      #    極簡置中版面
│   │   │   └── (dashboard)/        #    路由群組：需登入的內部系統
│   │   │       ├── overview/page.tsx
│   │   │       ├── orders/         #    Route Colocation 範例
│   │   │       │   ├── page.tsx
│   │   │       │   ├── actions.ts  #       此頁面專用的 Server Actions
│   │   │       │   └── _components/#       _ 前綴 → 不會變成路由
│   │   │       ├── error.tsx       #    Dashboard Error Boundary
│   │   │       └── layout.tsx      #    側邊欄 + 頂部列
│   │   ├── global-error.tsx        #    最頂層 Error Boundary（捕捉 Root Layout 錯誤）
│   │   ├── sitemap.ts              #    自動生成 sitemap.xml
│   │   ├── robots.ts               #    自動生成 robots.txt
│   │   └── api/                    #    API Route Handlers（不需語系前綴）
│   │
│   ├── i18n/                        # 2. 國際化設定層 (next-intl)
│   │   ├── routing.ts              #    defineRouting：locales、defaultLocale
│   │   ├── request.ts              #    getRequestConfig：載入翻譯 JSON
│   │   └── navigation.ts           #    createNavigation：Link、redirect、useRouter
│   │
│   ├── components/                  # 3. 視圖層（純 UI，不含業務邏輯）
│   │   ├── ui/                     #    shadcn/ui 元件（Button、Input、Modal）
│   │   ├── layout/                 #    佈局元件（Header、Footer、Sidebar）
│   │   └── shared/                 #    跨頁面共用元件（PageTitle、EmptyState）
│   │
│   ├── features/                    # 4. 功能模組層（接案核心！）
│   │   ├── auth/                   #    登入模組
│   │   │   ├── components/         #       LoginForm、RegisterForm
│   │   │   ├── hooks/              #       useLogin、useCurrentUser
│   │   │   ├── api/                #       auth-api.ts
│   │   │   ├── actions.ts          #       Server Actions
│   │   │   ├── types.ts
│   │   │   ├── validations.ts
│   │   │   └── index.ts            #       Barrel export
│   │   ├── products/               #    商品模組
│   │   └── checkout/               #    結帳模組
│   │
│   ├── lib/                         # 5. 核心工具層（無狀態純函式）
│   │   ├── api-client.ts           #    封裝 fetch（Token 攔截器、錯誤處理）
│   │   ├── validations.ts          #    共用 Zod Schema
│   │   ├── animations.ts           #    Motion 動畫預設
│   │   └── utils.ts                #    cn()、日期格式化、貨幣格式化
│   │
│   ├── hooks/                       # 6. 共用 Hooks
│   │   ├── use-debounce.ts         #    防抖（搜尋框）
│   │   └── use-media-query.ts      #    螢幕寬度偵測
│   │
│   ├── store/                       # 7. 全域狀態層 (Zustand)
│   │   ├── use-ui-store.ts         #    側邊欄開關、主題、手機選單
│   │   └── use-cart-store.ts       #    購物車（電商專案）
│   │
│   ├── types/                       # 8. 型別定義層
│   │   └── index.ts                #    User、ApiResponse、PaginatedResponse
│   │
│   └── providers/                   # 9. 狀態提供者層
│       └── query-provider.tsx      #    TanStack Query Provider + Devtools
│
├── messages/                        # 翻譯檔（每個語系一個 JSON）
│   ├── en.json
│   └── zh-TW.json
│
├── public/                          # 靜態資源（Logo、字體、固定圖檔）
├── middleware.ts                    # next-intl 語系路由 + Auth 權限檢查
├── next.config.ts                   # Next.js 設定（next-intl plugin、安全標頭、Sentry）
├── postcss.config.mjs              # PostCSS 設定（Tailwind v4 透過 @tailwindcss/postcss 整合）
├── sentry.client.config.ts          # Sentry 客戶端設定（Phase 3）
├── sentry.server.config.ts          # Sentry 伺服器端設定（Phase 3）
├── sentry.edge.config.ts            # Sentry Edge Runtime 設定（Phase 3）
├── biome.json                       # Biome 格式化 + Lint 設定
├── .env.example                     # 環境變數範例（交付必備）
└── package.json
```

### 不使用 i18n 的簡化版

若專案不需要多語系，URL 直接是 `/about`、`/login`、`/overview`。差異只有：

1. 不需要 `i18n/` 目錄和 `messages/` 翻譯檔
2. 路由群組直接放在 `app/` 下（不需要 `[locale]/`）
3. Root Layout 直接包含 `<html>` + `<body>` + Providers
4. `middleware.ts` 只處理 Auth，不處理語系路由
5. `next.config.ts` 不需要 `createNextIntlPlugin()`
6. 元件中使用 `next/link` 和 `next/navigation`，不需要 `@/i18n/navigation`

---

## 架構設計原則

### 1. 功能程式碼放哪裡？— features/ vs Route Colocation

Next.js App Router 有兩種主流的程式碼組織方式，各有適用場景：

#### 方式 A：`features/` 功能模組（跨頁面共用的功能）

**問題**：傳統架構把所有元件放 `components/`、API 放 `services/`、Hook 放 `hooks/`。當客戶說「拿掉購物車功能」，你需要到 5 個目錄裡挑出相關程式碼。

**解法**：每個功能模組是一個自包含資料夾，包含該功能的所有程式碼。

```
features/checkout/
├── components/        # CheckoutForm、CartSummary
├── hooks/             # useCheckout、usePayment
├── api/               # checkout-api.ts
├── actions.ts         # Server Actions（表單送出等）
├── types.ts           # Order、PaymentIntent
├── validations.ts     # checkoutSchema
└── index.ts           # Barrel export（只暴露公開 API）
```

#### 方式 B：Route Colocation（只有單一頁面使用的功能）

Next.js App Router 允許在路由資料夾內放非路由檔案（用 `_` 前綴排除路由識別）。當某個功能只有一個頁面使用時，直接放在該路由資料夾內，零跨目錄跳轉：

```
app/[locale]/(dashboard)/orders/
├── page.tsx                 # 頁面元件
├── actions.ts               # 此頁面的 Server Actions
├── _components/             # _ 前綴 → 不會變成路由
│   ├── order-table.tsx
│   └── order-filters.tsx
└── _lib/
    └── validations.ts       # 此頁面的驗證 schema
```

#### 判斷規則

| 情境 | 放哪裡 | 原因 |
|------|--------|------|
| 功能被 ≥ 2 個頁面使用 | `features/` | 避免重複程式碼 |
| 功能只有 1 個頁面使用 | 路由資料夾內（`_components/`） | 打開資料夾就是全部 |
| 純 UI 元件，無業務邏輯 | `components/shared/` | 跨功能共用 |
| 全站共用的狀態/工具 | `store/`、`lib/`、`hooks/` | 基礎設施層 |

**混合使用範例**：

```
src/
├── app/[locale]/(dashboard)/
│   └── orders/
│       ├── page.tsx              ← 使用 features/cart 的 hook + 自己的 _components
│       ├── actions.ts            ← 只有 orders 頁面用的 Server Action
│       └── _components/          ← 只有 orders 頁面用的元件
│           └── order-filters.tsx
│
├── features/                     ← 跨頁面共用的功能模組
│   ├── auth/                    ← 登入/註冊/token，多處使用
│   ├── cart/                    ← 購物車，Header + Checkout 都用
│   └── notifications/           ← 通知系統，全站使用
```

> **起始建議**：先把功能程式碼放在路由資料夾內。當第二個頁面也需要用到時，再提取到 `features/`。避免過早抽象。

#### `features/` 規則

- 功能之間不互相 import（透過 `index.ts` 暴露最小公開 API）
- 刪除整個功能目錄後，不應影響其他功能（前提：沒有外部引用）
- 共用的東西放 `components/shared/`、`hooks/`、`lib/`

> **Barrel export 注意事項**：`index.ts` re-export 會讓 bundler 在 import 任何一個 export 時拉入整個模組圖。對於小型 feature 影響可忽略；如果某個 feature 很大且包含重量級依賴（如圖表庫），建議直接 import 具體檔案路徑，不經過 `index.ts`。

**跨模組通訊**：當功能之間確實需要共享資料時（例如 `checkout` 需要 `products` 的型別），遵循以下優先順序：

1. **共用型別**：將兩邊都需要的型別定義移到 `types/index.ts`
2. **在路由層組合**：在 `app/` 的頁面元件中同時使用兩個 feature 的 hook，由頁面負責串接
3. **Zustand store 當中介**：如果需要跨元件即時共享狀態（如購物車數量顯示在 Header）

```
推薦                               避免
app/[locale]/(dashboard)/          features/checkout/hooks/
  checkout/page.tsx                  import { productApi }
  import { useProducts }               from "../../products/api"
  import { useCheckout }             // 直接跨 feature import
  // 在頁面層組合兩個 feature
```

### 2. 路由群組隔離版面

Next.js 的 `(folderName)` 路由群組不會影響 URL，但可以擁有獨立的 `layout.tsx`。

路由群組放在 `[locale]/` 下：

```
app/[locale]/
├── (marketing)/     → /en/about, /zh-TW/about（含 Header + Footer）
├── (auth)/          → /en/login, /zh-TW/login（極簡置中）
└── (dashboard)/     → /en/overview, /zh-TW/overview（側邊欄 + 頂部列）
```

| 群組 | 版面 | URL 範例 |
|------|------|---------|
| `(marketing)` | Header + Footer | `/en/`、`/en/about`、`/zh-TW/about` |
| `(auth)` | 極簡置中 | `/en/login`、`/zh-TW/login` |
| `(dashboard)` | 側邊欄 + 頂部列 | `/en/overview`、`/zh-TW/overview` |

### 3. 三層狀態管理

| 狀態類型 | 工具 | 範例 |
|----------|------|------|
| 客戶端全域 | Zustand | 購物車、UI 開關、主題偏好 |
| 伺服器資料 | TanStack Query | API 回應、快取、重新抓取 |
| URL 狀態 | nuqs | 搜尋關鍵字、過濾器、分頁 |

**原則**：不要用 Zustand 存 API 資料（用 TanStack Query），不要用 useState 存搜尋參數（用 nuqs）。

### 4. Server Actions vs API Routes

Next.js 16 的 Server Actions 已經成熟，可以取代部分 API Route：

| 場景 | 推薦方式 | 原因 |
|------|----------|------|
| 表單送出（新增/修改資料） | Server Actions | 自動處理 revalidation、progressive enhancement |
| 第三方 API 代理 | API Routes | 需要自訂 HTTP method、headers |
| Webhook 接收 | API Routes | 外部服務回呼需要固定 URL |
| Client Component 資料抓取 | TanStack Query + API Routes | 需要快取、輪詢、樂觀更新 |
| Server Component 資料抓取 | 直接 `fetch` 或 ORM（搭配 `cache()`） | 不需要額外的 API 層 |

```typescript
// Server Action 範例（放在 features/contact/actions.ts）
"use server";

import { revalidatePath } from "next/cache";
import { contactFormSchema } from "./validations";

type ActionState = {
  success: boolean;
  errors?: Record<string, string[]>;
};

export async function submitContactForm(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const parsed = contactFormSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors };
  }
  // 儲存到資料庫或發送通知...
  revalidatePath("/contact"); // 清除此頁面的快取，讓下次載入拿到最新資料
  return { success: true };
}
```

> **Cache Invalidation**：mutation 後必須呼叫 `revalidatePath(path)` 或 `revalidateTag(tag)` 來清除快取。`revalidatePath` 重新驗證特定路徑；`revalidateTag` 重新驗證帶有特定 tag 的所有 `fetch` 請求，適合跨頁面 invalidation。

#### Server Action 內的 Auth 驗證

Middleware 保護的是「路由存取」，但 Server Action 可以被直接 POST 呼叫。**Best practice 是在 action 內部獨立驗證身份**，不要只依賴 middleware：

```typescript
// features/orders/actions.ts
"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { orderSchema } from "./validations";

export async function createOrder(_prevState: ActionState, formData: FormData) {
  // 1. Auth 驗證 — 不依賴 middleware
  const token = (await cookies()).get("auth_token")?.value;
  if (!token) {
    return { success: false, errors: { auth: ["未登入"] } };
  }

  // 2. 輸入驗證
  const parsed = orderSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors };
  }

  // 3. 業務邏輯...
  revalidatePath("/orders");
  return { success: true };
}
```

```tsx
// 元件中使用 — useActionState（React 19 best practice）
"use client";

import { useActionState } from "react";
import { submitContactForm } from "../actions";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, {
    success: false,
  });

  return (
    <form action={formAction}>
      <input name="name" />
      {state.errors?.name && <p>{state.errors.name[0]}</p>}
      <button type="submit" disabled={isPending}>
        {isPending ? "送出中..." : "送出"}
      </button>
      {state.success && <p>送出成功！</p>}
    </form>
  );
}
```

> **為何用 `useActionState`**：支援 progressive enhancement（JavaScript 壞掉或載入前也能送出表單）、自動管理 pending 狀態、與 React 19 的 `<form action>` 整合。簡單表單不一定需要 React Hook Form。

---

## 核心模組實作規範

### `cn()` 工具函式 (`lib/utils.ts`)

shadcn/ui 的核心工具，合併 Tailwind class 並處理衝突：

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

使用方式：`cn("px-4 py-2", isActive && "bg-primary", className)` — `clsx` 處理條件合併，`twMerge` 處理 Tailwind class 衝突（例如 `px-4` 和 `px-2` 只保留後者）。

### API Client (`lib/api-client.ts`)

封裝原生 `fetch`，不使用 axios（省 11KB bundle）。

```typescript
// 使用方式
import { apiClient } from "@/lib/api-client";

// 型別安全的 GET
const user = await apiClient.get<User>("/api/users/1");

// POST with body
const result = await apiClient.post<Order>("/api/orders", { items, total });

// 帶查詢參數
const products = await apiClient.get<Product[]>("/api/products", {
  params: { page: "1", category: "electronics" },
});
```

**內建功能**：
- 自動附加 `Authorization: Bearer <token>` 標頭
- JSON 自動解析
- 統一的 `ApiError` 錯誤類別（含 status、message、errors）
- 支援 Server Component 和 Client Component

**Token 取得策略**：api-client 從 cookie 讀取 `auth_token`（與 middleware 一致）。Server Component 中透過 `cookies()` 讀取；Client Component 中瀏覽器自動帶上 cookie。避免使用 `localStorage` 存放 token（XSS 風險）。

**Cookie 安全旗標**：設定 `auth_token` cookie 時，必須加上以下旗標：

| 旗標 | 值 | 用途 |
|------|------|------|
| `HttpOnly` | `true` | 防止 JS 讀取 cookie（XSS 防護核心） |
| `Secure` | `true` | 僅 HTTPS 傳輸（開發環境 localhost 自動豁免） |
| `SameSite` | `Lax` | 防止 CSRF 攻擊（`Strict` 會阻擋外站連結導入的請求） |
| `Path` | `/` | 全站可用 |
| `Max-Age` | 依需求 | 建議 7 天（`604800`），不要用 `Expires` |

```typescript
// 設定 cookie 範例（在 Server Action 或 API Route 中）
import { cookies } from "next/headers";

(await cookies()).set("auth_token", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
  maxAge: 60 * 60 * 24 * 7, // 7 天
});
```

### Zod 驗證 (`lib/validations.ts`)

共用 Schema 定義一次，客戶端表單驗證和 API Route 驗證都能用：

```typescript
import { z } from "zod";

// 定義 Schema
export const contactFormSchema = z.object({
  name: z.string().min(1, "必填"),
  email: z.string().email("請輸入有效的電子郵件"),
  message: z.string().min(10, "訊息至少 10 個字"),
});

// 自動推導 TypeScript 型別
export type ContactFormInput = z.infer<typeof contactFormSchema>;
```

> **Zod v4 注意事項**：本專案使用 Zod v4。v4 與 v3 的主要差異：
> - `z.object()` 預設為 strict mode（不允許多餘屬性），需要 `z.object().passthrough()` 才等同 v3 行為
> - 新增 `z.interface()` 用於可擴展的物件 schema
> - Error format 變更：`error.flatten()` 回傳結構略有不同
> - 效能大幅提升（解析速度快 2-7 倍）
> - 完整遷移指南見 [Zod v4 官方文件](https://v4.zod.dev)

### Zustand Store (`store/`)

```typescript
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

// persist middleware：購物車資料自動存入 localStorage，重新整理不遺失
export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === item.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return { items: [...state.items, { ...item, quantity: 1 }] };
        }),
      removeItem: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
      clearCart: () => set({ items: [] }),
    }),
    { name: "cart-storage" }, // localStorage key
  ),
);

// Derived selector — 在元件中使用，不存在 store 裡
export const selectTotalPrice = (state: CartState) =>
  state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

// 使用方式
// const total = useCartStore(selectTotalPrice);
```

### QueryProvider (`providers/query-provider.tsx`)

```typescript
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export function QueryProvider({ children }: { children: React.ReactNode }) {
  // 用 useState 確保每個 SSR request 都有獨立的 QueryClient，避免跨請求資料洩漏
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 分鐘內不重新抓取
            retry: 1,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
```

> **重要**：不要在模組層級 `const queryClient = new QueryClient()` — 這會導致 SSR 時所有請求共用同一個快取，造成跨使用者資料洩漏。必須在 `useState` 或 `useRef` 內建立。

> **關於 `refetchOnWindowFocus`**：TanStack Query 預設為 `true`（使用者切回分頁時自動拿最新資料）。建議保持預設值，只在特定 query 上關閉。如果全域關掉，使用者看到的資料可能已過期。

### TanStack Query — Query Key Factory + Hooks

Query key 使用 factory 模式集中管理，避免散落各處的魔術字串：

```typescript
// features/products/api/query-keys.ts
export const productKeys = {
  all: ["products"] as const,
  lists: () => [...productKeys.all, "list"] as const,
  list: (params?: ProductParams) => [...productKeys.lists(), params] as const,
  details: () => [...productKeys.all, "detail"] as const,
  detail: (id: string) => [...productKeys.details(), id] as const,
};
```

```typescript
// features/products/hooks/use-products.ts
import { useQuery, useMutation, useQueryClient, keepPreviousData } from "@tanstack/react-query";
import { productApi } from "../api/product-api";
import { productKeys } from "../api/query-keys";

export function useProducts(params?: { page?: number; category?: string }) {
  return useQuery({
    queryKey: productKeys.list(params),
    queryFn: () => productApi.list(params),
    placeholderData: keepPreviousData, // 切換篩選/分頁時保留前一次資料，避免 UI 閃爍
  });
}

export function useCreateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: productApi.create,
    onSuccess: () => {
      // 精確 invalidate 列表，不影響詳情快取
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
    },
  });
}
```

> **為何用 factory**：`productKeys.lists()` invalidate 所有列表查詢（不同 params 的都會重新抓取），而 `productKeys.detail(id)` 只影響特定商品。層級化的 key 結構讓快取失效更精確。

### React Hook Form + Zod（功能模組內）

```typescript
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../validations";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    // 呼叫 API...
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} />
      {errors.email && <p>{errors.email.message}</p>}

      <input {...register("password")} type="password" />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">登入</button>
    </form>
  );
}
```

---

## 樣式系統 — Tailwind CSS v4 + shadcn/ui

### shadcn/ui 色彩變數系統

shadcn/ui 使用 HSL CSS 變數定義色彩主題。所有顏色在 `globals.css` 的 `:root` 中定義，再透過 `@theme` 區塊對應到 Tailwind class：

```css
/* globals.css — 色彩變數定義 */
/* 注意：使用 @layer utilities 而非 @layer base，這是 shadcn/ui CLI 為 Tailwind v4 生成的模式，
   確保 CSS 變數優先級高於 Tailwind 的 base 層 */
@layer utilities {
  :root {
    --background: 0 0% 4%;        /* 極深黑 */
    --foreground: 0 0% 95%;       /* 近白 */
    --primary: 180 60% 50%;       /* 青色 */
    --accent: 320 80% 55%;        /* 粉紫色 */
    --muted: 0 0% 15%;
    --muted-foreground: 0 0% 60%;
    --border: 0 0% 15%;
    --radius: 0.75rem;
    /* ...更多變數 */
  }
}

/* @theme 區塊 — 將 CSS 變數對應為 Tailwind class */
@theme {
  --color-background: hsl(var(--background));
  --color-primary: hsl(var(--primary));
  --color-accent: hsl(var(--accent));
  /* ... */
}
```

**使用方式**：在元件中直接用 `bg-background`、`text-primary`、`border-border` 等 Tailwind class。修改整站色彩只需改 `:root` 中的 HSL 值。

**自訂專案主題**：複製 `:root` 區塊，修改 HSL 值即可。建議用 [shadcn/ui Themes](https://ui.shadcn.com/themes) 工具產生色彩配置。

### Dark Mode 策略

本專案預設為暗色主題（`:root` 中的色彩變數即為暗色），使用 class-based dark mode：

```css
/* globals.css */
@custom-variant dark (&:is(.dark *));
```

- **觸發方式**：在 `<html>` 加上 `class="dark"` 即啟用暗色模式
- **目前設定**：僅定義暗色主題（無 light mode 切換），適合暗色系設計的形象網站
- **如需明暗切換**：推薦使用 [`next-themes`](https://github.com/pacocoursey/next-themes)（shadcn/ui 官方推薦），自動處理 SSR 防閃爍（FOUC）、系統偏好偵測、`localStorage` 持久化。在 `:root` 定義淺色變數，在 `.dark` 選擇器中定義暗色變數即可

```bash
pnpm add next-themes
```

```tsx
// providers/theme-provider.tsx
"use client";
import { ThemeProvider } from "next-themes";

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  );
}

// <html> 加上 suppressHydrationWarning 防止 hydration 警告
<html lang={locale} suppressHydrationWarning>
```

### 自訂 Container Utility

`globals.css` 覆寫了 Tailwind 預設的 `container`，為各斷點設定不同的 max-width 和 padding：

```css
@utility container {
  margin-inline: auto;
  padding-inline: 1rem;
  @media (width >= 640px)  { max-width: 640px;  padding-inline: 2rem; }
  @media (width >= 768px)  { max-width: 768px; }
  @media (width >= 1024px) { max-width: 1024px; padding-inline: 4rem; }
  @media (width >= 1280px) { max-width: 1280px; padding-inline: 5rem; }
  @media (width >= 1536px) { max-width: 1536px; padding-inline: 6rem; }
}
```

使用：`<div className="container">` 即可套用響應式容器。

### 自訂 CSS 工具類

`globals.css` 可透過 `@utility` 定義專案專屬的工具類。以下是常見的通用模式：

| Class | 用途 | 適用場景 |
|-------|------|----------|
| `.gradient-text` | 漸層文字效果 | 形象網站標題 |
| `.glass` | 毛玻璃效果（`backdrop-filter: blur`） | 卡片、導覽列 |
| `.animate-marquee` | 水平跑馬燈動畫 | Logo 牆、合作夥伴輪播 |
| `.animate-float` | 上下浮動動畫 | 裝飾元素 |

> **原則**：自訂 CSS class 應限於 Tailwind 無法直接表達的複合效果（如多層漸層、複雜動畫）。能用 Tailwind 原生 class 組合的效果，不要另外定義 utility。

### PostCSS 設定

Tailwind CSS v4 透過 PostCSS 整合，設定檔為 `postcss.config.mjs`：

```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

---

## Motion 動畫系統

> **套件更名**：Framer Motion 已更名為 **Motion**，套件名從 `framer-motion` 改為 `motion`，import 路徑為 `motion/react`。

### 預設動畫變體 (`lib/animations.ts`)

```typescript
import type { Variants } from "motion/react";

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};
```

### 使用方式

```tsx
import { motion } from "motion/react";
import { slideUp, staggerContainer } from "@/lib/animations";

// 單一元素動畫
<motion.div variants={slideUp} initial="hidden" animate="visible">
  內容
</motion.div>

// 交錯動畫（列表）
<motion.ul variants={staggerContainer} initial="hidden" animate="visible">
  {items.map((item) => (
    <motion.li key={item.id} variants={slideUp}>
      {item.name}
    </motion.li>
  ))}
</motion.ul>
```

### 滾動觸發元件 (`components/shared/motion-wrapper.tsx`)

```tsx
import { MotionWrapper } from "@/components/shared/motion-wrapper";

<MotionWrapper>
  <div>滾動到此處時自動淡入</div>
</MotionWrapper>
```

**效能規則**：動畫只使用 `transform` 和 `opacity`（GPU 加速），避免 `width`、`height`、`top`、`left`。

> **遷移提示**：如果既有專案仍使用 `framer-motion`，將 import 路徑從 `"framer-motion"` 改為 `"motion/react"` 即可，API 完全相容。

---

## 程式碼品質 — Biome

使用 [Biome](https://biomejs.dev/) 統一處理格式化與 Lint，取代 ESLint + Prettier 雙工具鏈。

### 為何選 Biome

| 比較項目 | Biome | ESLint + Prettier |
|----------|-------|-------------------|
| 設定檔數量 | 1（`biome.json`） | 2~3（`.eslintrc`、`.prettierrc`、`.eslintignore`） |
| 執行速度 | Rust 實作，極快 | JavaScript 實作，較慢 |
| 格式化 + Lint | 內建整合 | 需安裝 `eslint-config-prettier` 避免衝突 |
| Next.js 專屬規則 | `performance.noImgElement` 等 Biome 內建規則覆蓋 | `eslint-config-next` 原生支援 |

> **Next.js 16 官方支援**：`create-next-app` 建立專案時可直接選擇 Biome 作為 linter，ESLint 和 Biome 為平等的一等選項。`next lint` 指令已在 Next.js 16 中移除。

### 設定方式

```json
// biome.json (v2) — 完整設定，與專案實際配置一致
{
  "$schema": "https://biomejs.dev/schemas/2.4.5/schema.json",
  "vcs": {
    "enabled": false,
    "clientKind": "git",
    "useIgnoreFile": false
  },
  "files": {
    "ignoreUnknown": false,
    "includes": [
      "**/src/**/*.ts",
      "**/src/**/*.tsx",
      "!**/dist",
      "!**/.next",
      "!**/node_modules",
      "!**/build",
      "!**/src/generated/**"
    ]
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space"
  },
  "assist": { "actions": { "source": { "organizeImports": "on" } } },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "correctness": {
        "noUnusedVariables": "off"  // 開發階段方便迭代，正式交付前建議改為 "warn"
      },
      "a11y": {
        "noAutofocus": "off",
        "noDistractingElements": "off",
        "noHeaderScope": "off",
        "noInteractiveElementToNoninteractiveRole": "off",
        "noLabelWithoutControl": "off",
        "noNoninteractiveElementToInteractiveRole": "off",
        "noNoninteractiveTabindex": "off",
        "noPositiveTabindex": "off",
        "noRedundantAlt": "off",
        "noRedundantRoles": "off",
        "noSvgWithoutTitle": "off",
        "useAltText": "off",
        "useKeyWithClickEvents": "off",
        "useKeyWithMouseEvents": "off",
        "useButtonType": "off",
        "useValidAnchor": "off"
      },
      "suspicious": {
        "noArrayIndexKey": "warn"
      },
      "nursery": {},
      "performance": {
        "noImgElement": "warn"
      }
    }
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "double"
    }
  }
}
```

> **a11y 規則**：此專案為了開發彈性大量關閉 a11y 規則。正式交付的專案建議逐步開啟，至少保留 `useAltText`、`useButtonType`、`noLabelWithoutControl`。

> **Biome v2 重要變更**：
> - `organizeImports` 移到 `assist.actions.source.organizeImports`
> - `files.include` / `files.ignore` 合併為 `files.includes`，排除用 `!` 前綴
> - 升級指令：`pnpm dlx @biomejs/biome migrate --write`

### package.json scripts

```json
{
  "scripts": {
    "lint": "tsc --noEmit && biome check src/",
    "format": "biome format --write"
  }
}
```

> **Biome Only 策略**：專案僅使用 Biome 處理所有 lint 和格式化，不依賴 ESLint。Next.js 專屬規則由 Biome 內建的 `performance.noImgElement`（對應 `@next/next/no-img-element`）等規則覆蓋。`biome check` 同時執行 lint + format 檢查。

---

## 國際化 (i18n) — next-intl 完整設定

### 核心觀念

next-intl 使用 `[locale]` 動態路段實現語系路由：
- `/en/about` → 英文版 About 頁面
- `/zh-TW/about` → 中文版 About 頁面
- `/about` → 自動重定向到預設語系（如 `/en/about`）

### 設定檔（4 個檔案）

#### 1. `src/i18n/routing.ts` — 定義支援的語系

```typescript
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "zh-TW"],
  defaultLocale: "en",
});
```

#### 2. `src/i18n/request.ts` — 載入翻譯檔

```typescript
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
```

#### 3. `src/i18n/navigation.ts` — 語系感知的 Link/Router

```typescript
import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// 用這些取代 next/link 和 next/navigation
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
```

#### 4. `middleware.ts` — 語系路由 + Auth 整合

```typescript
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

// 動態生成 locale 正則（從 routing.ts 讀取，新增語系時不需改這裡）
const localePrefix = new RegExp(`^/(${routing.locales.join("|")})`);

// 受保護路徑
const protectedPaths = ["/overview", "/products", "/customers", "/settings"];
const authPaths = ["/login", "/register", "/forgot-password"];

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 移除 locale 前綴來檢查路徑（例如 /en/overview → /overview）
  const pathnameWithoutLocale = pathname.replace(localePrefix, "") || "/";

  // 僅檢查 cookie 存在，生產環境應驗證 token 有效性（JWT decode 或打後端 API）
  const token = request.cookies.get("auth_token")?.value;
  const isProtected = protectedPaths.some((p) => pathnameWithoutLocale.startsWith(p));
  const isAuthPage = authPaths.some((p) => pathnameWithoutLocale.startsWith(p));

  if (isProtected && !token) {
    const locale = pathname.match(localePrefix)?.[1] || routing.defaultLocale;
    const loginUrl = new URL(`/${locale}/login`, request.url);
    loginUrl.searchParams.set("callbackUrl", pathnameWithoutLocale);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthPage && token) {
    const locale = pathname.match(localePrefix)?.[1] || routing.defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}/overview`, request.url));
  }

  // 其餘交給 next-intl 處理語系路由
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
```

**Auth 特性**：
- **callbackUrl**：未登入時重導到登入頁，並在 URL 帶上 `?callbackUrl=/original-path`，登入成功後可導回原頁面
- **已登入保護**：已登入使用者訪問 `/login` 等 auth 頁面時，自動重導到 `/overview`

### `next.config.ts`

```typescript
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  // ...其他設定（images、安全標頭等）
};

const withNextIntl = createNextIntlPlugin();

export default withSentryConfig(withNextIntl(nextConfig), {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  silent: !process.env.CI,
  widenClientFileUpload: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
```

### `src/app/[locale]/layout.tsx` — 語系 Root Layout

```typescript
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Inter, Playfair_Display } from "next/font/google";
import { routing } from "@/i18n/routing";
import { QueryProvider } from "@/providers/query-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// 讓所有語系頁面都能靜態生成
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // 驗證語系是否合法
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // 啟用靜態渲染支援 — next-intl 要求每個 layout 和 page 都呼叫此函式
  // 否則使用 generateStaticParams 時會報錯
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {/* Provider 順序：翻譯 → 主題（避免 FOUC）→ 資料快取 → URL 狀態 */}
        <NextIntlClientProvider>
          {/* 如需明暗切換，加入 AppThemeProvider（見 Dark Mode 章節） */}
          <QueryProvider>
            <NuqsAdapter>
              {children}
            </NuqsAdapter>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

> **注意**：使用 next-intl 時，`<html>` 和 `<body>` 標籤放在 `src/app/[locale]/layout.tsx`，
> 不是 `src/app/layout.tsx`。根目錄的 `app/layout.tsx` 仍然**必須存在**（App Router 要求），
> 但只做 pass-through，可以附帶全域 metadata（title、description、icons）：
>
> ```tsx
> // src/app/layout.tsx — root layout
> import type { Metadata } from "next";
>
> export const metadata: Metadata = {
>   title: "My App",
>   description: "...",
> };
>
> export default function RootLayout({ children }: { children: React.ReactNode }) {
>   return children;
> }
> ```
>
> Root Layout 的 `metadata` 作為全站預設值；各頁面可用 `generateMetadata` 覆蓋。

### 翻譯檔結構 (`messages/`)

```json
// messages/en.json
{
  "nav": {
    "home": "Home",
    "about": "About"
  },
  "common": {
    "loading": "Loading...",
    "error": "Something went wrong"
  }
}
```

```json
// messages/zh-TW.json
{
  "nav": {
    "home": "首頁",
    "about": "關於"
  },
  "common": {
    "loading": "載入中...",
    "error": "發生錯誤"
  }
}
```

### 在元件中使用

```tsx
// Server Component — 用 async 版本 getTranslations
import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("nav");
  return <h1>{t("about")}</h1>;
}
```

```tsx
// Client Component — 用 hook 版本 useTranslations
"use client";

import { useTranslations } from "next-intl";

export function NavMenu() {
  const t = useTranslations("nav");
  return <span>{t("home")}</span>;
}
```

```tsx
// 語系感知的連結 — 用 i18n/navigation 取代 next/link
import { Link } from "@/i18n/navigation";

// 自動加上當前語系前綴：/en/about 或 /zh-TW/about
<Link href="/about">About</Link>
```

```tsx
// 語系切換
"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";

function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  function switchLocale(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <select value={locale} onChange={(e) => switchLocale(e.target.value)}>
      {routing.locales.map((loc) => (
        <option key={loc} value={loc}>{loc}</option>
      ))}
    </select>
  );
}
```

### 新增語系 SOP

1. 建立 `messages/ja.json`（複製 `en.json` 翻譯）
2. 在 `src/i18n/routing.ts` 的 `locales` 加入 `"ja"`
3. 完成 — middleware 自動從 `routing.ts` 讀取 locales，URL 自動支援 `/ja/about`

> **注意**：middleware 中的 locale 比對不要用 hardcoded 正則（如 `/^\/(en|zh-TW)/`），應從 `routing.locales` 動態生成，這樣新增語系只需改 `routing.ts` 一處。

---

## URL 狀態管理 (nuqs)

```tsx
"use client";

import { useQueryState, parseAsInteger, parseAsString } from "nuqs";

export function SearchPage() {
  const [query, setQuery] = useQueryState("q", parseAsString.withDefault(""));
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

  // URL 自動變成 /search?q=shoes&page=2
  return (
    <input value={query} onChange={(e) => setQuery(e.target.value)} />
  );
}
```

**搭配防抖**：搜尋框使用 `useDebounce` Hook，避免每次按鍵都觸發 API。

---

## 安全性

### Content Security Policy (next.config.ts)

已在 `next.config.ts` 的 `headers()` 中設定：

| 標頭 | 值 | 用途 |
|------|------|------|
| Content-Security-Policy | 見下方完整設定 | 防止 XSS |
| Strict-Transport-Security | `max-age=63072000; includeSubDomains; preload` | 強制 HTTPS（HSTS） |
| X-Content-Type-Options | `nosniff` | 防止 MIME 嗅探 |
| X-Frame-Options | `DENY` | 防止 Clickjacking |
| Referrer-Policy | `strict-origin-when-cross-origin` | 控制 Referer 標頭 |
| Permissions-Policy | `camera=(), microphone=(), geolocation=()` | 停用不需要的瀏覽器 API |

> **關於 HSTS**：Vercel 會自動加上 HSTS 標頭，但自架或其他平台部署時不會有。作為萬用模板，建議明確設定。

**推薦做法**：開發環境不套用 CSP（避免干擾 HMR），生產環境套用嚴格 CSP（不含 `unsafe-eval`）。

```typescript
// next.config.ts — headers() 範例
async headers() {
  // 開發環境不套用 CSP，避免 HMR / Turbopack 的 eval 被擋
  if (process.env.NODE_ENV === "development") return [];

  return [
    {
      source: "/(.*)",
      headers: [
        {
          key: "Content-Security-Policy",
          value: [
            "default-src 'self'",
            "script-src 'self' https://*.sentry.io https://va.vercel-scripts.com",
            "style-src 'self' 'unsafe-inline'",  // Radix UI (shadcn/ui 底層) 會注入 inline style 處理定位
            "img-src 'self' data: blob: https://*.unsplash.com https://*.same-assets.com",
            "font-src 'self'",
            "connect-src 'self' https://*.sentry.io https://va.vercel-scripts.com",
            "frame-ancestors 'none'",
          ].join("; "),
        },
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ],
    },
  ];
}
```

> **為何不需要 Google Fonts 域名**：
> 使用 `next/font/google` 時，字體檔案在 build 時下載並 self-host，不會在 runtime 向 Google 發送請求。因此 `style-src` 和 `font-src` 只需要 `'self'`，不需要允許 `fonts.googleapis.com` 或 `fonts.gstatic.com`。

> **為何不需要 `unsafe-eval`**：
> 只有 `next dev` 的 HMR 需要（用 `eval()` 做 source map），生產環境 `next build` 完全不需要。開發環境直接跳過 CSP 即可。
>
> **關於 `unsafe-inline`**：
> Tailwind CSS v4 編譯為靜態 CSS 檔案，本身不需要 `unsafe-inline`。但 shadcn/ui 底層的 Radix UI 會透過 JS 注入 inline style（例如 Dialog、Popover 的定位），因此 `style-src` 需要加上 `'unsafe-inline'`。上線前務必實際測試所有使用到的 shadcn/ui 元件，確認 CSP 沒有阻擋。

### 環境變數安全

- `.env*` 已在 `.gitignore` 中排除（`.env.example` 除外）
- 前端可見的變數必須以 `NEXT_PUBLIC_` 開頭
- 敏感 key（API Secret、DB URL）絕不加 `NEXT_PUBLIC_` 前綴
- 交付源碼時只附 `.env.example`，不附真實 key

### `.env.example` 範例

```bash
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="My App"

# API
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Authentication
AUTH_SECRET=your-auth-secret-here

# Sentry (Error Monitoring)
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_ORG=
SENTRY_PROJECT=
SENTRY_AUTH_TOKEN=

# Database (if needed)
DATABASE_URL=

# Third-party Services
# NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=
# NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
# STRIPE_SECRET_KEY=
```

> **命名慣例**：`NEXT_PUBLIC_` 前綴 = 前端可見（會打包進 client bundle），無前綴 = 僅伺服器端可用。

### 環境變數驗證 (`lib/env.ts`)

使用 Zod 在啟動時驗證環境變數，缺漏或格式錯誤會立即報錯（fail fast），不會等到 runtime 才爆：

```typescript
// lib/env.ts
import { z } from "zod";

const envSchema = z.object({
  // 伺服器端（不需 NEXT_PUBLIC_ 前綴）
  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
  AUTH_SECRET: z.string().min(1, "AUTH_SECRET is required"),
  SENTRY_AUTH_TOKEN: z.string().optional(),

  // 客戶端（NEXT_PUBLIC_ 前綴）
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NEXT_PUBLIC_API_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);
```

```typescript
// 使用方式 — import env 取代直接讀 process.env
import { env } from "@/lib/env";

const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/products`);
```

> **好處**：TypeScript 自動推導所有 env 的型別，不再需要 `process.env.XXX!` 非空斷言。缺少必要變數時，應用啟動就會報錯，而非在某個使用者操作時才崩潰。

---

## 圖片最佳實踐 — next/image

### 基本規則

- **永遠使用 `next/image`**，不要用 `<img>` 標籤。`next/image` 自動處理 lazy loading、格式轉換（WebP/AVIF）、響應式尺寸
- **必須設定 `width` + `height`** 或使用 `fill` 模式，避免 CLS（版面位移）
- **遠端圖片必須在 `next.config.ts` 的 `remotePatterns` 中設定白名單**

### remotePatterns 設定

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "ext.same-assets.com", pathname: "/**" },
      { protocol: "https", hostname: "ugc.same-assets.com", pathname: "/**" },
      // 依專案需求新增...
    ],
  },
};
```

> 不要用已棄用的 `domains`，改用 `remotePatterns`（支援 wildcard pathname）。

### sizes 屬性

`sizes` 告訴瀏覽器圖片在不同視窗寬度下的實際顯示寬度，讓 Next.js 生成正確的 `srcset`：

```tsx
import Image from "next/image";

// 全寬 hero 圖片
<Image
  src="/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  sizes="100vw"
  priority  // 首屏圖片加 priority，跳過 lazy loading
/>

// 響應式網格（手機全寬、桌面 1/3 寬）
<Image
  src={project.image}
  alt={project.title}
  width={600}
  height={400}
  sizes="(max-width: 768px) 100vw, 33vw"
/>

// fill 模式（父層需 relative + 固定高度）
<div className="relative h-64">
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover rounded-xl"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>
```

### placeholder blur

減少載入時的視覺閃爍：

```tsx
// 靜態 import（自動生成 blur placeholder）
import heroImage from "@/public/hero.jpg";
<Image src={heroImage} alt="Hero" placeholder="blur" />

// 遠端圖片（需手動提供 blurDataURL）
<Image
  src="https://images.unsplash.com/..."
  alt="Photo"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQ..."  // 低解析度 base64
/>
```

### 規則總結

| 場景 | 做法 |
|------|------|
| 首屏圖片（Hero、LCP） | 加 `priority`，設定 `sizes="100vw"` |
| 列表/網格中的圖片 | 設定正確的 `sizes`（如 `33vw`） |
| 固定尺寸圖片（頭像、icon） | 用 `width` + `height`，不需 `sizes` |
| 填滿父容器 | 用 `fill` + `object-cover` + `sizes` |
| 遠端圖片來源 | 加入 `next.config.ts` 的 `remotePatterns` |
| 裝飾性圖片 | `alt=""` （空字串，非省略） |

---

## SEO 與 Metadata

### generateMetadata

使用 Next.js 內建的 `generateMetadata` 為每個頁面動態生成 SEO 標籤：

```typescript
// src/app/[locale]/(marketing)/about/page.tsx
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: {
      canonical: `/${locale}/about`,
      languages: { en: "/en/about", "zh-TW": "/zh-TW/about" },
    },
  };
}
```

### 靜態 SEO 檔案

```
app/
├── sitemap.ts          # 自動生成 sitemap.xml
├── robots.ts           # 自動生成 robots.txt
└── opengraph-image.tsx # 動態生成 OG 圖片（選用）
```

```typescript
// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://example.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/overview/", "/settings/"],  // 不讓搜尋引擎索引的路徑
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
```

```typescript
// app/sitemap.ts
import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://example.com";
  const pages = ["/", "/about", "/work", "/blog", "/contact"];

  return pages.flatMap((page) =>
    routing.locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page === "/" ? "" : page}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${baseUrl}/${l}${page === "/" ? "" : page}`])
        ),
      },
    }))
  );
}
```

---

## 字體載入 — next/font

使用 `next/font` 取代 `<link>` 載入 Google Fonts。好處：

- **Self-hosting**：字體檔案在 build 時下載，從你的網域提供，不對 Google 發送請求
- **零 CLS**：自動套用 `font-display: swap` + CSS `size-adjust`，消除版面位移
- **省掉 preconnect**：不需要 `<link rel="preconnect" href="https://fonts.googleapis.com">`

### 設定方式

在 `src/app/[locale]/layout.tsx`（或無 i18n 版的 `src/app/layout.tsx`）中定義：

```typescript
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export default async function LocaleLayout({ children, params }: Props) {
  // ...
  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {/* ... */}
      </body>
    </html>
  );
}
```

### 搭配 Tailwind CSS v4

Tailwind v4 使用 CSS-first 設定（不再需要 `tailwind.config.ts`），在 `globals.css` 的 `@theme` 中定義字體：

```css
/* globals.css */
@import 'tailwindcss';

@theme {
  --font-sans:
    var(--font-inter), ui-sans-serif, system-ui, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --font-serif:
    var(--font-playfair), ui-serif, Georgia, Cambria, 'Times New Roman', Times,
    serif;
}
```

之後在元件中使用 `font-sans`（預設）和 `font-serif`（標題、裝飾文字）。

### 規則

- **永遠不要用 `<link>` 載入 Google Fonts** — 用 `next/font/google`
- 定義字體時使用 `variable` 模式（CSS 變數），而非直接套用 `className`，這樣更靈活
- 只載入實際用到的 `subsets` 和 `weight`，減少字體檔案大小
- 如需本地字體，使用 `next/font/local`

---

## 錯誤處理與載入狀態

### global-error.tsx — 最頂層 Error Boundary

`src/app/global-error.tsx` 用來捕捉 Root Layout 本身的錯誤。這是 Next.js 唯一能捕捉 root layout 錯誤的機制：

```tsx
// src/app/global-error.tsx
"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
          <h2>Something went wrong</h2>
          <button onClick={reset}>Try again</button>
        </div>
      </body>
    </html>
  );
}
```

> **注意**：`global-error.tsx` 必須自己渲染 `<html>` 和 `<body>`，因為它會完全取代 root layout。不能使用 Tailwind class（CSS 可能無法載入），建議用 inline style。

### error.tsx — 路由群組 Error Boundary

每個路由群組可以有自己的 `error.tsx`，自動捕捉該路由下的 runtime 錯誤。搭配 Sentry 回報錯誤：

```tsx
// src/app/[locale]/(dashboard)/error.tsx
"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <h2 className="text-xl font-medium mb-4">Something went wrong</h2>
      <button
        onClick={reset}
        className="px-4 py-2 bg-white text-black rounded-lg"
      >
        Try again
      </button>
    </div>
  );
}
```

### loading.tsx — Streaming UI

```tsx
// src/app/[locale]/(dashboard)/overview/loading.tsx
export default function OverviewLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-24 bg-zinc-900/50 rounded-2xl animate-pulse" />
      ))}
    </div>
  );
}
```

**建議放置位置**：
- `app/[locale]/(dashboard)/loading.tsx` — Dashboard 全局載入骨架
- `app/[locale]/(marketing)/loading.tsx` — Marketing 頁面載入動畫

### `<Suspense>` — 頁面內細粒度 Streaming

`loading.tsx` 是頁面級別的載入狀態。如果頁面內有多個獨立的資料區塊，best practice 是用 `<Suspense>` 讓每個區塊各自 stream：

```tsx
// app/[locale]/(dashboard)/overview/page.tsx
import { Suspense } from "react";
import { RevenueChart } from "@/features/analytics/components/revenue-chart";
import { RecentOrders } from "@/features/orders/components/recent-orders";

export default function OverviewPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* 頁面骨架立即渲染，每個區塊各自載入 */}
      <Suspense fallback={<div className="h-64 animate-pulse bg-muted rounded-xl" />}>
        <RevenueChart />  {/* async Server Component */}
      </Suspense>
      <Suspense fallback={<div className="h-64 animate-pulse bg-muted rounded-xl" />}>
        <RecentOrders />  {/* async Server Component */}
      </Suspense>
    </div>
  );
}
```

**原則**：`loading.tsx` 用於整頁過場（navigation 時），`<Suspense>` 用於頁面內的獨立資料區塊。兩者互補，不互斥。

### Server Component 資料抓取 — `cache()` 請求去重

同一次 render 中，多個 Server Component 可能需要相同的資料。`fetch` 會被 Next.js 自動去重，但 ORM 呼叫不會。用 `React.cache()` 手動去重：

```typescript
// features/products/api/queries.ts
import { cache } from "react";
import { db } from "@/lib/db";

// cache() 確保同一次 server render 中多處呼叫只查一次 DB
export const getProduct = cache(async (id: string) => {
  return db.product.findUnique({ where: { id } });
});

// 多個 Server Component 可以放心呼叫 getProduct(id)，不會重複查詢
```

| 場景 | 去重方式 |
|------|----------|
| `fetch()` 呼叫 | Next.js 自動去重（同 URL + 同 options） |
| ORM / 直接 DB 查詢 | 用 `React.cache()` 手動去重 |
| 跨請求快取（ISR 場景） | 用 `unstable_cache` + `revalidateTag` |

### `next/dynamic` — 延遲載入重量級 Client Component

對於大型第三方套件（圖表庫、Rich Text Editor、地圖），使用 `next/dynamic` 避免它們進入首屏 bundle：

```typescript
import dynamic from "next/dynamic";

// ssr: false — 只在客戶端載入（適合依賴 window/document 的套件）
const Chart = dynamic(
  () => import("@/features/analytics/components/revenue-chart"),
  {
    ssr: false,
    loading: () => <div className="h-64 animate-pulse bg-muted rounded-xl" />,
  },
);
```

> **判斷規則**：如果一個 Client Component 的依賴套件 > 50KB gzipped（如 `recharts`、`@tiptap`、`mapbox-gl`），考慮用 `next/dynamic` 延遲載入。小型元件不需要。

---

## 建立新功能模組 SOP

當需要新增一個功能（例如「商品管理」）時：

```bash
mkdir -p src/features/products/{components,hooks,api}
touch src/features/products/{actions.ts,types.ts,validations.ts,index.ts}
```

然後：
1. 在 `types.ts` 定義資料型別
2. 在 `validations.ts` 定義 Zod Schema
3. 在 `api/` 用 `apiClient` 封裝 API 呼叫
4. 在 `hooks/` 用 TanStack Query 包裝 API
5. 在 `components/` 寫 UI（用 React Hook Form + Zod 處理表單）
6. 在 `index.ts` 只 export 對外公開的東西

---

## 測試策略

### 工具選擇

| 工具 | 用途 |
|------|------|
| Vitest | 單元測試 / 整合測試（與 Vite 生態整合、速度快、API 相容 Jest） |
| Testing Library | 元件測試（`@testing-library/react`） |
| Playwright | E2E 測試（Phase 3，視專案需求加入） |

### 測試檔案放置

測試與原始碼並置（colocated），放在同層目錄：

```
features/auth/
├── hooks/
│   ├── use-login.ts
│   └── use-login.test.ts      # ← 測試放在旁邊
├── validations.ts
├── validations.test.ts         # ← 測試放在旁邊
└── ...
```

### 什麼值得測

| 優先級 | 測什麼 | 範例 |
|--------|--------|------|
| 必測 | Zod Schema / 驗證邏輯 | `validations.test.ts` |
| 必測 | API Client / 錯誤處理 | `api-client.test.ts` |
| 建議 | Custom Hooks（含業務邏輯） | `use-checkout.test.ts` |
| 建議 | Zustand Store | `use-cart-store.test.ts` |
| 選做 | 元件互動（表單送出、按鈕點擊） | `LoginForm.test.tsx` |
| 不用測 | 純展示元件、Layout、shadcn/ui 元件 | — |

### 漸進式採用

- **Phase 1**：安裝 Vitest，只測 `lib/validations.ts` 和 `lib/api-client.ts`
- **Phase 2**：加入 Testing Library，測功能模組的 hooks 和表單
- **Phase 3**：加入 Playwright E2E，測關鍵使用者流程（登入、結帳）

---

## 建立新專案 SOP

1. `pnpm dlx create-next-app@latest --ts --tailwind --src-dir --app`（Tailwind v4 已內建於 create-next-app）
2. `pnpm dlx shadcn@latest init`（依專案需求選擇 style 和 base color）
3. 設定 Biome：`pnpm add -D @biomejs/biome && pnpm biome init`
4. 依 Phase 1/2/3 安裝需要的套件
5. 建立目錄：`components/{ui,layout,shared}/`、`features/`、`lib/`、`hooks/`、`store/`、`types/`、`providers/`
6. 複製 `lib/api-client.ts`、`lib/validations.ts`、`lib/utils.ts`
7. 複製 `providers/`、`store/`、`types/`
8. 建立 `.env.example`
9. 建立 `src/i18n/` 目錄，建立 `routing.ts`、`request.ts`、`navigation.ts`
10. 將頁面移入 `src/app/[locale]/` 內
11. 建立 `src/app/[locale]/layout.tsx`（含 `<html lang={locale}>`、Providers）
12. 建立路由群組：`[locale]/(marketing)/`、`[locale]/(auth)/`、`[locale]/(dashboard)/`
13. 設定 `next.config.ts`（加入 `createNextIntlPlugin()`、安全標頭）
14. 設定 `middleware.ts`（next-intl 語系路由 + Auth 保護）
15. 建立 `messages/en.json`、`messages/zh-TW.json`
16. 建立 `src/app/global-error.tsx`（最頂層錯誤邊界）
17. 依專案需求建立 `features/` 模組

> **重要**：在元件中使用 `Link` 和 `useRouter` 時，
> 必須從 `@/i18n/navigation` import，不是從 `next/link` 或 `next/navigation`。
> 這樣 next-intl 才能自動為連結加上 locale 前綴。

---

## TypeScript 設定

`tsconfig.json` 的關鍵設定：

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["**/*.ts", "**/*.tsx", ".next/types/**/*.ts", "next-env.d.ts"],
  "exclude": ["node_modules"]
}
```

**重點**：
- `strict: true` — 必開，確保型別安全
- `paths` — 設定 `@/` alias 對應 `src/`，搭配 Next.js 內建的 `tsconfig paths` 支援，不需額外設定 webpack alias
- `moduleResolution: "bundler"` — Next.js 推薦設定，支援 `package.json` 的 `exports` 欄位
- `isolatedModules: true` — 確保每個檔案可獨立編譯（SWC/Turbopack 要求）
- `jsx: "react-jsx"` — Next.js 16 預設值，不需要 `import React`

---

## Git 規範

### Commit Message 格式

採用 [Conventional Commits](https://www.conventionalcommits.org/)：

```
<type>(<scope>): <description>

feat(auth): add login form with validation
fix(cart): fix quantity not updating on duplicate add
style(ui): adjust button hover color
refactor(api): extract error handling to ApiError class
chore(deps): upgrade next-intl to v4
docs(readme): add deployment instructions
```

常用 type：`feat`、`fix`、`refactor`、`style`、`chore`、`docs`、`test`

### Branch 命名

```
feature/auth-login       # 新功能
fix/cart-quantity-bug     # 修 Bug
hotfix/csp-header        # 緊急修復（直接合入 main）
refactor/api-client      # 重構
```

---

## 效能監控 — Web Vitals

### Vercel Analytics（推薦）

部署在 Vercel 時，啟用 [Vercel Analytics](https://vercel.com/analytics) 自動收集 Core Web Vitals（LCP、INP、CLS）：

```bash
pnpm add @vercel/analytics
```

```tsx
// src/app/[locale]/layout.tsx
import { Analytics } from "@vercel/analytics/react";

// 在 <body> 內加入
<Analytics />
```

> **CSP 注意**：使用 Vercel Analytics 時，需在 CSP 的 `script-src` 加入 `https://va.vercel-scripts.com`，`connect-src` 加入 `https://va.vercel-scripts.com`。

### Sentry Performance

如已整合 Sentry，Performance Monitoring 自動追蹤頁面載入、API 請求和 Web Vitals，不需額外設定。

---

## 上線前 Checklist

部署到正式環境前，逐項確認：

### 環境與設定
- [ ] `.env` 所有變數已在 Vercel / 主機上設定
- [ ] `NEXT_PUBLIC_APP_URL` 指向正式域名
- [ ] Sentry DSN、ORG、PROJECT 已設定
- [ ] `robots.ts` 允許搜尋引擎索引（開發時應 disallow all）

### 安全性
- [ ] CSP 標頭在正式環境測試通過（所有 shadcn/ui 元件正常運作）
- [ ] 無敏感 key 使用 `NEXT_PUBLIC_` 前綴
- [ ] Auth middleware 的 token 驗證邏輯已上線（不只是檢查 cookie 存在）

### SEO 與效能
- [ ] 所有頁面有正確的 `<title>` 和 `<meta description>`
- [ ] `sitemap.xml` 可正常存取且內容正確
- [ ] OG image 在社群平台預覽正常
- [ ] Lighthouse Performance 分數 ≥ 90
- [ ] 首屏圖片有 `priority` 屬性

### 錯誤處理
- [ ] Sentry 收到測試事件（可用 `Sentry.captureMessage("test")` 驗證）
- [ ] `global-error.tsx` 和各路由群組的 `error.tsx` 已就位
- [ ] 404 頁面（`not-found.tsx`）已客製化

### 國際化（如有啟用）
- [ ] 所有語系的翻譯檔已完成，無遺漏 key
- [ ] `<html lang>` 正確反映當前語系
- [ ] `alternates.languages` 在 metadata 中正確設定（SEO hreflang）
