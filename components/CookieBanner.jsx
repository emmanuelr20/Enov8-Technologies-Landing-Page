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
      className="pointer-events-none fixed inset-x-0 bottom-0 z-200 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-5 md:bottom-6 md:left-6 md:right-auto md:w-full md:max-w-md md:p-0 md:pb-0"
      aria-label="Cookie consent"
    >
      <div className="pointer-events-auto relative w-full min-w-0 max-w-md rounded-2xl border border-border bg-surface p-5 shadow-xl sm:p-6">
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="focus-ring absolute right-3 top-3 inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:right-4 sm:top-4"
          aria-label="Dismiss cookie notice"
        >
          <X size={18} />
        </button>

        <div className="mb-6 flex min-w-0 items-start gap-4 pr-10">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand sm:h-12 sm:w-12">
            <Cookie className="text-brand" size={24} />
          </div>
          <div className="min-w-0">
            <h3 className="type-h4 mb-1 text-foreground">
              Cookie Consent
            </h3>
            <p className="type-small text-muted-foreground">
              We use cookies to enhance your browsing experience, serve
              personalized ads or content, and analyze our traffic. By clicking
              "Accept All", you consent to our use of cookies.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            type="button"
            variant="outline"
            onClick={handleDecline}
            className="min-h-11 flex-1 rounded-md"
          >
            Decline
          </Button>
          <Button
            type="button"
            onClick={handleAccept}
            className="min-h-11 flex-1 rounded-md"
          >
            Accept All
          </Button>
        </div>
      </div>
    </section>
  );
}
