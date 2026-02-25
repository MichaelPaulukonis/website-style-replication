import Link from "next/link"
import type { Project } from "@/lib/data"

const colorClasses: Record<Project["color"], string> = {
  coral: "bg-surface-coral text-primary-foreground",
  blue: "bg-surface-blue text-secondary-foreground",
  teal: "bg-surface-teal text-accent-foreground",
  warm: "bg-surface-warm text-foreground",
  dark: "bg-surface-dark text-primary-foreground",
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Media placeholder area */}
      <div
        className={`flex aspect-[4/3] items-center justify-center ${colorClasses[project.color]}`}
      >
        <span className="px-4 text-center text-2xl font-bold tracking-tight opacity-60 md:text-3xl">
          {project.title}
        </span>
      </div>

      {/* Info area */}
      <div className="flex flex-1 flex-col gap-3 bg-card p-5">
        <h3 className="text-lg font-bold text-card-foreground">
          {project.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
