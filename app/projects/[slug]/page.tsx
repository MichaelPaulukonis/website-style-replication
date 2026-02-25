import { projects } from "@/lib/data"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

const colorClasses = {
  coral: "bg-surface-coral text-primary-foreground",
  blue: "bg-surface-blue text-secondary-foreground",
  teal: "bg-surface-teal text-accent-foreground",
  warm: "bg-surface-warm text-foreground",
  dark: "bg-surface-dark text-primary-foreground",
}

const colorTextClasses = {
  coral: "text-surface-coral",
  blue: "text-surface-blue",
  teal: "text-surface-teal",
  warm: "text-surface-warm",
  dark: "text-muted-foreground",
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: "Project Not Found" }
  return {
    title: `${project.title} - Michael Paulukonis`,
    description: project.description,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  // Find adjacent projects for "more projects" section
  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const moreProjects = [
    projects[(currentIndex + 1) % projects.length],
    projects[(currentIndex + 2) % projects.length],
    projects[(currentIndex + 3) % projects.length],
  ]

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero banner */}
        <section
          className={`flex min-h-[60vh] flex-col justify-end px-6 pt-24 pb-16 md:px-12 lg:px-20 ${colorClasses[project.color]}`}
        >
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium opacity-70 transition-opacity hover:opacity-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all projects
          </Link>
          <h1 className="mb-6 max-w-3xl text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            {project.title}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed opacity-80 md:text-xl">
            {project.description}
          </p>
        </section>

        {/* Project details */}
        <section className="px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full border border-border bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Placeholder content area for media */}
            <div
              className={`mb-12 flex aspect-video items-center justify-center rounded-lg ${colorClasses[project.color]}`}
            >
              <p className="text-lg font-medium opacity-60">
                Media preview TBD
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                About this project
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {project.description} This project explores the boundaries of
                code as a creative tool, combining algorithmic thinking with
                aesthetic sensibility. Each interaction reveals new possibilities
                in the space between intention and emergence.
              </p>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground no-underline transition-opacity hover:opacity-90"
                >
                  Visit project
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </section>

        {/* More projects */}
        <section className="border-t border-border px-6 py-20 md:px-12 lg:px-20">
          <h2 className="mb-12 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            More projects
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {moreProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className={`group flex min-h-[240px] flex-col justify-end overflow-hidden rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1 ${colorClasses[p.color]}`}
              >
                <h3 className="mb-2 text-xl font-bold tracking-tight">
                  {p.title}
                </h3>
                <p className="line-clamp-2 text-sm leading-relaxed opacity-80">
                  {p.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-surface-dark px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
              {"Let's connect"}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-primary-foreground/70">
              Interested in creative coding, generative art, or building
              something together?
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/michaelpaulukonis"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-foreground hover:text-surface-dark"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/michaelpaulukonis"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-foreground hover:text-surface-dark"
              >
                LinkedIn
              </a>
              <a
                href="https://bsky.app/profile/michaelpaulukonis.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-foreground hover:text-surface-dark"
              >
                Bluesky
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
