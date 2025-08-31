"use client";

import { useState } from "react";
import { Star, Quote, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function PartnersSection() {
  const [activeTab, setActiveTab] = useState("clients");

  const clients = [
    {
      name: "TechCorp Nigeria",
      logo: "/client-logos/techcorp.png",
      website: "https://techcorp.ng",
      industry: "Fintech",
      project: "Mobile Banking App",
    },
    {
      name: "EduLearn Africa",
      logo: "/client-logos/edulearn.png",
      website: "https://edulearn.africa",
      industry: "Education",
      project: "E-Learning Platform",
    },
    {
      name: "LogiFlow Systems",
      logo: "/client-logos/logiflow.png",
      website: "https://logiflow.com",
      industry: "Logistics",
      project: "Supply Chain Management",
    },
  ];

  const partners = [
    {
      name: "AWS Partner Network",
      logo: "/partner-logos/aws.png",
      type: "Cloud Services",
      status: "Advanced Tier Partner",
    },
    {
      name: "Google Cloud Partner",
      logo: "/partner-logos/gcp.png",
      type: "Cloud Platform",
      status: "Certified Partner",
    },
    {
      name: "Microsoft Partner",
      logo: "/partner-logos/microsoft.png",
      type: "Technology",
      status: "Gold Partner",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechCorp Nigeria",
      company: "TechCorp Nigeria",
      rating: 5,
      text: "Enov8 Technologies delivered our mobile banking app ahead of schedule with exceptional quality. Their expertise in fintech solutions is unmatched in Nigeria.",
      project: "Mobile Banking Application",
    },
    {
      name: "Dr. Michael Adebayo",
      position: "Founder, EduLearn Africa",
      company: "EduLearn Africa",
      rating: 5,
      text: "The e-learning platform they built has transformed how we deliver education across Africa. Outstanding technical skills and project management.",
      project: "E-Learning Platform",
    },
    {
      name: "Jennifer Chen",
      position: "Operations Director, LogiFlow",
      company: "LogiFlow Systems",
      rating: 5,
      text: "Their supply chain management solution increased our operational efficiency by 40%. Highly recommend for enterprise software development.",
      project: "Supply Chain Management System",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're proud to work with innovative companies and maintain strategic
            partnerships with leading technology providers.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("clients")}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === "clients"
                  ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              Our Clients
            </button>
            <button
              onClick={() => setActiveTab("partners")}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === "partners"
                  ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              Technology Partners
            </button>
            <button
              onClick={() => setActiveTab("testimonials")}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === "testimonials"
                  ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              Testimonials
            </button>
          </div>
        </div>

        {/* Clients Tab */}
        {activeTab === "clients" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {client.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {client.industry}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {client.project}
                </p>
                <a
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Visit Website
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Partners Tab */}
        {activeTab === "partners" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {partner.name.split(" ")[0].charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {partner.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {partner.type}
                </p>
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full">
                  {partner.status}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Testimonials Tab */}
        {activeTab === "testimonials" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <Quote
                    size={24}
                    className="text-blue-600 dark:text-blue-400 mr-2"
                  />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position}
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    {testimonial.company}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    Project: {testimonial.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to join our growing list of satisfied clients?
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
