import { Quote } from "lucide-react";
import { testimonials } from "@/lib/content";

const initials = (name) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="section-y relative">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow" data-reveal>
              <span className="dot" /> Client stories
            </p>
            <h2 id="testimonials-title" className="display-lg mt-6 max-w-3xl" data-reveal style={{ "--d": "80ms" }}>
              What our clients are <span className="serif text-neon">saying.</span>
            </h2>
          </div>
          <p className="max-w-xs text-fg-2" data-reveal style={{ "--d": "160ms" }}>
            Real outcomes from organisations that trusted us with their most important systems.
          </p>
        </div>

        <ul className="mt-16 columns-1 gap-5 md:columns-2 xl:columns-3 [&>li]:mb-5">
          {testimonials.map((t, i) => (
            <li key={t.name} className="break-inside-avoid" data-reveal style={{ "--d": `${(i % 3) * 90}ms` }}>
              <figure
                data-spotlight
                className={`card ring-glow relative overflow-hidden p-7 sm:p-8 ${i === 2 ? "!bg-brand-bright !text-white" : ""}`}
              >
                <div className="relative">
                  {t.metric ? (
                    <p className="mb-6">
                      <span className={`block font-display text-6xl font-semibold tracking-[-0.06em] ${i === 2 ? "text-white" : "text-neon"}`}>
                        {t.metric}
                      </span>
                      <span className={`mt-1 block text-sm ${i === 2 ? "text-white/75" : "text-muted"}`}>{t.metricLabel}</span>
                    </p>
                  ) : (
                    <Quote className="mb-6 size-8 text-brand" aria-hidden="true" />
                  )}
                  <blockquote className={`text-[1.02rem] leading-relaxed ${i === 2 ? "text-white/90" : "text-fg-2"}`}>
                    <p>“{t.quote}”</p>
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-3">
                    <span
                      className={`grid size-11 place-items-center rounded-full font-display text-sm font-semibold ${
                        i === 2 ? "bg-white text-brand-bright" : "bg-neon text-[#0a0b10]"
                      }`}
                      aria-hidden="true"
                    >
                      {initials(t.name)}
                    </span>
                    <span className="font-medium">{t.name}</span>
                  </figcaption>
                </div>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
