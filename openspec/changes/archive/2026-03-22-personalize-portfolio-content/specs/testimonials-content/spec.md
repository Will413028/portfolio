## ADDED Requirements

### Requirement: Testimonials are real or section is hidden
The testimonial data in `src/lib/testimonials.ts` SHALL either contain real testimonials from the owner's clients/colleagues, or be replaced with an empty array so the section is not displayed. The 5 fake testimonials MUST be removed.

#### Scenario: Testimonials show real feedback
- **WHEN** a visitor views the testimonials section
- **THEN** the testimonials are from real people the owner has worked with

#### Scenario: No testimonials available
- **WHEN** the owner has no testimonials to display
- **THEN** the testimonials data is an empty array and the section is hidden or shows gracefully
