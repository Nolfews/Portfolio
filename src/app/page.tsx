"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Play } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { useSitePreferences } from "@/components/site-preferences";
import { featuredProjects } from "@/data/portfolio";

export default function Home() {
  const { language } = useSitePreferences();
  const isFrench = language === "fr";
  const copy = isFrench
    ? {
        eyebrow: "Developpeur web & jeux vidéos et logiciels",
        title: (
          <>
            J&apos;imagine, je développe et je transforme des{" "}
            <span className="text-[var(--accent)]">idées</span> en projets
            concrets.
          </>
        ),
        intro: "Chaque projet raconte quelque chose. Voici les miens.",
        projectsButton: "Decouvrir mes projets",
        selection: "Selection",
        making: "Mes projets marquants",
        allProjects: "Tous les projets",
        next: "Le prochain chapitre",
        contactTitle: "Un projet en tête ? Parlons-en.",
        contact: "Ecrire un message",
      }
    : {
        eyebrow: "Web developer & creator of video games and software",
        title: (
          <>
            I imagine, develop and turn{" "}
            <span className="text-[var(--accent)]">ideas</span> into concrete
            projects.
          </>
        ),
        intro: "Every project tells a story. Here are mine.",
        projectsButton: "Explore my projects",
        selection: "Selection",
        making: "My featured projects",
        allProjects: "All projects",
        next: "The next chapter",
        contactTitle: "Have a project in mind? Let's talk.",
        contact: "Send a message",
      };
  return (
    <div className="page-in">
      <section className="grid-paper border-b border-[var(--border)] px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1 className="display mt-6 max-w-4xl text-6xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-8xl">
            {copy.title}
          </h1>
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
            <p className="max-w-md leading-7 text-[var(--muted)]">
              {copy.intro}
            </p>
            <div className="flex gap-3">
              <Link
                href="/projects"
                className="interactive-control primary-button inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold"
              >
                {copy.projectsButton} <ArrowUpRight size={16} />
              </Link>
              <a
                href="https://github.com/Nolfews"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="interactive-control grid h-11 w-11 place-items-center rounded-full border border-[var(--border)]"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow">{copy.selection}</p>
            <h2 className="display mt-2 text-4xl font-bold">{copy.making}</h2>
          </div>
          <Link
            href="/projects"
            className="hidden text-sm font-bold underline decoration-[var(--accent)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--accent)] sm:block"
          >
            {copy.allProjects}
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      <section className="bg-[var(--next-bg)] px-6 py-16 text-[var(--next-ink)] lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow text-[var(--next-muted)]">{copy.next}</p>
            <h2 className="display mt-3 max-w-xl text-4xl font-bold">
              {copy.contactTitle}
            </h2>
          </div>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nolan.papa93@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--next-accent)] transition-transform hover:translate-x-1"
          >
            {copy.contact} <Play size={14} fill="currentColor" />
          </a>
        </div>
      </section>
    </div>
  );
}
