import Image from "next/image";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildServiceMetadata } from "@/lib/seoMetadata";

export const metadata = buildServiceMetadata("digital-signage");

export default function DigitalSignagePage() {
  return (
    <ServicePageTemplate serviceId="digital-signage">
      {/* Intro */}
      <div className="space-y-8">
        <div className="flex items-center gap-4 mb-10">
          <span className="w-1.5 h-10 bg-light-primary block shrink-0" />
          <h3 className="text-3xl md:textext-[#1A1A37] dark:text-white tracking-tight">
            Digital Signage Solution
          </h3>
        </div>
        {/* Feature Image */}
        <div className="relative h-[300px] mb-12 md:h-[400px] overflow-hidden">
          <Image
            src="/services/signage.webp"
            alt="Digital Signage showcase"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <p className=" dark:text-white/90">
          Manage and deploy dynamic visual content across your screens in
          real-time. We provide high-impact signage that transforms physical
          spaces and captivates your audience.
        </p>
      </div>

      {/* Sub-sections */}
      <div className="space-y-10 pt-10 border-t border-gray-100 dark:border-zinc-800">
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h3 className="capitalize dark:text-white">
              Dynamic Content Management
            </h3>
          </div>
          <p className="dark:text-white/90 pl-5">
            Our digital signage solutions allow you to control multiple displays
            from a single, centralized dashboard. Whether it's promotional
            videos, real-time data feeds, or emergency alerts, you can update
            your content instantly across all locations.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h3 className="capitalize dark:text-white">
              High-Impact Visual Displays
            </h3>
          </div>
          <p className=" dark:text-white/90 pl-5">
            We specialize in designing and deploying high-resolution displays
            that capture attention. From retail storefronts to corporate
            lobbies, our signage solutions are tailored to enhance brand
            visibility and improve customer engagement.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h3 className="capitalize dark:text-white">
              Real-Time Integration
            </h3>
          </div>
          <p className=" dark:text-white/90 pl-5">
            Connect your screens to live data sources such as weather updates,
            social media feeds, or internal business metrics. Our platform
            ensures that your audience always sees the most relevant and
            up-to-date information.
          </p>
        </div>
      </div>
    </ServicePageTemplate>
  );
}
