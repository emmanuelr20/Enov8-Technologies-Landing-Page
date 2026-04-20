import Hero from "./layouts/Hero";
import DynamicSections from "@/components/DynamicSections";
import PerformanceMonitor from "@/components/PerformanceMonitor";

export const metadata = {
  title: "Home - Custom Software Development & Digital Solutions",
  description:
    "Transform your business with custom software solutions. Expert mobile app development, web applications, enterprise systems, and digital transformation services.",
  openGraph: {
    title:
      "Enov8 Technologies - Custom Software Development & Digital Solutions",
    description:
      "Transform your business with custom software solutions. Expert mobile app development, web applications, enterprise systems, and digital transformation services.",
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
