import { Fragment } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import HeroReel from "@/components/home/HeroReel";
import LagosClock from "@/components/home/LagosClock";
import { heroSlides } from "@/lib/content";

// Each word is its own span so the headline can "blur-rise" in sequence.
const words = ["Turn", "fragmented", "operations", "into", "dependable"];

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="ink relative isolate overflow-hidden pb-6 pt-32 sm:pt-40">
      <div className="aurora" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div className="container-x relative">
        <div className="flex items-center justify-between gap-4">
          <p className="eyebrow fade-up">
            <span className="dot" />
            <span className="hidden sm:inline">Business systems partner ·</span> Lagos, Nigeria
          </p>
          <div className="fade-up hidden sm:block" style={{ "--d": "120ms" }}>
            <LagosClock />
          </div>
        </div>

        <h1 id="hero-title" className="display-xl rise mt-8 max-w-[20ch] text-[clamp(2.6rem,0.6rem+6.4vw,7.75rem)] sm:mt-10">
          {words.map((w, i) => (
            <Fragment key={w}>
              <span style={{ "--i": i }}>{w}</span>{" "}
            </Fragment>
          ))}
          <span style={{ "--i": words.length }} className="serif text-neon">
            business systems.
          </span>
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="lede fade-up max-w-xl" style={{ "--d": "450ms" }}>
            We help growing African businesses connect their workflows, platforms, and
            infrastructure so they can operate with less friction and scale with confidence.
          </p>
          <div className="fade-up flex flex-wrap gap-3" style={{ "--d": "550ms" }}>
            <button type="button" data-open-contact data-magnetic className="btn btn-primary">
              Book a systems assessment
              <span className="btn-icon">
                <ArrowUpRight />
              </span>
            </button>
            <Link href="/services" className="btn btn-ghost">
              Explore services
            </Link>
          </div>
        </div>

        <div className="fade-up relative mt-14 sm:mt-20" style={{ "--d": "650ms" }}>
          <HeroReel slides={heroSlides} />

          {/* Rotating badge */}
          <div
            className="absolute -top-12 right-4 hidden size-28 place-items-center sm:grid lg:-top-14 lg:right-10 lg:size-32"
            aria-hidden="true"
          >
            <div className="absolute inset-0 rounded-full bg-brand-bright shadow-[0_20px_60px_-10px_var(--glow)]" />
            <svg viewBox="0 0 120 120" className="spin-slow absolute inset-0 text-white">
              <defs>
                <path id="badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
              </defs>
              <text fontSize="9" fill="currentColor" fontWeight="500">
                <textPath href="#badge-circle" textLength="274" lengthAdjust="spacing">ARCHITECTS OF DIGITAL TRANSFORMATION ✦ </textPath>
              </text>
            </svg>
            <ArrowDown className="relative size-7 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
