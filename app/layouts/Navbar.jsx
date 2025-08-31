"use client";

import { useState, useEffect, memo } from "react";
import { Menu, X } from "lucide-react";
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
    }
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
    <header
      className={`z-50 w-full transition-transform duration-300 h-22 fixed top-0 bg-white dark:bg-black
        ${isSticky ? "shadow-md" : ""}`}
    >
      <nav className="container mx-auto py-6 px-3.5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <a
            ref={(el) => (elementsRef.current[0] = el)}
            href="#home"
            className="flex items-center gap-2"
            onClick={(e) => handleNavClick(e, "#home")}
            aria-label="Enov8 Technologies Home"
          >
            <div className="relative w-10 h-10 -mt-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 300 301"
                className="w-full h-full"
                aria-hidden="true"
              >
                <g transform="translate(0.000000,301.000000) scale(0.100000,-0.100000)">
                  <path
                    d="M682 2446 c2 -8 84 -136 183 -285 l180 -271 639 0 c547 0 637 2 633 14 -3 8 -87 136 -186 285 l-181 271 -636 0 c-537 0 -635 -2 -632 -14z"
                    className="fill-[#007bff] dark:fill-white transition-colors duration-200"
                  />
                  <path
                    d="M462 938 l3 -693 929 -3 c800 -2 927 0 923 12 -3 8 -87 136 -186 285 l-181 271 -460 0 -460 0 0 130 0 130 375 0 375 0 -188 280 -187 280 -473 0 -472 0 2 -692z"
                    className="fill-[#007bff] dark:fill-white transition-colors duration-200"
                  />
                </g>
              </svg>
            </div>
            <span
              className="capitalize text-xl font-bold text-[#23252d] dark:text-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-space)" }}
            >
              enov8 technologies
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <ul
          ref={(el) => (elementsRef.current[1] = el)}
          className="hidden lg:flex items-center gap-6 text-base uppercase font-medium dark:text-white"
        >
          <li>
            <a
              href="#services"
              className="block"
              onClick={(e) => handleNavClick(e, "#services")}
            >
              our services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block"
              onClick={(e) => handleNavClick(e, "#about")}
            >
              about us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              contact us
            </a>
          </li>
        </ul>

        <div
          ref={(el) => (elementsRef.current[2] = el)}
          className="hidden lg:flex items-center gap-2"
        >
          <Button
            variant="background"
            size="lg"
            className="font-black text-base"
          >
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
              Start a Project
            </a>
          </Button>
          <ThemeToggle />
        </div>

        {/* Hamburger */}
        <button
          ref={(el) => (elementsRef.current[3] = el)}
          aria-label="Toggle navigation menu"
          className="lg:hidden dark:text-white"
          onClick={toggleMenu}
        >
          {isOpen ? "" : <Menu size={30} />}
        </button>

        {/* overlay */}
        <div
          className={`fixed left-0 top-0 h-screen inset-0 w-full bg-black/90 
          transition-all duration-300 z-40 ease-out
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
          onClick={toggleMenu}
        ></div>

        {/* Mobile Nav */}
        <div
          className={`fixed top-0 right-0 h-screen bg-[#161616] w-80 text-white z-50 
                transform transition-transform duration-300 ease-out shadow-2xl 
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col space-y-4 p-6">
            <div className="flex justify-between mb-4" onClick={toggleMenu}>
              <ThemeToggle />
              <X size={30} />
            </div>

            <a
              href="#services"
              className="font-bold text-lg capitalize"
              onClick={(e) => handleNavClick(e, "#services")}
            >
              our services
            </a>

            <a
              href="#about"
              className="font-bold text-lg capitalize"
              onClick={(e) => handleNavClick(e, "#about")}
            >
              about us
            </a>

            <a
              href="#contact"
              className="font-bold text-lg capitalize"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              contact us
            </a>

            <hr className="my-4 border-gray-600" />
          </div>
        </div>
      </nav>
    </header>
  );
});

export default Navbar;
