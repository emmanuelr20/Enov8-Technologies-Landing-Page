import Image from "next/image";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = {
  title: "ERP Deployment | Enov8 Technologies",
  description: "Scale your operations with robust Enterprise Resource Planning solutions tailored to your business needs.",
};

export default function ERPDeploymentPage() {
  return (
    <ServicePageTemplate serviceId="erp-deployment">
      <div className="space-y-12">
        {/* Intro */}
        <div>
          <div className="flex items-center gap-4 mb-5">
            <span className="w-1.5 h-10 bg-light-primary block shrink-0" />
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A37] dark:text-white font-space tracking-tight">
              ERP Deployment
            </h2>
          </div>
          <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed font-poppins">
            Streamline your entire business operation with our enterprise-grade ERP deployment services. 
            We help you integrate finance, HR, supply chain, and customer management into a single, 
            unified digital ecosystem.
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
          <Image
            src="/erp1.jpg"
            alt="ERP System showcase"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="text-xl md:text-2xl font-bold font-space text-light-primary">
                Custom ERP Strategy
              </h4>
            </div>
            <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed text-base pl-5">
              We don't believe in one-size-fits-all. Our experts analyze your unique workflows 
              to recommend and implement the ERP solution that best fits your industry and scale.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="text-xl md:text-2xl font-bold font-space text-light-primary">
                Data Migration & Integration
              </h4>
            </div>
            <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed text-base pl-5">
              Move your legacy data securely and integrate your new ERP with existing tools. 
              We ensure zero data loss and minimal disruption to your daily operations.
            </p>
          </div>
        </div>

        {/* Additional Detail */}
        <div className="bg-gray-50 dark:bg-zinc-900 p-8 border-l-4 border-light-primary">
          <h4 className="text-xl font-bold text-[#1A1A37] dark:text-white font-space mb-4">Why ERP for your business?</h4>
          <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed">
            "An integrated ERP system provides the visibility and control necessary to make 
            informed decisions in real-time. It is the foundation of modern digital enterprise."
          </p>
        </div>
      </div>
    </ServicePageTemplate>
  );
}
