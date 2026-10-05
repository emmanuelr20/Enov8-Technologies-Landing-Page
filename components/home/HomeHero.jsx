import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionEntrance, MotionStagger } from "@/components/MotionEntrance";
import { industries } from "@/lib/content/company";

export default function HomeHero() {
  return (
    <div className="relative">
      <section id="home" aria-labelledby="home-title" className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden bg-zinc-950 text-white">
        <video
          src="/video/hero-background.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/85" />

        <div className="relative z-10 mx-auto flex w-full max-w-[var(--container-content)] flex-1 items-center justify-center px-6 pb-12 pt-28 md:px-12 md:pb-16 md:pt-32 lg:min-h-100svh lg:px-16 lg:pb-[clamp(18rem,28vw,26rem)] lg:pt-32">
          <MotionStagger trigger="mount" delay={0.25} className="mx-auto max-w-6xl text-center min-[1426px]:pt-12">
            <h1 id="home-title" className="type-hero text-[1.875rem] leading-[1.12] text-balance text-white min-[480px]:text-[2rem] min-[640px]:text-[2.25rem] md:text-[2.5rem] lg:text-[2.75rem] xl:text-[3.5rem] 2xl:text-[4rem]">
              <span className="block">Turn complex technology into</span>
              <span className="block">dependable business systems.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-6 text-white/80 md:text-lg md:leading-[1.55]">
              Enov8 Technologies connects strategy, implementation, and operational support to help organizations modernize with confidence.
            </p>
            <ul className="mt-8 flex list-none flex-col items-center justify-center gap-4 p-0 sm:flex-row">
              <li>
                <Link href="/#contact" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-on-brand shadow-sm transition-colors hover:bg-brand-hover">
                  Start a consultation <ArrowRight aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link href="/services" className="focus-ring inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-[#5FA3FF] hover:text-[#8bbcff]">
                  Explore solutions <ArrowRight aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </MotionStagger>

          <p className="sr-only">The visual represents Enov8&apos;s connected approach across software, security, infrastructure, and practical operational support.</p>
        </div>

        {/* Circle Wave — only rendered on lg (1024px) upwards */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-[-2px] z-20 hidden h-[calc(clamp(15rem,32vw,30rem)+2px)] lg:block min-[1426px]:h-[calc(clamp(15rem,20vw,30rem)+2px)]">
          <svg viewBox="0 0 1440 402" preserveAspectRatio="none" className="block h-full w-full">
            <defs>
              <linearGradient id="hero-wave-fill" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#007bff" />
                <stop offset="100%" stopColor="#001b43" />
              </linearGradient>
            </defs>
            <path d="M0 402V320C320 32 1120 32 1440 320V402Z" fill="url(#hero-wave-fill)" />
            <path d="M0 320C320 32 1120 32 1440 320" fill="none" stroke="#56a6ff" strokeWidth="4" />
          </svg>
        </div>
      </section>

      <div className="relative z-30 w-full border-t border-[#56a6ff]/30 bg-brand py-8 md:py-10 lg:absolute lg:inset-x-0 lg:bottom-0 lg:border-t-0 lg:bg-transparent lg:pb-8 lg:pt-0">
        <MotionEntrance className="mx-auto grid w-full max-w-[var(--container-content)] gap-6 px-6 md:px-12 lg:px-16 min-[1600px]:grid-cols-[1fr_auto] min-[1600px]:items-center min-[1600px]:gap-8">
          <div className="lg:max-[1600px]:max-w-xl lg:max-[1600px]:mx-auto lg:max-[1600px]:text-center min-[1600px]:max-w-none">
            <p className="type-label mb-2 text-white">Built for complex work</p>
            <h2 id="proof-title" className="type-h3 text-white">One technology partner across the transformation lifecycle.</h2>
          </div>
          <ul className="flex list-none flex-wrap gap-2 p-0 lg:justify-center min-[1600px]:justify-end">
            {industries.map((industry) => (
              <li key={industry}>
                <span className="rounded-full border border-white/30 px-3 py-1.5 text-sm text-white/85">
                  {industry}
                </span>
              </li>
            ))}
          </ul>
        </MotionEntrance>
      </div>
    </div>
  );
}
