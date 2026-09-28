import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";
import {
  LuBrainCircuit,
  LuBoxes,
  LuFileText,
  LuHardDrive,
  LuHandshake,
  LuLayers,
  LuLayoutGrid,
  LuMonitorPlay,
  LuNetwork,
  LuShield,
  LuUserPlus,
} from "react-icons/lu";
import Footer from "@/app/layouts/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { MotionEntrance, MotionStagger } from "@/components/MotionEntrance";
import { servicesData, servicesList } from "@/lib/servicesData";

const iconMap = {
  "digital-signage": LuMonitorPlay,
  automation: LuBoxes,
  onboarding: LuUserPlus,
  security: LuShield,
  "software-dev": LuLayoutGrid,
  consulting: LuHandshake,
  "erp-deployment": LuLayoutGrid,
  "ai-deployment": LuBrainCircuit,
  networking: LuNetwork,
  "zoho-partner": LuLayers,
  "document-management": LuFileText,
  "hardware-procurement": LuHardDrive,
};

export default function ServicePageTemplate({ serviceId, partnerLogo }) {
  const service = servicesData[serviceId];
  const Icon = iconMap[serviceId];
  const detailImages = (service.detailImages ?? []).filter(
    (image) => image !== service.heroImage,
  );
  const relatedServices = servicesList
    .filter((item) => item.id !== serviceId)
    .slice(0, 3);
  const serviceUrl = `https://enov8technologies.com/services/${serviceId}`;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    url: serviceUrl,
    image: `https://enov8technologies.com${service.heroImage}`,
    areaServed: "Global",
    provider: {
      "@type": "Organization",
      name: "Enov8 Technologies",
      url: "https://enov8technologies.com",
    },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://enov8technologies.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://enov8technologies.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: serviceUrl,
      },
    ],
  };

  return (
    <>
      <main className="min-h-screen bg-background">
        <script
          id={`service-jsonld-${serviceId}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          id={`service-breadcrumb-jsonld-${serviceId}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <section className="relative isolate overflow-hidden bg-foreground text-background">
          <Image
            src={service.heroImage}
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover"
            aria-hidden="true"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-foreground/75"
          />
          <Container className="relative z-10 flex min-h-112 flex-col justify-center py-24 md:min-h-[34rem] md:py-32">
            <MotionStagger trigger="mount" className="w-full">
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-sm text-background/75"
            >
              <Link
                href="/"
                className="focus-ring rounded-sm hover:text-background"
              >
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-brand" aria-hidden="true" />
              <Link
                href="/services"
                className="focus-ring rounded-sm hover:text-background"
              >
                Services
              </Link>
              <ChevronRight className="h-4 w-4 text-brand" aria-hidden="true" />
              <span className="text-background">{service.title}</span>
            </nav>
            {partnerLogo ? (
              <div className="relative mb-8 h-16 w-44 rounded-md bg-white p-3 md:h-20 md:w-56">
                <Image
                  src={partnerLogo}
                  alt="Partner logo"
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 224px, 176px"
                />
              </div>
            ) : null}
            <p className="type-label mb-4 !text-white">Service capability</p>
            <h1 className="type-route-hero max-w-4xl text-background">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-6 text-white/85 md:text-lg md:leading-[1.55]">
              {service.description}
            </p>
            </MotionStagger>
          </Container>
        </section>

        <section className="border-b border-border bg-background py-16 md:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-16">
            <MotionEntrance className="min-w-0">
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <Card>
                <CardHeader>
                  <CardTitle className="type-h4">Our services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1">
                  {servicesList.map((item) => (
                    <Link
                      key={item.id}
                      href={`/services/${item.id}`}
                      // Avoid downloading all 12 routes before a service is chosen.
                      prefetch={false}
                      className={`focus-ring flex rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${item.id === serviceId ? "bg-brand text-on-brand" : "text-muted-foreground hover:bg-accent hover:text-foreground"}`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </CardContent>
              </Card>
              <Card className="border-brand/20 bg-brand text-on-brand">
                <CardContent className="p-6">
                  {Icon ? (
                    <Icon className="mb-6 h-8 w-8" aria-hidden="true" />
                  ) : null}
                  <h2 className="type-h4 !text-white">
                    Ready to make this practical?
                  </h2>
                  <p className="mt-3 text-sm !text-white/85">
                    Start a conversation about the right next step for your
                    organization.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium">
                    <Phone className="h-4 w-4" aria-hidden="true" /> +234 913
                    363 2465
                  </div>
                  <ConsultationModal
                    trigger={
                      <Button
                        variant="secondary"
                        size="lg"
                        className="mt-6 w-full bg-white text-foreground hover:bg-white/90"
                      >
                        Start a consultation <ArrowRight aria-hidden="true" />
                      </Button>
                    }
                  />
                </CardContent>
              </Card>
            </aside>
            </MotionEntrance>

            <MotionEntrance className="min-w-0">
            <div className="min-w-0">
              <div className="grid gap-5 sm:grid-cols-2">
                {detailImages.map((image, index) => (
                  <MotionEntrance
                    as="figure"
                    key={image}
                    delay={index * 0.08}
                    className={`relative overflow-hidden rounded-xl border border-border bg-surface ${index === 0 ? "sm:col-span-2 aspect-16/8" : "aspect-4/3"}`}
                  >
                    <Image
                      src={image}
                      alt={`${service.title} supporting visual ${index + 1}`}
                      fill
                      // Match the capped container, sidebar, gaps and figure border.
                      sizes={index === 0
                        ? "(min-width: 1360px) 878px, (min-width: 1024px) calc(100vw - 482px), (min-width: 768px) calc(100vw - 98px), calc(100vw - 50px)"
                        : "(min-width: 1360px) 428px, (min-width: 1024px) calc(50vw - 252px), (min-width: 768px) calc(50vw - 60px), (min-width: 640px) calc(50vw - 36px), calc(100vw - 50px)"}
                      className="object-cover"
                    />
                  </MotionEntrance>
                ))}
              </div>
              <MotionStagger className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
                {service.content.map((item) => (
                  <article
                    key={item.heading}
                    className="border-t border-border pt-6"
                  >
                    <h2 className="type-h4">{item.heading}</h2>
                    <p className="mt-3 text-muted-foreground">{item.text}</p>
                  </article>
                ))}
              </MotionStagger>
              <div className="mt-16 border-t border-border pt-8">
                <p className="type-label mb-4 text-brand">
                  Explore related capabilities
                </p>
                <MotionStagger className="grid gap-3 sm:grid-cols-3">
                  {relatedServices.map((item) => (
                    <Link
                      key={item.id}
                      href={`/services/${item.id}`}
                      className="focus-ring flex h-full flex-col rounded-lg border border-border p-4 transition-colors hover:border-brand/50 hover:bg-accent"
                    >
                      <span className="font-medium">{item.title}</span>
                      <ArrowRight
                        className="mt-4 h-4 w-4 text-brand"
                        aria-hidden="true"
                      />
                    </Link>
                  ))}
                </MotionStagger>
              </div>
            </div>
            </MotionEntrance>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
