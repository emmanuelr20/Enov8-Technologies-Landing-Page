import { Asterisk } from "lucide-react";
import { services } from "@/lib/servicesData";

function Track({ items }) {
  return (
    <div className="marquee-track">
      {items.map((t) => (
        <span key={t} className="flex items-center gap-[var(--gap)] whitespace-nowrap">
          {t}
          <Asterisk className="size-[0.8em] shrink-0 opacity-70" />
        </span>
      ))}
    </div>
  );
}

// Two crossing "tape" marquees — purely decorative (service names are linked
// properly elsewhere), so the whole band is hidden from assistive tech.
export default function Tapes() {
  const a = services.slice(0, 6).map((s) => s.navTitle);
  const b = services.slice(6).map((s) => s.navTitle);
  return (
    <div data-loop className="relative z-10 -my-4 overflow-hidden py-12 sm:py-16" aria-hidden="true">
      <div className="ink absolute inset-x-[-5%] top-1/2 -translate-y-1/2 rotate-[2.5deg] border-y border-white/10 py-4">
        <div className="marquee [mask-image:none] font-display text-2xl font-semibold tracking-tight text-fg/60 sm:text-4xl" style={{ "--duration": "60s" }} data-reverse>
          <Track items={b} />
          <Track items={b} />
        </div>
      </div>
      <div className="relative -mx-[5%] -rotate-[2deg] bg-brand-bright py-4 text-white shadow-[0_30px_80px_-30px_var(--glow)]">
        <div className="marquee [mask-image:none] font-display text-2xl font-semibold tracking-tight sm:text-4xl" style={{ "--duration": "45s" }}>
          <Track items={a} />
          <Track items={a} />
        </div>
      </div>
    </div>
  );
}
