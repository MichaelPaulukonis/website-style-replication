export function AboutSection() {
  return (
    <section id="about" className="bg-surface-dark px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-surface-coral">
          About
        </p>
        <h2 className="mb-8 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-5xl">
          Creativity through computation.
        </h2>
        <div className="flex flex-col gap-6 text-lg leading-relaxed text-primary-foreground/80">
          <p>
            I work at the intersection of software engineering and digital art.
            By day, I build software systems. By night (and weekends, and lunch
            breaks), I create generative art, text machines, and computational
            experiments.
          </p>
          <p>
            My projects range from poetry generators and fairy tale machines to
            image collage tools and interactive drawing experiments. I am drawn
            to systems that produce unexpected outputs -- where code becomes a
            collaborator in the creative process.
          </p>
          <p>
            I believe in the web as a creative medium: open, accessible, and
            endlessly malleable. Every project here is an exploration, a
            question posed to the machine and answered in pixels, words, or
            motion.
          </p>
        </div>
      </div>
    </section>
  )
}
