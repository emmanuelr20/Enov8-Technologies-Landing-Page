"use client";

import { useEffect, useRef } from "react";
import { FaHandsHelping } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import dynamic from "next/dynamic";

import HeroBackground from "@/components/HeroBackground";

export default function Hero() {
  const cardsRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && cardsRef.current) {
      const sr = require("scrollreveal").default;
      sr().reveal(cardsRef.current, {
        origin: "bottom",
        distance: "20px",
        duration: 400,
        easing: "ease-out",
        delay: 200,
        reset: false,
      });
    }
  }, []);

  return (
    <section
      aria-label="Home Enov8 Technologies"
      className="relative z-10 cursor-pointer"
      id="home"
    >
      {/* ── VIDEO SLIDER ──────────────────────────────────────────────────── */}
      <HeroBackground />

      {/* THE OVERLAP CARDS - Layered Depth Style */}
      <div className="relative z-30 px-4 lg:px-6">
        <div className="container mx-auto flex justify-center">
          <div
            ref={cardsRef}
            className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.85fr_0.85fr] gap-5 w-full max-w-6xl -mt-10 md:-mt-[90px]"
          >
            {/* Card 1: Brand Color - Years of Excellence */}
            <div
              className="relative group overflow-hidden bg-light-primary/87 p-6 sm:p-8 md:p-10 text-white shadow-lg flex flex-col min-h-[250px] md:min-h-[280px] xl:text-center"
              suppressHydrationWarning
            >
              {/* Big number + title inline — TBO style */}
              <div className="flex items-start lg:items-center gap-4 mb-6 xl:justify-center">
                <h3 className="leading-tight tracking-tight text-white">
                  Years Of <br className="hidden xl:block" />
                  Excellence
                </h3>
              </div>

              <p className="text-white/90!">
                Excellence is our baseline. From core infrastructure to
                client-facing solutions, we maintain an uncompromising standard
                of quality. We don't believe in shortcuts; we believe in
                precision engineering as a standard.
              </p>

              {/* Hover glow */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Card 2: Collaboration */}
            <div
              className="bg-white dark:bg-zinc-900 p-5 sm:p-6 md:p-8 shadow-lg flex flex-col min-h-[250px] md:min-h-[280px] border border-zinc-100 dark:border-zinc-800 md:mt-12 transition-colors duration-300"
              suppressHydrationWarning
            >
              {/* Icon + Title horizontal — TBO style */}
              <div className="flex items-center gap-4 mb-5">
                <div className="text-light-primary shrink-0">
                  <FaHandsHelping size={44} strokeWidth={1.5} />
                </div>
                <h3 className="text-[#1A1A37] dark:text-white tracking-tight leading-tight">
                  Collaboration
                </h3>
              </div>
              <p className="dark:text-white/95">
                We align our goals with yours to amplify impact. Collective
                intelligence allows us to deliver results that transcend
                individual effort. Shared success is our core metric.
              </p>
            </div>

            {/* Card 3: Clients First */}
            <div
              className="bg-white dark:bg-zinc-900 p-5 sm:p-6 md:p-8 shadow-lg flex flex-col min-h-[250px] md:min-h-[280px] border border-zinc-100 dark:border-zinc-800 md:mt-12 transition-colors duration-300"
              suppressHydrationWarning
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="text-light-primary shrink-0">
                  <FaUsers size={44} strokeWidth={1.5} />
                </div>
                <h3 className="text-[#1A1A37] dark:text-white tracking-tight leading-tight">
                  Clients First
                </h3>
              </div>
              <p className="dark:text-white/95">
                Our mission is to remove friction. We streamline the complex
                technical landscape so you can focus entirely on your growth and
                core vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
