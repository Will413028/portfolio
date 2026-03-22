import { describe, expect, test } from "vitest";
import { getBlogCategories, getBlogPosts } from "@/lib/blog-posts";

describe("getBlogPosts", () => {
  test("returns empty array for English", () => {
    expect(getBlogPosts("en")).toHaveLength(0);
  });

  test("returns empty array for zh-TW", () => {
    expect(getBlogPosts("zh-TW")).toHaveLength(0);
  });

  test("falls back to English for unknown locale", () => {
    expect(getBlogPosts("fr")).toEqual(getBlogPosts("en"));
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
});
