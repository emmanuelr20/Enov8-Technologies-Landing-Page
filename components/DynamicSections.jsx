"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Loading components
const SectionLoader = ({ height = "400px" }) => (
  <div
    className="flex items-center justify-center bg-gray-50 dark:bg-gray-900 animate-pulse"
    style={{ minHeight: height }}
  >
    <div className="text-gray-400 dark:text-gray-600">Loading...</div>
  </div>
);

// Dynamic imports with loading states
const About = dynamic(() => import("../app/layouts/About"), {
  loading: () => <SectionLoader height="500px" />,
  ssr: false,
});

const WorkFlow = dynamic(() => import("../app/layouts/WorkFlow"), {
  loading: () => <SectionLoader height="600px" />,
  ssr: false,
});

const Services = dynamic(() => import("../app/layouts/Services"), {
  loading: () => <SectionLoader height="800px" />,
  ssr: false,
});

const TechIndex = dynamic(() => import("../app/layouts/TechIndex"), {
  loading: () => <SectionLoader height="600px" />,
  ssr: false,
});

const Action = dynamic(() => import("../app/layouts/Action"), {
  loading: () => <SectionLoader height="300px" />,
  ssr: false,
});

const Contact = dynamic(() => import("../app/layouts/Contact"), {
  loading: () => <SectionLoader height="500px" />,
  ssr: false,
});

const Footer = dynamic(() => import("../app/layouts/Footer"), {
  loading: () => <SectionLoader height="400px" />,
  ssr: false,
});

export default function DynamicSections() {
  return (
    <>
      <Suspense fallback={<SectionLoader height="500px" />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionLoader height="600px" />}>
        <WorkFlow />
      </Suspense>

      <Suspense fallback={<SectionLoader height="800px" />}>
        <Services />
      </Suspense>

      <Suspense fallback={<SectionLoader height="600px" />}>
        <TechIndex />
      </Suspense>

      <Suspense fallback={<SectionLoader height="300px" />}>
        <Action />
      </Suspense>

      <Suspense fallback={<SectionLoader height="500px" />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<SectionLoader height="400px" />}>
        <Footer />
      </Suspense>
    </>
  );
}
