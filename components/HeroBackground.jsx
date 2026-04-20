"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const SLIDES = [
  {
    id: 1,
    video: "/videos/hero1_compressed.mp4",
    headline: "ACCELERATING YOUR\nBUSINESS GROWTH",
    sub: "Digital Precision, Engineered for Scale",
  },
  {
    id: 2,
    video: "/videos/hero2_compressed.mp4",
    headline: "SECURING YOUR\nDIGITAL FUTURE",
    sub: "Enterprise-grade protection across identity, data, and infrastructure",
  },
  {
    id: 3,
    video: "/videos/hero3_compressed.mp4",
    headline: "TRANSFORMING BUSINESSES\nTHROUGH TECHNOLOGY",
    sub: "We build the digital infrastructure that powers tomorrow's leaders",
  },
];

const HOLD_DURATION = 3500;
const TRANSITION_MS = 900;
const TOTAL = SLIDES.length;

export default function HeroBackground() {
  const [current, setCurrent] = useState(0);
  const [nextSlide, setNextSlide] = useState(null);
  const [transType, setTransType] = useState(null);
  const [phase, setPhase] = useState("idle");
  const [direction, setDirection] = useState(1); // 1: forward, -1: backward
  const [isPaused, setIsPaused] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const timerRef = useRef(null);
  const videoRefs = useRef([]);
  const phaseRef = useRef("idle");

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  // ── Navigate ───────────────────────────────────────────────────────────────
  const goTo = useCallback(
    (targetIndex, dir = 1) => {
      if (phaseRef.current !== "idle") return;
      const idx = ((targetIndex % TOTAL) + TOTAL) % TOTAL;
      if (idx === current) return;

      clearInterval(timerRef.current);
      setDirection(dir);
      setNextSlide(idx);
      setPhase("sliding");
      phaseRef.current = "sliding";

      // Start next video immediately
      const vid = videoRefs.current[idx];
      if (vid) {
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
    [current],
  );

  const goNext = useCallback(
    () => goTo((current + 1) % TOTAL, 1),
    [current, goTo],
  );
  const goPrev = useCallback(
    () => goTo((current - 1 + TOTAL) % TOTAL, -1),
    [current, goTo],
  );

  // ── Auto timer ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (isPaused || phase !== "idle") return;
    timerRef.current = setInterval(goNext, HOLD_DURATION);
    return () => clearInterval(timerRef.current);
  }, [isPaused, phase, goNext]);

  // ── Preload all videos ────────────────────────────────────────────────────
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      vid.preload = "auto";
      vid.load();
      if (i === 0) {
        const onReady = () => {
          vid.play().catch(() => {});
          setVideoReady(true);
        };
        vid.addEventListener("canplaythrough", onReady, { once: true });
      }
    });
  }, []);

  // ── Compute slide position styles ──────────────────────────────────────────
  // TBO effect: current slides OUT in direction, next slides IN from opposite
  const getSlideStyle = (i) => {
    const isCur = i === current;
    const isNext = i === nextSlide;
    const isSliding = phase === "sliding";

    if (!isSliding) {
      // Idle: only current visible
      return {
        transform: isCur ? "translateX(0%)" : "translateX(100%)",
        opacity: isCur ? 1 : 0,
        transition: "none",
        zIndex: isCur ? 2 : 0,
      };
    }

    // During slide
    const outDir = direction === 1 ? "-100%" : "100%";
    const inStart = direction === 1 ? "100%" : "-100%";

    if (isCur) {
      return {
        transform: `translateX(${outDir})`,
        opacity: 1,
        transition: `transform ${TRANSITION_MS}ms cubic-bezier(0.76, 0, 0.24, 1)`,
        zIndex: 2,
      };
    }
    if (isNext) {
      return {
        transform: "translateX(0%)",
        opacity: 1,
        // Start at inStart, animate to 0
        transition: `transform ${TRANSITION_MS}ms cubic-bezier(0.76, 0, 0.24, 1)`,
        zIndex: 3,
        // We use a CSS trick below with initial transform
      };
    }
    return { opacity: 0, zIndex: 0 };
  };

  // For the incoming slide we need it to START offset and animate to 0
  // We do this by wrapping in a div with initial transform set inline
  const getNextInitialStyle = () => {
    const inStart = direction === 1 ? "100%" : "-100%";
    return phase === "sliding" ? { transform: `translateX(${inStart})` } : {};
  };

  // ── Text style ─────────────────────────────────────────────────────────────
  const getTextStyle = (i) => {
    if (!videoReady) return { opacity: 0, pointerEvents: "none" };
    const isCur = i === current;
    const isNext = i === nextSlide;

    if (phase === "sliding" && isCur)
      return {
        opacity: 0,
        transform: "translateY(-10px)",
        transition: `opacity ${TRANSITION_MS * 0.3}ms ease`,
        pointerEvents: "none",
      };
    if (phase === "sliding" && isNext)
      return {
        opacity: 1,
        transform: "translateY(0)",
        transition: `opacity ${TRANSITION_MS * 0.4}ms ease ${TRANSITION_MS * 0.45}ms`,
        pointerEvents: "auto",
      };
    if (phase === "idle" && i === current)
      return {
        opacity: 1,
        transform: "translateY(0)",
        pointerEvents: "auto",
      };
    return { opacity: 0, pointerEvents: "none" };
  };

  return (
    <div
      className="relative min-h-[75vh] overflow-hidden bg-[#09090b]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Video slides — each absolutely positioned, clipped by overflow:hidden */}
      {SLIDES.map((slide, i) => {
        const isNext = i === nextSlide;
        const isSliding = phase === "sliding";

        return (
          <div
            key={slide.id}
            className="absolute inset-0"
            style={getSlideStyle(i)}
            // For incoming slide: set initial offset BEFORE transition via wrapper
            ref={(el) => {
              if (el && isNext && isSliding) {
                const inStart = direction === 1 ? "100%" : "-100%";
                el.style.transform = `translateX(${inStart})`;
                // Force reflow then apply transition
                void el.offsetWidth;
                el.style.transition = `transform ${TRANSITION_MS}ms cubic-bezier(0.76, 0, 0.24, 1)`;
                el.style.transform = "translateX(0%)";
              }
            }}
          >
            <video
              ref={(el) => (videoRefs.current[i] = el)}
              src={slide.video}
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
              // ✅ Slow Ken Burns zoom — matches TBO's subtle background movement
              style={{
                transform:
                  i === current && phase === "idle"
                    ? "scale(1.06)"
                    : "scale(1.0)",
                transition: `transform ${HOLD_DURATION}ms linear`,
                transformOrigin: "center center",
              }}
            />
            {/* Dark overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.68) 100%)",
              }}
            />
          </div>
        );
      })}

      {/* Text layers */}
      <div className="absolute inset-0 z-20">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
            style={getTextStyle(i)}
          >
            <div className="max-w-4xl w-full">
              {/* Headline */}
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-[1.05] text-white tracking-tighter font-space mb-6"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
              >
                {slide.headline}
              </h1>

              {/* Subtitle */}
              <div className="flex items-center justify-center gap-4 max-w-xl mx-auto">
                <span className="w-1 h-10 bg-light-primary block shrink-0" />
                <p
                  className="text-gray-50 text-base md:text-lg leading-relaxed font-poppins text-left"
                  style={{ textShadow: "0 1px 6px rgba(0,0,0,0.8)" }}
                >
                  {slide.sub}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot navigation */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            aria-label={`Slide ${i + 1}`}
            className="relative flex items-center justify-center w-7 h-7"
          >
            <span
              className="absolute inset-0 rounded-full border-2 transition-all duration-300"
              style={{
                borderColor: i === current ? "white" : "transparent",
                opacity: i === current ? 1 : 0,
                transform: i === current ? "scale(1)" : "scale(0.6)",
              }}
            />
            <span
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "8px" : "5px",
                height: i === current ? "8px" : "5px",
                backgroundColor:
                  i === current ? "white" : "rgba(255,255,255,0.4)",
              }}
            />
          </button>
        ))}
      </div>

      {/* Progress bar */}
      {!isPaused && phase === "idle" && (
        <div className="absolute bottom-0 left-0 right-0 z-30 h-[3px]">
          <div
            key={`${current}-bar`}
            className="h-full"
            style={{
              animation: `heroProgress ${HOLD_DURATION}ms linear forwards`,
            }}
          />
        </div>
      )}
    </div>
  );
}
