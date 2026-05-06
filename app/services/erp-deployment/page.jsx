import Image from "next/image";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildServiceMetadata } from "@/lib/seoMetadata";

export const metadata = buildServiceMetadata("erp-deployment");

export default function ERPDeploymentPage() {
  return (
    <ServicePageTemplate serviceId="erp-deployment">
      <div className="space-y-12">
        {/* Intro */}
        <div>
          <div className="flex items-center gap-4 mb-5">
            <span className="w-1.5 h-10 bg-light-primary block shrink-0" />
            <h2 className="text-[#1A1A37] dark:text-white tracking-tight">
              ERP Deployment
            </h2>
          </div>
          <p className="dark:text-white/90">
            Streamline your entire business operation with our enterprise-grade
            ERP deployment services. We help you integrate finance, HR, supply
            chain, and customer management into a single, unified digital
            ecosystem.
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
          <Image
            src="/services/erp1.webp"
            alt="ERP System showcase"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-gray-100 dark:border-zinc-800 pt-10">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="capitalize dark:text-white">
                Custom ERP Strategy
              </h4>
            </div>
            <p className="dark:text-white/90 pl-5">
              We don't believe in one-size-fits-all. Our experts analyze your
              unique workflows to recommend and implement the ERP solution that
              best fits your industry and scale.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="capitalize dark:text-white">
                Data Migration & Integration
              </h4>
            </div>
            <p className="dark:text-white/90 pl-5">
              Move your legacy data securely and integrate your new ERP with
              existing tools. We ensure zero data loss and minimal disruption to
              your daily operations.
            </p>
          </div>
        </div>

        {/* Additional Detail */}
        <div className="bg-gray-50 dark:bg-zinc-900 p-8 border-l-4 border-light-primary">
          <h4 className="text-[#1A1A37] dark:text-white mb-4">
            Why ERP for your business?
          </h4>
          <p className="dark:text-white/90">
            "An integrated ERP system provides the visibility and control
            necessary to make informed decisions in real-time. It is the
            foundation of modern digital enterprise."
          </p>
        </div>
      </div>
    </ServicePageTemplate>
  );
}
