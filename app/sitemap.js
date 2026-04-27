import { servicesData } from "@/lib/servicesData";

export default async function sitemap() {
  const baseUrl = "https://enov8technologies.com";
  const defaultDate = "2026-04-26T00:00:00.000Z";
  const lastModified = new Date(process.env.NEXT_PUBLIC_SITE_UPDATED_AT || defaultDate);

  const staticRoutes = [
    { route: "",                  changeFrequency: "weekly",  priority: 1.0 },
    { route: "/services",         changeFrequency: "weekly",  priority: 0.9 },
    { route: "/about",            changeFrequency: "monthly", priority: 0.8 },
    { route: "/accessibility",    changeFrequency: "yearly",  priority: 0.4 },
    { route: "/privacy-policy",   changeFrequency: "yearly",  priority: 0.4 },
    { route: "/terms-of-service", changeFrequency: "yearly",  priority: 0.4 },
  ];

  const serviceRoutes = Object.keys(servicesData).map((slug) => ({
    route: `/services/${slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes].map(
    ({ route, changeFrequency, priority }) => ({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency,
      priority,
    })
  );
}