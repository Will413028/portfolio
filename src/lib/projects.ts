export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription: string;
  tags: string[];
  type: string;
  quarter: string;
  gradient: string;
  featured: boolean;
  features: string[];
  challenges: string[];
  outcomes?: string[];
  screenshots: string[];
  links: {
    live?: string;
    github?: string;
  };
}

const projectsEn: Project[] = [
  {
    id: 1,
    slug: "saywe",
    title: "SayWe",
    subtitle: "AI Meeting Assistant",
    description:
      "An on-premises AI meeting transcription desktop app with offline functionality and intelligent summarization",
    longDescription:
      "SayWe is an AI-powered meeting assistant built as a desktop application using Tauri. It provides speech-to-text transcription using Whisper and intelligent meeting summarization with local LLMs, ensuring all data stays on-premises for enterprise security requirements.",
    tags: [
      "Python",
      "FastAPI",
      "Tauri",
      "Next.js",
      "PostgreSQL",
      "Whisper",
      "LLM",
    ],
    type: "Desktop App",
    quarter: "Q3 2024",
    gradient: "from-indigo-900/80 via-purple-800/60 to-blue-900/80",
    featured: true,
    screenshots: ["/images/projects/saywe.jpg"],
    features: [
      "Speech-to-text transcription powered by Whisper",
      "AI meeting summarization using local LLMs",
      "On-premises deployment for enterprise data security",
      "Cross-platform desktop app built with Tauri",
      "Transcript management and search",
      "Multi-language support for transcription",
    ],
    challenges: [
      "Integrating Whisper for accurate real-time transcription",
      "Building a performant desktop app with Tauri + Next.js",
      "Ensuring LLM inference runs efficiently on local hardware",
    ],
    outcomes: [
      "Serving paying customers in production",
      "Fully on-prem — meets enterprise data-security requirements",
    ],
    links: {
      github: "https://github.com/Will413028/meeting-helper-backend",
    },
  },
  {
    id: 2,
    slug: "dailyfresh",
    title: "DailyFresh",
    subtitle: "Farm-to-Table E-Commerce",
    description:
      "A full-stack fresh food e-commerce platform connecting local farmers directly to consumers with cold-chain delivery",
    longDescription:
      "DailyFresh is a fresh food e-commerce platform that connects local farmers and premium food suppliers directly with consumers. The platform includes a buyer app, seller app, admin dashboard, and marketing website, all backed by a microservice architecture, plus a conversational AI procurement agent for buyer requests and seller quotes. The company wound down in September 2026; with the owner's consent the code lives on as a private monorepo, where the backend is being rewritten as a Go modular monolith.",
    tags: [
      "Go",
      "Gin",
      "Java",
      "Flutter",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Docker",
      "k3s",
    ],
    type: "Full-Stack Platform",
    quarter: "Q1 2026",
    gradient: "from-emerald-900/80 via-green-800/60 to-teal-900/80",
    featured: true,
    screenshots: ["/images/projects/dailyfresh.png"],
    features: [
      "Microservice backend architecture with Go and Gin",
      "Buyer and seller Flutter mobile apps",
      "Admin dashboard for platform management",
      "Payment gateway integration with PayUni",
      "Marketing website built with Next.js",
      "Message queue for async order processing",
      "Real-time messaging reliability layer across the gateway, web, and both Flutter apps — stateless HMAC WebSocket tickets with graceful Redis-outage degradation, bidirectional heartbeats, full-jitter reconnect, and a per-account connection cap",
    ],
    challenges: [
      "Designing a scalable microservice architecture for multiple client apps",
      "Integrating payment gateway for seamless checkout",
      "Building real-time order tracking across buyer and seller apps",
    ],
    outcomes: [
      "Zero-downtime auth re-architecture + 20-service Alibaba Cloud RDS migration",
      "Zero-downtime rolling deploys across the full 21-microservice platform — verified by a live rolling-restart probe (7,910 requests, 0 downtime)",
      "Buyer & seller iOS apps shipped through their first App Store submission",
      "Authored ~60% of 12,406 non-merge commits across 22 Go/Java microservices, web, admin, and both apps",
      "After closure: 22 services re-planned as 24 modules of a Go modular monolith from measured coupling (730 RPCs, 212 events, 455 PRs of co-change)",
    ],
    links: {
      live: "https://dailyfresh.food/",
      github: "https://github.com/dailyfresh-food/backend-payuni",
    },
  },
  {
    id: 3,
    slug: "escooter-pos",
    title: "E-Scooter Rental POS",
    subtitle: "Cloud-Based Rental Platform",
    description:
      "A cloud-based POS system and e-scooter rental platform with end-to-end UI/UX for Web, Admin & POS",
    longDescription:
      "A comprehensive cloud-based POS and rental management system built from scratch at ChengChi Tech. The platform manages e-scooter rentals with a customer-facing web app, admin dashboard, and point-of-sale terminal, all deployed on GCP with infrastructure as code.",
    tags: [
      "Python",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "GCP",
      "Terraform",
      "GitLab CI",
    ],
    type: "Web App",
    quarter: "Q2 2024",
    gradient: "from-blue-900/80 via-sky-800/60 to-cyan-900/80",
    featured: true,
    screenshots: ["/images/projects/escooter-pos.jpg"],
    features: [
      "Cloud-based POS system for rental operations",
      "Customer-facing web app for browsing and booking",
      "Admin dashboard for fleet and order management",
      "CI/CD pipelines with GitLab CI and Ansible",
      "Infrastructure as code with Terraform on GCP",
      "Led a team of 4 engineers through full development lifecycle",
    ],
    challenges: [
      "Building the entire system from scratch with a small team",
      "Designing a reliable rental workflow with real-time availability",
      "Setting up cloud infrastructure with Terraform for reproducible deployments",
    ],
    outcomes: [
      "Greenfield delivery in ~2 months with a 4-engineer team",
      "50% faster deploys (GitLab CI + Ansible), 30% lower infra overhead (Terraform)",
    ],
    links: {},
  },
  {
    id: 4,
    slug: "bfx-funding-bot",
    title: "bfx-funding-bot",
    subtitle: "Algorithmic Crypto Funding Bot",
    description:
      "A live, real-money Bitfinex margin-funding bot with an event-sourced ledger and a reconciliation-based correctness backbone",
    longDescription:
      "An automated bot that lends on Bitfinex's margin-funding market. It runs on live capital with a PostgreSQL ledger, a periodic-reconcile correctness backbone (REST snapshot as source of truth, WebSocket as best-effort latency optimization), off-site disaster recovery, and a quantitative strategy-validation pipeline. Realized income is measured against the exchange's own ledger.",
    tags: ["Python", "asyncio", "PostgreSQL", "Docker", "GitHub Actions"],
    type: "Trading System",
    quarter: "Q2 2026",
    gradient: "from-amber-900/80 via-orange-800/60 to-yellow-900/80",
    featured: false,
    screenshots: ["/images/projects/bfx-funding-bot.png"],
    features: [
      "Event-sourced ledger with append-only event log and snapshot tables",
      "Periodic-reconcile correctness backbone (REST snapshot as source of truth, WebSocket as latency optimization)",
      "Single-writer exposure reconciliation to prevent double-counting",
      "Balance-aware deployment gating for safe capital allocation",
      "Quantitative validation: walk-forward optimization + bootstrap CI + deflated Sharpe",
    ],
    challenges: [
      "Diagnosing and fixing 6+ production incidents on live capital, each with a canary verification step",
      "Designing a reconciliation backbone resilient to WebSocket gaps (à la FIX drop-copy)",
      "Avoiding dual-writer double-counting in the ledger",
    ],
    outcomes: [
      "Realized net APR of 3.75–5.14% in lending weeks, reconciled against the exchange ledger to within 0.1–2.9%",
      "Order-book data availability 3.9% → 99.6%; cold-start quoting 60 min → 14–27s",
      "6+ production incidents diagnosed and fixed, each canary-verified",
    ],
    links: {
      github: "https://github.com/Will413028/bfx-funding-bot",
    },
  },
  {
    id: 5,
    slug: "divego",
    title: "divego",
    subtitle: "Full-Stack Migration",
    description:
      "A dive-matching platform migrated from a FastAPI backend to a unified Next.js full-stack app using the strangler-fig pattern",
    longDescription:
      "divego is a scuba-diving matching platform. Its backend was migrated from a standalone FastAPI service to a unified Next.js full-stack app (Hono + Drizzle on Next.js 16) using the strangler-fig pattern — domain by domain — eventually retiring the Python backend entirely.",
    tags: ["Next.js", "Hono", "Drizzle", "TypeScript", "PostgreSQL"],
    type: "Full-Stack Migration",
    quarter: "Q2 2026",
    gradient: "from-blue-900/80 via-indigo-800/60 to-violet-900/80",
    featured: false,
    screenshots: ["/images/projects/divego.png"],
    features: [
      "Strangler-fig migration: domain-by-domain vertical slices",
      "Unified Next.js full-stack app with Hono + Drizzle",
      "Cross-stack unified error protocol",
      "End-to-end type safety from DB to client (hc typed client + Tanstack Query)",
      "Retired the FastAPI backend entirely (~567 tests)",
    ],
    challenges: [
      "Migrating each domain without breaking live functionality",
      "Schema handoff from Alembic to Drizzle",
      "Keeping cross-domain payloads consistent during the transition",
    ],
    outcomes: [
      "Python / FastAPI backend fully retired (~567 tests passing)",
      "Consolidated into a single unified Next.js full-stack codebase",
    ],
    links: {},
  },
  {
    id: 6,
    slug: "membership-booking-demo",
    title: "Membership Booking",
    subtitle: "Studio Membership & Class Booking",
    description:
      "A full-stack membership and class-booking system for a boutique studio — plans, payments, credits, and bookings, with an admin console",
    longDescription:
      "A hosted side project set in a Pilates / yoga studio. Members buy a plan, pay through Stripe (test mode), and book classes against their credits; staff manage sessions, members, bookings, and orders from an admin console. Built on Supabase Auth, PostgreSQL row-level security, and atomic booking in the database, from product direction to hosted demo in three days.",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Stripe"],
    type: "Side Project",
    quarter: "Q3 2026",
    gradient: "from-rose-900/80 via-pink-800/60 to-stone-900/80",
    featured: false,
    screenshots: ["/images/projects/membership-booking-demo.png"],
    features: [
      "Monthly subscriptions (8 classes or unlimited) and a single trial class",
      "Stripe Checkout with signed webhooks syncing membership state",
      "Credit-based class booking and cancellation, enforced atomically in PostgreSQL",
      "Row-level security on every member-facing table",
      "Admin console for sessions, members, bookings, and orders",
      "Database migrations auto-applied to production from CI",
    ],
    challenges: [
      "Keeping membership state consistent with asynchronous payment webhooks",
      "Preventing overbooking and double-spent credits under concurrent requests",
      "Proving database security rules with tests, not just UI checks",
    ],
    outcomes: [
      "Product direction to hosted demo in three days",
      "Verified by 150+ unit tests, 88 pgTAP database tests, and 15 production-style Playwright runs",
      "Two real Stripe test checkouts walked end to end: payment → membership → booking → cancellation",
    ],
    links: {
      live: "https://membership-booking-demo.vercel.app",
    },
  },
];

const projectsZhTw: Project[] = [
  {
    id: 1,
    slug: "saywe",
    title: "SayWe",
    subtitle: "AI 會議助手",
    description: "具備離線功能和智慧摘要的地端 AI 會議逐字稿桌面應用程式",
    longDescription:
      "SayWe 是一款使用 Tauri 構建的 AI 會議助手桌面應用程式。透過 Whisper 提供語音轉文字功能，並使用本地 LLM 進行智慧會議摘要，確保所有資料留在地端以符合企業安全需求。",
    tags: [
      "Python",
      "FastAPI",
      "Tauri",
      "Next.js",
      "PostgreSQL",
      "Whisper",
      "LLM",
    ],
    type: "桌面應用",
    quarter: "2024 Q3",
    gradient: "from-indigo-900/80 via-purple-800/60 to-blue-900/80",
    featured: true,
    screenshots: ["/images/projects/saywe.jpg"],
    features: [
      "使用 Whisper 驅動的語音轉文字逐字稿",
      "使用本地 LLM 的 AI 會議摘要",
      "地端部署確保企業資料安全",
      "使用 Tauri 構建的跨平台桌面應用",
      "逐字稿管理與搜尋",
      "支援多語言逐字稿",
    ],
    challenges: [
      "整合 Whisper 實現精準的即時轉錄",
      "使用 Tauri + Next.js 構建高效能桌面應用",
      "確保 LLM 推論在本地硬體上高效運行",
    ],
    outcomes: ["已在生產環境服務付費客戶", "全地端部署——符合企業資料安全需求"],
    links: {
      github: "https://github.com/Will413028/meeting-helper-backend",
    },
  },
  {
    id: 2,
    slug: "dailyfresh",
    title: "日日生鮮",
    subtitle: "產地直送電商平台",
    description: "全端生鮮電商平台，透過冷鏈配送將在地小農與消費者直接連結",
    longDescription:
      "日日生鮮是一個生鮮電商平台，將在地小農和頂級食材供應商與消費者直接連結。平台包含買家 App、賣家 App、管理後台和行銷網站，全部由微服務架構支撐，另有處理買家詢價與賣家報價的對話式 AI 採購助手。公司於 2026 年 9 月結束營運；經老闆同意，程式碼以私人 monorepo 保留，後端正改寫為 Go modular monolith。",
    tags: [
      "Go",
      "Gin",
      "Java",
      "Flutter",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Docker",
      "k3s",
    ],
    type: "全端平台",
    quarter: "2026 Q1",
    gradient: "from-emerald-900/80 via-green-800/60 to-teal-900/80",
    featured: true,
    screenshots: ["/images/projects/dailyfresh.png"],
    features: [
      "使用 Go 和 Gin 的微服務後端架構",
      "買家和賣家 Flutter 行動應用",
      "平台管理後台",
      "整合 PayUni 金流",
      "使用 Next.js 構建的行銷網站",
      "使用訊息佇列處理非同步訂單",
      "跨 gateway、web 與雙 Flutter App 的即時通訊可靠性層——無狀態 HMAC WebSocket 票券並支援 Redis 中斷時的優雅降級、雙向心跳、full-jitter 重連、每帳號連線數上限",
    ],
    challenges: [
      "為多個客戶端應用設計可擴展的微服務架構",
      "整合金流閘道實現無縫結帳",
      "在買家和賣家應用間建構即時訂單追蹤",
    ],
    outcomes: [
      "零停機認證重構 + 20 微服務阿里雲 RDS 遷移",
      "全 21 微服務平台零停機滾動部署——經即時滾動重啟探測驗證（7,910 次請求、零停機）",
      "買賣家 iOS App 完成首次 App Store 送審",
      "橫跨 22 個 Go/Java 微服務、網站、後台與兩支 App，12,406 筆 non-merge commit 中約 60% 出自我手",
      "公司結束後：依實測耦合（730 RPC、212 事件、455 個 PR 的共同變更）把 22 個服務重新切成 Go modular monolith 的 24 個模組",
    ],
    links: {
      live: "https://dailyfresh.food/",
      github: "https://github.com/dailyfresh-food/backend-payuni",
    },
  },
  {
    id: 3,
    slug: "escooter-pos",
    title: "電動車租賃 POS 系統",
    subtitle: "雲端租賃平台",
    description:
      "雲端 POS 系統與電動車租賃平台，提供完整的 Web、管理後台與 POS 端到端介面",
    longDescription:
      "在成奇科技從零打造的綜合雲端 POS 和租賃管理系統。平台管理電動車租賃業務，包含消費者網站、管理後台和銷售終端，全部部署在 GCP 上並使用基礎設施即代碼。",
    tags: [
      "Python",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "GCP",
      "Terraform",
      "GitLab CI",
    ],
    type: "網頁應用",
    quarter: "2024 Q2",
    gradient: "from-blue-900/80 via-sky-800/60 to-cyan-900/80",
    featured: true,
    screenshots: ["/images/projects/escooter-pos.jpg"],
    features: [
      "雲端 POS 系統用於租賃營運",
      "消費者網站用於瀏覽和預約",
      "管理後台用於車隊和訂單管理",
      "使用 GitLab CI 和 Ansible 建構 CI/CD 管線",
      "在 GCP 上使用 Terraform 實作基礎設施即代碼",
      "帶領 4 人工程團隊完成完整開發週期",
    ],
    challenges: [
      "以小團隊從零建構整個系統",
      "設計具備即時可用性的可靠租賃流程",
      "使用 Terraform 建構可重複部署的雲端基礎設施",
    ],
    outcomes: [
      "~2 個月帶 4 人團隊從零交付",
      "部署快 50%（GitLab CI + Ansible）、基礎設施開銷降 30%（Terraform）",
    ],
    links: {},
  },
  {
    id: 4,
    slug: "bfx-funding-bot",
    title: "bfx-funding-bot",
    subtitle: "加密貨幣放貸機器人",
    description:
      "真錢運行的 Bitfinex 保證金放貸機器人，採事件溯源帳本與對帳式正確性骨幹",
    longDescription:
      "在 Bitfinex 保證金放貸市場自動放貸的機器人。以真實資金運行，採用 PostgreSQL 帳本、週期對帳的正確性骨幹（REST 快照為真實來源，WebSocket 為盡力而為的延遲最佳化）、異地災難復原，以及量化策略驗證管線；實際收益以交易所自身帳本對帳量測。",
    tags: ["Python", "asyncio", "PostgreSQL", "Docker", "GitHub Actions"],
    type: "交易系統",
    quarter: "2026 Q2",
    gradient: "from-amber-900/80 via-orange-800/60 to-yellow-900/80",
    featured: false,
    screenshots: ["/images/projects/bfx-funding-bot.png"],
    features: [
      "事件溯源帳本（append-only event log + 快照表）",
      "週期對帳正確性骨幹（REST 快照為真實來源，WebSocket 為延遲最佳化）",
      "single-writer exposure 對帳，避免重複計算",
      "balance-aware 部署閘控，安全配置資金",
      "量化驗證：walk-forward optimization + bootstrap CI + deflated Sharpe",
    ],
    challenges: [
      "在真實資金上診斷並修復 6+ 起 production incident，每次都有 canary 驗證",
      "設計可承受 WebSocket 中斷的對帳骨幹（類 FIX drop-copy）",
      "避免帳本的 dual-writer 重複計算",
    ],
    outcomes: [
      "有放貸週的實際淨 APR 3.75–5.14%，與交易所帳本對帳誤差 0.1–2.9%",
      "訂單簿資料可用率 3.9% → 99.6%；冷啟動報價 60 分鐘 → 14–27 秒",
      "診斷並修復 6+ 起 production incident，每次 canary 驗證",
    ],
    links: {
      github: "https://github.com/Will413028/bfx-funding-bot",
    },
  },
  {
    id: 5,
    slug: "divego",
    title: "divego",
    subtitle: "全端遷移",
    description:
      "潛水媒合平台，使用 strangler-fig 模式從 FastAPI 後端遷移至統一的 Next.js 全端應用",
    longDescription:
      "divego 是潛水媒合平台。後端使用 strangler-fig 模式逐域從獨立的 FastAPI 服務遷移至統一的 Next.js 全端應用（Hono + Drizzle on Next.js 16），最終完全退役 Python 後端。",
    tags: ["Next.js", "Hono", "Drizzle", "TypeScript", "PostgreSQL"],
    type: "全端遷移",
    quarter: "2026 Q2",
    gradient: "from-blue-900/80 via-indigo-800/60 to-violet-900/80",
    featured: false,
    screenshots: ["/images/projects/divego.png"],
    features: [
      "strangler-fig 遷移：逐域垂直切片",
      "統一 Next.js 全端應用（Hono + Drizzle）",
      "跨技術棧統一錯誤協定",
      "從 DB 到前端的端到端型別安全（hc typed client + Tanstack Query）",
      "完全退役 FastAPI 後端（約 567 測試）",
    ],
    challenges: [
      "逐域遷移且不中斷既有功能",
      "schema 從 Alembic 交棒至 Drizzle",
      "遷移過程保持跨域 payload 一致",
    ],
    outcomes: [
      "Python / FastAPI 後端完全退役（~567 測試通過）",
      "收斂成單一 Next.js 全端程式庫",
    ],
    links: {},
  },
  {
    id: 6,
    slug: "membership-booking-demo",
    title: "會員預約系統",
    subtitle: "工作室會員與課程預約",
    description:
      "為質感工作室打造的全端會員與課程預約系統——方案、付款、堂數與預約，並附管理後台",
    longDescription:
      "以皮拉提斯／瑜伽工作室為情境的個人 side project，已部署上線。會員購買方案、透過 Stripe（測試模式）付款，再以堂數預約課程；工作人員在後台管理場次、會員、預約與訂單。建構於 Supabase Auth、PostgreSQL row-level security 與資料庫內的原子預約，從產品方向到上線展示共三天。",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Stripe"],
    type: "個人作品",
    quarter: "2026 Q3",
    gradient: "from-rose-900/80 via-pink-800/60 to-stone-900/80",
    featured: false,
    screenshots: ["/images/projects/membership-booking-demo.png"],
    features: [
      "月訂閱（8 堂或無限堂）與單堂體驗",
      "Stripe Checkout 搭配簽章驗證的 webhook 同步會員狀態",
      "以堂數預約與取消，由 PostgreSQL 原子性保證",
      "所有會員端資料表皆啟用 row-level security",
      "管理後台：場次、會員、預約與訂單",
      "資料庫 migration 由 CI 自動套用到生產環境",
    ],
    challenges: [
      "讓會員狀態與非同步付款 webhook 保持一致",
      "在並發請求下防止超賣與堂數重複扣用",
      "用測試證明資料庫安全規則，而不只靠畫面檢查",
    ],
    outcomes: [
      "從產品方向到上線展示共三天",
      "以 150+ 個單元測試、88 個 pgTAP 資料庫測試與 15 個生產環境形態的 Playwright 測試驗收",
      "兩筆真實 Stripe 測試付款走完整條流程：付款 → 會員資格 → 預約 → 取消",
    ],
    links: {
      live: "https://membership-booking-demo.vercel.app",
    },
  },
];

const projectsByLocale: Record<string, Project[]> = {
  en: projectsEn,
  "zh-TW": projectsZhTw,
};

export function getProjects(locale: string = "en"): Project[] {
  return projectsByLocale[locale] || projectsByLocale.en;
}

export function getProjectBySlug(
  slug: string,
  locale: string = "en",
): Project | undefined {
  return getProjects(locale).find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsEn.map((p) => p.slug);
}
