"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// One tiny client island that powers every global micro-interaction:
//   [data-reveal]        → fades/slides in when scrolled into view
//   [data-count]         → counts up from 0 to its value once visible
//   [data-spotlight]     → radial highlight follows the pointer (CSS vars)
//   [data-magnetic]      → element leans toward the pointer
//   [data-open-contact]  → opens the consultation <dialog>
// Everything is event-delegated, passive and rAF-throttled.

const reduceMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function countUp(el) {
  const to = Number(el.dataset.count);
  if (!Number.isFinite(to) || reduceMotion()) return;
  const duration = 1400;
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = Math.round(to * eased).toString();
    if (t < 1) requestAnimationFrame(tick);
  };
  el.textContent = "0";
  requestAnimationFrame(tick);
}

export default function Interactions() {
  const pathname = usePathname();

  // Scroll reveals + counters — re-scanned on every route change.
  useEffect(() => {
    window.__enov8Ready = true;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target;
          if (el.hasAttribute("data-reveal")) el.classList.add("is-in");
          if (el.hasAttribute("data-count")) countUp(el);
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    document
      .querySelectorAll("[data-reveal]:not(.is-in), [data-count]")
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  // Pointer effects + dialog delegation — registered once.
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    let frame = 0;
    let last = null;

    const onMove = (e) => {
      last = e;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const ev = last;
        const spot = ev.target.closest?.("[data-spotlight]");
        if (spot) {
          const r = spot.getBoundingClientRect();
          spot.style.setProperty("--mx", `${ev.clientX - r.left}px`);
          spot.style.setProperty("--my", `${ev.clientY - r.top}px`);
        }
        const mag = ev.target.closest?.("[data-magnetic]");
        if (mag && !reduceMotion()) {
          const r = mag.getBoundingClientRect();
          const x = (ev.clientX - (r.left + r.width / 2)) * 0.25;
          const y = (ev.clientY - (r.top + r.height / 2)) * 0.35;
          mag.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
      });
    };

    const onLeave = (e) => {
      const mag = e.target.closest?.("[data-magnetic]");
      if (mag && !mag.contains(e.relatedTarget)) mag.style.transform = "";
    };

    const onClick = (e) => {
      const trigger = e.target.closest?.("[data-open-contact]");
      if (trigger) {
        const dialog = document.getElementById("contact-dialog");
        if (dialog && !dialog.open) {
          e.preventDefault();
          dialog.showModal();
        }
        return;
      }
      // Click on the backdrop closes the dialog.
      if (e.target instanceof HTMLDialogElement && e.target.open) {
        const r = e.target.getBoundingClientRect();
        const inside =
          e.clientX >= r.left &&
          e.clientX <= r.right &&
          e.clientY >= r.top &&
          e.clientY <= r.bottom;
        if (!inside) e.target.close();
      }
    };

    if (finePointer) {
      document.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerout", onLeave, { passive: true });
    }
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onLeave);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
