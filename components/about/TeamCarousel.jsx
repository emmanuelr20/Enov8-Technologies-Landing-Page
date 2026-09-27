"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Linkedin } from "lucide-react";
import { A11y, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Badge } from "@/components/ui/badge";
import "swiper/css";

function TeamNavigation({ activeIndex, memberCount, onPrevious, onNext }) {
  return (
    <div
      className="mt-8 flex justify-end gap-3"
      aria-label="Team carousel navigation"
    >
      <button
        type="button"
        onClick={onPrevious}
        disabled={activeIndex === 0}
        aria-label="Previous team member"
        className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-40"
      >
        <ArrowLeft className="size-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={activeIndex === memberCount - 1}
        aria-label="Next team member"
        className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-40"
      >
        <ArrowRight className="size-5" aria-hidden="true" />
      </button>
    </div>
  );
}

export default function TeamCarousel({ members }) {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <Swiper
        modules={[A11y, Keyboard]}
        slidesPerView={1}
        spaceBetween={32}
        keyboard={{ enabled: true, onlyInViewport: true }}
        onSwiper={setSwiper}
        onSlideChange={(instance) => setActiveIndex(instance.activeIndex)}
        aria-label="Team members"
      >
        {members.map((member) => {
          const bioParagraphs = Array.isArray(member.bio)
            ? member.bio
            : [member.bio];

          return (
            <SwiperSlide key={member.name} className="h-125">
              <article className="grid gap-8 md:h-full xl:grid-cols-[minmax(15rem,0.8fr)_minmax(0,1.2fr)] md:gap-10 lg:gap-4 xl:gap-8">
                <div className="relative flex h-full items-center justify-center">
                  <div className="relative aspect-4/5 w-full overflow-hidden border border-border/70 bg-background xl:aspect-auto lg:h-full">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      sizes="(min-width: 768px) 34vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <Badge className="absolute left-3 top-3 z-10 rounded-sm border-border/70 bg-background/95 px-2 py-1 text-foreground shadow-sm">
                    {member.role}
                  </Badge>
                </div>

                <div className="flex flex-col border-t border-border pt-6 md:h-full md:min-h-0 md:border-t-0 md:pt-2">
                  <h3 className="type-h4 mb-3">{member.name}</h3>
                  <div className="space-y-3 text-muted-foreground">
                    {bioParagraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="mt-3 inline-flex size-11 shrink-0 items-center justify-center self-start rounded-full border border-border text-brand transition-colors hover:border-brand hover:bg-brand/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                    >
                      <Linkedin className="size-5" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <TeamNavigation
        activeIndex={activeIndex}
        memberCount={members.length}
        onPrevious={() => swiper?.slidePrev()}
        onNext={() => swiper?.slideNext()}
      />
    </div>
  );
}
