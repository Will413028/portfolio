import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);

const csp = [
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

export default function proxy(request: NextRequest) {
  const response = intlMiddleware(request);

  // Skip CSP in development to avoid blocking HMR / Turbopack eval
  // biome-ignore lint/style/noProcessEnv: NODE_ENV only toggles CSP in dev; existing baseline
  if (process.env.NODE_ENV !== "development") {
    response.headers.set("Content-Security-Policy", csp);
  }

  return response;
}

export const config = {
  matcher: [
    "/",
    "/((?!api|_next|_vercel|opengraph-image|icon|apple-icon|twitter-image|.*\\..*).*)",
  ],
};
