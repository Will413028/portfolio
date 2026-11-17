// Canonical site origin used for metadata / OG image / sitemap / JSON-LD.
// Prefer an explicit NEXT_PUBLIC_APP_URL; on Vercel fall back to the stable
// production domain. A production build with neither fails instead of
// publishing absolute URLs that point at example.com.

type SiteUrlEnv = {
  NEXT_PUBLIC_APP_URL?: string;
  VERCEL_PROJECT_PRODUCTION_URL?: string;
  VERCEL_URL?: string;
  VERCEL_ENV?: string;
};

export function resolveSiteUrl(env: SiteUrlEnv): string {
  if (env.NEXT_PUBLIC_APP_URL) return env.NEXT_PUBLIC_APP_URL;
  if (env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  // A per-deployment VERCEL_URL changes on every deploy, so production never uses it.
  if (env.VERCEL_ENV === "production") {
    throw new Error(
      "Production build has no stable site URL: set NEXT_PUBLIC_APP_URL or a Vercel production domain.",
    );
  }
  if (env.VERCEL_URL) return `https://${env.VERCEL_URL}`;
  return "https://example.com";
}

export const siteUrl = resolveSiteUrl({
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  VERCEL_PROJECT_PRODUCTION_URL: process.env.VERCEL_PROJECT_PRODUCTION_URL,
  VERCEL_URL: process.env.VERCEL_URL,
  VERCEL_ENV: process.env.VERCEL_ENV,
});
