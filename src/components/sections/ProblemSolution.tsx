import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { problemSolution as ps } from "@/content/site";

export function ProblemSolution() {
  return (
    <Section>
      <SectionHeader eyebrow={ps.eyebrow} title={ps.title} />

      <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
        {ps.problems.map((p) => (
          <StaggerItem key={p.title}>
            <Card className="h-full">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted/50 text-muted-foreground">
                <Icon name="bolt" className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <Reveal className="mt-8">
        <div className="border-gradient relative overflow-hidden rounded-3xl p-8 md:p-12">
          <div className="spotlight pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                <Icon name="sparkles" className="h-3.5 w-3.5" />
                La solution
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-foreground md:text-3xl">
                {ps.solutionTitle}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {ps.solutionDesc}
              </p>
            </div>
            <div className="shrink-0">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-gradient shadow-glow-lg">
                <Icon name="sparkles" className="h-9 w-9 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
