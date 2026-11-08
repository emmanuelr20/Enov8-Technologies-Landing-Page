"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronRight, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/site/ThemeToggle";
import { ServiceIcon, SocialIcon } from "@/components/Icons";
import { services } from "@/lib/servicesData";
import { contact, mainNav, socials } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <div
          className={`ink mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border pl-4 pr-2 transition-[background-color,box-shadow,border-color] duration-500 ${
            scrolled || open
              ? "border-white/10 !bg-[rgb(8_10_16/0.94)] shadow-[0_20px_60px_-25px_rgb(0_0_0/0.8)]"
              : "border-transparent !bg-transparent"
          }`}
        >
          <Logo />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1 text-[0.92rem]">
              <li className="group/mega relative">
                <Link
                  href="/services"
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-fg/80 transition-colors hover:bg-white/8 hover:text-fg"
                  aria-haspopup="true"
                >
                  Services
                  <ChevronRight className="size-3.5 rotate-90 transition-transform duration-300 group-hover/mega:-rotate-90" />
                </Link>

                {/* Mega menu — pure CSS, opens on hover and keyboard focus */}
                <div className="invisible fixed left-1/2 top-16 w-[min(64rem,calc(100vw-2rem))] -translate-x-1/2 pt-4 opacity-0 transition-[opacity,visibility,translate] duration-300 ease-out-expo translate-y-2 group-hover/mega:visible group-hover/mega:translate-y-0 group-hover/mega:opacity-100 group-focus-within/mega:visible group-focus-within/mega:translate-y-0 group-focus-within/mega:opacity-100">
                  <div className="ink grid grid-cols-[1fr_17rem] gap-2 rounded-[1.75rem] border border-white/10 bg-[rgb(10_12_18/0.96)] p-2 shadow-[0_40px_120px_-30px_rgb(0_0_0/0.9)]">
                    <ul className="grid grid-cols-3 gap-1 p-2">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="group/item flex gap-3 rounded-2xl p-3 transition-colors hover:bg-white/6"
                          >
                            <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-brand transition-colors group-hover/item:border-brand/50 group-hover/item:bg-brand group-hover/item:text-white">
                              <ServiceIcon name={s.icon} className="size-4.5" />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-[0.9rem] font-medium leading-tight text-fg">
                                {s.navTitle}
                              </span>
                              <span className="mt-1 block truncate text-xs text-muted">
                                {s.tags.slice(0, 3).join(" · ")}
                              </span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="relative flex flex-col justify-between overflow-hidden rounded-[1.4rem] bg-brand-bright p-6 text-white">
                      <div className="aurora opacity-60" aria-hidden="true">
                        <i />
                        <i />
                      </div>
                      <div className="relative">
                        <p className="eyebrow !text-white/70">Systems assessment · 30 min</p>
                        <p className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight">
                          Not sure where to start?
                        </p>
                        <p className="mt-2 text-sm text-white/80">
                          Book a systems assessment and we'll help you find the clearest next step.
                        </p>
                      </div>
                      <button
                        type="button"
                        data-open-contact
                        className="relative mt-6 inline-flex items-center gap-2 self-start rounded-full bg-white px-4 py-2.5 text-sm font-medium text-[#0a0b10] transition-transform hover:scale-105"
                      >
                        Book a call <ArrowUpRight className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              {mainNav.slice(1).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-full px-4 py-2 text-fg/80 transition-colors hover:bg-white/8 hover:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            <button
              type="button"
              data-open-contact
              data-magnetic
              className="btn btn-primary btn-sm hidden sm:inline-flex"
            >
              Start a project
              <span className="btn-icon">
                <ArrowUpRight />
              </span>
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-11 place-items-center rounded-full bg-white/8 text-fg lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`ink fixed inset-0 z-40 overflow-x-hidden overflow-y-auto transition-[clip-path] duration-700 ease-[var(--ease-in-out)] lg:hidden ${
          open ? "[clip-path:circle(150%_at_calc(100%-2.6rem)_2.6rem)]" : "pointer-events-none [clip-path:circle(0%_at_calc(100%-2.6rem)_2.6rem)]"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="aurora opacity-40" aria-hidden="true">
          <i />
          <i />
        </div>
        <div className="relative flex min-h-full flex-col px-6 pb-10 pt-28">
          <nav aria-label="Mobile">
            <ul className="space-y-1">
              {[{ label: "Home", href: "/" }, ...mainNav, { label: "Contact", href: "#contact" }].map(
                (item, i) => (
                  <li
                    key={item.href}
                    className="overflow-hidden"
                    style={{ "--i": i }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-baseline justify-between border-b border-white/10 py-3 font-display text-[clamp(1.15rem,3.4vw,1.45rem)] font-semibold tracking-tight transition-[translate,opacity] duration-700 ease-out-expo sm:py-3.5 ${
                        open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                      }`}
                      style={{ transitionDelay: open ? `${150 + i * 60}ms` : "0ms" }}
                    >
                      {item.label}
                      <span className="font-sans text-xs text-muted">0{i + 1}</span>
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div
            className={`mt-auto pt-12 transition-opacity duration-700 ${open ? "opacity-100 delay-500" : "opacity-0"}`}
          >
            <button type="button" data-open-contact className="btn btn-primary w-full justify-between">
              Start a project
              <span className="btn-icon">
                <ArrowUpRight />
              </span>
            </button>
            <div className="mt-8 grid gap-1 text-fg-2">
              <a href={`mailto:${contact.salesEmail}`}>{contact.salesEmail}</a>
              <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
            </div>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="grid size-11 place-items-center rounded-full border border-white/10 text-fg-2 hover:text-fg"
                >
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
