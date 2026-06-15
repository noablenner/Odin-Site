import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { company } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const title = "Odin — L'agent IA personnalisé de votre entreprise";
const description =
  "Odin est l'agent IA sur-mesure de votre entreprise : configurez sa personnalité, connectez vos outils (Airtable, Drive, Gmail…), importez vos documents, et répondez sur le web, WhatsApp et Telegram.";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: title,
    template: "%s — Odin",
  },
  description,
  applicationName: "OdinFlow",
  keywords: [
    "agent IA",
    "agent IA entreprise",
    "chatbot personnalisé",
    "automatisation IA",
    "Odin",
    "OdinFlow",
    "RAG",
    "WhatsApp",
    "Airtable",
  ],
  authors: [{ name: "OdinFlow" }],
  alternates: {
    canonical: company.url,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: company.url,
    siteName: "OdinFlow",
    title,
    description,
    images: [
      {
        url: "/odin-logo-light.png",
        width: 1423,
        height: 534,
        alt: "Odin — AI Agents for Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/odin-logo-light.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0612",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${display.variable}`}>
      <body className="min-h-screen bg-background font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
