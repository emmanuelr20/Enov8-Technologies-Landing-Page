"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const SLIDES = [
  {
    id: 1,
    video: "/videos/hero1_compressed.mp4",
    headline: "Accelerating Your\nBusiness Growth",
    sub: "Digital Precision, Engineered for Scale",
    align: "left",
  },
  {
    id: 2,
    video: "/videos/hero2_compressed.mp4",
    headline: "Securing Your\nDigital Future",
    sub: "Enterprise-grade protection across identity, data, and infrastructure",
    align: "right",
  },
  {
    id: 3,
    video: "/videos/hero3_compressed.mp4",
    headline: "Transforming Businesses\nThrough Smart Technology",
    sub: "We build the digital infrastructure that powers tomorrow's leaders",
    align: "left",
  },
];

const HOLD_DURATION = 3500;
const TRANSITION_MS = 900;
const TOTAL = SLIDES.length;

const VARIATIONS = [
  {
    // 1. Classic 3D cube — rotates out on Y axis like a box face turning away
    name: "cube-horizontal",
    exit: (d) => `rotateY(${d * -90}deg) translateZ(50vw)`,
    enter: (d) => `rotateY(${d * 90}deg) translateZ(50vw)`,
  },
  {
    // 2. Skew slice — shears sideways like a card being swiped off a deck
    name: "skew-slice",
    exit: (d) => `translateX(${d * -60}%) skewX(${d * 20}deg) scale(0.85)`,
    enter: (d) => `translateX(${d * 60}%) skewX(${d * -20}deg) scale(0.85)`,
  },
  {
    // 3. Z depth — current slide slams back into the screen, next erupts forward
    name: "z-depth",
    exit: (_d) => `translateZ(-1200px) scale(0.2)`,
    enter: (_d) => `translateZ(1200px) scale(2.2)`,
  },
  {
    // 4. Spin Z — flat coin-toss spin on the Z axis
    name: "spin-z",
    exit: (d) => `rotateZ(${d * 180}deg) scale(0.4)`,
    enter: (d) => `rotateZ(${d * -180}deg) scale(0.4)`,
  },
  {
    // 5. Page turn — thick book page flip with strong lateral perspective warp
    name: "page-turn",
    exit: (d) =>
      `perspective(800px) rotateY(${d * -120}deg) translateX(${d * -30}%) scale(0.75)`,
    enter: (d) =>
      `perspective(800px) rotateY(${d * 120}deg) translateX(${d * 30}%) scale(0.75)`,
  },
  {
    // 6. Tilt drop — slide tips back on X+Z and falls away; next tips in from above
    name: "tilt-drop",
    exit: (d) =>
      `rotateX(40deg) rotateZ(${d * -8}deg) translateY(${d * -80}%) scale(0.6)`,
    enter: (d) =>
      `rotateX(-40deg) rotateZ(${d * 8}deg) translateY(${d * 80}%) scale(0.6)`,
  },
];

export default function HeroBackground() {
  const [current, setCurrent] = useState(0);
  const [nextSlide, setNextSlide] = useState(null);
  const [phase, setPhase] = useState("idle");
  const [direction, setDirection] = useState(1); // 1: forward, -1: backward
  const [isPaused, setIsPaused] = useState(false);
  const [videoReady, setVideoReady] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [inView, setInView] = useState(true);

  const timerRef = useRef(null);
  const videoRefs = useRef([]);
  const containerRef = useRef(null);
  const phaseRef = useRef("idle");
  const activeVariationRef = useRef(VARIATIONS[0]);
  const variationIndexRef = useRef(0);
  const variationDirectionRef = useRef(1); // 1 = forward, -1 = backward

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([e]) => {
        setInView(e?.isIntersecting ?? false);
      },
      { root: null, rootMargin: "0px", threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // ── Navigate ───────────────────────────────────────────────────────────────
  const goTo = useCallback(
    (targetIndex, dir = 1) => {
      if (phaseRef.current !== "idle") return;
      const idx = ((targetIndex % TOTAL) + TOTAL) % TOTAL;
      if (idx === current) return;

      clearInterval(timerRef.current);

      // 1. Advance variation in a ping-pong sequence (0→5→0…)
      let nextVarIndex =
        variationIndexRef.current + variationDirectionRef.current;
      if (nextVarIndex >= VARIATIONS.length) {
        nextVarIndex = VARIATIONS.length - 2;
        variationDirectionRef.current = -1;
      } else if (nextVarIndex < 0) {
        nextVarIndex = 1;
        variationDirectionRef.current = 1;
      }
      variationIndexRef.current = nextVarIndex;
      const nextVar = VARIATIONS[nextVarIndex];
      activeVariationRef.current = nextVar;

      setDirection(dir);
      setNextSlide(idx);
      setPhase("sliding");
      phaseRef.current = "sliding";

      const vid = videoRefs.current[idx];
      if (vid) {
        vid.preload = "auto";
        vid.currentTime = 0;
        vid.play().catch(() => {});
      }

      setTimeout(() => {
        setCurrent(idx);
        setNextSlide(null);
        setPhase("idle");
        phaseRef.current = "idle";
      }, TRANSITION_MS);
    },
    [current], // TOTAL is constant, so just current is fine
  );

  const goNext = useCallback(
    () => goTo((current + 1) % TOTAL, 1),
    [current, goTo],
  );
  // ── Auto timer ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (isPaused || phase !== "idle" || !inView) return;
    timerRef.current = setInterval(goNext, HOLD_DURATION);
    return () => clearInterval(timerRef.current);
  }, [isPaused, phase, goNext, inView]);

  // First slide only: full preload.
  useEffect(() => {
    const vid = videoRefs.current[0];
    if (!vid) return;

    const onReady = () => {
      vid.muted = true; // Extra insurance for mobile
      vid.play().catch(() => {
        // Fallback for strict mobile browsers - try again after a small delay
        setTimeout(() => vid.play().catch(() => {}), 500);
      });
      setVideoReady(true);
    };

    // If already ready, play it
    if (vid.readyState >= 3) {
      onReady();
    } else {
      vid.addEventListener("canplaythrough", onReady, { once: true });
    }

    return () => {
      vid.removeEventListener("canplaythrough", onReady);
    };
  }, []);

  // Gently warm the next clip after first paint (does not block LCP the way preload-all did).
  useEffect(() => {
    if (!videoReady || reducedMotion) return;
    if (typeof window === "undefined" || !("requestIdleCallback" in window)) {
      return;
    }
    const id = window.requestIdleCallback(
      () => {
        const next = videoRefs.current[1];
        if (next) {
          next.preload = "metadata";
        }
      },
      { timeout: 3000 },
    );
    return () => window.cancelIdleCallback(id);
  }, [videoReady, reducedMotion]);

  useEffect(() => {
    if (inView) return;
    clearInterval(timerRef.current);
    videoRefs.current.forEach((v) => {
      if (v) v.pause();
    });
  }, [inView]);

  // ── Compute slide position styles ──────────────────────────────────────────
  const getSlideStyle = (i) => {
    const isCur = i === current;
    const isNext = i === nextSlide;
    const isSliding = phase === "sliding";

    const baseStyle = {
      position: "absolute",
      inset: 0,
      backfaceVisibility: "hidden",
      transformStyle: "preserve-3d",
    };

    // IDLE STATE: Only the current slide is visible and centered
    if (!isSliding) {
      return {
        ...baseStyle,
        transform: isCur
          ? "translateZ(0px) rotateX(0deg) rotateY(0deg)"
          : "translateZ(-1000px)",
        opacity: isCur ? 1 : 0,
        zIndex: isCur ? 2 : 0,
        transition: "none",
      };
    }

    // EXITING SLIDE (The one leaving)
    if (isCur) {
      const v = activeVariationRef.current;
      return {
        ...baseStyle,
        transform: v.exit(direction),
        opacity: 0,
        transition: `transform ${TRANSITION_MS}ms cubic-bezier(0.7, 0, 0.3, 1), opacity ${TRANSITION_MS}ms ease`,
        zIndex: 2,
      };
    }

    // ENTERING SLIDE (The one coming in)
    if (isNext) {
      return {
        ...baseStyle,
        // Note: The initial "from" position is handled by the ref callback in JSX
        transform: "translateZ(0px) rotateX(0deg) rotateY(0deg) scale(1)",
        opacity: 1,
        transition: `transform ${TRANSITION_MS}ms cubic-bezier(0.7, 0, 0.3, 1), opacity ${TRANSITION_MS * 0.5}ms ease`,
        zIndex: 3,
      };
    }

    return { ...baseStyle, opacity: 0, zIndex: 0 };
  };


  if (reducedMotion) {
    const s = SLIDES[0];
    return (
      <div
        ref={containerRef}
        className="relative min-h-[75vh] overflow-hidden bg-[#09090b]"
        suppressHydrationWarning
      >
        <div className="absolute inset-0 z-0 bg-[#09090b]">
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-4xl w-full">
            <h1
              className="leading-[1.05] text-white tracking-tighter mb-6 whitespace-pre-line"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
            >
              {s.headline}
            </h1>
            <p
              className="md: text-center"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.8)" }}
            >
              {s.sub}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: hover pauses the carousel; dots handle keyboard/AT
    <div
      ref={containerRef}
      // PERSPECTIVE is the secret sauce here
      className="relative min-h-[65vh] overflow-hidden bg-[#09090b]"
      style={{ perspective: "1500px" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      suppressHydrationWarning
    >
      {/* Video slides — each absolutely positioned, clipped by overflow:hidden */}
      {SLIDES.map((slide, i) => {
        return (
          <div
            key={slide.id}
            className="absolute inset-0"
            suppressHydrationWarning
            style={getSlideStyle(i)}
            ref={(el) => {
              if (el && i === nextSlide && phase === "sliding") {
                const v = activeVariationRef.current;

                // Set the FROM state (where the entering slide starts)
                el.style.transform = v.enter(direction);
                el.style.opacity = "0";

                void el.offsetWidth; // Force browser repaint — crucial for transitions

                // Animate TO the centre (the resting state)
                el.style.transform =
                  "translateZ(0px) rotateX(0deg) rotateY(0deg) scale(1)";
                el.style.opacity = "1";
              }
            }}
          >
            <video
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              src={slide.video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                // Subtle zoom-in effect while sitting idle
                transform:
                  i === current && phase === "idle"
                    ? "scale(1.05)"
                    : "scale(1.0)",
                transition: `transform ${HOLD_DURATION + 1000}ms ease-out`,
              }}
            />
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/40"
              suppressHydrationWarning
            />
            <div
              className="absolute inset-0 bg-linear-to-b from-black/80 via-black/20 to-black/80"
              suppressHydrationWarning
            />
          </div>
        );
      })}

      {/* Content Layer */}
      <div
        className="absolute inset-0 z-20 flex items-end pointer-events-none"
        suppressHydrationWarning
      >
        {SLIDES.map((slide, i) => {
          const isCur = i === current;
          const isNext = i === nextSlide;
          // The text should be "active" (animating in) either when it's idle OR when it's the next slide coming in
          const isActive =
            (phase === "idle" && isCur) || (phase === "sliding" && isNext);

          return (
            <div
              key={slide.id}
              className="absolute inset-0 flex flex-col justify-center items-start xl:items-center"
              style={{
                opacity: isActive ? 1 : 0,
                visibility: isActive ? "visible" : "hidden",
                transition: `opacity ${TRANSITION_MS}ms ease-in-out`,
              }}
              suppressHydrationWarning
            >
              <div
                className="container mx-auto px-6 md:px-12 lg:px-24 w-full"
                suppressHydrationWarning
              >
                <div
                  className="w-full max-w-[90%] xl:max-w-[70%] text-left xl:text-center mx-0 xl:mx-auto"
                  suppressHydrationWarning
                >
                  <h1
                    className="text-white tracking-tighter mb-4 whitespace-pre-line transition-[opacity,transform] duration-1000 ease-out"
                    style={{
                      textShadow: "0 4px 20px rgba(0,0,0,0.6)",
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateY(0)"
                        : "translateY(-60px)",
                      transitionDelay: isActive ? "0.1s" : "0s",
                    }}
                  >
                    {slide.headline.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        {index === 0 && "\n"}
                      </span>
                    ))}
                  </h1>
                  <p
                    className="text-white/90! leading-relaxed transition-[opacity,transform] duration-1000 ease-out max-w-sm xl:max-w-xl xl:mx-auto"
                    style={{
                      textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateY(0)"
                        : "translateY(60px)",
                      transitionDelay: isActive ? "0.3s" : "0s",
                    }}
                  >
                    {slide.sub}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dot navigation */}
      <div
        className="hidden absolute right-8 top-1/2 -translate-y-1/2 z-30 md:flex flex-col gap-6"
        suppressHydrationWarning
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            className="group relative flex items-center justify-center w-5 h-5"
            aria-label={`Go to slide ${i + 1}`}
          >
            <span
              className={`absolute inset-0 rounded-full border-2 border-white/50 transition-all duration-500 scale-0 group-hover:scale-100 ${
                i === (nextSlide !== null ? nextSlide : current)
                  ? "scale-100 border-white"
                  : ""
              }`}
            />
            <span
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                i === (nextSlide !== null ? nextSlide : current)
                  ? "bg-white scale-50"
                  : "bg-white/40 group-hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
