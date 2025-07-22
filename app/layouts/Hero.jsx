"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


export default function Hero() {
  // const clipPathStyle = {
  //   clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 85%)",
  // };
  const [typeText, setTypeText] = useState('');
  const texts = ['custom', 'scalable', 'exceptional'];
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
                setTypeText(prev => prev + currentText[currentCharIndex]);
                setCurrentCharIndex(prev => prev + 1);
            }, 100);
        } else if (!isDeleting && currentCharIndex === currentText.length) {
            setIsPaused(true);
        } else if (isDeleting && typeText.length > 0) {
            timeout = setTimeout(() => {
                setTypeText(prev => prev.slice(0, -1));
            }, 50);
        } else if (isDeleting && typeText.length === 0) {
            setIsDeleting(false);
            setCurrentCharIndex(0);
            setCurrentTextIndex(prev => (prev + 1) % texts.length);
        }

        return () => clearTimeout(timeout);
    }, [currentCharIndex, currentTextIndex, isDeleting, typeText, isPaused, texts]);

    return(
      <section className="h-screen overflow-hidden relative bg-gray-950/30 text-white">
        <Image 
        src="/image1.jpeg"
        alt="home background"
        fill
        quality={100}
        priority 
        className="object-cover -z-10"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/80 z-[-10]"/>

        <div className="container mx-auto px-3.5 h-full z-10 flex flex-col justify-center items-start">
          <div className="grid grid-cols-1 gap-y-6 md:px-3">
            <h1 className="text-4xl text-center md:text-start sm:text-6xl md:text-7xl font-bold capitalize  " 
            style={{ fontFamily: "var(--font-space)"}}
            >
              we build <span className="text-light-primary"> {typeText} </span> 
              <br/> digital solutions
            </h1>
            <p className="max-w-[630px] w-full text-center md:text-start sm:text-lg font-medium">
              From mobile apps to enterprise solutions, we deliver cutting-edge technology 
              that transforms businesses across fintech, e-commerce, education, and more.
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <Button 
              className="bg-white text-black flex items-center gap-x-4 py-6 hover:bg-zinc-200 font-black" 
              size="lg">
                Learn More
                <ArrowRight />
              </Button>
              <Button 
              variant="background" 
              size="lg" 
              className="flex items-center gap-x-4 py-6 font-black">
                Get in touch
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
}