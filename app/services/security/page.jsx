import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Security | Enov8 Technologies",
  description:
    "Safeguard your digital infrastructure with proactive enterprise-grade protection. From encryption to security audits, Enov8 Technologies ensures your data stays secure.",
};

export default function SecurityPage() {
  return (
    <ServicePageTemplate serviceId="security">
      {/* Intro */}
      <div>
        <div className="flex items-center gap-4 mb-5">
          <span className="w-1.5 h-10 bg-light-primary block shrink-0" />
          <h2 className="text-3xl md:text-4xl font-black text-[#1A1A37] dark:text-white font-space tracking-tight">
            Security
          </h2>
        </div>
        <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed font-poppins">
          Safeguard your digital infrastructure with proactive, enterprise-grade
          protection. From encryption standards to comprehensive audits, we
          ensure your data and systems remain secure against evolving threats.
        </p>
      </div>

      {/* Sub-sections */}
      <div className="space-y-10 pt-10 border-t border-gray-100 dark:border-zinc-800">
        {/* Feature Image */}
        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
          <img
            src="/security.jpg"
            alt="Security showcase"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="text-xl md:text-2xl font-bold font-space text-light-primary">
              Cybersecurity Audits
            </h4>
          </div>
          <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed text-base pl-5">
            We perform comprehensive vulnerability assessments and penetration
            testing to identify potential entry points for attackers. Our
            detailed reports provide actionable insights to harden your security
            perimeter.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="text-xl md:text-2xl font-bold font-space text-light-primary">
              Data Encryption & Privacy
            </h4>
          </div>
          <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed text-base pl-5">
            Protect sensitive customer information and proprietary data with
            enterprise-grade encryption protocols. We help you achieve and
            maintain compliance with international data protection standards
            including GDPR and NDPR.
          </p>
          <div className="relative h-[300px] md:h-[400px] overflow-hidden">
            <img
              src="/security1.jpg"
              alt="Security showcase"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="text-xl md:text-2xl font-bold font-space text-light-primary">
              Managed Security Operations
            </h4>
          </div>
          <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed text-base pl-5">
            Our team provides 24/7 monitoring and incident response services to
            detect and neutralise threats before they can impact your business
            operations. Stay one step ahead with continuous threat intelligence.
          </p>
        </div>
      </div>
    </ServicePageTemplate>
  );
}
