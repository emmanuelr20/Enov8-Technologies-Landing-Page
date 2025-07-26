"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
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

  const toggleDropdown = () => {
    setIsDropdown((prev) => !prev);
  };

  return (
    <header
      className={`z-50 w-full transition-all duration-300 shadow-md
        ${
          isSticky
            ? "fixed top-0 bg-white shadow-md slide-in dark:bg-black"
            : "relative bg-transparent"
        }`}
    >
      <nav className="container mx-auto py-6 px-3.5 flex justify-between items-center">
        <a
          href="#home"
          className="capitalize text-2xl font-bold text-light-primary dark:text-white"
          style={{ fontFamily: "var(--font-space)" }}
          onClick={(e) => handleNavClick(e, "#home")}
        >
          enov8 technologies
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6 text-base uppercase font-medium dark:text-white">
          <li>
            <a 
            href="#services" 
            className="block"
            onClick={(e) => handleNavClick(e, "#services")}>
              our services
            </a>
          </li>
          <li>
            <a 
            href="#about" 
            className="block"
            onClick={(e) => handleNavClick(e, "#about")}>
              about us
            </a>
          </li>
          <li>
            <a 
            href="#contact"
            className="block"
            onClick={(e) => handleNavClick(e, "#contact")}>
              contact us
            </a>
          </li>
        </ul>

        <div className="hidden lg:flex items-center gap-2">
          <Button
            variant="background"
            size="lg"
            className="font-black text-base"
          >
            <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}>
              Start a Project
            </a>
          </Button>
          <ThemeToggle />
        </div>

        {/* Hamburger */}
        <button className="lg:hidden dark:text-white" onClick={toggleMenu}>
          {isOpen ? "" : <Menu size={30} />}
        </button>

        {/* overlay */}
        <div
          className={`fixed left-0 top-0 h-screen inset-0 w-full bg-black/90 
          transition-transform duration-500 z-40 ease-in-out
          ${
            isOpen
            ? "translate-x-0"
            : "translate-x-full duration-1000"
          }`}
          onClick={toggleMenu}
        ></div>

        {/* Mobile Nav */}
        <div
          className={`fixed top-0 right-0 h-screen bg-[#161616] w-80 text-white z-50 
                transform transition-transform duration-500 ease-in-out shadow-2xl 
                ${isOpen ? "translate-x-0 duration-1000" : "translate-x-full"}`}
        >
          <div className="flex flex-col space-y-4 p-6">
            <div className="flex justify-between mb-4" onClick={toggleMenu}>
              <ThemeToggle />
              <X size={30} />
            </div>

            <a 
            href="#services" 
            className="font-bold text-lg capitalize"
            onClick={(e) => handleNavClick(e, "#services")}>
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
            onClick={(e) => handleNavClick(e, "#contact")}>
              contact us
            </a>

            <hr className="my-4 border-gray-600" />
          </div>
        </div>
      </nav>
    </header>
  );
}
