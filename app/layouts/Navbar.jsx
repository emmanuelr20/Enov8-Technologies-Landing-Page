"use client";

import { memo, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ConsultationModal from "@/components/ConsultationModal";
import { company } from "@/lib/content/company";
import { primaryNavigation } from "@/lib/content/navigation";

function isCurrentRoute(pathname, item) {
  if (item.id === "home") return pathname === "/";
  if (item.id === "contact") return false;
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

const socialLinks = [
  { label: "Follow us on LinkedIn", href: company.social.linkedin, icon: Linkedin },
  { label: "View our Instagram", href: company.social.instagram, icon: Instagram },
  { label: "Follow us on Facebook", href: company.social.facebook, icon: Facebook },
];

function BrandMark() {
  return (
    <span className="relative flex w-full items-center justify-start">
      <span className="relative z-10 flex h-13 w-13 shrink-0 items-center justify-center" aria-hidden="true">
        <span className="relative size-8 shrink-0">
          <Image src="/brand/logo.svg" alt="" fill sizes="32px" className="object-contain" />
        </span>
      </span>
      <span className="hidden whitespace-nowrap text-sm font-bold tracking-tight text-foreground md:inline md:text-base">
        Enov8 Technologies
      </span>
    </span>
  );
}

const Navbar = memo(function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleAnchorClick = (event, href) => {
    if (!href.startsWith("/#") || pathname !== "/") return;
    event.preventDefault();
    document.querySelector(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 w-full border-b border-border/70 bg-background backdrop-blur-md"
      >
        <nav
          aria-label="Primary navigation"
          className="relative mx-auto grid h-20 w-full grid-cols-[1fr_auto] items-center max-w-[var(--container-content)] px-6 sm:px-10 md:grid-cols-3 md:px-10"
        >
          <Link
            href="/"
            aria-label="Enov8 Technologies home"
            className="focus-ring inline-flex h-13 w-13 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-background md:w-55 md:justify-start md:px-2"
          >
            <BrandMark />
          </Link>

          <div className="col-start-2 flex items-center justify-end gap-3 md:contents">

          <div
            className="relative h-14 w-18 shrink-0 justify-self-center sm:w-32 md:col-start-2 md:h-16 md:w-36"
          >
            <div
              className={`${isOpen ? "absolute left-1/2 top-1.5" : "absolute left-1/2 top-0"} z-50 -translate-x-1/2 rounded-[28px] border bg-background p-1 lg:p-2 shadow-2xl transition-[width,height,box-shadow,border-color] duration-[var(--motion-slow)] ease-out ${isOpen ? "h-[428.5px] w-74 border-border" : "h-14 w-18 border-transparent shadow-none sm:w-32 md:h-16 md:w-36 motion-safe:duration-[200ms]"}`}
            >
            <button
              ref={menuButtonRef}
              type="button"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="site-navigation-menu"
              onClick={() => setIsOpen((open) => !open)}
              className={`focus-ring flex items-center justify-center gap-3 rounded-full border border-border bg-background text-sm font-medium text-foreground transition-opacity duration-[var(--motion-standard)] hover:opacity-80 ${isOpen ? "mx-auto h-12 w-full" : "mx-auto h-12 w-14 sm:w-28 md:h-12 md:w-32"}`}
            >
              {isOpen ? <X className="size-5.5 sm:size-6" aria-hidden="true" /> : <Menu className="size-5.5 sm:size-6" aria-hidden="true" />}
              <span className="hidden md:inline">{isOpen ? "Close" : "Menu"}</span>
            </button>

            <div
              id="site-navigation-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              aria-hidden={!isOpen}
              className={`overflow-hidden ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
            >
              <nav className={`px-2 pt-7 transition-[opacity,transform] duration-[var(--motion-standard)] ease-out ${isOpen ? "translate-y-0 opacity-100 motion-safe:[transition-delay:var(--motion-standard)]" : "translate-y-4 opacity-0 motion-safe:duration-[200ms]"}`} aria-label="Site navigation links">
                <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">Menu</p>
                <ul className="space-y-1">
                  {primaryNavigation.map((item) => {
                    const current = isCurrentRoute(pathname, item);
                    return (
                      <li key={item.id}>
                        <Link
                          tabIndex={isOpen ? 0 : -1}
                          href={item.href}
                          aria-current={current ? "page" : undefined}
                          onClick={(event) => handleAnchorClick(event, item.href)}
                          className={`focus-ring block rounded-md py-1 text-[clamp(1.75rem,5vw,2rem)] font-medium leading-tight tracking-tight transition-colors hover:text-brand ${current ? "text-brand" : "text-foreground"}`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className={`mx-2 mt-7 border-t border-border pt-7 transition-[opacity,transform] duration-[var(--motion-standard)] ease-out ${isOpen ? "translate-y-0 opacity-100 motion-safe:[transition-delay:calc(var(--motion-standard)+100ms)]" : "translate-y-4 opacity-0 motion-safe:duration-[200ms]"}`}>
                <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">Social media</p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  {socialLinks.map(({ label, href }) => (
                    <a
                      key={label}
                      tabIndex={isOpen ? 0 : -1}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring rounded-sm text-base font-medium text-foreground transition-colors hover:text-brand"
                    >
                      {label.replace("Follow us on ", "").replace("View our ", "")}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          </div>
          <ConsultationModal
            trigger={
              <Button className="h-12 shrink-0 rounded-full bg-brand px-3 text-[11px] font-semibold text-on-brand hover:bg-brand-hover sm:h-13 sm:px-5 sm:text-sm md:col-start-3 md:justify-self-end">
                Start a Project
              </Button>
            }
          />
          </div>
        </nav>
      </header>

    </>
  );
});

export default Navbar;
