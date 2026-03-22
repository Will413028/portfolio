## ADDED Requirements

### Requirement: Profile photo is the owner's
The profile photo URL in `src/components/shared/Hero.tsx` SHALL point to the owner's real photo, hosted locally in `/public/images/` or on the owner's CDN. The ext.same-assets.com URL MUST be replaced.

#### Scenario: Profile photo loads
- **WHEN** a visitor views the homepage hero section
- **THEN** the profile photo shows the owner's real photo

### Requirement: Logo/icon is the owner's
The logo/icon URL in `src/components/shared/Hero.tsx` and favicon in `src/app/layout.tsx` SHALL be replaced with the owner's branding or a generic placeholder. The ext.same-assets.com URLs MUST be removed.

#### Scenario: Favicon is correct
- **WHEN** a visitor opens the site in a browser tab
- **THEN** the favicon shows the owner's icon, not the original author's

### Requirement: No ext.same-assets.com dependencies
All URLs referencing `ext.same-assets.com` across the entire codebase SHALL be replaced with locally hosted assets or the owner's own CDN URLs.

#### Scenario: No external asset dependencies
- **WHEN** the ext.same-assets.com domain becomes unavailable
- **THEN** the site continues to display all images correctly
