import Link from "next/link";
import { ArrowUp, ArrowUpRight, CalendarClock, Download, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { LogoMark } from "@/components/Logo";
import { SocialIcon } from "@/components/Icons";
import ContactForm from "@/components/site/ContactForm";
import NewsletterForm from "@/components/site/NewsletterForm";
import { services } from "@/lib/servicesData";
import { contact, legalNav, site, socials } from "@/lib/site";

const channels = [
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: "Phone", value: contact.phoneDisplay, href: contact.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: contact.whatsapp, external: true },
  { icon: MapPin, label: "Office", value: "Lagos, Nigeria" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="ink relative isolate overflow-hidden rounded-t-[2rem] sm:rounded-t-[3rem]">
      {/* ── CONTACT ─────────────────────────────────────────────────────── */}
      <section id="contact" aria-labelledby="contact-title" className="relative section-y">
        <div className="aurora opacity-70" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="grid-bg absolute inset-0" aria-hidden="true" />

        <div className="container-x relative">
          <p className="eyebrow" data-reveal>
            <span className="dot" /> Contact
          </p>
          <h2 id="contact-title" className="display-xl mt-6 max-w-5xl" data-reveal style={{ "--d": "80ms" }}>
            Have an idea? <span className="serif text-neon">Let's talk.</span>
          </h2>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            <div data-reveal style={{ "--d": "120ms" }}>
              <p className="lede max-w-md">
                Send us a message and we'll get back to you to discuss how we can help your
                business grow — or skip the queue and book a call.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={site.booking} target="_blank" rel="noopener noreferrer" className="btn btn-primary" data-magnetic>
                  Book a discovery call
                  <span className="btn-icon">
                    <CalendarClock />
                  </span>
                </a>
              </div>
              <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
                {channels.map(({ icon: Icon, label, value, href, external }) => {
                  const inner = (
                    <>
                      <Icon className="size-5 text-brand" />
                      <span className="mt-6 block text-xs uppercase tracking-[0.16em] text-muted">{label}</span>
                      <span className="mt-1 block truncate font-medium">{value}</span>
                    </>
                  );
                  return (
                    <li key={label} className="bg-[var(--bg)]">
                      {href ? (
                        <a
                          href={href}
                          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="block p-5 transition-colors hover:bg-white/[0.04]"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="p-5">{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div
              className="glass ring-glow rounded-[1.75rem] p-6 sm:p-10"
              data-spotlight
              data-reveal="scale"
              style={{ "--d": "180ms" }}
            >
              <div className="relative">
                <p className="font-display text-2xl font-semibold tracking-tight">Tell us what you're building</p>
                <p className="mt-1 text-sm text-muted">We read every message.</p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="relative border-t border-white/10">
        <div className="container-x relative pt-16 sm:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
            <div className="max-w-sm">
              <p className="font-display text-3xl font-semibold leading-tight tracking-tight">
                Technology insights, <span className="serif text-neon">delivered.</span>
              </p>
              <p className="mt-3 text-fg-2">
                Expert articles on digital transformation, enterprise tech and industry trends. No
                spam, ever.
              </p>
              <div className="mt-6">
                <NewsletterForm />
              </div>
              <p className="text-xs text-muted">
                By subscribing you agree to our{" "}
                <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-fg">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              <div className="col-span-2 sm:col-span-1">
                <p className="eyebrow">Services</p>
                <ul className="mt-5 grid gap-2.5 text-[0.95rem] text-fg-2">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="link-underline hover:text-fg">
                        {s.navTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow">Company</p>
                <ul className="mt-5 grid gap-2.5 text-[0.95rem] text-fg-2">
                  <li><Link href="/about" className="link-underline hover:text-fg">About us</Link></li>
                  <li><Link href="/services" className="link-underline hover:text-fg">All services</Link></li>
                  <li><Link href="/#process" className="link-underline hover:text-fg">Our process</Link></li>
                  <li><Link href="/#testimonials" className="link-underline hover:text-fg">Client stories</Link></li>
                  <li><Link href="/#faq" className="link-underline hover:text-fg">FAQ</Link></li>
                  <li>
                    <a href={site.brochure} download className="inline-flex items-center gap-1.5 link-underline hover:text-fg">
                      Brochure <Download className="size-3.5" />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="eyebrow">Legal</p>
                <ul className="mt-5 grid gap-2.5 text-[0.95rem] text-fg-2">
                  {legalNav.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="link-underline hover:text-fg">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="eyebrow mt-10">Follow</p>
                <ul className="mt-5 flex gap-2">
                  {socials.map((s) => (
                    <li key={s.name}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${site.name} on ${s.name}`}
                        className="grid size-10 place-items-center rounded-full border border-white/10 text-fg-2 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                      >
                        <SocialIcon name={s.icon} className="size-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>

          {/* Giant wordmark */}
          <div className="relative mt-20 select-none" aria-hidden="true" data-spotlight>
            <p className="relative z-10 flex items-end justify-between gap-4 font-display font-bold leading-[0.78] tracking-[-0.07em] text-transparent text-[clamp(5rem,22vw,22rem)]"
              style={{
                backgroundImage:
                  "radial-gradient(380px circle at var(--mx) var(--my), var(--neon), color-mix(in oklab, var(--neon) 35%, transparent) 30%, transparent 60%), linear-gradient(rgb(255 255 255 / 0.07), rgb(255 255 255 / 0.07))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              <span>enov8</span>
              <LogoMark className="mb-[3%] w-[16%] shrink-0 text-white/[0.06]" />
            </p>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[var(--bg)] to-transparent" />
          </div>

          <div className="relative flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
            <p>© {year} {site.legalName} All rights reserved.</p>
            <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>Trusted by 100+ businesses</span>
              <span className="hidden size-1 rounded-full bg-white/30 md:inline-block" />
              <span>ISO 27001 Compliant</span>
            </p>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 self-start text-fg-2 hover:text-fg md:self-auto"
            >
              Back to top
              <span className="grid size-9 place-items-center rounded-full border border-white/15 transition-transform duration-500 ease-out-expo group-hover:-translate-y-1">
                <ArrowUp className="size-4" />
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
