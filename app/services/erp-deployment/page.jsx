import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildServiceMetadata } from "@/lib/seoMetadata";

export const metadata = buildServiceMetadata("erp-deployment");

export default function ErpDeploymentPage() {
  return <ServicePageTemplate serviceId="erp-deployment" />;
}
