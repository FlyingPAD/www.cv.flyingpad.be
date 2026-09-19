# AGENTS.md — cv.flyingpad.be

This file is the operational contract for humans and coding agents working in this repository.

## Mandatory read order

Before modifying the project:

1. Read this file.
2. Read `docs/current-development-state.md`.
3. Read any local document referenced there that is relevant to the task.
4. Consult the canonical GPT Library / workspace only when the task touches cross-project philosophy, FlyingPAD canon, the Nine/Pad System, lore, or other shared concepts.
5. Fetch the actual repository HEAD and inspect the files affected by the task before editing.

Never assume remembered state is newer than the repository.

## Sources of truth

The project deliberately separates truth by scope.

- **Canonical GPT Library / workspace:** cross-project philosophy, lore, Nine/Pad System, FlyingPAD canon, project registry and shared production principles.
- **Repository `docs/`:** CV-specific architecture, design projection, implementation state and local decisions.
- **This file:** how to work safely and coherently in this repository.
- **README:** human-facing introduction and basic project usage.
- **Code at HEAD:** implementation truth.

Do not copy global canon into this repository merely for convenience. Reference it and store only the CV-specific projection or consequence.

A repository is an implementation node, not the owner of cross-project truth.

## Product intent

This site is a professional identity surface and a map to public work. It is not primarily a conventional developer portfolio and must not be distorted into a technical demo.

The underlying creative model is:

**Idea → intention → abstraction → system → choice of medium → architecture → production → observation → iteration.**

Core invariants:

- The idea precedes the medium or tool.
- The work/product precedes technical demonstration.
- Technology is a creative material, not the identity.
- Disciplines accumulate rather than replace one another.
- The work/universe should generally receive more emphasis than authorial ego.
- Abstraction and architecture are valuable when they serve the product.
- Humor and experimentation are welcome, but usability remains serious.
- Do not add infrastructure, patterns or dependencies merely to signal technical sophistication.

## Public ecosystem boundaries

The CV has a specific role:

- `flyingpad.be` — the product / primary public work.
- `projects.flyingpad.be` — the public creative-technical laboratory.
- `cv.flyingpad.be` — the identity map / professional router.

HHH is intentionally not surfaced or linked from the CV. Do not add HHH portfolio cards, links or explicit cross-promotion unless the canonical rule is deliberately changed.

## UX contract

**Professional by default. Personal by exploration. Narrative by discovery.**

A useful depth model:

- ~10 seconds: identity, seriousness and navigation are obvious.
- ~1 minute: the multidisciplinary trajectory becomes clear.
- ~5 minutes: personality, design decisions, subtle anomalies and deeper system language can emerge.

No essential information may depend on discovering lore or understanding the Nine system.

Recruiter-oriented information must remain directly accessible through Profile.

## Current V2 IA

Primary navigation:

- Home
- Work
- Journey
- Profile
- Contact

Work presents projects as things with reasons to exist, not as repository lists.

Journey combines professional experience and education into a chronological accumulation:
Visual Arts → Music/Audio → Web → Software → Creative Systems.

Profile is the conventional/scannable layer: experience, education, languages, toolkit, contact and résumé access.

Generic standalone Hard Skills and Soft Skills pages are retired from the V2 IA.

## Nine / color projection

The CV uses a projection of a larger canonical system. The repository does not own that canon.

Current local rules:

- Position **01 is the missing position**.
- Visible sequence begins at 02.
- Current chromatic sequence runs Red → Orange → Yellow → Green → Blue → Indigo → Violet → Black.
- Colors should feel alive and luminous against the restrained dark surface.
- `Colors are alive.` is an intentional recurring phrase and should remain understated.
- Do not invent canonical meanings for individual colors from CV content categories.
- Do not turn the Nine into a gimmick, tutorial, lore exposition or usability requirement.
- A clue does not need to identify itself as a clue.

Responsive projection:
- Desktop may express the system spatially.
- Tablet may fragment/simplify the geometry.
- Mobile should favor a sequential/rhythmic projection.
- Never force a literal 3×3 grid when the medium makes it worse.

## Visual behavior

The accepted base direction is dark, calm, precise and spacious with vivid chromatic accents.

Prefer:
- strong typography;
- precise grids and lines;
- restrained technical markers;
- subtle light/glow;
- micro-interactions that do not move layout;
- responsive composition rather than breakpoint patchwork.

Avoid:
- cyberpunk developer-portfolio clichés;
- generic SaaS/Vercel/Linear imitation;
- skill bars and vanity metrics;
- gratuitous architecture;
- hover scaling/jumping that changes layout;
- overt lore explanations;
- giant ego-first branding.

## Engineering rules

- Angular standalone architecture.
- Custom SCSS remains preferred.
- Shared visual/behavioral primitives belong in `shared/`.
- Feature-specific code belongs in feature/page folders.
- Shared design tokens belong in the global variable layer.
- Content and presentation should be separated when doing so improves maintainability; do not over-engineer small static content.
- Respect `prefers-reduced-motion`.
- Text selection must remain enabled.
- External links use `target="_blank"` with an appropriate `rel`.
- Preserve accessibility and semantic HTML.
- Responsive behavior must be considered for every visual change.

## Git and deployment discipline

`master` deploys production automatically through GitHub Actions and FTP.

Previous concurrent FTP deployments caused production failures. Therefore:

- Fetch current HEAD before every edit batch.
- Prefer one atomic multi-file commit for a logical change.
- Do not fire multiple production commits while a deployment is still running.
- Verify the workflow result before the next production push.
- Never force-update `master`.
- For experimentation that should not immediately reach production, use a feature branch.

Current production workflow serializes deployment with a concurrency group.

## Documentation discipline

Update documentation in the same logical change when architecture, IA, design invariants, routing, deployment behavior or project philosophy changes.

`docs/current-development-state.md` must stay useful as a restart document. It should say what exists now, what is provisional, what is intentionally legacy, and what the next likely work is.

Do not document transient pixel tweaks as architecture.
