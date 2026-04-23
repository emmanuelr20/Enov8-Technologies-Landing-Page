import Image from "next/image";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = {
  title: "ZohoOne Certified Partner | Enov8 Technologies",
  description:
    "Official ZohoOne partner helping you implement and optimize the entire ZohoOne suite for business success.",
};

export default function ZohoOnePartnerPage() {
  return (
    <ServicePageTemplate serviceId="zoho-partner" partnerLogo="/zoho.svg">
      <div className="space-y-12">
        {/* Intro */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 md:gap-4 mb-10">
            <span className="w-1.5 h-10 bg-light-primary block shrink-0" />
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A37] dark:text-white font-space tracking-tight">
              Zoho Certified Partner
            </h2>
          </div>
          {/* Feature Image */}
          <div className="relative h-[300px] mb-5 md:h-[460px] overflow-hidden">
            <Image
              src="/zohoerp.jpeg"
              alt="ZohoOne Ecosystem showcase"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
              priority
              className="object-fit"
            />
            {/* <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" /> */}
          </div>
          <p className="text-gray-700 dark:text-white/90 text-lg leading-relaxed font-poppins">
            Unlock the full potential of the ZohoOne ecosystem. As certified
            partners, we provide expert implementation, customization, and
            training for ZohoOne's comprehensive suite of business applications,
            from CRM to help desk, to ZohoOne Books, ZohoOne People and ZohoOne
            Creator.
          </p>
        </div>

        {/* Core Modules Grid: The Operating System for Business */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-gray-100 dark:border-zinc-800 pt-10">
          {/* Sales */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="text-xl font-bold font-space dark:text-white capitalize tracking-tight">
                Sales & Process Automation
              </h4>
            </div>
            <p className="text-gray-700 dark:text-white/90 font-poppins leading-relaxed text-lg pl-5">
              Define and automate your sales framework. We implement ZohoOne CRM
              to capture and convert leads through structured, repeatable
              processes.
            </p>
          </div>

          {/* Marketing */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="text-xl font-bold font-space dark:text-white capitalize tracking-tight">
                Unified Marketing
              </h4>
            </div>
            <p className="text-gray-700 dark:text-white/90 font-poppins leading-relaxed text-lg pl-5">
              Engage prospects across every digital channel. We optimize
              ZohoOne's marketing automation to deliver the right message at the
              perfect time.
            </p>
          </div>

          {/* Service */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="text-xl font-bold font-space dark:text-white capitalize tracking-tight">
                Customer Experience (CX)
              </h4>
            </div>
            <p className="text-gray-700 dark:text-white/90 font-poppins leading-relaxed text-lg pl-5">
              Transform support into a competitive advantage. We deploy ZohoOne
              Desk to resolve inquiries quickly using intelligent ticketing and
              live chat.
            </p>
          </div>

          {/* Finance */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="text-xl font-bold font-space dark:text-white capitalize tracking-tight">
                Finance & Inventory
              </h4>
            </div>
            <p className="text-gray-700 dark:text-white/90 font-poppins leading-relaxed text-lg pl-5">
              Modernize your accounting with real-time accuracy. We implement
              ZohoOne Books to manage invoicing, inventory, and compliance in
              one secure system.
            </p>
          </div>

          {/* HR */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="text-xl font-bold font-space dark:text-white capitalize tracking-tight">
                HR & Employee Empowerment
              </h4>
            </div>
            <p className="text-gray-700 dark:text-white/90 font-poppins leading-relaxed text-lg pl-5">
              Empower your workforce from recruitment to retirement. We help you
              manage the full employee lifecycle with centralized HR policies
              and tracking.
            </p>
          </div>

          {/* Operations */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="text-xl font-bold font-space dark:text-white capitalize tracking-tight">
                Operations & Projects
              </h4>
            </div>
            <p className="text-gray-700 dark:text-white/90 font-poppins leading-relaxed text-lg pl-5">
              Optimize fulfillment and project delivery. We use ZohoOne Projects
              and Inventory to manage tasks and orders with unmatched speed and
              precision.
            </p>
          </div>

          {/* Ecommerce */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="text-xl font-bold font-space dark:text-white capitalize tracking-tight">
                Ecommerce
              </h4>
            </div>
            <p className="text-gray-700 dark:text-white/90 font-poppins leading-relaxed text-lg pl-5">
              Build a high-converting digital storefront. We leverage ZohoOne
              Commerce to turn your website into a powerful sales engine
              integrated with your back-office.
            </p>
          </div>
        </div>

        {/* Additional Detail */}
        <div className="bg-light-primary/5 dark:bg-zinc-900/50 p-8 border-l-4 border-light-primary">
          <h4 className="text-xl font-bold text-[#1A1A37] dark:text-white font-space mb-4">
            Why Partner with Us?
          </h4>
          <p className="text-gray-700 dark:text-white/90 font-poppins leading-relaxed">
            Don't waste time on trial and error. Our certified experts ensure
            your ZohoOne setup is optimized from day one, following best
            practices for security, scalability, and user adoption.
          </p>
        </div>
      </div>
    </ServicePageTemplate>
  );
}
