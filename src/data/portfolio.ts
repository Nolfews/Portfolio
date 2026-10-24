export type Language = "fr" | "en";

export type LocalizedText = {
  fr: string;
  en: string;
};

export type ProjectCategory = "web" | "games" | "software";

export type PortfolioProject = {
  id: string;
  title: string;
  category: ProjectCategory;
  type: LocalizedText;
  description: LocalizedText;
  tags: string[];
  color: string;
  image?: string;
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
    image: "/projects/My_RPG_Preview.png",
    year: "2024",
    repositoryUrl: "https://github.com/Nolfews/My_RPG",
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
    image: "/projects/Wolfram_Preview.png",
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
    image: "/projects/My_Pandoc_Preview.png",
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
    image: "/projects/NanoTekSpice_Preview.png",
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
    image: "/projects/Arcade_Preview.png",
    year: "2025",
    repositoryUrl: "https://github.com/Nolfews/Arcade",
  },
  {
    id: "Raytracer",
    title: "Raytracer",
    category: "software",
    type: { fr: "Expérimental", en: "Experimental" },
    description: {
      fr: "Simulation du comportement de la lumière dans des environnements 3D en utilisant des techniques de lancer de rayons pour produire des images physiquement réalistes.",
      en: "Simulate the behavior of light in 3D environments using ray tracing techniques to produce physically realistic images.",
    },
    tags: ["C++", "CMake"],
    color: "bg-[#ff9800]",
    image: "/projects/Raytracer_Preview.png",
    year: "2025",
    repositoryUrl: "https://github.com/Nolfews/Raytracer",
  },
  {
    id: "Zappy",
    title: "Zappy",
    category: "games",
    type: { fr: "Jeu vidéo", en: "Video game" },
    description: {
      fr: "Un jeu de stratégie en réseau passionnant où plusieurs équipes s'affrontent sur une carte en tuiles remplie de ressources.",
      en: "an exciting network-based strategy game where multiple teams compete on a tile-based map filled with resources.",
    },
    tags: ["C++", "C", "Python", "Makefile"],
    color: "bg-[#e91e63]",
    image: "/projects/Zappy_Preview.png",
    year: "2025",
    repositoryUrl: "https://github.com/Nolfews/Zappy",
  },
  {
    id: "Area",
    title: "Area",
    category: "web",
    type: { fr: "site web", en: "Web site" },
    description: {
      fr: "Un site web pour la création d'automatisation par Oauth.",
      en: "A web site for creating automation with Oauth.",
    },
    tags: ["Python", "Django", "Typescript", "React", "TailwindCSS", "Flutter"],
    color: "bg-[#f44336]",
    image: "/projects/AREA_Preview.png",
    year: "2025",
    repositoryUrl: "https://github.com/Nolfews/Area",
  },
  {
    id: "Gomoku",
    title: "Gomoku",
    category: "software",
    type: { fr: "Expérimental", en: "Experimental" },
    description: {
      fr: "Création d'une IA jouant au gomoku avec un algorithme de recherche minimax",
      en: "Creation of an AI that plays Gomoku using a minimax search algorithm.",
    },
    tags: ["C++", "Makefile"],
    color: "bg-[#e91e63]",
    image: "/projects/Gomoku_Preview.png",
    year: "2025",
    repositoryUrl: "https://github.com/Nolfews/Gomoku",
  },
  {
    id: "My_Torch",
    title: "My_Torch",
    category: "software",
    type: { fr: "Expérimental", en: "Experimental" },
    description: {
      fr: "Création d'une bibliothèque de machine learning avec des algorithmes d'apprentissage supervisé et non supervisé, jouant au échecs.",
      en: "Creation of a machine learning library with supervised and unsupervised learning algorithms, playing chess.",
    },
    tags: ["Python"],
    color: "bg-[#ff5722]",
    image: "/projects/My_Torch_Preview.png",
    year: "2025",
    repositoryUrl: "https://github.com/Nolfews/My_Torch",
  },
  {
    id: "R-Type",
    title: "R-Type",
    category: "games",
    type: { fr: "Jeu vidéo", en: "Video game" },
    description: {
      fr: "Recréation du jeu R-Type avec un accent sur le multijoueur et la compétition.",
      en: "Recreation of the game R-Type with a focus on multiplayer and competition.",
    },
    tags: ["C++", "CMake"],
    color: "bg-[#00bcd4]",
    image: "/projects/R-Type_Preview.png",
    year: "2026",
    repositoryUrl: "https://github.com/Nolfews/R-Type",
  },
  {
    id: "Compressor",
    title: "Compressor",
    category: "software",
    type: { fr: "Expérimental", en: "Experimental" },
    description: {
      fr: "Création d'un algorithme de compression de données avec un accent sur la vitesse et l'efficacité.",
      en: "Creation of a data compression algorithm with a focus on speed and efficiency.",
    },
    tags: ["Haskell", "Makefile"],
    color: "bg-[#607d8b]",
    image: "/projects/Compressor_Preview.png",
    year: "2025",
    repositoryUrl: "https://github.com/Nolfews/Compressor",
  },
  {
    id: "EPiAirConsole",
    title: "EPiAirConsole",
    category: "web",
    type: { fr: "site web", en: "Web site" },
    description: {
      fr: "Création d'un jeu multijoueur en ligne en web pour l'écran et téléphone pour la manette.",
      en: "Creation of an online multiplayer game for web for the screen and phone for the controller.",
    },
    tags: ["JavaScript", "Typescript", "HTML5", "SCSS", "Node.js"],
    color: "bg-[#ffeb3b]",
    image: "/projects/EPIAirConsole_Preview.png",
    year: "2026",
    repositoryUrl: "https://github.com/Nolfews/EpiAirConsole",
  },
  {
    id: "Gems-Shift",
    title: "Gems-Shift",
    category: "games",
    type: { fr: "Jeu vidéo", en: "Video game" },
    description: {
      fr: "Création d'un jeu d'aventure solo, métroid vania et platformer",
      en: "Creation of an adventure solo game, metroidvania and platformer",
    },
    tags: ["Unreal Engine", "Blueprints"],
    color: "bg-[#4caf50]",
    image: "/projects/Gems-Shift_Preview.png",
    year: "2026",
    repositoryUrl: "https://github.com/Nolfews/Gems-Shift",
  },
  {
    id: "Sparring-Protocol",
    title: "Sparring-Protocol",
    category: "games",
    type: { fr: "Jeu vidéo", en: "Video game" },
    description: {
      fr: "Création d'un jeu de combats FPS entre joueurs et IA",
      en: "Creation of a FPS fighting game between players and AI",
    },
    tags: ["Unreal Engine", "C++", "Blueprints"],
    color: "bg-[#9c27b0]",
    year: "2026",
    repositoryUrl: "https://github.com/Nolfews/Sparring-Protocol",
  }
];

export const featuredProjects = [...projectCatalog]
  .sort((firstProject, secondProject) => Number(secondProject.year) - Number(firstProject.year))
  .slice(0, 2);
