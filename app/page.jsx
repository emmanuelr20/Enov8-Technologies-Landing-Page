import Hero from "./layouts/Hero";
import DynamicSections from "@/components/DynamicSections";
import { FaWhatsapp } from "react-icons/fa6";
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
      <aside
        className="fixed bottom-5 right-5 z-50"
        aria-label="WhatsApp Contact"
      >
        <a
          href="https://wa.me/2347064838988?text=Hi%20there!%20I'm%20interested%20in%20your%20services"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 flex items-center justify-center will-change-transform"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          title="Chat with us on WhatsApp"
        >
          <FaWhatsapp size={30} />
        </a>
      </aside>
    </main>
  );
}
