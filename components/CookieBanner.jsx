"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let consent = null;
    try {
      consent = localStorage.getItem("cookie-consent");
    } catch {}
    if (consent) return;
    const t = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(t);
  }, []);

  const decide = (value) => {
    try {
      localStorage.setItem("cookie-consent", value);
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <section
      aria-label="Cookie consent"
      className="ink slide-in fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-md rounded-3xl border border-white/10 !bg-[rgb(10_12_18/0.92)] p-5 shadow-2xl backdrop-blur-xl sm:inset-x-auto sm:left-5 sm:bottom-5"
    >
      <div className="flex gap-4">
        <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-brand/15 text-brand">
          <Cookie className="size-5" />
        </span>
        <p className="text-sm text-fg-2">
          We use cookies to improve your experience and analyse traffic. See our{" "}
          <Link href="/privacy-policy" className="text-fg underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => decide("declined")}
          className="h-10 flex-1 rounded-full border border-white/15 text-sm text-fg-2 transition-colors hover:bg-white/5 hover:text-fg"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => decide("accepted")}
          className="h-10 flex-1 rounded-full bg-brand-bright text-sm font-medium text-white transition-transform hover:scale-[1.02]"
        >
          Accept all
        </button>
      </div>
    </section>
  );
}
