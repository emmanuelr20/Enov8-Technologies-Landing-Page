import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BrainCircuit, Boxes, FileText, Handshake, HardDrive, LayoutGrid, MonitorPlay, Network, ShieldCheck, UserPlus, Workflow } from "lucide-react";
import Footer from "@/app/layouts/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { buildServicesIndexMetadata } from "@/lib/seoMetadata";
import { servicesList } from "@/lib/servicesData";
import { MotionEntrance, MotionStagger } from "@/components/MotionEntrance";

export const metadata = buildServicesIndexMetadata();

const serviceIcons = { "digital-signage": MonitorPlay, automation: Boxes, onboarding: UserPlus, security: ShieldCheck, "software-dev": LayoutGrid, consulting: Handshake, "erp-deployment": Workflow, "ai-deployment": BrainCircuit, networking: Network, "zoho-partner": LayoutGrid, "document-management": FileText, "hardware-procurement": HardDrive };

export default function ServicesPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <section className="relative isolate overflow-hidden bg-foreground text-background">
          <Image src="/sections/servicebackground.webp" alt="" fill preload sizes="100vw" className="object-cover" aria-hidden="true" />
          <div aria-hidden="true" className="absolute inset-0 bg-foreground/75" />
          <Container className="relative z-10 flex min-h-96 flex-col justify-center py-16 md:min-h-112 md:py-20">
            <MotionStagger trigger="mount" className="w-full">
              <p className="type-label mb-4 !text-white/95">Capability ecosystem</p>
              <h1 className="type-route-hero max-w-4xl !text-[clamp(2rem,4vw,3.5rem)] text-background">Solutions built around the work.</h1>
              <p className="mt-4 max-w-2xl text-base leading-6 text-white/90 md:text-lg md:leading-[1.55]">Explore the connected capabilities Enov8 uses to turn complex technology challenges into practical operating systems.</p>
            </MotionStagger>
          </Container>
        </section>

        <section className="border-b border-border bg-surface py-12 md:py-16">
          <Container>
            <div className="max-w-3xl">
              <p className="type-label mb-4 text-brand">Our services</p>
              <h2 className="type-h2 !text-[clamp(1.6rem,2.8vw,2.25rem)]">Find the right technology path for the challenge in front of you.</h2>
              <p className="type-body-lg mt-4 text-muted-foreground">We specialize in driving organizational change and digital transformation through high-impact, practical solutions that connect strategy, implementation, and support.</p>
            </div>
            <MotionStagger className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {servicesList.map((service) => {
                const Icon = serviceIcons[service.id];
                return (
                  <Card key={service.id} className="group h-full gap-4 py-5 transition-colors hover:border-brand/50">
                    <CardHeader className="px-5">
                      <div className="flex items-start justify-between gap-4">
                        <Icon className="h-7 w-7 text-brand" aria-hidden="true" />
                        <span className="type-caption">{service.content.length} capabilities</span>
                      </div>
                      <CardTitle className="type-h3 mt-5 !text-[clamp(1.2rem,1.5vw,1.45rem)]">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 px-5">
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                    <CardFooter className="px-5">
                      <Link href={`/services/${service.id}`} className="focus-ring rounded-md">
                        <Button variant="text" className="px-0">Explore service <ArrowRight aria-hidden="true" /></Button>
                      </Link>
                    </CardFooter>
                  </Card>
                );
              })}
            </MotionStagger>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
