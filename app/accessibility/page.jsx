import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Accessibility Statement",
  description: "Accessibility Statement for Enov8 Technologies - Our commitment to inclusivity.",
};

const sections = [
  { heading: "1. Commitment to Accessibility", paragraphs: ["Enov8 Technologies is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards."] },
  { heading: "2. Conformance Status", paragraphs: ["The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. Enov8 Technologies is working towards meeting WCAG 2.1 Level AA standards across our platform."] },
  { heading: "3. Accessibility Features", paragraphs: ["We are implementing the following features to enhance accessibility:"], list: ["Descriptive alt text for all meaningful images", "Keyboard-accessible navigation and focus states", "Sufficient color contrast ratios for text readability", "Semantic HTML structure for screen readers", "Responsive design that supports text resizing"] },
  { heading: "4. Feedback", paragraphs: [<>We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers by emailing us at <a href="mailto:accessibility@enov8technologies.com" className="focus-ring rounded-sm text-brand hover:underline">accessibility@enov8technologies.com</a>. We try to respond to feedback within 5 business days.</>] },
  { heading: "5. Technical Specifications", paragraphs: ["Accessibility of Enov8 Technologies relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer: HTML, WAI-ARIA, CSS, and JavaScript."] },
];

export default function Accessibility() {
  return <LegalPage title="Accessibility Statement" updated="April 21, 2026" sections={sections} />;
}
