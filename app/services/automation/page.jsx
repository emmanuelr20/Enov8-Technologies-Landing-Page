import Image from "next/image";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildServiceMetadata } from "@/lib/seoMetadata";

export const metadata = buildServiceMetadata("automation");

export default function AutomationPage() {
  return (
    <ServicePageTemplate serviceId="automation">
      {/* Intro */}
      <div>
        <div className="flex items-center gap-4 mb-5">
          <span className="w-1.5 h-10 bg-light-primary block shrink-0" />
          <h2 className="text-[#1A1A37] dark:text-white tracking-tight">
            Business Automation
          </h2>
        </div>
        <p className="dark:text-white/90">
          Eliminate repetitive manual tasks with intelligent, seamless
          workflows. We connect your platforms and teams to boost operational
          efficiency across your entire organisation.
        </p>
      </div>

      {/* Sub-sections */}
      <div className="space-y-10 pt-10 border-t border-gray-100 dark:border-zinc-800">
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="capitalize dark:text-white">
              Enterprise Resource Planning (ERP)
            </h4>
          </div>
          <p className="dark:text-white/90 pl-5">
            Integrate your core business processes — finance, HR, supply chain,
            and more — into a unified system. Our ERP solutions provide
            real-time visibility and complete control over your entire
            operation.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="capitalize dark:text-white">
              Electronic Document Management System (eDMS)
            </h4>
          </div>
          <p className="dark:text-white/90 pl-5">
            Transition to a truly digital office with our eDMS. Categorize,
            store, and retrieve documents securely while automating
            compliance-related documentation and workflows. Eliminate
            paper-based processes and improve audit readiness.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="capitalize dark:text-white">
              Workflow Optimisation
            </h4>
          </div>
          <p className="dark:text-white/90 pl-5">
            We analyse your existing processes to identify bottlenecks and
            automate them using intelligent triggers. This reduces human error
            and frees up your team to focus on high-value, strategic tasks.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="capitalize dark:text-white">
              Productivity Tools Integration
            </h4>
          </div>
          <p className="dark:text-white/90 pl-5">
            Seamlessly connect your automation workflows with popular
            collaboration tools like Google Workspace, Office 365, and Slack to
            maintain a cohesive and productive work environment.
          </p>
        </div>
      </div>

      {/* Feature Image */}
      <div className="relative h-[300px] md:h-[500px] w-full mt-10">
        <Image
          src="/services/business-automation.webp"
          alt="Business Automation showcase"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </ServicePageTemplate>
  );
}
