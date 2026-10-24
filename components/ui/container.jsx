import { cn } from "@/lib/utils";

export function Container({ as: Component = "div", className, children, ...props }) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-[var(--container-content)] px-6 md:px-12 lg:px-16", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
