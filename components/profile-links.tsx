import { profileLinks } from "@/lib/data"
import { Github, Linkedin } from "lucide-react"

function BlueskyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.785 2.627 3.624 3.5 6.22 3.245C3.678 14.11 1.19 15.587 3.816 19.15c2.491 3.375 3.705 2.848 5.078 1.674 1.075-.918 2.076-2.882 3.106-4.274 1.03 1.392 2.031 3.356 3.106 4.274 1.373 1.174 2.587 1.701 5.078-1.674 2.625-3.563.139-5.04-3.028-5.658 2.596.255 5.435-.618 6.22-3.245.246-.828.624-5.789.624-6.479 0-.688-.139-1.86-.902-2.203-.659-.299-1.664-.621-4.3 1.24C15.954 4.747 13.087 8.686 12 10.8Z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  bluesky: BlueskyIcon,
  instagram: InstagramIcon,
}

export function ProfileLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {profileLinks.map((link) => {
        const Icon = iconMap[link.icon]
        return (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-foreground/20 bg-background px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Icon className="h-4 w-4" />
            <span>{link.label}</span>
          </a>
        )
      })}
    </div>
  )
}
