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
    id: "MY_FTP",
    title: "MY_FTP",
    category: "software",
    type: { fr: "Expérimental", en: "Experimental" },
    description: {
      fr: "Un serveur FTP expérimental pour composer, tester et partager des idées.",
      en: "An experimental FTP server for composing, testing and sharing ideas.",
    },
    tags: ["C"],
    color: "bg-[#d89454]",
    year: "2025",
    repositoryUrl: "https://github.com/Nolfews/My_FTP",
  },
  {
    id: "Wolfram",
    title: "Wolfram",
    category: "software",
    type: { fr: "Expérimental", en: "Experimental" },
    description: {
      fr: "Recréation d'un automate cellulaire élémentaire pour l'apprentissage et l'expérimentation.",
      en: "A recreation of an elementary cellular automata for learning and experimentation.",
    },
    tags: ["Haskell"],
    color: "bg-[var(--accent-strong)]",
    year: "2025",
    repositoryUrl: "https://github.com/Nolfews/Wolfram",
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
