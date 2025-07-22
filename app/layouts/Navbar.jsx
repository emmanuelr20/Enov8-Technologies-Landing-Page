"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setTimeout(() => setIsOpen(false), 100);
    }

    return (
        <header className={`z-50 w-full transition-all duration-300 shadow-md
        ${isSticky
                ? "fixed top-0 bg-white shadow-md slide-in"
                : "relative bg-transparent"}`}>
            <nav className="container mx-auto py-6 px-3.5 flex justify-between items-center">
                <Link
                    href="/"
                    className="capitalize text-2xl font-bold text-light-primary"
                    style={{ fontFamily: "var(--font-space)" }}
                >
                    enov8 technologies
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex items-center gap-6 text-base uppercase">
                    <li>
                        <Link
                            href={"/"}
                            className="hover:text-gray-500 transition-all duration-150 ease-linear"
                        >
                            our services
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/"}
                            className="hover:text-gray-500 transition-all duration-150 ease-linear"
                        >
                            our works
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/"}
                            className="hover:text-gray-500 transition-all duration-150 ease-linear"
                        >
                            academy
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/"}
                            className="hover:text-gray-500 transition-all duration-150 ease-linear"
                        >
                            contact us
                        </Link>
                    </li>
                    <Button
                        variant="background"
                        size="lg"
                        className="font-black text-base"
                    >Start a Project</Button>
                </ul>

                {/* Hamburger */}
                <button className="lg:hidden" onClick={toggleMenu}>
                    {isOpen ? "" : <Menu size={30} />}
                </button>

                {/* overlay */}
                <div 
                    className={`fixed left-0 top-0 h-screen inset-0 w-full bg-black/90 
                    transition-transform duration-500 z-40 pointer-events-none ease-in-out
                    ${isOpen ? 'translate-x-0' : 'translate-x-full duration-1000'}`}
                    onClick={toggleMenu}>
                </div>

                {/* Mobile Nav */}
                <div className={`fixed top-0 right-0 h-screen bg-[#161616] w-80 text-white z-50 
                transform transition-transform duration-500 ease-in-out shadow-2xl 
                ${isOpen ? "translate-x-0 duration-1000" : "translate-x-full"}`}
                >
                    <div className="flex flex-col space-y-4 p-6">
                        <button className="self-end mb-4" onClick={toggleMenu}>
                            <X size={30} />
                        </button>

                        <a href="/">our services</a>
                        <a href="/">our works</a>
                        <a href="/">academy</a>
                        <a href="/">contact us</a>

                        <hr className="my-4 border-gray-600" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

