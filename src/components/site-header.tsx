"use client";

import Link from "next/link";
import { Languages, Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";
import { useSitePreferences } from "@/components/site-preferences";

const translations = {
  fr: { home: "Accueil", about: "A propos de moi", projects: "Projets", cv: "CV", github: "GitHub", theme: "Changer de theme", language: "Changer de langue" },
  en: { home: "Home", about: "About me", projects: "Projects", cv: "CV", github: "GitHub", theme: "Change theme", language: "Change language" },
};

export function SiteHeader() {
  const { language, theme, setLanguage, toggleTheme } = useSitePreferences();
  const pathname = usePathname();
  const copy = translations[language];
  const links = [[copy.home, "/"], [copy.about, "/about"], [copy.projects, "/projects"], [copy.cv, "/cv"]];

  return (
    <header className="border-b border-[var(--border)] bg-[var(--paper)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="display text-lg font-bold tracking-tight">
          NOLAN<span className="text-[var(--accent)]">.</span>
        </Link>
        <nav
          className="hidden items-center gap-6 text-sm font-semibold md:flex"
          aria-label="Navigation principale"
        >
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={`nav-link ${pathname === href ? "nav-link-active" : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button type="button" onClick={toggleTheme} aria-label={copy.theme} title={copy.theme} className="icon-button">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button type="button" onClick={() => setLanguage(language === "fr" ? "en" : "fr")} aria-label={copy.language} title={copy.language} className="language-button">
            <Languages size={15} /> {language.toUpperCase()}
          </button>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="header-button">
            {copy.github}
          </a>
        </div>
      </div>
    </header>
  );
}
