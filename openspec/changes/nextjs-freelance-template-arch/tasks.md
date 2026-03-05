## 1. Project Setup & Dependencies

- [x] 1.1 Upgrade Next.js to version 16 and React to version 19 in package.json
- [x] 1.2 Install core dependencies: zustand, @tanstack/react-query, zod, react-hook-form
- [x] 1.3 Install UI/animation dependencies: framer-motion, lucide-react (verify shadcn/ui already configured)
- [x] 1.4 Install i18n dependency: next-intl
- [x] 1.5 Install URL state dependency: nuqs
- [x] 1.6 Install error monitoring dependency: @sentry/nextjs
- [x] 1.7 Remove netlify.toml and update deployment config for Vercel

## 2. Directory Structure & Scaffolding

- [x] 2.1 Create `src/features/` directory with placeholder README
- [x] 2.2 Create `src/hooks/` directory and move any existing hooks
- [x] 2.3 Create `src/store/` directory with placeholder files
- [x] 2.4 Create `src/types/index.ts` with common type definitions (User, ApiResponse, PaginatedResponse)
- [x] 2.5 Create `src/providers/` directory
- [x] 2.6 Reorganize `src/components/` into `ui/`, `layout/`, and `shared/` subdirectories
- [x] 2.7 Create `.env.example` with all required environment variables documented

## 3. Route Groups & Layouts

- [x] 3.1 Create `src/app/(marketing)/` route group and move existing public pages (home, about, work, blog, contact)
- [x] 3.2 Create `src/app/(marketing)/layout.tsx` with Header + Footer
- [x] 3.3 Create `src/app/(auth)/` route group with layout.tsx (minimal centered layout)
- [x] 3.4 Create `src/app/(auth)/login/page.tsx` placeholder
- [x] 3.5 Create `src/app/(dashboard)/` route group with layout.tsx (sidebar + top bar)
- [x] 3.6 Create `src/app/(dashboard)/overview/page.tsx` placeholder
- [x] 3.7 Update `src/app/layout.tsx` root layout to wrap with all providers
- [x] 3.8 Create `src/app/not-found.tsx` custom 404 page

## 4. API Infrastructure

- [x] 4.1 Implement `src/lib/api-client.ts` typed fetch wrapper with GET/POST/PUT/DELETE methods, token interceptor, and ApiError class
- [x] 4.2 Create `src/providers/query-provider.tsx` with TanStack Query QueryClientProvider and devtools
- [x] 4.3 Create `src/lib/validations.ts` with common Zod schemas (email, password, phone, URL, pagination)
- [x] 4.4 Wire QueryProvider into root layout.tsx

## 5. UI Layout Components

- [x] 5.1 Create `src/components/layout/header.tsx` with responsive desktop nav + mobile hamburger menu
- [x] 5.2 Create `src/components/layout/footer.tsx` with configurable links, social icons, and copyright
- [x] 5.3 Create `src/components/layout/sidebar.tsx` for dashboard with collapsible nav and active-route highlighting
- [x] 5.4 Create `src/components/shared/page-title.tsx` reusable page header component
- [x] 5.5 Create `src/components/shared/empty-state.tsx` placeholder for empty data states

## 6. State Management

- [x] 6.1 Create `src/store/use-ui-store.ts` Zustand store (sidebar toggle, theme, mobile menu)
- [x] 6.2 Create `src/store/use-cart-store.ts` Zustand store (cart items, add/remove/clear actions) as e-commerce example

## 7. Auth Middleware

- [x] 7.1 Create `middleware.ts` at project root with route matcher for dashboard paths
- [x] 7.2 Implement auth token check and redirect to login for unauthenticated users
- [x] 7.3 Configure middleware to skip public and auth routes

## 8. Internationalization (i18n)

- [x] 8.1 Create `messages/en.json` with base English translation structure
- [x] 8.2 Create `messages/zh-TW.json` with Traditional Chinese translations
- [x] 8.3 Configure next-intl in `src/i18n.ts` and middleware for locale detection
- [x] 8.4 Create `src/providers/intl-provider.tsx` and wire into root layout
- [x] 8.5 Update header component with language switcher

## 9. Animation System

- [x] 9.1 Create `src/lib/animations.ts` with reusable Framer Motion variants (fadeIn, slideUp, scaleIn, staggerContainer)
- [x] 9.2 Create a `src/components/shared/motion-wrapper.tsx` utility for applying entrance animations on scroll
- [x] 9.3 Add page transition animation wrapper to route group layouts

## 10. URL State Management

- [x] 10.1 Configure nuqs provider in root layout
- [x] 10.2 Create `src/hooks/use-debounce.ts` debounce hook (300ms default)
- [x] 10.3 Create example search/filter component using nuqs for URL state sync

## 11. Error Monitoring

- [x] 11.1 Run `npx @sentry/wizard@latest -i nextjs` to scaffold Sentry config files
- [x] 11.2 Configure `sentry.client.config.ts` and `sentry.server.config.ts` with env-based DSN
- [x] 11.3 Update `next.config.js` to include Sentry webpack plugin for source maps
- [x] 11.4 Add Sentry environment variables to `.env.example`

## 12. Security Headers

- [x] 12.1 Add Content Security Policy header configuration in `next.config.js`
- [x] 12.2 Add security headers: X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy
- [x] 12.3 Verify `.gitignore` excludes `.env*` files (except `.env.example`)

## 13. Feature Module Example

- [x] 13.1 Create `src/features/auth/` example module with components/, hooks/, api/, types.ts, validations.ts, index.ts
- [x] 13.2 Implement login form component using React Hook Form + Zod validation
- [x] 13.3 Implement auth API hooks using TanStack Query + api-client

## 14. Final Integration & Cleanup

- [x] 14.1 Update `next.config.js` for Next.js 16 settings (remove `unoptimized: true`, configure image domains for Vercel)
- [x] 14.2 Update `tsconfig.json` path aliases if needed
- [x] 14.3 Verify all providers chain correctly in root layout (QueryProvider → IntlProvider → ThemeProvider)
- [x] 14.4 Run build to verify no import errors or circular dependencies
- [x] 14.5 Update package.json scripts (dev, build, start, lint, format)
