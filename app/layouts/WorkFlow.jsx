"use client";

import Image from "next/image";
import { FaPaintBrush } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { CgLaptop } from "react-icons/cg";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const ScrollReveal = dynamic(() => import("scrollreveal"), { ssr: false });

export default function WorkFlow() {
  const workRefs = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sr = require("scrollreveal").default;

      const revealOptions = {
        origin: "bottom",
        distance: "40px",
        duration: 400,
        easing: "ease-out",
        delay: 50,
        reset: false,
      };

      if (titleRef.current) {
        sr().reveal(titleRef.current, revealOptions);
      }

      workRefs.current.forEach((ref, i) => {
        if (ref) {
          sr().reveal(ref, {
            origin: "bottom",
            distance: "50px",
            duration: 400,
            delay: i * 100,
            easing: "ease-out",
            reset: false,
          });
        }
      });
    }
  }, []);

  const clipPathStyle = {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 85%)",
    WebkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 85%)",
  };

  const Work = [
    {
      icon: <FaPaintBrush size={40} />,
      title: "We Design",
      desc: "We translate your goals into clean, user-friendly interfaces that reflect your brand and engage your audience—from wireframes to final visuals.",
    },
    {
      icon: <IoCodeSlash size={40} />,
      title: "We Develop",
      desc: "We build fast, scalable web and mobile apps with clean code and modern tech, ensuring strong performance and easy maintenance.",
    },
    {
      icon: <CgLaptop size={40} />,
      title: "We Deploy",
      desc: "We launch with confidence—secure, optimized, and ready to scale. Our process ensures smooth delivery and ongoing support post-launch.",
    },
  ];

  return (
    <section
      aria-label="Enov8 Technologies Workflow"
      className="min-h-screen text-white relative mt-30"
      style={clipPathStyle}
    >
      <Image
        src="/workflowImage.jpg"
        alt="Workflow background"
        fill
        priority
        quality={100}
        className="object-cover -z-10"
      />

      <div className="absolute inset-0 bg-black/60  z-[-10]" />

      <div className="flex flex-col justify-center items-center pt-20 md:pb-36 pb-58">
        <h3
          ref={titleRef}
          className="text-base sm:text-xl font-bold text-center max-w-[600px] mx-auto dark:text-gray-200"
        >
          From concept to deployment, we design applications that align with
          your goals, ensuring seamless functionality and lasting value.
        </h3>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center 
        w-full mx-auto container gap-x-6 gap-y-10 py-15 px-3.5"
        >
          {Work.map(({ icon, title, desc }, i) => (
            <article
              key={i}
              ref={(el) => (workRefs.current[i] = el)}
              className="group overflow-hidden flex flex-col items-center py-24 px-8 min-h-[420px] 
            bg-white dark:bg-[#141414] max-w-[360px] rounded-br-4xl relative space-y-4 
            hover:rounded-bl-4xl hover:rounded-br-none transition-all duration-300 *:"
            >
              <div
                className="absolute h-full inset-0 bg-dark-primary transform -translate-x-full 
              -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform 
              duration-500 ease-in-out z-0"
              />

              <span className="text-black group-hover:text-white relative dark:text-white">
                {icon}
              </span>

              <h2 className="text-light-primary dark:text-white text-lg font-black group-hover:text-white relative">
                {title}
              </h2>

              <p className="text-center text-gray-400 group-hover:text-white relative">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
