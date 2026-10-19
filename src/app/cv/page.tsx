"use client";

import { Download, ExternalLink } from "lucide-react";
import { useSitePreferences } from "@/components/site-preferences";

export default function CvPage() {
  const { language } = useSitePreferences();
  const isFrench = language === "fr";

  return (
    <div className="page-in mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <div className="flex flex-col justify-between gap-8 border-b-2 border-[var(--border)] pb-12 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">Curriculum vitae</p>
          <h1 className="display mt-5 text-6xl font-bold leading-none">
            {isFrench ? "Mon parcours." : "My journey."}
          </h1>
        </div>
        <div className="flex gap-3">
          <a
            href="/cv.pdf"
            target="_blank"
            className="interactive-control inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-bold"
          >
            {isFrench ? "Consulter" : "Open"} <ExternalLink size={16} />
          </a>
          <a
            href="/cv.pdf"
            download
            className="interactive-control primary-button inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold"
          >
            {isFrench ? "Telecharger" : "Download"} <Download size={16} />
          </a>
        </div>
      </div>
      <div className="grid gap-16 py-12 md:grid-cols-[1fr_1.5fr]">
        <div>
          <p className="eyebrow">{isFrench ? "Contact" : "Contact"}</p>
          <p className="mt-4 text-lg font-semibold">
            hello@example.com
            <br />
            France / Remote
          </p>
          <p className="eyebrow mt-12">{isFrench ? "Technologies" : "Stack"}</p>
          <p className="mt-4 leading-8 text-[var(--muted)]">
            TypeScript, React, Next.js
            <br />
            Tailwind CSS, Node.js
            <br />
            Unity, C#, Git
          </p>
        </div>
        <div className="space-y-12">
          <section>
            <p className="eyebrow">{isFrench ? "Experience" : "Experience"}</p>
            <div className="mt-5 border-l-2 border-[var(--accent)] pl-5">
              <h2 className="display text-2xl font-bold">
                {isFrench ? "Developpeur full-stack" : "Full-stack developer"}
              </h2>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {isFrench ? "2023 - Aujourd'hui / Projets independants" : "2023 - Present / Independent projects"}
              </p>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                {isFrench ? "Conception et developpement d'applications web accessibles, performantes et faciles a faire evoluer." : "Design and development of accessible, performant and maintainable web applications."}
              </p>
            </div>
          </section>
          <section>
            <p className="eyebrow">{isFrench ? "Formation" : "Education"}</p>
            <div className="mt-5 border-l-2 border-[var(--accent)] pl-5">
              <h2 className="display text-2xl font-bold">
                {isFrench ? "Developpement logiciel" : "Software development"}
              </h2>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {isFrench ? "2020 - 2023 / Formation a completer" : "2020 - 2023 / Education details to add"}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
