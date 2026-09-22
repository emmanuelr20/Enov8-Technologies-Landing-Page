"use client";

import { memo } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";
import { Mail, Phone, MapPin } from "lucide-react";
import { company, industries } from "@/lib/content/company";
import { resourceNavigation } from "@/lib/content/navigation";
import { servicesList } from "@/lib/servicesData";

const Footer = memo(function Footer() {
  return (
    <footer className="z-50 border-t border-white/10 bg-zinc-950 py-20 text-white md:py-24 dark:bg-black">
      <div className="mx-auto w-full max-w-[var(--container-content)] px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h3 className="mb-4">Enov8 Technologies</h3>
            <p className="text-background/70! mb-6 dark:text-gray-300!">
              Transforming businesses through innovative software solutions,
              mobile applications, and professional development training.
            </p>

            {/* Social Media Links */}
            <div className="mb-6">
              <h5 className="mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/enov8-technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded-sm text-white/70 transition-colors hover:text-brand"
                  aria-label="Follow us on LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://www.instagram.com/enov8_technologies?igsh=YWZtNHNia2syanE1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded-sm text-white/70 transition-colors hover:text-brand"
                  aria-label="View our Instagram"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.facebook.com/Enov8Technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded-sm text-white/70 transition-colors hover:text-brand"
                  aria-label="Follow us on Facebook"
                >
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h5 className="mb-4">Services</h5>
            <ul className="space-y-3 text-sm text-white/70">
              {servicesList.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a href={`/services/${service.id}`} className="focus-ring rounded-sm transition-colors hover:text-white">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4">Industries</h5>
            <ul className="space-y-3 text-sm text-white/70">
              {industries.map((industry) => (
                <li key={industry}>
                  <a href="#about" className="focus-ring rounded-sm transition-colors hover:text-white">{industry}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4">Contact Info</h5>
            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-center space-x-3">
                <Mail size={18} />
                <a
                  href={`mailto:${company.emails.general}`}
                  className="focus-ring rounded-sm transition-colors hover:text-white"
                >
                  {company.emails.general}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} />
                <a
                  href={`tel:${company.phones.service.replace(/\s/g, "")}`}
                  className="focus-ring rounded-sm transition-colors hover:text-white"
                >
                  {company.phones.service}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1" />
                <span>{company.location}</span>
              </div>
            </div>

            {/* Resource Links */}
            <div className="mt-8">
              <h5 className="mb-3">Resources</h5>
              <ul className="space-y-3 text-sm text-white/70">
                {resourceNavigation.map((resource) => (
                  <li key={resource.id}>
                    <a href={resource.href} className="focus-ring rounded-sm transition-colors hover:text-white">{resource.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-background/60 dark:text-white mb-4 md:mb-0">
            © 2025 Enov8 Technologies. All rights reserved.
          </p>

          {/* Partner/Certification Links */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm text-background/60 dark:text-white">
            <span>Trusted by 100+ businesses</span>
            <span className="hidden md:inline">•</span>
            <span>ISO 27001 Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
