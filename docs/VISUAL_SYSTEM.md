# Enov8 visual system

This document describes the global visual foundation inherited by every route. It is intentionally separate from page-specific composition and content decisions.

## Typography

DM Sans is the sole primary typeface and is loaded locally through `next/font/local` in `app/layout.jsx`. The foundation loads weights 400, 500, and 700.

Reusable type classes live in `app/globals.css`:

- `.type-hero` — large hero/display copy
- `.type-display` — large editorial/display heading
- `.type-h1`, `.type-h2`, `.type-h3`, `.type-h4` — heading levels
- `.type-body-lg`, `.type-body` — reading copy
- `.type-small`, `.type-label`, `.type-caption` — supporting UI text

Global heading elements inherit a restrained responsive scale. Body copy targets a readable measure of roughly 65–70 characters.

## Colors

Use semantic tokens instead of raw color values:

- `background` / `foreground` — page canvas and primary text
- `surface` / `surface-elevated` — cards, panels, and overlays
- `muted` / `muted-foreground` — secondary surfaces and supporting copy
- `border` / `input` — control and structural boundaries
- `brand` / `brand-hover` / `on-brand` — Enov8 blue actions and emphasis
- `ring` / `focus` — keyboard focus indication
- `destructive`, `success`, and `warning` — status meanings

The existing Enov8 blue is preserved as the brand accent. Neutral surfaces and restrained elevation provide hierarchy; decorative gradients and ornamental patterns are not part of the foundation.

## Containers and spacing

The shared content width is `--container-content` (`80rem`). `components/ui/container.jsx` provides the standard responsive gutters. Section rhythm uses `--space-section`, while layout-level gaps should use Tailwind spacing tokens rather than one-off pixel values.

## Buttons

`components/ui/button.jsx` is the shared button primitive. Supported intent variants include primary/default, secondary, outline, ghost, destructive, background, and text. The system includes visible focus, disabled, loading, icon, and keyboard states. Loading buttons expose `aria-busy` and disable interaction.

## Cards and surfaces

`components/ui/card.jsx` uses a consistent rounded surface, subtle border, and soft shadow. Prefer one meaningful elevation treatment per surface. Avoid repeated accent borders, nested cards, heavy outlines, or decorative grid patterns.

## Forms

`components/ui/field.jsx` provides `Input`, `Textarea`, `Select`, and `Label`. Fields use semantic labels, readable contrast, visible focus rings, disabled states, and responsive sizing. Validation and submission feedback should identify the problem and the recovery action.

## Dialogs and navigation

Radix Dialog remains the source of truth for focus trapping, ARIA labelling, escape-to-close, and focus restoration. The consultation modal includes an explicit title, description, labelled close action, and reduced-motion-compatible transitions. Mobile navigation exposes `aria-expanded`, `aria-controls`, and a labelled dialog surface.

## Motion

Motion tokens are centralized in `app/globals.css`:

- `--motion-fast`
- `--motion-standard`
- `--motion-slow`
- `--motion-ease`

Motion should clarify state changes or hierarchy. Global `prefers-reduced-motion: reduce` rules remove non-essential animation and smooth scrolling.
