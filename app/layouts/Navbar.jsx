"use client";

import { useState, useEffect, memo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  PhoneCall,
  Mail,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import ConsultationModal from "@/components/ConsultationModal";

const MEGA_MENU_SERVICES = [
  {
    title: "Digital Signage",
    href: "/services/digital-signage",
    hints: [
      "Dynamic Content Management",
      "High-Impact Visual Displays",
      "Real-Time Integration",
    ],
  },
  {
    title: "Business Automation",
    href: "/services/automation",
    hints: [
      "ERP Solutions",
      "Document Management System",
      "Workflow Optimization",
    ],
  },
  {
    title: "Onboarding & ID",
    href: "/services/onboarding",
    hints: ["KYC", "AML", "Fraud Detection"],
  },
  {
    title: "Cyber Security",
    href: "/services/security",
    hints: ["Audits", "Encryptions", "Security Ops"],
  },
  {
    title: "Software Development",
    href: "/services/software-dev",
    hints: [""],
  },
  {
    title: "IT Consulting",
    href: "/services/consulting",
    hints: ["IT Consulting", "Infrastructure Strategy", "Feasibility Studies"],
  },
  {
    title: "ERP Deployment",
    href: "/services/erp-deployment",
    hints: ["Custom ERP Strategy", "Process Automation", "System Integration"],
  },
  {
    title: "AI Deployment",
    href: "/services/ai-deployment",
    hints: [
      "Intelligent Automation",
      "Data-Driven Insights",
      "Predictive Models",
    ],
  },
  {
    title: "Networking",
    href: "/services/networking",
    hints: [
      "Digital Network Architecture",
      "Structured Cabling",
      "Wireless Solutions",
      "Network Security",
      "Enterprise Network Monitoring",
    ],
  },
  {
    title: "Zoho Implementations",
    href: "/services/zoho-partner",
    hints: ["Sales", "Finance", "Marketing", "Operations", "Support", "HR"],
  },
  {
    title: "Document Management system",
    href: "/services/document-management",
    hints: [""],
  },
  {
    title: "Hardware Procurement",
    href: "/services/hardware-procurement",
    hints: [
      "Enterprise Sourcing",
      "Deployment & Lifecycle",
      "Vendor Management",
    ],
  },
];

const Navbar = memo(function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

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
    <>
      {/* Section: TOP BAR (Contact & Socials) */}
      <div className="hidden md:flex bg-white dark:bg-zinc-950 border-b border-[#ebebeb] dark:border-zinc-800 py-3 relative z-40">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center text-xs text-gray-700 dark:text-white/90">
          <div className="flex items-center gap-6">
            <a
              href="tel:+2347064838988"
              className="flex items-center gap-2 hover:text-light-primary transition-colors text-sm"
            >
              <span className="text-light-primary">
                <PhoneCall size={20} />
              </span>
              +234 913 363 2465
            </a>
            <a
              href="mailto:sales@enov8technologies.com "
              className="flex items-center gap-2 hover:text-light-primary transition-colors text-sm"
            >
              <span className="text-light-primary">
                <Mail size={20} />
              </span>
              sales@enov8technologies.com
            </a>
          </div>
          <div className="flex items-center gap-4 uppercase  text-[10px]">
            <a
              href="https://www.linkedin.com/company/enov8-technologies/"
              className="text-light-primary hover:text-light-hover transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/Enov8_Technologies?igsh=YWZtNHNia2syanE1"
              className="text-light-primary hover:text-light-hover transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://web.facebook.com/Enov8Technologies"
              className="text-light-primary hover:text-light-hover transition-colors"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky lg:relative top-0 z-100 w-full ${
          isSticky
            ? "py-3 bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-white/5"
            : "py-6 bg-white dark:bg-black border-b border-gray-100 dark:border-zinc-500"
        }`}
      >
        <nav className="container mx-auto max-h-10 h-full px-6 md:px-12 lg:px-24 flex justify-between items-center">
          <div className="flex items-center gap-2" suppressHydrationWarning>
            <a
              href="/"
              className="flex items-center gap-1 group"
              aria-label="Enov8 Technologies Home"
            >
              <div className="relative w-10 h-10" suppressHydrationWarning>
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
              <span className="capitalize text-base text-[#23252d] dark:text-white transition-colors duration-200 font-medium mt-1">
                enov8 technologies
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-6 text-[12px] uppercase  dark:text-white relative">
            <li className="relative z-50 group/menu">
              <Link
                href="/services"
                className="flex items-center gap-1 py-4 hover:text-light-primary transition-colors font-medium"
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
                className="absolute top-16 left-1 -translate-x-1 w-[800px] bg-white dark:bg-zinc-900 shadow-2xl
              py-12 px-10 columns-3 gap-10 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible 
              transition-all duration-300 translate-y-2 group-hover/menu:translate-y-0 z-200"
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
                        className=" text-base capitalize font-medium tracking-wide text-[#1A1A37] dark:text-white hover:text-light-primary transition-colors"
                      >
                        {service.title}
                      </Link>
                    </div>
                    {service.hints.some((h) => h !== "") && (
                      <ul className="space-y-1 pl-3 text-sm text-gray-500 capitalize dark:text-white/60">
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
                className="hover:text-light-primary transition-colors py-4 font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="hover:text-light-primary transition-colors py-4 font-medium"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div
            className="hidden lg:flex items-center gap-4"
            suppressHydrationWarning
          >
            <ThemeToggle />
            <ConsultationModal
              trigger={
                <Button
                  className="bg-light-primary text-white px-10 h-14 text-[12px]  uppercase
                  transition-all rounded-none hover:bg-light-primary/90 font-medium"
                >
                  Start a Project
                </Button>
              }
            />
          </div>

          {/* Hamburger (Mobile) */}
          <div
            className="flex items-center gap-4 lg:hidden"
            suppressHydrationWarning
          >
            <ThemeToggle />
            <button
              aria-label="Toggle navigation menu"
              className="bg-light-primary p-2 text-white shadow-lg"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ── MOBILE NAV DRAWER (Outside Header) ────────────────────────────────── */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-all duration-300 z-110
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={toggleMenu}
        suppressHydrationWarning
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-[#141414] text-white z-120 
              transform transition-transform duration-500 ease-in-out shadow-2xl 
              ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        suppressHydrationWarning
      >
        <div className="flex flex-col h-full p-8">
          <div
            className="flex justify-between items-center mb-12"
            suppressHydrationWarning
          >
            <span className=" text-xs  text-zinc-500 uppercase">Menu</span>
            <button
              onClick={toggleMenu}
              className="p-3 bg-light-primary text-white rounded-full transition-transform hover:rotate-90"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col space-y-6">
            <a
              href="/"
              className="text-xl tracking-tighter hover:text-light-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="/services"
              className="text-xl tracking-tighter hover:text-light-primary transition-colors"
              onClick={(e) => handleNavClick(e, "/services")}
            >
              Services
            </a>
            <Link
              href="/about"
              className="text-xl tracking-tighter hover:text-light-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <a
              href="/#contact"
              className="text-xl tracking-tighter hover:text-light-primary transition-colors"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Contact
            </a>
          </nav>

          <div
            className="mt-auto pt-10 border-t border-white/10"
            suppressHydrationWarning
          >
            <p className="text-[10px] uppercase  mb-4">Get in touch</p>
            <a
              href="mailto:contact@enov8technologies.com"
              className="block text-base mb-1 hover:text-light-primary transition-colors"
            >
              contact@enov8technologies.com
            </a>
            <p className="">+234 913 363 2465</p>

            <div className="mt-8 flex gap-4" suppressHydrationWarning>
              {/* Simple icons placeholder if needed */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Navbar;
