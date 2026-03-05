## ADDED Requirements

### Requirement: Layered src directory structure
The template SHALL organize source code under `src/` into 8 distinct layers: `app/` (routing), `components/` (pure UI), `features/` (domain modules), `lib/` (utilities), `hooks/` (shared hooks), `store/` (global state), `types/` (TypeScript definitions), and `providers/` (context providers).

#### Scenario: New project follows directory convention
- **WHEN** a developer creates a new project from this template
- **THEN** the `src/` directory SHALL contain all 8 layer directories with placeholder files

### Requirement: Route groups for layout isolation
The `app/` directory SHALL use Next.js route groups `(marketing)`, `(auth)`, and `(dashboard)` to provide independent layouts without affecting URL paths.

#### Scenario: Marketing pages use public layout
- **WHEN** a user visits a marketing page (e.g., homepage, about, pricing)
- **THEN** the page SHALL render with the marketing layout (header with navigation + footer)

#### Scenario: Dashboard pages use authenticated layout
- **WHEN** an authenticated user visits a dashboard page
- **THEN** the page SHALL render with the dashboard layout (sidebar + top bar, no public footer)

#### Scenario: Auth pages use minimal layout
- **WHEN** a user visits a login or registration page
- **THEN** the page SHALL render with a minimal centered layout (no sidebar, no public header)

### Requirement: Feature module encapsulation
Each feature in `features/` SHALL be self-contained, grouping its own components, hooks, API calls, types, and validation schemas within a single directory.

#### Scenario: Feature removal without side effects
- **WHEN** a developer deletes a feature directory (e.g., `features/checkout/`)
- **THEN** no other feature or shared component SHALL break (assuming the feature's exports are not imported elsewhere)

#### Scenario: Feature internal structure
- **WHEN** a developer creates a new feature module
- **THEN** the feature directory MAY contain: `components/`, `hooks/`, `api/`, `types.ts`, `validations.ts`, and an `index.ts` barrel export

### Requirement: Shared components separation
The `components/` directory SHALL separate UI primitives (`ui/` from shadcn/ui), layout components (`layout/`), and shared business components (`shared/`).

#### Scenario: shadcn/ui component generation
- **WHEN** a developer runs `npx shadcn-ui add <component>`
- **THEN** the component SHALL be generated into `src/components/ui/`

#### Scenario: Layout components are reusable across route groups
- **WHEN** a layout component (e.g., Header) is created in `components/layout/`
- **THEN** it SHALL be importable by any route group layout without circular dependencies
