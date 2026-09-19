# cv.flyingpad.be

Personal CV and professional identity site for Tony Van Langenhove.

**Live:** https://cv.flyingpad.be

This repository is the implementation of the CV surface. It presents a multidisciplinary trajectory across visual arts, music and audio, web, software and creative systems. The site is deliberately not a conventional developer portfolio: technology is presented as one medium among others and as a consequence of the work rather than the identity itself.

## Current information architecture

- **Home** — concise identity and orientation.
- **Work** — selected public work, led by FlyingPAD, plus the public experimentation lab.
- **Journey** — the trajectory as an accumulation of creative languages rather than a sequence of career replacements.
- **Profile** — conventional, scannable professional information.
- **Resume** — legacy/print-oriented résumé surface retained during the V2 migration.

Legacy routes redirect into the V2 information architecture where possible.

## Development

```bash
npm ci
npm start
```

Production build:

```bash
npm run build -- --configuration production
```

The project is an Angular standalone application with custom SCSS. Production deployment is handled by GitHub Actions on pushes to `master`.

## Documentation

Contributors and coding agents must read **`AGENTS.md` first**.

Repository-local documentation lives in `docs/`:

1. `docs/current-development-state.md`
2. `docs/architecture.md`
3. `docs/design-system.md`

The broader FlyingPAD / Nine / cross-project canon is intentionally **not duplicated in this repository**. That material belongs to the GPT Library / canonical workspace. This repository only records the CV-specific projection and implementation decisions.

## Principle

> The idea comes first. The medium follows.

The CV should be professional by default, personal by exploration, and narrative by discovery.
