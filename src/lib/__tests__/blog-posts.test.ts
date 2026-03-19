import { describe, expect, test } from "vitest";
import { getBlogCategories, getBlogPosts } from "@/lib/blog-posts";

describe("getBlogPosts", () => {
  test("returns 6 posts for English", () => {
    expect(getBlogPosts("en")).toHaveLength(6);
  });

  test("returns 6 posts for zh-TW", () => {
    expect(getBlogPosts("zh-TW")).toHaveLength(6);
  });

  test("falls back to English for unknown locale", () => {
    expect(getBlogPosts("fr")).toEqual(getBlogPosts("en"));
  });

  test("has exactly 2 featured posts", () => {
    const featured = getBlogPosts("en").filter((p) => p.featured);
    expect(featured).toHaveLength(2);
  });
});

describe("getBlogCategories", () => {
  test("English categories start with 'All'", () => {
    const categories = getBlogCategories("en");
    expect(categories[0]).toBe("All");
  });

  test("zh-TW categories start with '全部'", () => {
    const categories = getBlogCategories("zh-TW");
    expect(categories[0]).toBe("全部");
  });

  test("no duplicate categories", () => {
    const categories = getBlogCategories("en");
    expect(new Set(categories).size).toBe(categories.length);
  });

  test("includes expected categories", () => {
    const categories = getBlogCategories("en");
    expect(categories).toContain("Next.js");
    expect(categories).toContain("TypeScript");
    expect(categories).toContain("React");
  });
});
