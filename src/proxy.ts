import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import type { NextRequest } from "next/server";

const intlMiddleware = createMiddleware(routing);

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://*.sentry.io https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://*.unsplash.com https://*.same-assets.com",
  "font-src 'self'",
  "connect-src 'self' https://*.sentry.io https://www.google-analytics.com",
  "frame-ancestors 'none'",
].join("; ");

export default function proxy(request: NextRequest) {
  const response = intlMiddleware(request);

  // Skip CSP in development to avoid blocking HMR / Turbopack eval
  if (process.env.NODE_ENV !== "development") {
    response.headers.set("Content-Security-Policy", csp);
  }

  return response;
}

export const config = {
  matcher: ["/", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
