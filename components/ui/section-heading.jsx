import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, description, className }) {
  return (
    <header className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-light-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2>{title}</h2>
      {description ? <p className="mt-4 max-w-2xl">{description}</p> : null}
    </header>
  );
}
