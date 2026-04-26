import Image from "next/image";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Customer Onboarding & ID Verification | Enov8 Technologies",
  description:
    "Streamline the user journey with secure, friction-free verification. We integrate robust KYC and compliance protocols to build trust at every touchpoint.",
};

export default function OnboardingPage() {
  return (
    <ServicePageTemplate serviceId="onboarding">
      {/* Intro */}
      <div className="space-y-8">
        <div className="flex items-center gap-4 mb-10">
          <span className="w-1.5 h-10 bg-light-primary block shrink-0" />
          <h2 className="text-3xl md:text-4xl font-black text-[#1A1A37] dark:text-white font-space tracking-tight">
            Customer Onboarding & ID Verification
          </h2>
        </div>
        {/* Feature Image */}
        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
          <Image
            src="/services/verification2.webp"
            alt="Customer Onboarding showcase"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            priority
            className="object-cover"
          />
        </div>
        <p className="text-gray-700 dark:text-white/90 text-lg leading-relaxed font-poppins">
          Streamline the user journey with secure, friction-free verification.
          We integrate robust KYC and compliance protocols to build trust at
          every touchpoint and reduce drop-off rates.
        </p>
      </div>

      {/* Sub-sections */}
      <div className="space-y-10 pt-10 border-t border-gray-100 dark:border-zinc-800">
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="text-xl md:text-2xl font-bold font-space capitalize dark:text-white">
              Seamless KYC Integration
            </h4>
          </div>
          <p className="text-gray-700 dark:text-white/90 font-poppins leading-relaxed text-lg pl-5">
            Our onboarding solutions integrate directly into your existing apps,
            allowing for real-time Know Your Customer (KYC) verification without
            disrupting the user experience. Support regulatory requirements
            while keeping customers engaged.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="text-xl md:text-2xl font-bold font-space capitalize dark:text-white">
              Biometric Identity Verification
            </h4>
          </div>
          <p className="text-gray-700 dark:text-white/90 font-poppins leading-relaxed text-lg pl-5">
            Utilise advanced facial recognition and liveness detection to ensure
            the person behind the screen is who they claim to be. This reduces
            fraud risk and enhances security across your platform.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="text-xl md:text-2xl font-bold font-space capitalize dark:text-white">
              Automated Document Validation
            </h4>
          </div>
          <p className="text-gray-700 dark:text-white/90 font-poppins leading-relaxed text-lg pl-5">
            Instantly verify government-issued IDs from over 190 countries. Our
            system automatically extracts data and checks for authenticity,
            significantly speeding up the approval process while maintaining a
            complete audit trail.
          </p>
        </div>
      </div>
    </ServicePageTemplate>
  );
}
