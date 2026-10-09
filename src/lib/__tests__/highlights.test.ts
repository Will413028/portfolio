import { describe, expect, test } from "vitest";
import { getExperience } from "@/lib/experience";
import { getHighlights } from "@/lib/highlights";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";

function sourceText(href: string, locale: string): string | undefined {
  const resume = href.match(/^\/resume#(.+)$/);
  if (resume) {
    const exp = getExperience(locale).find((e) => e.slug === resume[1]);
    return exp && [exp.role, ...exp.description].join("\n");
  }
  const work = href.match(/^\/work\/(.+)$/);
  if (work) {
    const p = getProjectBySlug(work[1], locale);
    return (
      p &&
      [
        p.description,
        p.longDescription,
        ...p.features,
        ...(p.outcomes ?? []),
      ].join("\n")
    );
  }
  return undefined;
}

describe("getHighlights", () => {
  test("zh-TW returns Chinese labels", () => {
    expect(getHighlights("zh-TW")[0].label).toMatch(/[一-鿿]/);
  });

  test("falls back to English for unknown locale", () => {
    expect(getHighlights("fr")).toEqual(getHighlights("en"));
  });

  test("every highlight links to an entry that exists", () => {
    const resumeAnchors = new Set(
      getExperience("en").map((e) => `/resume#${e.slug}`),
    );
    const caseStudies = new Set(getAllProjectSlugs().map((s) => `/work/${s}`));
    for (const h of getHighlights("en")) {
      expect(resumeAnchors.has(h.href) || caseStudies.has(h.href)).toBe(true);
    }
  });

  test("every number is still stated in the entry it links to", () => {
    for (const locale of ["en", "zh-TW"]) {
      for (const h of getHighlights(locale)) {
        expect(sourceText(h.href, locale)).toContain(h.evidence);
      }
    }
  });
});
