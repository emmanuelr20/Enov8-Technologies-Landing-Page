"use client"

import { SunMoon, MoonIcon } from "lucide-react";
import { Button } from "@/components/ui/button"
import { useState, useEffect, use } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const isDark = localStorage.getItem("theme") === "dark";
        setDark(isDark);
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;

        if(dark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark")
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light")
        }
    }, [dark]);

    return(
        <Button 
        variant={"ghost"} 
        size={"icon"} 
        aria-label="toggle theme"
        onClick={() => setDark(!dark)}
        >
            { dark ? <SunMoon size={24} className="w-5 h-5" /> : <MoonIcon size={24} className="w-5 h-5" /> }
        </Button>
    )
}