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
    category: "games",
    type: { fr: "Jeu video", en: "Video game" },
    description: {
      fr: "Un RPG inspiré de The Legend of Zelda avec un accent sur l'exploration et la narration.",
      en: "A RPG inspired by The Legend of Zelda with a focus on exploration and storytelling.",
    },
    tags: ["C", "Makefile"],
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
    tags: ["C", "Makefile"],
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
    tags: ["Haskell", "Makefile"],
    color: "bg-[var(--accent-strong)]",
    year: "2025",
    repositoryUrl: "https://github.com/Nolfews/Wolfram",
  },
  {
    id: "My_Pandoc",
    title: "My_Pandoc",
    category: "software",
    type: { fr: "Expérimental", en: "Experimental" },
    description: {
      fr: "Une récration de pandoc en haskell.",
      en: "A recreation of pandoc in Haskell.",
    },
    tags: ["Haskell", "Makefile"],
    color: "bg-[#bd8edb]",
    year: "2025",
    repositoryUrl: "https://github.com/Nolfews/My_Pandoc",
  },
  {
    id: "NanoTekSpice",
    title: "NanoTekSpice",
    category: "software",
    type: { fr: "Simulation", en: "Simulation" },
    description: {
      fr: "Une simulation de circuit électrique pour l'apprentissage et l'expérimentation.",
      en: "An electrical circuit simulation for learning and experimentation.",
    },
    tags: ["C++", "Python", "Makefile"],
    color: "bg-[#2196f3]",
    year: "2025",
    repositoryUrl: "https://github.com/Nolfews/NanoTekSpice",
  },
  {
    id: "Arcade",
    title: "Arcade",
    category: "games",
    type: { fr: "Jeu vidéo", en: "Video game" },
    description: {
      fr: "Une borne d'arcade virtuelle avec changement dynamique de lib graphique",
      en: "A virtual arcade machine with dynamic graphics library switching",
    },
    tags: ["C++", "CMake"],
    color: "bg-[#4caf50]",
    year: "2025",
    repositoryUrl: "https://github.com/Nolfews/Arcade",
  }
];

export const featuredProjects = projectCatalog.slice(0, 2);
