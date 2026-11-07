import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/servicesData";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="ink relative isolate flex min-h-[90svh] items-center overflow-hidden pb-20 pt-36">
      <div className="aurora" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="container-x relative">
        <p className="eyebrow">
          <span className="dot" /> Error 404
        </p>
        <h1 className="mt-6 font-display text-[clamp(7rem,25vw,22rem)] font-bold leading-[0.8] tracking-[-0.07em] text-accent">
          404
        </h1>
        <p className="display-md mt-6 max-w-2xl">
          This page took a <span className="serif">wrong turn.</span>
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Back to home
            <span className="btn-icon">
              <ArrowUpRight />
            </span>
          </Link>
          <Link href="/services" className="btn btn-ghost">
            Browse services
          </Link>
        </div>
        <ul className="mt-14 flex flex-wrap gap-2">
          {services.slice(0, 6).map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="rounded-full border border-white/12 px-4 py-2 text-sm text-fg-2 transition-colors hover:border-brand hover:text-fg"
              >
                {s.navTitle}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
