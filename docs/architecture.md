# CV V2 Architecture

## Role of the application
`cv.flyingpad.be` is the identity and routing surface of the public ecosystem. It explains the person and makes work reachable without trying to become the work itself.

The product presents Tony as a systems/production profile: software is a core medium, not the only identity.

## Information architecture
### Home
Fast orientation: identity, disciplines, Nine projection, selected work and journey entry.

### Work
Selected public work organized around purpose and ownership rather than implementation trivia.

FlyingPAD is the reference proof case for end-to-end scope:
**Concept → Product direction → Information architecture → Software/UI → Pedagogy → Audiovisual → Delivery**

### Journey
A narrative model of accumulated disciplines. Education and employment are evidence inside the trajectory rather than separate identity silos.

### Profile
The conventional professional projection: production scope, operating principles, selected experience, education and curated toolkit.

### Resume
A live localized printable/exportable artifact. EN/FR and Design/Essential share one typed content source.

### 404
Unknown routes resolve to a real not-found component. Historic compatibility URLs still redirect deliberately.

## Angular structure
```text
src/app/
  shared/
    site-language.service.ts
    back-to-top/
    site-shell/
  pages/
    home/
    work/
    journey/
    profile/
    resume/
    not-found/
```

Historic routes such as `/experience`, `/training`, `/hard-skills`, `/soft-skills` and `/projects` remain redirect-only compatibility URLs.

Use `shared/` for real responsibility/reuse boundaries. Do not componentize decorative fragments only for abstraction's sake.

`BackToTopComponent` is an isolated viewport utility: it owns its own scroll threshold, motion preference and fixed overlay positioning. It never changes page geometry or shell width.

## Localization architecture
`SiteLanguageService` is the single public language state:
- supported languages: EN / FR;
- initial language: persisted user choice, otherwise browser language, otherwise EN;
- active language stored in a signal;
- ngx-translate handles resource lookup;
- `<html lang>` follows the active language;
- Resume delegates language switching to the same service.

Translation resources live in:
```text
public/assets/i18n/en.json
public/assets/i18n/fr.json
```

## Styling
Global responsibilities:
- design tokens;
- baseline document behavior;
- accessibility defaults;
- shared low-level primitives;
- route transition styling.

Component responsibilities:
- page composition;
- local responsive behavior;
- feature-specific presentation.

## Motion
Router configuration enables `withViewTransitions()`. Browsers without support fall back to normal navigation. Reduced-motion preferences remove decorative route and overlay motion.

The mobile navigation owns explicit mounted/open/closing states so exit motion can complete before internal navigation.

## Accessibility
The shell includes:
- skip-to-content;
- visible focus styling;
- semantic nav landmarks.

The mobile menu behaves as a modal dialog:
- background scroll is locked;
- Escape closes it;
- Tab focus is trapped;
- focus enters the dialog on open;
- focus returns to the trigger on close.

## Responsive model
Responsive design is a projection problem, not a shrinking problem:
- desktop: spatial;
- tablet: simplified;
- mobile: sequential/rhythmic.

Content parity matters more than geometry parity.

## SEO / identity metadata
`index.html` owns baseline public metadata: description, canonical URL, theme color, Open Graph/Twitter fields and Person JSON-LD.

Public assets now include:
- the authored `/favicon.ico`;
- `/assets/og-card.png`.

Route titles provide page-specific browser titles.

## Cross-project architecture
The repository consumes shared concepts but does not own them. Global/canonical concepts belong to the GPT Library/workspace; local docs record projection and implementation decisions only.

## Deployment architecture
Push to `master` → serialized GitHub Actions → Angular production build → FTP deployment.

Treat production commits as deployment events, not merely source-control bookkeeping.
