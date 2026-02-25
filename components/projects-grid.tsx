import { projects } from "@/lib/data"
import { ProjectCard } from "./project-card"

export function ProjectsGrid() {
  return (
    <section id="projects" className="px-6 py-24 md:px-12 lg:px-20">
      <div className="mb-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
          Selected Work
        </p>
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Web projects & experiments
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
