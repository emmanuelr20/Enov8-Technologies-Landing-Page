import { useEffect, useRef } from "react";

let scrollRevealInstance = null;

const getScrollReveal = async () => {
  if (scrollRevealInstance) return scrollRevealInstance;

  if (typeof window !== "undefined") {
    const ScrollReveal = (await import("scrollreveal")).default;
    scrollRevealInstance = ScrollReveal();
    return scrollRevealInstance;
  }
  return null;
};

export const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null);
  const hasRevealed = useRef(false);

  useEffect(() => {
    const revealElement = async () => {
      if (hasRevealed.current || !elementRef.current) return;

      const sr = await getScrollReveal();
      if (sr && elementRef.current) {
        const defaultOptions = {
          origin: "bottom",
          distance: "30px",
          duration: 400,
          delay: 0,
          easing: "ease-out",
          reset: false,
          mobile: true,
          desktop: true,
        };

        sr.reveal(elementRef.current, { ...defaultOptions, ...options });
        hasRevealed.current = true;
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(revealElement, 50);
    return () => clearTimeout(timer);
  }, [options]);

  return elementRef;
};

export const useScrollRevealMultiple = (elements, baseOptions = {}) => {
  const elementsRef = useRef([]);
  const hasRevealed = useRef(false);

  useEffect(() => {
    const revealElements = async () => {
      if (hasRevealed.current) return;

      const sr = await getScrollReveal();
      if (sr) {
        const defaultOptions = {
          origin: "bottom",
          distance: "30px",
          duration: 400,
          delay: 0,
          easing: "ease-out",
          reset: false,
          mobile: true,
          desktop: true,
        };

        elementsRef.current.forEach((element, index) => {
          if (element) {
            const elementOptions = elements[index] || {};
            sr.reveal(element, {
              ...defaultOptions,
              ...baseOptions,
              ...elementOptions,
              delay: (baseOptions.delay || 0) + index * 50,
            });
          }
        });
        hasRevealed.current = true;
      }
    };

    const timer = setTimeout(revealElements, 50);
    return () => clearTimeout(timer);
  }, [elements, baseOptions]);

  return elementsRef;
};
