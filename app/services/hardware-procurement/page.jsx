import Image from "next/image";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildServiceMetadata } from "@/lib/seoMetadata";

export const metadata = buildServiceMetadata("hardware-procurement");

export default function HardwareProcurementPage() {
  return (
    <ServicePageTemplate serviceId="hardware-procurement">
      <div className="space-y-12">
        {/* Intro */}
        <div>
          <div className="flex items-center gap-4 mb-5">
            <span className="w-1.5 h-10 bg-light-primary block shrink-0" />
            <h2 className="text-[#1A1A37] dark:text-white tracking-tight">
              Hardware Procurement
            </h2>
          </div>
          <p className="dark:text-white/90">
            Equip your business with the best-in-class technology. Our hardware
            procurement services provide end-to-end support for sourcing,
            configuring, and deploying the physical infrastructure your
            organization needs to thrive.
          </p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 gap-10 border-t border-gray-100 dark:border-zinc-800 pt-10">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="capitalize dark:text-white">
                Global Vendor Network
              </h4>
            </div>
            <p className="dark:text-white/90 pl-5">
              Leverage our partnerships with world-leading hardware
              manufacturers. We source servers, workstations, networking
              equipment, and mobile devices at competitive enterprise pricing,
              ensuring you get the best value for your investment.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="capitalize dark:text-white">
                Configuration & Asset Management
              </h4>
            </div>
            <p className="dark:text-white/90 pl-5">
              We don't just deliver boxes. Our team pre-configures every piece
              of hardware with your company's software and security protocols,
              and provides full asset tracking throughout its operational
              lifecycle.
            </p>
          </div>
        </div>

        {/* Additional Detail */}
        <div className="bg-light-primary/5 dark:bg-zinc-900/50 p-8 border-l-4 border-light-primary">
          <h4 className="text-[#1A1A37] dark:text-white mb-4">
            Scalable Logistics
          </h4>
          <p className="dark:text-white/90">
            Whether you're equipping a single office or a nationwide workforce,
            our logistics team ensures timely delivery and professional
            installation, so your employees can get to work without delay.
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative h-[300px] md:h-[400px] overflow-hidden shadow-2xl">
          <Image
            src="/services/hardware2.webp"
            alt="Hardware Procurement showcase"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        </div>
      </div>
    </ServicePageTemplate>
  );
}
