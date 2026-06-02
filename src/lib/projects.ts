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
      "DailyFresh is a fresh food e-commerce platform that connects local farmers and premium food suppliers directly with consumers. The platform includes a buyer app, seller app, admin dashboard, and marketing website, all backed by a microservice architecture.",
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
    quarter: "Q1 2025",
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
    ],
    challenges: [
      "Designing a scalable microservice architecture for multiple client apps",
      "Integrating payment gateway for seamless checkout",
      "Building real-time order tracking across buyer and seller apps",
    ],
    outcomes: [
      "Zero-downtime auth re-architecture + 20-service Alibaba Cloud RDS migration",
      "Buyer & seller iOS apps shipped through their first App Store submission",
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
      "An automated bot that lends on Bitfinex's margin-funding market. It runs on live capital with an event-sourced PostgreSQL ledger, a periodic-reconcile correctness backbone (REST snapshot as source of truth, WebSocket as best-effort latency optimization), and a quantitative strategy-validation pipeline.",
    tags: ["Python", "asyncio", "PostgreSQL", "Event Sourcing", "Koyeb"],
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
      "Running on live capital with reconcile-based correctness",
      "6+ production incidents diagnosed and fixed, each canary-verified",
    ],
    links: {},
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
      "日日生鮮是一個生鮮電商平台，將在地小農和頂級食材供應商與消費者直接連結。平台包含買家 App、賣家 App、管理後台和行銷網站，全部由微服務架構支撐。",
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
    quarter: "2025 Q1",
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
    ],
    challenges: [
      "為多個客戶端應用設計可擴展的微服務架構",
      "整合金流閘道實現無縫結帳",
      "在買家和賣家應用間建構即時訂單追蹤",
    ],
    outcomes: [
      "零停機認證重構 + 20 微服務阿里雲 RDS 遷移",
      "買賣家 iOS App 完成首次 App Store 送審",
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
      "在 Bitfinex 保證金放貸市場自動放貸的機器人。以真實資金運行，採用事件溯源的 PostgreSQL 帳本、週期對帳的正確性骨幹（REST 快照為真實來源，WebSocket 為盡力而為的延遲最佳化），以及量化策略驗證管線。",
    tags: ["Python", "asyncio", "PostgreSQL", "Event Sourcing", "Koyeb"],
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
      "以真實資金運行，對帳式正確性保障",
      "診斷並修復 6+ 起 production incident，每次 canary 驗證",
    ],
    links: {},
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
