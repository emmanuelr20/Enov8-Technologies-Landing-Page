"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaHandsHelping } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import dynamic from "next/dynamic";

const HeroBackground = dynamic(() => import("@/components/HeroBackground"), {
  ssr: false,
  loading: () => (
    <div
      className="relative min-h-[75vh] overflow-hidden bg-[#09090b]"
      aria-hidden="true"
    >
      <Image
        src="/sections/servicebackground.webp"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50" />
    </div>
  ),
});

export default function Hero() {
  const cardsRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && cardsRef.current) {
      const sr = require("scrollreveal").default;
      sr().reveal(cardsRef.current, {
        origin: "bottom",
        distance: "30px",
        duration: 600,
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
          <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.85fr_0.85fr] gap-5 w-full max-w-6xl -mt-10 md:-mt-[90px]">
            {/* Card 1: Brand Color - Years of Excellence */}
            <div className="relative group overflow-hidden bg-light-primary/80 p-6 sm:p-8 md:p-10 text-white shadow-2xl flex flex-col min-h-[250px] md:min-h-[280px] xl:text-center" suppressHydrationWarning>
              {/* Big number + title inline — TBO style */}
              <div className="flex items-start lg:items-center gap-4 mb-6 xl:justify-center">
                <h3 className="text-xl md:text-3xl font-extrabold font-space leading-tight tracking-wide ">
                  Years Of
                  <br />
                  Excellence
                </h3>
              </div>

              <p className="text-white/90 text-sm md:text-[20px] xl:text-lg leading-relaxed font-medium font-poppins">
                Excellence is our baseline. From core infrastructure to
                client-facing solutions, we maintain an uncompromising standard
                of quality. We don't believe in shortcuts; we believe in
                precision engineering as a standard.
              </p>

              {/* Hover glow */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Card 2: Collaboration */}
            <div className="bg-white dark:bg-zinc-900 p-5 sm:p-6 md:p-8 shadow-2xl flex flex-col min-h-[250px] md:min-h-[280px] border border-zinc-100 dark:border-zinc-800 md:mt-12 transition-colors duration-300" suppressHydrationWarning>
              {/* Icon + Title horizontal — TBO style */}
              <div className="flex items-center gap-4 mb-5">
                <div className="text-light-primary shrink-0">
                  <FaHandsHelping size={44} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg md:text-xl font-black text-[#1A1A37] dark:text-white font-space tracking-wide leading-tight">
                  Collaboration
                </h3>
              </div>
              <p className="text-gray-800 dark:text-white/95 text-sm md:text-[20px] xl:text-lg leading-relaxed font-poppins">
                We align our goals with yours to amplify impact. Collective
                intelligence allows us to deliver results that transcend
                individual effort. Shared success is our core metric.
              </p>
            </div>

            {/* Card 3: Clients First */}
            <div className="bg-white dark:bg-zinc-900 p-5 sm:p-6 md:p-8 shadow-2xl flex flex-col min-h-[250px] md:min-h-[280px] border border-zinc-100 dark:border-zinc-800 md:mt-12 transition-colors duration-300" suppressHydrationWarning>
              <div className="flex items-center gap-4 mb-5">
                <div className="text-light-primary shrink-0">
                  <FaUsers size={44} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg md:text-xl font-black text-[#1A1A37] dark:text-white font-space tracking-wide leading-tight">
                  Clients First
                </h3>
              </div>
              <p className="text-gray-800 dark:text-white/95 text-sm md:text-[20px] xl:text-lg leading-relaxed font-poppins">
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
