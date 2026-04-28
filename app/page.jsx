import Hero from "./layouts/Hero";
import DynamicSections from "@/components/DynamicSections";
import PerformanceMonitor from "@/components/PerformanceMonitor";

export const metadata = {
  title: "Enov8 Technologies - End-to-End Digital Solutions & IT Services",
  description:
    "Enov8 Technologies delivers world-class digital solutions across software development, managed IT services, hardware infrastructure, cloud platforms, and cybersecurity.",
  openGraph: {
    title:
      "Enov8 Technologies - End-to-End Digital Solutions & IT Services",
    description:
      "Enov8 Technologies delivers world-class digital solutions across software development, managed IT services, hardware infrastructure, cloud platforms, and cybersecurity.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main role="main">
      <PerformanceMonitor />
      <Hero />
      <DynamicSections />
    </main>
  );
}
