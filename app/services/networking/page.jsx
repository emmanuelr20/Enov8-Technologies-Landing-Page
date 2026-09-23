import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildServiceMetadata } from "@/lib/seoMetadata";

export const metadata = buildServiceMetadata("networking");

export default function NetworkingPage() {
  return <ServicePageTemplate serviceId="networking" />;
}
