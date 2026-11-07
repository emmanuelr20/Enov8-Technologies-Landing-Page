import { ArrowUpRight, Compass, PencilRuler, Rocket, ShieldCheck, LifeBuoy } from "lucide-react";
import { process } from "@/lib/content";

const looks = [
  { card: "bg-surface text-fg border", icon: Compass, accent: "text-brand" },
  { card: "bg-[#0057d1] text-white", icon: PencilRuler, accent: "text-white/75" },
  { card: "ink border border-white/10", icon: Rocket, accent: "text-brand" },
  { card: "bg-[#ffe1d1] text-[#2a0e00] dark:bg-[#24100a] dark:text-[#ffe7da]", icon: ShieldCheck, accent: "text-[#b23800] dark:text-neon" },
  { card: "bg-neon text-[#140600]", icon: LifeBuoy, accent: "text-[#140600]/75" },
];

// Sticky stacking cards: each card pins and the previous one recedes
// (scale + dim via a CSS scroll-driven animation; static where unsupported).
export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="section-y relative">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow" data-reveal>
            <span className="dot" /> The Enov8 Systems Method
          </p>
          <h2 id="process-title" className="display-md mt-6" data-reveal style={{ "--d": "80ms" }}>
            A repeatable method from clarity to <span className="serif text-neon">supported operations.</span>
          </h2>
          <p className="lede mt-6 max-w-md" data-reveal style={{ "--d": "160ms" }}>
            The Enov8 Technologies Systems Method turns a complex technology decision into a clear
            plan, a working implementation, and an operating system your team can sustain.
          </p>
          <button type="button" data-open-contact className="btn btn-primary mt-8" data-reveal style={{ "--d": "220ms" }}>
            Book a systems assessment
            <span className="btn-icon">
              <ArrowUpRight />
            </span>
          </button>
        </div>

        <ol className="relative grid gap-6">
          {process.map((p, i) => {
            const { card, icon: Icon, accent } = looks[i];
            return (
              <li
                key={p.step}
                className="sticky"
                style={{ top: `calc(7rem + ${i * 1.25}rem)` }}
              >
                <article
                  className={`stack-card relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-[2rem] p-8 shadow-[0_30px_80px_-40px_rgb(0_0_0/0.5)] sm:p-10 ${card}`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <span className={`font-display text-[5.5rem] font-semibold leading-[0.8] tracking-[-0.06em] sm:text-[8rem] ${accent}`}>
                      {p.step}
                    </span>
                    <Icon className={`size-10 sm:size-12 ${accent}`} strokeWidth={1.4} aria-hidden="true" />
                  </div>
                  <div className="mt-10 max-w-lg">
                    <h3 className="text-inherit text-3xl sm:text-4xl">{p.title}</h3>
                    <p className="mt-3 text-[1.05rem] leading-relaxed opacity-90">{p.text}</p>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
