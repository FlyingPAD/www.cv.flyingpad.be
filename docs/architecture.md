# CV V2 Architecture

## Role of the application
`cv.flyingpad.be` is the identity and routing surface of the public ecosystem. It explains the person and makes work reachable without trying to become the work itself.

The product now presents Tony less as a list of unrelated skills and more as a systems/production profile: software is a core medium, not the only identity.

## Information architecture
### Home
Fast orientation: identity, disciplines, Nine projection, selected work and journey entry.

### Work
Selected public work organized around purpose and experience rather than implementation trivia.

Preferred hierarchy:
**Purpose → Product → Media/Experience → System → Architecture → Technology**

### Journey
A narrative model of accumulated disciplines. Education and employment are evidence inside the trajectory rather than separate identity silos.

### Profile
The conventional professional projection, now including end-to-end production scope, operating principles, selected experience, education and a curated toolkit.

### Resume
A live localized printable/exportable professional artifact. EN/FR and Design/Essential share one typed content source.

## Angular structure
```text
src/app/
  shared/
    site-shell/
  pages/
    home/
    work/
    journey/
    profile/
    resume/
```

Historic routes such as `/experience`, `/training`, `/hard-skills`, `/soft-skills` and `/projects` remain redirect-only compatibility URLs. Their old components are intentionally removed.

Use `shared/` for genuine responsibility/reuse boundaries. Do not componentize decorative fragments only for abstraction's sake.

## Styling
Global responsibilities:
- design tokens;
- baseline document behavior;
- accessibility defaults;
- shared low-level visual primitives;
- route transition styling.

Component responsibilities:
- page composition;
- local responsive behavior;
- feature-specific presentation.

Legacy V1 theme tokens and `.layout` compatibility CSS are no longer part of the production architecture.

## Motion
Router configuration enables `withViewTransitions()`. Browsers without support fall back to normal navigation. Reduced-motion preferences remove decorative route and overlay motion.

The mobile navigation owns explicit mounted/open/closing states so exit motion can complete before internal navigation.

## Accessibility
The mobile menu behaves as a modal dialog:
- background scroll is locked;
- Escape closes it;
- Tab focus is trapped;
- focus moves into the dialog on open;
- focus returns to the trigger on close.

## Responsive model
Responsive design is a projection problem, not a shrinking problem:
- desktop: spatial;
- tablet: simplified;
- mobile: sequential/rhythmic.

Content parity matters more than geometry parity.

## SEO / identity metadata
`index.html` owns the baseline public metadata: description, canonical URL, theme color, Open Graph/Twitter fields and Person JSON-LD. Route titles provide page-specific browser titles.

## Cross-project architecture
The repository consumes shared concepts but does not own them. Global/canonical concepts belong to the GPT Library/workspace; local docs record projection and implementation decisions only.

## Deployment architecture
Push to `master` → serialized GitHub Actions → Angular production build → FTP deployment.

Treat production commits as deployment events, not merely source-control bookkeeping.
