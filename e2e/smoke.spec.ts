import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

// The paths a hiring manager takes: landing page, work, resume, and the other locale.
const pages = ["/en", "/en/work", "/en/about", "/en/resume", "/zh-TW"];

for (const path of pages) {
  test(`${path} renders and has no serious accessibility violations`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1").first()).toBeVisible();

    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
    const serious = results.violations.filter((v) => v.impact === "serious" || v.impact === "critical");
    expect(serious.map((v) => `${v.id}: ${v.nodes.length} node(s)`)).toEqual([]);
  });
}

test("the resume PDF downloads", async ({ request }) => {
  const response = await request.get("/resume.pdf");
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/pdf");
});

test("a work case study opens from the work page", async ({ page }) => {
  await page.goto("/en/work");
  const firstCase = page.locator('a[href^="/en/work/"]').first();
  await firstCase.click();
  await expect(page).toHaveURL(/\/en\/work\/[^/]+$/);
  await expect(page.locator("h1").first()).toBeVisible();
});

// The full policy from src/proxy.ts. ZAP's CSP rules (10038, 10055) are ignored because of the
// accepted 'unsafe-inline', so this exact match is what catches any other loosening.
const expectedCsp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self' https://www.google-analytics.com",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "base-uri 'self'",
].join("; ");

for (const path of [...pages, "/en/work/saywe"]) {
  test(`${path} sends the exact CSP and hides the framework`, async ({ request }) => {
    const response = await request.get(path);
    const headers = response.headers();
    expect(headers["x-powered-by"]).toBeUndefined();
    expect(headers["content-security-policy"]).toBe(expectedCsp);
  });
}
