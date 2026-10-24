import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildServiceMetadata } from "@/lib/seoMetadata";

export const metadata = buildServiceMetadata("document-management");

export default function DocumentManagementPage() {
  return <ServicePageTemplate serviceId="document-management" />;
}
