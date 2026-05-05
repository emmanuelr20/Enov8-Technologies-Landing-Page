"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { X, Cookie } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <section
      className="fixed inset-x-0 bottom-0 z-[200] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:bottom-6 md:left-6 md:right-auto md:w-full md:max-w-md md:p-0 md:pb-0 pointer-events-none"
      aria-label="Cookie consent"
    >
      <div className="pointer-events-auto w-full min-w-0 max-w-md bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 shadow-2xl p-4 sm:p-6 rounded-none relative">
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white transition-colors p-1"
          aria-label="Dismiss cookie notice"
        >
          <X size={18} />
        </button>

        <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6 pr-8 min-w-0">
          <div className="bg-light-primary/10 p-2.5 sm:p-3 rounded-none shrink-0">
            <Cookie className="text-light-primary" size={24} />
          </div>
          <div className="min-w-0">
            <h3 className=" text-base sm:text-base mb-1 text-zinc-900 dark:text-white uppercase tracking-tight">
              Cookie Consent
            </h3>
            <p className=" dark:">
              We use cookies to enhance your browsing experience, serve
              personalized ads or content, and analyze our traffic. By clicking
              "Accept All", you consent to our use of cookies.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={handleDecline}
            className="flex-1 min-h-11 rounded-none uppercase text-[11px]  border-zinc-300 text-zinc-900 bg-zinc-50/80 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-100 dark:border-zinc-500 dark:bg-zinc-800/60 dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            Decline
          </Button>
          <Button
            type="button"
            onClick={handleAccept}
            className="flex-1 min-h-11 rounded-none bg-light-primary hover:bg-light-primary/90 text-white uppercase text-[11px]  shadow-lg shadow-light-primary/20"
          >
            Accept All
          </Button>
        </div>
      </div>
    </section>
  );
}
