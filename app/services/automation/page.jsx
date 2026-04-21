import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Business Automation | Enov8 Technologies",
  description:
    "Eliminate repetitive manual tasks with intelligent, seamless workflows. Enov8 Technologies connects your platforms to boost operational efficiency.",
};

export default function AutomationPage() {
  return (
    <ServicePageTemplate serviceId="automation">
      {/* Intro */}
      <div>
        <div className="flex items-center gap-4 mb-5">
          <span className="w-1.5 h-10 bg-light-primary block shrink-0" />
          <h2 className="text-3xl md:text-4xl font-black text-[#1A1A37] dark:text-white font-space tracking-tight">
            Business Automation
          </h2>
        </div>
        <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed font-poppins">
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
            <h4 className="text-xl md:text-2xl font-bold font-space text-light-primary">
              Enterprise Resource Planning (ERP)
            </h4>
          </div>
          <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed text-base pl-5">
            Integrate your core business processes — finance, HR, supply chain,
            and more — into a unified system. Our ERP solutions provide
            real-time visibility and complete control over your entire
            operation.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="text-xl md:text-2xl font-bold font-space text-light-primary">
              Electronic Document Management System (eDMS)
            </h4>
          </div>
          <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed text-base pl-5">
            Transition to a truly digital office with our eDMS. Categorize,
            store, and retrieve documents securely while automating
            compliance-related documentation and workflows. Eliminate
            paper-based processes and improve audit readiness.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="text-xl md:text-2xl font-bold font-space text-light-primary">
              Workflow Optimisation
            </h4>
          </div>
          <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed text-base pl-5">
            We analyse your existing processes to identify bottlenecks and
            automate them using intelligent triggers. This reduces human error
            and frees up your team to focus on high-value, strategic tasks.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="text-xl md:text-2xl font-bold font-space text-light-primary">
              Productivity Tools Integration
            </h4>
          </div>
          <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed text-base pl-5">
            Seamlessly connect your automation workflows with popular
            collaboration tools like Google Workspace, Office 365, and Slack to
            maintain a cohesive and productive work environment.
          </p>
        </div>
      </div>

      {/* Feature Image */}
      <div className="">
        <img
          src="/business2.jpg"
          alt="Business Automation showcase"
          className="w-full h-full object-contain"
        />
      </div>
    </ServicePageTemplate>
  );
}
