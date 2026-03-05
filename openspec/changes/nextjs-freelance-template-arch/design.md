## Context

The current project is a portfolio website built with Next.js 15, React 18, Tailwind CSS, and deployed on Netlify. The codebase uses a flat structure with all components in `src/components/` and utilities in `src/lib/`. While functional for a single-purpose site, this structure doesn't scale for freelance client projects that vary widely in scope (branding sites, e-commerce, dashboards).

The target is a reusable template architecture based on Next.js 16, designed for rapid project bootstrapping with a professional tech stack. The architecture must support progressive adoption — starting with essentials (Zustand, Zod, fetch wrapper) and layering in complexity (TanStack Query, React Hook Form, i18n, Sentry) as project scale demands.

## Goals / Non-Goals

**Goals:**
- Establish a layered directory structure that separates routing, UI, business logic, and infrastructure
- Enable feature-level modularity via `features/` directory (add/remove entire features by adding/removing folders)
- Provide production-ready infrastructure: typed API client, state management, form validation, error monitoring
- Support multi-language sites via next-intl with locale-aware formatting
- Enable URL-driven state for search/filter/pagination via nuqs
- Include security best practices (CSP headers, env variable management)
- Create a GitHub Template Repository that can be cloned and customized per client

**Non-Goals:**
- Building a complete e-commerce backend (this is frontend architecture only)
- Implementing specific business logic for any particular client project
- Setting up CI/CD pipelines (beyond basic Vercel deployment)
- Database schema or ORM setup
- Authentication provider integration (template provides middleware hooks, not specific auth provider)

## Decisions

### 1. Directory Structure: Layered Architecture with Feature Modules

**Decision**: Use an 8-layer architecture (`app/`, `components/`, `features/`, `lib/`, `hooks/`, `store/`, `types/`, `providers/`)

**Rationale**: The `features/` pattern (also known as "vertical slicing") groups all code for a domain feature together. When a client says "remove the shopping cart," you delete `features/checkout/` instead of hunting across `components/`, `services/`, `hooks/`, and `store/` directories.

**Alternatives considered**:
- Flat structure (current): Simple but doesn't scale past 10+ components
- Domain-driven design: Too heavyweight for freelance projects
- Atomic design: Good for UI libraries, but doesn't organize business logic

### 2. Route Groups for Layout Isolation

**Decision**: Use Next.js route groups `(marketing)`, `(auth)`, `(dashboard)` with independent layouts

**Rationale**: Marketing pages need a public header/footer, dashboard pages need a sidebar, auth pages need a minimal centered layout. Route groups provide this without affecting URL structure.

### 3. State Management: Zustand + TanStack Query + nuqs

**Decision**: Three-tier state management:
- **Zustand**: Client-only global state (cart, UI toggles, theme)
- **TanStack Query v5**: Server state (API data caching, refetching, optimistic updates)
- **nuqs**: URL state (search params, filters, pagination)

**Rationale**: Each tool handles a distinct state category. Zustand is minimal (no boilerplate), TanStack Query eliminates manual cache management, nuqs keeps URL in sync for shareable links.

**Alternatives considered**:
- Redux Toolkit: Too much boilerplate for freelance project timescales
- Jotai/Recoil: Atomic state is harder to reason about for handoff to other developers
- SWR instead of TanStack Query: TanStack Query has more features (mutations, infinite queries, devtools)

### 4. Form Handling: React Hook Form + Zod

**Decision**: Use React Hook Form for form state management with Zod schemas for validation

**Rationale**: React Hook Form uses uncontrolled components for performance (minimal re-renders). Zod schemas are reusable across client validation and API route validation, providing end-to-end type safety.

### 5. API Client: Typed Fetch Wrapper

**Decision**: Custom fetch wrapper in `lib/api-client.ts` with token interceptor, instead of axios

**Rationale**: Native fetch is available in both client and server components in Next.js 16. A thin wrapper adds type safety, token injection, and error handling without the 11KB bundle cost of axios.

### 6. i18n: next-intl

**Decision**: Use next-intl for internationalization

**Rationale**: Best App Router support among Next.js i18n solutions. Handles message translation, date/number formatting, and locale routing. Works with both Server and Client Components.

**Alternatives considered**:
- next-i18next: Designed for Pages Router, App Router support is limited
- Custom solution: Too much effort for formatting edge cases (RTL, date formats)

### 7. Animation: Framer Motion

**Decision**: Use Framer Motion for animations and page transitions

**Rationale**: Most mature React animation library. Declarative API, layout animations, exit animations, and gesture support. The `motion` component wraps existing elements without restructuring JSX.

### 8. Error Monitoring: Sentry

**Decision**: Integrate @sentry/nextjs for error tracking

**Rationale**: Industry standard with deep Next.js integration (automatic source maps, server/client error capture, session replay). Essential for production client projects where you can't wait for bug reports.

### 9. Deployment: Vercel

**Decision**: Migrate from Netlify to Vercel

**Rationale**: Vercel is the creator of Next.js — best optimization for Image component, ISR, Edge functions, and middleware. Automatic image optimization eliminates the need for `unoptimized: true`.

### 10. Progressive Adoption Strategy

**Decision**: Structure the template so features can be added incrementally:
- **Phase 1 (Essential)**: Directory structure, Zustand, Zod, fetch wrapper, Tailwind + shadcn/ui
- **Phase 2 (Scale)**: TanStack Query, React Hook Form, nuqs
- **Phase 3 (Production)**: Sentry, next-intl, CSP headers, Framer Motion page transitions

**Rationale**: Reduces initial bundle size and learning curve. Simple branding sites may only need Phase 1, while e-commerce projects will use all three phases.

## Risks / Trade-offs

- **[Bundle size increase]** → Mitigation: Tree-shaking is effective for all chosen libraries. Progressive adoption means small projects only import Phase 1 dependencies.
- **[Learning curve for handoff]** → Mitigation: The architecture follows widely-adopted patterns (feature modules, provider pattern). Documentation in `.env.example` and README covers setup.
- **[Next.js 16 breaking changes]** → Mitigation: App Router API is stable since Next.js 13.4. Monitor release notes during template development.
- **[Over-engineering for simple sites]** → Mitigation: Feature modules are optional. A simple branding site can use just `app/`, `components/`, and `lib/` without touching `features/`, `store/`, or `hooks/`.
- **[Vendor lock-in with Vercel]** → Mitigation: The template uses standard Next.js features. Can be deployed to other platforms (Docker, AWS) with minor config changes.
