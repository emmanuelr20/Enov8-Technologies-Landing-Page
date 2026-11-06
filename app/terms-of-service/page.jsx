import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seoMetadata";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: "The terms that govern your use of the Enov8 Technologies website and services.",
  path: "/terms-of-service",
});

const toc = [
  { id: "agreement-to-terms", label: "1. Agreement to Terms" },
  { id: "intellectual-property", label: "2. Intellectual Property" },
  { id: "user-conduct", label: "3. User Conduct" },
  { id: "limitation-of-liability", label: "4. Limitation of Liability" },
  { id: "service-modifications", label: "5. Service Modifications" },
  { id: "governing-law", label: "6. Governing Law" },
  { id: "changes-to-terms", label: "7. Changes to Terms" },
];

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" updated="April 21, 2026" path="/terms-of-service" toc={toc}>

            <section id="agreement-to-terms">
              <h2>
                1. Agreement to Terms
              </h2>
              <p>
                By accessing or using our website and services, you agree to be
                bound by these Terms of Service. If you do not agree with any
                part of these terms, you may not access our services.
              </p>
            </section>

            <section id="intellectual-property">
              <h2>
                2. Intellectual Property
              </h2>
              <p>
                The content, features, and functionality of this website are
                owned by Enov8 Technologies and are protected by international
                copyright, trademark, patent, and other intellectual property
                laws.
              </p>
            </section>

            <section id="user-conduct">
              <h2>
                3. User Conduct
              </h2>
              <p>
                You agree not to use our services for any purpose that is
                unlawful or prohibited by these Terms. This includes, but is not
                limited to:
              </p>
              <ul>
                <li>
                  Attempting to interfere with the proper working of the site
                </li>
                <li>Using automated means to access the site</li>
                <li>Uploading malicious code or content</li>
                <li>Violating the privacy of other users</li>
              </ul>
            </section>

            <section id="limitation-of-liability">
              <h2>
                4. Limitation of Liability
              </h2>
              <p>
                In no event shall Enov8 Technologies be liable for any indirect,
                incidental, special, consequential, or punitive damages,
                including without limitation, loss of profits, data, use, or
                other intangible losses.
              </p>
            </section>

            <section id="service-modifications">
              <h2>
                5. Service Modifications
              </h2>
              <p>
                We reserve the right to withdraw or amend our services, and any
                material we provide on the website, in our sole discretion
                without notice.
              </p>
            </section>

            <section id="governing-law">
              <h2>
                6. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the Federal Republic of Nigeria, without regard
                to its conflict of law provisions.
              </p>
            </section>

            <section id="changes-to-terms">
              <h2>
                7. Changes to Terms
              </h2>
              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. By continuing to access our
                services after those revisions become effective, you agree to be
                bound by the revised terms.
              </p>
            </section>
    </LegalPage>
  );
}
