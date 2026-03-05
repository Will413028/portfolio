## ADDED Requirements

### Requirement: Responsive header with mobile menu
The template SHALL provide a `components/layout/header.tsx` with a desktop navigation menu and a collapsible mobile hamburger menu, styled with Tailwind CSS and shadcn/ui.

#### Scenario: Desktop navigation display
- **WHEN** the viewport width is >= 768px
- **THEN** the header SHALL display navigation links inline

#### Scenario: Mobile menu toggle
- **WHEN** the viewport width is < 768px and the user taps the hamburger icon
- **THEN** a mobile menu SHALL slide in with navigation links

### Requirement: Footer component
The template SHALL provide a `components/layout/footer.tsx` with configurable sections for links, social media icons, and copyright text.

#### Scenario: Footer renders on marketing pages
- **WHEN** a user views a marketing page
- **THEN** the footer SHALL be visible at the bottom with configured links and social icons

### Requirement: Dashboard sidebar
The template SHALL provide a `components/layout/sidebar.tsx` for the dashboard route group, with collapsible navigation and active-route highlighting.

#### Scenario: Sidebar active state
- **WHEN** a user is on the dashboard settings page
- **THEN** the "Settings" item in the sidebar SHALL be visually highlighted as active

#### Scenario: Sidebar collapse on mobile
- **WHEN** the viewport width is < 1024px
- **THEN** the sidebar SHALL be hidden by default and toggleable via a menu button

### Requirement: Root layout with providers
The `app/layout.tsx` SHALL wrap the application with all necessary providers (QueryProvider, ThemeProvider, IntlProvider) and configure global metadata, fonts, and the Tailwind CSS entry point.

#### Scenario: Provider chain renders without errors
- **WHEN** the application starts
- **THEN** all providers SHALL initialize correctly and child components SHALL have access to query client, theme, and i18n contexts
