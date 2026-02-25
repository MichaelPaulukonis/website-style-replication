"use client"

import Link from "next/link"
import { useRef, useState, useCallback } from "react"
import type { Project, WipeDirection } from "@/lib/data"

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

/** Maps wipe direction to the CSS transform origin and translate values. */
function getWipeTransforms(dir: WipeDirection) {
  switch (dir) {
    case "left":
      return {
        origin: "left center",
        enterFrom: "scaleX(0)",
        enterTo: "scaleX(1)",
        exitTo: "scaleX(0)",
      }
    case "right":
      return {
        origin: "right center",
        enterFrom: "scaleX(0)",
        enterTo: "scaleX(1)",
        exitTo: "scaleX(0)",
      }
    case "up":
      return {
        origin: "center top",
        enterFrom: "scaleY(0)",
        enterTo: "scaleY(1)",
        exitTo: "scaleY(0)",
      }
    case "down":
      return {
        origin: "center bottom",
        enterFrom: "scaleY(0)",
        enterTo: "scaleY(1)",
        exitTo: "scaleY(0)",
      }
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

export function ProjectCard({ project }: { project: Project }) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const wipe = getWipeTransforms(project.wipe)

  const handleMouseEnter = useCallback(() => {
    const overlay = overlayRef.current
    const text = textRef.current
    if (!overlay || !text) return

    // Snapshot current computed values before cancelling
    const overlayTransform = getComputedStyle(overlay).transform
    const textOpacity = getComputedStyle(text).opacity
    const textTransform = getComputedStyle(text).transform

    // Cancel running animations
    overlay.getAnimations().forEach((a) => a.cancel())
    text.getAnimations().forEach((a) => a.cancel())

    // Ensure text starts hidden (use snapshot if mid-animation)
    text.style.opacity = "0"

    // Wipe IN: overlay scales from current state to full
    overlay.style.transformOrigin = wipe.origin
    const startTransform = overlayTransform === "none" ? wipe.enterFrom : overlayTransform
    overlay.animate(
      [{ transform: startTransform }, { transform: wipe.enterTo }],
      { duration: 350, easing: "cubic-bezier(0.4, 0, 0.2, 1)", fill: "forwards" }
    )

    // Text fades in after overlay is mostly done
    const startOpacity = Math.min(parseFloat(textOpacity) || 0, 0.3)
    text.animate(
      [
        { opacity: String(startOpacity), transform: "translateY(6px)" },
        { opacity: "1", transform: "translateY(0)" },
      ],
      { duration: 250, easing: "ease-out", fill: "forwards", delay: 180 }
    )

    setIsHovered(true)
  }, [wipe])

  const handleMouseLeave = useCallback(() => {
    const overlay = overlayRef.current
    const text = textRef.current
    if (!overlay || !text) return

    // Snapshot current state
    const overlayTransform = getComputedStyle(overlay).transform
    const textOpacity = getComputedStyle(text).opacity

    overlay.getAnimations().forEach((a) => a.cancel())
    text.getAnimations().forEach((a) => a.cancel())

    // Text fades out from current opacity
    const fadeOut = text.animate(
      [{ opacity: textOpacity }, { opacity: "0" }],
      { duration: 150, easing: "ease-in", fill: "forwards" }
    )
    fadeOut.onfinish = () => {
      text.style.opacity = "0"
    }

    // Wipe OUT from current state in the opposite direction
    const oppositeOrigin = getOppositeOrigin(project.wipe)
    overlay.style.transformOrigin = oppositeOrigin
    const startTransform = overlayTransform === "none" ? wipe.enterTo : overlayTransform
    overlay.animate(
      [{ transform: startTransform }, { transform: wipe.exitTo }],
      { duration: 350, easing: "cubic-bezier(0.4, 0, 0.2, 1)", fill: "forwards", delay: 80 }
    )

    setIsHovered(false)
  }, [wipe, project.wipe])

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media area (emoji fallback) */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted media-dots">
        {/* Emoji / media layer -- always visible underneath */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-7xl leading-none md:text-8xl select-none transition-transform duration-300"
            style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
            role="img"
            aria-label={project.title}
          >
            {project.emoji}
          </span>
        </div>

        {/* Colored overlay that wipes in on hover */}
        <div
          ref={overlayRef}
          className={`absolute inset-0 ${colorBgClasses[project.color]}`}
          style={{ transform: wipe.enterFrom, transformOrigin: wipe.origin }}
        />

        {/* Text content that appears on the overlay */}
        <div
          ref={textRef}
          className={`absolute inset-0 flex flex-col justify-end p-5 md:p-6 ${colorTextClasses[project.color]}`}
          style={{ opacity: 0 }}
        >
          <h3 className="mb-1.5 text-lg font-bold tracking-tight md:text-xl">
            {project.title}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed opacity-90">
            {project.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-current/20 px-2 py-0.5 text-xs font-medium opacity-80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Minimal label below the card */}
      <div className="flex items-center gap-2 bg-card px-4 py-3">
        <span className="text-sm font-semibold text-card-foreground">
          {project.title}
        </span>
        <svg
          className="ml-auto h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  )
}
