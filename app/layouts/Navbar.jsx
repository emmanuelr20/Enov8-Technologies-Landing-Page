"use client";

import { memo, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { Button } from "@/components/ui/button";
import ConsultationModal from "@/components/ConsultationModal";
import { company } from "@/lib/content/company";
import { primaryNavigation } from "@/lib/content/navigation";

const EASE = [0.22, 1, 0.36, 1];

function isCurrentRoute(pathname, item) {
  if (item.id === "home") return pathname === "/";
  if (item.id === "contact") return false;
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

const socialLinks = [
  { label: "Follow us on LinkedIn", href: company.social.linkedin },
  { label: "View our Instagram", href: company.social.instagram },
  { label: "Follow us on Facebook", href: company.social.facebook },
];

function createMenuPanelVariants(reduceMotion) {
  return {
    hidden: {
      height: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: reduceMotion ? 0 : 0.02,
        staggerDirection: -1,
        height: { duration: reduceMotion ? 0.01 : 0.34, ease: EASE },
      },
    },
    visible: {
      height: "auto",
      transition: {
        height: { duration: reduceMotion ? 0.01 : 0.44, ease: EASE },
      },
    },
  };
}

function createMenuItemVariants(reduceMotion) {
  return {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 14,
      transition: { duration: reduceMotion ? 0.01 : 0.14, ease: EASE },
    },
    visible: (index) => {
      const delay = reduceMotion ? 0 : 0.12 + 0.045 * index;
      return {
        opacity: 1,
        y: 0,
        transition: reduceMotion
          ? { duration: 0.01 }
          : {
              opacity: { duration: 0.38, ease: EASE, delay },
              y: {
                type: "spring",
                stiffness: 420,
                damping: 42,
                mass: 0.9,
                delay,
              },
            },
      };
    },
  };
}

function MenuIcon({ open, reduceMotion }) {
  const transition = reduceMotion
    ? { duration: 0.01 }
    : { duration: 0.38, ease: EASE };

  return (
    <span className="relative grid h-4 w-4 place-items-center" aria-hidden="true">
      <motion.span
        className="absolute left-1/2 top-1/2 block h-[1.6px] w-3.75 -translate-x-1/2 rounded-full bg-current"
        initial={false}
        animate={{ y: open ? 0 : -4, rotate: open ? 45 : 0 }}
        transition={transition}
      />
      <motion.span
        className="absolute left-1/2 top-1/2 block h-[1.6px] w-3.75 -translate-x-1/2 rounded-full bg-current"
        initial={false}
        animate={{ y: open ? 0 : 4, rotate: open ? -45 : 0 }}
        transition={transition}
      />
    </span>
  );
}

function FlipLabel({ value, reduceMotion }) {
  const minWidth = `${Math.max(value.length, 5)}ch`;

  return (
    <span
      className="relative grid items-center overflow-hidden text-left"
      style={{ minWidth }}
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

const Navbar = memo(function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [closedWidth, setClosedWidth] = useState(null);
  const menuButtonRef = useRef(null);
  const menuSlotRef = useRef(null);
  const isOpenRef = useRef(false);
  const itemVariants = createMenuItemVariants(Boolean(reduceMotion));
  const panelVariants = createMenuPanelVariants(Boolean(reduceMotion));

  useEffect(() => {
    const slot = menuSlotRef.current;
    if (!slot) return undefined;

    const updateClosedWidth = () => {
      setClosedWidth(slot.getBoundingClientRect().width);
    };
    updateClosedWidth();

    const observer = new ResizeObserver(updateClosedWidth);
    observer.observe(slot);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isExpanded) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpenRef.current) {
        isOpenRef.current = false;
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const handlePointerDown = (event) => {
      if (
        isOpenRef.current &&
        !menuSlotRef.current?.contains(event.target)
      ) {
        isOpenRef.current = false;
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isExpanded]);

  useEffect(() => {
    isOpenRef.current = false;
    setIsOpen(false);
  }, [pathname]);

  const closeMenu = () => {
    isOpenRef.current = false;
    setIsOpen(false);
  };

  const toggleMenu = () => {
    if (isOpenRef.current) {
      closeMenu();
      return;
    }

    isOpenRef.current = true;
    setIsExpanded(true);
    setIsOpen(true);
  };

  const handleAnchorClick = (event, href) => {
    if (!href.startsWith("/#") || pathname !== "/") return;
    event.preventDefault();
    closeMenu();
    document.querySelector(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  const menuWidth = isExpanded ? 296 : closedWidth;
  const menuShadow = isExpanded
    ? "0 30px 70px -24px rgba(0,0,0,0.25)"
    : "0 30px 70px -24px rgba(0,0,0,0)";
  const shellTransition = reduceMotion
    ? { duration: 0.01 }
    : { duration: 0.44, ease: EASE };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 w-full border-b border-border/70 bg-background backdrop-blur-md"
    >
      <nav
        aria-label="Primary navigation"
        className="relative mx-auto grid h-20 w-full max-w-(--container-content) grid-cols-[1fr_auto] items-center px-6 sm:px-10 lg:grid-cols-3 md:px-10"
      >
        <Link
          href="/"
          aria-label="Enov8 Technologies home"
          className="focus-ring col-start-1 inline-flex h-13 w-13 shrink-0 items-center justify-center justify-self-start overflow-hidden rounded-full border border-border bg-background md:w-55 md:justify-start md:px-2"
        >
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
        </Link>

        <div className="col-start-2 flex items-center justify-end gap-3 md:contents">
          <div
            ref={menuSlotRef}
            className="relative h-17 w-18 shrink-0 justify-self-center sm:w-32 md:col-start-2 md:h-16 md:w-36"
          >
            <motion.div
              initial={false}
              animate={{
                ...(menuWidth ? { width: menuWidth } : {}),
                boxShadow: menuShadow,
              }}
              transition={shellTransition}
              className="absolute left-1/2 z-50 w-18 -translate-x-1/2 rounded-full p-2 sm:w-32 md:rounded-[28px] md:w-36"
            >
              <motion.div
                initial={false}
                animate={{ opacity: isExpanded ? 1 : 0 }}
                transition={reduceMotion ? { duration: 0.01 } : { duration: 0.3, ease: EASE }}
                className="pointer-events-none absolute inset-0 rounded-[28px] bg-background shadow-lg"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="flex h-13 w-full items-center justify-center rounded-full border border-border bg-background px-1.5 text-foreground">
                  <button
                    ref={menuButtonRef}
                    type="button"
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-controls="site-navigation-menu"
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    className="focus-ring flex items-center justify-center gap-2.5 rounded-full px-3 py-1.5 text-sm font-medium transition-opacity hover:opacity-80"
                  >
                    <MenuIcon open={isOpen} reduceMotion={reduceMotion} />
                    <span className="hidden md:grid">
                      <FlipLabel value={isOpen ? "Close" : "Menu"} reduceMotion={reduceMotion} />
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
                    initial="hidden"
                    animate={isOpen ? "visible" : "hidden"}
                    variants={panelVariants}
                    transition={shellTransition}
                    onAnimationComplete={(definition) => {
                      if (definition === "hidden" && !isOpenRef.current) {
                        setIsExpanded(false);
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-3 pt-7">
                      <div className="flex flex-col gap-1">
                        <motion.p
                          custom={0}
                          variants={itemVariants}
                          className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground"
                        >
                          Menu
                        </motion.p>

                        {primaryNavigation.map((item, index) => {
                          const current = isCurrentRoute(pathname, item);
                          return (
                            <motion.div
                              key={item.id}
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
                                className={`focus-ring block w-fit rounded-md py-1 text-[clamp(1.25rem,3vw,1.5rem)] font-medium leading-tight tracking-tight transition-colors hover:text-brand ${current ? "text-brand" : "text-foreground"}`}
                              >
                                {item.label}
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>

                      <motion.div
                        custom={primaryNavigation.length + 1}
                        variants={itemVariants}
                        className="my-6 h-px w-full bg-border"
                      />

                      <div className="flex flex-col gap-3">
                        <motion.p
                          custom={primaryNavigation.length + 2}
                          variants={itemVariants}
                          className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                        >
                          Social media
                        </motion.p>
                        <div className="flex flex-wrap gap-x-5 gap-y-2">
                          {socialLinks.map(({ label, href }, index) => (
                            <motion.a
                              key={label}
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              tabIndex={isOpen ? 0 : -1}
                              onClick={closeMenu}
                              custom={primaryNavigation.length + 3 + index}
                              variants={itemVariants}
                              className="focus-ring rounded-sm text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                            >
                              {label.replace("Follow us on ", "").replace("View our ", "")}
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </div>
            </motion.div>
          </div>

          <div
            className="shrink-0 md:col-start-3 md:justify-self-end"
          >
            <ConsultationModal
              trigger={
                <Button className="h-12 shrink-0 rounded-full bg-brand px-3 text-[11px] font-semibold text-on-brand hover:bg-brand-hover sm:h-13 sm:px-5 sm:text-sm">
                  Start a Project
                </Button>
              }
            />
          </div>
        </div>
      </nav>
    </header>
  );
});

export default Navbar;
