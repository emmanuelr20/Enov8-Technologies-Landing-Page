import { cn } from "@/lib/utils";

export function Section({ as: Component = "section", className, children, ...props }) {
  return (
    <Component className={cn("py-[var(--space-section)]", className)} {...props}>
      {children}
    </Component>
  );
}
