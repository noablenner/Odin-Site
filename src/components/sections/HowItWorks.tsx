import { Section, SectionHeader } from "@/components/ui/Section";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { howItWorks } from "@/content/site";

export function HowItWorks() {
  return (
    <Section id="fonctionnement" className="bg-surface/40">
      <SectionHeader
        eyebrow="Comment ça marche"
        title={
          <>
            Votre agent en ligne en <span className="text-gradient">4 étapes</span>
          </>
        }
        subtitle="Pas de code, pas de configuration technique. Vous décrivez ce que vous voulez, Odin s'occupe du reste."
      />

      <StaggerGroup className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {howItWorks.map((step, i) => (
          <StaggerItem key={step.step}>
            <div className="group relative h-full rounded-2xl border border-border bg-card/70 p-6 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl font-bold text-gradient">
                  {step.step}
                </span>
                {i < howItWorks.length - 1 ? (
                  <span className="hidden text-2xl text-border lg:block">→</span>
                ) : null}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
