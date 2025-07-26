"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [typeText, setTypeText] = useState("");
  const texts = ["custom", "scalable", "reliable"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout;
    const currentText = texts[currentTextIndex];

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
    } else if (!isDeleting && currentCharIndex < currentText.length) {
      timeout = setTimeout(() => {
        setTypeText((prev) => prev + currentText[currentCharIndex]);
        setCurrentCharIndex((prev) => prev + 1);
      }, 100);
    } else if (!isDeleting && currentCharIndex === currentText.length) {
      setIsPaused(true);
    } else if (isDeleting && typeText.length > 0) {
      timeout = setTimeout(() => {
        setTypeText((prev) => prev.slice(0, -1));
      }, 50);
    } else if (isDeleting && typeText.length === 0) {
      setIsDeleting(false);
      setCurrentCharIndex(0);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    currentTextIndex,
    isDeleting,
    typeText,
    isPaused,
    texts,
  ]);

  return (
    <section className="h-screen relative bg-gray-950/30 text-white" id="home">
      <Image
        src="/HomeImage.jpeg"
        alt="home background"
        fill
        quality={100}
        priority
        className="object-cover -z-10"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/60  z-[-10]" />

      <div className="container mx-auto px-3.5 h-full z-10 flex flex-col justify-center items-center lg:items-start">
        <div className="grid grid-cols-1 gap-y-6 md:px-3">
          <h1
            className="text-5xl text-center lg:text-start md:text-7xl font-bold capitalize  "
            style={{ fontFamily: "var(--font-space)" }}
          >
            we build <span className="text-light-primary"> {typeText} </span>
            <br /> digital solutions
          </h1>
          <p className="max-w-[630px] w-full text-center text-[1.2rem] lg:text-start md:text-lg font-medium">
            From mobile apps to enterprise solutions, we deliver cutting-edge
            technology that transforms businesses across fintech, e-commerce,
            education, and more.
          </p>
          <div className="flex justify-center lg:justify-start space-x-6">
            <a 
            href="https://wa.me/2347064838988?text=Hi%20there!%20I'm%20interested%20in%20your%20services"
            target="_blank">
              <Button
                variant="background"
                size="lg"
                className="flex items-center gap-x-4 py-6 font-black"
              >
                Get in touch
                <ArrowRight />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
