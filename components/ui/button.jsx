import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { LoaderCircle } from "lucide-react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "focus-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-[var(--motion-fast)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-brand text-on-brand shadow-sm hover:bg-brand-hover",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        background: "bg-brand text-on-brand hover:bg-brand-hover",
        primary: "bg-brand text-on-brand shadow-sm hover:bg-brand-hover",
        text: "text-brand underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-15 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 dark:text-white",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  children,
  disabled,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      aria-busy={loading || undefined}
      disabled={disabled || loading || undefined}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {loading ? <LoaderCircle aria-hidden="true" className="animate-spin" /> : null}
      {children}
    </Comp>
  );
}

export { Button, buttonVariants }
