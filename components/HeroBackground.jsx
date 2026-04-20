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

const TRANSITIONS   = ["cube", "shatter", "ripple"];
const HOLD_DURATION = 4000;   // ✅ 3s — fires before a 4-5s video loops
const TRANSITION_MS = 1800;
const TOTAL         = SLIDES.length;

export default function HeroBackground() {
  const [current,    setCurrent]    = useState(0);
  const [nextSlide,  setNextSlide]  = useState(null);
  const [transType,  setTransType]  = useState(null);
  const [phase,      setPhase]      = useState("idle");
  const [isPaused,   setIsPaused]   = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  // canvasActive: true means canvas is visible and handling the frame
  const [canvasActive, setCanvasActive] = useState(false);

  const timerRef      = useRef(null);
  const videoRefs     = useRef([]);
  const canvasRef     = useRef(null);
  const animFrameRef  = useRef(null);
  const transCountRef = useRef(0);
  const phaseRef      = useRef("idle");

  useEffect(() => { phaseRef.current = phase; }, [phase]);

  // ── Navigate ───────────────────────────────────────────────────────────────
  const goTo = useCallback((targetIndex) => {
    if (phaseRef.current !== "idle") return;
    const idx = ((targetIndex % TOTAL) + TOTAL) % TOTAL;
    if (idx === current) return;

    clearInterval(timerRef.current);
    const type = TRANSITIONS[transCountRef.current % TRANSITIONS.length];
    transCountRef.current++;

    // ✅ Pre-buffer next video BEFORE starting transition
    const vid = videoRefs.current[idx];
    if (vid) {
      vid.currentTime = 0;
      vid.play().catch(() => {});
    }

    setNextSlide(idx);
    setTransType(type);
    setPhase("out");
    phaseRef.current = "out";

    setTimeout(() => { setPhase("in"); phaseRef.current = "in"; }, TRANSITION_MS * 0.5);
    setTimeout(() => {
      setCurrent(idx);
      setNextSlide(null);
      setTransType(null);
      setPhase("idle");
      setCanvasActive(false);
      phaseRef.current = "idle";
    }, TRANSITION_MS * 1.1);
  }, [current]);

  const goNext = useCallback(() => goTo((current + 1) % TOTAL), [current, goTo]);

  // ── Auto timer ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (isPaused || phase !== "idle") return;
    timerRef.current = setInterval(goNext, HOLD_DURATION);
    return () => clearInterval(timerRef.current);
  }, [isPaused, phase, goNext]);

  // ── Preload all videos immediately ────────────────────────────────────────
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      vid.preload = "auto";
      vid.load();
      if (i === 0) {
        const onReady = () => { vid.play().catch(() => {}); setVideoReady(true); };
        vid.addEventListener("canplaythrough", onReady, { once: true });
      }
    });
  }, []);

  // ── CUBE transition ────────────────────────────────────────────────────────
  useEffect(() => {
    if (transType !== "cube" || !canvasRef.current) return;
    setCanvasActive(true);

    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");
    const W = canvas.width  = window.innerWidth;
    const H = canvas.height = window.innerHeight;
    const COLS = 8, ROWS = 5;
    const cw = W / COLS, ch = H / ROWS;

    // ✅ CRITICAL: grab video elements directly — they stay visible (opacity 1)
    // underneath so canvas can read their frames even during transition
    const vid1 = videoRefs.current[current];
    const vid2 = videoRefs.current[nextSlide];

    let t0 = null;
    const draw = (ts) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / (TRANSITION_MS * 1.1), 1);
      ctx.clearRect(0, 0, W, H);

      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const delay = ((c + r) / (COLS + ROWS)) * 0.45;
          const local = Math.max(0, Math.min(1, (p - delay) / 0.65));
          const e = local < 0.5
            ? 4 * local * local * local
            : 1 - Math.pow(-2 * local + 2, 3) / 2;

          const x = c * cw, y = r * ch;
          ctx.save();
          ctx.translate(x + cw / 2, y + ch / 2);

          if (e < 0.5) {
            // Tile from current video shrinks+rotates away
            const s = Math.max(1 - e * 2, 0.001);
            ctx.scale(s, s);
            ctx.rotate(e * 0.7);
            if (vid1?.readyState >= 2) {
              ctx.drawImage(vid1, x, y, cw, ch, -cw/2, -ch/2, cw, ch);
            } else {
              ctx.fillStyle = "#09090b";
              ctx.fillRect(-cw/2, -ch/2, cw, ch);
            }
          } else {
            // Tile from next video grows+rotates in
            const s = Math.max((e - 0.5) * 2, 0.001);
            ctx.scale(s, s);
            ctx.rotate((1 - e) * -0.7);
            if (vid2?.readyState >= 2) {
              ctx.drawImage(vid2, x, y, cw, ch, -cw/2, -ch/2, cw, ch);
            } else {
              ctx.fillStyle = "#09090b";
              ctx.fillRect(-cw/2, -ch/2, cw, ch);
            }
          }
          ctx.restore();
        }
      }

      // Overlay darkening on canvas just like the videos have
      ctx.fillStyle = "rgba(0,0,0,0.42)";
      ctx.fillRect(0, 0, W, H);

      if (p < 1) {
        animFrameRef.current = requestAnimationFrame(draw);
      } else {
        // ✅ Don't clear canvas immediately — let it hold last frame
        // briefly so there's no black flash before video takes over
        setTimeout(() => {
          ctx.clearRect(0, 0, W, H);
          setCanvasActive(false);
        }, 80);
      }
    };

    animFrameRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animFrameRef.current);
      ctx.clearRect(0, 0, W, H);
    };
  }, [transType, current, nextSlide]);

  // ── SHATTER transition ─────────────────────────────────────────────────────
  useEffect(() => {
    if (transType !== "shatter" || !canvasRef.current) return;
    setCanvasActive(true);

    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");
    const W = canvas.width  = window.innerWidth;
    const H = canvas.height = window.innerHeight;
    const vid1 = videoRefs.current[current];
    const vid2 = videoRefs.current[nextSlide];

    const shards = Array.from({ length: 48 }, () => {
      const cx = Math.random() * W, cy = Math.random() * H;
      const r  = 70 + Math.random() * 160;
      const sides = 3 + Math.floor(Math.random() * 2);
      const pts = Array.from({ length: sides }, (_, s) => {
        const a = (s / sides) * Math.PI * 2 + Math.random() * 0.7;
        return {
          x: cx + Math.cos(a) * r * (0.4 + Math.random() * 0.9),
          y: cy + Math.sin(a) * r * (0.4 + Math.random() * 0.9),
        };
      });
      const a = Math.random() * Math.PI * 2, spd = 0.25 + Math.random() * 0.65;
      return { cx, cy, pts, dx: Math.cos(a) * spd, dy: Math.sin(a) * spd };
    });

    let t0 = null;
    const draw = (ts) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / (TRANSITION_MS * 1.1), 1);
      ctx.clearRect(0, 0, W, H);

      // Draw next video fading in as background base
      if (vid2?.readyState >= 2) {
        const alpha = p > 0.35 ? Math.min((p - 0.35) / 0.45, 1) : 0;
        ctx.globalAlpha = alpha;
        ctx.drawImage(vid2, 0, 0, W, H);
        ctx.globalAlpha = 1;
      }

      // Draw current video shards flying out
      shards.forEach((s) => {
        const flyP = Math.min(p / 0.75, 1);
        const e    = flyP < 0.5 ? 2 * flyP * flyP : 1 - Math.pow(-2 * flyP + 2, 2) / 2;
        const alpha = Math.max(1 - e * 1.4, 0);
        if (alpha <= 0) return;

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(
          s.cx + s.dx * e * W * 0.45,
          s.cy + s.dy * e * H * 0.45
        );
        ctx.rotate(e * (s.dx > 0 ? 1 : -1) * 0.9);
        ctx.beginPath();
        const pts = s.pts.map(pt => ({ x: pt.x - s.cx, y: pt.y - s.cy }));
        ctx.moveTo(pts[0].x, pts[0].y);
        pts.slice(1).forEach(pt => ctx.lineTo(pt.x, pt.y));
        ctx.closePath();
        ctx.clip();
        if (vid1?.readyState >= 2) {
          ctx.drawImage(vid1, s.cx - W/2, s.cy - H/2, W, H, -W/2, -H/2, W, H);
        }
        ctx.strokeStyle = "rgba(255,255,255,0.35)";
        ctx.lineWidth   = 1.5;
        ctx.stroke();
        ctx.restore();
      });

      // Dark overlay to match video overlays
      ctx.globalAlpha = 0.42;
      ctx.fillStyle   = "rgba(0,0,0,1)";
      ctx.fillRect(0, 0, W, H);
      ctx.globalAlpha = 1;

      if (p < 1) {
        animFrameRef.current = requestAnimationFrame(draw);
      } else {
        setTimeout(() => {
          ctx.clearRect(0, 0, W, H);
          setCanvasActive(false);
        }, 80);
      }
    };

    animFrameRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animFrameRef.current);
      ctx.clearRect(0, 0, W, H);
    };
  }, [transType, current, nextSlide]);

  // ── Video styles ───────────────────────────────────────────────────────────
  // ✅ CRITICAL FIX: During canvas transitions videos stay at opacity:1 so
  // canvas can read their pixels. Only z-index changes to keep them behind canvas.
  const getVideoStyle = (i) => {
    const isCur  = i === current;
    const isNext = i === nextSlide;

    if (transType === "cube" || transType === "shatter") {
      // Both videos stay visible (for canvas drawImage) but behind the canvas
      if (isCur)  return { opacity: 1, zIndex: 0 };
      if (isNext) return { opacity: 1, zIndex: 1 };
      return { opacity: 0 };
    }

    if (transType === "ripple") {
      if (isCur && phase === "out") return {
        opacity: 0, transform: "scale(1.1)", filter: "blur(14px)",
        transition: `all ${TRANSITION_MS * 0.5}ms ease`,
        zIndex: 1,
      };
      if (isNext && phase === "out") return {
        opacity: 0, transform: "scale(0.97)", filter: "blur(10px)",
        transition: "none", zIndex: 2,
      };
      if (isNext && phase === "in") return {
        opacity: 1, transform: "scale(1)", filter: "blur(0px)",
        transition: `all ${TRANSITION_MS * 0.6}ms ease`, zIndex: 2,
      };
    }

    if (isCur) return { opacity: 1, zIndex: 1 };
    return { opacity: 0, zIndex: 0 };
  };

  // ── Text styles ────────────────────────────────────────────────────────────
  const getTextStyle = (i) => {
    if (!videoReady) return { opacity: 0, pointerEvents: "none" };

    const isCur  = i === current;
    const isNext = i === nextSlide;

    // ✅ Hide text during canvas-based transitions so it doesn't overlap tiles
    if ((transType === "cube" || transType === "shatter") && (isCur || isNext)) {
      return { opacity: 0, pointerEvents: "none", transition: "none" };
    }

    if (isCur && phase === "out") return {
      opacity: 0, transform: "translateY(-14px)",
      transition: `opacity ${TRANSITION_MS * 0.3}ms ease, transform ${TRANSITION_MS * 0.3}ms ease`,
      pointerEvents: "none",
    };
    if (isNext && phase === "out") return {
      opacity: 0, transform: "translateY(16px)",
      transition: "none", pointerEvents: "none",
    };
    if (isNext && phase === "in") return {
      opacity: 1, transform: "translateY(0)",
      transition: `opacity ${TRANSITION_MS * 0.45}ms ease ${TRANSITION_MS * 0.35}ms, transform ${TRANSITION_MS * 0.45}ms ease ${TRANSITION_MS * 0.35}ms`,
      pointerEvents: "auto",
    };
    if (isCur && phase === "idle") return {
      opacity: 1, transform: "translateY(0)",
      transition: "opacity 500ms ease, transform 500ms ease",
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
      {/* Videos — always rendered, z-index controlled */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.id}
          className="absolute inset-0"
          style={{ ...getVideoStyle(i), willChange: "opacity, transform, filter" }}
        >
          <video
            ref={(el) => (videoRefs.current[i] = el)}
            src={slide.video}
            muted loop playsInline preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            disablePictureInPicture
            tabIndex={-1}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.38) 50%, rgba(0,0,0,0.70) 100%)",
            }}
          />
        </div>
      ))}

      {/* Canvas — sits above videos during tile transitions */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: canvasActive ? 10 : -1,
          display: canvasActive ? "block" : "none",
        }}
      />

      {/* Text layers */}
      <div className="absolute inset-0 z-20">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
            style={getTextStyle(i)}
          >
            <div className="max-w-4xl w-full">
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-[1.05] text-white tracking-tighter font-space mb-6"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
              >
                {slide.headline}
              </h1>
              <div className="flex items-center justify-center gap-4 max-w-xl mx-auto">
                <span className="w-1 h-10 bg-light-primary block shrink-0" />
                <p
                  className="text-zinc-200 text-base md:text-lg leading-relaxed font-poppins"
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
            onClick={() => goTo(i)}
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
                width:  i === current ? "8px" : "5px",
                height: i === current ? "8px" : "5px",
                backgroundColor: i === current ? "white" : "rgba(255,255,255,0.4)",
              }}
            />
          </button>
        ))}
      </div>

      {/* Progress bar */}
      {!isPaused && phase === "idle" && (
        <div className="absolute bottom-0 left-0 right-0 z-30 h-[3px] bg-white/10">
          <div
            key={`${current}-bar`}
            className="h-full bg-light-primary"
            style={{ animation: `heroProgress ${HOLD_DURATION}ms linear forwards` }}
          />
        </div>
      )}
    </div>
  );
}
