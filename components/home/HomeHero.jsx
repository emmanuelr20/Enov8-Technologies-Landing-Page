import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeHero() {
  return (
    <section id="home" aria-labelledby="home-title" className="relative isolate flex min-h-[100svh] overflow-hidden bg-zinc-950 text-white">
      <Image
        src="/sections/hero/hero3.webp"
        alt=""
        fill
        preload
        sizes="100vw"
        quality={75}
        className="object-cover"
        aria-hidden="true"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[var(--container-content)] items-center justify-center px-6 pb-[clamp(18rem,28vw,26rem)] pt-28 md:px-12 md:pt-32 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <h1 id="home-title" className="type-hero text-balance text-white">
            <span className="block">Turn complex technology into</span>
            <span className="block">dependable business systems.</span>
          </h1>
          <p className="type-body-lg mx-auto mt-6 max-w-2xl !text-white/80">
            Enov8 Technologies connects strategy, implementation, and operational support to help organizations modernize with confidence.
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

        <p className="sr-only">The visual represents Enov8&apos;s connected approach across software, security, infrastructure, and practical operational support.</p>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[clamp(15rem,32vw,30rem)]">
        <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="h-full w-full">
          <path d="M0 400V320C320 32 1120 32 1440 320V400Z" fill="var(--brand)" />
          <path d="M0 320C320 32 1120 32 1440 320" fill="none" stroke="#56a6ff" strokeWidth="4" />
        </svg>
      </div>
    </section>
  );
}
