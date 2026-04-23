// import "./globals.css";
// import Script from "next/script";
// import "../styles/performance.css";
// import Navbar from "./layouts/Navbar.jsx";
// import Analytics from "@/components/Analytics";
// import TawkChat from "@/components/TawkChat";
// import CookieBanner from "@/components/CookieBanner";
// import { Toaster } from "@/components/ui/sonner";
// import { Space_Grotesk, Poppins } from "next/font/google";

// const space = Space_Grotesk({
//   variable: "--font-space",
//   subsets: ["latin"],
//   weight: ["700"],
//   display: "swap",
// });

// const poppins = Poppins({
//   variable: "--font-poppins",
//   weight: ["300", "400", "500", "600", "700"],
//   subsets: ["latin"],
//   display: "swap",
// });

// export const metadata = {
//   title: {
//     default:
//       "Enov8 Technologies - Custom Software Development & Digital Solutions",
//     template: "%s | Enov8 Technologies",
//   },
//   description:
//     "Leading software development company specializing in custom mobile apps, web applications, enterprise solutions, and digital transformation. Expert React Native, Next.js, and full-stack development services.",
//   keywords: [
//     "custom software development",
//     "mobile app development",
//     "web application development",
//     "enterprise solutions",
//     "technology training",
//     "digital transformation",
//     "React Native development",
//     "Next.js development",
//     "fintech solutions",
//     "e-commerce development",
//     "UI/UX design",
//     "full-stack development",
//     "software consulting",
//     "Nigeria software company",
//     "African tech solutions",
//   ],
//   authors: [
//     { name: "Enov8 Technologies", url: "https://enov8technologies.com" },
//   ],
//   creator: "Enov8 Technologies",
//   publisher: "Enov8 Technologies",
//   category: "Technology",
//   classification: "Software Development Company",
//   icons: {
//     icon: [
//       { url: "/logo.svg", type: "image/svg+xml" },
//       { url: "/icon.png", sizes: "32x32", type: "image/png" },
//       { url: "/icon.png", sizes: "16x16", type: "image/png" },
//     ],
//     shortcut: "/logo.svg",
//     apple: [
//       { url: "/logo.svg", type: "image/svg+xml" },
//       { url: "/icon.png", sizes: "180x180", type: "image/png" },
//     ],
//   },
//   manifest: "/manifest.json",
//   openGraph: {
//     title:
//       "Enov8 Technologies - Custom Software Development & Digital Solutions",
//     description:
//       "Leading software development company specializing in custom mobile apps, web applications, enterprise solutions, and digital transformation.",
//     url: "https://enov8technologies.com",
//     siteName: "Enov8 Technologies",
//     locale: "en_US",
//     type: "website",
//     images: [
//       {
//         url: "https://enov8technologies.com/image.png",
//         width: 1200,
//         height: 630,
//         alt: "Enov8 Technologies - Custom Software Development",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title:
//       "Enov8 Technologies - Custom Software Development & Digital Solutions",
//     description:
//       "Leading software development company specializing in custom mobile apps, web applications, enterprise solutions, and digital transformation.",
//     images: ["https://enov8technologies.com/image.png"],
//     creator: "@enov8tech",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     nocache: false,
//     googleBot: {
//       index: true,
//       follow: true,
//       noimageindex: false,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   alternates: {
//     canonical: "https://enov8technologies.com",
//   },
//   verification: {
//     google: "your-google-verification-code",
//     yandex: "your-yandex-verification-code",
//     other: {
//       "msvalidate.01": "your-bing-verification-code",
//       "facebook-domain-verification": "74co610l5o1qwid0ar9la9hk4s0qmn",
//     },
//   },
// };

// const jsonLd = {
//   "@context": "https://schema.org",
//   "@type": "Organization",
//   name: "Enov8 Technologies",
//   alternateName: "Enov8 Tech",
//   url: "https://enov8technologies.com",
//   logo: {
//     "@type": "ImageObject",
//     url: "https://enov8technologies.com/logo.svg",
//     width: 300,
//     height: 301,
//   },
//   image: "https://enov8technologies.com/image.png",
//   description:
//     "Leading software development company specializing in custom mobile apps, web applications, enterprise solutions, and digital transformation.",
//   foundingDate: "2020",
//   slogan: "Building custom solutions that drive business growth",
//   knowsAbout: [
//     "Software Development",
//     "Mobile App Development",
//     "Web Development",
//     "Enterprise Solutions",
//     "Digital Transformation",
//     "UI/UX Design",
//     "React Native",
//     "Next.js",
//   ],
//   serviceArea: {
//     "@type": "Place",
//     name: "Global",
//   },
//   areaServed: [
//     {
//       "@type": "Country",
//       name: "Nigeria",
//     },
//     {
//       "@type": "Continent",
//       name: "Africa",
//     },
//     "Global",
//   ],
//   contactPoint: [
//     {
//       "@type": "ContactPoint",
//       telephone: "+2347064838988",
//       contactType: "customer service",
//       email: "contact@enov8technologies.com",
//       areaServed: "Global",
//       availableLanguage: ["English"],
//       contactOption: "TollFree",
//     },
//     {
//       "@type": "ContactPoint",
//       url: "https://wa.me/2347064838988",
//       contactType: "customer support",
//       availableLanguage: ["English"],
//     },
//   ],
//   sameAs: [
//     "https://linkedin.com/company/enov8technologies",
//     "https://twitter.com/enov8tech",
//     "https://github.com/enov8technologies",
//     "https://youtube.com/@enov8technologies",
//     "https://medium.com/@enov8technologies",
//     "https://dribbble.com/enov8technologies",
//     "https://clutch.co/profile/enov8-technologies",
//     "https://www.goodfirms.co/company/enov8-technologies",
//   ],
//   hasOfferCatalog: {
//     "@type": "OfferCatalog",
//     name: "Software Development Services",
//     itemListElement: [
//       {
//         "@type": "Offer",
//         itemOffered: {
//           "@type": "Service",
//           name: "Mobile App Development",
//           description: "Custom iOS and Android mobile applications",
//         },
//       },
//       {
//         "@type": "Offer",
//         itemOffered: {
//           "@type": "Service",
//           name: "Web Application Development",
//           description: "Scalable web applications and websites",
//         },
//       },
//       {
//         "@type": "Offer",
//         itemOffered: {
//           "@type": "Service",
//           name: "Enterprise Solutions",
//           description: "Custom enterprise software and systems",
//         },
//       },
//       {
//         "@type": "Offer",
//         itemOffered: {
//           "@type": "Service",
//           name: "Digital Transformation",
//           description: "End-to-end digital transformation consulting",
//         },
//       },
//     ],
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${poppins.variable} ${space.variable} text-zinc-900 bg-bg-light dark:bg-black overflow-x-hidden`}
//       >
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//           key="organization-jsonld"
//         />
//         <Analytics />
//         <Navbar />
//         {children}
//         <TawkChat />
//         <CookieBanner />
//         <Toaster position="top-right" richColors />
//       </body>
//     </html>
//   );
// }


import "./globals.css";
import Script from "next/script";
import "../styles/performance.css";
import Navbar from "./layouts/Navbar.jsx";
import Analytics from "@/components/Analytics";
import TawkChat from "@/components/TawkChat";
import CookieBanner from "@/components/CookieBanner";
import { Toaster } from "@/components/ui/sonner";
import { Space_Grotesk, Poppins } from "next/font/google";

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
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
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/logo.svg",
    apple: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
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
        url: "https://enov8technologies.com/image.png",
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
  alternates: {
    canonical: "https://enov8technologies.com",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
      "facebook-domain-verification": "jv7a171bahivn7i9ahydel0vxuorgf",
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
    url: "https://enov8technologies.com/logo.svg",
    width: 300,
    height: 301,
  },
  image: "https://enov8technologies.com/image.png",
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
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://enov8technologies.com/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${poppins.variable} ${space.variable} text-zinc-900 bg-bg-light dark:bg-black overflow-x-hidden`}
        suppressHydrationWarning
      >
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          key="organization-jsonld"
        />
        {/* WebSite Schema — enables Sitelinks Search Box in Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
          key="website-jsonld"
        />
        <Analytics />
        <Navbar />
        {children}
        <TawkChat />
        <CookieBanner />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}