import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Document Management System | Enov8 Technologies",
  description:
    "Digitalize and automate your document lifecycles with secure, scalable management solutions.",
};

export default function DocumentManagementPage() {
  return (
    <ServicePageTemplate serviceId="document-management">
      <div className="space-y-12">
        {/* Intro */}
        <div>
          <div className="flex items-center gap-4 mb-5">
            <span className="w-1.5 h-10 bg-light-primary block shrink-0" />
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A37] dark:text-white font-space tracking-tight">
              Document Management System
            </h2>
          </div>
          <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed font-poppins">
            Transform your office into a truly digital workspace. Our Document
            Management Systems (DMS) eliminate the chaos of physical filing and
            unstructured digital folders, providing a secure, searchable, and
            automated environment for all your business-critical information.
          </p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="text-xl md:text-2xl font-bold font-space text-light-primary">
                Smart Indexing & Search
              </h4>
            </div>
            <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed text-lg pl-5">
              Never lose a file again. Our DMS uses advanced OCR and metadata
              tagging to ensure every document is instantly searchable. Find any
              invoice, contract, or report in seconds using simple keywords.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="text-xl md:text-2xl font-bold font-space text-light-primary">
                Workflow Automation
              </h4>
            </div>
            <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed text-lg pl-5">
              Automate document-driven processes like invoice approvals,
              contract signings, and HR onboarding. Our system routes documents
              to the right people at the right time, ensuring zero bottlenecks.
            </p>
          </div>
        </div>

        {/* Additional Detail */}
        <div className="p-8 border-l-4 border-light-primary">
          <h4 className="text-xl font-bold text-[#1A1A37] dark:text-white font-space mb-4">
            Security & Compliance
          </h4>
          <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed">
            With granular access controls and full audit trails, our DMS ensures
            that sensitive information is only seen by authorized personnel.
            Stay compliant with data protection laws while maintaining high
            productivity.
          </p>
        </div>
      </div>
    </ServicePageTemplate>
  );
}
