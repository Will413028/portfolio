import { describe, expect, test } from "vitest";
import { getJudgments } from "@/lib/judgments";

describe("getJudgments", () => {
  test("zh-TW returns Chinese text", () => {
    expect(getJudgments("zh-TW")[0].title).toMatch(/[\u4e00-\u9fff]/);
  });

  test("falls back to English for unknown locale", () => {
    expect(getJudgments("fr")).toEqual(getJudgments("en"));
  });

  test("is sorted newest first", () => {
    const dates = getJudgments("en").map((j) => j.date);
    expect(dates).toEqual([...dates].sort().reverse());
  });

  test("every judgment has an ISO date and a public https source", () => {
    for (const j of getJudgments("en")) {
      expect(j.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(j.source.url).toMatch(/^https:\/\//);
    }
  });

  test("only resolved judgments carry a resolution after their date", () => {
    for (const j of getJudgments("en")) {
      if (j.status === "open") {
        expect(j.resolution).toBeUndefined();
      } else {
        expect(j.resolution?.date.localeCompare(j.date)).toBeGreaterThan(0);
        expect(j.resolution?.source.url).toMatch(/^https:\/\//);
      }
    }
  });
});
