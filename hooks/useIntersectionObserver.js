import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const defaultOptions = {
      threshold: 0.1,
      rootMargin: "50px",
      ...options,
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);

      if (entry.isIntersecting && !hasIntersected) {
        setHasIntersected(true);
      }
    }, defaultOptions);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [hasIntersected, options]);

  return { elementRef, isIntersecting, hasIntersected };
};

export const useLazyLoad = (options = {}) => {
  const { elementRef, hasIntersected } = useIntersectionObserver(options);
  return { elementRef, shouldLoad: hasIntersected };
};
