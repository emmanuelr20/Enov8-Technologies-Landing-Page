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

function BrandMark({ compact = false, rotating = false }) {
  return (
    <span className={`relative flex items-center ${compact ? "gap-3" : "w-full justify-start"}`}>
      <span className={`relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center transition-transform duration-500 lg:group-hover:rotate-[360deg] ${rotating ? "rotate-[360deg]" : ""}`} aria-hidden="true">
        <span className="relative size-8 shrink-0">
          <Image src="/brand/logo.svg" alt="" fill sizes="32px" className="object-contain" />
        </span>
      </span>
      <span className={`pointer-events-none absolute left-[52px] top-1/2 -translate-y-1/2 whitespace-nowrap text-sm font-bold tracking-tight text-foreground transition-[opacity,transform] duration-500 md:text-base ${compact ? "opacity-100" : "opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100"}`}>
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
  const logoRotationTimeoutRef = useRef(null);
  const [isLogoRotating, setIsLogoRotating] = useState(false);
  const isHome = pathname === "/";

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

  useEffect(() => () => clearTimeout(logoRotationTimeoutRef.current), []);

  const handleAnchorClick = (event, href) => {
    if (!href.startsWith("/#") || pathname !== "/") return;
    event.preventDefault();
    document.querySelector(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogoClick = (event) => {
    if (window.matchMedia("(max-width: 1023px)").matches) {
      event.preventDefault();
      setIsLogoRotating(false);
      requestAnimationFrame(() => setIsLogoRotating(true));
      clearTimeout(logoRotationTimeoutRef.current);
      logoRotationTimeoutRef.current = setTimeout(() => setIsLogoRotating(false), 500);
    }
  };

  return (
    <>
      <header
        className={`z-50 w-full border-b border-border/70 bg-background backdrop-blur-md ${
          isHome ? "absolute left-0 top-0" : "sticky top-0"
        }`}
      >
        <nav
          aria-label="Primary navigation"
          className="relative mx-auto flex h-20 w-full items-center justify-between max-w-[var(--container-content)] px-5 sm:px-10 lg:px-10"
        >
          <Link
            href="/"
            aria-label="Enov8 Technologies home"
            onClick={handleLogoClick}
            className="focus-ring group inline-flex h-13 w-13 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-background transition-[width] duration-500 lg:hover:w-55"
          >
            <BrandMark rotating={isLogoRotating} />
          </Link>

          <div
            className={`absolute left-1/2 z-50 -translate-x-1/2 overflow-hidden rounded-[28px] border bg-background p-2 shadow-2xl transition-[width,height,box-shadow] duration-500 ease-out ${isOpen ? "top-1.5 h-[428.5px] w-74 border-border" : "top-3.5 h-13 w-20 border-transparent shadow-none sm:w-32"}`}
          >
            <button
              ref={menuButtonRef}
              type="button"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="site-navigation-menu"
              onClick={() => setIsOpen((open) => !open)}
              className={`focus-ring flex items-center justify-center gap-3 rounded-full border border-border bg-background text-sm font-medium text-foreground transition-opacity duration-300 hover:opacity-80 ${isOpen ? "mx-auto h-8 w-24" : "mx-auto h-7 w-10 sm:h-8 sm:w-24"}`}
            >
              {isOpen ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
              <span className="hidden lg:inline">{isOpen ? "Close" : "Menu"}</span>
            </button>

            <div
              id="site-navigation-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              aria-hidden={!isOpen}
              className={`overflow-hidden transition-[opacity,transform] duration-300 ease-out ${isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"}`}
            >
              <nav className="px-2 pt-7" aria-label="Site navigation links">
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

              <div className="mx-2 mt-7 border-t border-border pt-7">
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

          <ConsultationModal
            trigger={
              <Button className="h-13 rounded-full bg-brand px-5 text-xs font-semibold text-on-brand hover:bg-brand-hover sm:px-5 sm:text-sm">
                Start a Project
              </Button>
            }
          />
        </nav>
      </header>

    </>
  );
});

export default Navbar;
