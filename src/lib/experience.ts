export interface Experience {
  slug: string;
  role: string;
  company: string;
  period: string;
  location: string;
  techStack: string;
  /** One line for readers who do not know the company. */
  intro: string;
  /** 3-4 bullets, each opening with its result (see the resume writing guide). */
  description: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

const experienceEn: Experience[] = [
  {
    slug: "apmic",
    role: "Sr. Backend Engineer",
    company: "APMIC",
    period: "Nov 2025 - Present",
    location: "Taipei, Taiwan",
    techStack:
      "Python (FastAPI), React, Next.js, PostgreSQL, Hasura, RabbitMQ, Google ADK",
    intro:
      "Enterprise AI platform for on-premises LLM deployment and model fine-tuning",
    description: [
      "Shipped SAML 2.0 SSO and an RBAC redesign for a global insurance client, closing a privilege-escalation gap; traced an SSO failure to a vendor XSD-validation conflict and hot-patched production",
      "Cleared the client's pre-audit security scan for an on-premises delivery (static findings 5 → 0, dependency vulnerabilities 16 → 2, npm audit 20 → 0) by triaging 1,699 raw findings down to 6 production-code sites",
      "Cut AI report generation from 7m37s to 1m57s with asyncio parallelization, and quarterly-report Q&A from ~80s to ~7s by timing download and parse separately and swapping the spreadsheet reader",
      "Shrank the agent state machine from 721 to 144 lines with declarative flow control (behavior locked by 50 characterization tests), while consolidating a Google ADK agent platform into one FastAPI service with HMAC-SHA256 request signing",
    ],
  },
  {
    slug: "vocus",
    role: "Sr. Backend Engineer",
    company: "Vocus",
    period: "Mar 2025 - Oct 2025",
    location: "Taipei, Taiwan",
    techStack: "Go (Gin), MongoDB, Redis, Qdrant, Cloudflare, AWS, GCP",
    intro: "Taiwan's top-tier content-creator platform; ~3M weekly API calls",
    description: [
      "Reduced MongoDB p95 latency on hotspot endpoints by 80% by replacing $lookup cross-collection joins with single-collection reads and application-layer joins (goroutine fan-out)",
      "Lowered recommendation infrastructure cost by 20% by migrating from BigQuery to a self-hosted Qdrant vector DB, removing per-query pricing on the highest-traffic path",
      "Owned the NewebPay payment migration to iframe-redirect mode across all 4 payment types (subscription, one-time, recurring, donation), reducing PCI-DSS scope by moving card-data collection to the gateway",
      "Designed the composition patterns (single-responsibility services + decorator chains with concurrent fan-out) for a DDD refactor that moved 73+ API modules into a 4-layer architecture",
    ],
  },
  {
    slug: "chengchi",
    role: "Sr. Backend Engineer",
    company: "ChengChi Tech",
    period: "Apr 2024 - Mar 2025",
    location: "New Taipei, Taiwan",
    techStack:
      "Python (FastAPI), Next.js, Tauri, PostgreSQL, Redis, GCP, Azure",
    intro: "Early-stage startup building POS, EV-rental, AI and ERP products",
    description: [
      "First and only senior backend engineer: architected 9 microservices from scratch (Python 3.12 / FastAPI), owned all backend architecture and code review, and mentored juniors as the team grew from 4 to 7–8",
      "Shipped three products solo: an AI meeting-summarization app in 3 months (WhisperX + Ollama + Tauri), now serving paying customers, plus a cloud POS and an EV-rental system in ~2 months each",
      "Cut deployment time by 50% and infrastructure overhead by 30% by building CI/CD (self-hosted GitLab CI + Ansible), Terraform IaC, and SonarQube quality gates from zero",
    ],
  },
  {
    slug: "ai-rider",
    role: "Backend Engineer",
    company: "AI-Rider",
    period: "Mar 2022 - Nov 2023",
    location: "New Taipei, Taiwan",
    techStack:
      "Node.js (Koa), Python (Flask), MariaDB, Redis, RabbitMQ, Modbus TCP",
    intro:
      "Parking-technology company; POS and devices across ~1,000 parking sites",
    description: [
      "Primary backend engineer on the POS system for ~1,000 parking sites, whose flagship client brought in 50%+ of company revenue; handled multi-tenant billing (time tiers, monthly passes, EV-charging pre-auth)",
      "Architected a hardware abstraction layer for 10+ device types over Modbus TCP (ANPR cameras, gate arms, ETag readers, LED boards) behind one REST API",
      "Halved SQL execution time for a customer with ~4–5M parking records using EXPLAIN analysis and compound indexes",
    ],
  },
];

const experienceZhTw: Experience[] = [
  {
    slug: "apmic",
    role: "資深後端工程師",
    company: "APMIC",
    period: "2025 年 11 月 - 至今",
    location: "台北，台灣",
    techStack:
      "Python (FastAPI), React, Next.js, PostgreSQL, Hasura, RabbitMQ, Google ADK",
    intro: "企業級 AI 平台，專注地端 LLM 部署與模型微調",
    description: [
      "為全球保險客戶交付 SAML 2.0 SSO 與 RBAC 重構，修補權限越界漏洞；追出 SSO 失敗源自廠商的 XSD 驗證衝突，並在生產環境上線熱修補",
      "為同一客戶的地端交付把稽核前弱掃清到零（靜態掃描 5 → 0、依賴弱點 16 → 2、npm audit 20 → 0），從 1,699 筆原始發現收斂到 6 個生產程式碼位置",
      "以 asyncio 平行化把 AI 報告產生時間從 7 分 37 秒降到 1 分 57 秒；把下載與解析分開量測、更換試算表讀取器，季報問答從約 80 秒降到約 7 秒",
      "以宣告式流程控制把 agent 狀態機從 721 行縮到 144 行（以 50 個 characterization test 鎖住行為），同時把 Google ADK agent 平台整併成單一 FastAPI 服務並加上 HMAC-SHA256 請求簽章",
    ],
  },
  {
    slug: "vocus",
    role: "資深後端工程師",
    company: "Vocus 方格子",
    period: "2025 年 3 月 - 2025 年 10 月",
    location: "台北，台灣",
    techStack: "Go (Gin), MongoDB, Redis, Qdrant, Cloudflare, AWS, GCP",
    intro: "台灣頂尖的內容創作平台，每週約 300 萬次 API 呼叫",
    description: [
      "把熱點端點的 MongoDB p95 延遲降低 80%：以單集合讀取加應用層 join（goroutine fan-out）取代 $lookup 跨集合 join",
      "推薦系統從 BigQuery 遷到自架 Qdrant 向量資料庫，基礎設施成本降低 20%，流量最高的查詢路徑不再按次計費",
      "主導藍新金流改為 iframe 導轉模式，涵蓋全部 4 種付款類型（訂閱、單次、定期定額、贊助），卡號改由金流端收集以縮小 PCI-DSS 範圍",
      "為 DDD 重構設計組合模式（單一職責服務 + 並行 fan-out 的 decorator 鏈），將 73+ 個 API 模組搬進四層架構",
    ],
  },
  {
    slug: "chengchi",
    role: "資深後端工程師",
    company: "成奇科技",
    period: "2024 年 4 月 - 2025 年 3 月",
    location: "新北，台灣",
    techStack:
      "Python (FastAPI), Next.js, Tauri, PostgreSQL, Redis, GCP, Azure",
    intro: "早期新創，產品涵蓋 POS、電動車租賃、AI 與 ERP",
    description: [
      "公司第一位也是唯一的資深後端工程師：從零架構 9 個微服務（Python 3.12 / FastAPI），負責全部後端架構決策與 code review，團隊從 4 人成長到 7–8 人期間帶領新進工程師",
      "獨自交付三個產品：3 個月完成 AI 會議摘要 app（WhisperX + Ollama + Tauri），目前有付費客戶；雲端 POS 與電動車租賃系統各約 2 個月完成",
      "從零建立 CI/CD（自架 GitLab CI + Ansible）、Terraform IaC 與 SonarQube 品質門檻，部署時間縮短 50%、基礎設施維運負擔降低 30%",
    ],
  },
  {
    slug: "ai-rider",
    role: "後端工程師",
    company: "AI-Rider",
    period: "2022 年 3 月 - 2023 年 11 月",
    location: "新北，台灣",
    techStack:
      "Node.js (Koa), Python (Flask), MariaDB, Redis, RabbitMQ, Modbus TCP",
    intro: "停車科技公司，POS 與設備遍布約 1,000 個停車場",
    description: [
      "約 1,000 個停車場 POS 系統的主要後端工程師，旗艦客戶貢獻公司 50% 以上營收；負責多租戶計費（分時費率、月租、電動車充電預授權）",
      "以 Modbus TCP 架構硬體抽象層，支援 10+ 種設備（車牌辨識攝影機、柵欄機、ETag、LED 看板），對上游只露出一個 REST API",
      "以 EXPLAIN 分析與複合索引，把約 400–500 萬筆停車紀錄客戶的 SQL 執行時間減半",
    ],
  },
];

const educationEn: Education[] = [
  {
    degree: "MS, Data Analytics Engineering",
    school: "George Mason University",
    period: "2019 - 2021",
  },
  {
    degree: "BS, Chemical Engineering",
    school: "Tatung University",
    period: "2013 - 2016",
  },
];

const educationZhTw: Education[] = [
  {
    degree: "資料分析工程碩士",
    school: "喬治梅森大學",
    period: "2019 - 2021",
  },
  {
    degree: "化學工程學士",
    school: "大同大學",
    period: "2013 - 2016",
  },
];

const skillsEn: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "Go", "TypeScript", "Java"],
  },
  {
    category: "Frameworks",
    items: ["FastAPI", "Gin", "Spring Boot", "Next.js", "Flask"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "MariaDB"],
  },
  {
    category: "Cloud & DevOps",
    items: ["GCP", "AWS", "Docker", "k3s", "GitLab CI", "Terraform", "Ansible"],
  },
];

const skillsZhTw: SkillCategory[] = [
  {
    category: "程式語言",
    items: ["Python", "Go", "TypeScript", "Java"],
  },
  {
    category: "框架",
    items: ["FastAPI", "Gin", "Spring Boot", "Next.js", "Flask"],
  },
  {
    category: "資料庫",
    items: ["PostgreSQL", "MongoDB", "Redis", "MariaDB"],
  },
  {
    category: "雲端與 DevOps",
    items: ["GCP", "AWS", "Docker", "k3s", "GitLab CI", "Terraform", "Ansible"],
  },
];

const experienceByLocale: Record<string, Experience[]> = {
  en: experienceEn,
  "zh-TW": experienceZhTw,
};

const educationByLocale: Record<string, Education[]> = {
  en: educationEn,
  "zh-TW": educationZhTw,
};

const skillsByLocale: Record<string, SkillCategory[]> = {
  en: skillsEn,
  "zh-TW": skillsZhTw,
};

export function getExperience(locale: string = "en"): Experience[] {
  return experienceByLocale[locale] || experienceByLocale.en;
}

export function getEducation(locale: string = "en"): Education[] {
  return educationByLocale[locale] || educationByLocale.en;
}

export function getSkills(locale: string = "en"): SkillCategory[] {
  return skillsByLocale[locale] || skillsByLocale.en;
}
