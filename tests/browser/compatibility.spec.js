import { expect, test } from "@playwright/test";

const coreRoutes = [
  "/",
  "/services",
  "/services/ai-deployment",
  "/about",
  "/privacy-policy",
  "/terms-of-service",
  "/accessibility",
];

const serviceRoutes = [
  "/services/digital-signage",
  "/services/automation",
  "/services/onboarding",
  "/services/software-dev",
  "/services/security",
  "/services/consulting",
  "/services/erp-deployment",
  "/services/ai-deployment",
  "/services/networking",
  "/services/zoho-partner",
  "/services/document-management",
  "/services/hardware-procurement",
];

const consentCheckedPages = new WeakSet();

const visit = async (page, route = "/") => {
  const response = await page.goto(route, { waitUntil: "domcontentloaded" });

  if (!consentCheckedPages.has(page)) {
    await page.waitForTimeout(1000);
    const rejectCookies = page.getByRole("button", {
      name: "Reject all non-essential cookies",
    });

    if (await rejectCookies.isVisible()) {
      await rejectCookies.click();
    }
    consentCheckedPages.add(page);
  }

  return response;
};

test.beforeEach(async ({ page }) => {
  page.on("pageerror", (error) => {
    console.error(`BROWSER_PAGE_ERROR ${error.message}`);
  });
  page.on("requestfailed", (request) => {
    console.error(
      `BROWSER_REQUEST_FAILED ${request.url()} ${request.failure()?.errorText ?? ""}`,
    );
  });
});

test("records the browser engine and relevant feature support", async ({
  page,
  browser,
}) => {
  await visit(page);
  const features = await page.evaluate(() => ({
    userAgent: navigator.userAgent,
    css: {
      oklch: CSS.supports("color", "oklch(0.5 0.1 200)"),
      colorMix: CSS.supports(
        "color",
        "color-mix(in oklab, white, black)",
      ),
      svh: CSS.supports("height", "100svh"),
      mask: CSS.supports(
        "mask-image",
        "radial-gradient(black, transparent)",
      ),
      backdropFilter:
        CSS.supports("backdrop-filter", "blur(1px)") ||
        CSS.supports("-webkit-backdrop-filter", "blur(1px)"),
    },
    javascript: {
      resizeObserver: typeof ResizeObserver !== "undefined",
      inert: "inert" in HTMLElement.prototype,
      pointerEvents: "PointerEvent" in window,
      matchMedia: typeof window.matchMedia === "function",
      mediaChangeListener:
        typeof window.matchMedia("(prefers-reduced-motion: reduce)")
          .addEventListener === "function",
    },
    reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches,
  }));

  console.log(
    `BROWSER_FEATURE_MATRIX ${JSON.stringify({
      engine: browser.browserType().name(),
      version: browser.version(),
      ...features,
    })}`,
  );
  expect(features.javascript.matchMedia).toBe(true);
});

test("loads all core routes and service detail routes", async ({ page }) => {
  for (const route of [...new Set([...coreRoutes, ...serviceRoutes])]) {
    const response = await visit(page, route);
    expect(response?.status(), `${route} response`).toBe(200);
    await expect(page.locator("main"), `${route} main content`).toBeVisible();
  }
});

test("keeps the homepage usable at the target viewport widths", async ({
  page,
}) => {
  await visit(page);
  const heading = page.getByRole("heading", {
    name: /Turn complex technology into dependable business systems/,
  });
  const menuButton = page.getByRole("button", {
    name: "Open navigation menu",
  });
  const projectButton = page.getByRole("button", { name: "Start a Project" });

  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });

    await expect(heading).toBeVisible();
    await expect(menuButton).toBeVisible();
    await expect(projectButton).toBeVisible();
    const headingBounds = await heading.boundingBox();
    expect(headingBounds?.x).toBeGreaterThanOrEqual(0);
    expect(headingBounds?.x + headingBounds?.width).toBeLessThanOrEqual(width);

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow, `horizontal overflow at ${width}px`).toBe(false);
  }
});

test("opens and closes navigation with keyboard focus restored", async ({
  page,
}) => {
  await visit(page);
  const skipLink = page.getByRole("link", { name: "Skip to main content" });
  await page.keyboard.press("Tab");
  await expect(skipLink).toBeFocused();
  await expect
    .poll(async () => (await skipLink.boundingBox())?.y ?? -Infinity)
    .toBeGreaterThanOrEqual(0);
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();

  const menuButton = page.getByRole("button", {
    name: "Open navigation menu",
  });
  await menuButton.focus();
  await page.keyboard.press("Enter");

  const menu = page.getByRole("region", { name: "Site navigation" });
  await expect(menu).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Services", exact: true }),
  ).toBeVisible();
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Home", exact: true }),
  ).toBeFocused();
  await expect(
    page.getByRole("button", { name: "Close navigation menu" }),
  ).toHaveAttribute("aria-expanded", "true");

  await page.keyboard.press("Escape");
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await expect(menuButton).toBeFocused();
  await expect(page.locator("#main-content")).toBeAttached();

  for (const width of [320, 390, 768]) {
    await page.setViewportSize({ width, height: 900 });
    await menuButton.click();
    await expect(menu).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      `navigation horizontal overflow at ${width}px`,
    ).toBe(true);
    await expect(
      page.getByRole("link", { name: "Home", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Services", exact: true }),
    ).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(menu).not.toBeVisible();
  }
});

test("opens and closes consultation dialog accessibly without overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await visit(page);
  const trigger = page.getByRole("button", { name: "Start a Project" });
  await trigger.click();

  const dialog = page.getByRole("dialog", {
    name: "Start Your Transformation",
  });
  await expect(dialog).toBeVisible();
  await expect
    .poll(() =>
      dialog.evaluate((element) => element.contains(document.activeElement)),
    )
    .toBe(true);
  await expect
    .poll(() =>
      dialog.evaluate(
        (element) =>
          getComputedStyle(element).backgroundImage.includes(
            "transform-background.webp",
          ),
      ),
    )
    .toBe(true);

  const imageResponse = await page.request.get(
    "/sections/transform-background.webp",
  );
  expect(imageResponse.status()).toBe(200);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);

  for (const width of [390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      `modal horizontal overflow at ${width}px`,
    ).toBe(true);
    await expect(dialog).toBeVisible();
    await expect
      .poll(async () => Math.abs((await dialog.boundingBox())?.y ?? Infinity))
      .toBeLessThanOrEqual(1);
    const dialogBounds = await dialog.boundingBox();
    expect(dialogBounds?.x).toBe(0);
    expect(dialogBounds?.width).toBeLessThanOrEqual(width);
    expect(dialogBounds?.height).toBeLessThanOrEqual(900);
  }

  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
});

test("serves the poster and keeps hero content when video loading fails", async ({
  page,
}) => {
  let videoRequestFailed = false;
  page.on("requestfailed", (request) => {
    if (request.url().includes("hero-background-optimized.mp4")) {
      videoRequestFailed = true;
    }
  });
  await page.route("**/hero-background-optimized.mp4", (route) =>
    route.abort(),
  );

  await visit(page);
  await expect(page.getByRole("heading", {
    name: /Turn complex technology into dependable business systems/,
  })).toBeVisible();
  const video = page.locator("video");
  await expect(video).toHaveAttribute(
    "poster",
    /hero-background-poster\.jpg/,
  );
  await expect
    .poll(() =>
      video.evaluate((element) => ({
        autoplay: element.autoplay,
        muted: element.muted,
        loop: element.loop,
        playsInline: element.hasAttribute("playsinline"),
      })),
    )
    .toEqual({
      autoplay: true,
      muted: true,
      loop: true,
      playsInline: true,
    });
  await expect.poll(() => videoRequestFailed).toBe(true);
  expect(
    (await page.request.get("/video/hero-background-poster.jpg")).status(),
  ).toBe(200);
});

test("uses the static hero image for reduced motion and tracks preference changes", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await visit(page);
  await expect(page.locator("video")).toHaveCount(0);
  await expect(
    page.locator('img[src*="hero-background-poster.jpg"]'),
  ).toBeVisible();

  await page.emulateMedia({ reducedMotion: "no-preference" });
  await expect(page.locator("video")).toBeVisible();
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator("video")).toHaveCount(0);
  await expect(
    page.locator('img[src*="hero-background-poster.jpg"]'),
  ).toBeVisible();
});
