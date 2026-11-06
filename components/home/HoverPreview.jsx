"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Wraps a server-rendered list. Rows carry `data-preview="<index>"`; on
// fine-pointer devices a floating image follows the cursor with eased lag.
export default function HoverPreview({ images, children }) {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);
  const [index, setIndex] = useState(-1);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = matchMedia("(pointer: fine) and (min-width: 1024px)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const wrap = wrapRef.current;
    const card = cardRef.current;
    let x = 0, y = 0, tx = 0, ty = 0, raf = 0, last = 0;

    const loop = () => {
      x += (tx - x) * 0.14;
      y += (ty - y) * 0.14;
      const tilt = Math.max(-12, Math.min(12, (tx - x) * 0.08));
      card.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${tilt}deg)`;
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.3 ? requestAnimationFrame(loop) : 0;
    };
    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      if (!last) {
        x = tx;
        y = ty;
      }
      last = 1;
      const row = e.target.closest("[data-preview]");
      setIndex(row ? Number(row.dataset.preview) : -1);
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const onLeave = () => {
      last = 0;
      setIndex(-1);
    };
    wrap.addEventListener("pointermove", onMove, { passive: true });
    wrap.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled]);

  return (
    <div ref={wrapRef} className="relative">
      {children}
      {enabled && (
        <div
          ref={cardRef}
          className="pointer-events-none absolute left-0 top-0 z-20 will-change-transform"
          aria-hidden="true"
        >
          <div
            className={`relative -ml-36 -mt-28 h-56 w-72 overflow-hidden rounded-2xl shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)] transition-[opacity,scale] duration-500 ease-out-expo ${
              index >= 0 ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
          >
            {images.map((src, i) => (
              <Image
                key={src + i}
                src={src}
                alt=""
                fill
                sizes="288px"
                loading="lazy"
                className={`object-cover transition-[opacity,scale] duration-500 ease-out-expo ${
                  i === index ? "scale-100 opacity-100" : "scale-110 opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
