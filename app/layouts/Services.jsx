"use client";

import { useRef, useEffect } from "react";
import {
  Smartphone,
  Globe,
  Database,
  GraduationCap,
  Palette,
  Rocket,
  ArrowRight,
} from "lucide-react";
import {
  LuMonitorPlay,
  LuBoxes,
  LuUserPlus,
  LuShield,
  LuLayoutGrid,
  LuHandshake,
} from "react-icons/lu";
import dynamic from "next/dynamic";
import Link from "next/link";

const ScrollReveal = dynamic(() => import("scrollreveal"), { ssr: false });

const services = [
  {
    id: "digital-signage",
    icon: LuMonitorPlay, // Visual display icon
    title: "Digital Signage Solution",
    subtitle: "Real-time • Dynamic • Visual",
    description:
      "Manage and deploy dynamic visual content across your screens in real-time. We provide high-impact signage that transforms physical spaces.",
  },
  {
    id: "automation",
    icon: LuBoxes, // Matches the 'Cube/Process' icon from the image
    title: "Business Automation",
    subtitle: "Intelligent • Seamless • Efficient",
    description:
      "Eliminate repetitive manual tasks with intelligent, seamless workflows. We connect your platforms to boost operational efficiency.",
  },
  {
    id: "onboarding",
    icon: LuUserPlus, // Matches the 'User +' icon from the image
    title: "Customer Onboarding & ID Verification",
    subtitle: "KYC • Secure • Seamless",
    description:
      "Streamline the user journey with secure, friction-free verification. We integrate robust KYC and compliance protocols to build trust.",
  },
  {
    id: "security",
    icon: LuShield, // Matches the 'Shield' icon from the image
    title: "Security",
    subtitle: "Proactive • Enterprise • Protection",
    description:
      "Safeguard your digital infrastructure with proactive protection. From encryption to audits, we ensure your data stays secure.",
  },
  {
    id: "software-dev",
    icon: LuLayoutGrid, // Matches the '3x3 Grid' icon from the image
    title: "Software Development",
    subtitle: "Scalable • Custom • Performance",
    description:
      "Build scalable, custom digital products designed for performance. We deliver user-centric applications using modern tech stacks.",
  },
  {
    id: "consulting",
    icon: LuHandshake, // Matches the 'Handshake' icon from the image
    title: "IT Consulting",
    subtitle: "Strategy • Infrastructure • Growth",
    description:
      "Optimize your technical strategy with expert guidance. We provide the roadmaps and insights you need for long-term growth.",
  },
];

// Structured data
const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Enov8 Technologies Services",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.description,
      provider: { "@type": "Organization", name: "Enov8 Technologies" },
    },
  })),
};

export default function Services() {
  const titleRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sr = require("scrollreveal").default;

      if (headerRef.current) {
        sr().reveal(headerRef.current, {
          origin: "bottom",
          distance: "30px",
          duration: 500,
          easing: "ease-out",
          delay: 100,
          reset: false,
        });
      }

      cardsRef.current.forEach((ref, i) => {
        if (ref) {
          sr().reveal(ref, {
            origin: "bottom",
            distance: "40px",
            duration: 450,
            delay: i * 60,
            easing: "ease-out",
            reset: false,
          });
        }
      });
    }
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      <section
        aria-label="Enov8 Technologies Services"
        className="bg-gray-50 dark:bg-zinc-950 py-24 md:py-32 lg:py-40 px-4 sm:px-6 transition-colors duration-300"
        id="services"
      >
        <div className="max-w-7xl mx-auto">
          {/* ── HEADER ROW — 3 columns like TBO ─────────────────────────────── */}
          <div
            ref={headerRef}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_1.2fr_auto] gap-8 md:gap-8 items-start mb-20"
          >
            {/* Left: label + left-border title */}
            <div className="flex flex-col gap-3">
              <span className="text-light-primary text-sm uppercase tracking-wide font-medium">
                Our Services
              </span>
              <div className="flex gap-3 md:gap-4 items-start">
                <span className="w-1 min-h-20 bg-light-primary block shrink-0 mt-1" />
                <h2
                  ref={titleRef}
                  className="text-[#1A1A37] dark:text-white leading-tight max-w-sm"
                >
                  Amazing Services We Offer
                </h2>
              </div>
            </div>

            {/* Center: description */}
            <p className="dark:text-white/90 md:text-[20px] pt-1 md:pt-8 xl:-mt-7">
              We specialize in navigating organizational change and digital
              evolution. Our technology experts collaborate exclusively with
              clients to architect concrete, high-performance solutions designed
              for real-world impact.
            </p>

            {/* Right: CTA button */}
            <div className="flex items-start md:pt-8 font-medium">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-light-primary hover:bg-light-primary/90 text-white text-sm px-6 py-5 shadow-lg whitespace-nowrap"
              >
                See All Services
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* ── SERVICE CARDS GRID ───────────────────────────────────────────── */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-24 mt-8 md:mt-25">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  ref={(el) => (cardsRef.current[i] = el)}
                  className="relative flex flex-col bg-white dark:bg-zinc-900 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_15px_50px_-15px_rgba(0,0,0,0.5)] p-8 pt-16 min-h-[300px] md:h-[350px] w-full md:max-w-[400px] md:mx-auto transition-colors duration-300"
                >
                  {/* Centered Icon box — Overlapping top border */}
                  <div className="absolute top-0 left-14 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 md:w-18 md:h-18 bg-light-primary flex items-center justify-center shadow-lg">
                      <Icon
                        className="text-white w-7 h-7 md:w-8 md:h-8"
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 items-start">
                    {/* Title */}
                    <h3 className="text-[22px] text-[#1A1A37] dark:text-white mb-4 leading-tight min-h-12 flex items-center">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="dark:text-white/90 mb-8 md:text-[20px]">
                      {service.description}
                    </p>

                    <Link
                      href={`/services/${service.id}`}
                      className="group/link inline-flex items-center gap-2 text-light-primary text-sm transition-colors hover:text-light-primary/80 mt-auto"
                    >
                      <div className="w-5 h-5 rounded-full border border-light-primary flex items-center justify-center group-hover/link:bg-light-primary group-hover/link:text-white transition-all">
                        <ArrowRight size={12} />
                      </div>
                      <span className="underline-offset-4 hover:underline">
                        Read More
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
