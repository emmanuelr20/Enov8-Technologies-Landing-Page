import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Enov8 Technologies - The rules of our engagement.",
};

const sections = [
  { heading: "1. Agreement to Terms", paragraphs: ["By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access our services."] },
  { heading: "2. Intellectual Property", paragraphs: ["The content, features, and functionality of this website are owned by Enov8 Technologies and are protected by international copyright, trademark, patent, and other intellectual property laws."] },
  { heading: "3. User Conduct", paragraphs: ["You agree not to use our services for any purpose that is unlawful or prohibited by these Terms. This includes, but is not limited to:"], list: ["Attempting to interfere with the proper working of the site", "Using automated means to access the site", "Uploading malicious code or content", "Violating the privacy of other users"] },
  { heading: "4. Limitation of Liability", paragraphs: ["In no event shall Enov8 Technologies be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, or other intangible losses."] },
  { heading: "5. Service Modifications", paragraphs: ["We reserve the right to withdraw or amend our services, and any material we provide on the website, in our sole discretion without notice."] },
  { heading: "6. Governing Law", paragraphs: ["These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions."] },
  { heading: "7. Changes to Terms", paragraphs: ["We reserve the right, at our sole discretion, to modify or replace these terms at any time. By continuing to access our services after those revisions become effective, you agree to be bound by the revised terms."] },
];

export default function TermsOfService() {
  return <LegalPage title="Terms of Service" updated="April 21, 2026" sections={sections} />;
}
