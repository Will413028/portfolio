import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Web Apps with Next.js 15",
    excerpt: "Explore the new features in Next.js 15 and learn how to build performant, scalable applications with the App Router.",
    date: "Feb 15, 2026",
    readTime: "8 min read",
    category: "Next.js",
    featured: true,
  },
  {
    id: 2,
    title: "The Complete Guide to TypeScript Generics",
    excerpt: "Master TypeScript generics and learn how to write reusable, type-safe code that scales with your application.",
    date: "Feb 10, 2026",
    readTime: "12 min read",
    category: "TypeScript",
    featured: true,
  },
  {
    id: 3,
    title: "Optimizing Core Web Vitals for Better SEO",
    excerpt: "Learn practical techniques to improve your website's Core Web Vitals and boost your search engine rankings.",
    date: "Feb 5, 2026",
    readTime: "6 min read",
    category: "Performance",
    featured: false,
  },
  {
    id: 4,
    title: "Building a Design System with Tailwind CSS",
    excerpt: "Create a consistent, maintainable design system using Tailwind CSS and component-driven development.",
    date: "Jan 28, 2026",
    readTime: "10 min read",
    category: "CSS",
    featured: false,
  },
  {
    id: 5,
    title: "Authentication Patterns in Modern Web Apps",
    excerpt: "Compare different authentication strategies and learn when to use JWT, sessions, or OAuth for your projects.",
    date: "Jan 20, 2026",
    readTime: "9 min read",
    category: "Security",
    featured: false,
  },
  {
    id: 6,
    title: "State Management in React: 2026 Edition",
    excerpt: "A comprehensive comparison of React state management solutions including Zustand, Jotai, and React Query.",
    date: "Jan 15, 2026",
    readTime: "11 min read",
    category: "React",
    featured: false,
  },
];

const categories = ["All", "Next.js", "TypeScript", "React", "CSS", "Performance", "Security"];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 pt-32 pb-16 max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">Blog</p>
        <h1 className="text-4xl md:text-6xl font-medium leading-tight mb-6">
          Thoughts, tutorials &
          <br />
          <span className="gradient-text-pink font-serif italic">insights</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl">
          I write about web development, design patterns, and lessons learned from building products.
        </p>
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
        <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6">Featured</h2>
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

              <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-500 flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </span>
                <span className="text-sm text-cyan-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* All Posts */}
      <section className="px-6 py-8 max-w-6xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6">All Posts</h2>
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
                <p className="text-zinc-500 text-sm mt-1 hidden md:block">{post.excerpt}</p>
              </div>

              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <span className="text-xs text-zinc-500">{post.readTime}</span>
                <ArrowRight size={16} className="text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="p-8 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-zinc-800 rounded-2xl">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-medium mb-4">Subscribe to my newsletter</h2>
            <p className="text-zinc-400 mb-6">
              Get notified when I publish new articles. No spam, unsubscribe anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-full text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button
                type="button"
                className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-100 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
