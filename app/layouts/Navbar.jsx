"use client";

import { useState, useEffect, memo } from "react";
import {
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  PhoneCall,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { useScrollRevealMultiple } from "@/hooks/useScrollReveal";

const Navbar = memo(function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const elementsRef = useScrollRevealMultiple(
    [
      { delay: 50 }, // logo
      { delay: 100 }, // nav items
      { delay: 150 }, // button
      { delay: 150 }, // toggle
    ],
    {
      origin: "top",
      distance: "30px",
      duration: 400,
      easing: "ease-out",
      reset: false,
    },
  );

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
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => setIsOpen(false), 100);
  };

  return (
    <>
      {/* Section: TOP BAR (Contact & Socials) */}
      <div className="hidden lg:flex bg-white dark:bg-zinc-950 border-b border-[#ebebeb] dark:border-zinc-800 py-3 relative z-60">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center text-xs text-gray-700 dark:text-zinc-400">
          <div className="flex items-center gap-6">
            <a
              href="tel:+2347064838988"
              className="flex items-center gap-2 hover:text-light-primary transition-colors"
            >
              <span className="text-light-primary">
                <PhoneCall size={20} />
              </span>
              +234 706 483 8988
            </a>
            <a
              href="mailto:contact@enov8technologies.com"
              className="flex items-center gap-2 hover:text-light-primary transition-colors"
            >
              <span className="text-light-primary">
                <Mail size={20} />
              </span>
              contact@enov8technologies.com
            </a>
          </div>
          <div className="flex items-center gap-4 font-bold uppercase tracking-wider text-[10px]">
            <a
              href=""
              className="text-light-primary hover:text-light-hover transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href=""
              className="text-light-primary hover:text-light-hover transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href=""
              className="text-light-primary hover:text-light-hover transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href=""
              className="text-light-primary hover:text-light-hover transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <header
        className={`z-50 w-full transition-all duration-300 py-3 bg-white/95 dark:bg-black/95 backdrop-blur-sm`}
      >
        <nav className="container mx-auto h-full px-6 md:px-12 lg:px-24 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <a
              ref={(el) => (elementsRef.current[0] = el)}
              href="#home"
              className="flex items-center gap-2 group"
              onClick={(e) => handleNavClick(e, "#home")}
              aria-label="Enov8 Technologies Home"
            >
              <div className="relative w-8 h-8 transition-transform group-hover:scale-110">
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
              <span
                className="capitalize text-lg font-bold text-[#23252d] dark:text-white transition-colors duration-200"
                style={{ fontFamily: "var(--font-space)" }}
              >
                enov8 technologies
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <ul
            ref={(el) => (elementsRef.current[1] = el)}
            className="hidden lg:flex items-center gap-6 text-[12px] uppercase font-bold tracking-widest dark:text-white"
          >
            <li>
              <a
                href="#services"
                className="hover:text-light-primary transition-colors"
                onClick={(e) => handleNavClick(e, "#services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-[#007bff] transition-colors"
                onClick={(e) => handleNavClick(e, "#about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[#007bff] transition-colors"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                Contact
              </a>
            </li>
          </ul>

          <div
            ref={(el) => (elementsRef.current[2] = el)}
            className="hidden lg:flex items-center gap-4"
          >
            <ThemeToggle />
            <Button
              size="default"
              className="bg-light-primary text-white px-8 font-bold text-[10px] tracking-widest uppercase 
              transition-all shadow-lg shadow-light-primary/20"
            >
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                Start a Project
              </a>
            </Button>
          </div>

          {/* Hamburger (Mobile) */}
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <button
              ref={(el) => (elementsRef.current[3] = el)}
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
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-all duration-300 z-60
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={toggleMenu}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-[#141414] text-white z-70 
              transform transition-transform duration-500 ease-in-out shadow-2xl 
              ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-12">
            <span className="font-bold text-xs tracking-widest text-zinc-500 uppercase">
              Menu
            </span>
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
              href="#home"
              className="text-2xl font-bold tracking-tighter hover:text-light-primary transition-colors font-space"
              onClick={(e) => handleNavClick(e, "#home")}
            >
              Home
            </a>
            <a
              href="#services"
              className="text-2xl font-bold tracking-tighter hover:text-light-primary transition-colors font-space"
              onClick={(e) => handleNavClick(e, "#services")}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-2xl font-bold tracking-tighter hover:text-light-primary transition-colors font-space"
              onClick={(e) => handleNavClick(e, "#about")}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-2xl font-bold tracking-tighter hover:text-light-primary transition-colors font-space"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Contact
            </a>
          </nav>

          <div className="mt-auto pt-10 border-t border-white/10">
            <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest mb-4">
              Get in touch
            </p>
            <a href="mailto:contact@enov8technologies.com" className="block text-lg font-medium mb-1 hover:text-light-primary transition-colors">
              contact@enov8technologies.com
            </a>
            <p className="text-lg font-medium">+234 706 483 8988</p>
            
            <div className="mt-8 flex gap-4">
              {/* Simple icons placeholder if needed */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Navbar;
