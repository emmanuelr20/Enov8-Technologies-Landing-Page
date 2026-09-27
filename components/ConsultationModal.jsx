"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, Calendar, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ConsultationModal = ({ trigger }) => {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-200 bg-foreground/65 duration-[var(--motion-standard)] ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="focus-ring fixed inset-0 z-200 h-svh max-h-svh w-screen max-w-none overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-[url('/sections/transform-background.png')] bg-cover bg-center bg-no-repeat duration-[var(--motion-slow)] ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/7" />
          <div className="relative z-10 flex min-h-full flex-col">
            <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-6 md:px-12 md:py-10">
            <div className="flex min-h-28 items-center border-b border-white px-5 py-6 pr-16 md:px-8 md:pr-20">
              <DialogPrimitive.Title className="type-h3 text-foreground">
                Start Your Transformation
              </DialogPrimitive.Title>
              <DialogPrimitive.Close className="focus-ring absolute right-4 top-4 inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
            </div>

            <div className="space-y-6 p-5 md:p-8">
              <DialogPrimitive.Description className="type-body max-w-[65ch] text-muted-foreground">
                Ready to bridge the gap between your operations and
                digital-first growth? Choose how you'd like to connect with our
                experts.
              </DialogPrimitive.Description>

              <div className="grid min-w-0 gap-4">
                {/* Zoho Bookings Option */}
                <a
                  href="https://user1-demo1912.zohobookings.com/#/4937930000000036076"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring group block min-w-0 rounded-xl"
                >
                  <div className="relative flex min-w-0 flex-col items-start gap-3 rounded-xl border border-border bg-background p-4 transition-colors hover:border-brand hover:bg-accent sm:flex-row sm:items-center sm:gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-lg font-semibold leading-6 transition-colors group-hover:text-brand sm:text-xl sm:leading-6">
                        Book a Discovery Call
                      </h4>
                      <p className="mt-1 text-sm leading-5 sm:text-base sm:leading-[1.6]">
                        Schedule a 30-minute consultation via Zoho Bookings.
                      </p>
                    </div>
                    <ArrowRight aria-hidden="true" className="absolute right-4 top-7 shrink-0 text-muted-foreground motion-arrow group-hover:translate-x-1 group-hover:text-brand sm:static" />
                  </div>
                </a>

                {/* Email Option */}
                <a
                  href="mailto:sales@enov8technologies.com?subject=Project Inquiry - Enov8 Technologies"
                  className="focus-ring group block min-w-0 rounded-xl"
                >
                  <div className="relative flex min-w-0 flex-col items-start gap-3 rounded-xl border border-border bg-background p-4 transition-colors hover:border-brand hover:bg-accent sm:flex-row sm:items-center sm:gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-brand/30 bg-brand/5">
                      <Mail className="h-6 w-6 text-brand" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-lg font-semibold leading-6 transition-colors group-hover:text-brand sm:text-xl sm:leading-6">
                        Send an Inquiry
                      </h4>
                      <p className="mt-1 text-sm leading-5 sm:text-base sm:leading-[1.6]">
                        Email our team directly at{" "}
                        <span className="block break-all sm:inline sm:break-normal">
                          sales@enov8technologies.com
                        </span>
                      </p>
                    </div>
                    <ArrowRight aria-hidden="true" className="absolute right-4 top-7 shrink-0 text-muted-foreground motion-arrow group-hover:translate-x-1 group-hover:text-brand sm:static" />
                  </div>
                </a>
              </div>

              <div className="border-t border-border pt-5 text-center">
                <p className="type-label text-muted-foreground">
                  Architects of Digital Transformation
                </p>
              </div>
            </div>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default ConsultationModal;
