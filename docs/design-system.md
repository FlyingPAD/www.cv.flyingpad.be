# CV V2 Design System — Local Projection

This document records the CV-specific visual rules. It does not define the canonical Nine/Pad lore.

## Direction

The accepted base direction is:
- dark;
- precise;
- spacious;
- restrained surfaces;
- vivid chromatic signals;
- strong typography;
- subtle technical/systemic detail.

The result should feel authored rather than template-driven, but remain professional.

## Core palette

Surface:
- background: `#071014`
- primary text: `#e9eef0`
- soft text: `#b9c4c8`
- muted text: `#8d9ba1`
- structural lines: translucent cool white

Chromatic accents:
- Red `#ff3b38`
- Orange `#ff9f1c`
- Yellow `#ffe14a`
- Green `#43dc78`
- Blue `#35b9ff`
- Indigo `#656dff`
- Violet `#c05cff`
- Black `#050708`

These values are implementation tokens, not a canonical definition of the global lore palette.

## Nine projection

For the current CV projection:
- 01 is absent/missing.
- 02–09 are visible.
- the visible chromatic sequence ends in Black.
- the absence should be perceived before it is explained, if it is ever explained at all.

Do not assign canonical semantic identities to the colors based on page categories such as Software or Music. Those categories are presentation content, not definitions of the underlying system.

`Colors are alive.` may appear as a quiet recurring phrase.

## Typography

Current implementation uses the existing Open Sans dependency while the V2 composition is stabilized.

Typography relies on:
- large, light-weight display headings;
- compact uppercase metadata;
- small muted explanatory copy;
- generous negative space.

A future font change should be evaluated as a system-wide design decision, not page-by-page decoration.

## Interaction

Good:
- border changes;
- light/glow changes;
- line reveals;
- subtle text shifts that do not alter layout;
- progressive disclosure;
- calm transitions.

Avoid:
- scale-on-hover cards;
- jumping boxes;
- effects that change surrounding layout;
- gratuitous parallax;
- animation that blocks reading.

Respect `prefers-reduced-motion`.

## Discovery

The visual system may contain deeper meaning, but the site must never require interpretation to function.

A lore clue may initially look like ordinary design.

Avoid labels such as “lore”, “secret”, “mystery” or explanatory callouts that announce discovery before the visitor has discovered anything.

## Responsive projection

Desktop can use spatial Nine-derived composition.

Tablet should simplify or fragment the geometry instead of mechanically preserving desktop layout.

Mobile should favor sequence, rhythm and ordering. A vertical 01→09 reading can carry the idea more naturally than a tiny 3×3 grid.

## Current status

The base DA is approved, but the system is still in visual tuning. Work, Journey and Profile were implemented as the first full architectural pass and require real-device feedback before their proportions are considered stable.
