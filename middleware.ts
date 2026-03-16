import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

const localePrefix = new RegExp(`^/(${routing.locales.join("|")})`);

const protectedPaths = ["/overview", "/products", "/customers", "/settings"];
const authPaths = ["/login", "/register", "/forgot-password"];

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://*.sentry.io",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://*.unsplash.com https://*.same-assets.com",
  "font-src 'self'",
  "connect-src 'self' https://*.sentry.io",
  "frame-ancestors 'none'",
].join("; ");

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Remove locale prefix to check the actual path (e.g. /en/overview -> /overview)
  const pathnameWithoutLocale = pathname.replace(localePrefix, "") || "/";

  const token = request.cookies.get("auth_token")?.value;
  const isProtected = protectedPaths.some((p) => pathnameWithoutLocale.startsWith(p));
  const isAuthPage = authPaths.some((p) => pathnameWithoutLocale.startsWith(p));

  if (isProtected && !token) {
    const locale = pathname.match(localePrefix)?.[1] || routing.defaultLocale;
    const loginUrl = new URL(`/${locale}/login`, request.url);
    loginUrl.searchParams.set("callbackUrl", pathnameWithoutLocale);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthPage && token) {
    const locale = pathname.match(localePrefix)?.[1] || routing.defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}/overview`, request.url));
  }

  const response = intlMiddleware(request);

  // Skip CSP in development to avoid blocking HMR / Turbopack eval
  if (process.env.NODE_ENV !== "development") {
    response.headers.set("Content-Security-Policy", csp);
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
