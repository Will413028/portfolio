// Canonical site origin used for metadata / OG image / sitemap / JSON-LD.
// Prefer an explicit NEXT_PUBLIC_APP_URL; on Vercel fall back to the stable
// production domain so absolute URLs never point at example.com.
const fromVercel =
  process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;

export const siteUrl =
  process.env.NEXT_PUBLIC_APP_URL ||
  (fromVercel ? `https://${fromVercel}` : "https://example.com");
