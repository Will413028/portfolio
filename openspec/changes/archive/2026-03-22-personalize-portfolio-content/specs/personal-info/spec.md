## ADDED Requirements

### Requirement: Hero badge reflects owner's actual status
The hero badge in `messages/en.json` and `messages/zh-TW.json` (`hero.badge`, `hero.badgeText`) SHALL be updated to reflect the owner's real status, or removed if not applicable. The "Nextnode is launching soon!" text MUST be replaced.

#### Scenario: Hero badge shows owner's status
- **WHEN** a visitor loads the homepage
- **THEN** the hero badge displays the owner's real announcement or is hidden

### Requirement: Bio text reflects the owner
The bio fields in both locale message files (`aboutSection.bio1`, `aboutSection.bio2`, `aboutSection.bio3`, `hero.role`, `footer.brand`, `resumePage.subtitle`) SHALL contain the owner's real background, skills, and story.

#### Scenario: About section shows real bio
- **WHEN** a visitor views the about section
- **THEN** the bio text accurately describes the owner's background and expertise

### Requirement: Location is accurate
The location text in `messages/en.json` and `messages/zh-TW.json` (`bento.basedIn`) SHALL reflect the owner's actual location instead of "Based in India".

#### Scenario: Location displays correctly
- **WHEN** a visitor views the bento grid
- **THEN** the location shows the owner's real city/country

### Requirement: Timezone is accurate
The timezone configuration in `src/components/shared/BentoGrid.tsx` SHALL reflect the owner's actual timezone instead of "New Delhi, India".

#### Scenario: Timezone displays correctly
- **WHEN** a visitor views the timezone section in the bento grid
- **THEN** the active timezone matches the owner's real timezone

### Requirement: Education is accurate
The education fields in both locale message files (`resumePage.degree`, `resumePage.university`, `resumePage.educationPeriod`) SHALL reflect the owner's real education history.

#### Scenario: Resume page shows real education
- **WHEN** a visitor views the resume page
- **THEN** the education section shows the owner's real degree, university, and period
