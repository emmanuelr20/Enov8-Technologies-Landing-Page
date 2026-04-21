import Image from "next/image";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Zoho Certified Partner | Enov8 Technologies",
  description:
    "Official Zoho partner helping you implement and optimize the entire Zoho suite for business success.",
};

export default function ZohoPartnerPage() {
  return (
    <ServicePageTemplate serviceId="zoho-partner">
      <div className="space-y-12">
        {/* Intro */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-10">
            <span className="w-1.5 h-10 bg-light-primary block shrink-0" />
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A37] dark:text-white font-space tracking-tight">
              Zoho Certified Partner
            </h2>
          </div>
          {/* Feature Image */}
          <div className="relative h-[300px] mb-5 md:h-[400px] overflow-hidden shadow-2xl">
            <Image
              src="/zoho1.jpg"
              alt="Zoho Ecosystem showcase"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-8">
              <p className="text-white font-space font-bold text-xl tracking-wide uppercase">
                Official Zoho Implementation Experts
              </p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed font-poppins">
            Unlock the full potential of the Zoho ecosystem. As certified
            partners, we provide expert implementation, customization, and
            training for Zoho's comprehensive suite of business applications,
            from CRM and Books to People and Creator.
          </p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="text-xl md:text-2xl font-bold font-space text-light-primary">
                Zoho CRM Mastery
              </h4>
            </div>
            <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed text-base pl-5">
              We transform Zoho CRM into a powerhouse for your sales team. Our
              custom configurations automate lead nurturing, sales forecasting,
              and customer engagement, allowing you to close deals faster.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="text-xl md:text-2xl font-bold font-space text-light-primary">
                Custom Creator Apps
              </h4>
            </div>
            <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed text-base pl-5">
              When standard apps aren't enough, we build custom solutions on
              Zoho Creator. Our low-code developers create bespoke applications
              that solve your unique operational challenges within the Zoho
              environment.
            </p>
          </div>
        </div>

        {/* Additional Detail */}
        <div className="bg-light-primary/5 dark:bg-zinc-900/50 p-8 border-l-4 border-light-primary">
          <h4 className="text-xl font-bold text-[#1A1A37] dark:text-white font-space mb-4">
            Why Partner with Us?
          </h4>
          <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed">
            Don't waste time on trial and error. Our certified experts ensure
            your Zoho setup is optimized from day one, following best practices
            for security, scalability, and user adoption.
          </p>
        </div>
      </div>
    </ServicePageTemplate>
  );
}
