"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, Calendar, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ConsultationModal = ({ trigger }) => {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-200 bg-black/65 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content aria-describedby="consultation-description" className="focus-ring fixed left-[50%] top-[50%] z-200 w-[95vw] max-w-lg translate-x-[-50%] translate-y-[-50%] overflow-y-auto rounded-xl bg-surface p-0 shadow-2xl duration-[var(--motion-standard)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 max-h-[90vh]">
          <div className="flex flex-col">
            <div className="flex min-h-32 items-center bg-brand px-8">
              <DialogPrimitive.Title className="type-h3 text-white">
                Start Your Transformation
              </DialogPrimitive.Title>
              <DialogPrimitive.Close className="focus-ring absolute right-4 top-4 rounded-md p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white">
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
            </div>

            <div className="p-5 md:p-8 space-y-6">
              <DialogPrimitive.Description id="consultation-description" className="type-body text-muted-foreground">
                Ready to bridge the gap between your operations and
                digital-first growth? Choose how you'd like to connect with our
                experts.
              </DialogPrimitive.Description>

              <div className="grid gap-4">
                {/* Zoho Bookings Option */}
                <a
                  href="https://user1-demo1912.zohobookings.com/#/4937930000000036076"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="flex items-center gap-4 rounded-lg border border-border p-4 transition-colors hover:border-brand hover:bg-accent">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-brand">
                      <Calendar className="text-white w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="group-hover:text-brand transition-colors">
                        Book a Discovery Call
                      </h4>
                      <p>
                        Schedule a 30-minute consultation via Zoho Bookings.
                      </p>
                    </div>
                    <ArrowRight aria-hidden="true" className="text-muted-foreground group-hover:translate-x-1 group-hover:text-brand transition-all" />
                  </div>
                </a>

                {/* Email Option */}
                <a
                  href="mailto:sales@enov8technologies.com?subject=Project Inquiry - Enov8 Technologies"
                  className="group block"
                >
                  <div className="flex items-center gap-4 rounded-lg border border-border p-4 transition-colors hover:border-brand hover:bg-accent">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-brand">
                      <Mail className="h-6 w-6 text-brand" />
                    </div>
                    <div className="flex-1">
                      <h4 className="group-hover:text-brand transition-colors">
                        Send an Inquiry
                      </h4>
                      <p>
                        Email our team directly at sales@enov8technologies.com
                      </p>
                    </div>
                    <ArrowRight aria-hidden="true" className="text-muted-foreground group-hover:translate-x-1 group-hover:text-brand transition-all" />
                  </div>
                </a>
              </div>

              <div className="text-center pt-2">
                <p className="uppercase">
                  Architects of Digital Transformation
                </p>
              </div>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default ConsultationModal;
