"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import ConsultationModal from "@/components/ConsultationModal";

export default function Action() {
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
          className="text-3xl md:text-5xl lg:max-w-3xl text-center leading-tight"
        >
          Get Custom and Reliable Digital Solution for your Business
        </h2>
        <ConsultationModal
          trigger={
            <Button
              variant={"background"}
              className="text-base bg-light-primary py-8 px-10 shadow-lg rounded-none font-medium"
            >
              Start a Project
            </Button>
          }
        />
      </div>
    </section>
  );
}
