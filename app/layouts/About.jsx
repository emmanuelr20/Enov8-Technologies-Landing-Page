"use client";

import { useRef, useEffect, useState } from "react";
import { Target, Award } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";

const ScrollReveal = dynamic(() => import("scrollreveal"), { ssr: false });

export default function About() {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const badgeRef = useRef(null);

  // ✅ Track when the image has actually loaded so badge only appears after
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sr = require("scrollreveal").default;

    // ── Left column: image slides in from left ─────────────────────────────
    if (imgRef.current) {
      sr().reveal(imgRef.current, {
        origin: "left",
        distance: "50px",
        duration: 700,
        easing: "ease-out",
        delay: 100,
        reset: false,
      });
    }

    // ── Right column: text slides in from right ────────────────────────────
    // ✅ Must target the element directly (not a wrapper) and use interval
    // to wait for dynamic import to be ready
    const revealText = () => {
      if (textRef.current) {
        sr().reveal(textRef.current, {
          origin: "right",
          distance: "50px",
          duration: 700,
          easing: "ease-out",
          delay: 200, // slight delay after image so they stagger nicely
          reset: false,
        });
        return true;
      }
      return false;
    };

    // Retry until ref is mounted (handles dynamic import delay)
    if (!revealText()) {
      const interval = setInterval(() => {
        if (revealText()) clearInterval(interval);
      }, 100);
      return () => clearInterval(interval);
    }
  }, []);

  // ── Badge scroll reveal — fires ONLY after image has loaded ───────────────
  useEffect(() => {
    if (!imgLoaded || typeof window === "undefined") return;

    const sr = require("scrollreveal").default;
    if (badgeRef.current) {
      sr().reveal(badgeRef.current, {
        origin: "bottom",
        distance: "20px",
        duration: 500,
        easing: "ease-out",
        delay: 450, // fires well after the image has settled
        reset: false,
      });
    }
  }, [imgLoaded]);

  return (
    <section className="py-16 md:py-24 lg:py-40 overflow-hidden" id="about">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12 lg:gap-24">
          {/* LEFT COLUMN: IMAGE + BADGE ──────────────────────────────────── */}
          <div className="relative w-full lg:w-1/2" ref={imgRef}>
            <div className="relative group">
              {/* Main image */}
              <div className="hidden lg:block relative z-10 overflow-hidden shadow-[0_50px_100px_-30px_rgba(0,0,0,0.15)] h-[750px]">
                <Image
                  src="/sections/about1.webp"
                  alt="Enov8 Technology Solutions"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onLoad={() => setImgLoaded(true)}
                />
              </div>

              {/* ✅ Badge is its OWN ref, starts invisible, reveals after image loads */}
              <div
                ref={badgeRef}
                className="hidden absolute -bottom-6 -right-6 md:bottom-12 md:-right-12 z-20 bg-light-primary px-10 py-6 text-white shadow-2xl lg:flex flex-col items-center justify-center min-w-[160px]"
                // Keep it invisible until SR fires so it never shows before image
                style={{ visibility: imgLoaded ? "visible" : "hidden" }}
              >
                <div className="text-center">
                  <span className="block text-5xl leading-none mb-2">100%</span>
                  <span className="text-[11px] uppercase tracking-[0.2em] opacity-90 leading-tight font-medium">
                    Quality <br /> Guaranteed
                  </span>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-light-primary/5 rounded-full blur-3xl" />
            </div>
          </div>

          {/* RIGHT COLUMN: TEXT ───────────────────────────────────────────── */}
          <div className="w-full lg:w-1/2" ref={textRef}>
            {/* Tagline */}
            {/* <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-light-primary" />
              <p className="text-light-primary uppercase tracking-[0.3em]">
                Excellence Through Innovation
              </p>
            </div> */}

            {/* Heading */}
            <h2 className="text-[#1A1A37] dark:text-white leading-[1.05] mb-10 tracking-tighter">
              We Design The <span className="text-light-primary">Future</span>{" "}
              of Your Business
            </h2>

            {/* Body text */}
            <div className="space-y-8 text-zinc-600 dark:text-white/90 leading-relaxed">
              <p className="md:text-[20px]">
                <span className=" text-[#1A1A37] dark:text-white">
                  Enov8 Technologies
                </span>{" "}
                is more than a service provider; we are architects of digital
                transformation. We specialize in merging IT Consulting with
                precision Software Development to give your organization a
                distinct competitive edge.
              </p>
              <p className="md:text-[20px]">
                In a world of rapidly evolving tech, we help our clients bridge
                the gap between legacy operations and digital-first growth. By
                harnessing AI and data-driven strategies, we bring clarity to
                complexity.
              </p>
            </div>

            {/* Value highlights */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm flex items-center justify-center text-light-primary">
                  <Target size={24} />
                </div>
                <span className=" text-[#1A1A37] dark:text-white uppercase text-[13px] font-medium">
                  Scalable Strategy
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm flex items-center justify-center text-light-primary ">
                  <Award size={24} />
                </div>
                <span className=" text-[#1A1A37] dark:text-white uppercase text-[13px] font-medium">
                  Expert Execution
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12">
              <a
                href="/docs/enov8technologies-brochure.pdf"
                download
                className="inline-flex items-center gap-3 bg-light-primary hover:bg-light-primary/90 text-white text-base px-10 py-5 transition-all shadow-lg shadow-light-primary/20 group tracking-wide font-medium"
              >
                Download Brochure
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* STATS BAND ─────────────────────────────────────────────────────── */}
        <div className="mt-20 md:mt-24 lg:mt-32 pt-16 md:pt-20 border-t border-zinc-200 dark:border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { stat: "50+", label: "Projects Shipped" },
              { stat: "15+", label: "Global Partners" },
              { stat: "24/7", label: "Post-Deployment Support" },
            ].map(({ stat, label }) => (
              <div key={label} className="text-start md:text-center group">
                <h2 className="text-[#1A1A37] dark:text-white tracking-tighter mb-2">
                  {stat}
                </h2>
                <p className="uppercase">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
