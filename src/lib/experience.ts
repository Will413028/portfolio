export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  techStack: string;
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
    role: "Sr. Backend Engineer",
    company: "APMIC",
    period: "Nov 2025 - Present",
    location: "Taipei, Taiwan",
    techStack:
      "Python (FastAPI), React, Next.js, PostgreSQL, Hasura, RabbitMQ, Google ADK",
    description: [
      "Enterprise AI platform for on-premises LLM deployment and model fine-tuning",
      "Consolidated the client's Google ADK agent platform into a single FastAPI app — collapsed a two-process deployment (fixing a cross-process fileset-cache correctness bug), refactored a hand-rolled agent state machine into declarative flow-control (721 → 144 lines, verified by 50 characterization tests), and hardened it with stateless HMAC-SHA256 request signing",
      "Delivered SAML 2.0 SSO and an RBAC redesign for an enterprise customer-service platform, separating end-customers from operators to close a privilege-escalation gap",
      "Built a real-time webchat agent-state system — a 5-state machine on PostgreSQL triggers with cross-system mutual exclusion against a Cisco Finesse telephony platform",
      "Self-built 3-layer distributed tracing (contextvar trace_id across FastAPI middleware + RabbitMQ) with PII-safe structured logging where OpenTelemetry didn't fit",
      "Built automated web-scraping pipelines and a RAG knowledge-base integrity toolchain, cutting actionable data gaps from 64 to 1",
      "Root-caused intermittent production timeouts that survived removing the suspected trigger — three plausible hypotheses were each disproven by measurement before the real cause surfaced: two HTTP calls without timeouts exhausting a worker's thread pool. Closed the class with a resilience audit and an AST-based regression guard",
      "Cut quarterly-report Q&A latency on an AI investment-report product from ~80s to ~7s — measured download and parsing separately, traced the cost to the spreadsheet reader (parse 57–147s → 1.7–2.7s), and swapped readers with a cell-by-cell equivalence check",
      "Cleared a client's pre-audit security scan for an offline on-premises delivery — production-code static findings 5 → 0, dependency vulnerabilities 16 → 2, npm audit 20 → 0 — triaging 1,699 raw findings down to the one real vulnerability, plus two real holes the static tools don't flag",
    ],
  },
  {
    role: "Sr. Backend Engineer",
    company: "dailyfresh",
    period: "Jan 2026 - Sep 2026",
    location: "Taipei, Taiwan",
    techStack:
      "Go (Gin), Java (Spring Boot), PostgreSQL, Redis, RabbitMQ, k3s, Next.js, Flutter",
    description: [
      "Senior engineer on a multi-vendor fresh-grocery marketplace (Go/Java microservices + Next.js web + Flutter buyer/seller apps), owning backend platform and cross-stack delivery — authored ~60% of the 12,406 non-merge commits across five repositories until the company wound down in Sep 2026",
      "Re-architected web authentication to a gateway-owned session model (httpOnly cookies + CSRF + role-as-claim), unifying buyer/seller dual-role identity",
      "Led a zero-downtime OAuth account-model refactor from 1:1 columns to a 1:N providers table across Google/Apple",
      "Owned a production migration of 20 microservices to Alibaba Cloud RDS within an ~11-minute maintenance window",
      "Led a platform-wide identifier re-keying campaign separating login identity from business-entity keys across 5 repositories and 21 protobuf schemas, then closed ~20 dormant bugs of the same failure mode surfaced by a parallel-agent audit",
      "Rebuilt three infrastructure layers in one month — a second production database migration with zero restarts, private WireGuard mesh networking (15 public ports withdrawn), and RabbitMQ from single-node SPOF to a 3-node cluster with declarative topology (132 → 26 objects)",
      "Ported a Python price-forecasting pipeline to native Go inference and shipped it to sellers end to end — 36-dimension feature parity proven by 28 golden cases, plus a 5-year / 5.1M-row historical backfill",
      "Replaced a denormalized role bitmask (one fact stored 8 ways in 5 incompatible encodings) with normalized role grants, cutting the leaked-credential window from 14 days to 15 minutes",
      "Closed two silent fail-open paths in internal service authentication — an unrecognized auth-mode value fell back to permissive — then promoted to production: 25 releases Ready, zero gateway 5xx",
      "Made the AI procurement agent's quality measurable: retrieve-then-rank item resolution (golden set 14/14, −1,363 lines of v1), canonical vendor taxonomy (0 → 10 matched vendors, 640 LLM labels with zero fabrications), and a repeated eval (27/28 vs 20/28) that justified deleting the fallback path",
    ],
  },
  {
    role: "Sr. Backend Engineer",
    company: "Vocus",
    period: "Mar 2025 - Oct 2025",
    location: "Taipei, Taiwan",
    techStack: "Golang (Gin), MongoDB, Redis, AWS, GCP",
    description: [
      "Contributed to backend architecture refactoring for Taiwan's largest content platform (2M+ MAU), redesigning core modules using domain-driven design",
      "Refactored core modules and integrated payment gateway on social media blogging SaaS platform",
      "Optimized MongoDB queries by eliminating lookups, reducing API response time by 80%",
      "Implemented a message queue for batch writes to improve database efficiency and SEO performance",
      "Migrated recommendation system from BigQuery to Qdrant, lowering costs by 20%",
    ],
  },
  {
    role: "Sr. Backend Engineer",
    company: "ChengChi Tech",
    period: "Apr 2024 - Mar 2025",
    location: "New Taipei, Taiwan",
    techStack: "Python (FastAPI), Next.js, PostgreSQL, Redis, GCP",
    description: [
      "Led a team of 4 engineers to build a cloud-based POS system and scooter rental system from scratch",
      "Built CI/CD pipelines with GitLab CI and Ansible, reducing deployment time by 50%",
      "Implemented infrastructure as code using Terraform, reducing infrastructure maintenance overhead by 30%",
      "Developed an AI meeting summarization app with Tauri + Next.js, integrating Whisper and local LLM",
    ],
  },
  {
    role: "Backend Engineer",
    company: "AI-Rider",
    period: "Mar 2022 - Nov 2023",
    location: "New Taipei, Taiwan",
    techStack: "Python (Flask), Node.js (Koa), MariaDB, RabbitMQ",
    description: [
      "Maintained a smart parking management system serving 1,000+ parking lots nationwide",
      "Optimized SQL queries, reducing execution time by 50% and improving system responsiveness",
      "Collaborated with the hardware team on device integration, reducing hardware costs by 20%",
      "Built an Asian facial recognition dataset from 1,000+ YouTube videos to address model bias",
      "Trained a vehicle re-identification model to enhance DeepSORT trajectory prediction accuracy",
      "Refactored IoT service (Golang → Python) with OOP design, abstracting hardware types into a unified API",
    ],
  },
];

const experienceZhTw: Experience[] = [
  {
    role: "資深後端工程師",
    company: "APMIC",
    period: "2025 年 11 月 - 至今",
    location: "台北，台灣",
    techStack:
      "Python (FastAPI), React, Next.js, PostgreSQL, Hasura, RabbitMQ, Google ADK",
    description: [
      "企業級 AI 平台，專注地端 LLM 部署與模型微調",
      "將客戶的 Google ADK agent 平台整併為單一 FastAPI 應用——收斂雙進程部署（修復跨進程 fileset-cache 正確性 bug），將手刻的 agent 狀態機重構為宣告式流程控制（721 → 144 行，以 50 個 characterization test 驗證），並以無狀態 HMAC-SHA256 請求簽章強化安全",
      "為企業客服平台交付 SAML 2.0 SSO 與 RBAC 重構，分離終端客戶與客服人員，修補權限越界漏洞",
      "建構即時客服狀態系統——以 PostgreSQL trigger 實作 5 狀態機，並與 Cisco Finesse 電話系統跨系統互斥",
      "自建 3 層分散式追蹤（contextvar trace_id 貫穿 FastAPI 中介層與 RabbitMQ），在不適用 OpenTelemetry 時提供 PII-safe 結構化日誌",
      "建構自動化網頁爬蟲管線與 RAG 知識庫完整性工具鏈，將可行動的資料缺口從 64 降至 1",
      "追出生產環境間歇性逾時的真正根因——移除疑似觸發源後問題仍在，三個看似合理的假設逐一被實測推翻，真因是兩個沒設 timeout 的 HTTP 呼叫拖垮 worker 的 thread pool。以韌性稽核與 AST 回歸守門機制根絕同類問題",
      "將 AI 投資報告產品的季報問答延遲從約 80 秒降到約 7 秒——把下載與解析分開量測，定位到試算表讀取器（解析 57–147 秒 → 1.7–2.7 秒），更換讀取器並以逐格比對證明輸出等價",
      "為客戶的離線地端交付把稽核前弱掃清到零——生產程式碼靜態掃描 5 → 0、依賴弱點 16 → 2、npm audit 20 → 0；從 1,699 筆原始發現收斂出唯一的真漏洞，另抓出兩個靜態工具不會報的真實漏洞",
    ],
  },
  {
    role: "資深後端工程師",
    company: "日日生鮮",
    period: "2026 年 1 月 - 2026 年 9 月",
    location: "台北，台灣",
    techStack:
      "Go (Gin), Java (Spring Boot), PostgreSQL, Redis, RabbitMQ, k3s, Next.js, Flutter",
    description: [
      "生鮮電商平台（Go/Java 微服務 + Next.js 網站 + Flutter 買賣家 App）的資深工程師，負責後端平台與跨技術棧交付；至 2026 年 9 月公司結束營運為止，五個 repo 共 12,406 筆 non-merge commit 中約 60% 出自我手",
      "將網頁認證重構為 gateway-owned session 模型（httpOnly cookie + CSRF + role-as-claim），統一買賣家雙角色身分",
      "主導零停機 OAuth 帳號模型重構，從 1:1 欄位升級為跨 Google/Apple 的 1:N providers 表",
      "負責 20 個微服務遷移至阿里雲 RDS，於約 11 分鐘維護視窗內零停機完成",
      "主導跨 5 個 repository、21 份 protobuf schema 的識別碼正名工程，將登入身份與業務實體鍵分離，並以平行 agent 稽核找出並修復約 20 個同一失效模式的休眠 bug",
      "一個月內翻新三層基礎設施——第二次生產資料庫遷移（零重啟）、生產環境移入 WireGuard 私有網路（收回 15 個公開連接埠）、RabbitMQ 從單機 SPOF 升級為 3 節點叢集並將拓樸收斂成宣告式定義（132 → 26 個物件）",
      "將 Python 價格預測管線移植為 Go 原生推論並端到端交付給賣家——36 維特徵以 28 組 golden case 驗證與 Python 實作一致，另完成 5 年 / 510 萬列的歷史資料回填",
      "把反正規化的角色 bitmask（同一事實 8 處具現、5 種互不相容編碼）重構為正規化角色授予，憑證外洩窗口從 14 天降到 15 分鐘",
      "修掉內部服務認證的兩條靜默 fail-open（無法辨識的認證模式值會回退成放行）後推上生產環境：25 個 release 全數 Ready、gateway 零 5xx",
      "讓 AI 採購助手的品質可量測並據此決策：品項解析改為 retrieve-then-rank（黃金集 14/14、刪除 v1 共 −1,363 行）、站外業者改用 canonical taxonomy（可媒合業者 0 → 10、640 筆 LLM 標註零捏造），並以重複 eval（27/28 對 20/28）證明可刪除 fallback 路徑",
    ],
  },
  {
    role: "資深後端工程師",
    company: "Vocus 方格子",
    period: "2025 年 3 月 - 2025 年 10 月",
    location: "台北，台灣",
    techStack: "Golang (Gin), MongoDB, Redis, AWS, GCP",
    description: [
      "參與台灣最大內容平台（200 萬+ MAU）的後端架構重構，使用領域驅動設計重新設計核心模組",
      "重構核心模組並在社群部落格 SaaS 平台上整合金流閘道",
      "優化 MongoDB 查詢，消除 lookup 操作，將 API 回應時間降低 80%",
      "實作訊息佇列進行批次寫入，提升資料庫效率與 SEO 效能",
      "將推薦系統從 BigQuery 遷移至 Qdrant，降低成本 20%",
    ],
  },
  {
    role: "資深後端工程師",
    company: "成奇科技",
    period: "2024 年 4 月 - 2025 年 3 月",
    location: "新北，台灣",
    techStack: "Python (FastAPI), Next.js, PostgreSQL, Redis, GCP",
    description: [
      "帶領 4 人工程團隊從零建構雲端 POS 系統與電動車租賃系統",
      "使用 GitLab CI 和 Ansible 建構 CI/CD 管線，將部署時間縮短 50%",
      "使用 Terraform 實作基礎設施即代碼，將基礎設施維護開銷降低 30%",
      "使用 Tauri + Next.js 開發 AI 會議摘要應用，整合 Whisper 與本地 LLM",
    ],
  },
  {
    role: "後端工程師",
    company: "AI-Rider",
    period: "2022 年 3 月 - 2023 年 11 月",
    location: "新北，台灣",
    techStack: "Python (Flask), Node.js (Koa), MariaDB, RabbitMQ",
    description: [
      "維護服務全國 1,000+ 停車場的智慧停車管理系統",
      "優化 SQL 查詢，將執行時間降低 50%，提升系統回應速度",
      "與硬體團隊協作進行設備整合，降低硬體成本 20%",
      "從 1,000+ 支 YouTube 影片建構亞洲人臉辨識資料集，解決模型偏差問題",
      "訓練車輛重識別模型以提升 DeepSORT 軌跡預測精準度",
      "重構 IoT 服務（Golang → Python），使用 OOP 設計將硬體類型抽象為統一 API",
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
