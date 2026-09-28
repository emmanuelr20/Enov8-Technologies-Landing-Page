import Image from "next/image";
import { Award, Globe, Handshake, Lightbulb } from "lucide-react";
import Footer from "@/app/layouts/Footer";
import TeamSection from "@/components/about/TeamSection";
import { MotionEntrance, MotionStagger } from "@/components/MotionEntrance";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Who We Are",
  description:
    "Learn about Enov8 Technologies, our vision, mission, and the core values that drive our commitment to delivering world-class digital solutions.",
};

const stats = [
  ["5+", "Service Verticals Delivered"],
  ["50+", "Projects Planned & Deployed"],
  ["3", "Showcase Portfolio Projects"],
  ["24/7", "Post-Deployment Support"],
  ["6", "Technology Partners"],
];

const values = [
  [
    "Innovation First",
    Lightbulb,
    "We constantly explore new technologies to provide forward-thinking solutions that keep our clients ahead of the curve.",
  ],
  [
    "Quality-Driven Delivery",
    Award,
    "Excellence is our baseline. We maintain an uncompromising standard of quality in every line of code and piece of hardware.",
  ],
  [
    "Client Partnership",
    Handshake,
    "We align our goals with yours. Your success is our core metric, and we build long-term relationships based on trust.",
  ],
  [
    "Excellence",
    Globe,
    "Building world-class digital solutions that are accessible, scalable, and built for the future of the continent's digital economy.",
  ],
];

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <section className="relative isolate overflow-hidden bg-foreground text-background">
          <Image
            src="/sections/servicebackground.webp"
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
          <Container className="relative z-10 flex min-h-[28rem] flex-col justify-center py-24 md:min-h-[34rem] md:py-32">
            <MotionStagger trigger="mount" className="w-full">
              <p className="type-label mb-4 !text-white/95">Company overview</p>
              <h1 className="type-route-hero max-w-4xl text-background">
                Who we are.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-6 text-white/90 md:text-lg md:leading-[1.55]">
                Enov8 Technologies Ltd. is a Nigerian-based technology company
                delivering end-to-end digital solutions. We are a forward-thinking
                team united by one purpose: turning complex technology challenges
                into competitive advantages for our clients.
              </p>
            </MotionStagger>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-20">
            <MotionEntrance pattern="fadeLeft" className="max-w-2xl">
              <p className="type-label mb-4 text-brand">Our approach</p>
              <h2 className="type-h2">Built to last. Designed to grow.</h2>
              <div className="mt-6 space-y-5 text-muted-foreground">
                <p>
                  Founded on principles of quality, innovation, and client
                  partnership, Enov8 Technologies serves clients across fintech,
                  education, e-commerce, healthcare, transport, and the public
                  sector.
                </p>
                <p>
                  From a startup&apos;s first digital product to an
                  enterprise&apos;s cloud migration, we deliver technology
                  across software development, managed IT services, hardware
                  procurement, cloud infrastructure, and licensing.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium uppercase tracking-[0.12em] text-brand">
                <span>Quality-driven</span>
                <span aria-hidden="true">•</span>
                <span>Client-centric</span>
                <span aria-hidden="true">•</span>
                <span>Innovation-led</span>
              </div>
            </MotionEntrance>
            <MotionStagger className="grid gap-4 sm:grid-cols-2">
              {stats.map(([value, label]) => (
                <Card key={label}>
                  <CardContent className="p-6">
                    <p className="type-h3 text-brand">{value}</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </MotionStagger>
          </Container>
        </section>

        <section className="border-y border-border bg-muted/25 py-16 md:py-24">
          <Container>
            <MotionStagger itemClassName="h-full" className="grid gap-5 md:grid-cols-2">
            <Card className="h-full">
              <CardContent className="p-8 md:p-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-xl font-bold text-brand">
                  V
                </div>
                <h2 className="type-h3">Our vision</h2>
                <p className="mt-5 text-muted-foreground">
                  To be the most trusted technology partner for businesses
                  across Africa, delivering world-class digital solutions that
                  are accessible, scalable, and built for the future of the
                  continent&apos;s digital economy.
                </p>
                <blockquote className="mt-8 border-t border-border pt-5 text-muted-foreground italic">
                  “The technology your organisation needs to compete globally
                  should not require a global budget. We are here to close that
                  gap.”
                </blockquote>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-8 md:p-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-xl font-bold text-brand">
                  M
                </div>
                <h2 className="type-h3">Our mission</h2>
                <p className="mt-5 text-muted-foreground">
                  To empower businesses and institutions with innovative,
                  reliable, and tailored technology solutions, spanning software
                  development, managed services, hardware infrastructure, and
                  cloud platforms – enabling them to operate efficiently, scale
                  confidently, and compete without limits.
                </p>
              </CardContent>
            </Card>
            </MotionStagger>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <MotionEntrance className="max-w-3xl">
              <p className="type-label mb-4 text-brand">How we work</p>
              <h2 className="type-h2">The principles behind the delivery.</h2>
              <p className="mt-5 text-muted-foreground">
                The foundational principles that guide our decisions, shape our
                culture, and define how we partner with our clients.
              </p>
            </MotionEntrance>
            <MotionStagger className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {values.map(([title, Icon, description]) => (
                <Card key={title} className="h-full">
                  <CardContent className="p-6">
                    <Icon className="h-8 w-8 text-brand" aria-hidden="true" />
                    <h3 className="type-h4 mt-8">{title}</h3>
                    <p className="mt-4 text-muted-foreground">{description}</p>
                  </CardContent>
                </Card>
              ))}
            </MotionStagger>
          </Container>
        </section>
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
