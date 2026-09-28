import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildServiceMetadata } from "@/lib/seoMetadata";

export const metadata = buildServiceMetadata("onboarding");

export default function OnboardingPage() {
  return <ServicePageTemplate serviceId="onboarding" />;
}
