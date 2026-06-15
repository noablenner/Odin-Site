import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { pricing } from "@/content/site";

export function Pricing({ withHeader = true }: { withHeader?: boolean }) {
  return (
    <Section id="tarifs">
      {withHeader ? (
        <SectionHeader
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          subtitle={pricing.subtitle}
        />
      ) : null}

      <StaggerGroup className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
        {pricing.plans.map((plan) => (
          <StaggerItem key={plan.name} className="h-full">
            <div
              className={cn(
                "relative flex h-full flex-col rounded-3xl border p-7 shadow-card backdrop-blur-sm transition-all duration-300",
                plan.featured
                  ? "border-primary/50 bg-card shadow-glow"
                  : "border-border bg-card/70 hover:-translate-y-1 hover:border-primary/40",
              )}
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-primary-foreground shadow-button">
                  Le plus populaire
                </span>
              ) : null}

              <h3 className="font-display text-lg font-semibold text-foreground">
                {plan.name}
              </h3>
              <p className="mt-2 min-h-[2.5rem] text-sm text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-5 flex items-end gap-1">
                <span className="font-display text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                {plan.period ? (
                  <span className="pb-1 text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                ) : null}
              </div>

              <Button
                href={plan.cta.href}
                variant={plan.featured ? "primary" : "secondary"}
                size="md"
                className="mt-6 w-full"
              >
                {plan.cta.label}
              </Button>

              <ul className="mt-7 space-y-3 border-t border-border pt-6">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm">
                    <Icon
                      name="check"
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        {pricing.note}
      </p>
    </Section>
  );
}
