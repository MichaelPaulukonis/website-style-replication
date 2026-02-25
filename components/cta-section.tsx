import { ProfileLinks } from "./profile-links"

export function CtaSection() {
  return (
    <section className="bg-surface-coral px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-5xl">
          {"Let's connect"}
        </h2>
        <p className="mb-10 text-lg leading-relaxed text-primary-foreground/80">
          Whether you want to talk about generative art, creative coding, or
          building interesting things on the web -- I would love to hear from
          you.
        </p>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/michaelpaulukonis"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-transparent px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-foreground hover:text-surface-coral"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/michaelpaulukonis"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-transparent px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-foreground hover:text-surface-coral"
            >
              LinkedIn
            </a>
            <a
              href="https://bsky.app/profile/michaelpaulukonis.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-transparent px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-foreground hover:text-surface-coral"
            >
              Bluesky
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
