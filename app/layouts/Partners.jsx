"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { partners } from "@/lib/content/partners";

export default function Partners() {
  // Two copies are enough for a perfect loop with -50% translation
  const scrollItems = [...partners, ...partners];

  return (
    <section
      aria-label="Enov8 Technologies Partners"
      className="bg-white dark:bg-black py-16 md:py-24 overflow-hidden transition-colors duration-300"
      id="partners"
    >
      {/* ── HEADER ───────────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center mb-10 md:mb-16 gap-4">
          <div className="flex items-center gap-4">
            <span className="w-1 h-10 bg-light-primary block shrink-0" />
            <h2 className="text-[#1A1A37] dark:text-white">
              Our Partners
            </h2>
          </div>
          <p className="dark:text-white/90 max-w-2xl">
            We collaborate with a curated network of trusted partners to deliver
            bespoke solutions that solve your immediate challenges while
            future-proofing your business.
          </p>
        </div>
      </div>

      {/* ── INFINITE MARQUEE BANNER ───────────────────────────────────────────
          - CSS-only: no JS animation, no requestAnimationFrame
          - Pauses on hover
          - Left/right edges fade out with white gradient masks
      ──────────────────────────────────────────────────────────────────────── */}
      <div className="relative group">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-40 z-10 pointer-events-none bg-linear-to-r from-white dark:from-black to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-40 z-10 pointer-events-none bg-linear-to-l from-white dark:from-black to-transparent" />

        {/* Outer clip */}
        <div className="flex overflow-hidden select-none">
          {/* Inner track — CSS marquee animation */}
          <ul
            className="flex items-center gap-12 md:gap-20 py-4 animate-marquee"
            style={{
              width: "max-content",
            }}
          >
            {scrollItems.map((partner, i) => (
              <li
                key={`${partner.id}-${i}`}
                className="shrink-0 flex items-center justify-center w-36 md:w-44 h-20"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={130}
                  height={52}
                  style={{ height: "auto" }}
                  className="object-contain max-h-12 md:max-h-14 w-auto dark:invert"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
