import { describe, expect, test } from "vitest";
import { getExperience, getSkills } from "@/lib/experience";

describe("getExperience", () => {
  test("returns 3 entries for English", () => {
    expect(getExperience("en")).toHaveLength(3);
  });

  test("returns 3 entries for zh-TW", () => {
    expect(getExperience("zh-TW")).toHaveLength(3);
  });

  test("falls back to English for unknown locale", () => {
    expect(getExperience("fr")).toEqual(getExperience("en"));
  });

  test("zh-TW entries have Chinese text", () => {
    const exp = getExperience("zh-TW");
    expect(exp[0].role).toMatch(/[\u4e00-\u9fff]/);
  });
});

describe("getSkills", () => {
  test("returns 3 categories for English", () => {
    expect(getSkills("en")).toHaveLength(3);
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
