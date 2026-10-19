"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Language = "fr" | "en";
export type Theme = "dark" | "light";

type SitePreferences = {
  language: Language;
  theme: Theme;
  setLanguage: (language: Language) => void;
  toggleTheme: () => void;
};

const PreferencesContext = createContext<SitePreferences | null>(null);

export function SitePreferencesProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [language, setLanguage] = useState<Language>("fr");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedLanguage = window.localStorage.getItem("portfolio-language");
      const savedTheme = window.localStorage.getItem("portfolio-theme");

      if (savedLanguage === "fr" || savedLanguage === "en") {
        setLanguage(savedLanguage);
      }
      if (savedTheme === "dark" || savedTheme === "light") {
        setTheme(savedTheme);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  return (
    <PreferencesContext.Provider
      value={{
        language,
        theme,
        setLanguage,
        toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export function useSitePreferences() {
  const context = useContext(PreferencesContext);

  if (!context) {
    throw new Error("useSitePreferences must be used inside SitePreferencesProvider");
  }

  return context;
}