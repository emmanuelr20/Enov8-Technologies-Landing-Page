import { Container } from "@/components/ui/container";
import { team } from "@/lib/content/team";
import { MotionStagger } from "@/components/MotionEntrance";
import TeamCarousel from "@/components/about/TeamCarousel";
import TeamMemberCard from "@/components/about/TeamMemberCard";

export default function TeamSection() {
  return (
    <section aria-labelledby="team-heading" className="border-t border-border bg-muted/25 py-16 md:py-24">
      <Container>
        <MotionStagger className="max-w-3xl">
          <p className="type-label mb-4 text-brand">Leadership</p>
          <h2 id="team-heading" className="type-h2">Meet Our Team</h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            The people building practical technology systems and partnerships for the organizations we serve.
          </p>
        </MotionStagger>

        <div className="mt-12">
          <TeamCarousel>
            {team.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </TeamCarousel>
        </div>
      </Container>
    </section>
  );
}
