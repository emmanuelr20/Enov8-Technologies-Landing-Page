"use client";

import { useEffect, useRef, useState } from "react";

export default function MotionReveal({ as: Component = "div", className = "", group = false, children, ...props }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return undefined;
    }

    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -8%" });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={`motion-reveal ${group ? "motion-reveal-group" : ""} ${isVisible ? "motion-reveal-visible" : ""} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
