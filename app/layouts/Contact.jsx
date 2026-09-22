"use client";

import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/field";
import { FaWhatsapp } from "react-icons/fa6";
import OptimizedImage from "@/components/OptimizedImage";
import { memo, useState } from "react";
import { toast } from "sonner";

const Contact = memo(function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

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
        },
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
        <div>
          <OptimizedImage
            src="/sections/customer.webp"
            alt="Contact Enov8 Technologies - Professional software development team"
            width={530}
            height={500}
            priority={false}
            sizes="(max-width: 768px) 100vw, 500px"
            className="hidden xl:block"
          />
        </div>

        <div className="w-full xl:max-w-[500px] py-10 px-4">
          <div className="mb-12">
            <h2 className="text-[#1A1A37] dark:text-white tracking-tighter mb-6 leading-[1.15]">
              Have an Idea?
              <br />
              <span className="text-light-primary">Let’s Talk.</span>
            </h2>
            <p className="dark:text-white/90">
              Send us a message and we'll get back to you to discuss how we can
              help your business grow.
            </p>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                placeholder="Your full name"
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <Label htmlFor="message">Project Details</Label>
              <Textarea
                id="message"
                required
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what you want to build or improve"
              />
            </div>

            <div className="pt-4 flex flex-col gap-4">
              <Button
                type="submit"
                variant="primary"
                disabled={status === "loading"}
                className="bg-brand text-on-brand px-10 py-6 text-base uppercase hover:bg-brand-hover"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>

          <div className="mt-4 flex flex-col items-start md:flex-row md:items-center gap-2">
            <span className="text-base tracking-wide">Direct Mail:</span>
            <a
              href="mailto:contact@enov8technologies.com"
              className="text-base text-[#1A1A37] dark:text-white hover:text-light-primary transition-colors underline underline-offset-4"
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
