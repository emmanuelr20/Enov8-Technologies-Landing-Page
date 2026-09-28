# Phase 8D — baseline (before application changes)

Measured against `pnpm run build` / `pnpm start --port 3100`, Next.js 16.3.5, Chromium headless, 390×900 @2x and 1440×900 @1x. Fresh browser context for every load, normal Motion, 4× CPU slowdown. CDP network settings requested 10 Mbps / 40 ms; observed localhost TTFB is below 40 ms, so these are local lab measurements, not a calibrated mobile-network or Lighthouse score. Three sequential loads per case. First requests can populate Next image cache; warmed loads must be distinguished. No application code has been changed.

| Route | Width | LCP median / first (ms) | CLS | TTFB median (ms) | Image bodies (bytes/count) | JS bodies (bytes/count) |
|---|---:|---:|---:|---:|---:|---:|
| /services/digital-signage | 390 | 304 / 1652 | 0 | 6.3 | 36226 / 3 | 245269 / 29 |
| /services/digital-signage | 1440 | 328 / 976 | 0 | 5.1 | 91374 / 3 | 244802 / 26 |
| /services/security | 390 | 272 / 292 | 0 | 4.6 | 22192 / 3 | 245269 / 29 |
| /services/security | 1440 | 304 / 520 | 0 | 4.6 | 54730 / 3 | 244802 / 26 |
| /services | 390 | 284 / 380 | 0 | 5.3 | 16169 / 2 | 234438 / 14 |
| /services | 1440 | 320 / 548 | 0 | 4.8 | 31887 / 2 | 234438 / 14 |
| /about | 390 | 308 / 308 | 0 | 5.5 | 16169 / 2 | 262017 / 15 |
| /about | 1440 | 320 / 320 | 0 | 5.8 | 31887 / 2 | 262017 / 15 |

## Verified findings

- All 12 services, Services and About are statically prerendered. No service API fetching is present. However, `ServicePageTemplate` and the entirely static Footer are client modules: the complete 12-service dataset is shipped in a shared 16,836-byte minified chunk and transformed again in the browser. Both can render on the server while keeping Motion and modal client islands.
- LCP is the hero image in these samples. The Digital Signage first mobile hero is an image-cache MISS (400.5 ms request-to-first-byte), followed by decode/render delay; warmed variants are HITs. The screenshot’s development/soft-navigation 2.70s cannot be equated to these hard-navigation production results.
- Service detail `sizes` underestimates mobile width (294 declared vs 340 rendered at 390px) and overestimates uncapped desktop width (1152 declared vs 878 rendered at 1920px; shared container caps at 1360px). Exact dimensions are captured in raw browser output. Formula must follow container padding, 288px sidebar, 64px gap and borders.
- Services cards contain icons, not photographs. Only its full-width hero needs image prioritization; the page already renders on the server.
- About hero uses the same background. Team portraits are lazy and absent from initial requests. Portrait `sizes` incorrectly declares 34vw from 768px even though the layout stays one column until 1280px. Static bios/cards currently render within the interactive carousel client module.
- Hero images are correctly preloaded; supporting images are lazy. Chrome may fetch near-viewport lazy supporting images before scrolling, which is normal native lazy-loading behavior. Motion does not control image fetching. No duplicate image URL requests or browser errors observed in performance runs.
- All service/team image sources are WebP; service hero widths are mostly 2880, supporting images mostly 1800, team 896–1254, shared background 4000×3000 / 163,724 bytes. Browser delivery negotiates AVIF on this installed version. Existing source sizes support high-DPR/wide displays; do not blindly downsize them. Lossless WebP re-encoding trials on the background, signage hero, hardware hero and founder portrait increased size substantially (no replacements made). No exact duplicate assets in services/team/sections/brand/partners/fonts.
- DM Sans loads three local WOFF2 files once, 42,852 body bytes total; font-display swap, no remote font request, no duplicate declarations/imports. Globals remains the sole application CSS entry.
- Motion entrances use one-shot observers, with hero images outside the animated wrappers. Reduced motion is handled by existing CSS. Navbar and Motion system remain outside the edit scope.

## Planned changes from evidence

1. Server-render the shared service template and static footer, preserving all markup, content, metadata and interactive islands.
2. Correct supporting-image and team-image responsive sizes without changing geometry or loading priority.
3. Server-render the static team cards through children slots in the existing carousel, preserving all slides and interactions.
4. Keep existing font, CSS, image format config and entrance behavior unless further measurements justify changes.

Raw measurements, asset inventory and screenshots: `/tmp/enov8-phase8d/`. Final report will record the complete responsive results and before/after comparison.

### Additional baseline network finding

The recorded Digital Signage mobile trace contains 29 route-prefetch requests (39,749 encoded body bytes), including every service before any navigation. These are framework prefetches, not application data fetching. The sidebar's 12 Links will opt out of prefetch to avoid downloading all routes before selection; links remain normal client-side navigation, but an unvisited target is fetched on click. Breadcrumb, related-card, index-card and navbar prefetch behavior remains unchanged.
