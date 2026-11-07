import Image from "next/image";
import { Plus } from "lucide-react";
import { SocialIcon } from "@/components/Icons";
import { team } from "@/lib/content";

const initials = (name) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

export default function Team() {
  return (
    <section id="team" aria-labelledby="team-title" className="section-y border-t border-line">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow" data-reveal>
              <span className="dot" /> Leadership
            </p>
            <h2 id="team-title" className="display-lg mt-6" data-reveal style={{ "--d": "80ms" }}>
              Meet our <span className="serif text-accent">team.</span>
            </h2>
          </div>
          <p className="lede max-w-lg" data-reveal style={{ "--d": "140ms" }}>
            The people building practical technology systems and partnerships for the
            organisations we serve.
          </p>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-line bg-line">
          {team.map((m, i) => {
            const [lead, ...more] = m.bio;
            const first = m.name.split(" ")[0];
            return (
              <li key={m.name} className="bg-bg" data-reveal style={{ "--d": `${i * 80}ms` }}>
                <article className="grid gap-8 p-5 sm:p-8 md:grid-cols-[minmax(0,17rem)_1fr] md:gap-12 lg:p-10">
                  <div className="relative aspect-[4/4.4] overflow-hidden rounded-[1.5rem] max-md:max-w-xs">
                    {m.image ? (
                      <Image
                        src={m.image}
                        alt={`${m.name}, ${m.role} at Enov8 Technologies`}
                        fill
                        sizes="(min-width: 768px) 272px, 320px"
                        className="object-cover object-top"
                      />
                    ) : (
                      <div
                        role="img"
                        aria-label={`${m.name}, ${m.role}`}
                        className="ink grid size-full place-items-center"
                      >
                        <div className="grid-bg absolute inset-0" aria-hidden="true" />
                        <span className="serif relative text-[7rem] leading-none text-accent">{initials(m.name)}</span>
                      </div>
                    )}
                    <span className="absolute left-3 top-3 rounded-full bg-[rgb(10_12_18/0.75)] px-3 py-1 text-xs font-medium text-white">
                      {m.role}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-display text-sm tabular-nums text-muted">0{i + 1}</span>
                        <h3 className="mt-2 text-3xl sm:text-4xl">{m.name}</h3>
                        <p className="mt-1 text-brand">{m.role}</p>
                      </div>
                      {m.linkedin && (
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${m.name} on LinkedIn`}
                          className="grid size-11 shrink-0 place-items-center rounded-full border border-line-strong transition-colors hover:border-brand-bright hover:bg-brand-bright hover:text-white"
                        >
                          <SocialIcon name="linkedin" className="size-4" />
                        </a>
                      )}
                    </div>
                    <p className="mt-6 max-w-3xl leading-relaxed text-fg-2">{lead}</p>
                    {more.length > 0 && (
                      <details className="bio group mt-4 max-w-3xl">
                        <summary className="inline-flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-fg [&::-webkit-details-marker]:hidden">
                          <span className="grid size-6 place-items-center rounded-full bg-accent text-[#0a0b10] transition-transform duration-300 group-open:rotate-45">
                            <Plus className="size-3.5" strokeWidth={2.5} />
                          </span>
                          More about {first}
                        </summary>
                        {more.map((p) => (
                          <p key={p.slice(0, 24)} className="mt-4 leading-relaxed text-fg-2">
                            {p}
                          </p>
                        ))}
                      </details>
                    )}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
