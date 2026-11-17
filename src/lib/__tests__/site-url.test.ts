import { describe, expect, test } from "vitest";
import { resolveSiteUrl } from "@/lib/site-url";

describe("resolveSiteUrl", () => {
  test("prefers the explicit NEXT_PUBLIC_APP_URL", () => {
    expect(
      resolveSiteUrl({
        NEXT_PUBLIC_APP_URL: "https://will.dev",
        VERCEL_PROJECT_PRODUCTION_URL: "portfolio.vercel.app",
        VERCEL_ENV: "production",
      }),
    ).toBe("https://will.dev");
  });

  test("falls back to the Vercel production domain", () => {
    expect(
      resolveSiteUrl({
        VERCEL_PROJECT_PRODUCTION_URL: "portfolio.vercel.app",
        VERCEL_URL: "portfolio-abc123.vercel.app",
        VERCEL_ENV: "production",
      }),
    ).toBe("https://portfolio.vercel.app");
  });

  test("fails a production build that only has a per-deployment URL", () => {
    expect(() =>
      resolveSiteUrl({
        VERCEL_URL: "portfolio-abc123.vercel.app",
        VERCEL_ENV: "production",
      }),
    ).toThrow(/no stable site URL/);
  });

  test("fails a production build with no URL at all", () => {
    expect(() => resolveSiteUrl({ VERCEL_ENV: "production" })).toThrow(
      /no stable site URL/,
    );
  });

  test("preview deployments use their own deployment URL", () => {
    expect(
      resolveSiteUrl({
        VERCEL_URL: "portfolio-abc123.vercel.app",
        VERCEL_ENV: "preview",
      }),
    ).toBe("https://portfolio-abc123.vercel.app");
  });

  test("local builds keep the placeholder origin", () => {
    expect(resolveSiteUrl({})).toBe("https://example.com");
  });
});
