"use client";

import { useState } from "react";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";
import { contact, site } from "@/lib/site";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("loading");
    try {
      const res = await fetch(site.contactWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <div className="field">
          <input id="cf-name" name="name" type="text" required autoComplete="name" placeholder=" " />
          <label htmlFor="cf-name">Full name</label>
          <span className="bar" />
        </div>
        <div className="field">
          <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder=" " />
          <label htmlFor="cf-email">Email address</label>
          <span className="bar" />
        </div>
      </div>
      <div className="field">
        <textarea id="cf-message" name="message" rows={4} required placeholder=" " />
        <label htmlFor="cf-message">Tell us about your project</label>
        <span className="bar" />
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <button
          type="submit"
          disabled={status === "loading"}
          data-magnetic
          className="btn btn-primary disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : status === "success" ? "Message sent" : "Send message"}
          <span className="btn-icon">
            {status === "loading" ? (
              <LoaderCircle className="animate-spin" />
            ) : status === "success" ? (
              <Check />
            ) : (
              <ArrowUpRight />
            )}
          </span>
        </button>
        <p role="status" aria-live="polite" className="text-sm text-muted">
          {status === "success" && "Thanks! We'll get back to you shortly."}
          {status === "error" && (
            <span className="text-red-400">
              Something went wrong. Please email{" "}
              <a className="underline" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              .
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
