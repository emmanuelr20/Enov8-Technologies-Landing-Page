"use client";

import { useEffect } from "react";

/**
 * TawkChat component for integrating Tawk.to live chat.
 * This version uses the official floating bubble widget script provided by the user.
 */
export default function TawkChat() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Suppress Tawk.to's internal console.error(true) noise and i18next errors
    const originalError = console.error.bind(console);
    console.error = (...args) => {
      if (args.length > 0 && (args[0] === true || (typeof args[0] === 'string' && args[0].includes('i18next')))) return;
      originalError(...args);
    };

    // Tawk.to script initialization
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    
    s1.async = true;
    s1.src = 'https://embed.tawk.to/69e36fb0917d361c322fb3e3/1jmg6oj53';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.head.appendChild(s1);
    }

    return () => {
      console.error = originalError;
    };
  }, []);

  return null;
}