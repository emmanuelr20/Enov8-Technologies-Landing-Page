import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// The carousel owns interaction; card content and image sizing render on the server.
export default function TeamMemberCard({ member }) {
  const bioParagraphs = Array.isArray(member.bio) ? member.bio : [member.bio];

  return (
    <article className="grid w-full min-w-0 grid-cols-1 gap-8 md:h-full md:gap-15 lg:gap-10 xl:grid-cols-[minmax(15rem,0.7fr)_minmax(0,1.2fr)] xl:gap-8">
      <div className="relative flex max-h-128 h-full w-full max-w-120 items-start justify-start">
        <div className="relative aspect-[4/4.4] w-full max-w-120 overflow-hidden border border-border/70 bg-background">
          {member.image ? (
            <Image
              src={member.image}
              alt={`${member.name}, ${member.role}`}
              fill
              sizes="(min-width: 1360px) 478px, (min-width: 1280px) calc(40vw - 66px), (min-width: 1024px) calc(100vw - 130px), (min-width: 768px) calc(100vw - 98px), calc(100vw - 50px)"
              className="object-cover object-top"
            />
          ) : (
            <div
              role="img"
              aria-label={`${member.name}'s portrait is coming soon`}
              className="flex h-full items-center justify-center border-2 border-dashed border-border bg-muted px-6 text-center text-sm font-medium text-muted-foreground"
            >
              Portrait coming soon
            </div>
          )}
        </div>
        <Badge className="absolute left-3 top-3 z-10 rounded-sm border-border/70 bg-background/95 px-2 py-1 text-foreground shadow-sm">
          {member.role}
        </Badge>
      </div>

      <div className="col-span-1 flex w-full min-w-0 flex-col border-t border-border pt-6 md:h-full md:min-h-0 md:border-t-0 md:pt-2">
        <h3 className="type-h4 mb-3">{member.name}</h3>
        <div className=" space-y-3 text-base leading-6 text-muted-foreground md:text-lg md:leading-[1.55]">
          {bioParagraphs.map((paragraph) => (
            <span key={paragraph} className="block">
              {paragraph}
            </span>
          ))}
        </div>
        {member.linkedin ? (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="mt-3 inline-flex size-11 shrink-0 items-center justify-center self-start rounded-full border border-border text-brand transition-colors hover:border-brand hover:bg-brand/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <Linkedin className="size-5" aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
