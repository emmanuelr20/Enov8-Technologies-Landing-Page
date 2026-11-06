import { ArrowUpRight } from "lucide-react";

function Phrase() {
  return (
    <span className="flex shrink-0 items-center gap-[var(--gap)] whitespace-nowrap">
      Start a project
      <span className="grid size-[0.75em] place-items-center rounded-full bg-brand-bright text-white transition-transform duration-700 ease-out-expo group-hover:rotate-45">
        <ArrowUpRight className="size-1/2" />
      </span>
      <span className="serif font-normal text-brand">let's build what's next</span>
      <span className="text-neon">✦</span>
    </span>
  );
}

// A giant kinetic marquee that is itself the call-to-action.
export default function BigCta() {
  return (
    <section aria-label="Start a project" className="relative overflow-hidden py-16 sm:py-24">
      <button
        type="button"
        data-open-contact
        className="group block w-full text-left"
        aria-label="Start a project — open contact options"
      >
        <div
          className="marquee [mask-image:none] font-display text-[clamp(3.5rem,2rem+8vw,10rem)] font-semibold leading-none tracking-[-0.055em] transition-colors duration-500 group-hover:text-brand-bright"
          style={{ "--gap": "0.35em", "--duration": "28s" }}
          aria-hidden="true"
        >
          <div className="marquee-track !justify-start">
            <Phrase />
            <Phrase />
          </div>
          <div className="marquee-track !justify-start">
            <Phrase />
            <Phrase />
          </div>
        </div>
      </button>
    </section>
  );
}
