import { getService } from "@/lib/servicesData";
import { absoluteUrl, site } from "@/lib/site";

// Builds a complete metadata object (canonical, Open Graph, Twitter) for a
// page. Open Graph images come from the `opengraph-image` file conventions.
export function pageMetadata({ title, description, path, type = "website" }) {
  const url = absoluteUrl(path);
  const fullTitle = `${title} | ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      siteName: site.name,
      locale: site.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function buildServicesIndexMetadata() {
  return pageMetadata({
    title: "Business Systems and Operations Transformation",
    description:
      "Enov8 Technologies helps growing African businesses replace fragmented operations with connected, secure business systems through automation, platforms, software, infrastructure, and support.",
    path: "/services",
  });
}

export function buildServiceMetadata(slug) {
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: `${service.title} Services in Nigeria`,
    description: `${service.description.split(/(?<=\.)\s/)[0]} Delivered by ${site.name}, Lagos.`,
    path: `/services/${slug}`,
  });
}
