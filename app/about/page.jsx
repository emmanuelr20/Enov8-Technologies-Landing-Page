import Image from "next/image";
import { ArrowUpRight, Award, Globe, Handshake, Lightbulb } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { pageMetadata } from "@/lib/seoMetadata";
import { SITE_URL, absoluteUrl, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Us — Who We Are",
  description:
    "Enov8 Technologies Ltd. is a Lagos-based technology company delivering end-to-end digital solutions. Learn about our vision, mission and the values behind our work.",
  path: "/about",
});

const stats = [
  { value: 5, suffix: "+", label: "Service verticals delivered" },
  { value: 50, suffix: "+", label: "Projects planned & deployed" },
  { value: 24, suffix: "/7", label: "Post-deployment support" },
  { value: 15, suffix: "+", label: "Technology partners" },
];

const values = [
  {
    title: "Innovation First",
    icon: Lightbulb,
    text: "We constantly explore new technologies to provide forward-thinking solutions that keep our clients ahead of the curve.",
  },
  {
    title: "Quality-Driven Delivery",
    icon: Award,
    text: "Excellence is our baseline. We maintain an uncompromising standard of quality in every line of code and piece of hardware.",
  },
  {
    title: "Client Partnership",
    icon: Handshake,
    text: "We align our goals with yours. Your success is our core metric, and we build long-term relationships based on trust.",
  },
  {
    title: "Excellence",
    icon: Globe,
    text: "Building world-class digital solutions that are accessible, scalable, and built for the future of the continent's digital economy.",
  },
];

export default function AboutPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: absoluteUrl("/about"),
    name: `About ${site.name}`,
    about: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <>
      <JsonLd data={aboutJsonLd} />
      <PageHero
        eyebrow="Company overview"
        title={
          <>
            Built to last. <span className="serif text-neon">Designed to grow.</span>
          </>
        }
        description="Enov8 Technologies Ltd. is a Nigerian-based technology company delivering end-to-end digital solutions. We are a forward-thinking team united by one purpose: turning complex technology challenges into competitive advantages for our clients."
        crumbs={[{ name: "About", href: "/about" }]}
        image="/sections/servicebackground.webp"
      />

      {/* Story + stats */}
      <section aria-labelledby="story-title" className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow" data-reveal>
              <span className="dot" /> Our story
            </p>
            <h2 id="story-title" className="display-md mt-6" data-reveal>
              Who we are
            </h2>
            <div className="lede mt-8 grid gap-6" data-reveal style={{ "--d": "100ms" }}>
              <p>
                Founded on principles of quality, innovation, and client partnership, Enov8
                Technologies serves clients across fintech, education, e-commerce, healthcare,
                transport, and the public sector.
              </p>
              <p>
                From a startup's first digital product to an enterprise's cloud migration, we deliver
                technology across software development, managed IT services, hardware procurement,
                cloud infrastructure, and licensing.
              </p>
            </div>
            <ul className="mt-10 flex flex-wrap gap-2" data-reveal style={{ "--d": "160ms" }}>
              {["Quality-driven", "Client-centric", "Innovation-led"].map((t) => (
                <li key={t} className="rounded-full border border-line-strong px-4 py-1.5 text-sm text-fg-2">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem]" data-reveal="scale">
              <Image
                src="/sections/about1.webp"
                alt="The Enov8 Technologies team at work"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="parallax object-cover"
              />
            </div>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] border bg-line">
              {stats.map((s, i) => (
                <div key={s.label} className="bg-bg p-6" data-reveal style={{ "--d": `${i * 80}ms` }}>
                  <dt className="text-xs uppercase tracking-[0.14em] text-muted">{s.label}</dt>
                  <dd className="mt-3 font-display text-5xl font-semibold tracking-[-0.05em] tabular-nums">
                    <span data-count={s.value}>{s.value}</span>
                    <span className="text-brand">{s.suffix}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Vision & mission */}
      <section aria-label="Vision and mission" className="ink relative isolate overflow-hidden section-y">
        <div className="aurora opacity-60" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="container-x relative grid gap-4 lg:grid-cols-2">
          <article className="glass rounded-[2rem] p-8 sm:p-12" data-reveal>
            <p className="font-display text-[7rem] font-semibold leading-[0.8] tracking-[-0.06em] text-brand">V</p>
            <h2 className="mt-8 text-4xl">Our Vision</h2>
            <p className="mt-5 text-lg text-fg-2">
              To be the most trusted technology partner for businesses across Africa, delivering
              world-class digital solutions that are accessible, scalable, and built for the future
              of the continent's digital economy.
            </p>
            <blockquote className="mt-10 border-l-2 border-brand pl-6">
              <p className="serif text-2xl leading-snug text-fg">
                “The technology your organisation needs to compete globally should not require a
                global budget. We are here to close that gap.”
              </p>
            </blockquote>
          </article>
          <article className="glass rounded-[2rem] p-8 sm:p-12" data-reveal style={{ "--d": "120ms" }}>
            <p className="font-display text-[7rem] font-semibold leading-[0.8] tracking-[-0.06em] text-neon">M</p>
            <h2 className="mt-8 text-4xl">Our Mission</h2>
            <p className="mt-5 text-lg text-fg-2">
              To empower businesses and institutions with innovative, reliable, and tailored
              technology solutions, spanning software development, managed services, hardware
              infrastructure, and cloud platforms – enabling them to operate efficiently, scale
              confidently, and compete without limits.
            </p>
          </article>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-title" className="section-y">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <h2 id="values-title" className="display-lg" data-reveal>
              Our core <span className="serif text-neon">values.</span>
            </h2>
            <p className="lede max-w-lg" data-reveal style={{ "--d": "100ms" }}>
              The foundational principles that guide our decisions, shape our culture, and define
              how we partner with our clients.
            </p>
          </div>
          <ul className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {values.map(({ title, icon: Icon, text }, i) => (
              <li
                key={title}
                data-spotlight
                data-reveal
                style={{ "--d": `${i * 90}ms` }}
                className="card ring-glow group overflow-hidden p-7"
              >
                <div className="relative">
                  <span className="grid size-14 place-items-center rounded-2xl bg-bg-2 text-brand transition-colors duration-500 group-hover:bg-brand-bright group-hover:text-white">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-10 text-2xl">{title}</h3>
                  <p className="mt-3 text-fg-2">{text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-14 flex flex-wrap gap-3" data-reveal>
            <button type="button" data-open-contact className="btn btn-primary" data-magnetic>
              Work with us
              <span className="btn-icon">
                <ArrowUpRight />
              </span>
            </button>
            <a href={site.brochure} download className="btn btn-ghost">
              Download brochure
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
