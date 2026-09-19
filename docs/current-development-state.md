# Current Development State — CV V2

Last consolidated after the first V2 cross-page polish pass.

## Read order

1. `/AGENTS.md`
2. this file
3. `docs/architecture.md`
4. `docs/design-system.md`
5. relevant implementation files at current HEAD
6. canonical GPT Library / workspace only for cross-project or lore questions

## Current product state

Accepted V2 IA: **Home · Work · Journey · Profile**.

The base dark DA is validated. A first cross-page polish pass now centralizes spacing/surface tokens, strengthens vivid color signals, keeps interactions layout-stable and improves mobile composition.

### Home
Uses the shared shell. Hero, Nine projection, FlyingPAD feature and journey preview are active. Position 01 is missing; 02–09 are visible. Mobile turns the Nine grid into a sequential list rather than shrinking the desktop grid. The hero wording remains provisional.

### Work
FlyingPAD is the primary public work/product; `projects.flyingpad.be` is the public experimentation lab. Projects are framed through purpose/product/experience/system/technology rather than repository-first language. The first polish pass adds restrained hover light and chromatic signals without card movement.

### Journey
Narrative remains Visual Arts → Music/Audio → Web → Software → Creative Systems. The first polish pass adds color as a temporal signal while preserving readability and a simpler mobile projection.

### Profile
Conventional recruiter-readable surface with selected experience, education, languages, toolkit, contact and résumé access. Interactions remain deliberately quieter than Work/Journey.

### Resume
Legacy compatibility/print/archive surface. Still scheduled for replacement by a V2 printable résumé.

## Shared implementation
`src/app/shared/site-shell/` owns identity, Nine mark, primary navigation and footer for all V2 pages. Global V2 tokens live in `src/styles-2-variables.scss`. Legacy résumé compatibility remains isolated in global styles until Resume is replaced.

## Current visual rules
- Dark, calm, precise base.
- Vivid color is signal, not wallpaper.
- No scale/jump hover effects.
- Desktop may be spatial; tablet simplified; mobile sequential.
- No essential information depends on Nine/lore.
- `Colors are alive.` remains understated.
- Shared gutter and surface tokens should be preferred over per-page approximations.

## Next likely work
1. Real-device visual review of all four V2 pages.
2. Replace legacy Resume with V2 printable Profile/resume.
3. Add a deliberate reveal/motion layer that respects reduced motion.
4. Reintegrate i18n.
5. Theme/light-mode strategy after dark V2 is stable.
6. Metadata/SEO/accessibility audit.
7. Move larger static content into typed models where useful.

## Deployment
Production deploys from `master` via serialized GitHub Actions + FTP. Verify a deployment before stacking the next production commit.
