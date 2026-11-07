import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { ServiceIcon } from "@/components/Icons";
import { buildServicesIndexMetadata } from "@/lib/seoMetadata";
import { services } from "@/lib/servicesData";
import { absoluteUrl, site } from "@/lib/site";

export const metadata = buildServicesIndexMetadata();

// Bento rhythm: some cards span two columns for visual variety.
const wide = new Set([0, 5, 6, 11]);

export default function ServicesPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${site.name} services`,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(`/services/${s.slug}`),
      name: s.title,
    })),
  };

  return (
    <>
      <JsonLd data={itemListJsonLd} />
      <PageHero
        eyebrow="Business systems capability"
        title={
          <>
            Unified operations for growing, <span className="serif text-accent">connected businesses.</span>
          </>
        }
        description="We help growing African businesses replace disconnected tools and manual processes with dependable systems, from first assessment through implementation and support."
        crumbs={[{ name: "Services", href: "/services" }]}
        image="/sections/servicebackground.webp"
      >
        <button type="button" data-open-contact className="btn btn-primary" data-magnetic>
          Book a systems assessment
          <span className="btn-icon">
            <ArrowUpRight />
          </span>
        </button>
      </PageHero>

      <section aria-labelledby="all-services-title" className="section-y">
        <div className="container-x">
          <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="eyebrow" data-reveal>
                <span className="dot" /> What we make work · {services.length} service lines
              </p>
              <h2 id="all-services-title" className="display-md mt-6" data-reveal style={{ "--d": "80ms" }}>
                One operating model, connected from strategy to delivery.
              </h2>
            </div>
            <p className="lede max-w-lg" data-reveal style={{ "--d": "140ms" }}>
              Choose the part of your operation that needs to work better. We will bring together
              the right platforms, software, infrastructure, and support around it.
            </p>
          </div>
          <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((s, i) => (
              <li
                key={s.slug}
                className={wide.has(i) ? "xl:col-span-2" : ""}
                data-reveal
                style={{ "--d": `${(i % 4) * 70}ms` }}
              >
                <Link
                  href={`/services/${s.slug}`}
                  data-spotlight
                  className="card ring-glow group flex h-full min-h-[26rem] flex-col overflow-hidden p-2"
                >
                  <div className="relative h-48 overflow-hidden rounded-[1rem] sm:h-56">
                    <Image
                      src={s.heroImage}
                      alt={`${s.title} by ${site.name}`}
                      fill
                      sizes={wide.has(i) ? "(min-width: 1280px) 45vw, (min-width: 768px) 50vw, 100vw" : "(min-width: 1280px) 22vw, (min-width: 768px) 50vw, 100vw"}
                      className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                    <span className="absolute left-4 top-4 grid size-11 place-items-center rounded-xl bg-white/90 text-[#0a0b10]">
                      <ServiceIcon name={s.icon} className="size-5" />
                    </span>
                    <span className="absolute bottom-3 right-4 font-display text-sm text-white/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="relative flex flex-1 flex-col p-5">
                    <h2 className="text-2xl">{s.title}</h2>
                    <p className="mt-3 text-[0.95rem] text-fg-2">{s.description}</p>
                    <div className="mt-auto flex items-end justify-between gap-4 pt-6">
                      <ul className="flex flex-wrap gap-1.5" aria-label="Capabilities">
                        {s.tags.slice(0, 3).map((t) => (
                          <li key={t} className="rounded-full bg-bg-2 px-2.5 py-1 text-xs text-fg-2">
                            {t}
                          </li>
                        ))}
                      </ul>
                      <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line-strong transition-[background-color,border-color,color,rotate] duration-500 ease-out-expo group-hover:rotate-45 group-hover:border-brand-bright group-hover:bg-brand-bright group-hover:text-white">
                        <ArrowUpRight className="size-5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
