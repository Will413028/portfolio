## ADDED Requirements

### Requirement: Sentry integration
The template SHALL integrate @sentry/nextjs for automatic error capture on both client and server, with source map upload for production builds.

#### Scenario: Client-side runtime error capture
- **WHEN** an unhandled JavaScript error occurs in the browser
- **THEN** Sentry SHALL capture the error with stack trace, browser info, and user action breadcrumbs

#### Scenario: Server-side error capture
- **WHEN** an API route handler or Server Component throws an error
- **THEN** Sentry SHALL capture the error with server-side context (request URL, headers)

#### Scenario: Source map resolution
- **WHEN** a production error is reported to Sentry
- **THEN** the stack trace SHALL reference original TypeScript source lines, not minified JavaScript

### Requirement: Sentry environment configuration
Sentry DSN and environment settings SHALL be configured via environment variables (`NEXT_PUBLIC_SENTRY_DSN`, `SENTRY_ORG`, `SENTRY_PROJECT`), documented in `.env.example`.

#### Scenario: Sentry disabled when DSN not configured
- **WHEN** the `NEXT_PUBLIC_SENTRY_DSN` environment variable is not set
- **THEN** the application SHALL run normally without Sentry, producing no errors or warnings
