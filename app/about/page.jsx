import Image from "next/image";
import { CheckCircle2, Globe, Lightbulb, Handshake, Award } from "lucide-react";
import Footer from "@/app/layouts/Footer";

export const metadata = {
  title: "Who We Are | Enov8 Technologies",
  description:
    "Learn about Enov8 Technologies, our vision, mission, and the core values that drive our commitment to delivering world-class digital solutions.",
};

const stats = [
  { value: "5+", label: "Service Verticals Delivered" },
  { value: "50+", label: "Projects Planned & Deployed" },
  { value: "3", label: "Showcase Portfolio Projects" },
  { value: "24/7", label: "Post-Deployment Support" },
  { value: "6", label: "Technology Partners" },
];

const values = [
  {
    title: "Innovation First",
    icon: <Lightbulb className="w-8 h-8 text-light-primary" />,
    description:
      "We constantly explore new technologies to provide forward-thinking solutions that keep our clients ahead of the curve.",
  },
  {
    title: "Quality-Driven Delivery",
    icon: <Award className="w-8 h-8 text-light-primary" />,
    description:
      "Excellence is our baseline. We maintain an uncompromising standard of quality in every line of code and piece of hardware.",
  },
  {
    title: "Client Partnership",
    icon: <Handshake className="w-8 h-8 text-light-primary" />,
    description:
      "We align our goals with yours. Your success is our core metric, and we build long-term relationships based on trust.",
  },
  {
    title: "Excellence",
    icon: <Globe className="w-8 h-8 text-light-primary" />,
    description:
      "Building world-class digital solutions that are accessible, scalable, and built for the future of the continent's digital economy.",
  },
];

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
        {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
        <div className="relative bg-[#09090b] overflow-hidden py-24 md:py-32">
          <div className="absolute inset-0 z-0">
            <Image
              src="/sections/servicebackground.webp"
              alt="Enov8 Team"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-[#1A1A37]/80" />
          </div>

          <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-light-primary/10 border border-light-primary/20 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-light-primary animate-pulse" />
              <span className="text-light-primary text-xs  uppercase">
                Company Overview
              </span>
            </div>
            <h1 className="text-white tracking-tighter mb-8">
              Who We Are
            </h1>
            <p className="max-w-3xl mx-auto text-white/95!">
              Enov8 Technologies Ltd. is a Nigerian-based technology company
              delivering end-to-end digital solutions. We are a forward-thinking
              team united by one purpose: turning complex technology challenges
              into competitive advantages for our clients.
            </p>
          </div>
        </div>

        {/* ── STORY & STATS SECTION ───────────────────────────────────────── */}
        <section className="py-20 md:py-32 container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <h2 className="text-[#1A1A37] dark:text-white tracking-tight">
                Built to Last.{" "}
                <span className="text-light-primary">Designed to Grow.</span>
              </h2>
              <div className="space-y-6 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                <p>
                  Founded on principles of quality, innovation, and client
                  partnership, Enov8 Technologies serves clients across fintech,
                  education, e-commerce, healthcare, transport, and the public
                  sector.
                </p>
                <p>
                  From a startup's first digital product to an enterprise's
                  cloud migration, we deliver technology across software
                  development, managed IT services, hardware procurement, cloud
                  infrastructure, and licensing.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-6 text-sm  uppercase text-light-primary">
                <span>Quality-Driven</span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span>Client-Centric</span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span>Innovation-Led</span>
              </div>
            </div>

            {/* Right: Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-8 hover:border-light-primary/30 transition-colors"
                >
                  <h3 className="text-[#1A1A37] dark:text-white mb-3 group-hover:text-light-primary transition-colors">
                    {stat.value}
                  </h3>
                  <p className="uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VISION & MISSION ────────────────────────────────────────────── */}
        <section className="bg-zinc-50 dark:bg-zinc-900 py-20 md:py-32">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              {/* Vision */}
              <div className="bg-white dark:bg-zinc-950 p-10 lg:p-14 border-t-4 border-light-primary shadow-xl">
                <div className="w-16 h-16 bg-light-primary/10 rounded-full flex items-center justify-center mb-8">
                  <span className="text-2xl text-light-primary">V</span>
                </div>
                <h3 className="text-[#1A1A37] dark:text-white mb-6">
                  Our Vision
                </h3>
                <p className="dark: mb-10">
                  To be the most trusted technology partner for businesses
                  across Africa, delivering world-class digital solutions that
                  are accessible, scalable, and built for the future of the
                  continent's digital economy.
                </p>

                <div className="border-l-4 border-light-primary pl-6 py-2">
                  <p className="italic dark:">
                    "The technology your organisation needs to compete globally
                    should not require a global budget. We are here to close
                    that gap."
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="bg-white dark:bg-zinc-950 p-10 lg:p-14 border-t-4 border-zinc-800 dark:border-white shadow-xl">
                <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-8">
                  <span className="text-2xl text-[#1A1A37] dark:text-white">
                    M
                  </span>
                </div>
                <h3 className="text-[#1A1A37] dark:text-white mb-6">
                  Our Mission
                </h3>
                <p className="dark:">
                  To empower businesses and institutions with innovative,
                  reliable, and tailored technology solutions, spanning software
                  development, managed services, hardware infrastructure, and
                  cloud platforms – enabling them to operate efficiently, scale
                  confidently, and compete without limits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CORE VALUES ─────────────────────────────────────────────────── */}
        <section className="py-20 md:py-32 container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[#1A1A37] dark:text-white tracking-tight mb-6">
              Our Core Values
            </h2>
            <p className="dark:">
              The foundational principles that guide our decisions, shape our
              culture, and define how we partner with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="group p-8 border border-zinc-100 dark:border-zinc-800 hover:border-light-primary/30 bg-white dark:bg-zinc-950"
              >
                <div className="w-16 h-16 bg-zinc-50 dark:bg-zinc-900 rounded-2xl flex items-center justify-center mb-8">
                  {value.icon}
                </div>
                <h4 className="text-[#1A1A37] dark:text-white mb-4">
                  {value.title}
                </h4>
                <p className="dark:">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
