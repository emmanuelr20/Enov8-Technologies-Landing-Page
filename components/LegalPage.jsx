import Footer from "@/app/layouts/Footer";
import { Container } from "@/components/ui/container";
import { MotionEntrance, MotionStagger } from "@/components/MotionEntrance";

export default function LegalPage({ title, updated, sections }) {
  return (
    <>
      <main
        id="main-content"
        tabIndex={-1}
        className="relative isolate min-h-screen overflow-hidden"
      >
        <section
          className="relative z-10 flex min-h-[27rem] items-center overflow-hidden pt-20 text-white md:min-h-[34rem]"
          style={{ background: "linear-gradient(90deg, #007bff 0%, #001b43 100%)" }}
        >
          <Container className="flex justify-center">
            <MotionStagger trigger="mount" className="relative max-w-3xl text-center">
              <h1 className="text-4xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl lg:text-6xl">{title}</h1>
              <p className="mt-5 text-sm text-blue-100/90">Last updated: {updated}</p>
            </MotionStagger>
          </Container>
        </section>
        <section className="gradient-grid-surface relative min-h-[calc(100svh-1rem)] overflow-hidden py-16 md:py-24">
          <div className="surface-grid-canvas" aria-hidden="true" />
          <Container className="text-left">
            <MotionEntrance as="article" pattern="fade" className="relative z-10 max-w-3xl space-y-10 text-left text-muted-foreground">
              {sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="type-h4 text-left text-foreground">{section.heading}</h2>
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
