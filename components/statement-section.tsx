export function StatementSection() {
  return (
    <section className="bg-surface-blue px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-balance text-3xl font-bold tracking-tight text-secondary-foreground md:text-5xl">
          Tools that think. Art that computes.
        </h2>
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-secondary-foreground/80">
          My practice bridges engineering discipline with artistic
          experimentation. I build systems that generate, transform, and
          surprise -- text machines, visual algorithms, and interactive
          instruments for creative play.
        </p>
        <a
          href="#projects"
          className="inline-flex rounded-full border border-secondary-foreground/30 bg-transparent px-6 py-3 text-sm font-medium text-secondary-foreground transition-all hover:bg-secondary-foreground hover:text-surface-blue"
        >
          Explore projects
        </a>
      </div>
    </section>
  )
}
