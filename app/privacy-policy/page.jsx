import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Enov8 Technologies - How we protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-bg-light dark:bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-space font-bold mb-8 dark:text-white uppercase tracking-tighter">
          Privacy Policy
        </h1>
        <p className="text-gray-600 dark:text-white/90 mb-12 font-poppins text-lg">
          Last updated: April 21, 2026
        </p>

        <Card className="rounded-none border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm mb-12">
          <CardContent className="p-8 md:p-12 space-y-10 font-poppins text-gray-700 dark:text-white/90">
            <section>
              <h2 className="text-2xl font-space font-bold mb-4 dark:text-white uppercase tracking-tight">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to Enov8 Technologies. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and protect your data when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-space font-bold mb-4 dark:text-white uppercase tracking-tight">2. Information We Collect</h2>
              <p className="mb-4">We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact Information (name, email address, phone number)</li>
                <li>Business Information (company name, industry)</li>
                <li>Technical Data (IP address, browser type, device information)</li>
                <li>Usage Data (how you interact with our website)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-space font-bold mb-4 dark:text-white uppercase tracking-tight">3. How We Use Your Information</h2>
              <p className="mb-4">We use personal information collected via our website for a variety of business purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and manage our services</li>
                <li>To send administrative information and updates</li>
                <li>To respond to user inquiries and offer support</li>
                <li>To improve our website and marketing efforts</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-space font-bold mb-4 dark:text-white uppercase tracking-tight">4. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-space font-bold mb-4 dark:text-white uppercase tracking-tight">5. Your Privacy Rights</h2>
              <p className="leading-relaxed">
                Depending on your location (such as the EU/EEA), you may have certain rights under applicable data protection laws. These may include the right to request access to and obtain a copy of your personal information, to request rectification or erasure, and to restrict the processing of your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-space font-bold mb-4 dark:text-white uppercase tracking-tight">6. Cookies and Tracking</h2>
              <p className="leading-relaxed">
                We use cookies and similar tracking technologies to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Banner and Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-space font-bold mb-4 dark:text-white uppercase tracking-tight">7. Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions or comments about this policy, you may email us at <a href="mailto:contact@enov8technologies.com" className="text-light-primary hover:underline font-bold">contact@enov8technologies.com</a>.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
