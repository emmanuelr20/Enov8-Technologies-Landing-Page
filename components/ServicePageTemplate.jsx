"use client";

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Footer from "@/app/layouts/Footer";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";
import { servicesData } from "@/lib/servicesData";
import ConsultationModal from "@/components/ConsultationModal";
import {
  LuMonitorPlay,
  LuBoxes,
  LuUserPlus,
  LuShield,
  LuLayoutGrid,
  LuHandshake,
  LuChartBar,
  LuBrainCircuit,
  LuNetwork,
  LuLayers,
  LuFileText,
  LuHardDrive,
} from "react-icons/lu";

const iconMap = {
  "digital-signage": LuMonitorPlay,
  automation: LuBoxes,
  onboarding: LuUserPlus,
  security: LuShield,
  "software-dev": LuLayoutGrid,
  consulting: LuHandshake,
  "erp-deployment": LuChartBar,
  "ai-deployment": LuBrainCircuit,
  networking: LuNetwork,
  "zoho-partner": LuLayers,
  "document-management": LuFileText,
  "hardware-procurement": LuHardDrive,
};

const navItems = [
  { id: "digital-signage", label: "Digital Signage Solution" },
  { id: "automation", label: "Business Automation" },
  { id: "onboarding", label: "Customer Onboarding & ID Verification" },
  { id: "security", label: "Cyber Security" },
  { id: "software-dev", label: "Software Development" },
  { id: "consulting", label: "IT Consulting" },
  { id: "erp-deployment", label: "ERP Deployment" },
  { id: "ai-deployment", label: "AI Deployment" },
  { id: "networking", label: "Networking" },
  { id: "zoho-partner", label: "Zoho Implementations" },
  { id: "document-management", label: "Document Management System" },
  { id: "hardware-procurement", label: "Hardware Procurement" },
];

/**
 * ServicePageTemplate — shared shell (hero, sidebar, footer).
 * Pass the unique page content as `children`.
 */
export default function ServicePageTemplate({
  serviceId,
  partnerLogo,
  children,
}) {
  const service = servicesData[serviceId];
  const Icon = iconMap[serviceId];
  const serviceUrl = `https://enov8technologies.com/services/${serviceId}`;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    url: serviceUrl,
    image: `https://enov8technologies.com${service.heroImage}`,
    areaServed: "Global",
    provider: {
      "@type": "Organization",
      name: "Enov8 Technologies",
      url: "https://enov8technologies.com",
    },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://enov8technologies.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://enov8technologies.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: serviceUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      <Script id={`service-jsonld-${serviceId}`} type="application/ld+json">
        {JSON.stringify(serviceJsonLd)}
      </Script>
      <Script
        id={`service-breadcrumb-jsonld-${serviceId}`}
        type="application/ld+json"
      >
        {JSON.stringify(breadcrumbJsonLd)}
      </Script>
      {/* ── HERO BANNER ─────────────────────────────────────────────── */}
      <section className="relative h-[350px] md:h-[430px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1A1A37]/80" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
          {partnerLogo && (
            <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="p-4 bg-white shadow-xl relative h-16 md:h-20 w-44 md:w-56 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={partnerLogo}
                    alt="Partner Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 176px, 224px"
                  />
                </div>
              </div>
            </div>
          )}
          <h1 className="text-4xl md:text-6xl text-white mb-6 tracking-tight">
            {service.title}
          </h1>
          {/* Breadcrumb */}
          <nav
            aria-label="breadcrumb"
            className="inline-flex items-center gap-2 text-[#1A1A37] text-sm md:text-base font-medium bg-white px-6 py-2.5"
          >
            <Link
              href="/"
              className="hover:text-light-primary transition-colors"
            >
              Home
            </Link>
            <ChevronRight size={16} className="text-light-primary" />
            <Link
              href="/services"
              className="hover:text-light-primary transition-colors"
            >
              Services
            </Link>
            <ChevronRight size={16} className="text-light-primary" />
            <span className="">{service.title}</span>
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
                <h3 className="text-base tracking-[0.2em] uppercase">
                  Our Services
                </h3>
              </div>

              <ul className="pb-4">
                {navItems.map((item, index) => (
                  <li key={item.id}>
                    <Link
                      href={`/services/${item.id}`}
                      className={`flex items-center justify-between px-6 py-4 text-sm transition-all duration-200 ${
                        serviceId === item.id
                          ? "text-white"
                          : "text-white hover:text-[#1A1A37]"
                      }`}
                    >
                      <span className="leading-snug text-base font-medium">
                        {item.label}
                      </span>
                    </Link>
                    {index < navItems.length - 1 && (
                      <div className="mx-6 border-b border-white" />
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
              <h3 className="text-xl mb-3 leading-tight">
                Let's help you on your digital transformation journey
              </h3>
              <p className="text-white/60 mb-8">
                We Reinvent, You Thrive. Let's build something great together.
              </p>
              <div className="flex items-center gap-3 mb-6">
                <Phone size={18} className="text-light-primary shrink-0" />
                <p className="text-light-primary">
                  +234 913 363 2465
                </p>
              </div>
              <ConsultationModal
                trigger={
                  <button className="inline-flex items-center gap-2 bg-light-primary hover:bg-light-primary/90 text-white text-sm px-6 py-3 transition-all w-full justify-center cursor-pointer">
                    Start Consultation
                    <ArrowRight size={16} />
                  </button>
                }
              />
            </div>
          </aside>

          {/* ── PAGE-SPECIFIC CONTENT (passed via children) ──────────── */}
          <div className="space-y-14">{children}</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
