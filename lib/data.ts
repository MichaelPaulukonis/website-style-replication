export type WipeDirection = "left" | "right" | "up" | "down"

export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  color: "coral" | "blue" | "teal" | "warm" | "dark"
  url?: string
  emoji: string
  wipe: WipeDirection
}

export const projects: Project[] = [
  {
    slug: "duo-chrome",
    title: "duo-chrome",
    description:
      "Interactive generative color exploration tool using chromatic dualities.",
    tags: ["generative", "color", "interactive"],
    color: "coral",
    url: "https://michaelpaulukonis.github.io/duo-chrome/",
    emoji: "\u{1F308}",
    wipe: "left",
  },
  {
    slug: "web-sketches",
    title: "web sketches",
    description:
      "A collection of creative coding sketches exploring visual and textual algorithms.",
    tags: ["p5.js", "creative-coding", "experiments"],
    color: "blue",
    url: "https://michaelpaulukonis.github.io/web-sketches/",
    emoji: "\u{1F3A8}",
    wipe: "right",
  },
  {
    slug: "computational-collage",
    title: "computational collage",
    description:
      "Automated image collage generation using algorithmic composition techniques.",
    tags: ["collage", "generative", "images"],
    color: "teal",
    url: "https://michaelpaulukonis.github.io/computational-collage/",
    emoji: "\u{1F5BC}\uFE0F",
    wipe: "up",
  },
  {
    slug: "poetry-generators",
    title: "poetry generators",
    description:
      "Text generation tools producing poetry through combinatorial and procedural methods.",
    tags: ["text", "generative", "NLP"],
    color: "warm",
    url: "https://michaelpaulukonis.github.io/poetry-generators/",
    emoji: "\u{1F4DD}",
    wipe: "down",
  },
  {
    slug: "genzify",
    title: "genzify",
    description: "A playful text transformation tool that translates prose into Gen Z slang.",
    tags: ["text", "humor", "transformation"],
    color: "coral",
    url: "https://michaelpaulukonis.github.io/genzify/",
    emoji: "\u{1F4AC}",
    wipe: "left",
  },
  {
    slug: "crude-collage-painter",
    title: "crude collage painter",
    description:
      "A raw, hands-on digital collage tool for expressive image manipulation.",
    tags: ["collage", "interactive", "canvas"],
    color: "dark",
    url: "https://michaelpaulukonis.github.io/crude-collage-painter/",
    emoji: "\u{1F58C}\uFE0F",
    wipe: "right",
  },
  {
    slug: "dragline",
    title: "dragline",
    description:
      "An experimental drawing tool exploring line, gesture, and digital mark-making.",
    tags: ["drawing", "interactive", "canvas"],
    color: "blue",
    url: "https://michaelpaulukonis.github.io/dragline/",
    emoji: "\u270D\uFE0F",
    wipe: "up",
  },
  {
    slug: "fairy-tale-generator",
    title: "fairy tale generator",
    description:
      "Procedural narrative generation creating unique fairy tales from structural templates.",
    tags: ["text", "narrative", "generative"],
    color: "teal",
    url: "https://michaelpaulukonis.github.io/fairy-tale-generator/",
    emoji: "\u{1F9DA}",
    wipe: "down",
  },
  {
    slug: "nova-zombie-simulator",
    title: "nova zombie simulator",
    description: "A simulation of zombie outbreak dynamics on a spatial grid.",
    tags: ["simulation", "game", "canvas"],
    color: "dark",
    url: "https://michaelpaulukonis.github.io/nova-zombie-simulator/",
    emoji: "\u{1F9DF}",
    wipe: "left",
  },
  {
    slug: "list-mania",
    title: "List Mania",
    description: "An obsessive exploration of lists, enumerations, and serial structures.",
    tags: ["text", "lists", "interactive"],
    color: "warm",
    url: "https://michaelpaulukonis.github.io/list-mania/",
    emoji: "\u{1F4CB}",
    wipe: "right",
  },
  {
    slug: "poetical-bot",
    title: "poetical bot",
    description: "An automated poetry bot composing and posting generated verse.",
    tags: ["bot", "poetry", "generative"],
    color: "coral",
    url: "https://michaelpaulukonis.github.io/poetical-bot/",
    emoji: "\u{1F916}",
    wipe: "up",
  },
  {
    slug: "obscurus",
    title: "OBSCURUS",
    description: "A darkened lens on textual content, obscuring and revealing meaning.",
    tags: ["text", "experimental", "visual"],
    color: "dark",
    url: "https://michaelpaulukonis.github.io/obscurus/",
    emoji: "\u{1F576}\uFE0F",
    wipe: "down",
  },
  {
    slug: "imagetexter",
    title: "imagetexter",
    description:
      "Transforming images into text mosaics and typographic compositions.",
    tags: ["image", "text", "canvas"],
    color: "blue",
    url: "https://michaelpaulukonis.github.io/imagetexter/",
    emoji: "\u{1F524}",
    wipe: "left",
  },
  {
    slug: "polychrometext",
    title: "polychrometext",
    description: "Multi-colored text rendering explorations in the browser.",
    tags: ["text", "color", "canvas"],
    color: "teal",
    url: "https://michaelpaulukonis.github.io/polychrometext/",
    emoji: "\u{1FA78}",
    wipe: "right",
    url: "https://michaelpaulukonis.github.io/polychrometext/",
  },
]

export const profileLinks = [
  {
    label: "GitHub",
    url: "https://github.com/michaelpaulukonis",
    icon: "github" as const,
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/michaelpaulukonis",
    icon: "linkedin" as const,
  },
  {
    label: "Bluesky",
    url: "https://bsky.app/profile/michaelpaulukonis.bsky.social",
    icon: "bluesky" as const,
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/mpaulukonis/",
    icon: "instagram" as const,
  },
]
