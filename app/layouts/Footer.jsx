"use client";

import { memo } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = memo(function Footer() {
  return (
    <footer className="z-50 pt-24 pb-12 bg-gray-950 dark:bg-black text-white border-t-2 dark:border-t-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                  className="text-background/70 dark:text-white hover:text-blue-600 transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://www.instagram.com/enov8_technologies?igsh=YWZtNHNia2syanE1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 dark:text-white hover:text-pink-600 transition-colors"
                  aria-label="View our Instagram"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.facebook.com/Enov8Technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 dark:text-white hover:text-blue-600 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h5 className="mb-4">Services</h5>
            <ul className="space-y-4 text-background/70 dark:text-gray-300 text-base lg:text-base">
              <li>
                <a
                  href="/services/digital-signage"
                  className="hover:text-white transition-colors"
                >
                  Digital Signage Solution
                </a>
              </li>
              <li>
                <a
                  href="/services/automation"
                  className="hover:text-white transition-colors"
                >
                  Business Automation
                </a>
              </li>
              <li>
                <a
                  href="/services/onboarding"
                  className="hover:text-white transition-colors"
                >
                  Customer Onboarding & ID Verification
                </a>
              </li>
              <li>
                <a
                  href="/services/security"
                  className="hover:text-white transition-colors"
                >
                  Cyber Security
                </a>
              </li>
              <li>
                <a
                  href="/services/software-dev"
                  className="hover:text-white transition-colors"
                >
                  Software Development
                </a>
              </li>
              <li>
                <a
                  href="/services/consulting"
                  className="hover:text-white transition-colors"
                >
                  IT Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4">Industries</h5>
            <ul className="space-y-4 text-background/70 dark:text-gray-300 text-base lg:text-base">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Fintech
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Logistics
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Enterprise
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4">Contact Info</h5>
            <div className="space-y-4 text-background/70 dark:text-gray-300 text-base lg:text-base">
              <div className="flex items-center space-x-3">
                <Mail size={18} />
                <a
                  href="mailto:contact@enov8technologies.com"
                  className="hover:text-white transition-colors"
                >
                  contact@enov8technologies.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} />
                <a
                  href="tel:+2347064838988"
                  className="hover:text-white transition-colors"
                >
                  +234 913 363 2465
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>

            {/* Resource Links */}
            <div className="mt-8">
              <h5 className="mb-3">Resources</h5>
              <ul className="space-y-3 text-background/70 dark:text-gray-300 text-base lg:text-base">
                <li>
                  <a
                    href="/privacy-policy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-service"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/accessibility"
                    className="hover:text-white transition-colors"
                  >
                    Accessibility Statement
                  </a>
                </li>
                <li>
                  <a
                    href="/sitemap.xml"
                    className="hover:text-white transition-colors"
                  >
                    Sitemap
                  </a>
                </li>
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
