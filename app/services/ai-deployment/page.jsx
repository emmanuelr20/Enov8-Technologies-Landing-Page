import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildServiceMetadata } from "@/lib/seoMetadata";

export const metadata = buildServiceMetadata("ai-deployment");

export default function AiDeploymentPage() {
  return <ServicePageTemplate serviceId="ai-deployment" />;
}
