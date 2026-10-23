"use client";

import { ChevronDown, Download, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useSitePreferences } from "@/components/site-preferences";

type CvEntry = {
  title: string;
  date?: string;
  description?: string;
};

export default function CvPage() {
  const { language } = useSitePreferences();
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const isFrench = language === "fr";
  const viewHref = isFrench ? "/cv-fr-nolan-papa.pdf" : "/cv-en-nolan-papa.pdf";
  const copy = isFrench
    ? {
        label: "Curriculum vitae",
        title: "Mon parcours.",
        view: "Consulter",
        download: "Telecharger",
        french: "CV francais",
        english: "CV anglais",
        contact: "Contact",
        skills: "Competences",
        languages: "Langages",
        experience: "Experiences",
        educationLabel: "Cursus scolaire",
        profile: "Passionne d'informatique, je suis etudiant en 4e annee a Epitech Nantes. En plus de vouloir developper mes connaissances, je me fixe comme objectif professionnel de faire avancer l'informatique. Mes centres d'interets sont les jeux video, la cuisine et le karate.",
        languageList: ["Anglais - C1", "Francais - Natif", "Espagnol - Scolaire"],
        skillList: ["Maitrise d'outils (VS Code, GitHub)", "Developpement web et mobile", "Developpement oriente objet", "Capacite d'apprentissage rapide", "Travail en equipe", "Adaptabilite", "Sens de la qualite"],
        experiences: [
          { title: "Projets etudiants", description: "Participation a divers projets realises en groupe dans le cadre de ma formation : algorithmique, developpement web, creation de jeux video et automatisation." },
          { title: "Stage - Developpeur chez Alphalink", date: "Oct. - Dec. 2024", description: "Stage de 3 mois au sein d'Alphalink axe sur la creation d'une IHM destinee a faciliter l'acces aux donnees internes. Conception, developpement et optimisation de l'interface en collaboration avec l'equipe technique." },
          { title: "Stage - Developpeur chez Aptatio", date: "Avril - Aout 2026", description: "Stage de 4 mois au sein d'Aptatio : mise en oeuvre de projets concrets, de la conception jusqu'a la realisation et la production, en collaboration avec les clients. Projets web, embarques et simulation VR en equipe." },
        ],
        education: [
          { title: "Epitech Nantes - Promos 2023 - 2028", description: "Diplome d'expert en technologie\nTitre d'Expert en Ingenierie Logicielle" },
          { title: "Bac Maths - NSI 2021", description: "Perfectionnement de notions scientifiques generales" },
        ],
      }
    : {
        label: "Curriculum vitae",
        title: "My journey.",
        view: "Open",
        download: "Download",
        french: "French CV",
        english: "English CV",
        contact: "Contact",
        skills: "Skills",
        languages: "Languages",
        experience: "Experience",
        educationLabel: "Education",
        profile: "I am a computer science enthusiast and a fourth-year student at Epitech Nantes. Alongside developing my knowledge, my professional goal is to help move computer science forward. My interests include video games, cooking and karate.",
        languageList: ["English - C1", "French - Native", "Spanish - Academic"],
        skillList: ["Tools (VS Code, GitHub)", "Web and mobile development", "Object-oriented development", "Fast learner", "Teamwork", "Adaptability", "Quality-minded"],
        experiences: [
          { title: "Student projects", description: "Took part in various group projects during my studies: algorithms, web development, video game creation and automation." },
          { title: "Internship - Developer at Alphalink", date: "Oct. - Dec. 2024", description: "Three-month internship focused on creating a user interface to make internal data easier to access. Designed, developed and optimized the interface in collaboration with the technical team." },
          { title: "Internship - Developer at Aptatio", date: "Apr. - Aug. 2026", description: "Four-month internship delivering concrete projects from design through production, in collaboration with clients. Web, embedded and VR simulation projects within a team." },
        ],
        education: [
          { title: "Epitech Nantes - Classes of 2023 - 2028", description: "Expert in Technology diploma\nExpert in Software Engineering qualification" },
          { title: "High school diploma - Mathematics / Computer Science, 2021", description: "Advanced study of general scientific subjects" },
        ],
      };

  return (
    <div className="page-in mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <div className="flex flex-col justify-between gap-8 border-b-2 border-[var(--border)] pb-12 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">{copy.label}</p>
          <h1 className="display mt-5 text-6xl font-bold leading-none">{copy.title}</h1>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={viewHref} target="_blank" rel="noreferrer" className="interactive-control inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-bold">
            {copy.view} <ExternalLink size={16} />
          </a>
          <div className="relative">
            <button type="button" onClick={() => setIsDownloadOpen((open) => !open)} aria-expanded={isDownloadOpen} className="interactive-control primary-button inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold">
              {copy.download} <Download size={16} /> <ChevronDown size={15} />
            </button>
            {isDownloadOpen && (
              <div className="absolute right-0 z-10 mt-2 min-w-44 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-1 shadow-xl">
                <a href="/cv-fr-nolan-papa.pdf" download className="block rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-[var(--accent)] hover:text-[var(--accent-ink)]">{copy.french}</a>
                <a href="/cv-en-nolan-papa.pdf" download className="block rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-[var(--accent)] hover:text-[var(--accent-ink)]">{copy.english}</a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-16 py-12 md:grid-cols-[0.8fr_1.5fr]">
        <aside className="space-y-10">
          <Image
            src="/Profil_picture.jpg"
            alt="Nolan Papa"
            width={240}
            height={240}
            className="mx-auto aspect-square rounded-full border-4 border-[var(--accent)] object-cover md:mx-0"
          />
          <section>
            <p className="eyebrow">{copy.contact}</p>
            <div className="mt-4 space-y-2 text-lg font-semibold">
              <a href="tel:+33619825236" className="block transition-colors hover:text-[var(--accent)]">+33 6 19 82 52 36</a>
              <a href="mailto:nolan.papa93@gmail.com" className="block transition-colors hover:text-[var(--accent)]">nolan.papa93@gmail.com</a>
              <p>Nantes Metropole (44)</p>
              <p>Permis B vehicule</p>
              <a href="https://github.com/Nolfews" target="_blank" rel="noreferrer" className="block transition-colors hover:text-[var(--accent)]">github.com/Nolfews</a>
            </div>
          </section>
          <section>
            <p className="eyebrow">{copy.languages}</p>
            <ul className="mt-4 space-y-2 text-[var(--muted)]">{copy.languageList.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <section>
            <p className="eyebrow">{copy.skills}</p>
            <ul className="mt-4 space-y-2 text-[var(--muted)]">{copy.skillList.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        </aside>

        <div className="space-y-12">
          <section>
            <p className="eyebrow">Profil</p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--muted)]">{copy.profile}</p>
          </section>
          <section>
            <p className="eyebrow">{copy.experience}</p>
            <div className="mt-5 space-y-8 border-l-2 border-[var(--accent)] pl-5">
              {copy.experiences.map((experience: CvEntry) => (
                <article key={experience.title}>
                  <h2 className="display text-2xl font-bold">{experience.title}</h2>
                  {experience.date && <p className="mt-1 text-sm text-[var(--muted)]">{experience.date}</p>}
                  {experience.description && <p className="mt-3 whitespace-pre-line leading-7 text-[var(--muted)]">{experience.description}</p>}
                </article>
              ))}
            </div>
          </section>
          <section>
            <p className="eyebrow">{copy.educationLabel}</p>
            <div className="mt-5 space-y-7 border-l-2 border-[var(--accent)] pl-5">
              {copy.education.map((entry: CvEntry) => (
                <article key={entry.title}>
                  <h2 className="display text-xl font-bold">{entry.title}</h2>
                  <p className="mt-2 whitespace-pre-line leading-7 text-[var(--muted)]">{entry.description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
