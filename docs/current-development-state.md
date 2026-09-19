# Current Development State — CV V2

Last consolidated after V2 cross-page polish and the first interactive Nine pass.

## Read order
1. `/AGENTS.md`
2. this file
3. `docs/architecture.md`
4. `docs/design-system.md`
5. relevant implementation files at current HEAD
6. canonical GPT Library / workspace only for cross-project or lore questions

## Current product state
Accepted V2 IA: **Home · Work · Journey · Profile**. Base dark DA is validated.

### Home
Uses the shared shell. Hero, Nine projection, FlyingPAD feature and journey preview are active. Position 01 is missing; 02–09 are visible. The eight manifested domain cards are now navigation surfaces rather than decorative dead ends: internal concepts route toward Journey/Profile/Work while Music and Experiments can route to their relevant public surfaces. The mapping is a CV navigation projection, not canonical Pad/color identity. Mobile keeps the Nine sequential.

### Shared shell
Header mark now follows the local CV projection more strictly: missing top-left position, seven chromatic positions, and the final ninth cell physically absent rather than rendered as a black dot. This intentionally differs from the full Home system, where 09 remains represented as the Black/Experiments position.

### Work / Journey / Profile
Remain on the first cross-page polish pass: vivid color as signal, layout-stable interactions, recruiter-readable Profile.

### Resume
Legacy compatibility/print/archive surface; scheduled for replacement.

## Current visual rules
- Dark, calm, precise base.
- Vivid color is signal, not wallpaper.
- No scale/jump hover effects.
- Desktop spatial; tablet simplified; mobile sequential.
- No essential information depends on Nine/lore.
- `Colors are alive.` remains understated.
- Domain-card links must remain semantically ordinary navigation; do not explain them as lore.

## Next likely work
1. Real-device review/fine tuning.
2. Replace legacy Resume with V2 printable Profile/resume.
3. Add deliberate reveal/motion layer respecting reduced motion.
4. Reintegrate i18n.
5. Theme/light-mode strategy after dark V2 is stable.
6. Metadata/SEO/accessibility audit.

## Deployment
Production deploys from `master` via serialized GitHub Actions + FTP. Verify a deployment before stacking the next production commit.
