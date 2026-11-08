import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CalendarClock, Phone } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { ServiceIcon } from "@/components/Icons";
import { buildServiceMetadata } from "@/lib/seoMetadata";
import { getService, services } from "@/lib/servicesData";
import { SITE_URL, absoluteUrl, contact, site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return buildServiceMetadata(slug);
}

const anchor = (heading) =>
  heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const index = services.findIndex((s) => s.slug === slug);
  const related = [1, 2, 3].map((n) => services[(index + n) % services.length]);
  const url = absoluteUrl(`/services/${slug}`);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.intro,
    url,
    image: absoluteUrl(service.heroImage),
    areaServed: [{ "@type": "Country", name: "Nigeria" }, { "@type": "Continent", name: "Africa" }],
    provider: { "@id": `${SITE_URL}/#organization`, "@type": "Organization", name: site.name, url: SITE_URL },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.sections.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.heading, description: s.text },
      })),
    },
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <PageHero
        eyebrow={`Service ${String(index + 1).padStart(2, "0")} / ${services.length}`}
        title={service.title}
        description={service.description}
        crumbs={[
          { name: "Services", href: "/services" },
          { name: service.title, href: `/services/${slug}` },
        ]}
        image={service.heroImage}
      >
        <div className="flex flex-wrap items-center gap-3">
          <button type="button" data-open-contact data-magnetic className="btn btn-primary">
            Discuss your project
            <span className="btn-icon">
              <ArrowUpRight />
            </span>
          </button>
          <a href={site.booking} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <CalendarClock className="size-4" /> Book a call
          </a>
          {service.partnerLogo && (
            <span className="ml-1 inline-flex h-14 items-center gap-3 rounded-full bg-white px-5 text-sm font-medium text-[#0a0b10]">
              <Image src={service.partnerLogo} alt="Zoho" width={72} height={28} className="h-6 w-auto" />
              Certified partner
            </span>
          )}
        </div>
      </PageHero>

      <article className="section-y !pt-16 sm:!pt-20">
        <div className="container-x grid gap-14 lg:grid-cols-[18rem_1fr] lg:gap-20">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <nav aria-label="On this page" className="hidden lg:block">
              <p className="eyebrow">On this page</p>
              <ol className="mt-5 grid gap-1 border-l border-line">
                <li>
                  <a href="#overview" className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-fg-2 transition-colors hover:border-brand hover:text-fg">
                    Overview
                  </a>
                </li>
                {service.sections.map((s) => (
                  <li key={s.heading}>
                    <a
                      href={`#${anchor(s.heading)}`}
                      className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-fg-2 transition-colors hover:border-brand hover:text-fg"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="ink relative mt-10 overflow-hidden rounded-[1.5rem] p-6" data-spotlight>
              <div className="aurora opacity-60" aria-hidden="true">
                <i />
                <i />
              </div>
              <div className="relative">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-bright text-white">
                  <ServiceIcon name={service.icon} className="size-6" />
                </span>
                <p className="mt-6 font-display text-xl font-semibold leading-tight tracking-tight">
                  Let's help you on your digital transformation journey.
                </p>
                <p className="mt-2 text-sm text-fg-2">We reinvent, you thrive.</p>
                <a href={contact.phoneHref} className="mt-5 flex items-center gap-2 text-sm text-fg">
                  <Phone className="size-4 text-brand" /> {contact.phoneDisplay}
                </a>
                <button type="button" data-open-contact className="btn btn-primary btn-sm mt-5 w-full justify-between">
                  Start consultation
                  <span className="btn-icon">
                    <ArrowUpRight />
                  </span>
                </button>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="min-w-0">
            <section id="overview" aria-labelledby="overview-title" className="scroll-mt-28">
              <h2 id="overview-title" className="sr-only">
                {service.title} overview
              </h2>
              <p className="font-display text-[clamp(1.5rem,1rem+1.5vw,2.4rem)] font-medium leading-[1.25] tracking-[-0.025em]" data-reveal>
                {service.intro}
              </p>
              <ul className="mt-8 flex flex-wrap gap-2" aria-label="Capabilities" data-reveal>
                {service.tags.map((t) => (
                  <li key={t} className="rounded-full border border-line-strong px-4 py-1.5 text-sm text-fg-2">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-[1.75rem]" data-reveal="scale">
                <Image
                  src={service.featureImage}
                  alt={`${service.title} solutions by ${site.name}`}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="parallax object-cover"
                />
              </div>
            </section>

            <ol className="mt-16 grid gap-4 sm:grid-cols-2">
              {service.sections.map((s, i) => (
                <li
                  key={s.heading}
                  id={anchor(s.heading)}
                  className={`scroll-mt-28 ${service.sections.length % 2 === 1 && i === 0 ? "sm:col-span-2" : ""}`}
                  data-reveal
                  style={{ "--d": `${(i % 2) * 80}ms` }}
                >
                  <section data-spotlight className="card ring-glow h-full overflow-hidden p-7 sm:p-9">
                    <div className="relative">
                      <span className="font-display text-sm text-brand">{String(i + 1).padStart(2, "0")}</span>
                      <h2 className="mt-8 text-2xl sm:text-3xl">{s.heading}</h2>
                      <p className="mt-4 text-fg-2">{s.text}</p>
                    </div>
                  </section>
                </li>
              ))}
            </ol>

            {service.highlight && (
              <aside
                className="relative mt-4 overflow-hidden rounded-[1.75rem] bg-brand-bright p-8 text-white sm:p-12"
                data-reveal="scale"
              >
                <div className="aurora opacity-50" aria-hidden="true">
                  <i />
                  <i />
                </div>
                <div className="relative">
                  <p className="eyebrow !text-white/70">{service.highlight.heading}</p>
                  <p className="mt-5 font-display text-[clamp(1.4rem,1rem+1.2vw,2.1rem)] font-medium leading-snug tracking-[-0.02em]">
                    “{service.highlight.text}”
                  </p>
                </div>
              </aside>
            )}
          </div>
        </div>
      </article>

      {/* Related services */}
      <section aria-labelledby="related-title" className="pb-24 sm:pb-32">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6 border-t border-line pt-12">
            <h2 id="related-title" className="display-md">
              Explore more <span className="serif text-accent">services</span>
            </h2>
            <Link href="/services" className="btn btn-ghost hidden sm:inline-flex">
              All services
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {related.map((r, i) => (
              <li key={r.slug} className="min-w-0" data-reveal style={{ "--d": `${i * 80}ms` }}>
                <Link href={`/services/${r.slug}`} className="card group flex h-full min-w-0 items-center gap-5 overflow-hidden p-2 pr-5">
                  <span className="relative size-24 shrink-0 overflow-hidden rounded-[1rem]">
                    <Image
                      src={r.heroImage}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-lg font-semibold leading-tight tracking-tight">{r.title}</span>
                    <span className="mt-1 block truncate text-sm text-muted">{r.tags.join(" · ")}</span>
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
