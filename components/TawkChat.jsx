"use client";

import { useEffect } from "react";

export default function TawkChat() {
  useEffect(() => {
    // Ensure we only run on client
    if (typeof window === "undefined") return;

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

    // Cleanup function to avoid multiple instances in dev HMR
    return () => {
      if (window.Tawk_API && typeof window.Tawk_API.hideWidget === "function") {
        try {
          // Some widgets have a destroy or hide method
          // Tawk.to doesn't have a reliable 'destroy' so we just let it be
        } catch (e) {}
      }
    };
  }, []);

  return null;
}
