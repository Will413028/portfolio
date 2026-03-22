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
      "Flutter",
      "Next.js",
      "PostgreSQL",
      "RabbitMQ",
      "Docker",
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
      "Flutter",
      "Next.js",
      "PostgreSQL",
      "RabbitMQ",
      "Docker",
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
