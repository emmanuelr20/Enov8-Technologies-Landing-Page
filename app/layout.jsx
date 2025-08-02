import "./globals.css";
import Navbar from "./layouts/Navbar.jsx";
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
    default: "Enov8 Technologies",
    template: "%s | Enov8 Technologies",
  },
  description: "Building custom solutions that drive business growth.",
  keywords: [
    "custom software development",
    "mobile app development",
    "web application development",
    "enterprise solutions",
    "technology training",
    "digital transformation",
    "React Native development",
    "Next.js development",
  ],
  authors: [{ name: "Enov8 Technologies" }],
  creator: "Enov8 Technologies",
  publisher: "Enov8 Technologies",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Enov8 Technologies",
    description: "Building custom solutions that drive business growth.",
    url: "https://enov8technologies.com",
    siteName: "Enov8 Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enov8 Technologies",
    description: "Building custom solutions that drive business growth.",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Enov8 Technologies",
  url: "https://enov8technologies.com",
  logo: "https://enov8technologies.com/logo.png",
  description: "Building custom solutions that drive business growth.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+2347064838988",
    contactType: "customer service",
    email: "contact@enov8technologies.com",
    areaServed: "Global",
    availableLanguage: "English",
  },
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
