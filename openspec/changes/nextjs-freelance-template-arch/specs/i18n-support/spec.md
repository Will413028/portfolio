## ADDED Requirements

### Requirement: next-intl integration
The template SHALL integrate next-intl for internationalization, supporting message translation, locale-aware date formatting, currency formatting, and number formatting.

#### Scenario: Language switching
- **WHEN** a user switches the language selector from English to Traditional Chinese
- **THEN** all translatable text on the page SHALL update to the selected locale without a full page reload

#### Scenario: Locale-aware date formatting
- **WHEN** displaying a date in the US locale
- **THEN** the date SHALL be formatted as MM/DD/YYYY
- **WHEN** displaying the same date in a European locale
- **THEN** the date SHALL be formatted as DD/MM/YYYY

#### Scenario: Currency formatting
- **WHEN** displaying a price in TWD locale
- **THEN** the currency SHALL be formatted with the NT$ symbol and appropriate decimal places

### Requirement: Translation file structure
The template SHALL organize translation messages in JSON files under `messages/` directory, with one file per locale (e.g., `messages/en.json`, `messages/zh-TW.json`).

#### Scenario: Adding a new locale
- **WHEN** a developer adds a new `messages/ja.json` file and registers it in the i18n config
- **THEN** the application SHALL support Japanese as an available locale

### Requirement: Server Component translation support
next-intl SHALL be configured to work with both Server Components and Client Components, using the App Router middleware for locale detection.

#### Scenario: Server-rendered translated content
- **WHEN** a Server Component renders translated text
- **THEN** the translated content SHALL be included in the initial HTML response (no client-side flash)
