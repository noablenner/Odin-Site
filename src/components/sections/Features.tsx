import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { features } from "@/content/site";

export function Features() {
  return (
    <Section id="fonctionnalites">
      <SectionHeader
        eyebrow="Fonctionnalités"
        title={
          <>
            Tout ce qu&apos;il faut pour un agent{" "}
            <span className="text-gradient">vraiment utile</span>
          </>
        }
        subtitle="Odin n'est pas un chatbot générique de plus. C'est un agent qui connaît votre entreprise, agit dans vos outils et répond là où sont vos interlocuteurs."
      />

      <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <StaggerItem key={f.title}>
            <Card className="group h-full">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <Icon name={f.icon as IconName} className="h-6 w-6" />
                <span className="absolute inset-0 -z-10 rounded-xl bg-primary/20 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
