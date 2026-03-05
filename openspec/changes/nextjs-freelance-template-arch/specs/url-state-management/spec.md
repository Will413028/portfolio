## ADDED Requirements

### Requirement: nuqs integration for URL state
The template SHALL integrate nuqs to synchronize UI state (search queries, filters, pagination, sorting) with URL search parameters.

#### Scenario: Search query synced to URL
- **WHEN** a user types "shoes" in a search input managed by nuqs
- **THEN** the URL SHALL update to include `?q=shoes` without a full page reload

#### Scenario: Shareable filtered view
- **WHEN** a user applies filters (category=electronics, sort=price-asc) and shares the URL
- **THEN** the recipient SHALL see the same filtered view when opening the URL

#### Scenario: Browser back/forward navigation
- **WHEN** a user changes a filter and then presses the browser back button
- **THEN** the previous filter state SHALL be restored from the URL

### Requirement: Debounced search input
The template SHALL provide a debounced search hook (`hooks/use-debounce.ts`) that delays URL updates until the user stops typing, preventing excessive API calls.

#### Scenario: Debounce prevents rapid API calls
- **WHEN** a user types "running shoes" character by character in a search input
- **THEN** the URL and API call SHALL only trigger once after the user pauses typing (default 300ms delay)
