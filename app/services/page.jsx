import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
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
import Image from "next/image";
import Footer from "@/app/layouts/Footer";
import { buildServicesIndexMetadata } from "@/lib/seoMetadata";

const allServices = [
  {
    id: "digital-signage",
    icon: LuMonitorPlay,
    title: "Digital Signage Solution",
    description:
      "Manage and deploy dynamic visual content across your screens in real-time. We provide high-impact signage that transforms physical spaces.",
  },
  {
    id: "automation",
    icon: LuBoxes,
    title: "Business Automation",
    description:
      "Eliminate repetitive manual tasks with intelligent, seamless workflows. We connect your platforms to boost operational efficiency.",
  },
  {
    id: "onboarding",
    icon: LuUserPlus,
    title: "Customer Onboarding & ID Verification",
    description:
      "Streamline the user journey with secure, friction-free verification. We integrate robust KYC and compliance protocols to build trust.",
  },
  {
    id: "security",
    icon: LuShield,
    title: "Security",
    description:
      "Safeguard your digital infrastructure with proactive protection. From encryption to audits, we ensure your data stays secure.",
  },
  {
    id: "software-dev",
    icon: LuLayoutGrid,
    title: "Software Development",
    description:
      "Build scalable, custom digital products designed for performance. We deliver user-centric applications using modern tech stacks.",
  },
  {
    id: "consulting",
    icon: LuHandshake,
    title: "IT Consulting",
    description:
      "Optimize your technical strategy with expert guidance. We provide the roadmaps and insights you need for long-term growth.",
  },
  {
    id: "erp-deployment",
    icon: LuChartBar,
    title: "ERP Deployment",
    description:
      "Scale your operations with robust Enterprise Resource Planning solutions tailored to your business needs.",
  },
  {
    id: "ai-deployment",
    icon: LuBrainCircuit,
    title: "AI Deployment",
    description:
      "Harness the power of Artificial Intelligence to automate complex processes and drive innovation.",
  },
  {
    id: "networking",
    icon: LuNetwork,
    title: "Networking",
    description:
      "Design and implement secure, high-performance network infrastructure for your growing enterprise.",
  },
  {
    id: "zoho-partner",
    icon: LuLayers,
    title: "Zoho Implementations",
    description:
      "Streamline operations, enhance collaboration, and drive growth with expert Zoho implementations tailored to your business needs.",
  },
  {
    id: "document-management",
    icon: LuFileText,
    title: "Document Management System",
    description:
      "Digitalize and automate your document lifecycles with secure, scalable management solutions.",
  },
  {
    id: "hardware-procurement",
    icon: LuHardDrive,
    title: "Hardware Procurement",
    description:
      "Reliable hardware sourcing and deployment services for enterprise-scale technology needs.",
  },
];

export const metadata = buildServicesIndexMetadata();

export default function ServicesPage() {
  return (
    <>
      <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
        {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-[#09090b] overflow-hidden">
          {/* Abstract background pattern (inspired by TBO) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/sections/servicebackground.webp"
              alt="Solutions and Services"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#1A1A37]/80" />
          </div>

          <div className="relative z-10 text-center px-6">
            <h1 className="text-white tracking-tighter mb-6">
              Solutions and Services
            </h1>

            {/* Breadcrumb */}
            <nav
              aria-label="breadcrumb"
              className="inline-flex items-center gap-2 text-[#1A1A37] text-sm md:text-base bg-white px-6 py-2.5"
            >
              <Link href="/" className="hover:text-light-primary">
                Home
              </Link>
              <ChevronRight size={16} className="text-light-primary" />
              <span className="text-[#1A1A37] ">Solutions and Services</span>
            </nav>
          </div>
        </div>

        {/* ── SERVICES GRID SECTION ───────────────────────────────────────── */}
        <section className="py-24 px-3 md:px-6">
          <div className="max-w-7xl mx-auto md:text-center mb-20">
            <span className="text-light-primary text-sm uppercase font-medium block mb-4">
              Our Services
            </span>
            <div className="flex flex-col flex-start md:items-center gap-4 max-w-3xl mx-auto">
              <div className="flex items-center gap-4">
                <span className="w-1 h-10 bg-light-primary block shrink-0" />
                <h2 className="text-[#1A1A37] dark:text-white leading-tight">
                  Amazing Services We Offer
                </h2>
              </div>
              <p className="dark:text-white/90">
                We specialize in driving organizational change and digital
                transformation. Our experts partner with clients to develop
                high-impact, practical solutions that solve real-world
                challenges.
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-24 mt-8 md:mt-25">
            {allServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="relative flex flex-col bg-white dark:bg-zinc-900 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_15px_50px_-15px_rgba(0,0,0,0.5)] p-8 pt-16 min-h-[300px] md:h-[350px] w-full md:max-w-[400px] md:mx-auto transition-colors duration-300"
                >
                  {/* Icon box overlay */}
                  <div className="absolute top-0 left-14 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 md:w-18 md:h-18 bg-light-primary flex items-center justify-center shadow-lg">
                      <Icon
                        className="text-white w-7 h-7 md:w-8 md:h-8"
                        strokeWidth={2}
                      />
                    </div>
                  </div>

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
        </section>
      </main>
      <Footer />
    </>
  );
}
