import { Plus } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/lib/content";
import { contact } from "@/lib/site";

export default function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" aria-labelledby="faq-title" className="section-y relative bg-bg-2/60">
      <JsonLd data={jsonLd} />
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow" data-reveal>
            <span className="dot" /> FAQ
          </p>
          <h2 id="faq-title" className="display-lg mt-6" data-reveal style={{ "--d": "80ms" }}>
            Questions, <span className="serif text-accent">answered.</span>
          </h2>
          <p className="lede mt-6 max-w-sm" data-reveal style={{ "--d": "160ms" }}>
            Can't find what you're looking for? Email{" "}
            <a href={`mailto:${contact.salesEmail}`} className="text-fg underline underline-offset-4">
              {contact.salesEmail}
            </a>
          </p>
        </div>

        <div className="faq grid gap-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              name="faq"
              className="card group px-6 open:shadow-[0_30px_80px_-40px_var(--glow)] sm:px-8"
              data-reveal
              style={{ "--d": `${i * 60}ms` }}
              {...(i === 0 ? { open: true } : {})}
            >
              <summary className="flex items-center justify-between gap-6 py-6 font-display text-lg font-semibold tracking-tight sm:text-xl">
                <h3 className="text-inherit leading-snug">{f.q}</h3>
                <span className="faq-icon grid size-10 shrink-0 place-items-center rounded-full border">
                  <Plus className="size-5" />
                </span>
              </summary>
              <p className="pb-7 pr-6 text-fg-2 sm:pr-16">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
