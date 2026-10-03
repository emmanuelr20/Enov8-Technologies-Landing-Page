import HomeHero from "@/components/home/HomeHero";
import HomeSections from "@/components/home/HomeSections";
import Footer from "@/app/layouts/Footer";

export const metadata = {
  title: "Enov8 Technologies: Business Transformation & Digital Solutions in Nigeria",
  description:
    "Enov8 Technologies delivers world-class digital solutions across software development, managed IT services, hardware infrastructure, cloud platforms, and cybersecurity.",
  openGraph: {
    title:
      "Enov8 Technologies: Business Transformation & Digital Solutions in Nigeria",
    description:
      "Enov8 Technologies delivers world-class digital solutions across software development, managed IT services, hardware infrastructure, cloud platforms, and cybersecurity.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main role="main">
      <HomeHero />
      <HomeSections />
      <Footer />
    </main>
  );
}
