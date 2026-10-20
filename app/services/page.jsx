import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Boxes,
  FileText,
  Handshake,
  HardDrive,
  LayoutGrid,
  MonitorPlay,
  Network,
  ShieldCheck,
  UserPlus,
  Workflow,
} from "lucide-react";
import Footer from "@/app/layouts/Footer";
import { Container } from "@/components/ui/container";
import { buildServicesIndexMetadata } from "@/lib/seoMetadata";
import { servicesList } from "@/lib/servicesData";
import { MotionEntrance, MotionStagger } from "@/components/MotionEntrance";

export const metadata = buildServicesIndexMetadata();

const serviceIcons = {
  "digital-signage": MonitorPlay,
  automation: Boxes,
  onboarding: UserPlus,
  security: ShieldCheck,
  "software-dev": LayoutGrid,
  consulting: Handshake,
  "erp-deployment": Workflow,
  "ai-deployment": BrainCircuit,
  networking: Network,
  "zoho-partner": LayoutGrid,
  "document-management": FileText,
  "hardware-procurement": HardDrive,
};

export default function ServicesPage() {
  return (
    <>
      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen bg-background"
      >
        <section className="relative isolate overflow-hidden bg-foreground text-background">
          <Image
            src="/sections/background.svg"
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover"
            aria-hidden="true"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(rgb(0 27 67 / 58%), rgb(0 27 67 / 72%))",
            }}
          />
          <Container className="relative z-10 flex min-h-112 flex-col justify-center pt-20 md:min-h-160 md:pt-35">
            <MotionStagger trigger="mount" className="w-full">
              <p className="type-label mb-2 text-white/95">
                Capability ecosystem
              </p>
              <h1 className="type-route-hero max-w-xl text-[clamp(2rem,4vw,3.5rem)]! text-background">
                Solutions built around the work.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-6 text-white/90 md:text-lg md:leading-[1.55]">
                Explore the connected capabilities Enov8 uses to turn complex
                technology challenges into practical operating systems.
              </p>
            </MotionStagger>
          </Container>
        </section>

        <section className="services-index-section gradient-grid-surface relative isolate overflow-hidden border-b border-border py-16 md:py-24">
          <div className="surface-grid-canvas" aria-hidden="true" />
          <Container className="relative z-10">
            <MotionEntrance
              trigger="mount"
              className="mx-auto"
            >
              <p className="type-label text-brand">Our services</p>
              <h2 className="type-h2 mt-3 text-[clamp(2rem,4vw,2.5rem)]!">
                Expertise that carries a decision all the way to delivery.
              </h2>
              <p className="type-body-lg mt-3 max-w-2xl text-muted-foreground">
                Start with the problem in front of you, then bring together the
                right strategy, systems, and support to make progress last.
              </p>
            </MotionEntrance>

            <MotionStagger trigger="mount" staggerDelay={0.06} className="mt-14 md:mt-20">
              {servicesList.map((service, index) => {
                const Icon = serviceIcons[service.id];
                const imageFirst = index % 2 === 1;

                return (
                  <article
                    key={service.id}
                    className="grid items-center gap-10 py-14 md:grid-cols-2 md:gap-16 md:py-20 lg:gap-24"
                  >
                    <div className={imageFirst ? "md:order-1" : "md:order-2"}>
                      <Link
                        href={`/services/${service.id}`}
                        className="group focus-ring block"
                        aria-label={`Explore ${service.title}`}
                      >
                        <div className="relative mx-auto aspect-square w-full max-w-100 overflow-hidden rounded-xl border border-border/70 bg-muted shadow-[0_24px_50px_-36px_rgba(15,23,42,0.55)]">
                          <Image
                            src={service.heroImage}
                            alt=""
                            fill
                            sizes="(min-width: 768px) 42vw, 100vw"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                          />
                        </div>
                      </Link>
                    </div>

                    <div className={imageFirst ? "md:order-2" : "md:order-1"}>
                      <div className="flex items-center gap-3 text-brand">
                        <Icon className="size-5" aria-hidden="true" />
                        <span className="type-caption">
                          {service.content.length} capabilities
                        </span>
                      </div>
                      <h3 className="type-h3 mt-5 max-w-xl text-[clamp(2rem,3.2vw,3rem)]!">
                        {service.title}
                      </h3>
                      <p className="mt-5 max-w-[46ch] text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                        {service.description}
                      </p>
                      <ul className="mt-6 flex max-w-xl flex-wrap gap-x-5 gap-y-2 p-0 text-sm text-muted-foreground">
                        {service.menuHints.map((hint) => (
                          <li key={hint} className="before:mr-2 before:text-brand before:content-['•']">
                            {hint}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/services/${service.id}`}
                        className="group focus-ring mt-8 inline-flex items-center gap-3 text-sm font-semibold text-brand transition-colors duration-200 ease-out hover:text-foreground"
                      >
                        Explore service
                        <ArrowRight className="size-5 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
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
