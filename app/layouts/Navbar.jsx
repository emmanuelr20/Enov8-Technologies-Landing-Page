"use client";

import { useState, useEffect, memo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Menu,
  X,
  Facebook,
  Linkedin,
  Instagram,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import ConsultationModal from "@/components/ConsultationModal";
import { servicesList } from "@/lib/servicesData";

const MEGA_MENU_SERVICES = servicesList.map((service) => ({
  title: service.title,
  href: `/services/${service.id}`,
  hints: service.menuHints,
}));

const Navbar = memo(function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsSticky(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNavClick = (e, id) => {
    // If the id is not an anchor (doesn't start with #), it's a normal link
    if (!id.startsWith("#")) {
      setIsOpen(false);
      return;
    }

    // If we're not on the homepage, let the link navigate normally to "/#section"
    if (pathname !== "/") {
      setIsOpen(false);
      return;
    }

    // If we are on the homepage, do the smooth scroll
    e.preventDefault();
    try {
      const section = document.querySelector(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } catch (err) {
      console.error("Invalid selector:", id);
    }
    setTimeout(() => setIsOpen(false), 100);
  };

  return (
    <div className="relative z-100 w-full" suppressHydrationWarning>
      <header
        className={`${isHome ? "absolute top-0" : "sticky top-0"} z-100 w-full ${
          isHome
            ? "border-b border-white/15 bg-white py-4 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/80"
            : isSticky
            ? "border-b border-border bg-background/95 py-3 shadow-sm backdrop-blur-md"
            : "border-b border-border bg-background py-4"
        }`}
      >
        <nav aria-label="Primary navigation" className="mx-auto flex h-full w-full max-w-[var(--container-content)] items-center justify-between px-6 md:px-12 lg:px-16">
          {/* Left Space (Mobile) / Logo Container (Desktop) */}
          <div className="flex-1 lg:flex-initial" suppressHydrationWarning>
            <Link
              href="/"
              className="focus-ring group flex items-center gap-2 rounded-md"
              aria-label="Enov8 Technologies Home"
            >
              <div
                className="relative w-8 h-8 md:w-10 md:h-10"
                suppressHydrationWarning
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 300 301"
                  className="w-full h-full"
                  aria-hidden="true"
                >
                  <g transform="translate(0.000000,301.000000) scale(0.100000,-0.100000)">
                    <path
                      d="M682 2446 c2 -8 84 -136 183 -285 l180 -271 639 0 c547 0 637 2 633 14 -3 8 -87 136 -186 285 l-181 271 -636 0 c-537 0 -635 -2 -632 -14z"
                      className="fill-light-primary dark:fill-white transition-colors duration-200"
                    />
                    <path
                      d="M462 938 l3 -693 929 -3 c800 -2 927 0 923 12 -3 8 -87 136 -186 285 l-181 271 -460 0 -460 0 0 130 0 130 375 0 375 0 -188 280 -187 280 -473 0 -472 0 2 -692z"
                      className="fill-light-primary dark:fill-white transition-colors duration-200"
                    />
                  </g>
                </svg>
              </div>
              <span className="capitalize text-sm md:text-base text-[#23252d] dark:text-white transition-colors duration-200 font-bold mt-2 tracking-tight">
                enov8 technologies
              </span>
            </Link>
          </div>

          {/* Desktop Nav (Center-Right) */}
          <ul className="hidden lg:flex items-center gap-8 text-[12px] uppercase dark:text-white relative mx-auto">
            <li className="relative z-50 group/menu">
              <Link
                href="/services"
                aria-haspopup="true"
                className="focus-ring flex items-center gap-1 rounded-md py-4 tracking-wider transition-colors hover:text-brand"
                onClick={(e) => handleNavClick(e, "/services")}
              >
                Services
                <ChevronDown
                  size={14}
                  className="transition-transform group-hover/menu:rotate-180"
                />
              </Link>

              {/* Mega Menu Dropdown */}
              <div
                className="absolute left-1 top-16 z-200 w-[min(800px,calc(100vw-2rem))] -translate-x-1 bg-surface-elevated
              py-12 px-10 columns-3 gap-10 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible 
              shadow-xl transition-all duration-[var(--motion-standard)] translate-y-2 group-hover/menu:translate-y-0"
                suppressHydrationWarning
              >
                {MEGA_MENU_SERVICES.map((service, idx) => (
                  <div
                    key={idx}
                    className="break-inside-avoid mb-10 space-y-3"
                    suppressHydrationWarning
                  >
                    <div
                      className="flex items-center gap-2"
                      suppressHydrationWarning
                    >
                      <span className="w-1 h-5 bg-light-primary block" />
                      <Link
                        href={service.href}
                        className="focus-ring rounded-sm text-base capitalize font-medium tracking-wide hover:text-brand transition-colors"
                      >
                        {service.title}
                      </Link>
                    </div>
                    {service.hints.some((h) => h !== "") && (
                      <ul className="type-small space-y-1 pl-3 text-muted-foreground capitalize">
                        {service.hints
                          .filter((h) => h !== "")
                          .map((hint, hIdx) => (
                            <li key={hIdx}>{hint}</li>
                          ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </li>
            <li>
              <Link
                href="/about"
                className="focus-ring rounded-md py-4 tracking-wider transition-colors hover:text-brand"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="focus-ring rounded-md py-4 tracking-wider transition-colors hover:text-brand"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Right Actions (Hamburger + Desktop Controls) */}
          <div
            className="flex items-center justify-end gap-2 sm:gap-4 flex-1 lg:flex-initial"
            suppressHydrationWarning
          >
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />
              <ConsultationModal
                trigger={
                  <Button
                    className="bg-light-primary text-white px-8 h-12 text-[11px] uppercase
                    transition-all rounded-none hover:bg-light-primary/90 font-bold tracking-widest"
                  >
                    Start a Project
                  </Button>
                }
              />
            </div>

            {/* Mobile Hamburger (Right) */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="focus-ring -mr-2 rounded-md p-2 text-foreground lg:hidden"
              onClick={toggleMenu}
            >
              <div className="space-y-1.5 w-6">
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2 w-6" : "w-6"}`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "w-4"}`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2 w-6" : "w-6"}`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* ── MOBILE NAV DRAWER (Modern Staggered Reveal) ────────────────────────────────── */}
      {/* 1. Backdrop Dimmer */}
      <button
        type="button"
        aria-label="Close navigation menu"
        className={`fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-700 z-110
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={toggleMenu}
        suppressHydrationWarning
      />

      {/* 2. Layer 1: Brand Curtain Slider */}
      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 h-full w-full bg-black/60 z-115 transform transition-transform duration-600 ease-[cubic-bezier(0.77,0,0.175,1)]
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ transitionDelay: isOpen ? "0ms" : "150ms" }}
        suppressHydrationWarning
      />

      {/* 3. Layer 2: Main Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-120 bg-zinc-950 text-white z-120
              transform transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] shadow-2xl 
              ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ transitionDelay: isOpen ? "100ms" : "0ms" }}
        suppressHydrationWarning
      >
        <div className="flex flex-col h-full overflow-y-auto">          {/* Header Area */}
          <div
            className="flex justify-between items-center p-8 sm:p-12 pb-4"
            suppressHydrationWarning
          >
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8" suppressHydrationWarning>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 300 301"
                  className="w-full h-full"
                  aria-hidden="true"
                >
                  <g transform="translate(0.000000,301.000000) scale(0.100000,-0.100000)">
                    <path
                      d="M682 2446 c2 -8 84 -136 183 -285 l180 -271 639 0 c547 0 637 2 633 14 -3 8 -87 136 -186 285 l-181 271 -636 0 c-537 0 -635 -2 -632 -14z"
                      className="fill-white"
                    />
                    <path
                      d="M462 938 l3 -693 929 -3 c800 -2 927 0 923 12 -3 8 -87 136 -186 285 l-181 271 -460 0 -460 0 0 130 0 130 375 0 375 0 -188 280 -187 280 -473 0 -472 0 2 -692z"
                      className="fill-white"
                    />
                  </g>
                </svg>
              </div>
              <span className="capitalize text-sm text-white font-bold tracking-tight mt-2">
                enov8 technologies
              </span>
            </div>
            <button
              onClick={toggleMenu}
              className="group relative p-4 text-white active:scale-95"
              aria-label="Close menu"
            >
              <div className="space-y-1.5 w-6">
                <span className="block h-0.5 bg-white transition-all duration-300 rotate-45 translate-y-2 w-6" />
                <span className="block h-0.5 bg-white transition-all duration-300 opacity-0" />
                <span className="block h-0.5 bg-white transition-all duration-300 -rotate-45 -translate-y-2 w-6" />
              </div>
            </button>
          </div>

          <div className="px-8 sm:px-12 pt-0 flex flex-col h-full">

            {/* Nav Links with staggered fade-in */}
            <nav className="flex flex-col space-y-8 pt-6">
              {[
                { label: "Home", href: "/", id: "home" },
                { label: "Services", href: "/services", id: "/services" },
                { label: "About Us", href: "/about", id: "about" },
                { label: "Contact", href: "/#contact", id: "#contact" },
              ].map((link, i) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`text-white/85 text-base uppercase font-medium tracking-wide
                ${isOpen ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}`}
                  style={{
                    transitionDelay: isOpen ? `${300 + i * 70}ms` : "0ms",
                  }}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Footer Info */}
            <div
              className={`mt-auto pt-10 pb-3 border-t border-white/5 transition-all duration-1000 delay-700
            ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              suppressHydrationWarning
            >
              <p className="text-zinc-500 uppercase tracking-widest mb-6">
                Get in touch
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:sales@enov8technologies.com"
                  className="block font-light"
                  onClick={() => setIsOpen(false)}
                >
                  sales@enov8technologies.com
                </a>
                <p className="font-medium">+234 913 363 2465</p>
              </div>

              <div className="mt-10 flex items-center justify-between">
                <div className="flex gap-6 text-zinc-400">
                  <a
                    href="#"
                    className="hover:text-light-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                    target="_blank"
                    aria-label="Follow us on LinkedIn"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="hover:text-light-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                    target="_blank"
                    aria-label="View our Instagram"
                    rel="noopener noreferrer"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="hover:text-light-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                    target="_blank"
                    aria-label="Follow us on Facebook"
                    rel="noopener noreferrer"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
                <div 
                  className="lg:hidden"
                  onClick={() => setTimeout(() => setIsOpen(false), 100)}
                  suppressHydrationWarning
                >
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Navbar;
