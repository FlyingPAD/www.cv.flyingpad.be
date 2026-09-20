# Current Development State — CV V2

Last consolidated after the global i18n / ownership / public identity pass.

## Read order
1. `/AGENTS.md`
2. this file
3. `docs/architecture.md`
4. `docs/design-system.md`
5. relevant implementation files at current HEAD
6. canonical GPT Library / workspace only for cross-project or lore questions

## Current product state
Accepted public IA: **Home · Work · Journey · Profile**, plus the interactive **Resume** artifact. Dark V2 is the production baseline.

### Navigation and shell
Desktop keeps Home / Work / Journey / Profile plus direct email. At ≤700px the header collapses into the authored full-screen menu with enter/exit animation, scroll lock, Escape, keyboard focus trap and focus restoration.

A global **EN / FR** control now lives in the shell and the language choice persists in localStorage. The document `lang` attribute follows the active language.

The footer carries the miniature Nine signature plus Email / FlyingPAD / Projects. A skip-to-content link is available for keyboard users.

The back-to-top control is now an isolated fixed overlay component on desktop and mobile. It owns no layout space and therefore cannot shift or resize page composition.

### Home
Hero signature is now **I build things ...** across languages, preserving the letter-by-letter motion and aligning the site with the broader public identity. The discipline line, domain copy, selected work and journey summary are localized.

`Colors are alive` remains intentionally unchanged across languages.

### Work
FlyingPAD is now the explicit example of end-to-end ownership. The page states what is actually owned across the production pipeline:
- concept;
- product direction;
- information architecture;
- software;
- UI;
- pedagogy;
- audio / video;
- delivery.

The point is proof of production scope, not a larger skill inventory.

Projects remains the public creative-technical laboratory.

### Journey
Timeline copy and evidence chips are localized. Neutral timeline markers remain intentionally separate from the Nine numbering system.

### Profile
Profile is localized and continues to emphasize:
- end-to-end production ownership;
- operating principles;
- .NET / Angular as the core development stack;
- right-sized architecture;
- AI-assisted development used deliberately;
- AI media workflows;
- audiovisual production.

### Resume
Resume remains a live HTML professional artifact with:
- EN / FR;
- Design / Essential;
- Print / PDF;
- A4 print CSS;
- one typed content source.

Resume language changes now use the same site language service as the rest of the application, so shell and document stay synchronized.

### 404
Unknown routes now render a designed 404 surface instead of silently redirecting to Home.

### Public identity / sharing
The public surface now includes:
- authored metadata and Person JSON-LD;
- authored favicon.ico;
- dedicated 1200×630 Open Graph card;
- large-image social sharing metadata.

### Motion
Route changes use the View Transitions API when available. Reduced-motion preferences remove decorative motion.

## Visual rules
- Dark, calm, precise base.
- Vivid color is signal, not wallpaper.
- Readability beats excessive delicacy.
- No scale/jump hover effects.
- Desktop spatial; tablet simplified; mobile sequential.
- 01–09 is reserved for the Nine projection.
- No essential information depends on Nine/lore.
- Repeated UI primitives belong in the global V2 style layer.
- Localization must preserve tone, not merely replace words.

## Remaining review
1. Real-device pass after the language/ownership changes.
2. Export all four Resume combinations: EN/FR × Design/Essential.
3. Physically print at least one Design and one Essential copy.
4. Consider route-specific dynamic social metadata only if social previews become an actual acquisition channel.
5. Angular/runtime upgrade and broader optimization are a separate future technical pass.

## Deployment
Production deploys from `master` via serialized GitHub Actions + FTP. Treat production commits as deployment events.
