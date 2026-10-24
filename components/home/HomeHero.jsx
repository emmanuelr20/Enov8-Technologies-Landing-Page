"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionStagger } from "@/components/MotionEntrance";
import { industries } from "@/lib/content/company";
import HomeHeroBackground from "@/components/home/HomeHeroBackground";
import ConsultationModal from "@/components/ConsultationModal";
import { Button } from "@/components/ui/button";

export default function HomeHero() {
  return (
    <div className="relative">
      <section
        id="home"
        aria-labelledby="home-title"
        className="relative isolate flex min-h-svh flex-col justify-between overflow-hidden bg-zinc-950 text-white"
      >
        <HomeHeroBackground />
        <div aria-hidden="true" className="absolute inset-0 bg-black/85" />

        <div className="relative z-10 mx-auto flex w-full max-w-[var(--container-content)] flex-1 items-center justify-center px-6 pb-12 pt-28 md:px-12 md:pb-16 md:pt-32 lg:min-h-100svh lg:px-16 lg:pb-[clamp(18rem,28vw,26rem)] lg:pt-32">
          <MotionStagger
            trigger="mount"
            delay={0.25}
            className="mx-auto max-w-6xl text-center min-[1426px]:pt-12"
          >
            <h1 id="home-title" className="type-hero text-balance text-white">
              <span className="block">Turn fragmented operations into dependable business systems.</span>
              {/* <span className="block">dependable business systems.</span> */}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.4] text-white/80 md:text-[1.08rem] md:leading-[1.4]">
              We help growing African businesses connect their workflows,
              platforms, and infrastructure so they can operate with less
              friction and scale with confidence.
            </p>
            <div className="mt-8 flex list-none flex-col items-center justify-center gap-4 p-0 ">
              <ConsultationModal
                trigger={
                  <Button
                    variant="secondary"
                    size="sm"
                    className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-medium text-on-brand shadow-sm transition-colors hover:bg-brand-hover"
                  >
                    Book a systems assessment <ArrowRight aria-hidden="true" />
                  </Button>
                }
              />
            </div>
          </MotionStagger>

          <p className="sr-only">
            The visual represents Enov8 Technologies&apos; connected approach across
            software, security, infrastructure, and practical operational
            support.
          </p>
        </div>

        {/* Circle Wave — only rendered on lg (1024px) upwards */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0.5 z-20 hidden h-[calc(clamp(15rem,32vw,30rem)+2px)] lg:block min-[1426px]:h-[calc(clamp(15rem,20vw,30rem)+2px)]"
        >
          <svg
            viewBox="0 0 1440 402"
            preserveAspectRatio="none"
            className="block h-full w-full"
          >
            <defs>
              <linearGradient
                id="hero-wave-fill"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#007bff" />
                <stop offset="100%" stopColor="#001b43" />
              </linearGradient>
            </defs>
            <path
              d="M0 402V320C320 32 1120 32 1440 320V402Z"
              fill="url(#hero-wave-fill)"
            />
            <path
              d="M0 320C320 32 1120 32 1440 320"
              fill="none"
              stroke="#56a6ff"
              strokeWidth="4"
            />
          </svg>
        </div>
      </section>

      <div className="hero-industry-band relative z-30 w-full py-8 md:py-10 lg:absolute lg:inset-x-0 lg:bottom-0 lg:pb-8 lg:pt-0">
        <MotionStagger
          trigger="mount"
          className="mx-auto grid w-full max-w-[var(--container-content)] gap-6 px-6 md:px-12 lg:px-16 min-[1600px]:grid-cols-[1fr_auto] min-[1600px]:items-center min-[1600px]:gap-8"
        >
          <div className="lg:max-[1600px]:max-w-xl lg:max-[1600px]:mx-auto lg:max-[1600px]:text-center min-[1600px]:max-w-none">
            <span className="type-label mb-2 font-normal! text-white">
              Built for complex work
            </span>
            <h2 id="proof-title" className="type-h3 text-white">
              One technology partner across the transformation lifecycle.
            </h2>
          </div>
          <ul className="flex list-none flex-wrap gap-2 p-0 lg:justify-center min-[1600px]:justify-end">
            {industries.map((industry) => (
              <li key={industry}>
                <span className="rounded-full border border-white/30 px-3 py-1 lg:py-1.5 text-sm text-white/85">
                  {industry}
                </span>
              </li>
            ))}
          </ul>
        </MotionStagger>
      </div>
    </div>
  );
}
