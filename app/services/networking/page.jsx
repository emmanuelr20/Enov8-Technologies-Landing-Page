import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildServiceMetadata } from "@/lib/seoMetadata";

export const metadata = buildServiceMetadata("networking");

export default function NetworkingPage() {
  return (
    <ServicePageTemplate serviceId="networking">
      <div className="space-y-12">
        {/* Intro */}
        <div>
          <div className="flex items-center gap-4 mb-5">
            <span className="w-1.5 h-10 bg-light-primary block shrink-0" />
            <h2 className="text-[#1A1A37] dark:text-white tracking-tight">
              Networking
            </h2>
          </div>
          <p className="dark:text-white/90">
            Build a foundation for digital success with our enterprise
            networking solutions. We design and deploy secure, high-speed, and
            resilient network infrastructures that keep your team connected and
            your data flowing without interruption.
          </p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 gap-10 border-t border-gray-100 dark:border-zinc-800 pt-10">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="capitalize dark:text-white">
                Digital Network Architecture
              </h4>
            </div>
            <p className="dark:text-white/90 pl-5">
              We build networks that grow with you. By combining smart
              automation with airtight security, we ensure your infrastructure
              isn’t just a utility, but a competitive advantage that supports
              your long-term goals.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="capitalize dark:text-white">
                Structured Cabling
              </h4>
            </div>
            <p className="dark:text-white/90 pl-5">
              The backbone of your office needs to be dependable. We install
              high-performance copper cabling (Cat 6 to Cat 7a) that meets
              strict industry standards, ensuring your team stays connected
              without the frustration of lag or downtime.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="capitalize dark:text-white">
                Wireless Solutions
              </h4>
            </div>
            <p className="dark:text-white/90 pl-5">
              Give your team the freedom to work from anywhere in the office.
              Our secure, high-capacity Wi-Fi solutions are built to handle a
              dense mix of laptops, phones, and IoT devices without dropping a
              beat.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="capitalize dark:text-white">
                Enterprise Network Monitoring
              </h4>
            </div>
            <p className="dark:text-white/90 pl-5">
              We spot trouble before it reaches your desk. Our real-time
              monitoring gives us a bird’s-eye view of your performance and
              security, allowing us to fix bottlenecks and block threats before
              they disrupt your day.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="capitalize dark:text-white">
                Fiber Optic Cabling
              </h4>
            </div>
            <p className="dark:text-white/90 pl-5">
              When distance and speed are non-negotiable, our fiber solutions
              bridge the gap. We link buildings and data centers with
              high-bandwidth connectivity designed to handle your heaviest data
              loads with ease.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="capitalize dark:text-white">
                Wide Area Networks (WAN)
              </h4>
            </div>
            <p className="dark:text-white/90 pl-5">
              Keep your global teams feeling like they’re in the same room.
              Whether through SD-WAN or secure VPNs, we provide the fast,
              private links your satellite offices need to share data and
              collaborate safely.
            </p>
          </div>
        </div>
      </div>
    </ServicePageTemplate>
  );
}
