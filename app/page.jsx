import Hero from "./layouts/Hero";
import About from "./layouts/About";
import WorkFlow from "./layouts/WorkFlow";
import Services from "./layouts/Services";
import TechIndex from "./layouts/TechIndex";
import Action from "./layouts/Action";
import Contact from "./layouts/Contact";
import Footer from "./layouts/Footer";
import { FaWhatsapp } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WorkFlow />
      <Services />
      <TechIndex />
      <Action />
      <Contact />
      <Footer />
      <a
        href="https://wa.me/2347064838988?text=Hi%20there!%20I'm%20interested%20in%20your%20services"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={30} />
      </a>
    </>
  );
}
