import { ogSize, renderOg } from "@/lib/og";
import { getService, services } from "@/lib/servicesData";

export const alt = "Enov8 Technologies service";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  return renderOg({
    eyebrow: "Service",
    title: service?.title ?? "Our services",
    subtitle: service?.description,
  });
}
