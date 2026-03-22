## Context

This is a forked Next.js portfolio site. The owner's identifiers (name, email, GitHub, LinkedIn) are already correct, but all content (bio, experience, projects, testimonials, blog posts, education, location, assets) still contains placeholder data from the original author. The site uses `next-intl` with `en` and `zh-TW` locales, so all text content must be updated in both `messages/en.json` and `messages/zh-TW.json`, plus TypeScript data files that contain per-locale objects.

## Goals / Non-Goals

**Goals:**
- Replace all placeholder content with the owner's real information
- Maintain both en and zh-TW translations
- Replace all external asset URLs (ext.same-assets.com) with owner's real assets or local files
- Ensure the site is deployable as a genuine personal portfolio

**Non-Goals:**
- Redesigning the UI or layout
- Adding new features or pages
- Changing the tech stack or architecture
- SEO optimization beyond accurate metadata

## Decisions

### 1. Content replacement strategy: direct edit, not migration script
Content is spread across a small number of known files. A direct find-and-replace approach per file is simpler and less error-prone than writing a migration script.

### 2. Assets: use `/public/images/` for local hosting
Replace ext.same-assets.com URLs with locally hosted images in `/public/images/`. This removes dependency on an external CDN the owner doesn't control.

### 3. Testimonials and blog posts: keep structure, replace content
Keep the component structure and data files even if the owner has fewer items initially. Empty arrays are valid — the UI should handle zero items gracefully. The owner can populate these over time.

### 4. Work order: data files first, then messages, then assets
Update TypeScript data files (`experience.ts`, `projects.ts`, `testimonials.ts`, `blog-posts.ts`) first since they're self-contained. Then update i18n messages. Finally swap asset URLs. This order minimizes broken states during editing.

## Risks / Trade-offs

- [Risk] Owner may not have all content ready (projects, testimonials, blog posts) → Mitigation: Use empty arrays or minimal placeholder content that is clearly the owner's, not the original author's. Mark sections as "coming soon" if needed.
- [Risk] zh-TW translations may be difficult for non-native speakers → Mitigation: Owner provides en content, then translates or uses AI-assisted translation for zh-TW.
- [Risk] ext.same-assets.com URLs break if original author removes them → Mitigation: Replace with local assets as part of this change; don't depend on external URLs.
