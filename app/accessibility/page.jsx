import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Accessibility Statement",
  description: "Accessibility Statement for Enov8 Technologies - Our commitment to inclusivity.",
};

export default function Accessibility() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-bg-light dark:bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-space font-bold mb-8 dark:text-white uppercase tracking-tighter">
          Accessibility Statement
        </h1>
        <p className="text-gray-600 dark:text-zinc-400 mb-12 font-poppins text-lg">
          Last updated: April 21, 2026
        </p>

        <Card className="rounded-none border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm mb-12">
          <CardContent className="p-8 md:p-12 space-y-10 font-poppins text-gray-700 dark:text-zinc-300">
            <section>
              <h2 className="text-2xl font-space font-bold mb-4 dark:text-white uppercase tracking-tight">1. Commitment to Accessibility</h2>
              <p className="leading-relaxed">
                Enov8 Technologies is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-space font-bold mb-4 dark:text-white uppercase tracking-tight">2. Conformance Status</h2>
              <p className="leading-relaxed">
                The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. Enov8 Technologies is working towards meeting <strong>WCAG 2.1 Level AA</strong> standards across our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-space font-bold mb-4 dark:text-white uppercase tracking-tight">3. Accessibility Features</h2>
              <p className="mb-4">We are implementing the following features to enhance accessibility:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Descriptive alt text for all meaningful images</li>
                <li>Keyboard-accessible navigation and focus states</li>
                <li>Sufficient color contrast ratios for text readability</li>
                <li>Semantic HTML structure for screen readers</li>
                <li>Responsive design that supports text resizing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-space font-bold mb-4 dark:text-white uppercase tracking-tight">4. Feedback</h2>
              <p className="leading-relaxed">
                We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers by emailing us at <a href="mailto:accessibility@enov8technologies.com" className="text-light-primary hover:underline font-bold">accessibility@enov8technologies.com</a>. We try to respond to feedback within 5 business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-space font-bold mb-4 dark:text-white uppercase tracking-tight">5. Technical Specifications</h2>
              <p className="leading-relaxed">
                Accessibility of Enov8 Technologies relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer: HTML, WAI-ARIA, CSS, and JavaScript.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
