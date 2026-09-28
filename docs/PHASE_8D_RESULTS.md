# Phase 8D — performance results

## Scope and method

Baseline was recorded before application edits in [PHASE_8D_BASELINE.md](PHASE_8D_BASELINE.md). Production build: Next.js 16.3.5, `pnpm run build` and `pnpm start --port 3100`. Chromium headless 1.64.0-alpha Playwright runtime already installed outside the project; no new dependencies. Fresh browser contexts at 390×900 / DPR 2 and 1440×900 / DPR 1, normal Motion, 4× CPU throttling. CDP requested 10 Mbps / 40 ms, but localhost timings show the latency was not consistently applied; treat these as local lab observations, not calibrated mobile-network or Lighthouse scores.

Each case has three runs. Timing comparisons below use the median of the last **two image-cache-warm runs** per case (two-sample median is their mean). First runs are retained in raw evidence but excluded from improvement claims: baseline included cold image optimization, whereas unchanged variants remained cached after rebuilding. Fresh browser caches do not clear the server image cache. The supplied 2.70s development/soft-navigation screenshot is not comparable to these production hard navigations.

## Measured results

Bytes below are compressed/encoded response **body bytes**, not source-file sizes. Image totals include the navbar SVG logo. Scripts include browser-initiated route prefetch scripts and the existing consent manager. Full Resource Timing transfer sizes (body plus reported headers) are also listed for images. All observed initial-load and scroll CLS values are zero unless explicitly stated in validation.

| Route | Width | Warm LCP ms, before → after | Warm TTFB ms, before → after | JS body bytes, before → after | Image body bytes, before → after | Image requests |
|---|---:|---:|---:|---:|---:|---:|
| /services/digital-signage | 390 | 296.0 → 290.0 | 5.7 → 8.1 | 245269 → 229079 | 36226 → 39200 | 3 → 3 |
| /services/digital-signage | 1440 | 328.0 → 342.0 | 5.1 → 7.3 | 244802 → 229079 | 91374 → 91374 | 3 → 3 |
| /services/security | 390 | 270.0 → 282.0 | 4.4 → 5.4 | 245269 → 229078 | 22192 → 24585 | 3 → 3 |
| /services/security | 1440 | 304.0 → 312.0 | 4.6 → 5.0 | 244802 → 229078 | 54730 → 54730 | 3 → 3 |
| /services | 390 | 278.0 → 284.0 | 5.5 → 5.7 | 234438 → 226019 | 16169 → 16169 | 2 → 2 |
| /services | 1440 | 318.0 → 328.0 | 4.8 → 6.6 | 234438 → 226019 | 31887 → 31887 | 2 → 2 |
| /about | 390 | 296.0 → 292.0 | 5.1 → 6.6 | 262017 → 253460 | 16169 → 16169 | 2 → 2 |
| /about | 1440 | 328.0 → 340.0 | 5.7 → 6.7 | 262017 → 253460 | 31887 → 31887 | 2 → 2 |

**No reliable LCP or CPU-time improvement is claimed.** Warm LCP changes are small and mixed; several desktop samples increased. TTFB is locally small but also mixed. The measured gains are lower JavaScript transfer, fewer speculative requests, lower combined document/resource payload, correctly sized images, and a losslessly smaller modal background.

| Route | Width | Image transferSize bytes, before → after | Largest image body bytes, before → after | Document + resource body bytes, before → after | All resource requests, before → after |
|---|---:|---:|---:|---:|---:|
| /services/digital-signage | 390 | 37126 → 40100 | 24828 → 24828 | 403393 → 375882 | 68 → 28 |
| /services/digital-signage | 1440 | 92274 → 92274 | 66438 → 66438 | 452192 → 428056 | 59 → 28 |
| /services/security | 390 | 23092 → 25485 | 11236 → 12747 | 389311 → 361164 | 68 → 28 |
| /services/security | 1440 | 55630 → 55630 | 32936 → 32936 | 415500 → 391309 | 59 → 28 |
| /services | 390 | 16769 → 16769 | 15567 → 15567 | 348164 → 344071 | 26 → 23 |
| /services | 1440 | 32487 → 32487 | 31285 → 31285 | 363882 → 359789 | 26 → 23 |
| /about | 390 | 16769 → 16769 | 15567 → 15567 | 379313 → 375970 | 28 → 25 |
| /about | 1440 | 32487 → 32487 | 31285 → 31285 | 395031 → 391688 | 28 → 25 |

Combined totals are for the same fixed observation window, including background prefetch. Server-rendered HTML/RSC grew as expected; the combined total still fell in every sampled case. These are not whole-site or whole-session bandwidth guarantees.

### Script execution / hydration limits

CDP ScriptDuration below covers all scripting in the observation window, including Motion, route prefetch, consent and hydration. It **does not isolate React hydration**, so it cannot substantiate a hydration-speed claim.

| Route | Width | Warm median ScriptDuration ms, before → after |
|---|---:|---:|
| /services/digital-signage | 390 | 463.6 → 692.9 |
| /services/digital-signage | 1440 | 548.7 → 561.0 |
| /services/security | 390 | 513.9 → 476.9 |
| /services/security | 1440 | 410.1 → 472.6 |
| /services | 390 | 457.4 → 477.0 |
| /services | 1440 | 459.3 → 493.8 |
| /about | 390 | 516.8 → 561.5 |
| /about | 1440 | 501.6 → 530.1 |

## Bottlenecks and changes

- **Service content:** removed the client boundary from the shared template. Canonical service lookup, detail-image deduplication, related-service selection, static icons, content and JSON-LD construction now execute on the server. All routes remain statically prerendered. Complete descriptions, headings, benefits, sidebar and related cards remain in HTML. The former client chunk containing the full service dataset and footer was 16,836 minified bytes; checks of the final client chunks find none of that static prose. JSON-LD now uses escaped native script tags in initial HTML, following the installed Next.js guide; metadata values are unchanged.
- **Speculative work:** baseline Digital Signage mobile made 29 RSC prefetch requests / 39,749 body bytes, including every service before selection. Only sidebar Links now have `prefetch={false}`. This preserves client navigation; a not-yet-cached route is fetched on click. Breadcrumb, related-card, index-card and navbar prefetch were not changed. Afterward this sample has 5 RSC requests / 20490 body bytes.
- **Shared footer / Services index:** footer is static server-rendered markup rather than a memoized client component. This removes service data and static footer work from every target page. Services index already renders icon cards on the server, with no card-image requests; no card design, order, data or page layout changes were needed.
- **About:** static portrait/card/biography rendering moved to `TeamMemberCard`, supplied as server-rendered children to the existing interactive carousel. All three slides, full biographies, LinkedIn links, keyboard support and controls remain. The carousel still owns Swiper/state; no lazy mounting or placeholder content was introduced.
- **Responsive images:** detail sizing now follows the 1360px capped container, responsive padding, 288px sidebar, 64px gap, figure borders and secondary two-column grid. Team sizes follow the actual single-column layout until 1280px and cap at 478px in the two-column layout. Zoho logo sizing follows its 176/224px boxes. Image geometry, crop/object-fit, source paths, quality and hero preloads remain unchanged. Below-fold images retain native lazy loading.
- **Actual source asset:** losslessly re-encoded `public/sections/transform-background.png` in place: **847,923 → 737,441 bytes (110,482 bytes / 13.03% saved)**. Decoded raw pixels are byte-identical; dimensions remain 1254×1254. References were searched before replacement. It is a consultation-modal background also reused on home; this does not improve initial target-page LCP. No asset was deleted. No service/team photograph was replaced or resized.
- **Font/CSS:** no changes. Three local DM Sans WOFF2 weights load once, 42,852 body bytes combined; display swap, no remote font request. One canonical globals import, plus existing component styles. No performance.css, migration or new font system.
- **Motion/navbar:** no performance edits to MotionEntrance, timing, observers, reduced-motion CSS, navbar or header. Hero images sit outside the animated wrappers and are discoverable from the initial HTML. Motion still hydrates and runs the existing entrances; its one-shot viewport observers do not force image loading.

## Source asset audit

Every service/team raster is already WebP. Current Chromium negotiates AVIF from the configured Next optimizer; no format/config changes were necessary. High-DPR/wide displays justify keeping the existing source resolution. Lossless WebP re-encoding trials on the shared hero, signage hero, hardware hero and founder portrait made them substantially larger, so those originals were retained. The optimizer supplies smaller responsive variants rather than transferring the originals. No exact duplicate file hashes were found across services/team/sections/brand/partners/fonts. Duplicate hero/detail entries in canonical data are already filtered before rendering and remain filtered.

| Source asset under public/ | Dimensions | Source bytes before → after | Format / use |
|---|---:|---:|---|
| services/ai1.webp | 2880×1620 | 153504 → 153504 | webp |
| services/ai2.webp | 1800×1200 | 126626 → 126626 | webp |
| services/business-automation.webp | 1800×1200 | 104118 → 104118 | webp |
| services/business1.webp | 2880×1922 | 178702 → 178702 | webp |
| services/consulting.webp | 2880×1921 | 156922 → 156922 | webp |
| services/consulting1.webp | 1800×1013 | 91202 → 91202 | webp |
| services/development1.webp | 2000×1333 | 113562 → 113562 | webp |
| services/development2.webp | 1800×1013 | 81964 → 81964 | webp |
| services/dms1.webp | 2880×1620 | 188096 → 188096 | webp |
| services/erp1.webp | 2880×1920 | 180808 → 180808 | webp |
| services/hardware1.webp | 2880×1920 | 369398 → 369398 | webp |
| services/hardware2.webp | 1800×1013 | 69068 → 69068 | webp |
| services/network1.webp | 2880×1600 | 246994 → 246994 | webp |
| services/security.webp | 1800×1200 | 75270 → 75270 | webp |
| services/security1.webp | 2880×1526 | 153796 → 153796 | webp |
| services/signage.webp | 1800×1200 | 94722 → 94722 | webp |
| services/signage1.webp | 2880×1970 | 462164 → 462164 | webp |
| services/verification1.webp | 2880×1920 | 159990 → 159990 | webp |
| services/verification2.webp | 1800×1200 | 79608 → 79608 | webp |
| services/zoho1.webp | 2880×1920 | 185546 → 185546 | webp |
| services/zohoerp.webp | 1080×670 | 21466 → 21466 | webp |
| team/Co-Founder-CTO.webp | 1080×1080 | 19168 → 19168 | webp |
| team/Executive-Director.webp | 896×1008 | 44166 → 44166 | webp |
| team/Founder-CEO.webp | 1254×1254 | 106994 → 106994 | webp |
| sections/servicebackground.webp | 4000×3000 | 163724 → 163724 | webp |
| sections/transform-background.png | 1254×1254 | 847923 → 737441 | png |

Other audited assets: `sections/review.webp` (5824×3264) is not used by these routes; no change. The large brand PNG icon is not requested in the recorded page traces (SVG is used); no unrelated branding changes. Partner SVGs remain vector assets.

Full per-image requested URLs, responsive candidates, rendered rectangles, formats, timings and initial-versus-scrolled requests are in the raw evidence. Primary full-width hero images use accurate 100vw sizing and preload. Supporting figures and portraits are lazy; a browser can fetch them before scrolling when they are near the viewport. There is no new eager below-fold content or duplicate asset URL loading.

### Image-sizing results after scrolling

These totals include all images fetched by the full-page scroll pass, including the logo. All image rectangles and object-fit values match before/after at all 112 route/width pairs.

| Page / width | Image body bytes before → after | Interpretation |
|---|---:|---|
| Digital Signage / 1920 | 131732 → 126998 | Supporting image candidate 1200 → 1080 for an unchanged 878px box |
| Security / 1920 | 68006 → 64768 | Same capped supporting-image correction |
| About / 390 | 71582 → 63629 | Portrait candidates 828 → 750 for 340px boxes at DPR 2 |
| About / 425 | 102131 → 69947 | Portrait candidates 1080 → 750 for 375px boxes at DPR 2 |
| About / 768 | 32717 → 63629 | Corrects undersized 384px portraits to 750px for 670px boxes |
| About / 1024 | 39035 → 102131 | Corrects undersized 384px portraits to 1080px for 894px boxes |
| About / 1440 | 68941 → 68941 | Candidate unchanged; image box remains 478px |
| About / 1920 | 92981 → 82575 | Portrait candidates 750 → 640 for unchanged 478px boxes |

Mobile service supporting images at 375/390px similarly become slightly larger downloads because the previous `sizes` understated the actual box. This restores appropriate sharpness rather than claiming savings from blurry images. Visual inspection of paired tablet portraits confirms improved detail with identical crop and dimensions.

## Validation and visual regression

- `pnpm run lint` — passed.
- `pnpm run build` — passed; all 14 target pages remain static. Build emits the existing Node `module.register()` deprecation notice; no build errors.
- `git diff --check` — passed.
- There were no existing repository Playwright tests/configuration. Used the already-installed Playwright runtime for this task without installing dependencies.
- **112 before + 112 after route/width checks:** all 12 service routes plus Services and About, each at **320, 375, 390, 425, 768, 1024, 1440, 1920px**. Viewport height 900px; DPR 2 below 768px, DPR 1 otherwise. Additional normal/reduced-motion interaction checks at 390 and 1440px.
- Routes: `/services/digital-signage`, `/services/automation`, `/services/onboarding`, `/services/security`, `/services/software-dev`, `/services/consulting`, `/services/erp-deployment`, `/services/ai-deployment`, `/services/networking`, `/services/zoho-partner`, `/services/document-management`, `/services/hardware-procurement`, `/services`, `/about`. Both Digital Signage and Security exercise hero plus supporting imagery. Zoho also exercises its partner logo.
- All after checks: no horizontal document overflow, broken image, image geometry/object-fit change, observed layout shift, hydration error, console warning, failed request or preload warning. Initial and scroll CLS remained 0. No duplicate image URLs were requested in the full-scroll traces.
- Complete main text, headings and structured-data values match before/after. Title, canonical and metadata tags match for all 14 routes. Hidden cookie-preferences headings are excluded from page-heading comparison; one baseline CDN failure otherwise produced an unrelated extra hidden heading in the after snapshot.
- Carousel next/previous buttons, end-state disabling, keyboard arrows and pointer drag passed at 390 and 1440px with normal and reduced motion. Consultation open/Escape-close and service-sidebar client navigation passed. Basic accessibility checks: page h1, image alt attributes, duplicate IDs; all reduced-motion entrance wrappers visible. This is not a full axe/WCAG audit or physical-device test.
- **32 paired full-page screenshots:** Services index has zero changed pixels in all eight comparisons at pixelmatch threshold 0.1. Digital Signage/Security differ by at most 0.0145% of pixels, confined to different image candidates; geometry and content match. About matches exactly at 320, 375 and 1440px; other image-candidate differences are at most 0.123% apart from the independent layout edit described below. Paired image crops were visually inspected; no new distortion or clipping was introduced.

### Independent edits preserved

The working tree initially contained an unrelated `skills-lock.json` modification. During this work, separate edits appeared in `app/about/page.jsx` (vision/mission grid breakpoint `md` → `lg`) and `app/layouts/Navbar.jsx` (`shadow-3xl` added). These were not made or reverted by this phase. The About breakpoint edit changes the 768px screenshot height from 6492 to 6658px. Therefore the entire working tree cannot be described as pixel-identical at that width; the performance changes themselves preserve layout, content, image boxes and cropping. Navbar and Motion source were not edited by this phase.

### Measurement limitations and remaining costs

- Cold Next image optimization/decode remains: the first Digital Signage mobile LCP was 1652ms with a cache MISS; warm baseline runs were 288/304ms. Its cold hero request spent about 400.5ms before first response byte, with additional render/decode delay. This does not prove the source of the user's original 2.70s soft-navigation/dev reading.
- Motion, shared navbar/modal UI, consent and Swiper still require client JavaScript. CPU measurements were mixed and often higher after the change; no hydration or scripting-speed gain is asserted. Network reductions are the demonstrated improvement.
- The external Silktide stylesheet is render-blocking, and its script runs after hydration. One baseline Hardware Procurement desktop pass encountered transient jsDelivr `ERR_CONNECTION_CLOSED` for CSS/JS; final after passes had no failures. Two navigation attempts timed out during the large audit and were resumed from saved checkpoints. No application change was made to consent behavior.
- Native lazy loading may fetch near-viewport figures/portraits and adjacent carousel slides early. This is not eager loading of the entire page. No meaningful content is hidden or moved behind client fetching.
- Disabling sidebar prefetch trades speculative bandwidth for a request on first click. Other link prefetch, cache policy and image format configuration remain unchanged.
- These local runs do not establish field Core Web Vitals, production CDN latency, physical-mobile performance or a Lighthouse/PageSpeed score.

## Exact files changed by this phase

1. `components/ServicePageTemplate.jsx` — server boundary, static JSON-LD, sidebar prefetch, responsive image hints.
2. `app/layouts/Footer.jsx` — static server-rendered footer.
3. `components/about/TeamCarousel.jsx` — interactive shell receives server-rendered slide children.
4. `components/about/TeamSection.jsx` — composes complete team cards on the server.
5. `components/about/TeamMemberCard.jsx` — new static card component, corrected portrait sizes.
6. `public/sections/transform-background.png` — lossless in-place re-encoding, same pixels/dimensions. **No assets deleted.**
7. `docs/PHASE_8D_BASELINE.md` — pre-change baseline and identified causes.
8. `docs/PHASE_8D_RESULTS.md` — this complete report.

No dependency, route, canonical service data, font, global CSS, Next config, Motion or navbar changes were made by this phase.

## Evidence and reproduction

Local evidence directory: `/tmp/enov8-phase8d/` (temporary; retain elsewhere if needed). It contains `before-perf.json`, `after-perf.json`, `before-responsive.json`, `after-responsive.json`, `assets.json`, `comparison.json`, `seo-comparison.json`, `pixel-comparison.json`, `interactions.json`, 64 full-page PNGs, and paired image crops. Original modal PNG retained there as `transform-background-original.png`.

The task-specific audit scripts are in the same directory: `audit.cjs`, `interactions.cjs`, `compare.cjs`, `pixels.cjs`. The audit uses the pre-existing `/Users/user/.npm/_npx/9833c18b2d85bc59/node_modules/playwright` runtime. Start the production server with `pnpm start --port 3100`, then use `node /tmp/enov8-phase8d/audit.cjs LABEL perf` or `... LABEL responsive`. Use a new LABEL for a fresh responsive run; it resumes saved route/width pairs. Timing runs should run alone, without a concurrent build/other audit. These scripts are validation artifacts, not new project dependencies.

Framework references consulted through Context7 and the installed 16.3.5 docs: [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components), [Image](https://nextjs.org/docs/app/api-reference/components/image), [Link prefetch](https://nextjs.org/docs/app/api-reference/components/link#prefetch), [Font](https://nextjs.org/docs/app/api-reference/components/font), and [JSON-LD](https://nextjs.org/docs/app/guides/json-ld). Installed docs were authoritative for exact version behavior.
