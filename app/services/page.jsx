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
  LuHardDrive
} from "react-icons/lu";

const allServices = [
  {
    id: "digital-signage",
    icon: LuMonitorPlay,
    title: "Digital Signage Solution",
    description: "Manage and deploy dynamic visual content across your screens in real-time. We provide high-impact signage that transforms physical spaces.",
  },
  {
    id: "automation",
    icon: LuBoxes,
    title: "Business Automation",
    description: "Eliminate repetitive manual tasks with intelligent, seamless workflows. We connect your platforms to boost operational efficiency.",
  },
  {
    id: "onboarding",
    icon: LuUserPlus,
    title: "Customer Onboarding & ID Verification",
    description: "Streamline the user journey with secure, friction-free verification. We integrate robust KYC and compliance protocols to build trust.",
  },
  {
    id: "security",
    icon: LuShield,
    title: "Security",
    description: "Safeguard your digital infrastructure with proactive protection. From encryption to audits, we ensure your data stays secure.",
  },
  {
    id: "software-dev",
    icon: LuLayoutGrid,
    title: "Software Development",
    description: "Build scalable, custom digital products designed for performance. We deliver user-centric applications using modern tech stacks.",
  },
  {
    id: "consulting",
    icon: LuHandshake,
    title: "Consulting",
    description: "Optimize your technical strategy with expert guidance. We provide the roadmaps and insights you need for long-term growth.",
  },
  {
    id: "erp-deployment",
    icon: LuChartBar,
    title: "ERP Deployment",
    description: "Scale your operations with robust Enterprise Resource Planning solutions tailored to your business needs.",
  },
  {
    id: "ai-deployment",
    icon: LuBrainCircuit,
    title: "AI Deployment",
    description: "Harness the power of Artificial Intelligence to automate complex processes and drive innovation.",
  },
  {
    id: "networking",
    icon: LuNetwork,
    title: "Networking",
    description: "Design and implement secure, high-performance network infrastructure for your growing enterprise.",
  },
  {
    id: "zoho-partner",
    icon: LuLayers,
    title: "Zoho Certified Partner",
    description: "Official Zoho partner helping you implement and optimize the entire Zoho suite for business success.",
  },
  {
    id: "document-management",
    icon: LuFileText,
    title: "Document Management System",
    description: "Digitalize and automate your document lifecycles with secure, scalable management solutions.",
  },
  {
    id: "hardware-procurement",
    icon: LuHardDrive,
    title: "Hardware Procurement",
    description: "Reliable hardware sourcing and deployment services for enterprise-scale technology needs.",
  },
];

export const metadata = {
  title: "Solutions and Services | Enov8 Technologies",
  description: "Explore our comprehensive suite of technology solutions designed to accelerate your business growth and secure your digital future.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
      <div className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-[#09090b] overflow-hidden">
        {/* Abstract background pattern (inspired by TBO) */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-linear-to-r from-[#09090b] via-transparent to-[#09090b] z-10" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(239,68,68,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(239,68,68,0.1)_0%,transparent_50%)]" />
          {/* Simple dot grid */}
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tighter font-space mb-6">
            Solutions and Services
          </h1>
          
          {/* Breadcrumb */}
          <nav 
          aria-label="breadcrumb"
          className="inline-flex items-center gap-2 text-[#1A1A37] font-poppins text-sm md:text-base bg-white px-6 py-2.5"
          >
            <Link href="/" className="hover:text-light-primary font-bold">Home</Link>
            <ChevronRight size={16} className="text-light-primary"/>
            <span className="text-[#1A1A37] font-bold">Solutions and Services</span>
          </nav>
        </div>
      </div>

      {/* ── SERVICES GRID SECTION ───────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="text-light-primary font-semibold text-sm uppercase tracking-widest font-poppins block mb-4">
            Our Services
          </span>
          <div className="flex flex-col items-center gap-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-4">
            <span className="w-1 h-10 bg-light-primary block shrink-0" />
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A37] dark:text-white font-space leading-tight">
              Awesome Services We Offer
            </h2>
            </div>
            <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed font-poppins">
              We pride ourselves in our ability to shape organizational change and digital transformation. 
              Our technology experts collaborate exclusively with clients to develop concrete, 
              practical and workable solutions.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
          {allServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative flex flex-col bg-white dark:bg-zinc-900 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_15px_50px_-15px_rgba(0,0,0,0.5)] p-8 pt-16 min-h-[340px] w-full transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-light-primary/10"
              >
                {/* Icon box overlay */}
                <div className="absolute top-0 left-14 -translate-x-1/2 -translate-y-1/2  ">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-light-primary flex items-center justify-center shadow-xl">
                    <Icon className="text-white w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
                  </div>
                </div>

                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-[#1A1A37] dark:text-white font-space mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-zinc-400 text-base font-medium leading-relaxed font-poppins mb-8">
                    {service.description}
                  </p>
                  
                  <Link
                    href={`/services/${service.id}`}
                    className="group/link inline-flex items-center gap-3 text-light-primary font-bold text-base transition-colors hover:text-light-primary/80 font-poppins mt-auto"
                  >
                    <div className="w-8 h-8 rounded-full border-2 border-light-primary flex items-center justify-center group-hover/link:bg-light-primary group-hover/link:text-white transition-all duration-300">
                      <ArrowRight size={16} />
                    </div>
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-light-primary after:transition-all after:duration-300 group-hover/link:after:w-full">
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
  );
}
