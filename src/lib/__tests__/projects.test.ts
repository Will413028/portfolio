import { describe, expect, test } from "vitest";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  getProjects,
} from "@/lib/projects";

describe("getProjects", () => {
  test("returns 3 projects for English", () => {
    expect(getProjects("en")).toHaveLength(3);
  });

  test("returns 3 projects for zh-TW", () => {
    expect(getProjects("zh-TW")).toHaveLength(3);
  });

  test("falls back to English for unknown locale", () => {
    expect(getProjects("fr")).toEqual(getProjects("en"));
  });

  test("defaults to English when no locale provided", () => {
    expect(getProjects()).toEqual(getProjects("en"));
  });

  test("zh-TW projects have Chinese descriptions", () => {
    const zhProjects = getProjects("zh-TW");
    expect(zhProjects[0].description).toMatch(/[\u4e00-\u9fff]/);
  });
});

describe("getProjectBySlug", () => {
  test("finds project by slug", () => {
    const project = getProjectBySlug("saywe", "en");
    expect(project).toBeDefined();
    expect(project?.title).toBe("SayWe");
  });

  test("returns undefined for nonexistent slug", () => {
    expect(getProjectBySlug("nonexistent")).toBeUndefined();
  });

  test("returns localized project for zh-TW", () => {
    const project = getProjectBySlug("saywe", "zh-TW");
    expect(project?.description).toMatch(/[\u4e00-\u9fff]/);
  });
});

describe("getAllProjectSlugs", () => {
  test("returns 3 slugs", () => {
    expect(getAllProjectSlugs()).toHaveLength(3);
  });

  test("all slugs are unique", () => {
    const slugs = getAllProjectSlugs();
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  test("every slug is resolvable", () => {
    for (const slug of getAllProjectSlugs()) {
      expect(getProjectBySlug(slug)).toBeDefined();
    }
  });
});
