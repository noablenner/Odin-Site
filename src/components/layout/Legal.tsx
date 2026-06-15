import { Container } from "@/components/ui/Container";

/**
 * Styled wrapper for long-form legal/utility content.
 */
export function LegalLayout({
  lastUpdated,
  children,
}: {
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <Container className="pb-24 pt-4">
      <div className="mx-auto max-w-3xl">
        <p className="mb-10 text-sm text-muted-foreground">
          Dernière mise à jour : {lastUpdated}
        </p>
        <div className="space-y-10">{children}</div>
      </div>
    </Container>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-foreground md:text-2xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
        {children}
      </div>
    </section>
  );
}
