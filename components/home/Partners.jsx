import Image from "next/image";
import { partners } from "@/lib/content";

function Row({ items, reverse }) {
  const Track = ({ hidden }) => (
    <ul className="marquee-track" aria-hidden={hidden || undefined}>
      {items.map((p) => (
        <li key={p.name} className="flex h-16 w-36 shrink-0 items-center justify-center sm:w-44">
          <Image
            src={p.src}
            alt={hidden ? "" : `${p.name} logo`}
            width={140}
            height={56}
            sizes="140px"
            className="logo-mono h-auto max-h-11 w-auto max-w-[8.5rem] object-contain"
          />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee" style={{ "--gap": "1.5rem", "--duration": "55s" }} {...(reverse ? { "data-reverse": "" } : {})}>
      <Track />
      <Track hidden />
    </div>
  );
}

export default function Partners() {
  const half = Math.ceil(partners.length / 2);
  return (
    <section aria-labelledby="partners-title" className="relative pb-8 pt-16 sm:pt-24">
      <div className="container-x">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 id="partners-title" className="max-w-md font-display text-2xl font-semibold tracking-tight sm:text-3xl" data-reveal>
            The right ecosystem for the system you need.
          </h2>
          <p className="max-w-sm text-sm text-muted" data-reveal style={{ "--d": "100ms" }}>
            We stay platform-agnostic while bringing proven partners into the delivery when they
            improve the outcome for your organisation.
          </p>
        </div>
      </div>
      <div className="mt-12 grid gap-4">
        <Row items={partners.slice(0, half)} />
        <Row items={partners.slice(half)} reverse />
      </div>
    </section>
  );
}
