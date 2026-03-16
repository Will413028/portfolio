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
    slug: "nextdemy",
    title: "Nextdemy",
    description:
      "A monorepo-powered learning platform with real payments, real auth, and real content delivery",
    longDescription:
      "Nextdemy is a comprehensive learning management system built with a monorepo architecture. It features real-time payments via Stripe, robust authentication, and seamless content delivery. The platform supports video courses, quizzes, progress tracking, and certificates.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "TanStack Query",
      "Zustand",
      "Motion.dev",
      "Node.js",
      "Express.js",
      "Bun",
      "MongoDB",
      "Zod",
      "Razorpay",
      "Turborepo",
      "Docker",
    ],
    type: "Web App",
    quarter: "Q4 2024",
    gradient: "from-blue-900/80 via-blue-800/60 to-slate-900/80",
    featured: true,
    screenshots: ["https://ext.same-assets.com/4210891837/679675205.png"],
    features: [
      "Monorepo architecture with Turborepo for efficient development",
      "Stripe integration for course purchases and subscriptions",
      "Real-time progress tracking and analytics dashboard",
      "Video streaming with adaptive quality",
      "Quiz system with automatic grading",
      "Certificate generation upon course completion",
    ],
    challenges: [
      "Implementing efficient video streaming across different network conditions",
      "Building a scalable payment system with proper webhook handling",
      "Creating a responsive design that works seamlessly on all devices",
    ],
    links: {
      live: "https://nextdemy.example.com",
      github: "https://github.com/aayushbharti/nextdemy",
    },
  },
  {
    id: 2,
    slug: "finote",
    title: "Finote",
    subtitle: "Master Your Finances",
    description:
      "An intuitive mobile companion for organizing your digital wallets and analyzing your financial health",
    longDescription:
      "Finote is a React Native mobile application designed to help users manage their finances effectively. It provides a unified view of all digital wallets, spending analytics, and personalized financial insights.",
    tags: [
      "React-Native",
      "Expo",
      "TypeScript",
      "Firebase",
      "Zod",
      "Zustand",
      "Cloudinary",
      "Reanimated",
      "Gifted-Charts",
    ],
    type: "Mobile App",
    quarter: "Q4 2025",
    gradient: "from-purple-900/80 via-violet-800/60 to-pink-900/80",
    featured: true,
    screenshots: [
      "https://ext.same-assets.com/4210891837/2614222403.png",
      "https://ext.same-assets.com/4210891837/2441382697.png",
      "https://ext.same-assets.com/4210891837/225926867.png",
    ],
    features: [
      "Multi-wallet management with real-time balance tracking",
      "Beautiful spending charts and financial analytics",
      "Budget planning and expense categorization",
      "Bill reminders and recurring payment tracking",
      "Export reports to PDF and Excel",
      "Biometric authentication for security",
    ],
    challenges: [
      "Syncing data across multiple devices in real-time",
      "Creating intuitive UX for complex financial data",
      "Optimizing chart rendering for smooth animations",
    ],
    links: {
      github: "https://github.com/aayushbharti/finote",
    },
  },
  {
    id: 3,
    slug: "next-venture",
    title: "Next Venture",
    description:
      "A space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design",
    longDescription:
      "Next Venture is a platform connecting entrepreneurs and investors. Users can create detailed pitches, discover innovative ideas, and connect with potential collaborators or investors.",
    tags: [
      "Next.js",
      "React",
      "Sanity CMS",
      "TypeScript",
      "Better Auth",
      "GROQ",
      "Sentry",
      "Markdown",
      "Tailwind CSS",
      "Motion.dev",
    ],
    type: "Web App",
    quarter: "Q1 2025",
    gradient: "from-slate-800/80 via-gray-700/60 to-zinc-800/80",
    featured: false,
    screenshots: [
      "https://ext.same-assets.com/4210891837/1448799563.jpeg",
      "https://ext.same-assets.com/4210891837/1706121759.jpeg",
    ],
    features: [
      "Rich text editor for creating detailed pitches",
      "Sanity CMS for content management",
      "User profiles with portfolio showcase",
      "Search and filter functionality",
      "Commenting and feedback system",
      "Social sharing integration",
    ],
    challenges: [
      "Implementing real-time collaboration features",
      "Building a robust content moderation system",
      "Optimizing SEO for user-generated content",
    ],
    links: {
      live: "https://nextventure.example.com",
      github: "https://github.com/aayushbharti/next-venture",
    },
  },
  {
    id: 4,
    slug: "star-forge",
    title: "StarForge",
    subtitle: "AI SaaS Template",
    description:
      "A sleek AI SaaS landing page with a user-friendly design that enhances engagement",
    longDescription:
      "StarForge is a premium landing page template designed for AI and SaaS products. It features modern animations, optimized conversion elements, and a fully customizable design system.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Parallax",
      "Vercel",
    ],
    type: "Web App",
    quarter: "Q1 2024",
    gradient: "from-pink-900/80 via-rose-800/60 to-orange-900/80",
    featured: false,
    screenshots: [
      "https://ext.same-assets.com/4210891837/2010814641.jpeg",
      "https://ext.same-assets.com/4210891837/3603188549.jpeg",
    ],
    features: [
      "Modern, conversion-optimized design",
      "Smooth scroll animations with Framer Motion",
      "Dark/light mode support",
      "Fully responsive layout",
      "SEO optimized structure",
      "Easy customization with CSS variables",
    ],
    challenges: [
      "Balancing visual appeal with performance",
      "Creating reusable animation components",
      "Ensuring accessibility across all interactive elements",
    ],
    links: {
      live: "https://starforge.example.com",
      github: "https://github.com/aayushbharti/star-forge",
    },
  },
  {
    id: 5,
    slug: "snippix",
    title: "Snippix",
    description:
      "A platform for creating and sharing code snippets with a clean and intuitive design",
    longDescription:
      "Snippix is a developer tool for creating and sharing visually appealing code snippets. It offers extensive customization options and supports exporting to various formats for social media sharing.",
    tags: [
      "Next.js",
      "React",
      "Zustand",
      "TypeScript",
      "Shadcn UI",
      "Tailwind CSS",
      "HighlightJS",
      "Hotkeys Hook",
    ],
    type: "Web App",
    quarter: "Q2 2025",
    gradient: "from-indigo-900/80 via-purple-800/60 to-pink-900/80",
    featured: true,
    screenshots: ["https://ext.same-assets.com/4210891837/2746604508.jpeg"],
    features: [
      "10+ code editor themes (light and dark)",
      "12+ handpicked monospace fonts",
      "Automatic syntax highlighting for 50+ languages",
      "Export as PNG, SVG, or copy to clipboard",
      "Customizable padding, font size, and background",
      "Keyboard shortcuts for power users",
    ],
    challenges: [
      "Implementing efficient syntax highlighting for large code blocks",
      "Creating a drag-to-resize interface",
      "Optimizing export quality for different formats",
    ],
    links: {
      live: "https://snippix.example.com",
      github: "https://github.com/aayushbharti/snippix",
    },
  },
  {
    id: 6,
    slug: "flux-lura",
    title: "Flux Lura",
    description:
      "Effortlessly convert images, audio, and videos with a seamless and free multimedia tool!",
    longDescription:
      "Flux Lura is a comprehensive file conversion tool that handles images, audio, and video files. Built with FFmpeg at its core, it provides a seamless, free solution for all multimedia conversion needs.",
    tags: [
      "Next.js",
      "React",
      "FFmpeg",
      "TypeScript",
      "Shadcn UI",
      "Tailwind CSS",
      "Motion.dev",
    ],
    type: "Web App",
    quarter: "Q1 2025",
    gradient: "from-cyan-900/80 via-teal-800/60 to-blue-900/80",
    featured: false,
    screenshots: ["https://ext.same-assets.com/4210891837/983695011.jpeg"],
    features: [
      "Support for multiple image formats (PNG, JPG, WebP, etc.)",
      "Audio conversion between MP3, WAV, AAC, and more",
      "Video transcoding with quality options",
      "Batch processing capabilities",
      "Client-side processing for privacy",
      "No file size limits",
    ],
    challenges: [
      "Implementing WebAssembly FFmpeg for client-side processing",
      "Handling large file conversions efficiently",
      "Creating an intuitive drag-and-drop interface",
    ],
    links: {
      live: "https://fluxlura.example.com",
      github: "https://github.com/aayushbharti/flux-lura",
    },
  },
  {
    id: 7,
    slug: "portfolio",
    title: "SEO Optimized Portfolio",
    description:
      "A Captivating Portfolio Showcasing Innovative Web Development and UI/UX",
    longDescription:
      "A personal portfolio website built with modern technologies, featuring a blog with MDX support, project showcases, and excellent SEO optimization.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Better Auth",
      "MDX",
      "Zustand",
      "Zod",
      "Tailwind CSS",
      "Motion.dev",
    ],
    type: "Web App",
    quarter: "Q3 2024",
    gradient: "from-emerald-900/80 via-teal-800/60 to-cyan-900/80",
    featured: false,
    screenshots: ["https://ext.same-assets.com/4210891837/2890146079.jpeg"],
    features: [
      "MDX-powered blog with syntax highlighting",
      "Project showcase with filtering",
      "Contact form with email integration",
      "SEO optimization built-in",
      "RSS feed generation",
      "Analytics integration ready",
    ],
    challenges: [
      "Creating a flexible theming system",
      "Optimizing MDX compilation for fast builds",
      "Building accessible navigation patterns",
    ],
    links: {
      live: "https://portfolio.example.com",
      github: "https://github.com/aayushbharti/portfolio",
    },
  },
];

const projectsZhTw: Project[] = [
  {
    id: 1,
    slug: "nextdemy",
    title: "Nextdemy",
    description: "一個具備真實付款、身份驗證和內容交付功能的 monorepo 學習平台",
    longDescription:
      "Nextdemy 是一個採用 monorepo 架構構建的綜合學習管理系統。它透過 Stripe 實現即時付款、強大的身份驗證和無縫的內容交付。平台支援影片課程、測驗、學習進度追蹤和證書發放。",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "TanStack Query",
      "Zustand",
      "Motion.dev",
      "Node.js",
      "Express.js",
      "Bun",
      "MongoDB",
      "Zod",
      "Razorpay",
      "Turborepo",
      "Docker",
    ],
    type: "網頁應用",
    quarter: "2024 Q4",
    gradient: "from-blue-900/80 via-blue-800/60 to-slate-900/80",
    featured: true,
    screenshots: ["https://ext.same-assets.com/4210891837/679675205.png"],
    features: [
      "使用 Turborepo 的 monorepo 架構，提升開發效率",
      "整合 Stripe 實現課程購買和訂閱功能",
      "即時學習進度追蹤和數據分析儀表板",
      "自適應品質的影片串流",
      "自動評分的測驗系統",
      "課程完成後自動產生證書",
    ],
    challenges: [
      "在不同網路環境下實現高效的影片串流",
      "建構具備完善 webhook 處理的可擴展付款系統",
      "打造在所有裝置上都能流暢運作的響應式設計",
    ],
    links: {
      live: "https://nextdemy.example.com",
      github: "https://github.com/aayushbharti/nextdemy",
    },
  },
  {
    id: 2,
    slug: "finote",
    title: "Finote",
    subtitle: "掌握你的財務",
    description: "一款直覺的行動應用，幫助你管理數位錢包並分析財務健康狀況",
    longDescription:
      "Finote 是一款 React Native 行動應用程式，旨在幫助使用者有效管理財務。它提供所有數位錢包的統一檢視、支出分析和個人化的財務洞察。",
    tags: [
      "React-Native",
      "Expo",
      "TypeScript",
      "Firebase",
      "Zod",
      "Zustand",
      "Cloudinary",
      "Reanimated",
      "Gifted-Charts",
    ],
    type: "行動應用",
    quarter: "2025 Q4",
    gradient: "from-purple-900/80 via-violet-800/60 to-pink-900/80",
    featured: true,
    screenshots: [
      "https://ext.same-assets.com/4210891837/2614222403.png",
      "https://ext.same-assets.com/4210891837/2441382697.png",
      "https://ext.same-assets.com/4210891837/225926867.png",
    ],
    features: [
      "多錢包管理與即時餘額追蹤",
      "精美的支出圖表和財務分析",
      "預算規劃和支出分類",
      "帳單提醒和定期付款追蹤",
      "匯出報告為 PDF 和 Excel",
      "生物辨識認證確保安全",
    ],
    challenges: [
      "在多裝置間即時同步資料",
      "為複雜的財務數據打造直覺的使用者體驗",
      "優化圖表渲染以實現流暢動畫",
    ],
    links: {
      github: "https://github.com/aayushbharti/finote",
    },
  },
  {
    id: 3,
    slug: "next-venture",
    title: "Next Venture",
    description: "一個讓創業者展示想法、探索他人點子、以簡潔設計獲得曝光的平台",
    longDescription:
      "Next Venture 是一個連接創業者和投資者的平台。使用者可以建立詳細的提案、發現創新的想法，並與潛在的合作夥伴或投資者建立聯繫。",
    tags: [
      "Next.js",
      "React",
      "Sanity CMS",
      "TypeScript",
      "Better Auth",
      "GROQ",
      "Sentry",
      "Markdown",
      "Tailwind CSS",
      "Motion.dev",
    ],
    type: "網頁應用",
    quarter: "2025 Q1",
    gradient: "from-slate-800/80 via-gray-700/60 to-zinc-800/80",
    featured: false,
    screenshots: [
      "https://ext.same-assets.com/4210891837/1448799563.jpeg",
      "https://ext.same-assets.com/4210891837/1706121759.jpeg",
    ],
    features: [
      "用於建立詳細提案的富文字編輯器",
      "Sanity CMS 內容管理",
      "個人檔案與作品集展示",
      "搜尋和篩選功能",
      "評論和回饋系統",
      "社群分享整合",
    ],
    challenges: [
      "實現即時協作功能",
      "建構穩健的內容審核系統",
      "優化使用者生成內容的 SEO",
    ],
    links: {
      live: "https://nextventure.example.com",
      github: "https://github.com/aayushbharti/next-venture",
    },
  },
  {
    id: 4,
    slug: "star-forge",
    title: "StarForge",
    subtitle: "AI SaaS 模板",
    description: "一個時尚的 AI SaaS 著陸頁，以友善的設計提升使用者參與度",
    longDescription:
      "StarForge 是為 AI 和 SaaS 產品設計的高階著陸頁模板。它具備現代動畫、優化的轉換元素，以及完全可自訂的設計系統。",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Parallax",
      "Vercel",
    ],
    type: "網頁應用",
    quarter: "2024 Q1",
    gradient: "from-pink-900/80 via-rose-800/60 to-orange-900/80",
    featured: false,
    screenshots: [
      "https://ext.same-assets.com/4210891837/2010814641.jpeg",
      "https://ext.same-assets.com/4210891837/3603188549.jpeg",
    ],
    features: [
      "現代化、以轉換率為導向的設計",
      "使用 Framer Motion 的流暢捲動動畫",
      "深色/淺色模式支援",
      "完全響應式版面",
      "SEO 優化結構",
      "透過 CSS 變數輕鬆自訂",
    ],
    challenges: [
      "在視覺吸引力和效能之間取得平衡",
      "建立可複用的動畫元件",
      "確保所有互動元素的無障礙性",
    ],
    links: {
      live: "https://starforge.example.com",
      github: "https://github.com/aayushbharti/star-forge",
    },
  },
  {
    id: 5,
    slug: "snippix",
    title: "Snippix",
    description: "一個以簡潔直覺設計建立和分享程式碼片段的平台",
    longDescription:
      "Snippix 是一個開發者工具，用於建立和分享視覺美觀的程式碼片段。它提供豐富的自訂選項，支援匯出為多種格式以在社群媒體分享。",
    tags: [
      "Next.js",
      "React",
      "Zustand",
      "TypeScript",
      "Shadcn UI",
      "Tailwind CSS",
      "HighlightJS",
      "Hotkeys Hook",
    ],
    type: "網頁應用",
    quarter: "2025 Q2",
    gradient: "from-indigo-900/80 via-purple-800/60 to-pink-900/80",
    featured: true,
    screenshots: ["https://ext.same-assets.com/4210891837/2746604508.jpeg"],
    features: [
      "10+ 種程式碼編輯器主題（淺色和深色）",
      "12+ 種精選等寬字型",
      "支援 50+ 種程式語言的自動語法高亮",
      "匯出為 PNG、SVG 或複製到剪貼簿",
      "可自訂的內距、字型大小和背景",
      "為進階使用者準備的鍵盤快捷鍵",
    ],
    challenges: [
      "為大型程式碼區塊實現高效的語法高亮",
      "建立拖曳調整大小的介面",
      "優化不同格式的匯出品質",
    ],
    links: {
      live: "https://snippix.example.com",
      github: "https://github.com/aayushbharti/snippix",
    },
  },
  {
    id: 6,
    slug: "flux-lura",
    title: "Flux Lura",
    description: "輕鬆轉換圖片、音訊和影片的免費多媒體工具！",
    longDescription:
      "Flux Lura 是一個綜合性的檔案轉換工具，可處理圖片、音訊和影片檔案。以 FFmpeg 為核心，為所有多媒體轉換需求提供無縫、免費的解決方案。",
    tags: [
      "Next.js",
      "React",
      "FFmpeg",
      "TypeScript",
      "Shadcn UI",
      "Tailwind CSS",
      "Motion.dev",
    ],
    type: "網頁應用",
    quarter: "2025 Q1",
    gradient: "from-cyan-900/80 via-teal-800/60 to-blue-900/80",
    featured: false,
    screenshots: ["https://ext.same-assets.com/4210891837/983695011.jpeg"],
    features: [
      "支援多種圖片格式（PNG、JPG、WebP 等）",
      "MP3、WAV、AAC 等音訊格式互轉",
      "具有品質選項的影片轉碼",
      "批次處理功能",
      "客戶端處理確保隱私",
      "無檔案大小限制",
    ],
    challenges: [
      "實作 WebAssembly FFmpeg 用於客戶端處理",
      "高效處理大型檔案轉換",
      "建立直覺的拖放式介面",
    ],
    links: {
      live: "https://fluxlura.example.com",
      github: "https://github.com/aayushbharti/flux-lura",
    },
  },
  {
    id: 7,
    slug: "portfolio",
    title: "SEO 優化作品集",
    description: "一個展示創新網頁開發和 UI/UX 設計的精美作品集網站",
    longDescription:
      "一個使用現代技術構建的個人作品集網站，具備 MDX 支援的部落格、專案展示和卓越的 SEO 優化。",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Better Auth",
      "MDX",
      "Zustand",
      "Zod",
      "Tailwind CSS",
      "Motion.dev",
    ],
    type: "網頁應用",
    quarter: "2024 Q3",
    gradient: "from-emerald-900/80 via-teal-800/60 to-cyan-900/80",
    featured: false,
    screenshots: ["https://ext.same-assets.com/4210891837/2890146079.jpeg"],
    features: [
      "MDX 驅動的部落格，支援語法高亮",
      "帶有篩選功能的專案展示",
      "整合電子郵件的聯繫表單",
      "內建 SEO 優化",
      "RSS feed 生成",
      "分析工具整合就緒",
    ],
    challenges: [
      "建立靈活的主題系統",
      "優化 MDX 編譯以加快構建速度",
      "構建無障礙的導航模式",
    ],
    links: {
      live: "https://portfolio.example.com",
      github: "https://github.com/aayushbharti/portfolio",
    },
  },
];

const projectsByLocale: Record<string, Project[]> = {
  en: projectsEn,
  "zh-TW": projectsZhTw,
};

/** @deprecated Use getProjects(locale) instead */
export const projects = projectsEn;

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
