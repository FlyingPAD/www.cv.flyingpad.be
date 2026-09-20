# Current Development State — CV V2

Last consolidated after the September 2026 premium polish / cleanup pass.

## Read order
1. `/AGENTS.md`
2. this file
3. `docs/architecture.md`
4. `docs/design-system.md`
5. relevant implementation files at current HEAD
6. canonical GPT Library / workspace only for cross-project or lore questions

## Current product state
Accepted public IA: **Home · Work · Journey · Profile**, plus the interactive **Resume** artifact. Dark V2 is the production baseline.

### Navigation
Desktop keeps explicit Home / Work / Journey / Profile navigation plus Email.

At ≤700px the header collapses to identity + Menu. The full-screen menu now has:
- authored reveal and exit animation;
- background-scroll lock;
- hidden overlay scrollbar;
- Escape support;
- keyboard focus trap;
- focus restoration;
- delayed internal navigation so the exit animation is actually visible.

### Shared shell
The miniature Nine mark keeps position 01 absent and 02–09 visible through Black. The footer now closes each page with the same restrained signature plus direct routes to Email, FlyingPAD and Projects.

### Home
The hero remains **I create things ...** plus the discipline line. `Colors are alive` heads the canonical 01→09 projection. Unrelated UI numbering was removed so 01–09 remains reserved for this symbolic system.

### Work
FlyingPAD is the primary public work. Projects is the public creative-technical laboratory. Shared chips and premium actions come from the global V2 primitive layer.

### Journey
The timeline expresses accumulated disciplines without pretending they replaced one another. Timeline markers are neutral rather than borrowing Nine numbering.

### Profile
Profile now emphasizes:
- end-to-end production ownership;
- operating principles;
- .NET / Angular as the core development stack;
- architecture and delivery;
- AI-assisted development used deliberately;
- AI media workflows;
- audiovisual production.

The public profile intentionally omits secondary stacks the owner does not want to sell professionally.

### Resume
Resume is now a live HTML professional artifact:
- dynamic EN / FR;
- Design / Essential modes from one typed content source;
- browser Print / PDF;
- A4 print CSS;
- responsive screen reading mode;
- no portrait until a genuinely suitable professional image exists;
- Nine color signature with an intentionally empty first position.

### Motion
Route changes use the browser View Transitions API when available, with a restrained fade / vertical reveal. Reduced-motion preferences disable decorative motion.

### Metadata
The app now has authored title, description, canonical URL, theme color, Open Graph / Twitter metadata and Person JSON-LD.

### Legacy cleanup
Old Experience / Training / Hard Skills / Soft Skills / Projects page components were removed. Their historic public URLs remain as redirects in `app.routes.ts`. Legacy brown-theme global CSS/tokens were removed.

## Visual rules
- Dark, calm, precise base.
- Vivid color is signal, not wallpaper.
- Readability beats excessive delicacy.
- No scale/jump hover effects.
- Desktop spatial; tablet simplified; mobile sequential.
- 01–09 is reserved for the Nine projection, not generic section numbering.
- No essential information depends on Nine/lore.
- Repeated UI primitives belong in the global V2 style layer; page CSS owns composition only.

## Remaining review
1. Real-device pass on the premium polish, especially very small mobile widths.
2. Export all four Resume combinations: EN/FR × Design/Essential, then physically print at least one Design and one Essential copy.
3. Global site i18n remains a separate content pass; Resume is already localized.
4. Consider a dedicated social preview image when a final visual identity asset is approved.
5. Light/theme strategy only after dark V2 is fully stable.

## Deployment
Production deploys from `master` via serialized GitHub Actions + FTP. Verify a deployment before stacking the next production commit.
