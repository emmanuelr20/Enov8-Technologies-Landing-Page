import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Enov8 Technologies - How we protect your data.",
};

const sections = [
  { heading: "1. Introduction", paragraphs: ["Welcome to Enov8 Technologies. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and protect your data when you visit our website or use our services."] },
  { heading: "2. Information We Collect", paragraphs: ["We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, including:"], list: ["Contact Information (name, email address, phone number)", "Business Information (company name, industry)", "Technical Data (IP address, browser type, device information)", "Usage Data (how you interact with our website)"] },
  { heading: "3. How We Use Your Information", paragraphs: ["We use personal information collected via our website for a variety of business purposes, including:"], list: ["To provide and manage our services", "To send administrative information and updates", "To respond to user inquiries and offer support", "To improve our website and marketing efforts", "To comply with legal obligations"] },
  { heading: "4. Data Security", paragraphs: ["We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure."] },
  { heading: "5. Your Privacy Rights", paragraphs: ["Depending on your location (such as the EU/EEA), you may have certain rights under applicable data protection laws. These may include the right to request access to and obtain a copy of your personal information, to request rectification or erasure, and to restrict the processing of your personal information."] },
  { heading: "6. Cookies and Tracking", paragraphs: ["We use cookies and similar tracking technologies to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Banner and Policy."] },
  { heading: "7. Contact Us", paragraphs: [<>If you have questions or comments about this policy, you may email us at <a href="mailto:contact@enov8technologies.com" className="focus-ring rounded-sm text-brand hover:underline">contact@enov8technologies.com</a>.</>] },
];

export default function PrivacyPolicy() {
  return <LegalPage title="Privacy Policy" updated="April 21, 2026" sections={sections} />;
}
