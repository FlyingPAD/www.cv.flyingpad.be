# CV V2 Architecture

## Role of the application

`cv.flyingpad.be` is the identity and routing surface of the public ecosystem. It should explain the person and make the work reachable without trying to become the work itself.

The site is intentionally smaller in ambition than FlyingPAD as a product and freer of experimentation than `projects.flyingpad.be`.

## Information architecture

### Home
A short orientation layer. It answers:
- Who is this?
- What kind of things are created?
- Where should I go next?

It should work in roughly ten seconds.

### Work
Selected public work organized around purpose and experience rather than implementation trivia.

Preferred hierarchy:
**Purpose → Product → Media/Experience → System → Architecture → Technology**

### Journey
A narrative model of accumulated disciplines. Education and employment are evidence inside the trajectory, not isolated identity categories.

### Profile
The conventional professional projection. It must be scannable and useful without requiring the visitor to engage with the narrative or deeper design language.

### Resume
A printable/exportable professional artifact. The current implementation is legacy and scheduled for replacement.

## Angular structure

Current V2 direction:

```text
src/app/
  shared/
    site-shell/
  pages/
    home/
    work/
    journey/
    profile/
    resume/   # live localized + printable professional artifact
```

Use `shared/` for genuinely reusable UI/behavior. Avoid turning every visual fragment into a component without a reuse or responsibility boundary.

As the content grows, prefer typed data structures for timeline events, projects and toolkit groups rather than large duplicated template fragments.

## Styling

Global responsibilities:
- design tokens;
- baseline document behavior;
- cross-page accessibility behavior;
- temporary isolated legacy compatibility.

Component responsibilities:
- page composition;
- local responsive behavior;
- feature-specific presentation.

The target is a coherent design system, not one enormous global stylesheet.

## Responsive model

Responsive design is a projection problem, not a shrinking problem.

The same conceptual system can materialize differently by medium:
- desktop: spatial;
- tablet: fragmented/simplified;
- mobile: sequential/rhythmic.

Content parity matters more than geometry parity.

No essential navigation or professional information may be hidden behind decorative interaction.

## Cross-project architecture

The repository consumes shared concepts but does not own them.

Global/canonical concepts belong to the GPT Library / workspace. Local documents should record only:
- how a concept is projected here;
- implementation constraints;
- local decisions;
- current state.

This prevents canon drift between FlyingPAD, HHH, CV and future surfaces.

## Deployment architecture

Push to `master` → GitHub Actions → Angular production build → FTP deployment.

The workflow is serialized. Treat production commits as deployment events, not merely source-control bookkeeping.
