"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { useSitePreferences } from "@/components/site-preferences";
import { projectCatalog, type ProjectCategory } from "@/data/portfolio";

const categories: Array<{ id: ProjectCategory; fr: string; en: string }> = [
  { id: "web", fr: "Web", en: "Web" },
  { id: "game", fr: "Jeu video", en: "Video game" },
  { id: "software", fr: "Logiciel", en: "Software" },
  { id: "technical", fr: "Challenge technique", en: "Technical challenge" },
];

export default function ProjectsPage() {
  const { language } = useSitePreferences();
  const isFrench = language === "fr";
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");
  const filteredProjects = activeCategory === "all"
    ? projectCatalog
    : projectCatalog.filter((project) => project.category === activeCategory);

  return (
    <div className="page-in mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <p className="eyebrow">{isFrench ? "Projets" : "Projects"}</p>
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <h1 className="display mt-5 max-w-2xl text-6xl font-bold leading-none">
          {isFrench
            ? "Des idees devenues experiences."
            : "Ideas turned into experiences."}
        </h1>
        <p className="max-w-xs text-sm leading-6 text-[var(--muted)]">
          {isFrench
            ? "Une selection de projets web, outils et prototypes qui racontent ma maniere de construire."
            : "A selection of web projects, tools and prototypes that show how I build."}
        </p>
      </div>
      <div
        className="mt-12 flex flex-wrap gap-2"
        aria-label={isFrench ? "Filtrer les projets" : "Filter projects"}
      >
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`filter-button ${activeCategory === "all" ? "filter-button-active" : ""}`}
        >
          {isFrench ? "Tous" : "All"}
        </button>
        {categories.map((category) => (
          <button
            type="button"
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`filter-button ${activeCategory === category.id ? "filter-button-active" : ""}`}
          >
            {category[language]}
          </button>
        ))}
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
