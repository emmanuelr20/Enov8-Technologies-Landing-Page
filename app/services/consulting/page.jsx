import Image from "next/image";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Consulting | Enov8 Technologies",
  description:
    "Optimize your technical strategy with expert guidance. Enov8 Technologies provides the roadmaps and insights you need for sustainable long-term digital growth.",
};

export default function ConsultingPage() {
  return (
    <ServicePageTemplate serviceId="consulting">
      {/* Intro */}
      <div className="space-y-8">
        <div className="flex items-center gap-4 mb-10">
          <span className="w-1.5 h-10 bg-light-primary block shrink-0" />
          <h2 className="text-3xl md:text-4xl font-black text-[#1A1A37] dark:text-white font-space tracking-tight">
            IT Consulting
          </h2>
        </div>
        {/* Feature Image */}
        <div className="relative h-[300px] mb-5 md:h-[400px] overflow-hidden">
          <Image
            src="/consultingtech.jpg"
            alt="Consulting showcase"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed font-poppins">
          Optimise your technical strategy with expert guidance from seasoned
          professionals. We provide the clear roadmaps and actionable insights
          your organisation needs for confident, sustainable digital growth.
        </p>
      </div>

      {/* Sub-sections */}
      <div className="space-y-10 pt-10 border-t border-gray-100 dark:border-zinc-800">
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="text-xl md:text-2xl font-bold font-space text-light-primary">
              Digital Transformation Roadmap
            </h4>
          </div>
          <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed text-lg pl-5">
            We work with your leadership team to define a clear technology
            vision. Our roadmaps outline the specific tools, processes, and
            milestones needed to achieve your long-term business goals while
            managing risk at every stage.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="text-xl md:text-2xl font-bold font-space text-light-primary">
              Infrastructure Strategy
            </h4>
          </div>
          <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed text-lg pl-5">
            Optimise your hardware and cloud infrastructure for cost-efficiency
            and peak performance. We provide expert advice on server management,
            network security architecture, and disaster recovery planning to
            future-proof your systems.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="text-xl md:text-2xl font-bold font-space text-light-primary">
              Technical Feasibility Studies
            </h4>
          </div>
          <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed text-lg pl-5">
            Before you invest in a new project or initiative, we evaluate the
            technical risks, resource requirements, and strategic fit. Our
            feasibility studies help you make well-informed decisions and avoid
            costly implementation mistakes.
          </p>
        </div>
      </div>
    </ServicePageTemplate>
  );
}
