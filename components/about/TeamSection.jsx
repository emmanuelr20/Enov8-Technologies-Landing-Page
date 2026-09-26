import Image from "next/image";
import { Container } from "@/components/ui/container";
import { team } from "@/lib/content/team";
import MotionReveal from "@/components/MotionReveal";

export default function TeamSection() {
  return (
    <section aria-labelledby="team-heading" className="border-t border-border bg-sidebar-border/20 py-16 md:py-24">
      <Container>
        <MotionReveal className="max-w-3xl">
          <p className="type-label mb-4 text-brand">Leadership</p>
          <h2 id="team-heading" className="type-h2">Meet Our Team</h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            The people building practical technology systems and partnerships for the organizations we serve.
          </p>
        </MotionReveal>

        <MotionReveal as="div" group className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
          {team.map((member) => (
            <article key={member.name}>
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border/70 bg-background">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 border-t border-border pt-5">
                <h3 className="type-h4">{member.name}</h3>
                <p className="mt-2 text-sm font-medium text-brand">{member.role}</p>
                <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                  {(Array.isArray(member.bio) ? member.bio : [member.bio]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </article>
          ))}
        </MotionReveal>
      </Container>
    </section>
  );
}
