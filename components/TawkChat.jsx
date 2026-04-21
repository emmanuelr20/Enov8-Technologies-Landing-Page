"use client";

import { useEffect } from "react";

export default function TawkChat() {
  useEffect(() => {
    // Ensure we only run on client
    if (typeof window === "undefined") return;

    // Suppress Tawk.to's internal console.error(true) noise in dev
    const originalError = console.error.bind(console);
    console.error = (...args) => {
      if (args.length === 1 && args[0] === true) return;
      originalError(...args);
    };

    // Tawk.to script initialization
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    
    s1.async = true;
    s1.src = "https://embed.tawk.to/69e36fb0917d361c322fb3e3/1jmg6oj53";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.head.appendChild(s1);
    }

    // Cleanup: restore console.error and suppress duplicate script loads on HMR
    return () => {
      console.error = originalError;
    };
  }, []);

  return null;
}