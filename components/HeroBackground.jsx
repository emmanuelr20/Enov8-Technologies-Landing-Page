"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const SLIDES = [
  {
    id: 1,
    image: "/sections/hero/hero1.webp",
    headline: "Accelerating Your\nBusiness Growth",
    sub: "Digital Precision, Engineered for Scale",
    align: "left",
  },
  {
    id: 2,
    image: "/sections/hero/hero2.webp",
    headline: "Securing Your\nDigital Future",
    sub: "Enterprise-grade protection across identity, data, and infrastructure",
    align: "right",
  },
  {
    id: 3,
    image: "/sections/hero/hero3.webp",
    headline: "Transforming Businesses\nThrough Smart Technology",
    sub: "We build the digital infrastructure that powers tomorrow's leaders",
    align: "left",
  },
];

const HOLD_DURATION = 3500;
const TRANSITION_MS = 900;
const TOTAL = SLIDES.length;

export default function HeroBackground() {
  const [current, setCurrent] = useState(0);
  const [nextSlide, setNextSlide] = useState(null);
  const [phase, setPhase] = useState("idle");
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [inView, setInView] = useState(true);

  const timerRef = useRef(null);
  const containerRef = useRef(null);
  const phaseRef = useRef("idle");

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

  const goTo = useCallback(
    (targetIndex) => {
      if (phaseRef.current !== "idle") return;
      const idx = ((targetIndex % TOTAL) + TOTAL) % TOTAL;
      if (idx === current) return;

      clearInterval(timerRef.current);

      setNextSlide(idx);
      setPhase("sliding");
      phaseRef.current = "sliding";

      setTimeout(() => {
        setCurrent(idx);
        setNextSlide(null);
        setPhase("idle");
        phaseRef.current = "idle";
      }, TRANSITION_MS);
    },
    [current],
  );

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    if (isPaused || phase !== "idle" || !inView) return;
    timerRef.current = setInterval(goNext, HOLD_DURATION);
    return () => clearInterval(timerRef.current);
  }, [isPaused, phase, goNext, inView]);

  if (reducedMotion) {
    const s = SLIDES[0];
    return (
      <div
        ref={containerRef}
        className="relative min-h-[75vh] overflow-hidden bg-[#09090b]"
        suppressHydrationWarning
      >
        <div className="absolute inset-0 z-0">
          <img
            src={s.image}
            alt=""
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-4xl w-full">
            <h1 className="leading-[1.05] text-white tracking-tighter mb-6 whitespace-pre-line font-bold text-4xl md:text-6xl lg:text-7xl">
              {s.headline}
            </h1>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
              {s.sub}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      // PERSPECTIVE is the secret sauce here
      className="relative min-h-[65vh] overflow-hidden bg-[#09090b]"
      style={{ perspective: "1500px" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      suppressHydrationWarning
    >
      {SLIDES.map((slide, i) => {
        const isCur = i === current;
        const isNext = i === nextSlide;
        const isActive = isCur || isNext;

        return (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-1500 ease-in-out"
            style={{
              opacity: isCur ? (phase === "sliding" ? 0 : 1) : isNext ? 1 : 0,
              zIndex: isNext ? 2 : isCur ? 1 : 0,
            }}
            suppressHydrationWarning
          >
            <div
              className={`absolute inset-0 w-full h-full transition-transform duration-10000 ease-out ${
                isActive && phase === "idle" ? "scale-110" : "scale-100"
              }`}
            >
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            {/* Enhanced Dark Overlay for Contrast */}
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/20 to-black/80" />
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
          const isActive = isCur && phase === "idle";

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 flex flex-col justify-center items-start ${
                slide.align === "right" ? "md:items-end" : "md:items-start"
              }`}
              style={{
                opacity: isActive ? 1 : 0,
                visibility: isActive ? "visible" : "hidden",
                transition: `opacity ${TRANSITION_MS}ms ease-in-out`,
              }}
              suppressHydrationWarning
            >
              <div className="container mx-auto px-6 md:px-12 lg:px-24 w-full">
                <div
                  className={`w-full max-w-[90%] text-left md:text-left ${
                    slide.align === "left"
                      ? "xl:max-w-[55%] mr-auto"
                      : slide.align === "right"
                        ? "xl:max-w-[40%] md:ml-auto md:mr-0"
                        : "xl:max-w-[55%] mx-auto"
                  }`}
                >
                  <h1
                    className="text-white tracking-tighter mb-4 whitespace-pre-line transition-all duration-1000 ease-out"
                    style={{
                      textShadow: "0 4px 20px rgba(0,0,0,0.6)",
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateY(0)"
                        : "translateY(-60px)",
                      transitionDelay: isActive ? "0.2s" : "0s",
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
                    className="text-white/90! leading-relaxed transition-all duration-1000 ease-out max-w-sm"
                    style={{
                      textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateY(0)"
                        : "translateY(60px)",
                      transitionDelay: isActive ? "0.4s" : "0s",
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
