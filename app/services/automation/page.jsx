import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildServiceMetadata } from "@/lib/seoMetadata";

export const metadata = buildServiceMetadata("automation");

export default function AutomationPage() {
  return <ServicePageTemplate serviceId="automation" />;
}
