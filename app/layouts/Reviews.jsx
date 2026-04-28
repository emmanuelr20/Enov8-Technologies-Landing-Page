"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { MessageSquareQuote } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ScrollReveal = dynamic(() => import("scrollreveal"), { ssr: false });

const REVIEWS = [
  {
    id: 1,
    text: "Enov8 Technologies completely transformed how we manage our digital infrastructure. Their team's technical depth is unmatched they identified critical gaps in our systems that we had overlooked for years and delivered a seamless solution within weeks. We strongly recommend them to any organization serious about growth.",
    name: "Adebayo Segun",
  },
  {
    id: 2,
    text: "Working with Enov8 Technologies was a turning point for our business. They didn't just build software, they understood our business process and engineered a platform that actually fits how we work. The team was professional, communicative, and delivered beyond our expectations. A truly world class partner.",
    name: "Chioma Nwosu",
  },
  {
    id: 3,
    text: "From consultation to deployment, the Enov8 team demonstrated an exceptional level of expertise and commitment. Their mobile solution reduced our customer onboarding time by 60% and significantly improved our client satisfaction scores. We've continued to expand our engagement with them.",
    name: "Emeka Osei",
  },
  {
    id: 4,
    text: "Enov8 Technologies handled our complete cloud migration with zero downtime. Their attention to security and data integrity throughout the process gave us confidence at every stage. They are the kind of technology partner every enterprise needs, reliable, skilled, and genuinely invested in your success.",
    name: "Fatima Rasheed",
  },
  {
    id: 5,
    text: "We engaged Enov8 Technologies for UI/UX redesign and enterprise integration, and the results speak for themselves. Our platform engagement increased by 45% within the first quarter post launch. Their design team took the time to understand our users deeply, and the technical team executed flawlessly.",
    name: "Tunde Adeyemi",
  },
];

export default function Reviews() {
  const headerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const sr = require("scrollreveal").default;

    if (headerRef.current) {
      sr().reveal(headerRef.current, {
        origin: "bottom",
        distance: "30px",
        duration: 600,
        easing: "ease-out",
        delay: 100,
        reset: false,
      });
    }

    if (cardRef.current) {
      sr().reveal(cardRef.current, {
        origin: "bottom",
        distance: "40px",
        duration: 700,
        easing: "ease-out",
        delay: 300,
        reset: false,
      });
    }
  }, []);

  return (
    <section className="relative" id="reviews">
      {/* Top Banner with Background Image */}
      <div className="relative h-[400px] md:h-[450px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/sections/review.webp"
            alt="Reviews Background"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-6" ref={headerRef}>
          {/* Header — Centered exactly like the image */}
          <div className="flex flex-col items-center justify-center md:text-center">
            <div className="flex items-center gap-4">
              <span className="w-1.5 h-12 bg-light-primary block shrink-0" />
              <h2 className="text-4xl md:text-5xl font-black text-white font-space tracking-tight">
                What Our Clients Are Saying!
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping Card Container */}
      <div className="relative z-20 -mt-32 md:-mt-40 mb-32" ref={cardRef}>
        <div className="container mx-auto px-6">
          {/* Swiper */}
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-bullet",
              bulletActiveClass: "swiper-bullet-active",
            }}
            navigation={true}
            className="reviews-swiper relative group"
          >

            {REVIEWS.map((review) => (
              <SwiperSlide key={review.id}>
                {/* Image-style: bright red card centered & overlapping */}
                <div className="flex justify-center mt-10 md:px-4">
                  <div className="relative max-w-3xl w-full bg-light-primary p-6 sm:p-8 md:p-12 lg:p-16 shadow-md md:h-[500px]">
                    {/* Quote icon - solid and smaller like the image */}
                    <MessageSquareQuote
                      className="text-white mb-6 fill-white"
                      size={48}
                      strokeWidth={0}
                    />

                    {/* Review text - properly weighted */}
                    <p className="text-white text-lg md:text-lg lg:text-xl leading-relaxed font-poppins mb-8 font-medium">
                      {review.text}
                    </p>

                    {/* Client name + company */}
                    <div className="mt-auto">
                      <p className="text-white font-semibold font-poppins text-lg md:text-xl tracking-wide">
                        {review.name}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Swiper pagination styles */}
      <style jsx global>{`
        .reviews-swiper .swiper-pagination {
          bottom: 0;
        }
        .reviews-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
          border-radius: 50%;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.5s ease;
        }
        .reviews-swiper .swiper-pagination-bullet-active {
          background: white;
          width: 24px;
          border-radius: 4px;
        }

        /* Built-in Navigation styling */
        .reviews-swiper .swiper-button-next,
        .reviews-swiper .swiper-button-prev {
          color: var(--light-primary);
          width: 50px;
          height: 50px;
          // background: var(--light-primary);
          opacity: 1;
          transition: none;
        }

        .reviews-swiper .swiper-button-prev {
          left: 10px;
        }
        .reviews-swiper .swiper-button-next {
          right: 10px;
        }

        @media (min-width: 1024px) {
          .reviews-swiper .swiper-button-prev {
            left: 8%; /* Increased gap from card */
          }
          .reviews-swiper .swiper-button-next {
            right: 8%; /* Increased gap from card */
          }
        }

        @media (min-width: 1536px) {
          .reviews-swiper .swiper-button-prev {
            left: 18%; /* Increased gap from card */
          }
          .reviews-swiper .swiper-button-next {
            right: 18%; /* Increased gap from card */
          }
        }

        .reviews-swiper .swiper-button-next:after,
        .reviews-swiper .swiper-button-prev:after {
          font-size: 14px;
          font-weight: 900;
        }

        .reviews-swiper .swiper-button-next:hover,
        .reviews-swiper .swiper-button-prev:hover {
          // background: var(--light-primary);
          transform: none;
        }

        @media (max-width: 768px) {
          .reviews-swiper .swiper-button-next,
          .reviews-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
