export type Language = "fr" | "en";

export type LocalizedText = {
  fr: string;
  en: string;
};

export type ProjectCategory = "web" | "game" | "software" | "technical";

export type PortfolioProject = {
  id: string;
  title: string;
  category: ProjectCategory;
  type: LocalizedText;
  description: LocalizedText;
  tags: string[];
  color: string;
  year: string;
  repositoryUrl: string;
  demoUrl?: string;
};

export const projectCatalog: PortfolioProject[] = [
  {
    id: "project-atlas",
    title: "Project Atlas",
    category: "web",
    type: { fr: "Application web", en: "Web application" },
    description: {
      fr: "Un espace de travail clair pour transformer des idees en projets concrets.",
      en: "A clear workspace for turning ideas into concrete projects.",
    },
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    color: "bg-[var(--accent)]",
    year: "2025",
    repositoryUrl: "https://github.com/",
  },
  {
    id: "signal-studio",
    title: "Signal Studio",
    category: "software",
    type: { fr: "Outil creatif", en: "Creative tool" },
    description: {
      fr: "Une interface d'experimentation pour composer, tester et partager des idees.",
      en: "An experimental interface for composing, testing and sharing ideas.",
    },
    tags: ["React", "Web Audio"],
    color: "bg-[#d89454]",
    year: "2025",
    repositoryUrl: "https://github.com/",
  },
  {
    id: "night-shift",
    title: "Night Shift",
    category: "game",
    type: { fr: "Jeu video", en: "Video game" },
    description: {
      fr: "Une experience narrative courte nee d'une envie d'experimenter avec le rythme.",
      en: "A short narrative experience born from a desire to experiment with rhythm.",
    },
    tags: ["Unity", "C#"],
    color: "bg-[var(--accent-strong)]",
    year: "2025",
    repositoryUrl: "https://github.com/",
  },
  {
    id: "local-routes",
    title: "Local Routes",
    category: "web",
    type: { fr: "Experience mobile", en: "Mobile experience" },
    description: {
      fr: "Une facon plus humaine de decouvrir les endroits qui nous entourent.",
      en: "A more human way to discover the places around us.",
    },
    tags: ["React Native", "Maps"],
    color: "bg-[#bd8edb]",
    year: "2024",
    repositoryUrl: "https://github.com/",
  },
];

export const featuredProjects = projectCatalog.slice(0, 2);
