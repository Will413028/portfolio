## ADDED Requirements

### Requirement: Framer Motion integration
The template SHALL include Framer Motion as the animation library, configured for use in Client Components with reusable animation variants.

#### Scenario: Page transition animation
- **WHEN** a user navigates between pages
- **THEN** the outgoing page SHALL animate out and the incoming page SHALL animate in with a smooth transition

#### Scenario: Component entrance animation
- **WHEN** a component with entrance animation scrolls into the viewport
- **THEN** the component SHALL animate from its initial state (e.g., opacity 0, translateY) to its final state

### Requirement: Reusable animation variants
The template SHALL provide a set of common animation variants in `lib/animations.ts` (fade-in, slide-up, scale-in, stagger-children) that can be applied to any motion component.

#### Scenario: Applying a preset animation
- **WHEN** a developer wraps a component with `<motion.div variants={fadeIn}>`
- **THEN** the component SHALL animate using the predefined fade-in variant without additional configuration

### Requirement: Performance-safe animation defaults
Animations SHALL default to GPU-accelerated properties (transform, opacity) and SHALL NOT animate layout-triggering properties (width, height, top, left) unless explicitly opted in.

#### Scenario: Animation does not cause layout thrashing
- **WHEN** a list of cards animates in with the stagger variant
- **THEN** the animation SHALL use `transform` and `opacity` only, avoiding layout recalculation
