export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
}

const blogPostsEn: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable Web Apps with Next.js 15",
    excerpt:
      "Explore the new features in Next.js 15 and learn how to build performant, scalable applications with the App Router.",
    date: "Feb 15, 2026",
    readTime: "8 min read",
    category: "Next.js",
    featured: true,
  },
  {
    id: 2,
    title: "The Complete Guide to TypeScript Generics",
    excerpt:
      "Master TypeScript generics and learn how to write reusable, type-safe code that scales with your application.",
    date: "Feb 10, 2026",
    readTime: "12 min read",
    category: "TypeScript",
    featured: true,
  },
  {
    id: 3,
    title: "Optimizing Core Web Vitals for Better SEO",
    excerpt:
      "Learn practical techniques to improve your website's Core Web Vitals and boost your search engine rankings.",
    date: "Feb 5, 2026",
    readTime: "6 min read",
    category: "Performance",
    featured: false,
  },
  {
    id: 4,
    title: "Building a Design System with Tailwind CSS",
    excerpt:
      "Create a consistent, maintainable design system using Tailwind CSS and component-driven development.",
    date: "Jan 28, 2026",
    readTime: "10 min read",
    category: "CSS",
    featured: false,
  },
  {
    id: 5,
    title: "Authentication Patterns in Modern Web Apps",
    excerpt:
      "Compare different authentication strategies and learn when to use JWT, sessions, or OAuth for your projects.",
    date: "Jan 20, 2026",
    readTime: "9 min read",
    category: "Security",
    featured: false,
  },
  {
    id: 6,
    title: "State Management in React: 2026 Edition",
    excerpt:
      "A comprehensive comparison of React state management solutions including Zustand, Jotai, and React Query.",
    date: "Jan 15, 2026",
    readTime: "11 min read",
    category: "React",
    featured: false,
  },
];

const blogPostsZhTw: BlogPost[] = [
  {
    id: 1,
    title: "使用 Next.js 15 構建可擴展的網頁應用",
    excerpt:
      "探索 Next.js 15 的新功能，學習如何使用 App Router 構建高效能、可擴展的應用程式。",
    date: "2026 年 2 月 15 日",
    readTime: "8 分鐘閱讀",
    category: "Next.js",
    featured: true,
  },
  {
    id: 2,
    title: "TypeScript 泛型完全指南",
    excerpt:
      "精通 TypeScript 泛型，學習如何撰寫可複用、型別安全的程式碼，隨應用程式一同擴展。",
    date: "2026 年 2 月 10 日",
    readTime: "12 分鐘閱讀",
    category: "TypeScript",
    featured: true,
  },
  {
    id: 3,
    title: "優化 Core Web Vitals 以提升 SEO",
    excerpt: "學習實用的技巧來改善網站的 Core Web Vitals，提升搜尋引擎排名。",
    date: "2026 年 2 月 5 日",
    readTime: "6 分鐘閱讀",
    category: "Performance",
    featured: false,
  },
  {
    id: 4,
    title: "使用 Tailwind CSS 建立設計系統",
    excerpt: "使用 Tailwind CSS 和元件驅動開發建立一致、可維護的設計系統。",
    date: "2026 年 1 月 28 日",
    readTime: "10 分鐘閱讀",
    category: "CSS",
    featured: false,
  },
  {
    id: 5,
    title: "現代網頁應用的身份驗證模式",
    excerpt:
      "比較不同的身份驗證策略，學習何時在專案中使用 JWT、session 或 OAuth。",
    date: "2026 年 1 月 20 日",
    readTime: "9 分鐘閱讀",
    category: "Security",
    featured: false,
  },
  {
    id: 6,
    title: "React 狀態管理：2026 版",
    excerpt:
      "全面比較 React 狀態管理方案，包括 Zustand、Jotai 和 React Query。",
    date: "2026 年 1 月 15 日",
    readTime: "11 分鐘閱讀",
    category: "React",
    featured: false,
  },
];

const blogPostsByLocale: Record<string, BlogPost[]> = {
  en: blogPostsEn,
  "zh-TW": blogPostsZhTw,
};

export function getBlogPosts(locale: string = "en"): BlogPost[] {
  return blogPostsByLocale[locale] || blogPostsByLocale.en;
}

export function getBlogCategories(locale: string = "en"): string[] {
  const allLabel = locale === "zh-TW" ? "全部" : "All";
  const categories = [...new Set(getBlogPosts(locale).map((p) => p.category))];
  return [allLabel, ...categories];
}
