"use client";

import Link from "next/link";
import Footer from "@/app/layouts/Footer";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";
import { servicesData } from "@/lib/servicesData";
import { 
  LuMonitorPlay, 
  LuBoxes, 
  LuUserPlus, 
  LuShield, 
  LuLayoutGrid, 
  LuHandshake 
} from "react-icons/lu";

const iconMap = {
  "digital-signage": LuMonitorPlay,
  "automation": LuBoxes,
  "onboarding": LuUserPlus,
  "security": LuShield,
  "software-dev": LuLayoutGrid,
  "consulting": LuHandshake,
};

const navItems = [
  { id: "digital-signage", label: "Digital Signage Solution" },
  { id: "automation",      label: "Business Automation" },
  { id: "onboarding",      label: "Customer Onboarding & ID Verification" },
  { id: "security",        label: "Security" },
  { id: "software-dev",    label: "Software Development" },
  { id: "consulting",      label: "Consulting" },
];

/**
 * ServicePageTemplate — shared shell (hero, sidebar, footer).
 * Pass the unique page content as `children`.
 */
export default function ServicePageTemplate({ serviceId, children }) {
  const service = servicesData[serviceId];
  const Icon = iconMap[serviceId];

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* ── HERO BANNER ─────────────────────────────────────────────── */}
      <section className="relative h-[350px] md:h-[430px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage || "/workflowImage.jpg"}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A1A37]/80" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white font-space mb-6 uppercase tracking-tight">
            {service.title}
          </h1>
          {/* Breadcrumb */}
          <nav
            aria-label="breadcrumb"
            className="inline-flex items-center gap-2 text-[#1A1A37] font-poppins text-sm md:text-base bg-white px-6 py-2.5"
          >
            <Link href="/" className="hover:text-light-primary font-bold transition-colors">
              Home
            </Link>
            <ChevronRight size={16} className="text-light-primary"/>
            <Link href="/#services" className="hover:text-light-primary font-bold transition-colors">
              Services
            </Link>
            <ChevronRight size={16} className="text-light-primary" />
            <span className="font-bold">{service.title}</span>
          </nav>
        </div>
      </section>

      {/* ── MAIN LAYOUT ─────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-14">

          {/* ── SIDEBAR ──────────────────────────────────────────────── */}
          <aside className="space-y-10">
            {/* Services Nav — TBO style */}
            <div className="bg-light-primary shadow-2xl overflow-hidden">
              <div className="my-6 mx-10 py-4 px-5 text-center bg-white text-light-primary">
                <h3 className="text-sm font-bold font-space tracking-[0.2em] uppercase">
                  Our Services
                </h3>
              </div>

              <ul className="pb-4">
                {navItems.map((item, index) => (
                  <li key={item.id}>
                    <Link
                      href={`/services/${item.id}`}
                      className={`flex items-center justify-between px-6 py-4 font-poppins text-sm font-semibold transition-all duration-200 ${
                        serviceId === item.id
                          ? "text-white bg-white/15"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      <span className="leading-snug">{item.label}</span>
                    </Link>
                    {index < navItems.length - 1 && (
                      <div className="mx-6 border-b border-white/20" />
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <div className="relative overflow-hidden bg-[#1A1A37] p-8 shadow-2xl text-white">
              {Icon && (
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Icon size={110} />
                </div>
              )}
              <h3 className="text-xl font-bold font-space mb-3 leading-tight">
                Let's help you on your digital transformation journey
              </h3>
              <p className="text-white/60 font-poppins text-sm mb-8">
                We Reinvent, You Thrive. Let's build something great together.
              </p>
              <div className="flex items-center gap-3 mb-6">
                <Phone size={18} className="text-light-primary shrink-0" />
                <p className="text-light-primary font-bold font-space text-base">+234 706 483 8988</p>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-light-primary hover:bg-light-primary/90 text-white font-bold text-sm px-6 py-3 transition-all w-full justify-center"
              >
                Start Consultation
                <ArrowRight size={16} />
              </Link>
            </div>
          </aside>

          {/* ── PAGE-SPECIFIC CONTENT (passed via children) ──────────── */}
          <div className="space-y-14">
            {children}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
