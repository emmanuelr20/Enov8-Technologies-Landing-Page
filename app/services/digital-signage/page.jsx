import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildServiceMetadata } from "@/lib/seoMetadata";

export const metadata = buildServiceMetadata("digital-signage");

export default function DigitalSignagePage() {
  return <ServicePageTemplate serviceId="digital-signage" />;
}
