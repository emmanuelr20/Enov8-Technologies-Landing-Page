import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildServiceMetadata } from "@/lib/seoMetadata";

export const metadata = buildServiceMetadata("hardware-procurement");

export default function HardwareProcurementPage() {
  return <ServicePageTemplate serviceId="hardware-procurement" />;
}
