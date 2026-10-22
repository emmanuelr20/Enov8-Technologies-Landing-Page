"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

const imageVariants = {
  rest: { x: -20, y: -20 },
  active: { x: 0, y: 0 },
};

export default function ServiceImageReveal({ src, alt, title }) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [tapped, setTapped] = useState(false);
  const reduceMotion = useReducedMotion();
  const active = hovered || focused || tapped;

  return (
    <button
      type="button"
      aria-label={`${active ? "Expand" : "Reveal"} ${title} image`}
      aria-pressed={tapped}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setHovered(false);
      }}
      onPointerDown={(event) => {
        if (event.pointerType === "touch") setTapped((current) => !current);
      }}
      onFocus={(event) => {
        setFocused(event.currentTarget.matches(":focus-visible"));
      }}
      onBlur={() => setFocused(false)}
      className="service-image-reveal focus-ring relative mb-5 mr-5 block aspect-square w-full max-w-100 cursor-pointer appearance-none rounded-xl border-0 bg-brand p-0 text-left shadow-lg"
    >
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-xl bg-muted"
        initial="rest"
        animate={active ? "active" : "rest"}
        variants={imageVariants}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { type: "spring", stiffness: 300, damping: 26 }
        }
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 42vw, 100vw"
          className="object-cover"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-foreground/20"
        />
      </motion.div>
    </button>
  );
}
