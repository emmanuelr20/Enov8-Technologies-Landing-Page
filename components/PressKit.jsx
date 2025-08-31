"use client";

import { Download, FileText, Image as ImageIcon, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PressKit() {
  const pressKitItems = [
    {
      category: "Company Information",
      items: [
        {
          name: "Company Fact Sheet",
          type: "PDF",
          size: "2.1 MB",
          icon: FileText,
        },
        { name: "Executive Bios", type: "PDF", size: "1.8 MB", icon: FileText },
        {
          name: "Company Timeline",
          type: "PDF",
          size: "1.2 MB",
          icon: FileText,
        },
      ],
    },
    {
      category: "Brand Assets",
      items: [
        {
          name: "Logo Package (SVG, PNG)",
          type: "ZIP",
          size: "5.2 MB",
          icon: ImageIcon,
        },
        {
          name: "Brand Guidelines",
          type: "PDF",
          size: "8.7 MB",
          icon: FileText,
        },
        {
          name: "Product Screenshots",
          type: "ZIP",
          size: "12.3 MB",
          icon: ImageIcon,
        },
      ],
    },
    {
      category: "Media Content",
      items: [
        { name: "Company Video", type: "MP4", size: "45.2 MB", icon: Video },
        { name: "Team Photos", type: "ZIP", size: "18.9 MB", icon: ImageIcon },
        {
          name: "Office Photos",
          type: "ZIP",
          size: "22.1 MB",
          icon: ImageIcon,
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Press Kit & Media Resources
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Download our complete press kit including company information, brand
            assets, and high-resolution media content for journalists and
            partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pressKitItems.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 dark:text-white">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon
                        size={20}
                        className="text-blue-600 dark:text-blue-400"
                      />
                      <div>
                        <p className="font-medium text-sm dark:text-white">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {item.type} • {item.size}
                        </p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs">
                      <Download size={14} className="mr-1" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information for Media */}
        <div className="bg-blue-600 dark:bg-blue-700 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Media Inquiries</h3>
          <p className="mb-6">
            For press inquiries, interviews, or additional information, please
            contact our media team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div>
              <p className="font-semibold">Press Contact</p>
              <p>media@enov8technologies.com</p>
            </div>
            <div>
              <p className="font-semibold">Partnership Inquiries</p>
              <p>partnerships@enov8technologies.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
