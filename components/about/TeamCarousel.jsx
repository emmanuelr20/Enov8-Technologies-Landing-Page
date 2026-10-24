"use client";

import { Children, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { A11y, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function TeamNavigation({ activeIndex, memberCount, onPrevious, onNext }) {
  return (
    <nav
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
    </nav>
  );
}

export default function TeamCarousel({ children }) {
  const slides = Children.toArray(children);
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
        {slides.map((slide) => (
          <SwiperSlide key={slide.key} className="h-125">
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>

      <TeamNavigation
        activeIndex={activeIndex}
        memberCount={slides.length}
        onPrevious={() => swiper?.slidePrev()}
        onNext={() => swiper?.slideNext()}
      />
    </div>
  );
}
