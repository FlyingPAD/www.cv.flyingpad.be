# Current Development State — CV V2

Last consolidated after removing redundant page-intro heroes from secondary pages.

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
Primary navigation explicitly includes Home before Work/Journey/Profile. Email is deliberately styled as a distinct action and labelled **Email ↗**, rather than masquerading as a normal internal Contact route. The adjacent name also links Home while the miniature Nine remains passive.

### Home
Hero remains the primary identity statement: **I create things ...** plus the disciplines line. `Colors are alive` heads the interactive domain system.

### Secondary pages
Profile, Work and Journey no longer begin with large generic page-intro heroes. Each page starts directly with useful content:
- Profile → Based in / languages / contact / résumé, alongside experience.
- Work → selected project cards.
- Journey → timeline.

This is now an intentional IA rule: secondary pages should not restate their route name or add decorative slogans unless the content genuinely needs orientation.

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
1. Real-device review/fine tuning across Work/Journey/Profile.
2. Replace legacy Resume with V2 printable Profile/resume.
3. Add deliberate reveal/motion layer respecting reduced motion.
4. Reintegrate i18n.
5. Theme/light-mode strategy after dark V2 is stable.
6. Metadata/SEO/accessibility audit.

## Deployment
Production deploys from `master` via serialized GitHub Actions + FTP. Verify a deployment before stacking the next production commit.
