## ADDED Requirements

### Requirement: Blog posts are real or section is emptied
The blog post data in `src/lib/blog-posts.ts` SHALL either contain the owner's real blog posts, or be replaced with an empty array. The 6 sample posts MUST be removed.

#### Scenario: Blog page shows real posts
- **WHEN** a visitor views the blog page
- **THEN** the posts are the owner's actual articles

#### Scenario: No blog posts available
- **WHEN** the owner has no blog posts yet
- **THEN** the blog data is an empty array and the page handles it gracefully
