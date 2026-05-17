import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Accessibility Statement",
  description:
    "Accessibility Statement for Enov8 Technologies - Our commitment to inclusivity.",
};

export default function Accessibility() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 lg:px-30">
        <h2 className="mb-2 text-[#23252d] dark:text-white uppercase tracking-tighter">
          Accessibility Statement
        </h2>
        <p className="dark:text-white/90 mb-8">
          Last updated: April 21, 2026
        </p>

        <Card className="rounded-none border-none bg-transparent! shadow-none mb-12 max-w-4xl">
          <CardContent className="space-y-8 text-gray-700 dark:text-white/90">
            <section>
              <h3 className="mb-4 font-semibold dark:text-white uppercase tracking-tight">
                1. Commitment to Accessibility
              </h3>
              <p>
                Enov8 Technologies is committed to ensuring digital
                accessibility for people with disabilities. We are continually
                improving the user experience for everyone and applying the
                relevant accessibility standards.
              </p>
            </section>

            <section>
              <h3 className="mb-4 font-semibold dark:text-white uppercase tracking-tight">
                2. Conformance Status
              </h3>
              <p>
                The Web Content Accessibility Guidelines (WCAG) defines
                requirements for designers and developers to improve
                accessibility for people with disabilities. Enov8 Technologies
                is working towards meeting <strong>WCAG 2.1 Level AA</strong>{" "}
                standards across our platform.
              </p>
            </section>

            <section>
              <h3 className="mb-4 font-semibold dark:text-white uppercase tracking-tight">
                3. Accessibility Features
              </h3>
              <p className="mb-4">
                We are implementing the following features to enhance
                accessibility:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Descriptive alt text for all meaningful images</li>
                <li>Keyboard-accessible navigation and focus states</li>
                <li>Sufficient color contrast ratios for text readability</li>
                <li>Semantic HTML structure for screen readers</li>
                <li>Responsive design that supports text resizing</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-4 font-semibold dark:text-white uppercase tracking-tight">
                4. Feedback
              </h3>
              <p>
                We welcome your feedback on the accessibility of our website.
                Please let us know if you encounter accessibility barriers by
                emailing us at{" "}
                <a
                  href="mailto:accessibility@enov8technologies.com"
                  className="text-light-primary hover:underline"
                >
                  accessibility@enov8technologies.com
                </a>
                . We try to respond to feedback within 5 business days.
              </p>
            </section>

            <section>
              <h3 className="mb-4 font-semibold dark:text-white uppercase tracking-tight">
                5. Technical Specifications
              </h3>
              <p>
                Accessibility of Enov8 Technologies relies on the following
                technologies to work with the particular combination of web
                browser and any assistive technologies or plugins installed on
                your computer: HTML, WAI-ARIA, CSS, and JavaScript.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
