import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { testimonials } from "@/content/site";

function Stars() {
  return (
    <div className="flex gap-0.5 text-primary" aria-label="5 étoiles sur 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.6 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <Section id="temoignages">
      <SectionHeader
        eyebrow="Témoignages"
        title={
          <>
            Ils font confiance à <span className="text-gradient">Odin</span>
          </>
        }
        subtitle="Des entreprises qui ont remplacé les tâches répétitives par un agent qui connaît leur activité."
      />

      <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2">
        {testimonials.map((t) => (
          <StaggerItem key={t.initials} className="h-full">
            <Card className="flex h-full flex-col" hover={false}>
              <Stars />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-sm font-semibold text-primary-foreground">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">
                    {t.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        TODO : remplacer par de vrais témoignages clients (nom, fonction, photo/initiales).
      </p>
    </Section>
  );
}
