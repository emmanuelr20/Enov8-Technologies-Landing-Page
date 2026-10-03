import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa6";
import { Mail, Phone, MapPin } from "lucide-react";
import { company, industries } from "@/lib/content/company";
import { resourceNavigation } from "@/lib/content/navigation";
import { servicesList } from "@/lib/servicesData";

export default function Footer() {
  return (
    <footer className="z-50 bg-footer-background py-20 md:py-24">
      <div className="mx-auto w-full max-w-[var(--container-content)] px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.65fr)] xl:gap-24">
          <div className="max-w-md ">
            <h3 className="mb-4 text-white">Enov8 Technologies</h3>
            <p className="mb-6 !text-white/90">
              Transforming businesses through innovative software solutions,
              mobile applications, and professional development training.
            </p>

            {/* Social Media Links */}
            <div className="mt-8">
              <h5 className="mb-3 text-white">Follow Us</h5>
              <nav aria-label="Follow us on social media">
                <ul className="flex list-none gap-4 p-0">
                  <li>
                    <a
                      href="https://www.linkedin.com/company/enov8-technologies/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm text-white/90 transition-colors hover:text-brand"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={24} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/enov8_technologies?igsh=YWZtNHNia2syanE1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm text-white/90 transition-colors hover:text-brand"
                      aria-label="Instagram"
                    >
                      <FaInstagram size={24} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/Enov8Technologies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm text-white/90 transition-colors hover:text-brand"
                      aria-label="Facebook"
                    >
                      <FaFacebook size={24} aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
            <div>
              <h5 className="mb-4 text-white">Services</h5>
              <ul className="space-y-3 text-sm text-white/90">
                {servicesList.slice(0, 6).map((service) => (
                  <li key={service.id}>
                    <a
                      href={`/services/${service.id}`}
                      className="focus-ring rounded-sm transition-colors hover:text-white/85"
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="mb-4 text-white">Industries</h5>
              <ul className="space-y-3 text-sm text-white/90">
                {industries.map((industry) => (
                  <li key={industry}>
                    <a
                      href="#about"
                      className="focus-ring rounded-sm transition-colors hover:text-white/85"
                    >
                      {industry}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="mb-4 text-white">Contact Info</h5>
              <div className="space-y-4 text-sm text-white/90">
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="shrink-0" />
                  <a
                    href={`mailto:${company.emails.general}`}
                    className="focus-ring rounded-sm transition-colors hover:text-white/85"
                  >
                    {company.emails.general}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="shrink-0" />
                  <a
                    href={`tel:${company.phones.service.replace(/\s/g, "")}`}
                    className="focus-ring rounded-sm transition-colors hover:text-white/85"
                  >
                    {company.phones.service}
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="mt-1 shrink-0" />
                  <span>{company.location}</span>
                </div>
              </div>

              <div className="mt-8">
                <h5 className="mb-3 text-white">Resources</h5>
                <ul className="space-y-3 text-sm text-white/90">
                  {resourceNavigation.map((resource) => (
                    <li key={resource.id}>
                      <a
                        href={resource.href}
                        className="focus-ring rounded-sm transition-colors hover:text-white/85"
                      >
                        {resource.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-border pt-8 text-center md:flex-row md:text-left">
          <p className="mb-4 text-sm !text-white/90 md:mb-0">
            © 2025 Enov8 Technologies. All rights reserved.
          </p>

          <div className="flex flex-col items-center gap-2 text-sm text-white/90 md:flex-row md:gap-6">
            <span>Nigeria-based technology solutions</span>
            <span className="hidden md:inline">•</span>
            <span>ISO 27001 Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
