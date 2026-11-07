import { services } from "@/lib/servicesData";
import { absoluteUrl } from "@/lib/site";

export default function sitemap() {
  const lastModified = new Date(process.env.NEXT_PUBLIC_SITE_UPDATED_AT || "2026-11-06T00:00:00.000Z");

  const routes = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/services", changeFrequency: "weekly", priority: 0.9 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    ...services.map((s) => ({
      path: `/services/${s.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [absoluteUrl(s.heroImage)],
    })),
    { path: "/accessibility", changeFrequency: "yearly", priority: 0.3 },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes.map(({ path, ...rest }) => ({
    url: absoluteUrl(path),
    lastModified,
    ...rest,
  }));
}
