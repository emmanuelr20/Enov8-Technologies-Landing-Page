"use client";

import { useEffect } from "react";

const PerformanceMonitor = () => {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      process.env.NODE_ENV !== "development"
    ) {
      return;
    }

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === "navigation") {
          console.log("🚀 Navigation Performance:", {
            "DOM Content Loaded":
              entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
            "Load Complete": entry.loadEventEnd - entry.loadEventStart,
            "Total Load Time": entry.loadEventEnd - entry.fetchStart,
          });
        }

        if (entry.entryType === "largest-contentful-paint") {
          console.log(
            "🎨 LCP (Largest Contentful Paint):",
            entry.startTime,
            "ms"
          );
        }

        if (entry.entryType === "first-input") {
          console.log(
            "⚡ FID (First Input Delay):",
            entry.processingStart - entry.startTime,
            "ms"
          );
        }

        if (entry.entryType === "layout-shift") {
          if (!entry.hadRecentInput) {
            console.log("📐 CLS (Cumulative Layout Shift):", entry.value);
          }
        }
      });
    });

    // Observe different performance metrics
    try {
      observer.observe({
        entryTypes: [
          "navigation",
          "largest-contentful-paint",
          "first-input",
          "layout-shift",
        ],
      });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      observer.observe({ entryTypes: ["navigation"] });
    }

    // Monitor bundle sizes
    if (window.performance && window.performance.getEntriesByType) {
      const resources = window.performance.getEntriesByType("resource");
      const jsResources = resources.filter((resource) =>
        resource.name.includes(".js")
      );
      const cssResources = resources.filter((resource) =>
        resource.name.includes(".css")
      );

      console.log("📦 Bundle Analysis:", {
        "JS Files": jsResources.length,
        "CSS Files": cssResources.length,
        "Total JS Size": jsResources.reduce(
          (acc, resource) => acc + (resource.transferSize || 0),
          0
        ),
        "Total CSS Size": cssResources.reduce(
          (acc, resource) => acc + (resource.transferSize || 0),
          0
        ),
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default PerformanceMonitor;
