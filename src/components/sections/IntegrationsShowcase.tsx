import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { integrations } from "@/content/site";

export function IntegrationsShowcase() {
  return (
    <Section id="integrations">
      <SectionHeader
        eyebrow="Intégrations"
        title={
          <>
            Branché sur <span className="text-gradient">vos outils</span>, via vos
            propres comptes
          </>
        }
        subtitle="Chaque connexion se fait en OAuth avec vos identifiants. Odin accède uniquement à ce que vous autorisez — et vous pouvez révoquer à tout moment."
      />

      <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

      <Reveal className="mt-10">
        <div className="rounded-2xl border border-border bg-surface/40 p-6 text-center">
          <p className="text-sm font-medium text-muted-foreground">
            Bientôt disponibles
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {integrations.comingSoon.map((name) => (
              <span
                key={name}
                className="rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-sm text-muted-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-10 flex justify-center">
        <Button href="/integrations" variant="secondary" size="md">
          Voir toutes les intégrations
          <Icon name="arrow" className="h-4 w-4" />
        </Button>
      </Reveal>
    </Section>
  );
}
