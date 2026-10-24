"use client";

import Image from "next/image";
import { partners } from "@/lib/content/partners";

export default function PartnerScroller() {
  const items = [...partners, ...partners];

  return (
    <div className="relative isolate mt-10 min-w-0 max-w-full overflow-hidden rounded-xl border border-border bg-surface [contain:paint]" role="region" aria-label="Technology ecosystem partners">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-surface to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-surface to-transparent" aria-hidden="true" />
      <ul className="home-partner-track animate-partner-scroll flex w-max items-center gap-4 py-4 pr-4 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
        {items.map((partner, index) => (
          <li key={`${partner.id}-${index}`} aria-hidden={index >= partners.length} className="flex h-24 w-40 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-background px-5">
            <Image src={partner.src} alt={index >= partners.length ? "" : partner.alt} width={partner.w} height={partner.h} className="max-h-10 w-auto object-contain" />
          </li>
        ))}
      </ul>
    </div>
  );
}
