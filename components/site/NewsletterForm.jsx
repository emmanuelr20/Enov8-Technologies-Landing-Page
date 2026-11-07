"use client";

import { useState } from "react";
import { ArrowRight, Check, LoaderCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function NewsletterForm() {
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email");
    setStatus("loading");
    try {
      const res = await fetch(site.newsletterSubscribeWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          action: "subscribe",
          timestamp: new Date().toISOString(),
          source: "website-newsletter",
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <label htmlFor="nl-email" className="sr-only">
        Email address
      </label>
      <div className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] p-1.5 pl-5 transition-colors focus-within:border-brand">
        <input
          id="nl-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className="min-w-0 flex-1 bg-transparent text-fg outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          aria-label="Subscribe"
          className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-bright text-white transition-transform hover:scale-105 disabled:opacity-60"
        >
          {status === "loading" ? (
            <LoaderCircle className="size-5 animate-spin" />
          ) : status === "success" ? (
            <Check className="size-5" />
          ) : (
            <ArrowRight className="size-5" />
          )}
        </button>
      </div>
      <p role="status" aria-live="polite" className="mt-3 min-h-5 text-sm text-muted">
        {status === "success" && "You're in! Expect insights from us soon."}
        {status === "error" && "Something went wrong. Please try again shortly."}
      </p>
    </form>
  );
}
