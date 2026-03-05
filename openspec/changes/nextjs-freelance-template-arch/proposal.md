## Why

The current portfolio project is a single-purpose site built with Next.js 15. To support freelance work across diverse client needs (branding sites, e-commerce, dashboards), the codebase needs to be refactored into a reusable, modular template architecture. This template will serve as a private GitHub Template Repository, enabling rapid project bootstrapping with a professional-grade tech stack (Next.js 16, Tailwind CSS, shadcn/ui, Zustand, TanStack Query, Zod, Framer Motion, next-intl, nuqs, Sentry) while maintaining clean separation of concerns and easy feature addition/removal.

## What Changes

- **Restructure `src/` directory** into a layered architecture: route layer (`app/`), view layer (`components/`), feature modules (`features/`), core utilities (`lib/`), shared hooks (`hooks/`), global state (`store/`), type definitions (`types/`), and providers (`providers/`)
- **Introduce route groups** for `(marketing)`, `(auth)`, and `(dashboard)` with independent layouts
- **Adopt feature-based module pattern** (`features/`) to encapsulate domain-specific components, hooks, and API calls together for easy addition/removal
- **Set up API infrastructure**: typed fetch wrapper with token interceptor (`lib/api-client.ts`), TanStack Query provider, Zod validation schemas
- **Add i18n support** via `next-intl` for multi-language and locale-aware formatting
- **Add animation system** via Framer Motion for page transitions and micro-interactions
- **Add URL state management** via `nuqs` for search, filter, and pagination state synced to URL
- **Add error monitoring** via Sentry for runtime error tracking with user replay
- **Add security headers** via Content Security Policy (CSP) in `next.config.js`
- **Add `.env.example`** for safe project handoff to clients
- **Upgrade to Next.js 16** with App Router best practices
- **Switch deployment target** from Netlify to Vercel for optimized image handling and Edge functions

## Capabilities

### New Capabilities
- `template-directory-structure`: Layered directory structure with route groups, feature modules, and clean separation of concerns
- `api-infrastructure`: Typed fetch wrapper, TanStack Query provider, and Zod validation integration
- `auth-middleware`: Route protection via Next.js middleware for dashboard/protected pages
- `i18n-support`: Multi-language support with next-intl including locale-aware date/currency formatting
- `animation-system`: Framer Motion integration for page transitions and micro-interactions
- `url-state-management`: URL-synced search, filter, and pagination via nuqs
- `error-monitoring`: Sentry integration for frontend error tracking and user session replay
- `security-headers`: Content Security Policy and security headers configuration
- `ui-layout-system`: Responsive layout components (Header, Footer, Sidebar) with mobile-first design

### Modified Capabilities
_(none - this is a greenfield template architecture)_

## Impact

- **All existing `src/` files** will be reorganized into the new directory structure
- **`package.json`**: New dependencies added (zustand, @tanstack/react-query, zod, react-hook-form, framer-motion, next-intl, nuqs, @sentry/nextjs)
- **`next.config.js`**: Updated for Next.js 16, security headers, Sentry plugin, i18n config
- **`middleware.ts`**: New file for auth route protection and locale redirection
- **`.env.example`**: New file documenting required environment variables
- **Deployment**: Migration from Netlify to Vercel (removal of `netlify.toml`)
