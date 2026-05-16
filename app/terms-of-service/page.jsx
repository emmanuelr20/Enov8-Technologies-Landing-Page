import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Enov8 Technologies - The rules of our engagement.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 lg:px-30">
        <h2 className="mb-4 dark:text-white uppercase tracking-tighter">
          Terms of Service
        </h2>
        <p className="dark:text-white/90 mb-8">
          Last updated: April 21, 2026
        </p>

        <Card className="rounded-none border-none bg-transparent! shadow-none mb-12 max-w-4xl">
          <CardContent className="space-y-8 text-gray-700 dark:text-white/90">
            <section>
              <h3 className="mb-4 font-semibold dark:text-white uppercase tracking-tight">
                1. Agreement to Terms
              </h3>
              <p>
                By accessing or using our website and services, you agree to be
                bound by these Terms of Service. If you do not agree with any
                part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h3 className="mb-4 font-semibold dark:text-white uppercase tracking-tight">
                2. Intellectual Property
              </h3>
              <p>
                The content, features, and functionality of this website are
                owned by Enov8 Technologies and are protected by international
                copyright, trademark, patent, and other intellectual property
                laws.
              </p>
            </section>

            <section>
              <h3 className="mb-4 font-semibold dark:text-white uppercase tracking-tight">
                3. User Conduct
              </h3>
              <p className="mb-4">
                You agree not to use our services for any purpose that is
                unlawful or prohibited by these Terms. This includes, but is not
                limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Attempting to interfere with the proper working of the site
                </li>
                <li>Using automated means to access the site</li>
                <li>Uploading malicious code or content</li>
                <li>Violating the privacy of other users</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-4 font-semibold dark:text-white uppercase tracking-tight">
                4. Limitation of Liability
              </h3>
              <p>
                In no event shall Enov8 Technologies be liable for any indirect,
                incidental, special, consequential, or punitive damages,
                including without limitation, loss of profits, data, use, or
                other intangible losses.
              </p>
            </section>

            <section>
              <h3 className="mb-4 font-semibold dark:text-white uppercase tracking-tight">
                5. Service Modifications
              </h3>
              <p>
                We reserve the right to withdraw or amend our services, and any
                material we provide on the website, in our sole discretion
                without notice.
              </p>
            </section>

            <section>
              <h3 className="mb-4 font-semibold dark:text-white uppercase tracking-tight">
                6. Governing Law
              </h3>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the Federal Republic of Nigeria, without regard
                to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h3 className="mb-4 font-semibold dark:text-white uppercase tracking-tight">
                7. Changes to Terms
              </h3>
              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. By continuing to access our
                services after those revisions become effective, you agree to be
                bound by the revised terms.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
