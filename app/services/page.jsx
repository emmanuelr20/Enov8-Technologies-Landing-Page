import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "@/app/layouts/Footer";
import { Container } from "@/components/ui/container";
import { buildServicesIndexMetadata } from "@/lib/seoMetadata";
import { servicesList } from "@/lib/servicesData";
import { MotionEntrance, MotionStagger } from "@/components/MotionEntrance";
import ServiceImageReveal from "@/components/ServiceImageReveal";

export const metadata = buildServicesIndexMetadata();

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
                Business systems capability
              </p>
              <h1 className="type-route-hero max-w-4xl text-background">
                Unified operations for growing, connected businesses.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-[1.4] text-white/90 md:text-lg md:leading-[1.4]">
                We help growing African businesses replace disconnected tools and
                manual processes with dependable systems, from first assessment
                through implementation and support.
              </p>
            </MotionStagger>
          </Container>
        </section>

        <section className="services-index-section gradient-grid-surface relative isolate overflow-hidden border-b border-border py-16 md:py-24">
          <div className="surface-grid-canvas" aria-hidden="true" />
          <Container className="relative z-10">
            <MotionEntrance trigger="mount" className="mx-auto">
              <p className="type-label text-brand-hover">What we make work</p>
              <h2 className="type-h2 mt-3 max-w-2xl">
                One operating model, connected from strategy to delivery.
              </h2>
              <p className="type-body-lg mt-3 max-w-2xl text-muted-foreground">
                Choose the part of your operation that needs to work better. We
                will bring together the right platforms, software, infrastructure,
                and support around it.
              </p>
            </MotionEntrance>

            <MotionStagger
              trigger="mount"
              staggerDelay={0.06}
              className="mt-14 md:mt-20"
            >
              {servicesList.map((service, index) => {
                const imageFirst = index % 2 === 1;

                return (
                  <article
                    key={service.id}
                    className={`flex w-full flex-col items-center justify-between gap-15 py-16 lg:gap-4 lg:py-28 ${imageFirst ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                  >
                    <div className="w-full max-w-139.5">
                      <h3 className="type-h3 max-w-xl">
                        {service.title}
                      </h3>
                      <p className="mt-5 max-w-139.5 text-base leading-[1.4] text-muted-foreground md:text-lg md:leading-[1.4]">
                        {service.description}
                      </p>
                      <Link
                        href={`/services/${service.id}`}
                        className="group focus-ring mt-8 inline-flex items-center gap-3 text-sm font-medium text-brand-hover transition-colors duration-200 ease-out hover:text-foreground"
                      >
                        Explore service
                        <ArrowRight
                          className="size-5 transition-transform duration-200 ease-out group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>

                    <div className="w-full max-w-100 shrink-0">
                      <ServiceImageReveal
                        src={service.heroImage}
                        alt={service.title}
                        title={service.title}
                      />
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
