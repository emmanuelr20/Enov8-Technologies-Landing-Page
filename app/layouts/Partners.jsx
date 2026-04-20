"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const ScrollReveal = dynamic(() => import("scrollreveal"), { ssr: false });

// Drop your logo files into /public/logos/ and update filenames here
const partners = [
  { id: "cisco",       src: "/cisco.svg",       alt: "Cisco",           w: 130, h: 52 },
  { id: "dynaAI",      src: "/dyna-ai.png",     alt: "Dyna AI",         w: 130, h: 52 }, // ← use PNG instead
  { id: "microsoft",   src: "/microsoft.svg",   alt: "Microsoft",       w: 130, h: 52 },
  { id: "infobip",     src: "/infobip.svg",      alt: "Infobip",         w: 130, h: 52 },
  { id: "aws",         src: "/aws.svg",          alt: "AWS",             w: 100, h: 52 },
  { id: "oracle",      src: "/oracle.svg",       alt: "Oracle",          w: 130, h: 52 },
  { id: "connex",      src: "/connex.svg",       alt: "Connex One",      w: 130, h: 52 },
  { id: "fico",        src: "/fico.svg",          alt: "FICO",            w: 130, h: 52 },
  { id: "kissflow",    src: "/kissflow.svg",      alt: "Kissflow",        w: 130, h: 52 },
  { id: "freshdesk",   src: "/freshdesk.svg",    alt: "Freshdesk",       w: 130, h: 52 }, // ← PNG
  { id: "temenos",     src: "/temenos.svg",      alt: "Temenos",         w: 130, h: 52 },
  { id: "acuant",      src: "/acuant.svg",       alt: "Acuant",          w: 130, h: 52 },
  { id: "ibm",         src: "/ibm.svg",           alt: "IBM",             w: 130, h: 52 }, // ← PNG
  { id: "sophos",      src: "/sophos.svg",        alt: "Sophos",          w: 130, h: 52 },
  { id: "azure",       src: "/azure.svg",         alt: "Microsoft Azure", w: 130, h: 52 }, // ← PNG
  { id: "fortinet",    src: "/fortinet.svg",      alt: "Fortinet",        w: 130, h: 52 },
  { id: "zoho",        src: "/zoho.svg",          alt: "Zoho",            w: 130, h: 52 },
  { id: "metamap",     src: "/metamap.png",       alt: "MetaMap",         w: 130, h: 52 },
  { id: "crowdstrike", src: "/crowdstrike.svg",   alt: "CrowdStrike",     w: 130, h: 52 },
  { id: "tdafrica",    src: "/tdafrica.jpg",      alt: "TD Africa",       w: 130,  h: 80 }, // ← PNG, square logo
  { id: "atos",        src: "/atos.svg",           alt: "Atos",            w: 130, h: 52 },
  { id: "pickcel",     src: "/pickcel.svg",        alt: "Pickcel",         w: 130, h: 52 },
];

export default function Partners() {
  const headerRef = useRef(null);

  // Triple-duplicate so even on ultra-wide screens the seam is never visible
  const scrollItems = [...partners, ...partners, ...partners];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sr = require("scrollreveal").default;
      if (headerRef.current) {
        sr().reveal(headerRef.current, {
          origin: "bottom",
          distance: "30px",
          duration: 500,
          easing: "ease-out",
          delay: 100,
          reset: false,
        });
      }
    }
  }, []);

  return (
    <section
      aria-label="Enov8 Technologies Partners"
      className="bg-white dark:bg-black py-24 overflow-hidden transition-colors duration-300"
      id="partners"
    >
      {/* ── HEADER ───────────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={headerRef}
          className="flex flex-col items-center text-center mb-16 gap-4"
        >
          <div className="flex items-center gap-4">
            <span className="w-1 h-10 bg-light-primary block shrink-0" />
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A37] dark:text-white font-space">
              Our Partners
            </h2>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 text-base sm:text-lg leading-relaxed font-poppins max-w-2xl">
            We collaborate with a curated network of trusted partners to deliver bespoke 
            solutions that solve your immediate challenges while future-proofing your 
            business.
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
            className="flex items-center gap-16 py-4 animate-marquee group-hover:paused"
            style={{
              // Width = number of ORIGINAL partners × (item width + gap)
              // We animate translateX by exactly -1/3 of total (one full set)
              width: "max-content",
            }}
          >
            {scrollItems.map((partner, i) => (
              <li
                key={`${partner.id}-${i}`}
                className="shrink-0 flex items-center justify-center w-44 h-20"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={130}
                  height={52}
                  className="object-contain max-h-14 w-auto opacity-100"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
