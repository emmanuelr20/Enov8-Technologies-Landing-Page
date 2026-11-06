import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seoMetadata";

export const metadata = pageMetadata({
  title: "Accessibility Statement",
  description: "Enov8 Technologies' commitment to digital accessibility and inclusive design.",
  path: "/accessibility",
});

const toc = [
  { id: "commitment-to-accessibility", label: "1. Commitment to Accessibility" },
  { id: "conformance-status", label: "2. Conformance Status" },
  { id: "accessibility-features", label: "3. Accessibility Features" },
  { id: "feedback", label: "4. Feedback" },
  { id: "technical-specifications", label: "5. Technical Specifications" },
];

export default function Accessibility() {
  return (
    <LegalPage title="Accessibility Statement" updated="April 21, 2026" path="/accessibility" toc={toc}>

            <section id="commitment-to-accessibility">
              <h2>
                1. Commitment to Accessibility
              </h2>
              <p>
                Enov8 Technologies is committed to ensuring digital
                accessibility for people with disabilities. We are continually
                improving the user experience for everyone and applying the
                relevant accessibility standards.
              </p>
            </section>

            <section id="conformance-status">
              <h2>
                2. Conformance Status
              </h2>
              <p>
                The Web Content Accessibility Guidelines (WCAG) defines
                requirements for designers and developers to improve
                accessibility for people with disabilities. Enov8 Technologies
                is working towards meeting <strong>WCAG 2.1 Level AA</strong>{" "}
                standards across our platform.
              </p>
            </section>

            <section id="accessibility-features">
              <h2>
                3. Accessibility Features
              </h2>
              <p>
                We are implementing the following features to enhance
                accessibility:
              </p>
              <ul>
                <li>Descriptive alt text for all meaningful images</li>
                <li>Keyboard-accessible navigation and focus states</li>
                <li>Sufficient color contrast ratios for text readability</li>
                <li>Semantic HTML structure for screen readers</li>
                <li>Responsive design that supports text resizing</li>
              </ul>
            </section>

            <section id="feedback">
              <h2>
                4. Feedback
              </h2>
              <p>
                We welcome your feedback on the accessibility of our website.
                Please let us know if you encounter accessibility barriers by
                emailing us at{" "}
                <a href="mailto:accessibility@enov8technologies.com">
                  accessibility@enov8technologies.com
                </a>
                . We try to respond to feedback within 5 business days.
              </p>
            </section>

            <section id="technical-specifications">
              <h2>
                5. Technical Specifications
              </h2>
              <p>
                Accessibility of Enov8 Technologies relies on the following
                technologies to work with the particular combination of web
                browser and any assistive technologies or plugins installed on
                your computer: HTML, WAI-ARIA, CSS, and JavaScript.
              </p>
            </section>
    </LegalPage>
  );
}
