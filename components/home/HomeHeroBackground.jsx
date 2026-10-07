"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export default function HomeHeroBackground() {
  const [motionAllowed, setMotionAllowed] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia(REDUCED_MOTION_QUERY);
    const updateMotionPreference = () => {
      setMotionAllowed(!preference.matches);
    };

    updateMotionPreference();
    preference.addEventListener("change", updateMotionPreference);

    return () => {
      preference.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-0">
      {motionAllowed ? (
        <video
          src="/video/hero-background-optimized.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="home-hero-video absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <Image
          src="/video/hero-background-poster.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
      )}
    </div>
  );
}
