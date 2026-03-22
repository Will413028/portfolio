## 1. Personal Info (messages + components)

- [x] 1.1 Update hero badge: replace "Nextnode is launching soon!" in `messages/en.json` and `messages/zh-TW.json` (or remove the badge)
- [x] 1.2 Update bio text: replace `aboutSection.bio1-3`, `hero.role`, `footer.brand`, `resumePage.subtitle` in both locale files
- [x] 1.3 Update location: replace `bento.basedIn` ("Based in India") in both locale files
- [x] 1.4 Update timezone: replace "New Delhi, India" in `src/components/shared/BentoGrid.tsx` with owner's timezone
- [x] 1.5 Update education: replace `resumePage.degree`, `resumePage.university`, `resumePage.educationPeriod` in both locale files

## 2. Work Experience

- [x] 2.1 Replace work experience entries in `src/lib/experience.ts` (en section) with real jobs
- [x] 2.2 Replace work experience entries in `src/lib/experience.ts` (zh-TW section) with translated versions
- [x] 2.3 Update skills list in `src/lib/experience.ts` (both en and zh-TW) to match real skills

## 3. Portfolio Projects

- [x] 3.1 Replace project entries in `src/lib/projects.ts` (en section) with real projects
- [x] 3.2 Replace project entries in `src/lib/projects.ts` (zh-TW section) with translated versions
- [x] 3.3 Update all project GitHub URLs and live URLs to point to real projects
- [x] 3.4 Replace all project screenshot URLs (ext.same-assets.com → local `/public/images/` or owner's CDN)

## 4. Testimonials

- [x] 4.1 Replace testimonial entries in `src/lib/testimonials.ts` with real testimonials, or set to empty array

## 5. Blog Posts

- [x] 5.1 Replace blog post entries in `src/lib/blog-posts.ts` with real posts, or set to empty array

## 6. Visual Assets

- [x] 6.1 Replace profile photo URL in `src/components/shared/Hero.tsx` (line ~103)
- [x] 6.2 Replace logo/icon URL in `src/components/shared/Hero.tsx` (line ~111)
- [x] 6.3 Replace favicon URL in `src/app/layout.tsx` (line ~29)
- [x] 6.4 Verify no remaining ext.same-assets.com references in codebase

## 7. Verification

- [x] 7.1 Run `pnpm lint` to ensure no errors
- [x] 7.2 Run `pnpm build` to verify production build succeeds
- [ ] 7.3 Manual check: browse all pages to confirm content is correct
