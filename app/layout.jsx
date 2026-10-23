import "./globals.css";
import localFont from "next/font/local";
import Script from "next/script";
import Navbar from "./layouts/Navbar.jsx";

import CookieBanner from "@/components/CookieBanner";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/sonner";

const geist = localFont({
  src: "../public/fonts/Geist-VariableFont_wght.ttf",
  weight: "100 900",
  style: "normal",
  variable: "--font-geist",
  display: "swap",
  preload: true,
});

export const metadata = {
  metadataBase: new URL("https://enov8technologies.com"),
  title: {
    default:
    "Enov8 Technologies - Connected Business Systems for Growing African Businesses",
    template: "%s | Enov8 Technologies",
  },
  description:
    "Enov8 helps growing African businesses replace fragmented operations with connected, secure business systems through practical implementation and ongoing support.",
  keywords: [
    "business systems transformation",
    "operations automation",
    "ERP implementation",
    "Zoho implementation",
    "business process automation",
    "systems integration",
    "secure business systems",
    "document management",
    "software modernization",
    "Nigeria software company",
    "African tech solutions",
  ],
  authors: [
    { name: "Enov8 Technologies", url: "https://enov8technologies.com" },
  ],
  creator: "Enov8 Technologies",
  publisher: "Enov8 Technologies",
  category: "Technology",
  classification: "Software Development Company",
  icons: {
    icon: [
      { url: "/brand/logo.svg", type: "image/svg+xml" },
      { url: "/brand/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/icon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/brand/logo.svg",
    apple: [
      { url: "/brand/logo.svg", type: "image/svg+xml" },
      { url: "/brand/icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/brand/manifest.json",
  openGraph: {
    title:
      "Enov8 Technologies - Connected Business Systems for Growing African Businesses",
    description:
      "Enov8 helps growing African businesses replace fragmented operations with connected, secure business systems.",
    url: "https://enov8technologies.com",
    siteName: "Enov8 Technologies",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "https://enov8technologies.com/brand/image.png",
        width: 1200,
        height: 630,
        alt: "Enov8 Technologies - Connected Business Systems",
      },
    ],
  },
  // Twitter/X card intentionally omitted — no active Twitter account
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "/" },
  verification: {
    other: { "facebook-domain-verification": "jv7a171bahivn7i9ahydel0vxuorgf" },
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Enov8 Technologies - Connected Business Systems for Growing African Businesses",
    description:
      "Enov8 helps growing African businesses replace fragmented operations with connected, secure business systems.",
    images: ["/brand/image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Enov8 Technologies",
  alternateName: "Enov8 Tech",
  url: "https://enov8technologies.com",
  logo: {
    "@type": "ImageObject",
    url: "https://enov8technologies.com/brand/logo.svg",
    width: 300,
    height: 301,
  },
  image: "https://enov8technologies.com/brand/image.png",
  description:
    "Enov8 helps growing African businesses replace fragmented operations with connected, secure business systems.",
  foundingDate: "2020",
  slogan: "Connected systems for businesses ready to operate better",
  knowsAbout: [
    "Business Systems Transformation",
    "Operations Automation",
    "ERP and Zoho Implementation",
    "Secure Infrastructure",
    "Software Modernization",
  ],
  serviceArea: {
    "@type": "Place",
    name: "Global",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Nigeria",
    },
    {
      "@type": "Continent",
      name: "Africa",
    },
    "Global",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+2347064838988",
      contactType: "customer service",
      email: "contact@enov8technologies.com",
      areaServed: "Global",
      availableLanguage: ["English"],
      contactOption: "TollFree",
    },
    {
      "@type": "ContactPoint",
      url: "https://wa.me/2347064838988",
      contactType: "customer support",
      availableLanguage: ["English"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/enov8-technologies/",
    "https://www.instagram.com/enov8_technologies",
    "https://www.facebook.com/Enov8Technologies",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Connected Business Systems",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Operations Automation",
          description: "Connected workflows that reduce manual operational work",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "ERP and Platform Implementation",
          description: "Business platforms configured around real operating processes",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Secure Infrastructure",
          description: "Reliable infrastructure and security foundations for growth",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Software Modernization",
          description: "Dependable software and system modernization for growing teams",
        },
      },
    ],
  },
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Enov8 Technologies",
  url: "https://enov8technologies.com",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geist.variable} overflow-x-hidden max-w-full`}
    >
      <body
        className="min-h-svh text-foreground bg-background overflow-x-hidden antialiased"
        suppressHydrationWarning
      >
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {/* Organization Schema */}
        <Script id="organization-jsonld" type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </Script>
        {/* WebSite Schema — enables Sitelinks Search Box in Google */}
        <Script id="website-jsonld" type="application/ld+json">
          {JSON.stringify(jsonLdWebsite)}
        </Script>
        <Navbar />
        {children}
        <ScrollToTop />

        <CookieBanner />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
