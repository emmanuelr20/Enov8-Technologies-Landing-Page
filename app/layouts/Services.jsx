"use client";

import { useState } from "react";
import {
  Smartphone,
  Globe,
  Database,
  GraduationCap,
  Palette,
  Rocket,
  CheckCircle,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const ScrollReveal = dynamic(() => import("scrollreveal"), { ssr: false });

const services = [
  {
    id: "mobile-dev",
    icon: Smartphone,
    title: "Mobile Development",
    subtitle: "iOS • Android • Cross-Platform",
    description:
      "Enterprise-grade mobile solutions with native performance, cross-platform efficiency, and seamless user experiences.",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    features: [
      "Native iOS & Android Development",
      "Cross-platform Solutions (React Native/Flutter)",
      "App Store Optimization & Deployment",
      "Offline-first Architecture",
      "Push Notifications & Analytics",
    ],
  },
  {
    id: "web-dev",
    icon: Globe,
    title: "Web Applications",
    subtitle: "Frontend • Backend • Full-Stack",
    description:
      "Scalable web applications built with modern architecture, optimized performance, and enterprise security standards.",
    technologies: ["React", "Node.js", "TypeScript", "Next.js"],
    features: [
      "Single Page Applications (SPA)",
      "Server-Side Rendering (SSR/SSG)",
      "Progressive Web Apps (PWA)",
      "Microservices Architecture",
      "API Design & Integration",
    ],
  },
  {
    id: "enterprise",
    icon: Database,
    title: "Enterprise Solutions",
    subtitle: "Scalable • Secure • Robust",
    description:
      "Mission-critical enterprise systems with high availability, data integrity, and seamless third-party integrations.",
    technologies: ["Java", "Python", "PostgreSQL", "Docker"],
    features: [
      "Enterprise Resource Planning (ERP)",
      "Customer Relationship Management (CRM)",
      "Business Intelligence & Analytics",
      "Legacy System Modernization",
      "Cloud Migration & DevOps",
    ],
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "Developer Training",
    subtitle: "Mentorship • Certification • Career",
    description:
      "Comprehensive training programs designed by industry experts to build world-class development teams.",
    technologies: ["Curriculum", "Projects", "Mentoring", "Assessment"],
    features: [
      "Structured Learning Paths",
      "Hands-on Project Development",
      "Industry Mentor Network",
      "Career Placement Support",
      "Continuous Assessment & Feedback",
    ],
  },
  {
    id: "design",
    icon: Palette,
    title: "UI/UX Design",
    subtitle: "Research • Design • Testing",
    description:
      "User-centered design approach combining behavioral psychology with cutting-edge design trends and accessibility standards.",
    technologies: ["Figma", "Adobe XD", "Principle", "Framer"],
    features: [
      "User Research & Persona Development",
      "Information Architecture & Wireframing",
      "High-fidelity Prototyping",
      "Usability Testing & Iteration",
      "Design System Creation",
    ],
  },
  {
    id: "transformation",
    icon: Rocket,
    title: "Digital Transformation",
    subtitle: "Strategy • Implementation • Growth",
    description:
      "End-to-end digital transformation strategies that modernize operations and accelerate business growth.",
    technologies: ["Cloud", "Process Automation", "IoT", "Digital Strategy"],
    features: [
      "Digital Strategy & Roadmap",
      "Process Automation & Optimization",
      "Cloud-first Architecture",
      "Data Analytics & AI Integration",
      "Change Management & Training",
    ],
  },
];

export default function Services() {
  const [activeCard, setActiveCard] = useState(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const servicesRef = useRef([]);

  // Structured data for services
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Enov8 Technologies Services",
    description:
      "Comprehensive technology solutions offered by Enov8 Technologies",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: "Enov8 Technologies",
        },
        serviceType: service.subtitle,
        category: "Software Development",
      },
    })),
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sr = require("scrollreveal").default;

      const revealOptions = {
        origin: "bottom",
        distance: "40px",
        duration: 400,
        easing: "ease-out",
        delay: 100,
        reset: false,
      };

      if (titleRef.current) {
        sr().reveal(titleRef.current, revealOptions);
      }

      if (textRef.current) {
        sr().reveal(textRef.current, {
          ...revealOptions,
          delay: 150,
          duration: 450,
        });
      }

      servicesRef.current.forEach((ref, i) => {
        if (ref) {
          sr().reveal(ref, {
            origin: "bottom",
            distance: "50px",
            duration: 400,
            delay: i * 50,
            easing: "ease-out",
            reset: false,
          });
        }
      });
    }
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <section
        aria-label="Enov8 Technologies Services"
        className="py-24 px-6 max-w-7xl mx-auto"
        id="services"
      >
        <div className="text-center space-y-4">
          <h2
            ref={titleRef}
            className="text-3xl md:text-5xl font-bold dark:text-gray-100"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Our Services
          </h2>
          <p
            ref={textRef}
            className="text-lg max-w-xl mx-auto text-zinc-700 dark:text-gray-200"
          >
            Comprehensive technology solutions tailored to drive innovation and
            growth across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isActive = activeCard === service.id;

            return (
              <Card
                key={service.id}
                ref={(el) => (servicesRef.current[i] = el)}
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
                className="rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-zinc-800 dark:bg-[#141414]"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-light-primary dark:bg-bg-dark">
                      <Icon className="text-white dark:text-light-primary w-6 h-6" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                    {service.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isActive
                        ? "max-h-96 opacity-100 mt-4"
                        : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-2 text-sm transform transition-all duration-200 ease-out ${
                            isActive
                              ? "translate-y-0 opacity-100"
                              : "translate-y-2 opacity-0"
                          }`}
                          style={{ transitionDelay: `${i * 25}ms` }}
                        >
                          <CheckCircle className="w-4 h-4 text-dark-primary" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-zinc-700" />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
}
