import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Networking | Enov8 Technologies",
  description:
    "Design and implement secure, high-performance network infrastructure for your growing enterprise.",
};

export default function NetworkingPage() {
  return (
    <ServicePageTemplate serviceId="networking">
      <div className="space-y-12">
        {/* Intro */}
        <div>
          <div className="flex items-center gap-4 mb-5">
            <span className="w-1.5 h-10 bg-light-primary block shrink-0" />
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A37] dark:text-white font-space tracking-tight">
              Networking
            </h2>
          </div>
          <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed font-poppins">
            Build a foundation for digital success with our enterprise
            networking solutions. We design and deploy secure, high-speed, and
            resilient network infrastructures that keep your team connected and
            your data flowing without interruption.
          </p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="text-xl md:text-2xl font-bold font-space text-light-primary">
                Secure Infrastructure
              </h4>
            </div>
            <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed text-lg pl-5">
              From sophisticated firewalls to encrypted VPNs, we build security
              into the core of your network. Protect your business from external
              threats while maintaining seamless internal access.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="text-xl md:text-2xl font-bold font-space text-light-primary">
                SD-WAN & Cloud Ready
              </h4>
            </div>
            <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed text-lg pl-5">
              Modernize your network with software-defined wide area networking
              (SD-WAN). Optimize traffic across multiple locations and ensure
              high-performance access to your cloud-based applications.
            </p>
          </div>
        </div>

        {/* Additional Detail */}
        <div className="bg-gray-50 dark:bg-zinc-900 p-8 border-l-4 border-light-primary">
          <h4 className="text-xl font-bold text-[#1A1A37] dark:text-white font-space mb-4">
            Zero Downtime Philosophy
          </h4>
          <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed">
            In today's economy, being offline means losing revenue. Our
            networking strategies prioritize redundancy and failover systems to
            ensure your business remains connected 24/7/365.
          </p>
        </div>
      </div>
    </ServicePageTemplate>
  );
}
