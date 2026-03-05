# 前端接案萬用模板架構文件

> 本文件為 Claude Code 開發前端專案時的架構參考。適用於形象網站、電商、後台儀表板等各類專案。
> 基於 Next.js 16 App Router，可直接套用至新專案。

---

## 技術棧總覽

| 領域 | 技術選擇 | 用途 |
|------|----------|------|
| 框架核心 | Next.js 16 (App Router) | SSR/SSG/ISR，路由，中介層 |
| UI 與樣式 | Tailwind CSS v4 + shadcn/ui | 原子化 CSS + 可客製化元件庫 |
| 全域狀態 | Zustand | 客戶端狀態（購物車、UI 開關、主題） |
| 伺服器資料 | TanStack Query v5 | API 快取、重新抓取、樂觀更新 |
| 表單驗證 | React Hook Form + Zod | 高效能表單 + 端到端型別安全驗證 |
| 動畫效果 | Framer Motion | 頁面轉場、微互動、滾動動畫 |
| 語系切換 | next-intl | App Router 原生支援，Server/Client Component 皆可用 |
| URL 狀態 | nuqs | 搜尋、過濾器、分頁同步至 URL |
| 錯誤監控 | Sentry | 前後端錯誤追蹤、Session Replay |
| 程式碼品質 | Biome | 格式化 + Lint，唯一 linter（無 ESLint） |
| 部署 | Vercel | 圖片自動優化、Edge Functions、ISR |

### 漸進式採用策略

並非每個專案都需要全部套件。依專案規模分階段導入：

- **Phase 1（必選）**：目錄結構、Tailwind + shadcn/ui、Zustand、Zod、原生 fetch 封裝、Biome
- **Phase 2（規模成長時）**：TanStack Query、React Hook Form、nuqs
- **Phase 3（正式上線時）**：Sentry、next-intl、CSP 安全標頭、Framer Motion 頁面轉場

---

## 目錄結構

> 本專案採用 next-intl 多語系架構，URL 自動變成 `/en/about`、`/zh-TW/about`。
> next-intl 要求所有頁面必須放在 `[locale]` 動態路段下。

```
my-project/
├── src/
│   ├── app/                        # 1. 路由層 (Next.js App Router)
│   │   ├── layout.tsx              #    Root Layout（pass-through，僅 return children）
│   │   ├── globals.css             #    Tailwind 進入點 + 自訂動畫
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
│   │   │       └── layout.tsx      #    側邊欄 + 頂部列
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
│   │   │   ├── types.ts
│   │   │   ├── validations.ts
│   │   │   └── index.ts            #       Barrel export
│   │   ├── products/               #    商品模組
│   │   └── checkout/               #    結帳模組
│   │
│   ├── lib/                         # 5. 核心工具層（無狀態純函式）
│   │   ├── api-client.ts           #    封裝 fetch（Token 攔截器、錯誤處理）
│   │   ├── validations.ts          #    共用 Zod Schema
│   │   ├── animations.ts           #    Framer Motion 動畫預設
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

### 1. features/ 功能模組化（防腐層）

**問題**：傳統架構把所有元件放 `components/`、API 放 `services/`、Hook 放 `hooks/`。當客戶說「拿掉購物車功能」，你需要到 5 個目錄裡挑出相關程式碼。

**解法**：每個功能模組是一個自包含資料夾，包含該功能的所有程式碼。

```
features/checkout/
├── components/        # CheckoutForm、CartSummary
├── hooks/             # useCheckout、usePayment
├── api/               # checkout-api.ts
├── types.ts           # Order、PaymentIntent
├── validations.ts     # checkoutSchema
└── index.ts           # Barrel export（只暴露公開 API）
```

**規則**：
- 功能之間不互相 import（透過 `index.ts` 暴露最小公開 API）
- 刪除整個功能目錄後，不應影響其他功能（前提：沒有外部引用）
- 共用的東西放 `components/shared/`、`hooks/`、`lib/`

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
| Server Component 資料抓取 | 直接 `fetch` 或 ORM | 不需要額外的 API 層 |

```typescript
// Server Action 範例（放在 features/contact/actions.ts）
"use server";

import { contactFormSchema } from "./validations";

export async function submitContactForm(formData: FormData) {
  const parsed = contactFormSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { error: parsed.error.flatten().fieldErrors };
  }
  // 儲存到資料庫或發送通知...
  return { success: true };
}
```

---

## 核心模組實作規範

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

### Zustand Store (`store/`)

```typescript
import { create } from "zustand";

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

export const useCartStore = create<CartState>((set) => ({
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
}));

// Derived selector — 在元件中使用，不存在 store 裡
export const selectTotalPrice = (state: CartState) =>
  state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

// 使用方式
// const total = useCartStore(selectTotalPrice);
```

### TanStack Query Hooks（功能模組內）

```typescript
// features/products/hooks/use-products.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { productApi } from "../api/product-api";

export function useProducts(params?: { page?: number; category?: string }) {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => productApi.list(params),
  });
}

export function useCreateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: productApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
```

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

## Framer Motion 動畫系統

### 預設動畫變體 (`lib/animations.ts`)

```typescript
import type { Variants } from "framer-motion";

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
import { motion } from "framer-motion";
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
        "noUnusedVariables": "off"
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

> **a11y 規則**：根據專案需求適度關閉部分 a11y 規則（如上例），但建議正式專案儘量保持開啟。

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

  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider>
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
> 但只做 pass-through：
>
> ```tsx
> // src/app/layout.tsx — root layout
> export default function RootLayout({ children }: { children: React.ReactNode }) {
>   return children;
> }
> ```

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
// Client Component — 一樣的 API
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
| X-Content-Type-Options | `nosniff` | 防止 MIME 嗅探 |
| X-Frame-Options | `DENY` | 防止 Clickjacking |
| Referrer-Policy | `strict-origin-when-cross-origin` | 控制 Referer 標頭 |
| Permissions-Policy | `camera=(), microphone=(), geolocation=()` | 停用不需要的瀏覽器 API |

**推薦做法**：開發環境不套用 CSP（避免干擾 HMR），生產環境套用嚴格 CSP（不含 `unsafe-eval`、`unsafe-inline`）。

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
            "script-src 'self' https://*.sentry.io",
            "style-src 'self' https://fonts.googleapis.com",
            "img-src 'self' data: blob: https://*.unsplash.com https://*.same-assets.com",
            "font-src 'self' https://fonts.gstatic.com",
            "connect-src 'self' https://*.sentry.io",
            "frame-ancestors 'none'",
          ].join("; "),
        },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ],
    },
  ];
}
```

> **為何不需要 `unsafe-eval` / `unsafe-inline`**：
> - `unsafe-eval`：只有 `next dev` 的 HMR 需要（用 `eval()` 做 source map），生產環境 `next build` 完全不需要。開發環境直接跳過 CSP 即可。
> - `unsafe-inline`：Tailwind CSS v4 編譯為靜態 CSS 檔案，不注入 `<style>` 標籤；shadcn/ui 使用 Tailwind class 而非 inline style。

### 環境變數安全

- `.env*` 已在 `.gitignore` 中排除（`.env.example` 除外）
- 前端可見的變數必須以 `NEXT_PUBLIC_` 開頭
- 敏感 key（API Secret、DB URL）絕不加 `NEXT_PUBLIC_` 前綴
- 交付源碼時只附 `.env.example`，不附真實 key

---

## Auth Middleware

完整的 Auth + i18n 整合 middleware 見上方「國際化」章節的 `middleware.ts`。

**流程**：
1. 移除 locale 前綴取得實際路徑（`/en/overview` → `/overview`）
2. 判斷是否為受保護路徑 → 未登入則重定向到 `/{locale}/login?callbackUrl=/overview`
3. 判斷是否為 auth 頁面 → 已登入則重定向到 `/{locale}/overview`
4. 其餘交給 `intlMiddleware` 處理語系路由

---

## Provider 鏈

Provider 設定在 `src/app/[locale]/layout.tsx` 中：

```tsx
<html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
  <body className="font-sans antialiased">
    <NextIntlClientProvider>   {/* next-intl 翻譯 */}
      <QueryProvider>          {/* TanStack Query */}
        <NuqsAdapter>          {/* nuqs URL 狀態 */}
          {children}
        </NuqsAdapter>
      </QueryProvider>
    </NextIntlClientProvider>
  </body>
</html>
```

**順序**：NextIntlClientProvider 最外層（翻譯需最先可用） → QueryProvider → NuqsAdapter → children。

> **注意**：`<html>` 和 `<body>` 標籤放在 `src/app/[locale]/layout.tsx`，
> 不是 `src/app/layout.tsx`。根目錄的 `app/layout.tsx` 仍然**必須存在**（App Router 要求），
> 但只做 pass-through：
>
> ```tsx
> // src/app/layout.tsx
> export default function RootLayout({ children }: { children: React.ReactNode }) {
>   return children;
> }
> ```

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

### error.tsx — Error Boundary

每個路由群組可以有自己的 `error.tsx`，自動捕捉該路由下的 runtime 錯誤：

```tsx
// src/app/[locale]/(dashboard)/error.tsx
"use client";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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

---

## 建立新功能模組 SOP

當需要新增一個功能（例如「商品管理」）時：

```bash
mkdir -p src/features/products/{components,hooks,api}
touch src/features/products/{types.ts,validations.ts,index.ts}
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
16. 依專案需求建立 `features/` 模組

> **重要**：在元件中使用 `Link` 和 `useRouter` 時，
> 必須從 `@/i18n/navigation` import，不是從 `next/link` 或 `next/navigation`。
> 這樣 next-intl 才能自動為連結加上 locale 前綴。
