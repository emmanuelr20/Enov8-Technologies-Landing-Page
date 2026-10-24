# Enov8 website architecture

This repository uses the Next.js App Router. The architecture separates route entry points, canonical content, reusable UI, page compositions, configuration, and static assets while preserving the existing routes and behavior.

## Directory map

```text
app/              Route pages, root layout, route-level compositions
components/       Reusable UI and feature components
  ui/              Small accessible primitives (Button, Card, Container, Section, etc.)
lib/
  content/        Canonical company, navigation, partner, review, and form data
  servicesData.js Canonical service catalog and service detail content
  seoMetadata.js  Metadata builders derived from the service catalog
public/            Brand, service, section, partner, video, and document assets
docs/              Project architecture and implementation guidance
```

## Content rules

- Keep factual company, contact, partner, review, and navigation data in `lib/content/`.
- Keep service IDs, titles, descriptions, imagery, and detail content in `lib/servicesData.js`.
- Consume `servicesList` for ordered UI collections. Do not create a second service array in a route or component.
- Preserve unverified claims as existing content until an approved source is available; do not add testimonials, metrics, certifications, or partner claims from inference.

## Service routes

The services index, navbar mega menu, service sidebar, sitemap, and SEO metadata all derive their service identity from `servicesData`/`servicesList`. To add a service:

1. Add one stable slug entry to `lib/servicesData.js`.
2. Add its route page under `app/services/<slug>/page.jsx` using `ServicePageTemplate`.
3. Add only route-specific composition content to that page; keep shared title, summary, image, and detail blocks in the catalog.
4. Verify the service index, navigation, sitemap, metadata, and build.

## Design system

Global semantic tokens live in `app/globals.css`. They cover surfaces, text, borders, focus, brand accents, radii, section spacing, container width, and motion timing. Prefer semantic utilities and the primitives in `components/ui/` over raw colors or one-off layout patterns.

`Container`, `Section`, `SectionHeading`, and `Badge` provide the initial composition vocabulary. They are intentionally small and should only grow when a repeated interaction or layout pattern is proven.

## Fonts

DM Sans is self-hosted from `public/fonts/` and loaded through `next/font/local` in `app/layout.jsx`. Only the weights currently used by the foundation (400, 500, and 700) are bundled. Do not reintroduce `next/font/google` or runtime font fetching.

## Configuration and utilities

- `next.config.mjs` is the canonical Next.js configuration.
- `postcss.config.mjs` owns Tailwind CSS processing.
- `tailwind.config.js` remains available for compatibility but the active token layer is CSS-first Tailwind v4 in `app/globals.css`.
- `lib/utils.js` contains shared class-name utilities.

## Future pages and components

Keep route files focused on composition and route metadata. Put reusable behavior in `components/`, canonical copy/data in `lib/content/`, and cross-cutting helpers in `lib/`. Before adding a component, search `components/ui/` and existing feature folders for an equivalent primitive. Preserve semantic HTML, keyboard access, visible focus, and reduced-motion behavior for every interactive addition.
