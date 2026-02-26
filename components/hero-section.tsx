import { ProfileLinks } from "./profile-links"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center px-6 pt-24 pb-16 md:px-12 lg:px-20">
      <div className="max-w-4xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Software Engineer & Digital Artist
        </p>
        <h1 className="mb-8 text-balance text-5xl leading-tight font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
          Code as creative medium. Art as system.
        </h1>
        <p className="mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          I am a software engineer and digital artist living in Framingham, MA.
          I build generative tools, text machines, computational collages, and
          other explorations at the intersection of code and creativity.
        </p>
        <ProfileLinks />
      </div>

      {/* Decorative color block - inspired by multitude.nl bold color sections */}
      <div
        className="absolute right-0 top-0 -z-10 hidden h-full w-1/3 bg-surface-coral lg:block"
        aria-hidden="true"
      />
    </section>
  )
}
