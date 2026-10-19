"use client";

import { useSitePreferences } from "@/components/site-preferences";

export default function AboutPage() {
  const { language } = useSitePreferences();
  const isFrench = language === "fr";
  const copy = isFrench
    ? {
        label: "A propos de moi",
        title: "Créer avec imagination. Avancer avec détermination.",
        paragraphs: [
          "Je suis un développeur en formation, passionné par la création sous toutes ses formes. Ce qui me plaît dans le développement, c'est la liberté de partir d'une idée et de lui donner vie, qu'il s'agisse d'un site web, d'un logiciel ou d'un jeu vidéo. J'aime autant imaginer des expériences que comprendre les mécanismes techniques qui les rendent possibles.",
          "Au fil de mes études, j'ai eu l'occasion de développer des projets variés : des RPG aux shooters inspirés de R-Type, en passant par des jeux réalisés avec Unreal Engine. Mais je me suis aussi intéressé à des problématiques plus techniques, parfois moins visibles à l'écran, comme les architectures ECS, les protocoles de transmission de paquets et les bases de données. Ces projets m'ont appris à regarder au-delà du résultat final, à comprendre ce qui se passe sous le capot et à chercher des solutions solides, adaptées aux problèmes rencontrés.",
          "Cette envie de progresser ne s'arrête pas au code. J'ai pratiqué le karaté pendant huit ans, obtenu ma ceinture noire et décroché une belle place au championnat de France. Aujourd'hui, je me consacre à la course à pied, avec l'objectif de devenir marathonien, puis, un jour, de me lancer dans un Ironman. Le sport m'accompagne dans ma façon d'aborder les défis : avec sérieux, rigueur et persévérance. Dans tout ce que j'entreprends, je cherche à donner le meilleur de moi-même, à atteindre mes objectifs et, si possible, à aller encore plus loin.",
        ],
        valuesLabel: "Ce qui me caractérise",
        values: [
          [
            "Créativité",
            "Donner vie à des idées à travers des jeux, des logiciels et des expériences web.",
          ],
          [
            "Curiosité technique",
            "Comprendre les systèmes, explorer les architectures et trouver des solutions adaptées.",
          ],
          [
            "Détermination",
            "Me fixer des objectifs ambitieux et travailler pour les atteindre.",
          ],
          [
            "Progression continue",
            "Apprendre de chaque projet et chercher constamment à améliorer mes compétences.",
          ],
        ],
        quote:
          "Je me donne à 200 % dans ce que j'entreprends, avec l'envie d'atteindre mes objectifs et de repousser mes propres limites.",
      }
    : {
        label: "About me",
        title: "Creating with imagination. Moving forward with determination.",
        paragraphs: [
          "I'm a developer in training with a passion for creating things in all kinds of forms. What I enjoy most about development is the freedom to take an idea and bring it to life, whether it's a website, a piece of software, or a video game. I enjoy both designing experiences and understanding the technical systems that make them possible.",
          "Throughout my studies, I've worked on a variety of projects, from RPGs and R-Type-inspired shooters to games built with Unreal Engine. I've also explored more technical challenges that aren't always visible on screen, including ECS architectures, packet transmission protocols, and databases. These projects have taught me to look beyond the final result, understand what's happening under the hood, and find solid solutions to the problems I encounter.",
          "My drive to improve goes beyond coding. I practised karate for eight years, earned my black belt, and achieved a strong result at the French Championships. Today, I'm focusing on running, with the goal of becoming a marathon runner and, one day, completing an Ironman. Sport has shaped the way I approach challenges: with discipline, commitment, and perseverance. Whatever I take on, I strive to give it my all, reach my goals, and, whenever possible, go beyond them.",
        ],
        valuesLabel: "What defines me",
        values: [
          [
            "Creativity",
            "Bringing ideas to life through games, software and web experiences.",
          ],
          [
            "Technical curiosity",
            "Understanding systems, exploring architectures and finding tailored solutions.",
          ],
          [
            "Determination",
            "Setting ambitious goals and working to achieve them.",
          ],
          [
            "Continuous growth",
            "Learning from every project and constantly improving my skills.",
          ],
        ],
        quote:
          "I give 200% to everything I take on, driven to reach my goals and push my own limits further.",
      };

  return (
    <div className="page-in mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <p className="eyebrow">{copy.label}</p>
      <h1 className="display mt-5 max-w-4xl text-6xl font-bold leading-none">
        {copy.title}
      </h1>
      <div className="mt-16 grid gap-16 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-7 text-lg leading-8 text-[var(--muted)]">
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <aside className="h-fit border-t-2 border-[var(--border)] pt-5">
          <p className="eyebrow">{copy.valuesLabel}</p>
          <div className="mt-6 space-y-6">
            {copy.values.map(([title, description]) => (
              <div key={title}>
                <h2 className="display text-xl font-bold">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </div>
      <blockquote className="mt-16 border-l-4 border-[var(--accent)] bg-[var(--surface)] px-6 py-5 text-xl font-semibold leading-8">
        “{copy.quote}”
      </blockquote>
    </div>
  );
}
