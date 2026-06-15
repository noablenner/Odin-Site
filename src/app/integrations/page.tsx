import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { integrations } from "@/content/site";

export const metadata: Metadata = {
  title: "Intégrations",
  description:
    "Connectez Odin à Airtable, Google Drive, Gmail, Sheets, Outlook/Excel, vos API REST et webhooks — via vos propres comptes, en OAuth. D'autres connecteurs arrivent.",
  alternates: { canonical: "/integrations" },
};

const highlights = [
  {
    icon: "lock" as const,
    title: "OAuth, vos comptes",
    desc: "Chaque connexion utilise vos identifiants. Odin n'accède qu'aux périmètres que vous autorisez.",
  },
  {
    icon: "shield" as const,
    title: "Révocable à tout moment",
    desc: "Coupez un accès depuis votre fournisseur ou depuis Odin quand vous le souhaitez.",
  },
  {
    icon: "globe" as const,
    title: "Données protégées",
    desc: "Vos données servent uniquement à fournir le service. Elles ne sont ni revendues, ni utilisées pour la publicité.",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Intégrations"
        title={
          <>
            Connectez <span className="text-gradient">vos outils</span> à Odin
          </>
        }
        subtitle="Reliez vos comptes en quelques clics. Odin lit, écrit et agit dans vos outils — uniquement avec votre autorisation."
      />

      <Section className="pt-8">
        <StaggerGroup className="grid gap-5 md:grid-cols-3">
          {highlights.map((h) => (
            <StaggerItem key={h.title}>
              <Card className="h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <Icon name={h.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {h.desc}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-bold text-foreground">
            Connecteurs disponibles
          </h2>
        </Reveal>
        <StaggerGroup className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.available.map((it) => (
            <StaggerItem key={it.name}>
              <div className="group flex h-full items-center gap-3 rounded-2xl border border-border bg-card/70 p-4 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/50 font-display text-sm font-bold text-foreground">
                  {it.name.slice(0, 2)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {it.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{it.desc}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-16">
          <div className="rounded-2xl border border-border bg-surface/40 p-8">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Bientôt disponibles
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Nous ajoutons régulièrement de nouveaux connecteurs. Un besoin
              spécifique ? Dites-le-nous.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {integrations.comingSoon.map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-sm text-muted-foreground"
                >
                  {name}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/support" variant="secondary" size="md">
                Demander un connecteur
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <FinalCTA />
    </>
  );
}
