"use client";

import Link from "next/link";
import { useSitePreferences } from "@/components/site-preferences";

export function SiteFooter() {
  const { language } = useSitePreferences();
  const copy = language === "fr"
    ? { note: "Construit avec curiosite et beaucoup de cafe.", contact: "Me contacter" }
    : { note: "Built with curiosity and a lot of coffee.", contact: "Get in touch" };

  return (
    <footer className="border-t border-[var(--border)] px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-[var(--muted)] sm:flex-row">
        <span>{copy.note}</span>
        <div className="flex gap-5">
          <Link href="/cv" className="hover:text-[var(--ink)]">
            CV
          </Link>
          <a href="mailto:nolan.papa93@gmail.com" className="hover:text-[var(--ink)]">
            {copy.contact}
          </a>
        </div>
      </div>
    </footer>
  );
}
