// Single source of truth for brand, contact and navigation data.
// Every page, the JSON-LD and the footer read from here.

export const SITE_URL = "https://enov8technologies.com";

export const site = {
  name: "Enov8 Technologies",
  legalName: "Enov8 Technologies Ltd.",
  shortName: "Enov8",
  url: SITE_URL,
  tagline: "Software & IT solutions that move business forward.",
  description:
    "Enov8 Technologies is a Lagos-based technology company delivering custom software development, cybersecurity, AI deployment, ERP, networking, Zoho implementations and managed IT services for businesses across Nigeria, Africa and beyond.",
  foundingDate: "2020",
  locale: "en_NG",
  ogImage: "/opengraph-image",
  logo: "/brand/logo.svg",
  brochure: "/docs/enov8technologies-brochure.pdf",
  booking: "https://user1-demo1912.zohobookings.com/#/4937930000000036076",
  contactWebhook: "https://enov8technologies.app.n8n.cloud/webhook/contact-form",
  // NOTE: placeholder endpoints carried over from the previous site — replace
  // with real n8n webhooks before the newsletter can work.
  newsletterSubscribeWebhook:
    "https://your-n8n-instance.com/webhook/newsletter-subscribe",
  address: {
    locality: "Lagos",
    region: "Lagos",
    country: "NG",
    countryName: "Nigeria",
  },
};

export const contact = {
  email: "contact@enov8technologies.com",
  salesEmail: "sales@enov8technologies.com",
  // The previous site displayed +234 913 363 2465 but dialled +234 706 483 8988.
  // Both are kept as-is; confirm which number is correct.
  phoneDisplay: "+234 913 363 2465",
  phoneHref: "tel:+2347064838988",
  phoneE164: "+2347064838988",
  whatsapp: "https://wa.me/2347064838988",
};

export const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/enov8-technologies/",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/enov8_technologies",
    icon: "instagram",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/Enov8Technologies",
    icon: "facebook",
  },
];

export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/#process" },
  { label: "Clients", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
];

export const legalNav = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

export const absoluteUrl = (path = "/") => new URL(path, SITE_URL).toString();
