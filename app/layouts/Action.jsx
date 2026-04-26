"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ScrollReveal = dynamic(() => import("scrollreveal"), { ssr: false });

export default function Action() {
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sr = require("scrollreveal").default;

      const revealOptions = {
        origin: "left",
        distance: "40px",
        duration: 400,
        easing: "ease-out",
        delay: 100,
        reset: false,
      };

      if (titleRef.current) {
        sr().reveal(titleRef.current, revealOptions);
      }

      if (buttonRef.current) {
        sr().reveal(buttonRef.current, {
          ...revealOptions,
          origin: "right",
        });
      }
    }
  }, []);

  return (
    <section
      className="relative overflow-hidden min-h-[40vh] text-white bg-gray-950 flex 
        justify-center items-center"
    >
      <Image
        src="/sections/action.webp"
        alt="action background"
        fill
        priority
        quality={100}
        className="object-cover"
      />
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      <div className="relative z-20 flex flex-col justify-center items-center gap-10 py-16 px-6 container mx-auto">
        <h2
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold lg:max-w-3xl text-center leading-tight"
          style={{ fontFamily: "var(--font-space)" }}
        >
          Get Custom and Reliable Digital Solution for your Business
        </h2>
        <Button
          ref={(el) => (buttonRef.current = el)}
          variant={"background"}
          className="text-lg font-black bg-light-primary py-8 px-10 shadow-lg rounded-none"
          asChild
        >
          <a href="https://api.whatsapp.com/send?phone=2349133632465" target="_blank" rel="noopener noreferrer">
            Start a Project
          </a>
        </Button>
      </div>
    </section>
  );
}
