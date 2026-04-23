export default async function sitemap() {
  const baseUrl = "https://enov8technologies.com";
  const currentDate = new Date();

  const staticRoutes = [
    { route: "",                  changeFrequency: "weekly",  priority: 1.0 },
    { route: "/services",         changeFrequency: "weekly",  priority: 0.9 },
    { route: "/accessibility",    changeFrequency: "yearly",  priority: 0.4 },
    { route: "/privacy-policy",   changeFrequency: "yearly",  priority: 0.4 },
    { route: "/terms-of-service", changeFrequency: "yearly",  priority: 0.4 },
  ];

  const serviceRoutes = [
    "ai-deployment",
    "automation",
    "consulting",
    "digital-signage",
    "document-management",
    "erp-deployment",
    "hardware-procurement",
    "networking",
    "onboarding",
    "security",
    "software-dev",
    "zoho-partner",
  ].map((slug) => ({
    route: `/services/${slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes].map(
    ({ route, changeFrequency, priority }) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency,
      priority,
    })
  );
}