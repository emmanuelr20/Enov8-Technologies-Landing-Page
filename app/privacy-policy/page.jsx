import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seoMetadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Enov8 Technologies collects, uses and protects your personal data.",
  path: "/privacy-policy",
});

const toc = [
  { id: "introduction", label: "1. Introduction" },
  { id: "information-we-collect", label: "2. Information We Collect" },
  { id: "how-we-use-your-information", label: "3. How We Use Your Information" },
  { id: "data-security", label: "4. Data Security" },
  { id: "your-privacy-rights", label: "5. Your Privacy Rights" },
  { id: "cookies-and-tracking", label: "6. Cookies and Tracking" },
  { id: "contact-us", label: "7. Contact Us" },
];

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="April 21, 2026" path="/privacy-policy" toc={toc}>

            <section id="introduction">
              <h2>
                1. Introduction
              </h2>
              <p>
                Welcome to Enov8 Technologies. We are committed to protecting
                your personal information and your right to privacy. This
                Privacy Policy explains how we collect, use, and protect your
                data when you visit our website or use our services.
              </p>
            </section>

            <section id="information-we-collect">
              <h2>
                2. Information We Collect
              </h2>
              <p>
                We collect personal information that you voluntarily provide to
                us when you express an interest in obtaining information about
                us or our products and services, including:
              </p>
              <ul>
                <li>Contact Information (name, email address, phone number)</li>
                <li>Business Information (company name, industry)</li>
                <li>
                  Technical Data (IP address, browser type, device information)
                </li>
                <li>Usage Data (how you interact with our website)</li>
              </ul>
            </section>

            <section id="how-we-use-your-information">
              <h2>
                3. How We Use Your Information
              </h2>
              <p>
                We use personal information collected via our website for a
                variety of business purposes, including:
              </p>
              <ul>
                <li>To provide and manage our services</li>
                <li>To send administrative information and updates</li>
                <li>To respond to user inquiries and offer support</li>
                <li>To improve our website and marketing efforts</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section id="data-security">
              <h2>
                4. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational security
                measures designed to protect the security of any personal
                information we process. However, please also remember that we
                cannot guarantee that the internet itself is 100% secure.
              </p>
            </section>

            <section id="your-privacy-rights">
              <h2>
                5. Your Privacy Rights
              </h2>
              <p>
                Depending on your location (such as the EU/EEA), you may have
                certain rights under applicable data protection laws. These may
                include the right to request access to and obtain a copy of your
                personal information, to request rectification or erasure, and
                to restrict the processing of your personal information.
              </p>
            </section>

            <section id="cookies-and-tracking">
              <h2>
                6. Cookies and Tracking
              </h2>
              <p>
                We use cookies and similar tracking technologies to access or
                store information. Specific information about how we use such
                technologies and how you can refuse certain cookies is set out
                in our Cookie Banner and Policy.
              </p>
            </section>

            <section id="contact-us">
              <h2>
                7. Contact Us
              </h2>
              <p>
                If you have questions or comments about this policy, you may
                email us at{" "}
                <a href="mailto:contact@enov8technologies.com">
                  contact@enov8technologies.com
                </a>
                .
              </p>
            </section>
    </LegalPage>
  );
}
