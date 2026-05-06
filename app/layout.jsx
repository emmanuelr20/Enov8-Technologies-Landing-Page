import "./globals.css";
import Script from "next/script";
import "../styles/performance.css";
import Navbar from "./layouts/Navbar.jsx";
import Analytics from "@/components/Analytics";
import TawkMessenger from "@/components/TawkMessenger";

import CookieBanner from "@/components/CookieBanner";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/sonner";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://enov8technologies.com"),
  title: {
    default:
      "Enov8 Technologies - Custom Software Development & Digital Solutions",
    template: "%s | Enov8 Technologies",
  },
  description:
    "Leading software development company specializing in custom mobile apps, web applications, enterprise solutions, and digital transformation. Expert React Native, Next.js, and full-stack development services.",
  keywords: [
    "custom software development",
    "mobile app development",
    "web application development",
    "enterprise solutions",
    "technology training",
    "digital transformation",
    "React Native development",
    "Next.js development",
    "fintech solutions",
    "e-commerce development",
    "UI/UX design",
    "full-stack development",
    "software consulting",
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
      "Enov8 Technologies - Custom Software Development & Digital Solutions",
    description:
      "Leading software development company specializing in custom mobile apps, web applications, enterprise solutions, and digital transformation.",
    url: "https://enov8technologies.com",
    siteName: "Enov8 Technologies",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "https://enov8technologies.com/brand/image.png",
        width: 1200,
        height: 630,
        alt: "Enov8 Technologies - Custom Software Development",
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
      "Enov8 Technologies - Custom Software Development & Digital Solutions",
    description:
      "Leading software development company specializing in custom mobile apps, web applications, enterprise solutions, and digital transformation.",
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
    "Leading software development company specializing in custom mobile apps, web applications, enterprise solutions, and digital transformation.",
  foundingDate: "2020",
  slogan: "Building custom solutions that drive business growth",
  knowsAbout: [
    "Software Development",
    "Mobile App Development",
    "Web Development",
    "Enterprise Solutions",
    "Digital Transformation",
    "UI/UX Design",
    "React Native",
    "Next.js",
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
    name: "Software Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          description: "Custom iOS and Android mobile applications",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Application Development",
          description: "Scalable web applications and websites",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enterprise Solutions",
          description: "Custom enterprise software and systems",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Transformation",
          description: "End-to-end digital transformation consulting",
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
      className="overflow-x-hidden max-w-full"
    >
      <body
        className={`${inter.variable} min-h-svh text-foreground bg-background overflow-x-hidden antialiased`}
        suppressHydrationWarning
      >
        {/* Organization Schema */}
        <Script id="organization-jsonld" type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </Script>
        {/* WebSite Schema — enables Sitelinks Search Box in Google */}
        <Script id="website-jsonld" type="application/ld+json">
          {JSON.stringify(jsonLdWebsite)}
        </Script>
        <Analytics />
        <Navbar />
        {children}
        <ScrollToTop />

        <CookieBanner />
        <Toaster position="top-right" richColors />
        {/* <TawkMessenger /> */}
      </body>
    </html>
  );
}
