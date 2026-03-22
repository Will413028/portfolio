## ADDED Requirements

### Requirement: Work experience entries are real
The work experience data in `src/lib/experience.ts` SHALL contain the owner's real work history with accurate company names, roles, periods, and descriptions in both `en` and `zh-TW` locales. The 3 placeholder entries (Freelance, Tech Startup, Digital Agency) MUST be replaced.

#### Scenario: Experience section shows real jobs
- **WHEN** a visitor views the about page or resume page
- **THEN** the work experience list shows the owner's actual employment history

### Requirement: Skills reflect the owner's real skills
The skills list in `src/lib/experience.ts` SHALL reflect the owner's actual technical skills across Frontend, Backend, and Tools categories in both locales.

#### Scenario: Skills section is accurate
- **WHEN** a visitor views the skills section
- **THEN** the listed skills match the owner's real technical capabilities
