import { servicesData } from "@/lib/servicesData";

const SITE_URL = "https://enov8technologies.com";
const BRAND_NAME = "Enov8 Technologies";
const DEFAULT_OG_IMAGE = "/brand/image.png";

function toAbsoluteUrl(path) {
  return new URL(path, SITE_URL).toString();
}

export function buildServicesIndexMetadata() {
  const title = "Solutions and Services";
  const description =
    "Explore Enov8 Technologies' full suite of IT and software services, including automation, cybersecurity, software development, consulting, and enterprise deployment solutions.";
  const canonicalPath = "/services";

  return {
    title,
    description,
    alternates: {
      canonical: toAbsoluteUrl(canonicalPath),
    },
    openGraph: {
      title: `${title} | ${BRAND_NAME}`,
      description,
      url: toAbsoluteUrl(canonicalPath),
      siteName: BRAND_NAME,
      type: "website",
      images: [
        {
          url: toAbsoluteUrl(DEFAULT_OG_IMAGE),
          width: 1200,
          height: 630,
          alt: `${BRAND_NAME} services`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${BRAND_NAME}`,
      description,
      images: [toAbsoluteUrl(DEFAULT_OG_IMAGE)],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function buildServiceMetadata(serviceId) {
  const service = servicesData[serviceId];
  if (!service) return {};

  const title = service.title;
  const description = service.description;
  const canonicalPath = `/services/${serviceId}`;
  const imagePath = service.heroImage || DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: {
      canonical: toAbsoluteUrl(canonicalPath),
    },
    openGraph: {
      title: `${title} | ${BRAND_NAME}`,
      description,
      url: toAbsoluteUrl(canonicalPath),
      siteName: BRAND_NAME,
      type: "article",
      images: [
        {
          url: toAbsoluteUrl(imagePath),
          alt: `${title} by ${BRAND_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${BRAND_NAME}`,
      description,
      images: [toAbsoluteUrl(imagePath)],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
