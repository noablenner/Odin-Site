import { Container } from "@/components/ui/Container";
import { stats } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

export function TrustBar() {
  return (
    <section className="relative border-y border-border bg-surface/40 py-10">
      <Container>
        <Reveal>
          <p className="text-center text-sm text-muted-foreground">
            Conçu pour les entreprises qui veulent une IA qui connaît{" "}
            <span className="text-foreground">vraiment</span> leur activité
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <div className="font-display text-3xl font-bold text-gradient md:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs leading-snug text-muted-foreground md:text-sm">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
