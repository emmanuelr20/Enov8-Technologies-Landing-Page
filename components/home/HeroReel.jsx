"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { LogoMark } from "@/components/Logo";

const SLIDE_MS = 6500;

// Video reel that never competes with first paint: no video bytes are
// requested until the page has loaded and the browser is idle. Pauses when
// off-screen or when the tab is hidden; respects reduced motion.
export default function HeroReel({ slides }) {
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const [loaded, setLoaded] = useState(() => new Set([0]));
  const [playing, setPlaying] = useState(true);
  const [onScreen, setOnScreen] = useState(true);
  const wrapRef = useRef(null);
  const videoRefs = useRef([]);

  // Defer loading until after `load` + idle.
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
    const idle = window.requestIdleCallback ?? ((cb) => setTimeout(cb, 300));
    const start = () => idle(() => setReady(true), { timeout: 2500 });
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  // Track visibility (viewport + tab).
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    const onVis = () => setOnScreen(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  const running = ready && playing && onScreen;

  // Play only the active video.
  useEffect(() => {
    if (!ready) return;
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === active && running) v.play().catch(() => {});
      else v.pause();
    });
  }, [active, ready, running, loaded]);

  // Advance slides.
  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => {
      const next = (active + 1) % slides.length;
      setLoaded((prev) => new Set(prev).add(next).add((next + 1) % slides.length));
      setActive(next);
    }, SLIDE_MS);
    return () => clearTimeout(t);
  }, [active, running, slides.length]);

  const goTo = (i) => {
    setLoaded((prev) => new Set(prev).add(i));
    setActive(i);
  };

  return (
    <div
      ref={wrapRef}
      className="reel-grow relative aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#05060a] sm:aspect-[16/10] lg:aspect-[16/7]"
    >
      {/* Placeholder art shown until the first video is ready */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="aurora opacity-80">
          <i />
          <i />
          <i />
        </div>
        <div className="grid-bg absolute inset-0 opacity-70" />
        <LogoMark className="absolute left-1/2 top-1/2 w-[38%] max-w-80 -translate-x-1/2 -translate-y-1/2 text-white/[0.05]" />
      </div>

      {slides.map((s, i) => (
        <video
          key={s.video}
          ref={(el) => (videoRefs.current[i] = el)}
          className={`absolute inset-0 size-full object-cover transition-[opacity,scale] duration-[1200ms] ease-out-expo ${
            i === active ? "scale-100 opacity-100" : "scale-[1.06] opacity-0"
          }`}
          src={ready && loaded.has(i) ? s.video : undefined}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
        />
      ))}

      {/* Legibility gradient */}
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-black/20"
        aria-hidden="true"
      />

      {/* Caption + controls */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-6 p-5 sm:p-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="relative min-h-[5.5rem] max-w-xl" aria-live="polite">
          {slides.map((s, i) => (
            <div
              key={s.title}
              className={`transition-[opacity,translate] duration-700 ease-out-expo ${
                i === active ? "translate-y-0 opacity-100" : "pointer-events-none absolute inset-0 translate-y-4 opacity-0"
              }`}
              aria-hidden={i !== active}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                0{i + 1} / 0{slides.length}
              </p>
              <p className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                {s.title}
              </p>
              <p className="mt-1 text-sm text-white/70 sm:text-base">{s.sub}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            {slides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show slide ${i + 1}: ${s.title}`}
                aria-current={i === active}
                className="group relative h-10 w-12 sm:w-16"
              >
                <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-white/20">
                  <span
                    key={i === active ? `on-${active}` : "off"}
                    className="absolute inset-0 origin-left rounded-full bg-white"
                    style={{
                      transform: i < active ? "scaleX(1)" : "scaleX(0)",
                      animationName: i === active && ready ? "progress" : "none",
                      animationDuration: `${SLIDE_MS}ms`,
                      animationTimingFunction: "linear",
                      animationFillMode: "forwards",
                      animationPlayState: running ? "running" : "paused",
                    }}
                  />
                </span>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause video" : "Play video"}
            className="grid size-10 place-items-center rounded-full border border-white/20 bg-black/30 text-white transition-colors hover:bg-white/15"
          >
            {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
