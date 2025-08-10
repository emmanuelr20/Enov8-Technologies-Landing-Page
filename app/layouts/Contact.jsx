"use client";

import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa6";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const ScrollReveal = dynamic(
  () => import('scrollreveal'),
  { ssr: false }
)

export default function Contact() {
  const imgRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sr = require('scrollreveal').default;

      const revealOptions = {
        origin: 'left',
        distance: '80px',
        duration: 900,
        delay: 200,
        easing: 'ease-in',
        reset: false
      }

      if(imgRef.current) {
        sr().reveal(imgRef.current, revealOptions)
      }

      if(contactRef.current) {
        sr().reveal(contactRef.current, {
          ...revealOptions,
          origin: 'right',
        })
      }
    }
  }, []);

  return (
    <section 
    aria-label="Enov8 Technologies Contact"
    className="min-h-[70vh] text-black z-50 flex justify-center items-center" 
    id="contact">
      <div className="container mx-auto py-12 px-3.5 flex flex-col lg:flex-row items-center justify-between">
        <Image
        ref={imgRef}
        src="/contact.png" 
        alt="contact Enov8 Technologies" 
        width={500} 
        height={500} 
        priority={false}
        loading="lazy"
        />

        <div ref={contactRef} className="flex flex-col max-sm:items-center items-start gap-6 w-full sm:max-w-[600px] px-3">
          <div className="grid grid-cols-1 gap-y-3">
            <h2 className="text-3xl capitalize font-black dark:text-white" style={{ fontFamily: "var(--font-space)" }}>don't hesitate to contact us</h2>
            <p className="text-gray-500 dark:text-gray-200">
              We're here to help you bring your digital vision to life. Contact
              us through any of the following methods.
            </p>
          </div>
          <div className="flex max-sm:flex-col max-sm:text-center items-center gap-3 border-2 w-full p-4 rounded-md shadow-md">
            <span className="bg-light-primary p-2 rounded-md">
              <Mail size={30} className="text-white" />
            </span>
            <div>
              <h4 className="text-lg font-bold capitalize dark:text-white">email</h4>
              <a
                href="mailto:contact@enov8technologies.com"
                className="text-gray-500 dark:text-gray-200"
                target="_blank"
              >
                contact@enov8technologies.com
              </a>
            </div>
          </div>
          <div className="flex max-sm:flex-col max-sm:text-center items-center gap-3 border-2 w-full p-4 rounded-md shadow-md">
            <span className="bg-light-primary p-2 rounded-md">
              <FaWhatsapp size={30} className="text-white" />
            </span>
            <div>
              <h4 className="text-lg font-bold capitalize dark:text-white">whatsapp</h4>
              <p className="text-gray-500 dark:text-gray-200">+2347064838988</p>
            </div>
          </div>
          <div className="flex max-sm:flex-col max-sm:text-center items-center gap-3 border-2 w-full p-4 rounded-md shadow-md">
            <span className="bg-light-primary p-2 rounded-md">
              <Phone size={30} className="text-white" />
            </span>
            <div>
              <h4 className="text-lg font-bold capitalize dark:text-white">phone</h4>
              <p className="text-gray-500 dark:text-gray-200">+2347064838988</p>
            </div>
          </div>
          <div className="justify-self-center">
            <Button variant={"background"} size="lg" className="bg-light-primary text-[15px] font-medium">
              <a 
              href="https://wa.me/2347064838988?text=Hi%20there!%20I'm%20interested%20in%20your%20services" 
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              className="flex gap-2 items-center"
              >
                <Send />
                Send Message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
