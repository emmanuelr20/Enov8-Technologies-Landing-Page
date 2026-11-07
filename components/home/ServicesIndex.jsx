import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceIcon } from "@/components/Icons";
import { services } from "@/lib/servicesData";

export default function ServicesIndex() {
  return (
    <section id="services" aria-labelledby="services-title" className="section-y relative bg-bg-2/60">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow" data-reveal>
              <span className="dot" /> What we do · {services.length} service lines
            </p>
            <h2 id="services-title" className="display-md mt-6" data-reveal style={{ "--d": "80ms" }}>
              Start with the operational problem, then build the <span className="serif text-accent">right system.</span>
            </h2>
          </div>
          <div data-reveal style={{ "--d": "160ms" }}>
            <p className="lede">
              We bring the right platforms, software, infrastructure, and support together around
              the way your organisation actually works.
            </p>
            <Link href="/services" className="btn btn-ghost mt-6">
              View all services
            </Link>
          </div>
        </div>

        <ol className="mt-16 border-t border-line-strong">
          {services.map((s, i) => (
            <li key={s.slug} data-reveal style={{ "--d": `${(i % 4) * 50}ms` }}>
              <Link
                href={`/services/${s.slug}`}
                className="group relative grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 overflow-hidden border-b border-line-strong py-6 sm:grid-cols-[4rem_1fr_auto_auto] sm:gap-6 sm:py-8"
              >
                {/* Hover fill sweeps in from the left */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 origin-left scale-x-0 bg-fg transition-transform duration-700 ease-out-expo group-hover:scale-x-100"
                />
                <span className="relative pl-1 font-display text-sm text-muted tabular-nums transition-colors duration-500 group-hover:text-bg/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative min-w-0">
                  <span className="flex items-center gap-3 font-display max-sm:text-[1.6rem] text-[clamp(1.5rem,1rem+2.4vw,3.4rem)] font-semibold leading-none tracking-[-0.04em] transition-[translate,color] duration-700 ease-out-expo group-hover:translate-x-3 group-hover:text-bg">
                    {/* On hover the icon gives way to the service photo */}
                    <span
                      aria-hidden="true"
                      className="relative hidden h-[0.7em] w-[0.7em] shrink-0 overflow-hidden rounded-full transition-[width,height] duration-700 ease-out-expo group-hover:h-[0.9em] group-hover:w-[2.2em] group-focus-visible:h-[0.9em] group-focus-visible:w-[2.2em] sm:block"
                    >
                      <ServiceIcon name={s.icon} className="absolute inset-0 size-full text-brand transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0" />
                      <Image
                        src={s.heroImage}
                        alt=""
                        fill
                        sizes="160px"
                        className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                      />
                    </span>
                    <span className="text-balance">{s.title}</span>
                  </span>
                  <span className="mt-2 block text-sm text-muted transition-colors duration-500 group-hover:text-bg/70 md:hidden">
                    {s.tags.join(" · ")}
                  </span>
                </span>
                <span className="relative hidden flex-wrap justify-end gap-2 md:flex">
                  {s.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line-strong px-3 py-1 text-xs text-fg-2 transition-colors duration-500 group-hover:border-bg/25 group-hover:text-bg/80"
                    >
                      {t}
                    </span>
                  ))}
                </span>
                <span className="relative grid size-11 place-items-center rounded-full border border-line-strong transition-[background-color,border-color,color,rotate] duration-500 ease-out-expo group-hover:rotate-45 group-hover:border-brand-bright group-hover:bg-brand-bright group-hover:text-white sm:size-14">
                  <ArrowUpRight className="size-5" />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
