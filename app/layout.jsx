import "./globals.css";
import Navbar from "./layouts/Navbar.jsx";
import Analytics from "@/components/Analytics";
import { Space_Grotesk } from "next/font/google";
import { Mulish } from "next/font/google";
import Head from "next/head";

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const mulish = Mulish({
  variable: "--font-mulish",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Enov8 Technologies - Custom Software Development & Digital Solutions",
    template: "%s | Enov8 Technologies",
  },
  description: "Leading software development company specializing in custom mobile apps, web applications, enterprise solutions, and digital transformation. Expert React Native, Next.js, and full-stack development services.",
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
    "African tech solutions"
  ],
  authors: [{ name: "Enov8 Technologies", url: "https://enov8technologies.com" }],
  creator: "Enov8 Technologies",
  publisher: "Enov8 Technologies",
  category: "Technology",
  classification: "Software Development Company",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/icon.png",
    apple: [
      { url: "/icon.png", sizes: "180x180", type: "image/png" }
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Enov8 Technologies - Custom Software Development & Digital Solutions",
    description: "Leading software development company specializing in custom mobile apps, web applications, enterprise solutions, and digital transformation.",
    url: "https://enov8technologies.com",
    siteName: "Enov8 Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://enov8technologies.com/image.png",
        width: 1200,
        height: 630,
        alt: "Enov8 Technologies - Custom Software Development",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enov8 Technologies - Custom Software Development & Digital Solutions",
    description: "Leading software development company specializing in custom mobile apps, web applications, enterprise solutions, and digital transformation.",
    images: ["https://enov8technologies.com/image.png"],
    creator: "@enov8tech",
  },
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
  alternates: {
    canonical: "https://enov8technologies.com",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
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
    url: "https://enov8technologies.com/icon.png",
    width: 512,
    height: 512
  },
  image: "https://enov8technologies.com/image.png",
  description: "Leading software development company specializing in custom mobile apps, web applications, enterprise solutions, and digital transformation.",
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
    "Next.js"
  ],
  serviceArea: {
    "@type": "Place",
    name: "Global"
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Nigeria"
    },
    {
      "@type": "Continent", 
      name: "Africa"
    },
    "Global"
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+2347064838988",
      contactType: "customer service",
      email: "contact@enov8technologies.com",
      areaServed: "Global",
      availableLanguage: ["English"],
      contactOption: "TollFree"
    },
    {
      "@type": "ContactPoint",
      url: "https://wa.me/2347064838988",
      contactType: "customer support",
      availableLanguage: ["English"]
    }
  ],
  sameAs: [
    "https://linkedin.com/company/enov8technologies",
    "https://twitter.com/enov8tech",
    "https://github.com/enov8technologies"
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
          description: "Custom iOS and Android mobile applications"
        }
      },
      {
        "@type": "Offer", 
        itemOffered: {
          "@type": "Service",
          name: "Web Application Development",
          description: "Scalable web applications and websites"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service", 
          name: "Enterprise Solutions",
          description: "Custom enterprise software and systems"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Transformation",
          description: "End-to-end digital transformation consulting"
        }
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="canonical" href="https://enov8technologies.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          key="organization-jsonld"
        />
      </Head>
      <body
        className={`${mulish.variable} ${space.variable} text-zinc-900 bg-bg-light dark:bg-black overflow-x-hidden
        `}
      >
        <Analytics />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
