import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Enov8 Technologies - How we protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 lg:px-30">
        <h2 className="mb-2 dark:text-white text-[#23252d] uppercase tracking-tighter">
          Privacy Policy
        </h2>
        <p className="dark:text-white/90 mb-8">
          Last updated: April 21, 2026
        </p>

        <Card className="rounded-none border-none bg-transparent! shadow-none mb-12 max-w-4xl">
          <CardContent className="space-y-8 text-gray-700 dark:text-white/90">
            <section>
              <h3 className="mb-4 font-semibold dark:text-white uppercase tracking-tight">
                1. Introduction
              </h3>
              <p>
                Welcome to Enov8 Technologies. We are committed to protecting
                your personal information and your right to privacy. This
                Privacy Policy explains how we collect, use, and protect your
                data when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h3 className="mb-4 font-semibold dark:text-white uppercase tracking-tight">
                2. Information We Collect
              </h3>
              <p className="mb-4">
                We collect personal information that you voluntarily provide to
                us when you express an interest in obtaining information about
                us or our products and services, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact Information (name, email address, phone number)</li>
                <li>Business Information (company name, industry)</li>
                <li>
                  Technical Data (IP address, browser type, device information)
                </li>
                <li>Usage Data (how you interact with our website)</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-4 font-semibold dark:text-white uppercase tracking-tight">
                3. How We Use Your Information
              </h3>
              <p className="mb-4">
                We use personal information collected via our website for a
                variety of business purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and manage our services</li>
                <li>To send administrative information and updates</li>
                <li>To respond to user inquiries and offer support</li>
                <li>To improve our website and marketing efforts</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-4 font-semibold dark:text-white uppercase tracking-tight">
                4. Data Security
              </h3>
              <p>
                We implement appropriate technical and organizational security
                measures designed to protect the security of any personal
                information we process. However, please also remember that we
                cannot guarantee that the internet itself is 100% secure.
              </p>
            </section>

            <section>
              <h3 className="mb-4 font-semibold dark:text-white uppercase tracking-tight">
                5. Your Privacy Rights
              </h3>
              <p>
                Depending on your location (such as the EU/EEA), you may have
                certain rights under applicable data protection laws. These may
                include the right to request access to and obtain a copy of your
                personal information, to request rectification or erasure, and
                to restrict the processing of your personal information.
              </p>
            </section>

            <section>
              <h3 className="mb-4 font-semibold dark:text-white uppercase tracking-tight">
                6. Cookies and Tracking
              </h3>
              <p>
                We use cookies and similar tracking technologies to access or
                store information. Specific information about how we use such
                technologies and how you can refuse certain cookies is set out
                in our Cookie Banner and Policy.
              </p>
            </section>

            <section>
              <h3 className="mb-4 font-semibold dark:text-white uppercase tracking-tight">
                7. Contact Us
              </h3>
              <p>
                If you have questions or comments about this policy, you may
                email us at{" "}
                <a
                  href="mailto:contact@enov8technologies.com"
                  className="text-light-primary hover:underline"
                >
                  contact@enov8technologies.com
                </a>
                .
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
