import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildServiceMetadata } from "@/lib/seoMetadata";

export const metadata = buildServiceMetadata("consulting");

export default function ConsultingPage() {
  return <ServicePageTemplate serviceId="consulting" />;
}
