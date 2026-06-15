import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { useCases } from "@/content/site";

export function UseCases() {
  return (
    <Section id="cas-usage" className="bg-surface/40">
      <SectionHeader
        eyebrow="Cas d'usage"
        title={
          <>
            Un agent, <span className="text-gradient">mille usages</span>
          </>
        }
        subtitle="De la relation client à l'automatisation interne, Odin s'adapte à votre métier."
      />

      <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-2">
        {useCases.map((uc) => (
          <StaggerItem key={uc.title}>
            <Card className="group h-full">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary">
                    {uc.tag}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                    {uc.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {uc.desc}
                  </p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-primary/50 group-hover:text-primary">
                  <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
