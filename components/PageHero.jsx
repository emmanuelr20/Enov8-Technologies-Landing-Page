import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl } from "@/lib/site";

// Shared dark hero for inner pages: visible breadcrumbs + BreadcrumbList
// schema, optional background image with a slow parallax drift.
export default function PageHero({ eyebrow, title, description, crumbs = [], image, imageAlt = "", children }) {
  const trail = [{ name: "Home", href: "/" }, ...crumbs];
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.href),
    })),
  };

  return (
    <section className="ink relative isolate overflow-hidden pb-16 pt-36 sm:pb-24 sm:pt-44">
      <JsonLd data={breadcrumbJsonLd} />
      {image ? (
        <div className="absolute inset-0 -z-10" aria-hidden={!imageAlt}>
          <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="parallax object-cover opacity-35" />
          <div className="absolute inset-0 bg-linear-to-b from-[var(--bg)]/70 via-[var(--bg)]/80 to-[var(--bg)]" />
        </div>
      ) : null}
      <div className="aurora opacity-70" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div className="container-x relative">
        <nav aria-label="Breadcrumb" className="fade-up">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
            {trail.map((c, i) => (
              <li key={c.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="size-3.5 text-white/30" aria-hidden="true" />}
                {i === trail.length - 1 ? (
                  <span aria-current="page" className="text-fg-2">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.href} className="transition-colors hover:text-fg">
                    {c.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {eyebrow && (
          <p className="eyebrow fade-up mt-10" style={{ "--d": "60ms" }}>
            <span className="dot" /> {eyebrow}
          </p>
        )}
        <h1 className="display-xl settle mt-6 max-w-[16ch]" style={{ "--d": "100ms" }}>
          {title}
        </h1>
        {description && (
          <p className="lede fade-up mt-8 max-w-2xl" style={{ "--d": "200ms" }}>
            {description}
          </p>
        )}
        {children && (
          <div className="fade-up mt-10" style={{ "--d": "280ms" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
