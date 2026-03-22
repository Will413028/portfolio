## ADDED Requirements

### Requirement: Projects are the owner's real work
The project data in `src/lib/projects.ts` SHALL contain the owner's real projects with accurate titles, descriptions, tags, tech stacks, features, challenges, and links in both `en` and `zh-TW` locales. The 7 placeholder projects (Nextdemy, Finote, Next Venture, StarForge, Snippix, Flux Lura, Portfolio) MUST be replaced.

#### Scenario: Work page shows real projects
- **WHEN** a visitor views the work page
- **THEN** the project list shows the owner's actual projects with real descriptions and links

### Requirement: Project links are valid
All project `liveUrl` and `githubUrl` fields SHALL point to the owner's real project URLs. Any projects without live demos or source code SHALL use empty strings for the respective fields.

#### Scenario: Project links work
- **WHEN** a visitor clicks a project link
- **THEN** they are taken to the owner's real project URL

### Requirement: Project screenshots are the owner's
All project screenshot URLs SHALL point to real screenshots of the owner's projects, hosted locally in `/public/images/` or on the owner's own CDN. The ext.same-assets.com URLs MUST be replaced.

#### Scenario: Project images load correctly
- **WHEN** a visitor views a project detail page
- **THEN** the screenshots show the owner's actual project
