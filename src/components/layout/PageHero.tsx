import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-8 pt-32 md:pb-12 md:pt-40">
      <div className="spotlight pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? <span className="section-eyebrow mb-5">{eyebrow}</span> : null}
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
