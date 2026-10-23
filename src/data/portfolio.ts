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
    id: "My_RPG",
    title: "MY_RPG",
    category: "game",
    type: { fr: "Jeu video", en: "Video game" },
    description: {
      fr: "Un RPG inspiré de The Legend of Zelda avec un accent sur l'exploration et la narration.",
      en: "A RPG inspired by The Legend of Zelda with a focus on exploration and storytelling.",
    },
    tags: ["C", "SFML"],
    color: "bg-[var(--accent)]",
    year: "2024",
    repositoryUrl: "https://github.com/Nolfews/My_RPG",
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
