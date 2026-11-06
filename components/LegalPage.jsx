import PageHero from "@/components/PageHero";

export default function LegalPage({ title, updated, path, toc = [], children }) {
  return (
    <>
      <PageHero
        eyebrow={`Last updated: ${updated}`}
        title={title}
        crumbs={[{ name: title, href: path }]}
      />
      <div className="section-y !pt-16">
        <div className="container-x grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-20">
          <nav aria-label="Contents" className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
            <p className="eyebrow">Contents</p>
            <ol className="mt-5 grid gap-1 border-l border-line">
              {toc.map((t) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-fg-2 transition-colors hover:border-brand hover:text-fg"
                  >
                    {t.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="prose-legal card max-w-3xl p-7 sm:p-12">{children}</div>
        </div>
      </div>
    </>
  );
}
