import HomeHero from "@/components/home/HomeHero";
import HomeSections from "@/components/home/HomeSections";
import Footer from "@/app/layouts/Footer";

export const metadata = {
  title: "Enov8 Technologies: Connected Business Systems for Growing African Businesses",
  description:
    "Enov8 Technologies helps growing African businesses replace fragmented operations with connected, secure business systems—from assessment and implementation through ongoing support.",
  openGraph: {
    title:
      "Enov8 Technologies: Connected Business Systems for Growing African Businesses",
    description:
      "Enov8 Technologies helps growing African businesses replace fragmented operations with connected, secure business systems.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <HomeHero />
      <HomeSections />
      <Footer />
    </main>
  );
}
