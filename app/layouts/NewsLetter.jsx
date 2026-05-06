"use client";

import { useState } from "react";
import Image from "next/image";

const SUBSCRIBE_WEBHOOK =
  "https://your-n8n-instance.com/webhook/newsletter-subscribe";
const UNSUBSCRIBE_WEBHOOK =
  "https://your-n8n-instance.com/webhook/newsletter-unsubscribe";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

async function postToWebhook(url, payload) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Webhook responded with ${res.status}`);
  return res;
}

export default function Newsletter() {
  const [mode, setMode] = useState("subscribe");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const webhook =
        mode === "subscribe" ? SUBSCRIBE_WEBHOOK : UNSUBSCRIBE_WEBHOOK;
      await postToWebhook(webhook, {
        email,
        action: mode,
        timestamp: new Date().toISOString(),
        source: "website-newsletter",
      });

      setStatus("success");
      setMessage(
        mode === "subscribe"
          ? "You're in! Expect insights from us soon."
          : "You've been unsubscribed. We'll miss you.",
      );
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again shortly.");
    }
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setStatus("idle");
    setMessage("");
    setEmail("");
  };

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* ── Background image ── */}
      <Image
        src="/sections/newsletter-bg.webp"
        alt="Enov8 Technologies newsletter background"
        fill
        sizes="100vw"
        priority
        quality={100}
        className="object-cover z-0"
      />

      {/* ── Dark gradient overlay ── */}
      <div className="absolute inset-0 bg-black/75 z-10" />

      {/* ── Content ── */}
      <div className="relative z-20 w-full max-w-2xl mx-auto px-6 py-20 md:py-24 text-center">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl text-white leading-tight tracking-tight mb-4">
          Technology Insights, <span className="inline-block">Delivered.</span>
        </h2>

        {/* Subtext */}
        <p className="text-white/90! mb-10 max-w-lg mx-auto">
          Get expert articles on digital transformation, enterprise tech, and
          industry trends — straight to your inbox. No spam, ever.
        </p>

        {/* ── Mode toggle ── */}
        <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-full p-1 mb-8 border border-white/15 font-medium">
          {["subscribe", "unsubscribe"].map((m) => (
            <button
              key={m}
              onClick={() => switchMode(m)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 capitalize ${
                mode === m
                  ? "bg-[#0070f3] text-white shadow-lg shadow-blue-500/30"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* ── Form ── */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          noValidate
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") {
                setStatus("idle");
                setMessage("");
              }
            }}
            placeholder="Enter your email address"
            disabled={status === "loading" || status === "success"}
            className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#0070f3] focus:bg-white/15 transition-all duration-200 disabled:opacity-50"
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success" || !email}
            className="px-6 py-3.5 rounded-xl text-sm text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap font-medium"
            style={{
              background:
                mode === "subscribe"
                  ? "linear-gradient(135deg, #0070f3, #0057C2)"
                  : "linear-gradient(135deg, #6b7280, #4b5563)",
              boxShadow:
                mode === "subscribe"
                  ? "0 4px 20px rgba(0,112,243,0.4)"
                  : "0 4px 20px rgba(107,114,128,0.3)",
            }}
          >
            {status === "loading" ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                {mode === "subscribe" ? "Subscribing…" : "Removing…"}
              </span>
            ) : mode === "subscribe" ? (
              "Subscribe"
            ) : (
              "Unsubscribe"
            )}
          </button>
        </form>

        {/* ── Status message ── */}
        {message && (
          <div
            className={`mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition-all duration-300 ${
              status === "success"
                ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-300"
                : "bg-red-500/15 border border-red-500/30 text-red-300"
            }`}
          >
            {status === "success" ? (
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
            {message}
          </div>
        )}

        {/* Privacy note */}
        <p className="mt-6 text-white/90!">
          By subscribing you agree to our{" "}
          <a
            href="/privacy-policy"
            className="text-gray-400 underline underline-offset-2 hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          . Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
