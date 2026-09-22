import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeHero() {
  return (
    <section id="home" aria-labelledby="home-title" className="relative isolate flex min-h-[100svh] overflow-hidden bg-hero-tint text-foreground">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-28 -z-10 h-52 opacity-80">
        <div className="absolute left-[-4%] top-0 h-24 w-[24%] rounded-r-[2rem] bg-brand/5" />
        <div className="absolute left-[22%] top-8 h-20 w-[12%] rounded-[2rem] bg-brand/5" />
        <div className="absolute right-[24%] top-0 h-24 w-[28%] rounded-[2rem] bg-brand/5" />
        <div className="absolute right-[-4%] top-8 h-20 w-[18%] rounded-l-[2rem] bg-brand/5" />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-[-12%] bottom-[-24%] z-0 h-[48%] rounded-[50%_50%_0_0/28%_28%_0_0] border-t-4 border-hero-band-line bg-hero-band" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[var(--container-content)] items-center justify-center px-6 pb-32 pt-28 md:px-12 md:pb-40 md:pt-32 lg:px-16">
        <div className="mx-auto max-w-5xl -translate-y-5 text-center md:-translate-y-10">
          <h1 id="home-title" className="text-balance text-[clamp(3rem,5.25vw,4.75rem)] font-semibold leading-[1.08] tracking-[-0.055em] text-foreground">
            Turn complex technology into dependable business systems.
          </h1>
          <p className="type-body-lg mx-auto mt-6 max-w-2xl text-muted-foreground">
            Enov8 connects strategy, implementation, and operational support to help organizations modernize with confidence.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/#contact" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-on-brand shadow-sm transition-colors hover:bg-brand-hover">
              Start a consultation <ArrowRight aria-hidden="true" />
            </Link>
            <Link href="/services" className="focus-ring inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover">
              Explore solutions <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-[-8.5rem] flex justify-center px-6 sm:bottom-[-10rem]">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-foreground/70 sm:gap-x-12">
            <span>Strategy</span>
            <span>Implementation</span>
            <span>Security</span>
            <span>Operational support</span>
          </div>
        </div>
        <p className="sr-only">The visual represents Enov8&apos;s connected approach across software, security, infrastructure, and practical operational support.</p>
      </div>
    </section>
  );
}
