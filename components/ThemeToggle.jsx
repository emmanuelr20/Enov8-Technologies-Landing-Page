"use client";

import { SunMoon, MoonIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  // 1. Check system and saved preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDark(true);
    } else if (savedTheme === "light") {
      setDark(false);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefersDark);
    }

    setMounted(true); // avoid SSR mismatch
  }, []);

  // 2. Apply theme to document root and save to localStorage
  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark, mounted]);

  // 3. Avoid rendering until mounted (prevents flicker)
  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="toggle theme"
      onClick={() => setDark(prev => !prev)}
    >
      {dark ? (
        <SunMoon size={24} className="w-5 h-5" />
      ) : (
        <MoonIcon size={24} className="w-5 h-5" />
      )}
    </Button>
  );
}
