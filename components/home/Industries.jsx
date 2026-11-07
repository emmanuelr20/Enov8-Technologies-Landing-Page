import { industries } from "@/lib/content";

export default function Industries() {
  return (
    <section aria-labelledby="industries-title" className="ink relative isolate overflow-hidden section-y">
      <div className="aurora opacity-50" aria-hidden="true">
        <i />
        <i />
      </div>
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="container-x relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow" data-reveal>
              <span className="dot" /> Built for complex work
            </p>
            <h2 id="industries-title" className="display-md mt-6 max-w-2xl" data-reveal>
              One technology partner across the <span className="serif text-accent">transformation lifecycle.</span>
            </h2>
          </div>
          <p className="max-w-sm text-fg-2" data-reveal style={{ "--d": "100ms" }}>
            From fintech to enterprise, we shape each system around the regulations, scale and
            customers of the sector it serves.
          </p>
        </div>

        <ul className="mt-16 flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-8">
          {industries.map((name, i) => (
            <li key={name} data-reveal style={{ "--d": `${i * 60}ms` }} className="flex items-center gap-4 sm:gap-8">
              <span className="group relative cursor-default font-display text-[clamp(2.4rem,1rem+6vw,7rem)] font-semibold leading-[1] tracking-[-0.05em] text-white/20 transition-colors duration-500 hover:text-fg">
                {name}
                <span className="absolute -right-2 -top-1 text-xs font-sans font-normal tracking-normal text-muted sm:-right-4">
                  0{i + 1}
                </span>
              </span>
              {i < industries.length - 1 && (
                <span className="serif text-[clamp(2rem,1rem+4vw,5rem)] leading-none text-brand" aria-hidden="true">
                  &amp;
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
