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
    exit: (d) => `perspective(800px) rotateY(${d * -120}deg) translateX(${d * -30}%) scale(0.75)`,
    enter: (d) => `perspective(800px) rotateY(${d * 120}deg) translateX(${d * 30}%) scale(0.75)`,
  },
  {
    // 6. Tilt drop — slide tips back on X+Z and falls away; next tips in from above
    name: "tilt-drop",
    exit: (d) => `rotateX(40deg) rotateZ(${d * -8}deg) translateY(${d * -80}%) scale(0.6)`,
    enter: (d) => `rotateX(-40deg) rotateZ(${d * 8}deg) translateY(${d * 80}%) scale(0.6)`,
  },
];

export default function HeroBackground() {
  const [current, setCurrent] = useState(0);
  const [nextSlide, setNextSlide] = useState(null);
  const [transType, setTransType] = useState(null);
  const [phase, setPhase] = useState("idle");
  const [direction, setDirection] = useState(1); // 1: forward, -1: backward
  const [isPaused, setIsPaused] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [activeVariation, setActiveVariation] = useState(VARIATIONS[0]);

  const timerRef = useRef(null);
  const videoRefs = useRef([]);
  const phaseRef = useRef("idle");
  const activeVariationRef = useRef(VARIATIONS[0]);
  const variationIndexRef = useRef(0);
  const variationDirectionRef = useRef(1); // 1 = forward, -1 = backward

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

      // 1. Advance variation in a ping-pong sequence (0→5→0…)
      let nextVarIndex = variationIndexRef.current + variationDirectionRef.current;
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
      setActiveVariation(nextVar);

      setDirection(dir);
      setNextSlide(idx);
      setPhase("sliding");
      phaseRef.current = "sliding";

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
    [current], // TOTAL is constant, so just current is fine
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
      // PERSPECTIVE is the secret sauce here
      className="relative min-h-[75vh] overflow-hidden bg-[#09090b]"
      style={{ perspective: "1500px" }}
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
            ref={(el) => {
              if (el && i === nextSlide && phase === "sliding") {
                const v = activeVariationRef.current;

                // Set the FROM state (where the entering slide starts)
                el.style.transform = v.enter(direction);
                el.style.opacity = "0";

                void el.offsetWidth; // Force browser repaint — crucial for transitions

                // Animate TO the centre (the resting state)
                el.style.transform = "translateZ(0px) rotateX(0deg) rotateY(0deg) scale(1)";
                el.style.opacity = "1";
              }
            }}
          >
            <video
              ref={(el) => (videoRefs.current[i] = el)}
              src={slide.video}
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                // Subtle zoom-in effect while sitting idle
                transform:
                  i === current && phase === "idle"
                    ? "scale(1.1)"
                    : "scale(1.0)",
                transition: `transform ${HOLD_DURATION + 1000}ms ease-out`,
              }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
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