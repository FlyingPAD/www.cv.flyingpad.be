# Current Development State — CV V2

Last consolidated after mobile navigation overlay implementation.

## Read order
1. `/AGENTS.md`
2. this file
3. `docs/architecture.md`
4. `docs/design-system.md`
5. relevant implementation files at current HEAD
6. canonical GPT Library / workspace only for cross-project or lore questions

## Current product state
Accepted V2 IA: **Home · Work · Journey · Profile**. Base dark DA is validated.

### Navigation
Desktop keeps the explicit horizontal Home / Work / Journey / Profile navigation and distinct **Email ↗** action.

At ≤700px the header collapses to identity + a textual **Menu** trigger. The mobile navigation opens as a full-screen overlay with large Home / Work / Journey / Profile destinations, active-state color signals, a distinct direct-email action, explicit Close control, Escape support and background-scroll lock. The mobile overlay preserves the same visual language without reproducing the desktop nav as cramped buttons.

### Home
Hero remains the primary identity statement: **I create things ...** plus the disciplines line. `Colors are alive` heads the interactive domain system.

### Secondary pages
Profile, Work and Journey start directly with useful content rather than generic page-intro heroes:
- Profile → Based in / languages / contact / résumé, alongside experience.
- Work → selected project cards.
- Journey → timeline.

### Shared shell
Miniature mark: invisible/missing top-left position, visible sequence begins top-middle, eighth visible position is Black with no outline. Passive hover glow only.

### Visual rules
- Dark, calm, precise base.
- Vivid color is signal, not wallpaper.
- Readability beats excessive delicacy.
- Strong structural boundaries may use 2px.
- No scale/jump hover effects.
- Desktop spatial; tablet simplified; mobile sequential.
- No essential information depends on Nine/lore.
- Avoid deceptive affordances: external/protocol actions must be visually or textually distinguishable from internal navigation.
- Secondary pages start with content, not ceremonial headings.

### Resume
Legacy compatibility/print/archive surface; scheduled for replacement.

## Next likely work
1. Real-device review/fine tuning across Work/Journey/Profile and the new mobile overlay.
2. Replace legacy Resume with V2 printable Profile/resume.
3. Add deliberate reveal/motion layer respecting reduced motion.
4. Reintegrate i18n.
5. Theme/light-mode strategy after dark V2 is stable.
6. Metadata/SEO/accessibility audit.

## Deployment
Production deploys from `master` via serialized GitHub Actions + FTP. Verify a deployment before stacking the next production commit.
