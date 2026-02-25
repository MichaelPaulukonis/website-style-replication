import { projects } from "@/lib/data"
import Link from "next/link"

const featuredSlugs = [
  "duo-chrome",
  "computational-collage",
  "poetry-generators",
  "web-sketches",
]

const colorClasses = {
  coral: "bg-surface-coral text-primary-foreground",
  blue: "bg-surface-blue text-secondary-foreground",
  teal: "bg-surface-teal text-accent-foreground",
  warm: "bg-surface-warm text-foreground",
  dark: "bg-surface-dark text-primary-foreground",
}

export function FeaturedProjects() {
  const featured = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug)!)
    .filter(Boolean)

  return (
    <section className="px-6 py-16 md:px-12 lg:px-20">
      {/* Large featured card */}
      <Link
        href={`/projects/${featured[0].slug}`}
        className={`group relative mb-6 flex min-h-[400px] flex-col justify-end overflow-hidden rounded-lg p-8 transition-transform duration-300 hover:-translate-y-1 md:min-h-[500px] md:p-12 ${colorClasses[featured[0].color]}`}
      >
        <p className="mb-2 text-sm font-medium uppercase tracking-widest opacity-70">
          Featured Project
        </p>
        <h3 className="mb-3 text-3xl font-bold tracking-tight md:text-5xl">
          {featured[0].title}
        </h3>
        <p className="max-w-lg text-lg leading-relaxed opacity-80">
          {featured[0].description}
        </p>
      </Link>

      {/* Three smaller featured cards in a row */}
      <div className="grid gap-6 md:grid-cols-3">
        {featured.slice(1).map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={`group flex min-h-[280px] flex-col justify-end overflow-hidden rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1 md:p-8 ${colorClasses[project.color]}`}
          >
            <h3 className="mb-2 text-xl font-bold tracking-tight md:text-2xl">
              {project.title}
            </h3>
            <p className="line-clamp-2 text-sm leading-relaxed opacity-80">
              {project.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
