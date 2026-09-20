# CV V2 Design System — Local Projection

This document records the CV-specific visual rules. It does not define canonical Nine/Pad lore.

## Direction
- dark;
- precise;
- spacious;
- restrained surfaces;
- vivid chromatic signals;
- strong editorial typography;
- subtle technical/systemic detail.

The result should feel authored rather than template-driven, while remaining professional.

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

**01–09 is reserved for this system.** Generic navigation, section indexes, timeline steps and unrelated metadata must not reuse those numbers as decoration.

Do not assign canonical semantic identities to colors based on page categories such as Software or Music.

`Colors are alive.` may appear as a quiet recurring phrase.

## Typography
The site now uses an OS-native variable sans stack rather than the old Open Sans-only declaration. This keeps loading local/instant while improving optical sizing and display rendering where supported.

Typography relies on:
- large light-weight display headings;
- compact uppercase metadata;
- small muted explanatory copy;
- generous negative space.

Any future external/custom font must be evaluated as a system-wide performance, privacy and identity decision.

## Shared primitives
Repeated low-level UI belongs in `styles-3-global.scss`:
- `.cv-chip-list` / `.cv-chip`;
- `.cv-action`, `.cv-action-copy`, `.cv-action-arrow`.

Feature CSS may control spacing and composition around them, but should not fork the core visual language.

## Interaction
Good:
- border / light changes;
- line reveals;
- small non-layout text movement;
- progressive disclosure;
- calm page transitions;
- authored enter/exit states for overlays.

Avoid:
- scale-on-hover cards;
- jumping boxes;
- effects that change surrounding layout;
- gratuitous parallax;
- animation that blocks reading.

Respect `prefers-reduced-motion`.

## Discovery
Deeper meaning may exist, but the site must never require interpretation to function. A clue may initially look like ordinary design. Do not label it as lore, secret or mystery.

## Responsive projection
Desktop can use spatial composition. Tablet should simplify rather than mechanically shrink. Mobile should favor sequence, rhythm and reading order.

## Current status
Dark V2 is structurally consolidated. Current work is real-device tuning, print validation and later full-site localization.
