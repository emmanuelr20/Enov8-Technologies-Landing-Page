import Footer from "@/app/layouts/Footer";
import { Container } from "@/components/ui/container";
import { MotionEntrance, MotionStagger } from "@/components/MotionEntrance";

export default function LegalPage({ title, updated, sections }) {
  return (
    <>
      <main id="main-content" tabIndex={-1} className="min-h-screen bg-background">
        <section className="border-b border-border bg-surface py-16 md:py-24">
          <Container>
            <MotionStagger trigger="mount" className="max-w-3xl">
              <p className="type-label mb-4 text-brand">Enov8 Technologies</p>
              <h1 className="type-route-hero">{title}</h1>
              <p className="mt-5 text-sm text-muted-foreground">Last updated: {updated}</p>
            </MotionStagger>
          </Container>
        </section>
        <section className="py-16 md:py-24">
          <Container>
            <MotionEntrance as="article" pattern="fade" className="max-w-3xl space-y-10 text-muted-foreground">
              {sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="type-h4 text-foreground">{section.heading}</h2>
                  {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-4 leading-7">{paragraph}</p>)}
                  {section.list ? <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">{section.list.map((item) => <li key={item}>{item}</li>)}</ul> : null}
                </section>
              ))}
            </MotionEntrance>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
