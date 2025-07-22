"use client";

import { useEffect } from "react";

export default function ParticlesBackground() {
  useEffect(() => {
    // Only run in browser
    if (typeof window !== "undefined") {
      import("particles.js").then(() => {
        if (window.particlesJS) {
          window.particlesJS("particles-js", {
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#fff",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.9,
                random: false,
              },
              size: {
                value: 3,
                random: true,
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#fff",
                opacity: 0.6,
                width: 1,
              },
              move: {
                enable: true,
                speed: 3,
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                repulse: {
                  distance: 100,
                },
                push: {
                  particles_nb: 4,
                },
              },
            },
            retina_detect: true,
          });
        } else {
          console.error("particlesJS not found on window");
        }
      });
    }
  }, []);

  return <div id="particles-js" 
  className="absolute inset-0 z-[-9] w-full h-full" />;
}
