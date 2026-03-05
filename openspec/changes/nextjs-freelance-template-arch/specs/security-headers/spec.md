## ADDED Requirements

### Requirement: Content Security Policy headers
The template SHALL configure Content Security Policy (CSP) headers in `next.config.js` to prevent XSS attacks by restricting script sources, style sources, and frame ancestors.

#### Scenario: Inline script blocked by CSP
- **WHEN** a malicious inline script is injected via user input (e.g., comment field)
- **THEN** the browser SHALL block the script execution due to CSP policy

#### Scenario: Legitimate scripts allowed
- **WHEN** the application loads its own scripts and configured third-party scripts (e.g., Sentry, analytics)
- **THEN** the CSP policy SHALL allow these scripts to execute

### Requirement: Security headers configuration
The template SHALL set security-related HTTP headers: `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, and `Permissions-Policy` restricting camera/microphone/geolocation.

#### Scenario: Clickjacking prevention
- **WHEN** an attacker attempts to embed the site in an iframe
- **THEN** the browser SHALL block the embedding due to `X-Frame-Options: DENY`

### Requirement: Environment variable safety
The template SHALL include an `.env.example` file documenting all required environment variables with placeholder values. The `.gitignore` SHALL exclude `.env*` files (except `.env.example`).

#### Scenario: No real secrets in repository
- **WHEN** a developer clones the template repository
- **THEN** no real API keys or secrets SHALL be present; only `.env.example` with placeholder values
