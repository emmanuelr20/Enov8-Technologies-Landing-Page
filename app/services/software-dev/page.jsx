import Image from "next/image";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildServiceMetadata } from "@/lib/seoMetadata";

export const metadata = buildServiceMetadata("software-dev");

export default function SoftwareDevPage() {
  return (
    <ServicePageTemplate serviceId="software-dev">
      {/* Intro */}
      <div>
        <div className="flex items-center gap-4 mb-5">
          <span className="w-1.5 h-10 bg-light-primary block shrink-0" />
          <h2 className="text-[#1A1A37] dark:text-white tracking-tight">
            Software Development
          </h2>
        </div>
        <p className="dark:text-white/90">
          Build scalable, custom digital products designed for performance and
          longevity. We deliver user-centric applications using modern tech
          stacks, tailored to your unique business requirements.
        </p>
      </div>

      {/* Sub-sections */}
      <div className="space-y-10 pt-10 border-t border-gray-100 dark:border-zinc-800">
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="capitalize dark:text-white">
              Custom Web Applications
            </h4>
          </div>
          <p className="dark:text-white/90 pl-5">
            We build responsive, high-performance web applications tailored to
            your specific business needs. From e-commerce platforms to complex
            SaaS products, we use the latest frameworks to ensure speed,
            reliability, and scalability.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="capitalize dark:text-white">
              Mobile App Development
            </h4>
          </div>
          <p className="dark:text-white/90 pl-5">
            Create seamless mobile experiences for iOS and Android. Our
            development team focuses on native performance and intuitive UI/UX
            design to keep your users engaged and coming back to your product.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="capitalize dark:text-white">
              Legacy System Modernisation
            </h4>
          </div>
          <p className="dark:text-white/90 pl-5">
            Don't let outdated technology hold you back. We help you migrate
            legacy applications to modern architectures, improving scalability,
            security, and long-term maintainability without disrupting your
            day-to-day operations.
          </p>
        </div>
      </div>

      {/* Feature Image */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src="/services/development2.webp"
          alt="Software Development showcase"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </ServicePageTemplate>
  );
}
