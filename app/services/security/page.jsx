import Image from "next/image";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Cyber Security | Enov8 Technologies",
  description:
    "Protect your digital assets with advanced cyber security solutions. From threat intelligence to zero-trust architecture, we safeguard your enterprise from evolving digital risks.",
};

export default function SecurityPage() {
  return (
    <ServicePageTemplate serviceId="security">
      {/* Intro */}
      <div>
        <div className="flex items-center gap-4 mb-5">
          <span className="w-1.5 h-10 bg-light-primary block shrink-0" />
          <h2 className="text-3xl md:text-4xl font-black text-[#1A1A37] dark:text-white font-space tracking-tight">
            Cyber Security
          </h2>
        </div>
        <p className="text-gray-700 dark:text-white/90 text-lg leading-relaxed font-poppins">
          Protect your organization's digital ecosystem with our comprehensive
          cyber security suite. We move beyond basic protection, implementing
          zero-trust architectures and proactive threat hunting to ensure your
          operations remain resilient against global cyber threats.
        </p>
      </div>

      {/* Sub-sections */}
      <div className="space-y-10 pt-10 border-t border-gray-100 dark:border-zinc-800">
        {/* Feature Image */}
        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
          <Image
            src="/services/security.webp"
            alt="Security showcase"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="text-xl md:text-2xl font-bold font-space capitalize dark:text-white">
              Cybersecurity Audits
            </h4>
          </div>
          <p className="text-gray-700 dark:text-white/90 font-poppins leading-relaxed text-lg pl-5">
            We perform comprehensive vulnerability assessments and penetration
            testing to identify potential entry points for attackers. Our
            detailed reports provide actionable insights to harden your security
            perimeter.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="text-xl md:text-2xl font-bold font-space capitalize dark:text-white">
              Data Encryption & Privacy
            </h4>
          </div>
          <p className="text-gray-700 dark:text-white/90 font-poppins leading-relaxed text-lg pl-5">
            Protect sensitive customer information and proprietary data with
            enterprise-grade encryption protocols. We help you achieve and
            maintain compliance with international data protection standards
            including GDPR and NDPR.
          </p>
          <div className="relative h-[300px] md:h-[400px] overflow-hidden">
            <Image
              src="/services/security1.webp"
              alt="Data Encryption showcase"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
              priority
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="text-xl md:text-2xl font-bold font-space capitalize dark:text-white">
              Managed Security Operations
            </h4>
          </div>
          <p className="text-gray-700 dark:text-white/90 font-poppins leading-relaxed text-lg pl-5">
            Our team provides 24/7 monitoring and rapid incident response to
            neutralize advanced threats before they impact your business. We
            leverage AI-driven threat hunting and zero-day protection to keep
            your infrastructure resilient.
          </p>
        </div>
      </div>
    </ServicePageTemplate>
  );
}
