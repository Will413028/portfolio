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
    techStack: "Python (FastAPI), Next.js, PostgreSQL, Google ADK",
    description: [
      "Enterprise AI platform for on-premises LLM deployment and model fine-tuning",
      "Built automated web scraping pipelines to continuously update knowledge bases, improving RAG pipeline accuracy",
      "Design end-to-end LLM integration solutions for enterprise clients, translating complex business requirements into scalable AI architectures",
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
    techStack: "Python (FastAPI), Next.js, PostgreSQL, Google ADK",
    description: [
      "企業級 AI 平台，專注地端 LLM 部署與模型微調",
      "建構自動化網頁爬蟲管線以持續更新知識庫，提升 RAG 管線精準度",
      "為企業客戶設計端對端 LLM 整合方案，將複雜商業需求轉化為可擴展的 AI 架構",
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
    items: ["Python", "Go", "TypeScript"],
  },
  {
    category: "Frameworks",
    items: ["FastAPI", "Gin", "Next.js", "Flask"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "MariaDB"],
  },
  {
    category: "Cloud & DevOps",
    items: ["GCP", "AWS", "Docker", "GitLab CI", "Terraform", "Ansible"],
  },
];

const skillsZhTw: SkillCategory[] = [
  {
    category: "程式語言",
    items: ["Python", "Go", "TypeScript"],
  },
  {
    category: "框架",
    items: ["FastAPI", "Gin", "Next.js", "Flask"],
  },
  {
    category: "資料庫",
    items: ["PostgreSQL", "MongoDB", "Redis", "MariaDB"],
  },
  {
    category: "雲端與 DevOps",
    items: ["GCP", "AWS", "Docker", "GitLab CI", "Terraform", "Ansible"],
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
