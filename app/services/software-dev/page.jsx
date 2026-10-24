import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildServiceMetadata } from "@/lib/seoMetadata";

export const metadata = buildServiceMetadata("software-dev");

export default function SoftwareDevPage() {
  return <ServicePageTemplate serviceId="software-dev" />;
}
