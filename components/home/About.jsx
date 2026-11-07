import Image from "next/image";
import Link from "next/link";
import { Check, Download } from "lucide-react";
import { pillars, stats } from "@/lib/content";
import { site } from "@/lib/site";

const manifesto =
  "Enov8 Technologies helps growing businesses replace disconnected tools, manual work, and fragile processes with connected systems that people can actually use and teams can depend on.";

const strengths = ["Scalable strategy", "Expert execution", "Secure foundations", "Practical support"];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-y relative">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Image column */}
          <div className="relative lg:sticky lg:top-28 lg:self-start" data-reveal="left">
            <p className="eyebrow mb-6">
              <span className="dot" /> Who we are
            </p>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
              <Image
                src="/sections/about1.webp"
                alt="Enov8 Technologies engineers collaborating on a client solution"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="parallax object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                <p className="max-w-[14rem] text-sm text-white/85">
                  From a startup's first product to an enterprise's cloud migration.
                </p>
                <div className="glass ink grid size-28 shrink-0 place-items-center rounded-full !bg-white/10 text-center">
                  <p>
                    <span className="block font-display text-3xl font-semibold leading-none">100%</span>
                    <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.2em] text-white/80">
                      Quality
                      <br />
                      guaranteed
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div>
            <h2 id="about-title" className="display-lg" data-reveal>
              Your technology should make the business <span className="serif text-accent">easier to run.</span>
            </h2>

            <p className="manifesto mt-10 font-display text-[clamp(1.5rem,1rem+1.6vw,2.4rem)] font-medium leading-[1.25] tracking-[-0.025em]">
              {manifesto.split(" ").map((w, i) => (
                <span key={i} className="w" data-w={w}>
                  {w}{" "}
                </span>
              ))}
            </p>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2" data-reveal>
              {strengths.map((s) => (
                <li key={s} className="flex items-center gap-3 rounded-2xl border border-line-strong px-4 py-3 font-medium">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent text-[#0a0b10]">
                    <Check className="size-4" strokeWidth={2.5} />
                  </span>
                  {s}
                </li>
              ))}
            </ul>

            {/* Number first, label under it, so the figures share one baseline
                however many lines a label wraps to. */}
            <dl className="card mt-14 grid grid-cols-2 overflow-hidden sm:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="flex flex-col-reverse justify-end gap-2 border-line p-5 max-sm:[&:nth-child(-n+2)]:border-b max-sm:[&:nth-child(odd)]:border-r sm:p-6 sm:[&:not(:last-child)]:border-r"
                  data-reveal
                  style={{ "--d": `${i * 80}ms` }}
                >
                  <dt className="text-sm leading-snug text-muted">{s.label}</dt>
                  <dd className="font-display text-[clamp(2.5rem,1.6rem+2vw,3.25rem)] font-semibold leading-none tracking-[-0.05em] tabular-nums">
                    <span data-count={s.value}>{s.value}</span>
                    <span className="text-brand">{s.suffix}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="card mt-4 divide-y divide-line overflow-hidden">
              {pillars.map((p, i) => (
                <li
                  key={p.title}
                  data-spotlight
                  data-reveal
                  style={{ "--d": `${i * 100}ms` }}
                  className="group relative grid gap-x-8 gap-y-2 p-6 sm:grid-cols-[minmax(0,13rem)_1fr] sm:p-7"
                >
                  <div className="relative flex items-baseline gap-3">
                    <span className="font-display text-sm tabular-nums text-brand">0{i + 1}</span>
                    <h3 className="text-xl transition-colors group-hover:text-brand">{p.title}</h3>
                  </div>
                  <p className="relative text-[0.95rem] leading-relaxed text-fg-2">{p.text}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3" data-reveal>
              <a href={site.brochure} download className="btn">
                Download brochure
                <span className="btn-icon" data-dir="down">
                  <Download />
                </span>
              </a>
              <Link href="/about" className="btn btn-ghost">
                See how we work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
