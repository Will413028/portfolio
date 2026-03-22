## Why

This portfolio site was forked from another developer. While the basic identifiers (name, email, GitHub, LinkedIn) are already correct, all content — bio, work experience, projects, testimonials, blog posts, education, location, and visual assets — still contains the original author's placeholder data. The site cannot be deployed as a personal portfolio until this content is replaced with the owner's real information.

## What Changes

- Remove or replace the "Nextnode is launching soon!" hero badge announcement
- Replace bio/about text with the owner's real background and story (en + zh-TW)
- Replace 3 fake work experience entries with real work history
- Replace 7 placeholder projects with real projects (descriptions, screenshots, links)
- Replace or remove 5 fake client testimonials
- Replace or remove 6 sample blog posts
- Update education details (degree, university, period)
- Update location from "Based in India" to the owner's actual location
- Update timezone display from "New Delhi, India" to the correct timezone
- Replace profile photo and logo URLs (currently pointing to ext.same-assets.com)
- Replace all project screenshot URLs with real screenshots
- Replace favicon/logo URL in metadata

## Capabilities

### New Capabilities

- `personal-info`: Owner's bio, location, timezone, education — text content in messages files and BentoGrid component
- `work-experience`: Real work history entries in experience.ts (en + zh-TW)
- `portfolio-projects`: Real project data in projects.ts — titles, descriptions, tags, links, screenshots (en + zh-TW)
- `testimonials-content`: Real testimonials or removal of the section entirely
- `blog-content`: Real blog posts or removal of the section entirely
- `visual-assets`: Profile photo, logo, favicon, and project screenshot URLs — replacing all ext.same-assets.com references

### Modified Capabilities

## Impact

- **i18n messages**: `messages/en.json` and `messages/zh-TW.json` — hero, aboutSection, bento, footer, resumePage sections
- **Data files**: `src/lib/experience.ts`, `src/lib/projects.ts`, `src/lib/testimonials.ts`, `src/lib/blog-posts.ts`
- **Components**: `src/components/shared/Hero.tsx`, `src/components/shared/BentoGrid.tsx`
- **Metadata**: `src/app/layout.tsx` (favicon)
- **No dependency or API changes** — this is purely a content replacement
