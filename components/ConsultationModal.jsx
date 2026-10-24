"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowRight, Calendar, Mail, X } from "lucide-react";
import Image from "next/image";

const ConsultationModal = ({ trigger }) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    ["/sections/book.webp", "/sections/send.webp"].forEach((src) => {
      const image = new window.Image();
      image.decoding = "async";
      image.src = src;
    });
  }, []);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="consultation-overlay fixed inset-0 z-200 bg-foreground/65" />
        <DialogPrimitive.Content className="consultation-sheet focus-ring fixed inset-y-0 right-0 z-200 flex h-svh w-full max-w-2xl flex-col overflow-y-auto bg-background/95 shadow-2xl backdrop-blur-2xl">
          <div className="relative flex items-center justify-center px-6 py-6 md:px-10 md:py-8">
            <DialogPrimitive.Title className="type-h3 text-center text-foreground">
              Book a systems assessment
            </DialogPrimitive.Title>
            <DialogPrimitive.Close className="focus-ring absolute right-4 top-4 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
              <X className="size-6" aria-hidden="true" />
              <span className="sr-only">Close consultation options</span>
            </DialogPrimitive.Close>
          </div>

          <div className="flex flex-1 flex-col px-6 pb-8 md:px-10 md:pb-10">
            <DialogPrimitive.Description className="type-body mx-auto mt-3 max-w-xl text-center text-muted-foreground">
              Tell us where operations are slowing down. We’ll help you identify
              the clearest next step and turn it into a practical plan.
            </DialogPrimitive.Description>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <a
                href="https://user1-demo1912.zohobookings.com/#/4937930000000036076"
                target="_blank"
                rel="noopener noreferrer"
                className="group focus-ring relative isolate flex aspect-square flex-col justify-end overflow-hidden rounded-2xl bg-foreground p-6 text-background shadow-lg transition-transform duration-200 ease-out hover:-translate-y-1"
              >
                <Image
                  src="/sections/book.webp"
                  alt=""
                  fill
                  sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 1024px) 40vw, 320px"
                  quality={75}
                  loading={open ? "eager" : "lazy"}
                  preload
                  unoptimized
                  fetchPriority={open ? "high" : "auto"}
                  aria-hidden="true"
                  className="-z-10 object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-foreground/65" />
                <Calendar className="mb-auto size-8 text-white" aria-hidden="true" />
                <div>
                  <h3 className="type-h3 text-white">Book a discovery call</h3>
                  <p className="mt-2 text-sm leading-[1.4] text-white/80">
                    Schedule a focused 30-minute systems assessment.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white">
                    Book the assessment
                    <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </a>

              <a
                href="mailto:sales@enov8technologies.com?subject=Project Inquiry - Enov8 Technologies"
                className="group focus-ring relative isolate flex aspect-square flex-col justify-end overflow-hidden rounded-2xl bg-foreground p-6 text-background shadow-lg transition-transform duration-200 ease-out hover:-translate-y-1"
              >
                <Image
                  src="/sections/send.webp"
                  alt=""
                  fill
                  sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 1024px) 40vw, 320px"
                  quality={75}
                  loading={open ? "eager" : "lazy"}
                  preload
                  unoptimized
                  fetchPriority={open ? "high" : "auto"}
                  aria-hidden="true"
                  className="-z-10 object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-foreground/65" />
                <Mail className="mb-auto size-8 text-white" aria-hidden="true" />
                <div>
                  <h3 className="type-h3 text-white">Send an inquiry</h3>
                  <p className="mt-2 text-sm leading-[1.4] text-white/80">
                    Tell us what is slowing your operation down and where you need support.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white">
                    Send your inquiry
                    <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </div>

            <span className="type-label mt-10 text-center text-muted-foreground font-normal">
              Connected systems for better operations
            </span>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default ConsultationModal;
