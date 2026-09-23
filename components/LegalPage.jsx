import Footer from "@/app/layouts/Footer";
import { Container } from "@/components/ui/container";

export default function LegalPage({ title, updated, sections }) {
  return (
    <>
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-surface py-16 md:py-24">
          <Container>
            <p className="type-label mb-4 text-brand">Enov8 Technologies</p>
            <h1 className="type-h1 max-w-3xl">{title}</h1>
            <p className="mt-5 text-sm text-muted-foreground">Last updated: {updated}</p>
          </Container>
        </section>
        <section className="py-16 md:py-24">
          <Container>
            <article className="max-w-3xl space-y-10 text-muted-foreground">
              {sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="type-h4 text-foreground">{section.heading}</h2>
                  {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-4 leading-7">{paragraph}</p>)}
                  {section.list ? <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">{section.list.map((item) => <li key={item}>{item}</li>)}</ul> : null}
                </section>
              ))}
            </article>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
