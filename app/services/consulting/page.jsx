import Image from "next/image";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildServiceMetadata } from "@/lib/seoMetadata";

export const metadata = buildServiceMetadata("consulting");

export default function ConsultingPage() {
  return (
    <ServicePageTemplate serviceId="consulting">
      {/* Intro */}
      <div>
        <div className="flex items-center gap-4 mb-5">
          <span className="w-1.5 h-10 bg-light-primary block shrink-0" />
          <h2 className="text-3xl md:text-4xl text-[#1A1A37] dark:text-white tracking-tight">
            IT Consulting
          </h2>
        </div>
        <p className=" dark:text-white/90">
          Optimize your technical strategy with expert guidance. We provide the
          roadmaps and insights you need for long-term growth, ensuring your
          technology investments align perfectly with your business objectives.
        </p>
      </div>

      {/* Sub-sections */}
      <div className="space-y-10 pt-10 border-t border-gray-100 dark:border-zinc-800">
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="text-xl md:text-2xl capitalize dark:text-white">
              Digital Transformation Roadmap
            </h4>
          </div>
          <p className=" dark:text-white/90 pl-5">
            We work with your leadership team to define a clear technology
            vision. Our roadmaps outline the specific tools, timelines, and
            processes needed to achieve your long-term business goals and stay
            competitive in a digital-first world.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="text-xl md:text-2xl capitalize dark:text-white">
              Infrastructure Strategy
            </h4>
          </div>
          <p className=" dark:text-white/90 pl-5">
            Optimize your hardware and cloud infrastructure for cost, security,
            and performance. We provide expert advice on server management,
            network architecture, and disaster recovery planning to ensure
            maximum uptime.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="text-xl md:text-2xl capitalize dark:text-white">
              Technical Feasibility Studies
            </h4>
          </div>
          <p className=" dark:text-white/90 pl-5">
            Before you invest in a new project, we evaluate the technical risks,
            resource requirements, and potential ROI. Our studies help you make
            informed decisions and avoid costly pitfalls during implementation.
          </p>
        </div>
      </div>

      {/* Feature Image */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src="/services/consulting1.webp"
          alt="IT Consulting and Strategy"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </ServicePageTemplate>
  );
}
