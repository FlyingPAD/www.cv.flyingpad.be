# Current Development State — CV V2

Last consolidated after the first complete V2 architecture pass and shell cleanup.

## Read order

1. `/AGENTS.md`
2. this file
3. `docs/architecture.md`
4. `docs/design-system.md`
5. relevant implementation files at current HEAD
6. canonical GPT Library / workspace only for cross-project or lore questions

## Current product state

The CV is transitioning from an older conventional résumé site to a new identity architecture.

The accepted V2 direction is:

**Home · Work · Journey · Profile**

The visual direction is considered validated as a base, not finished.

### Home

Implemented as the initial V2 vertical slice and now uses the shared V2 site shell.

Current content:
- identity header and primary navigation;
- hero: “I create things.”;
- multidisciplinary qualifier;
- Nine/system composition;
- position 01 missing;
- visible colors 02–09;
- “Colors are alive.”;
- featured FlyingPAD card;
- direct CTA to Work;
- short journey preview with direct CTA to Journey.

The hero wording remains editable; it is not canonical identity language.

### Work

V2 page exists.

Purpose:
- present work before technology;
- treat FlyingPAD as the primary public work/product;
- present `projects.flyingpad.be` as the public experimentation lab;
- avoid repository-centric portfolio language.

Current structure:
- large identity statement;
- FlyingPAD feature;
- layered Purpose/Product/Experience/System/Technology vocabulary;
- experimentation lab;
- creative operating principle.

The content and visuals are a first architectural pass and require real-device tuning.

### Journey

V2 page exists.

Narrative:
Visual Arts → Music/Audio → Web → Software → Creative Systems.

The key idea is accumulation, not replacement. Jobs and training support the trajectory instead of defining the identity.

### Profile

V2 page exists and acts as the conventional recruiter-readable surface.

Current content:
- location and languages;
- contact;
- selected professional experience;
- education/training;
- toolkit grouped by domain;
- link to legacy résumé.

This page should remain unusually easy to scan even as the rest of the site becomes richer.

### Resume

The old Resume component remains as a compatibility/print/archive surface. It still uses legacy styling and should eventually be replaced by a proper V2 printable résumé.

## Routing

Current primary routes:
- `/home`
- `/work`
- `/journey`
- `/profile`
- `/resume`

Legacy redirects:
- `/projects` → `/work`
- `/experience` → `/journey`
- `/training` → `/journey`
- `/hard-skills` → `/profile`
- `/soft-skills` → `/profile`

## Shared implementation

`src/app/shared/site-shell/` provides the V2 identity, Nine mark, navigation and footer for Home, Work, Journey and Profile.

Global V2 tokens are in `src/styles-2-variables.scss`.

Global baseline/reset and temporary legacy résumé compatibility styles are in `src/styles-3-global.scss`.

## Known provisional / follow-up work

High priority:
- inspect all V2 pages on real desktop/mobile after deployment;
- tune typography, spacing and information density from screenshots/real-device feedback;
- replace the legacy Resume with a V2 print stylesheet / printable profile;
- refine mobile/tablet Nine projection;
- add deliberate motion/micro-interaction system;
- reintegrate i18n into the V2 content;
- add a proper theme strategy only when the dark V2 foundation is stable;
- improve metadata/SEO and accessibility audit;
- move substantial static content into typed data models where it benefits editing/i18n.

Known temporary compromise:
- Contact email remains directly in templates from the legacy project.
- English is currently the V2 authoring language; existing translation infrastructure has not yet been reintegrated into the new pages.
- No light theme yet.
- Legacy résumé styling remains globally available solely for `/resume`.

## Things not to do next

Do not:
- add HHH to the public CV;
- turn Nine into an explanatory lore section;
- invent a mapping where CV categories define canonical Pad/color identities;
- add skill bars, GitHub vanity counters or generic portfolio widgets;
- add heavy libraries before a demonstrated need;
- optimize tiny CSS size while ignoring actual asset/performance costs;
- rebuild architecture solely to look technically impressive.

## Deployment note

Production deploys from `master` using `.github/workflows/deploy.yml`.

The workflow uses serialized deployment because simultaneous FTP mirror operations previously caused failed/incomplete production deployments. Check the active workflow before stacking another production push.
