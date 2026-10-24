"use client";

import { memo, useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import ConsultationModal from "@/components/ConsultationModal";
import { company } from "@/lib/content/company";
import { primaryNavigation } from "@/lib/content/navigation";

const EASE = [0.22, 1, 0.36, 1];
const MENU_DURATION = 0.35;
const desktopNavigation = primaryNavigation.filter(
  (item) => item.id !== "home",
);

const socialLinks = [
  { label: "Follow us on LinkedIn", href: company.social.linkedin },
  { label: "View our Instagram", href: company.social.instagram },
  { label: "Follow us on Facebook", href: company.social.facebook },
];

function isCurrentRoute(pathname, item) {
  if (item.id === "home") return pathname === "/";
  if (item.id === "contact") return false;
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

function MenuIcon({ open, reduceMotion }) {
  const transition = reduceMotion
    ? { duration: 0.01 }
    : { duration: 0.3, ease: EASE };

  return (
    <span
      className="relative grid size-4 place-items-center"
      aria-hidden="true"
    >
      <motion.span
        className="absolute h-0.5 w-4 rounded-full bg-current"
        initial={false}
        animate={{ y: open ? 0 : -4, rotate: open ? 45 : 0 }}
        transition={transition}
      />
      <motion.span
        className="absolute h-0.5 w-4 rounded-full bg-current"
        initial={false}
        animate={{ y: open ? 0 : 4, rotate: open ? -45 : 0 }}
        transition={transition}
      />
    </span>
  );
}

function createMenuItemVariants(reduceMotion) {
  return {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: (index) => {
      const delay = reduceMotion ? 0 : 0.14 + 0.045 * index;
      return {
        opacity: 1,
        y: 0,
        transition: reduceMotion
          ? { duration: 0.01 }
          : {
              opacity: { duration: MENU_DURATION, ease: EASE, delay },
              y: {
                type: "spring",
                stiffness: 420,
                damping: 42,
                mass: 0.9,
                restDelta: 0.01,
                delay,
              },
            },
      };
    },
  };
}

function FlipLabel({ value, reduceMotion }) {
  return (
    <span
      className="relative grid min-w-[5ch] items-center overflow-hidden text-left"
      aria-hidden="true"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={value}
          className="col-start-1 row-start-1 whitespace-nowrap"
          initial={reduceMotion ? { opacity: 0 } : { y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { y: "-100%", opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.26, ease: EASE }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Brand({ compact = false, textClassName = "text-foreground" }) {
  return (
    <Link
      href="/"
      aria-label="Enov8 Technologies home"
      className={`focus-ring inline-flex shrink-0 items-center gap-1 ${compact ? "size-13 justify-center rounded-full border border-border bg-background/95 p-2 shadow-[0_12px_28px_-16px_rgba(15,23,42,0.55)] backdrop-blur-xl" : ""} ${textClassName}`}
    >
      <span
        className="relative flex size-9 shrink-0 items-center justify-center"
        aria-hidden="true"
      >
        <Image
          src="/brand/logo.svg"
          alt=""
          fill
          sizes="36px"
          className="object-contain"
        />
      </span>
      {!compact ? (
        <span className="whitespace-nowrap text-base font-bold tracking-tight mt-2">
          Enov8 Technologies
        </span>
      ) : null}
    </Link>
  );
}

const Navbar = memo(function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [closedWidth, setClosedWidth] = useState(null);
  const [openShellWidth, setOpenShellWidth] = useState(500);
  const menuButtonRef = useRef(null);
  const menuSlotRef = useRef(null);
  const isOpenRef = useRef(false);
  const itemVariants = useMemo(
    () => createMenuItemVariants(Boolean(reduceMotion)),
    [reduceMotion],
  );

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 20);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    const slot = menuSlotRef.current;
    if (!slot) return undefined;
    const observer = new ResizeObserver(([entry]) => {
      const nextWidth = Math.round(entry?.contentRect.width || 0);
      if (nextWidth > 0)
        setClosedWidth((current) =>
          current === nextWidth ? current : nextWidth,
        );
    });
    observer.observe(slot);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    isOpenRef.current = false;
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        isOpenRef.current = false;
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const closeOnOutsidePointer = (event) => {
      if (isOpenRef.current && !menuSlotRef.current?.contains(event.target)) {
        isOpenRef.current = false;
        setIsOpen(false);
      }
    };
    const preventPageScroll = (event) => {
      if (!menuSlotRef.current?.contains(event.target)) event.preventDefault();
    };
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("wheel", preventPageScroll, { passive: false });
    document.addEventListener("touchmove", preventPageScroll, { passive: false });
    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("wheel", preventPageScroll);
      document.removeEventListener("touchmove", preventPageScroll);
    };
  }, [isOpen]);

  const closeMenu = () => {
    isOpenRef.current = false;
    setIsOpen(false);
  };
  const toggleMenu = () => {
    if (isOpenRef.current) return closeMenu();
    isOpenRef.current = true;
    setOpenShellWidth(Math.min(500, window.innerWidth - 32));
    setIsExpanded(true);
    setIsOpen(true);
  };

  const handleAnchorClick = (event, href) => {
    if (!href.startsWith("/#") || pathname !== "/") return;
    event.preventDefault();
    closeMenu();
    document
      .querySelector(href.slice(1))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={reduceMotion ? { duration: 0.01 } : { duration: 0.2 }}
          aria-hidden="true"
          onClick={closeMenu}
          className="fixed inset-x-0 bottom-0 top-0 z-40 bg-foreground/20 backdrop-blur-md lg:hidden"
        />
      ) : null}
      <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ease-out ${isScrolled ? "border-b border-white/55 bg-white/90 shadow-[0_12px_32px_-20px_rgba(15,23,42,0.28)] backdrop-blur-xl" : "border-b border-transparent bg-transparent"}`}
    >
      <nav aria-label="Primary navigation" className="w-full px-6 lg:px-14">
        {/* Desktop: clean brand, centered glass navigation, and CTA. */}
        <div className="hidden h-20 items-center justify-between lg:flex">
          <Brand
            textClassName={isScrolled ? "text-foreground" : "text-white"}
          />
          <div className="absolute left-1/2 -translate-x-1/2 rounded-full border border-white/30 bg-white/15 px-3 py-2 shadow-[0_12px_32px_-20px_rgba(15,23,42,0.3)] backdrop-blur-lg">
            <ul
              className="flex list-none items-center gap-1 p-0"
              aria-label="Desktop navigation links"
            >
              {desktopNavigation.map((item) => {
                const current = isCurrentRoute(pathname, item);
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      aria-current={current ? "page" : undefined}
                      onClick={(event) => handleAnchorClick(event, item.href)}
                      className={`focus-ring rounded-full px-4 py-2 text-sm font-medium transition-colors ${isScrolled ? "hover:bg-white/55" : "hover:bg-white/15"} ${current ? (isScrolled ? "bg-white/70 text-brand" : "bg-white/20 text-white") : isScrolled ? "text-foreground" : "text-white"}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link
            href="/services"
            className="focus-ring inline-flex min-h-8 items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-on-brand shadow-sm transition-colors hover:bg-brand-hover"
          >
            Explore solutions
          </Link>
        </div>

        {/* Mobile and tablet intentionally share this exact three-column composition. */}
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={reduceMotion ? { duration: 0.01 } : { duration: 0.2 }}
            aria-hidden="true"
            onClick={closeMenu}
            className="fixed inset-x-0 bottom-0 top-0 z-40 h-auto bg-foreground/20 backdrop-blur-md lg:hidden"
          />
        ) : null}
        <div className="relative flex h-20 items-center justify-between lg:hidden">
          <div className="flex">
            <Brand compact />
          </div>
          <div
            ref={menuSlotRef}
            className="absolute left-1/2 top-2 z-60 grid h-16 w-18 -translate-x-1/2 place-items-center sm:w-32 md:w-36"
          >
            <motion.div
              initial={false}
              animate={{
                width: isOpen ? openShellWidth : closedWidth,
                boxShadow: isOpen
                  ? "0 30px 70px -24px rgba(0,0,0,0.25)"
                  : "0 30px 70px -24px rgba(0,0,0,0)",
              }}
              transition={
                reduceMotion
                  ? { duration: 0.01 }
                  : { duration: MENU_DURATION, ease: EASE }
              }
              className="absolute left-1/2 top-0 z-70 w-18 max-w-[calc(70vw-2rem)] sm:max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-full p-2 sm:w-32 md:w-36 md:rounded-[28px]"
            >
              <motion.div
                initial={false}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={
                  reduceMotion
                    ? { duration: 0.01 }
                    : { duration: MENU_DURATION, ease: EASE }
                }
                className="pointer-events-none absolute inset-0 rounded-[28px] bg-background shadow-lg"
                aria-hidden="true"
              />
              <div className="relative z-10 flex h-13 w-full items-center justify-center rounded-full border border-border bg-background/95 px-1.5 text-foreground shadow-sm backdrop-blur-xl">
                <button
                  ref={menuButtonRef}
                  type="button"
                  onClick={toggleMenu}
                  aria-expanded={isOpen}
                  aria-controls="site-navigation-menu"
                  aria-label={
                    isOpen ? "Close navigation menu" : "Open navigation menu"
                  }
                  className="focus-ring flex items-center justify-center gap-2.5 rounded-full px-3 py-1.5 text-sm font-medium transition-opacity hover:opacity-80"
                >
                  <MenuIcon open={isOpen} reduceMotion={reduceMotion} />
                  <span className="hidden sm:grid">
                    <FlipLabel
                      value={isOpen ? "Close" : "Menu"}
                      reduceMotion={reduceMotion}
                    />
                  </span>
                </button>
              </div>
              {isExpanded ? (
                <motion.div
                  id="site-navigation-menu"
                  role="region"
                  aria-label="Site navigation"
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                  initial={{ height: 0 }}
                  animate={{ height: isOpen ? "auto" : 0 }}
                  transition={
                    reduceMotion
                      ? { duration: 0.01 }
                      : { duration: MENU_DURATION, ease: EASE }
                  }
                  onAnimationComplete={() => {
                    if (!isOpenRef.current) setIsExpanded(false);
                  }}
                  className="relative z-10 overflow-hidden"
                >
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{ hidden: {}, visible: {} }}
                    className="w-full px-5 pb-4 pt-7"
                  >
                    <ul className="grid grid-cols-1 list-none sm:grid-cols-2 gap-x-8 gap-y-1 p-0">
                      <motion.li
                        initial="hidden"
                        animate="visible"
                        custom={0}
                        variants={itemVariants}
                        className="col-span-full mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground"
                      >
                        Menu
                      </motion.li>
                      {primaryNavigation.map((item, index) => {
                        const current = isCurrentRoute(pathname, item);
                        return (
                          <motion.li
                            key={item.id}
                            initial="hidden"
                            animate="visible"
                            custom={index + 1}
                            variants={itemVariants}
                          >
                            <Link
                              href={item.href}
                              tabIndex={isOpen ? 0 : -1}
                              aria-current={current ? "page" : undefined}
                              onClick={(event) => {
                                closeMenu();
                                handleAnchorClick(event, item.href);
                              }}
                              className={`focus-ring flex min-h-11 w-full items-center rounded-md text-xl font-medium leading-tight tracking-tight transition-colors hover:text-brand ${current ? "text-brand" : "text-foreground"}`}
                            >
                              {item.label}
                            </Link>
                          </motion.li>
                        );
                      })}
                    </ul>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      custom={primaryNavigation.length + 1}
                      variants={itemVariants}
                      className="my-6 h-px w-full bg-border"
                    />
                    <div className="flex flex-col gap-3">
                      <motion.p
                        initial="hidden"
                        animate="visible"
                        custom={primaryNavigation.length + 2}
                        variants={itemVariants}
                        className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                      >
                        Social media
                      </motion.p>
                      <ul className="flex list-none flex-wrap gap-x-5 gap-y-2 p-0">
                        {socialLinks.map(({ label, href }, index) => (
                          <motion.li
                            key={label}
                            initial="hidden"
                            animate="visible"
                            custom={primaryNavigation.length + 3 + index}
                            variants={itemVariants}
                          >
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              tabIndex={isOpen ? 0 : -1}
                              onClick={closeMenu}
                              className="focus-ring inline-flex min-h-11 items-center rounded-sm px-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                            >
                              {label
                                .replace("Follow us on ", "")
                                .replace("View our ", "")}
                            </a>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              ) : null}
            </motion.div>
          </div>
          <div className="flex shrink-0">
            <Link
              href="/services"
              aria-label="Explore solutions"
              className="focus-ring inline-flex h-12 max-w-[calc(100vw-10rem)] items-center justify-center rounded-full bg-brand px-2.5 text-xs font-medium text-on-brand hover:bg-brand-hover sm:max-w-none sm:px-4 sm:text-sm"
            >
              <span className="inline-flex h-full items-center justify-center whitespace-nowrap">
                Explore solutions
              </span>
            </Link>
          </div>
        </div>
      </nav>
      </header>
    </>
  );
});

export default Navbar;
