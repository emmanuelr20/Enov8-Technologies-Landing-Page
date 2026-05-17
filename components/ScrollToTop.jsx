"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top scroll behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={`fixed bottom-8 left-8 z-40 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="group relative flex h-12 w-12 items-center justify-center overflow-hidden bg-light-primary text-white shadow-lg"
      >
        <ArrowUp className="h-6 w-6" />
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
      </button>
    </div>
  );
}
