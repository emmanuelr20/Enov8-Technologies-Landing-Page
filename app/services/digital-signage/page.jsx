import Image from "next/image";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Digital Signage Solution | Enov8 Technologies",
  description:
    "Manage and deploy dynamic visual content across your screens in real-time. Enov8 Technologies provides high-impact digital signage solutions that transform physical spaces.",
};

export default function DigitalSignagePage() {
  return (
    <ServicePageTemplate serviceId="digital-signage">
      {/* Intro */}
      <div className="space-y-8">
        <div className="flex items-center gap-4 mb-10">
          <span className="w-1.5 h-10 bg-light-primary block shrink-0" />
          <h2 className="text-3xl md:text-4xl font-black text-[#1A1A37] dark:text-white font-space tracking-tight">
            Digital Signage Solution
          </h2>
        </div>
        {/* Feature Image */}
        <div className="relative h-[300px] mb-12 md:h-[400px] overflow-hidden">
          <Image
            src="/signage1.jpg"
            alt="Digital Signage showcase"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            priority
            className="object-cover"
          />
        </div>
        <p className="text-gray-700 dark:text-white/90 text-lg leading-relaxed font-poppins">
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
            <h4 className="text-xl md:text-2xl font-bold font-space text-primary-light dark:text-white">
              Dynamic Content Management
            </h4>
          </div>
          <p className="text-gray-700 dark:text-white/90 font-poppins leading-relaxed text-lg pl-5">
            Our digital signage solutions allow you to control multiple displays
            from a single, centralized dashboard. Whether it's promotional
            videos, real-time data feeds, or emergency alerts, you can update
            your content instantly across all locations.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="text-xl md:text-2xl font-bold font-space text-primary-light dark:text-white">
              High-Impact Visual Displays
            </h4>
          </div>
          <p className="text-gray-700 dark:text-white/90 font-poppins leading-relaxed text-lg pl-5">
            We specialize in designing and deploying high-resolution displays
            that capture attention. From retail storefronts to corporate
            lobbies, our signage solutions are tailored to enhance brand
            visibility and improve customer engagement.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="text-xl md:text-2xl font-bold font-space text-white">
              Real-Time Integration
            </h4>
          </div>
          <p className="text-gray-700 dark:text-white/90 font-poppins leading-relaxed text-lg pl-5">
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
