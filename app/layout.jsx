import "./globals.css";
import { Bricolage_Grotesque, Geist, Instrument_Serif } from "next/font/google";
import Analytics from "@/components/Analytics";
import CookieBanner from "@/components/CookieBanner";
import Interactions from "@/components/Interactions";
import JsonLd from "@/components/JsonLd";
import ContactDialog from "@/components/site/ContactDialog";
import Footer from "@/components/site/Footer";
import Navbar from "@/components/site/Navbar";
import { services } from "@/lib/servicesData";
import { SITE_URL, absoluteUrl, contact, site, socials } from "@/lib/site";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["italic"],
  variable: "--font-instrument",
  display: "swap",
  preload: false, // accent face only; let the display + body fonts win the bandwidth
});

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f3ee" },
    { media: "(prefers-color-scheme: dark)", color: "#06070b" },
  ],
  colorScheme: "light dark",
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — Connected Business Systems for Growing African Businesses`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "business systems transformation",
    "operations automation",
    "systems integration",
    "software development company Nigeria",
    "IT solutions Lagos",
    "custom software development",
    "mobile app development",
    "cyber security Nigeria",
    "AI deployment",
    "ERP deployment",
    "Zoho partner Nigeria",
    "business automation",
    "networking solutions",
    "digital transformation Africa",
  ],
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  publisher: site.name,
  category: "Technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: SITE_URL,
    siteName: site.name,
    title: `${site.name} — Software Development & IT Solutions`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Software Development & IT Solutions`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/brand/logo.svg", type: "image/svg+xml" },
      { url: "/brand/icon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/brand/logo.svg",
    apple: [{ url: "/brand/icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/brand/manifest.json",
  verification: {
    other: { "facebook-domain-verification": "jv7a171bahivn7i9ahydel0vxuorgf" },
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: site.name,
      legalName: site.legalName,
      alternateName: "Enov8 Tech",
      slogan: "Connected systems for businesses ready to operate better",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: absoluteUrl(site.logo), width: 300, height: 301 },
      image: absoluteUrl(site.ogImage),
      description: site.description,
      foundingDate: site.foundingDate,
      email: contact.email,
      telephone: contact.phoneE164,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
      areaServed: [
        { "@type": "Country", name: "Nigeria" },
        { "@type": "Continent", name: "Africa" },
        "Worldwide",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: contact.phoneE164,
          email: contact.email,
          contactType: "customer service",
          areaServed: "Worldwide",
          availableLanguage: ["English"],
        },
        {
          "@type": "ContactPoint",
          email: contact.salesEmail,
          contactType: "sales",
          availableLanguage: ["English"],
        },
      ],
      sameAs: socials.map((s) => s.href),
      knowsAbout: [
        "Business Systems Transformation",
        "Operations Automation",
        "ERP and Zoho Implementation",
        "Secure Infrastructure",
        "Software Modernization",
        ...services.map((s) => s.title),
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Technology Services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.description,
            url: absoluteUrl(`/services/${s.slug}`),
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: site.name,
      url: SITE_URL,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

// Runs before first paint: applies the saved/system theme (no flash) and
// flags that JS is available so scroll-reveal styles may hide content. If the
// app hasn't hydrated within 4s, the flag is removed and everything shows.
const bootScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem('theme');var m=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;if(m){d.classList.add('dark');d.style.colorScheme='dark'}}catch(e){}d.classList.add('js');setTimeout(function(){if(!window.__enov8Ready)d.classList.remove('js')},4000)})()`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${serif.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body id="top">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-bright focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <div
          className="scroll-progress pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2px] bg-neon"
          aria-hidden="true"
        />
        <JsonLd data={orgJsonLd} />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <ContactDialog />
        <CookieBanner />
        <Interactions />
        <Analytics />
      </body>
    </html>
  );
}
