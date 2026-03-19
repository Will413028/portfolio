import type { Metadata } from "next";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { getBlogCategories, getBlogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts, tutorials, and insights on web development, design patterns, and lessons learned from building products.",
};

export default function BlogPage() {
  const t = useTranslations("blogPage");
  const locale = useLocale();
  const blogPosts = getBlogPosts(locale);
  const categories = getBlogCategories(locale);

  const featuredPosts = blogPosts.filter((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      {/* Hero Section */}
      <section className="px-6 pt-32 pb-16 max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
          {t("label")}
        </p>
        <h1 className="text-4xl md:text-6xl font-medium leading-tight mb-6">
          {t("title1")}
          <br />
          <span className="gradient-text-pink font-serif italic">
            {t("titleHighlight")}
          </span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl">{t("subtitle")}</p>
      </section>

      {/* Categories */}
      <section className="px-6 py-8 max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                index === 0
                  ? "bg-white text-black"
                  : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Posts */}
      <section className="px-6 py-8 max-w-6xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6">
          {t("featured")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="group p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-medium">
                  {post.category}
                </span>
                <span className="text-xs text-zinc-500 flex items-center gap-1">
                  <Calendar size={12} />
                  {post.date}
                </span>
              </div>

              <h3 className="text-xl font-medium text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {post.title}
              </h3>

              <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-500 flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </span>
                <span className="text-sm text-cyan-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                  {t("readMore")} <ArrowRight size={14} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* All Posts */}
      <section className="px-6 py-8 max-w-6xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6">
          {t("allPosts")}
        </h2>
        <div className="space-y-4">
          {regularPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all cursor-pointer"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded text-xs">
                    {post.category}
                  </span>
                  <span className="text-xs text-zinc-600">{post.date}</span>
                </div>
                <h3 className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-zinc-500 text-sm mt-1 hidden md:block">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <span className="text-xs text-zinc-500">{post.readTime}</span>
                <ArrowRight
                  size={16}
                  className="text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="p-8 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-zinc-800 rounded-2xl">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-medium mb-4">
              {t("newsletterTitle")}
            </h2>
            <p className="text-zinc-400 mb-6">{t("newsletterText")}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-full text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button
                type="button"
                className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-100 transition-colors"
              >
                {t("subscribe")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
