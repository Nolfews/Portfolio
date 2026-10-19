import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SitePreferencesProvider } from "@/components/site-preferences";
import "./globals.css";

const displayFont = Syne({ subsets: ["latin"], variable: "--font-display" });
const bodyFont = Space_Grotesk({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Portfolio | Developpeur creatif",
  description: "Portfolio personnel de developpeur creatif",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-theme="dark">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <SitePreferencesProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </SitePreferencesProvider>
      </body>
    </html>
  );
}
