'use client';

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const ScrollReveal = dynamic(
  () => import('scrollreveal'),
  { ssr: false }
)

export default function Footer() {
  const footerSectionsRef = useRef([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sr = require("scrollreveal").default;
      footerSectionsRef.current.forEach((section, i) => {
        if (section) {
          sr().reveal(section, {
            origin: "left",
            distance: "80px",
            duration: 800,
            delay: i * 100,
            easing: "ease-in",
            reset: false,
          });
        }
      });
    }
  }, []);

  return(
    <footer className="z-50 pt-12 pb-6 bg-gray-950 dark:bg-black text-white border-t-2 dark:border-t-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
        ref={(el) => (footerSectionsRef.current[0] = el)}
        className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              Enov8 Technologies
            </div>
            <p className="text-background/80 mb-4 max-w-md dark:text-white">
              Transforming businesses through innovative software solutions, mobile applications, 
              and professional development training.
            </p>
          </div>
          
          <div ref={(el) => (footerSectionsRef.current[1] = el)}>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-background/80 dark:text-white">
              <li>Mobile App Development</li>
              <li>Web Development</li>
              <li>Enterprise Solutions</li>
              <li>Training Academy</li>
            </ul>
          </div>
          
          <div ref={(el) => (footerSectionsRef.current[2] = el)}>
            <h3 className="font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-background/80 dark:text-white">
              <li>Fintech</li>
              <li>E-commerce</li>
              <li>Education</li>
              <li>Logistics</li>
              <li>Enterprise</li>
            </ul>
          </div>
        </div>
        <p className="text-background/60 text-sm max-lg:pt-12 dark:text-white">
          © 2025 Enov8 Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}