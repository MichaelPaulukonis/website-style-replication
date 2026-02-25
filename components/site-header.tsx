"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-foreground"
        >
          Michael Paulukonis
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/#projects"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          <a
            href="https://michaelpaulukonis.github.io/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/#projects"
              className="text-base font-medium text-foreground"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/#about"
              className="text-base font-medium text-foreground"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <a
              href="https://michaelpaulukonis.github.io/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-foreground"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
