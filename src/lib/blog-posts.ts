export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
}

const blogPostsEn: BlogPost[] = [];

const blogPostsZhTw: BlogPost[] = [];

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
