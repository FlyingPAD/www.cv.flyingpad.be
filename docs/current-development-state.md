# Current Development State — CV V2

Last consolidated after V2 readability/navigation fine tuning.

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
Primary navigation explicitly includes **Home** before Work/Journey/Profile/Contact. The adjacent name also links Home, while the miniature Nine mark remains passive/decorative. This deliberately favors discoverability over relying only on logo/name conventions.

### Home
The system cards remain interactive navigation surfaces. First readability pass increases small type, contrast and structural borders while retaining the spacious composition. Major structural/card boundaries use 2px where extra visual consistency helps; the miniature mark itself stays borderless.

### Shared shell
Miniature mark: invisible/missing top-left position, visible sequence begins top-middle, eighth visible position is Black with no outline. Passive hover glow only.

### Visual rules
- Dark, calm, precise base.
- Vivid color is signal, not wallpaper.
- Readability beats excessive delicacy: avoid sub-10px essential text.
- Strong structural boundaries may use 2px; do not indiscriminately thicken every decorative detail.
- No scale/jump hover effects.
- Desktop spatial; tablet simplified; mobile sequential.
- No essential information depends on Nine/lore.
- `Colors are alive.` remains understated.

### Resume
Legacy compatibility/print/archive surface; scheduled for replacement.

## Next likely work
1. Real-device review/fine tuning across Work/Journey/Profile with the new readability baseline.
2. Replace legacy Resume with V2 printable Profile/resume.
3. Add deliberate reveal/motion layer respecting reduced motion.
4. Reintegrate i18n.
5. Theme/light-mode strategy after dark V2 is stable.
6. Metadata/SEO/accessibility audit.

## Deployment
Production deploys from `master` via serialized GitHub Actions + FTP. Verify a deployment before stacking the next production commit.
