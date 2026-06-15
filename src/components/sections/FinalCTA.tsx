import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { finalCta } from "@/content/site";

export function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 bg-card/60 px-6 py-16 text-center shadow-glow-lg backdrop-blur-md md:px-12 md:py-20">
            {/* glow background */}
            <div className="spotlight pointer-events-none absolute inset-0" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {finalCta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {finalCta.subtitle}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={finalCta.primaryCta.href} size="lg">
                  {finalCta.primaryCta.label}
                  <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <Button href={finalCta.secondaryCta.href} variant="secondary" size="lg">
                  {finalCta.secondaryCta.label}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
