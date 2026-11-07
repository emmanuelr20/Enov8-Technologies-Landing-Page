"use client";

import { Moon, Sun } from "lucide-react";

// Icons swap purely with CSS (`dark:` variants), so the server HTML is always
// correct and there is no hydration flash.
export default function ThemeToggle({ className = "" }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    const apply = () => {
      root.classList.toggle("dark", next === "dark");
      root.style.colorScheme = next;
    };
    try {
      localStorage.setItem("theme", next);
    } catch {}
    // Animated cross-fade where the View Transitions API exists.
    if (document.startViewTransition && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.startViewTransition(apply);
    } else {
      apply();
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={`relative grid size-10 place-items-center rounded-full text-fg/80 transition-colors hover:bg-white/10 hover:text-fg ${className}`}
    >
      <Sun className="size-[18px] scale-0 rotate-90 transition-transform duration-500 ease-out-expo dark:scale-100 dark:rotate-0" />
      <Moon className="absolute size-[18px] scale-100 transition-transform duration-500 ease-out-expo dark:scale-0 dark:-rotate-90" />
    </button>
  );
}
