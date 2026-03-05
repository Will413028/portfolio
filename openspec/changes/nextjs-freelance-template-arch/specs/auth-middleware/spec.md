## ADDED Requirements

### Requirement: Route protection middleware
The template SHALL provide a `middleware.ts` at the project root that protects routes under `(dashboard)` by checking for a valid authentication token.

#### Scenario: Unauthenticated user accesses protected route
- **WHEN** a user without a valid auth token navigates to a dashboard page
- **THEN** the middleware SHALL redirect them to the login page

#### Scenario: Authenticated user accesses protected route
- **WHEN** a user with a valid auth token navigates to a dashboard page
- **THEN** the middleware SHALL allow the request to proceed

#### Scenario: Public routes are not intercepted
- **WHEN** a user navigates to a marketing or auth page
- **THEN** the middleware SHALL not perform any authentication check

### Requirement: Middleware route matcher configuration
The middleware SHALL use a configurable route matcher to define which paths require authentication, allowing developers to easily add or remove protected routes.

#### Scenario: Adding a new protected route
- **WHEN** a developer adds a new page under `(dashboard)/settings`
- **THEN** the route matcher SHALL automatically protect it without additional configuration
