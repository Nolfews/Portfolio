"use client";

import Image from "next/image";
import { useSitePreferences } from "@/components/site-preferences";
import type { PortfolioProject } from "@/data/portfolio";

export function ProjectCard({ project }: { project: PortfolioProject }) {
  const { language } = useSitePreferences();
  const copy =
    language === "fr"
      ? { preview: "Apercu projet", view: "Voir le depot" }
      : { preview: "Project preview", view: "View repository" };

  return (
    <article className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-transform duration-200 hover:-translate-y-1">
      <div className={`relative flex h-52 items-end overflow-hidden p-5 ${project.color}`}>
        {project.image && (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <span className="relative z-10 rounded-full bg-[var(--paper)]/85 px-3 py-1 text-xs font-bold uppercase tracking-wider">
          {copy.preview}
        </span>
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="eyebrow">{project.type[language]}</span>
          <span className="text-sm text-[var(--muted)]">{project.year}</span>
        </div>
        <h3 className="display text-2xl font-bold">{project.title}</h3>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
          {project.description[language]}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--border)] px-2.5 py-1 text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.repositoryUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block text-sm font-bold underline decoration-[var(--accent)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--accent)]"
        >
          {copy.view}
        </a>
      </div>
    </article>
  );
}
