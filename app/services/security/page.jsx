import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildServiceMetadata } from "@/lib/seoMetadata";

export const metadata = buildServiceMetadata("security");

export default function SecurityPage() {
  return <ServicePageTemplate serviceId="security" />;
}
