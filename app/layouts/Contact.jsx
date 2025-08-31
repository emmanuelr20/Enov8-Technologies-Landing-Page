"use client";

import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa6";
import OptimizedImage from "@/components/OptimizedImage";
import { useScrollRevealMultiple } from "@/hooks/useScrollReveal";
import { memo } from "react";

const Contact = memo(function Contact() {
  const elementsRef = useScrollRevealMultiple(
    [
      { origin: "left" }, // image
      { origin: "right" }, // contact form
    ],
    {
      distance: "40px",
      duration: 400,
      delay: 100,
      easing: "ease-out",
      reset: false,
    }
  );

  return (
    <section
      aria-label="Enov8 Technologies Contact"
      className="min-h-[70vh] text-black z-50 flex justify-center items-center"
      id="contact"
    >
      <div className="container mx-auto py-12 px-3.5 flex flex-col lg:flex-row items-center justify-between">
        <div ref={(el) => (elementsRef.current[0] = el)}>
          <OptimizedImage
            src="/contact.png"
            alt="Contact Enov8 Technologies - Professional software development team"
            width={500}
            height={500}
            priority={false}
            sizes="(max-width: 768px) 100vw, 500px"
            className="rounded-lg"
          />
        </div>

        <div
          ref={(el) => (elementsRef.current[1] = el)}
          className="flex flex-col max-sm:items-center items-start gap-6 w-full sm:max-w-[600px] px-3"
        >
          <div className="grid grid-cols-1 gap-y-3">
            <h2
              className="text-3xl capitalize font-black dark:text-white"
              style={{ fontFamily: "var(--font-space)" }}
            >
              don't hesitate to contact us
            </h2>
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
              <h4 className="text-lg font-bold capitalize dark:text-white">
                email
              </h4>
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
              <h4 className="text-lg font-bold capitalize dark:text-white">
                whatsapp
              </h4>
              <p className="text-gray-500 dark:text-gray-200">+2347064838988</p>
            </div>
          </div>
          <div className="flex max-sm:flex-col max-sm:text-center items-center gap-3 border-2 w-full p-4 rounded-md shadow-md">
            <span className="bg-light-primary p-2 rounded-md">
              <Phone size={30} className="text-white" />
            </span>
            <div>
              <h4 className="text-lg font-bold capitalize dark:text-white">
                phone
              </h4>
              <p className="text-gray-500 dark:text-gray-200">+2347064838988</p>
            </div>
          </div>
          <div className="justify-self-center">
            <Button
              variant={"background"}
              size="lg"
              className="bg-light-primary text-[15px] font-medium"
            >
              <a
                href="https://wa.me/2347064838988?text=Hi%20there!%20I'm%20interested%20in%20your%20services"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                className="flex gap-2 items-center"
              >
                <FaWhatsapp size={18} />
                Send Message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
