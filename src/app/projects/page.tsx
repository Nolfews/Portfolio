"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { useSitePreferences } from "@/components/site-preferences";
import { projectCatalog, type ProjectCategory } from "@/data/portfolio";

const categories: Array<{ id: ProjectCategory; fr: string; en: string }> = [
  { id: "web", fr: "Web", en: "Web" },
  { id: "games", fr: "Jeu video", en: "Video game" },
  { id: "software", fr: "Logiciel", en: "Software" },
];

type SortOrder = "newest" | "oldest" | "alphabetical";

const sortOptions: Array<{ value: SortOrder; fr: string; en: string }> = [
  { value: "newest", fr: "Plus récent", en: "Most recent" },
  { value: "oldest", fr: "Plus ancien", en: "Oldest" },
  { value: "alphabetical", fr: "Alphabétique", en: "Alphabetical" },
];

export default function ProjectsPage() {
  const { language } = useSitePreferences();
  const isFrench = language === "fr";
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const sortMenuRef = useRef<HTMLDivElement>(null);
  const normalizedSearchTerm = searchTerm.trim().toLocaleLowerCase();
  const selectedSortOption = sortOptions.find((option) => option.value === sortOrder);

  useEffect(() => {
    function closeSortMenu(event: MouseEvent) {
      if (sortMenuRef.current && !sortMenuRef.current.contains(event.target as Node)) {
        setIsSortMenuOpen(false);
      }
    }

    function closeSortMenuOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsSortMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", closeSortMenu);
    document.addEventListener("keydown", closeSortMenuOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeSortMenu);
      document.removeEventListener("keydown", closeSortMenuOnEscape);
    };
  }, []);
  const visibleProjects = projectCatalog.filter((project) => {
    const matchesCategory = activeCategory === "all" || project.category === activeCategory;
    const matchesSearch = project.title.toLocaleLowerCase().includes(normalizedSearchTerm);

    return matchesCategory && matchesSearch;
  });
  const filteredProjects = [...visibleProjects].sort((firstProject, secondProject) => {
    if (sortOrder === "alphabetical") {
      return firstProject.title.localeCompare(secondProject.title);
    }

    return sortOrder === "newest"
      ? Number(secondProject.year) - Number(firstProject.year)
      : Number(firstProject.year) - Number(secondProject.year);
  });

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
            ? "Une selection de projets, outils et prototypes qui racontent ma maniere de construire."
            : "A selection of projects, tools and prototypes that show how I build."}
        </p>
      </div>
      <div
        className="mt-12 grid items-center gap-4 md:grid-cols-[minmax(0,1fr)_minmax(15rem,auto)_auto]"
        aria-label={isFrench ? "Filtrer les projets" : "Filter projects"}
      >
        <div className="flex flex-wrap gap-2">
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
        <label className="flex min-w-0 items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[0.78rem] font-bold text-[var(--muted)] transition-[border-color,box-shadow] duration-150 focus-within:border-[var(--accent)] focus-within:ring-3 focus-within:ring-[var(--accent)]/20">
          <span className="sr-only">{isFrench ? "Rechercher un projet" : "Search for a project"}</span>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder={isFrench ? "Rechercher par nom" : "Search by name"}
            aria-label={isFrench ? "Rechercher par nom" : "Search by name"}
            className="w-full min-w-0 border-0 bg-transparent px-4 py-2.5 text-[var(--ink)] outline-none placeholder:text-[var(--muted)]"
          />
        </label>
        <div
          className="relative flex items-center justify-between gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] pl-4 text-[0.78rem] font-bold text-[var(--muted)] transition-[border-color,box-shadow] duration-150 focus-within:border-[var(--accent)] focus-within:ring-3 focus-within:ring-[var(--accent)]/20"
          ref={sortMenuRef}
        >
          <span>{isFrench ? "Trier par" : "Sort by"}</span>
          <button
            type="button"
            className="flex min-w-[8.5rem] cursor-pointer items-center justify-between gap-3 px-0 py-2.5 pr-4 text-left text-[var(--ink)]"
            onClick={() => setIsSortMenuOpen((isOpen) => !isOpen)}
            aria-haspopup="listbox"
            aria-expanded={isSortMenuOpen}
          >
            {selectedSortOption?.[language]}
            <ChevronDown
              className={`shrink-0 text-[var(--accent)] transition-transform duration-150 ${isSortMenuOpen ? "rotate-180" : ""}`}
              size={15}
              strokeWidth={2.5}
              aria-hidden="true"
            />
          </button>
          {isSortMenuOpen && (
            <div
              className="absolute right-0 top-[calc(100%+0.5rem)] z-10 min-w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-1.5 shadow-[0_12px_28px_color-mix(in_srgb,var(--ink)_14%,transparent)]"
              role="listbox"
              aria-label={isFrench ? "Options de tri" : "Sort options"}
            >
              {sortOptions.map((option) => (
                <button
                  type="button"
                  key={option.value}
                  role="option"
                  aria-selected={sortOrder === option.value}
                  className={`block w-full whitespace-nowrap rounded-xl px-3 py-2.5 text-left text-[0.78rem] font-bold text-[var(--muted)] hover:bg-[var(--accent)] hover:!text-[var(--accent-ink)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 ${sortOrder === option.value ? "bg-[var(--accent)] !text-[var(--accent-ink)]" : ""}`}
                  onClick={() => {
                    setSortOrder(option.value);
                    setIsSortMenuOpen(false);
                  }}
                >
                  {option[language]}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <p className="mt-16 text-center text-sm text-[var(--muted)]">
          {isFrench ? "Aucun projet ne correspond à cette recherche." : "No projects match this search."}
        </p>
      )}
    </div>
  );
}
