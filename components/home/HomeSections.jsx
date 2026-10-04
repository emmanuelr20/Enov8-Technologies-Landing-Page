import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Check,
  Fingerprint,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { servicesList } from "@/lib/servicesData";
import ConsultationModal from "@/components/ConsultationModal";
import { MotionEntrance, MotionStagger } from "@/components/MotionEntrance";
import { Button } from "@/components/ui/button";
import PartnerScroller from "@/components/home/PartnerScroller";
import OperatingModelDiagram from "@/components/home/OperatingModelDiagram";
import TransformationOrbit from "@/components/home/TransformationOrbit";

const pathGroups = [
  {
    label: "Acquire",
    title: "Bring people into your ecosystem",
    ids: ["onboarding", "digital-signage"],
  },
  {
    label: "Automate",
    title: "Remove friction from daily operations",
    ids: ["automation", "document-management", "zoho-partner"],
  },
  {
    label: "Protect",
    title: "Build trust into every layer",
    ids: ["security", "networking"],
  },
  {
    label: "Modernize",
    title: "Turn legacy complexity into capability",
    ids: ["software-dev", "erp-deployment", "ai-deployment"],
  },
  {
    label: "Equip",
    title: "Put the right technology in place",
    ids: ["hardware-procurement", "consulting"],
  },
];

const capabilityGroups = [
  {
    icon: Workflow,
    title: "Business systems",
    ids: [
      "automation",
      "erp-deployment",
      "zoho-partner",
      "document-management",
    ],
  },
  {
    icon: Fingerprint,
    title: "Identity and experience",
    ids: ["onboarding", "digital-signage"],
  },
  {
    icon: ShieldCheck,
    title: "Security and resilience",
    ids: ["security", "networking"],
  },
  {
    icon: Bot,
    title: "Software and intelligence",
    ids: ["software-dev", "ai-deployment"],
  },
];

const deliverySteps = [
  [
    "Understand",
    "Clarify the business context, constraints, and desired change.",
  ],
  [
    "Design",
    "Shape a practical roadmap and solution around the way your organization works.",
  ],
  [
    "Implement",
    "Turn the plan into dependable software, systems, and infrastructure.",
  ],
  [
    "Secure",
    "Build protection, governance, and operational resilience into delivery.",
  ],
  ["Support", "Stay close after launch so the solution keeps creating value."],
];

const serviceById = Object.fromEntries(
  servicesList.map((service) => [service.id, service]),
);

function SectionIntro({
  eyebrow,
  title,
  titleId,
  eyebrowClassName = "text-brand",
  titleClassName = "",
  bodyClassName = "text-muted-foreground",
  children,
}) {
  return (
    <div className="max-w-3xl">
      <p className={`type-label mb-4 ${eyebrowClassName}`}>{eyebrow}</p>
      <h2 id={titleId} className={`type-h2 ${titleClassName}`}>
        {title}
      </h2>
      {children ? (
        <p className={`type-body-lg mt-5 ${bodyClassName}`}>{children}</p>
      ) : null}
    </div>
  );
}

export default function HomeSections() {
  return (
    <>
      <section
        id="about"
        aria-labelledby="about-title"
        className="relative z-20 -mt-1 flex items-center border-0 bg-brand py-16 text-white lg:py-30"
      >
        <MotionStagger className="mx-auto grid w-full max-w-[var(--container-content)] gap-12 px-6 md:px-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-16">
          <OperatingModelDiagram />
          <div>
            <SectionIntro
              eyebrowClassName="!text-white"
              titleClassName="!text-white"
              bodyClassName="!text-white/70"
              titleId="about-title"
              eyebrow="The Enov8 Technologies approach"
              title="Strategy is only useful when it becomes operational."
            >
              Enov8 Technologies helps organizations bridge the gap between
              legacy operations and digital-first growth by combining IT
              consulting with hands-on delivery.
            </SectionIntro>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Scalable strategy",
                "Expert execution",
                "Secure foundations",
                "Practical support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-t border-white/25 pt-4 text-sm font-medium text-white"
                >
                  <Check className="h-4 w-4 text-white" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="focus-ring mt-9 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-white hover:text-white/80"
            >
              Meet Enov8 Technologies <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </MotionStagger>
      </section>

      <section
        id="services"
        aria-labelledby="paths-title"
        className="transformation-section relative isolate overflow-hidden border-y py-16 text-white lg:py-20"
      >
        <div className="relative z-10 mx-auto w-full max-w-[var(--container-content)] px-6 md:px-12 lg:px-16">
          <MotionEntrance className="max-w-3xl">
            <SectionIntro
              titleId="paths-title"
              eyebrowClassName="!text-[#5FA3FF]"
              titleClassName="!text-white"
              bodyClassName="!text-white/70"
              eyebrow="Transformation paths"
              title="Start with the business challenge, then choose the right technology path."
            >
              A connected service portfolio gives your team room to solve the
              immediate problem without losing sight of the operating model around
              it.
            </SectionIntro>
          </MotionEntrance>
          <TransformationOrbit pathGroups={pathGroups} />
        </div>
      </section>

      <section
        aria-labelledby="capabilities-title"
        className="bg-background py-16 lg:py-20"
      >
        <div className="mx-auto w-full max-w-[var(--container-content)] px-6 md:px-12 lg:px-16">
          <MotionEntrance className="max-w-3xl">
            <SectionIntro
              titleId="capabilities-title"
              eyebrow="Capability ecosystem"
              title="Connected capabilities, designed to work together."
            />
          </MotionEntrance>
          <MotionStagger className="mt-12 grid gap-5 md:grid-cols-2">
            {capabilityGroups.map(({ icon: Icon, title, ids }) => (
              <div
                key={title}
                className="rounded-xl border border-border/70 bg-surface/90 p-6 md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <Icon className="h-7 w-7 text-brand" aria-hidden="true" />
                  <span className="type-caption">
                    {ids.length} capabilities
                  </span>
                </div>
                <h3 className="type-h3 mt-10">{title}</h3>
                <ul className="mt-5 flex list-none flex-wrap gap-2 p-0">
                  {ids.map((id) => (
                    <li key={id}>
                      <Link
                        href={`/services/${id}`}
                        className="focus-ring rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground hover:border-brand/50 hover:text-brand"
                      >
                        {serviceById[id].title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section
        aria-labelledby="delivery-title"
        className="relative isolate overflow-hidden bg-zinc-950 py-16 text-white lg:py-20"
      >
        <Image
          src="/sections/review.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-zinc-950/80" />
        <div className="relative z-10 mx-auto grid w-full max-w-[var(--container-content)] gap-12 px-6 md:px-12 min-[1426px]:grid-cols-[.75fr_1.25fr] lg:px-16">
          <MotionEntrance className="max-w-3xl">
            <SectionIntro
              eyebrowClassName="!text-white"
              titleClassName="!text-white"
              bodyClassName="!text-white/70"
              titleId="delivery-title"
              eyebrow="How we deliver"
              title="From strategic clarity to supported operations."
            >
              The work moves from understanding the business to implementing the
              right system and supporting it in practice.
            </SectionIntro>
          </MotionEntrance>
          <MotionStagger
            as="ol"
            itemAs="li"
            aria-label="Enov8 delivery stages"
            className="grid gap-0 md:grid-cols-5"
          >
            {deliverySteps.map(([title, description], index) => (
              <div
                key={title}
                className="border-l border-white/15 py-5 pl-5 md:border-l-0 md:border-t md:pl-0 md:pt-5 md:pr-5"
              >
                <span className="type-label text-blue-200">0{index + 1}</span>
                <h3 className="type-h4 mt-6 text-white">{title}</h3>
                <p className="mt-3 text-sm !text-white/75">{description}</p>
              </div>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section
        id="partners"
        aria-labelledby="ecosystem-title"
        className="overflow-x-clip border-y border-border/60 bg-surface/90 py-16 lg:py-20"
      >
        <div className="mx-auto w-full max-w-[var(--container-content)] px-6 md:px-12 lg:px-16">
          <MotionStagger className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
            <SectionIntro
              titleId="ecosystem-title"
              eyebrow="Technology ecosystem"
              title="A delivery network built around the work."
            />
            <p className="max-w-md text-sm text-muted-foreground">
              Selected technology marks currently represented in Enov8's working
              ecosystem. Partnership and certification claims should be
              confirmed directly before publication.
            </p>
          </MotionStagger>
          <MotionEntrance>
            <PartnerScroller />
          </MotionEntrance>
        </div>
      </section>

      <section
        id="contact"
        aria-labelledby="final-cta-title"
        className="bg-brand py-20 text-on-brand md:py-28"
      >
        <MotionStagger className="mx-auto flex w-full max-w-[var(--container-content)] flex-col gap-8 px-6 md:px-12 lg:flex-row lg:items-end lg:justify-between lg:px-16">
          <div className="max-w-2xl">
            <p className="type-label mb-4 !text-white/70">Ready when you are</p>
            <h2 id="final-cta-title" className="type-display text-white">
              Let’s turn the next complex problem into a working system.
            </h2>
            <p className="mt-5 max-w-xl text-lg !text-white/80">
              Start with a conversation about where your organization is now and
              what needs to change next.
            </p>
          </div>
          <ConsultationModal
            trigger={
              <Button
                variant="secondary"
                size="lg"
                className="shrink-0 bg-white text-zinc-950 hover:bg-white/90"
              >
                Start a consultation <ArrowRight aria-hidden="true" />
              </Button>
            }
          />
        </MotionStagger>
      </section>
    </>
  );
}
