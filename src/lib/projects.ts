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

export const projects: Project[] = [
  {
    id: 1,
    slug: "nextdemy",
    title: "Nextdemy",
    description: "A monorepo-powered learning platform with real payments, real auth, and real content delivery",
    longDescription: "Nextdemy is a comprehensive learning management system built with a monorepo architecture. It features real-time payments via Stripe, robust authentication, and seamless content delivery. The platform supports video courses, quizzes, progress tracking, and certificates.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI", "TanStack Query", "Zustand", "Motion.dev", "Node.js", "Express.js", "Bun", "MongoDB", "Zod", "Razorpay", "Turborepo", "Docker"],
    type: "Web App",
    quarter: "Q4 2024",
    gradient: "from-blue-900/80 via-blue-800/60 to-slate-900/80",
    featured: true,
    screenshots: [
      "https://ext.same-assets.com/4210891837/679675205.png"
    ],
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
    description: "An intuitive mobile companion for organizing your digital wallets and analyzing your financial health",
    longDescription: "Finote is a React Native mobile application designed to help users manage their finances effectively. It provides a unified view of all digital wallets, spending analytics, and personalized financial insights.",
    tags: ["React-Native", "Expo", "TypeScript", "Firebase", "Zod", "Zustand", "Cloudinary", "Reanimated", "Gifted-Charts"],
    type: "Mobile App",
    quarter: "Q4 2025",
    gradient: "from-purple-900/80 via-violet-800/60 to-pink-900/80",
    featured: true,
    screenshots: [
      "https://ext.same-assets.com/4210891837/2614222403.png",
      "https://ext.same-assets.com/4210891837/2441382697.png",
      "https://ext.same-assets.com/4210891837/225926867.png"
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
    description: "A space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design",
    longDescription: "Next Venture is a platform connecting entrepreneurs and investors. Users can create detailed pitches, discover innovative ideas, and connect with potential collaborators or investors.",
    tags: ["Next.js", "React", "Sanity CMS", "TypeScript", "Better Auth", "GROQ", "Sentry", "Markdown", "Tailwind CSS", "Motion.dev"],
    type: "Web App",
    quarter: "Q1 2025",
    gradient: "from-slate-800/80 via-gray-700/60 to-zinc-800/80",
    featured: false,
    screenshots: [
      "https://ext.same-assets.com/4210891837/1448799563.jpeg",
      "https://ext.same-assets.com/4210891837/1706121759.jpeg"
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
    description: "A sleek AI SaaS landing page with a user-friendly design that enhances engagement",
    longDescription: "StarForge is a premium landing page template designed for AI and SaaS products. It features modern animations, optimized conversion elements, and a fully customizable design system.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Parallax", "Vercel"],
    type: "Web App",
    quarter: "Q1 2024",
    gradient: "from-pink-900/80 via-rose-800/60 to-orange-900/80",
    featured: false,
    screenshots: [
      "https://ext.same-assets.com/4210891837/2010814641.jpeg",
      "https://ext.same-assets.com/4210891837/3603188549.jpeg"
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
    description: "A platform for creating and sharing code snippets with a clean and intuitive design",
    longDescription: "Snippix is a developer tool for creating and sharing visually appealing code snippets. It offers extensive customization options and supports exporting to various formats for social media sharing.",
    tags: ["Next.js", "React", "Zustand", "TypeScript", "Shadcn UI", "Tailwind CSS", "HighlightJS", "Hotkeys Hook"],
    type: "Web App",
    quarter: "Q2 2025",
    gradient: "from-indigo-900/80 via-purple-800/60 to-pink-900/80",
    featured: true,
    screenshots: [
      "https://ext.same-assets.com/4210891837/2746604508.jpeg"
    ],
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
    description: "Effortlessly convert images, audio, and videos with a seamless and free multimedia tool!",
    longDescription: "Flux Lura is a comprehensive file conversion tool that handles images, audio, and video files. Built with FFmpeg at its core, it provides a seamless, free solution for all multimedia conversion needs.",
    tags: ["Next.js", "React", "FFmpeg", "TypeScript", "Shadcn UI", "Tailwind CSS", "Motion.dev"],
    type: "Web App",
    quarter: "Q1 2025",
    gradient: "from-cyan-900/80 via-teal-800/60 to-blue-900/80",
    featured: false,
    screenshots: [
      "https://ext.same-assets.com/4210891837/983695011.jpeg"
    ],
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
    description: "A Captivating Portfolio Showcasing Innovative Web Development and UI/UX",
    longDescription: "A personal portfolio website built with modern technologies, featuring a blog with MDX support, project showcases, and excellent SEO optimization.",
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma ORM", "Better Auth", "MDX", "Zustand", "Zod", "Tailwind CSS", "Motion.dev"],
    type: "Web App",
    quarter: "Q3 2024",
    gradient: "from-emerald-900/80 via-teal-800/60 to-cyan-900/80",
    featured: false,
    screenshots: [
      "https://ext.same-assets.com/4210891837/2890146079.jpeg"
    ],
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

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
