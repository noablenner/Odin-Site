import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Besoin d'aide avec Odin ? Contactez notre équipe support par e-mail. Retrouvez aussi notre politique de confidentialité et nos conditions d'utilisation.",
  alternates: { canonical: "/support" },
};

const resources = [
  {
    icon: "lock" as const,
    title: "Confidentialité",
    desc: "Comment nous traitons et protégeons vos données.",
    href: "/privacy",
    cta: "Lire la politique",
  },
  {
    icon: "book" as const,
    title: "Conditions d'utilisation",
    desc: "Les règles qui encadrent l'utilisation du service.",
    href: "/terms",
    cta: "Lire les conditions",
  },
  {
    icon: "plug" as const,
    title: "Intégrations",
    desc: "Quels outils connecter et comment gérer les accès.",
    href: "/integrations",
    cta: "Voir les intégrations",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title={
          <>
            Une question ? <span className="text-gradient">On est là.</span>
          </>
        }
        subtitle="Notre équipe vous accompagne pour configurer votre agent, connecter vos outils et tirer le meilleur d'Odin."
      />

      <Section className="pt-8">
        <div className="mx-auto max-w-3xl">
          <Card className="text-center" hover={false}>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient shadow-glow-lg">
              <Icon name="mail" className="h-7 w-7 text-primary-foreground" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold text-foreground">
              Contactez le support
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Écrivez-nous, nous répondons rapidement. Pour les demandes liées à
              vos données (accès, suppression, révocation d&apos;un accès OAuth),
              précisez l&apos;adresse e-mail de votre compte.
            </p>

            <div className="mt-6 inline-flex flex-col items-center gap-3">
              <a
                href={`mailto:${company.supportEmail}`}
                className="font-display text-xl font-semibold text-gradient sm:text-2xl"
              >
                {company.supportEmail}
              </a>
              {company.phone ? (
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {company.phone}
                </a>
              ) : null}
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={`mailto:${company.supportEmail}`} size="lg">
                Envoyer un e-mail
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Button href={company.appUrl} variant="secondary" size="lg">
                Accéder à l&apos;application
              </Button>
            </div>
          </Card>
        </div>

        <StaggerGroup className="mx-auto mt-8 grid max-w-3xl gap-5 md:grid-cols-3">
          {resources.map((r) => (
            <StaggerItem key={r.href} className="h-full">
              <Card className="flex h-full flex-col">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <Icon name={r.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-foreground">
                  {r.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {r.desc}
                </p>
                <Link
                  href={r.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-foreground"
                >
                  {r.cta}
                  <Icon name="arrow" className="h-3.5 w-3.5" />
                </Link>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs text-muted-foreground">
          {company.legalEntity} — {company.address}. Voir aussi notre{" "}
          <Link href="/privacy" className="text-primary underline-offset-4 hover:underline">
            politique de confidentialité
          </Link>{" "}
          et nos{" "}
          <Link href="/terms" className="text-primary underline-offset-4 hover:underline">
            conditions d&apos;utilisation
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
