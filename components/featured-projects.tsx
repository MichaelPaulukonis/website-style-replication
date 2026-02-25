"use client"

import { projects } from "@/lib/data"
import type { Project, WipeDirection } from "@/lib/data"
import Link from "next/link"
import { useRef, useState, useCallback } from "react"

const featuredSlugs = [
  "duo-chrome",
  "computational-collage",
  "poetry-generators",
  "web-sketches",
]

const colorBgClasses: Record<Project["color"], string> = {
  coral: "bg-surface-coral",
  blue: "bg-surface-blue",
  teal: "bg-surface-teal",
  warm: "bg-surface-warm",
  dark: "bg-surface-dark",
}

const colorTextClasses: Record<Project["color"], string> = {
  coral: "text-primary-foreground",
  blue: "text-secondary-foreground",
  teal: "text-accent-foreground",
  warm: "text-foreground",
  dark: "text-primary-foreground",
}

function getWipeStyles(dir: WipeDirection) {
  switch (dir) {
    case "left":
      return { origin: "left center", from: "scaleX(0)", to: "scaleX(1)" }
    case "right":
      return { origin: "right center", from: "scaleX(0)", to: "scaleX(1)" }
    case "up":
      return { origin: "center top", from: "scaleY(0)", to: "scaleY(1)" }
    case "down":
      return { origin: "center bottom", from: "scaleY(0)", to: "scaleY(1)" }
  }
}

function getOppositeOrigin(dir: WipeDirection) {
  switch (dir) {
    case "left":
      return "right center"
    case "right":
      return "left center"
    case "up":
      return "center bottom"
    case "down":
      return "center top"
  }
}

function FeaturedCard({
  project,
  large,
}: {
  project: Project
  large?: boolean
}) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const wipe = getWipeStyles(project.wipe)

  const handleMouseEnter = useCallback(() => {
    const overlay = overlayRef.current
    const text = textRef.current
    if (!overlay || !text) return
    overlay.getAnimations().forEach((a) => a.cancel())
    text.getAnimations().forEach((a) => a.cancel())

    overlay.style.transformOrigin = wipe.origin
    overlay.animate(
      [{ transform: wipe.from }, { transform: wipe.to }],
      { duration: 400, easing: "cubic-bezier(0.4, 0, 0.2, 1)", fill: "forwards" }
    )
    text.animate(
      [{ opacity: "0", transform: "translateY(8px)" }, { opacity: "1", transform: "translateY(0)" }],
      { duration: 280, easing: "ease-out", fill: "forwards", delay: 140 }
    )
    setIsHovered(true)
  }, [wipe])

  const handleMouseLeave = useCallback(() => {
    const overlay = overlayRef.current
    const text = textRef.current
    if (!overlay || !text) return
    overlay.getAnimations().forEach((a) => a.cancel())
    text.getAnimations().forEach((a) => a.cancel())

    text.animate(
      [{ opacity: "1" }, { opacity: "0" }],
      { duration: 150, easing: "ease-in", fill: "forwards" }
    )
    overlay.style.transformOrigin = getOppositeOrigin(project.wipe)
    overlay.animate(
      [{ transform: wipe.to }, { transform: wipe.from }],
      { duration: 400, easing: "cubic-bezier(0.4, 0, 0.2, 1)", fill: "forwards", delay: 80 }
    )
    setIsHovered(false)
  }, [wipe, project.wipe])

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative flex overflow-hidden rounded-lg ${large ? "min-h-[400px] md:min-h-[500px]" : "min-h-[280px]"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Emoji media layer */}
      <div className="absolute inset-0 flex items-center justify-center bg-muted media-dots">
        <span
          className={`leading-none select-none transition-transform duration-300 ${large ? "text-9xl md:text-[10rem]" : "text-7xl md:text-8xl"}`}
          style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
          role="img"
          aria-label={project.title}
        >
          {project.emoji}
        </span>
      </div>

      {/* Color overlay that wipes in */}
      <div
        ref={overlayRef}
        className={`absolute inset-0 ${colorBgClasses[project.color]}`}
        style={{ transform: wipe.from, transformOrigin: wipe.origin }}
      />

      {/* Text content */}
      <div
        ref={textRef}
        className={`absolute inset-0 flex flex-col justify-end p-8 md:p-12 ${colorTextClasses[project.color]}`}
        style={{ opacity: 0 }}
      >
        {large && (
          <p className="mb-2 text-sm font-medium uppercase tracking-widest opacity-70">
            Featured Project
          </p>
        )}
        <h3
          className={`mb-2 font-bold tracking-tight ${large ? "text-3xl md:text-5xl" : "text-xl md:text-2xl"}`}
        >
          {project.title}
        </h3>
        <p
          className={`leading-relaxed opacity-80 ${large ? "max-w-lg text-lg" : "line-clamp-2 text-sm"}`}
        >
          {project.description}
        </p>
      </div>
    </Link>
  )
}

export function FeaturedProjects() {
  const featured = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug)!)
    .filter(Boolean)

  return (
    <section className="px-6 py-16 md:px-12 lg:px-20">
      <FeaturedCard project={featured[0]} large />

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {featured.slice(1).map((project) => (
          <FeaturedCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
