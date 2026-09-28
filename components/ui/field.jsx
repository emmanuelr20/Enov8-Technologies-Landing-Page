import * as React from "react";
import { cn } from "@/lib/utils";

const fieldClass =
  "focus-ring w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors hover:border-foreground/30 disabled:cursor-not-allowed disabled:opacity-50";

const Input = React.forwardRef(function Input({ className, type = "text", ...props }, ref) {
  return <input ref={ref} type={type} className={cn(fieldClass, className)} {...props} />;
});

const Textarea = React.forwardRef(function Textarea({ className, ...props }, ref) {
  return <textarea ref={ref} className={cn(fieldClass, "min-h-32 resize-y", className)} {...props} />;
});

const Select = React.forwardRef(function Select({ className, ...props }, ref) {
  return <select ref={ref} className={cn(fieldClass, className)} {...props} />;
});

function Label({ className, ...props }) {
  return <label className={cn("mb-2 block text-sm font-medium text-foreground", className)} {...props} />;
}

export { Input, Textarea, Select, Label };
