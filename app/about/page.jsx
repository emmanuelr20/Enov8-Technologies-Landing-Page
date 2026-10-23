import Image from "next/image";
import { Award, Globe, Handshake, Lightbulb } from "lucide-react";
import Footer from "@/app/layouts/Footer";
import TeamSection from "@/components/about/TeamSection";
import { MotionEntrance, MotionStagger } from "@/components/MotionEntrance";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Business Systems Transformation Partner",
  description:
    "Learn how Enov8 helps growing African businesses replace fragmented operations with connected, secure business systems.",
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
    "Building dependable business systems that help African organizations operate better and grow with confidence.",
  ],
];

export default function AboutPage() {
  return (
    <>
      <main id="main-content" tabIndex={-1} className="min-h-screen bg-background">
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
          <Container className="relative z-10 flex min-h-112 flex-col justify-center pt-28 md:min-h-160 md:pt-35">
            <MotionStagger trigger="mount" className="w-full">
              <p className="type-label mb-2 text-white/95">Systems transformation partner</p>
              <h1 className="type-route-hero max-w-4xl text-background">
                Who we are.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-[1.4] text-white/90 md:text-lg md:leading-[1.4]">
                Enov8 Technologies is a Nigerian-based systems partner for
                growing African businesses. We turn fragmented operations,
                disconnected tools, and complex technology decisions into
                dependable systems that help teams move forward.
              </p>
            </MotionStagger>
          </Container>
        </section>

        <section className="about-grid-section gradient-grid-surface relative isolate overflow-hidden py-12 md:py-16">
          <div className="surface-grid-canvas" aria-hidden="true" />
          <Container className="relative z-10 grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-20">
            <MotionEntrance pattern="fadeLeft" className="max-w-2xl">
              <p className="type-label mb-4 text-brand-hover">The problem we solve</p>
              <h2 className="type-h2">Make the way your business works easier to depend on.</h2>
              <div className="mt-6 space-y-5 text-muted-foreground">
                <p>
                  Growing organizations often outgrow spreadsheets, disconnected
                  platforms, and manual handoffs before they have the internal
                  team to connect everything properly.
                </p>
                <p>
                  We help them understand the operating problem, choose the right
                  system, implement it properly, and stay close after launch.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm uppercase tracking-[0.12em] text-brand-hover">
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
            <MotionStagger itemClassName="h-full" className="grid gap-5 lg:grid-cols-2">
            <Card className="h-full">
              <CardContent className="p-8 md:p-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-xl font-bold text-brand">
                  V
                </div>
                <h2 className="type-h3">Our vision</h2>
                <p className="mt-5 text-muted-foreground">
                  To be the trusted systems partner for growing businesses
                  across Africa, helping them operate with clearer information,
                  connected workflows, and dependable technology.
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

        <section className="about-grid-section gradient-grid-surface relative isolate overflow-hidden py-16 md:py-24">
          <div className="surface-grid-canvas" aria-hidden="true" />
          <Container className="relative z-10">
            <MotionEntrance className="max-w-3xl">
              <p className="type-label mb-4 text-brand">The Enov8 Systems Method</p>
              <h2 className="type-h2">Clarity first. Dependable delivery next.</h2>
              <p className="mt-5 text-muted-foreground">
                Our process is designed to reduce risk between the first decision
                and the moment your team relies on the system every day.
              </p>
            </MotionEntrance>
            <MotionStagger className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {values.map(([title, Icon, description]) => (
                <Card key={title} className="h-full">
                  <CardContent className="p-6">
                    <Icon className="h-8 w-8 text-brand" aria-hidden="true" />
                    <h3 className="type-h4  mt-8">{title}</h3>
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
