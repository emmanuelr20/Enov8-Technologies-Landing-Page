import About from "@/components/home/About";
import BigCta from "@/components/home/BigCta";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import Industries from "@/components/home/Industries";
import Partners from "@/components/home/Partners";
import Process from "@/components/home/Process";
import ServicesIndex from "@/components/home/ServicesIndex";
import Tapes from "@/components/home/Tapes";
import Testimonials from "@/components/home/Testimonials";

export const metadata = {
  alternates: { canonical: "/" },
};

// Fully server-rendered: every word of copy is in the initial HTML for search
// engines. Only small interactive islands hydrate on the client.
export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <About />
      <Tapes />
      <ServicesIndex />
      <Process />
      <Industries />
      <Testimonials />
      <Faq />
      <BigCta />
    </>
  );
}
