import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Software Development | Enov8 Technologies",
  description:
    "Build scalable, custom digital products designed for performance. Enov8 Technologies delivers user-centric web and mobile applications using modern tech stacks.",
};

export default function SoftwareDevPage() {
  return (
    <ServicePageTemplate serviceId="software-dev">
      {/* Intro */}
      <div>
        <div className="flex items-center gap-4 mb-5">
          <span className="w-1.5 h-10 bg-light-primary block shrink-0" />
          <h2 className="text-3xl md:text-4xl font-black text-[#1A1A37] dark:text-white font-space tracking-tight">
            Software Development
          </h2>
        </div>
        <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed font-poppins">
          Build scalable, custom digital products designed for performance and longevity.
          We deliver user-centric applications using modern tech stacks, tailored to your
          unique business requirements.
        </p>
      </div>

      {/* Sub-sections */}
      <div className="space-y-10 pt-10 border-t border-gray-100 dark:border-zinc-800">

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="text-xl md:text-2xl font-bold font-space text-light-primary">
              Custom Web Applications
            </h4>
          </div>
          <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed text-base pl-5">
            We build responsive, high-performance web applications tailored to your specific
            business needs. From e-commerce platforms to complex SaaS products, we use the latest
            frameworks to ensure speed, reliability, and scalability.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="text-xl md:text-2xl font-bold font-space text-light-primary">
              Mobile App Development
            </h4>
          </div>
          <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed text-base pl-5">
            Create seamless mobile experiences for iOS and Android. Our development team focuses
            on native performance and intuitive UI/UX design to keep your users engaged and coming
            back to your product.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
            <h4 className="text-xl md:text-2xl font-bold font-space text-light-primary">
              Legacy System Modernisation
            </h4>
          </div>
          <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed text-base pl-5">
            Don't let outdated technology hold you back. We help you migrate legacy applications
            to modern architectures, improving scalability, security, and long-term maintainability
            without disrupting your day-to-day operations.
          </p>
        </div>

      </div>

      {/* Feature Image */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden shadow-2xl">
        <img
          src="/workflowImage.jpg"
          alt="Software Development showcase"
          className="w-full h-full object-cover"
        />
      </div>
    </ServicePageTemplate>
  );
}
