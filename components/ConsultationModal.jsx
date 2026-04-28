"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, Calendar, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ConsultationModal = ({ trigger }) => {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        {trigger}
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-200 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed left-[50%] top-[50%] z-200 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border bg-white dark:bg-zinc-950 p-0 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-none">
          <div className="flex flex-col">
            {/* Header Image/Pattern */}
            <div className="h-32 bg-light-primary relative overflow-hidden flex items-center px-8">
               <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="1" />
                  </svg>
               </div>
               <h2 className="text-2xl font-black text-white font-space relative z-10">
                 Start Your Transformation
               </h2>
               <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none text-white">
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
            </div>

            <div className="p-8 space-y-6">
              <p className="text-gray-600 dark:text-gray-400 font-poppins">
                Ready to bridge the gap between your operations and digital-first growth? Choose how you'd like to connect with our experts.
              </p>

              <div className="grid gap-4">
                {/* Zoho Bookings Option */}
                <a 
                  href="https://user1-demo1912.zohobookings.com/#/4937930000000036076" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="flex items-center gap-4 p-4 border-2 border-zinc-100 dark:border-zinc-800 hover:border-light-primary transition-all bg-zinc-50 dark:bg-zinc-900">
                    <div className="w-12 h-12 bg-light-primary flex items-center justify-center shrink-0">
                      <Calendar className="text-white w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold font-space text-[#1A1A37] dark:text-white group-hover:text-light-primary transition-colors">
                        Book a Discovery Call
                      </h4>
                      <p className="text-sm text-gray-500 font-poppins">
                        Schedule a 30-minute consultation via Zoho Bookings.
                      </p>
                    </div>
                    <ArrowRight className="text-zinc-400 group-hover:text-light-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </a>

                {/* Email Option */}
                <a 
                  href="mailto:sales@enov8technologies.com?subject=Project Inquiry - Enov8 Technologies" 
                  className="group block"
                >
                  <div className="flex items-center gap-4 p-4 border-2 border-zinc-100 dark:border-zinc-800 hover:border-light-primary transition-all">
                    <div className="w-12 h-12 border-2 border-light-primary flex items-center justify-center shrink-0">
                      <Mail className="text-light-primary w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold font-space text-[#1A1A37] dark:text-white group-hover:text-light-primary transition-colors">
                        Send an Inquiry
                      </h4>
                      <p className="text-sm text-gray-500 font-poppins">
                        Email our team directly at sales@enov8technologies.com
                      </p>
                    </div>
                    <ArrowRight className="text-zinc-400 group-hover:text-light-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </a>
              </div>

              <div className="text-center pt-2">
                <p className="text-xs text-zinc-400 font-poppins uppercase tracking-widest">
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
