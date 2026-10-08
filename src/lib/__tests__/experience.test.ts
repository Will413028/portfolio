import { describe, expect, test } from "vitest";
import { getEducation, getExperience, getSkills } from "@/lib/experience";

describe("getExperience", () => {
  test("returns 4 entries for English", () => {
    expect(getExperience("en")).toHaveLength(4);
  });

  test("returns 4 entries for zh-TW", () => {
    expect(getExperience("zh-TW")).toHaveLength(4);
  });

  test("falls back to English for unknown locale", () => {
    expect(getExperience("fr")).toEqual(getExperience("en"));
  });

  test("zh-TW entries have Chinese text", () => {
    const exp = getExperience("zh-TW");
    expect(exp[0].role).toMatch(/[\u4e00-\u9fff]/);
  });

  test("each entry has description as array", () => {
    for (const exp of getExperience("en")) {
      expect(Array.isArray(exp.description)).toBe(true);
      expect(exp.description.length).toBeGreaterThan(0);
    }
  });
});

describe("getSkills", () => {
  test("returns 4 categories for English", () => {
    expect(getSkills("en")).toHaveLength(4);
  });

  test("each category has non-empty items", () => {
    for (const skill of getSkills("en")) {
      expect(skill.items.length).toBeGreaterThan(0);
    }
  });

  test("falls back to English for unknown locale", () => {
    expect(getSkills("fr")).toEqual(getSkills("en"));
  });
});

describe("getEducation", () => {
  test("returns 2 entries for English", () => {
    expect(getEducation("en")).toHaveLength(2);
  });

  test("returns 2 entries for zh-TW", () => {
    expect(getEducation("zh-TW")).toHaveLength(2);
  });

  test("falls back to English for unknown locale", () => {
    expect(getEducation("fr")).toEqual(getEducation("en"));
  });
});
