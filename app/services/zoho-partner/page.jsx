import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildServiceMetadata } from "@/lib/seoMetadata";

export const metadata = buildServiceMetadata("zoho-partner");

export default function ZohoPartnerPage() {
  return <ServicePageTemplate serviceId="zoho-partner" partnerLogo="/partners/zoho.svg" />;
}
