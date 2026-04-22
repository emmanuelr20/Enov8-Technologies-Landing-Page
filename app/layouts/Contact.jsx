"use client";

import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa6";
import OptimizedImage from "@/components/OptimizedImage";
import { useScrollRevealMultiple } from "@/hooks/useScrollReveal";
import { memo, useState } from "react";
import { toast } from "sonner";

const Contact = memo(function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(
        "https://enov8technologies.app.n8n.cloud/webhook/contact-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("success");
        toast.success("Message sent successfully!", {
          description: "We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        toast.error("Something went wrong.", {
          description: "Please try again or email us directly.",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      toast.error("Submission failed.", {
        description: "Please check your connection and try again.",
      });
    }
  };

  return (
    <section
      aria-label="Enov8 Technologies Contact"
      className="min-h-[70vh] bg-gray-50 dark:bg-zinc-950 text-black dark:text-white z-50 flex justify-center items-center transition-colors duration-300"
      id="contact"
    >
      <div className="container mx-auto py-10 md:py-12 px-4 md:px-8 lg:px-12 xl:px-24 flex flex-col xl:flex-row items-center justify-between">
        <div ref={(el) => (elementsRef.current[0] = el)}>
          <OptimizedImage
            src="/customer.jpg"
            alt="Contact Enov8 Technologies - Professional software development team"
            width={530}
            height={500}
            priority={false}
            sizes="(max-width: 768px) 100vw, 500px"
            className="hidden xl:block"
          />
        </div>

        <div
          ref={(el) => (elementsRef.current[1] = el)}
          className="w-full xl:max-w-[500px] py-10 px-4"
        >
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A37] dark:text-white font-space tracking-tighter mb-6">
              Have an Idea?
              <br />
              <span className="text-light-primary">Let’s Talk.</span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 font-poppins text-lg">
              Send us a message and we'll get back to you to discuss how we can
              help your business grow.
            </p>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="peer w-full bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 py-2 focus:outline-none focus:border-light-primary transition-colors font-poppins text-lg text-black dark:text-white"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-2 text-[#1A1A37] dark:text-white font-medium transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-light-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Full Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="peer w-full bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 py-2 focus:outline-none focus:border-light-primary transition-colors font-poppins text-lg text-black dark:text-white"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-2 text-[#1A1A37] dark:text-white font-medium transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-light-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Email Address
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                required
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="peer w-full bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 py-2 focus:outline-none focus:border-light-primary transition-colors font-poppins text-lg resize-none text-black dark:text-white"
                placeholder=" "
              />
              <label
                htmlFor="message"
                className="absolute left-0 top-2 text-[#1A1A37] dark:text-white font-medium transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-light-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Project Details
              </label>
            </div>

            <div className="pt-4 flex flex-col gap-4">
              <Button
                type="submit"
                variant={"background"}
                disabled={status === "loading"}
                className="bg-light-primary text-white font-bold px-10 py-7 rounded-none text-lg uppercase tracking-widest hover:bg-[#E31B36] transition-colors disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>

          <div className="mt-4 flex flex-col items-start md:flex-row md:items-center gap-2">
            <span className="text-xs font-bold font-space tracking-widest">
              Direct Mail:
            </span>
            <a
              href="mailto:contact@enov8technologies.com"
              className="text-sm font-bold text-[#1A1A37] dark:text-white hover:text-light-primary transition-colors underline underline-offset-4"
            >
              contact@enov8technologies.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
