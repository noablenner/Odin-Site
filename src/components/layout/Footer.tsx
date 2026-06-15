import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { nav, company } from "@/content/site";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/60">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {company.product} — l&apos;agent IA personnalisé de votre entreprise.
              Configurez, connectez vos outils, répondez sur tous vos canaux.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href={`mailto:${company.supportEmail}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon name="mail" className="h-4 w-4" />
                {company.supportEmail}
              </a>
            </div>
            <div className="mt-6">
              <Button href={company.appUrl} size="sm">
                Accéder à l&apos;application
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <FooterColumn title="Produit" links={nav.footer.produit} />
          <FooterColumn title="Entreprise" links={nav.footer.entreprise} />
          <FooterColumn title="Légal" links={nav.footer.legal} />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.legalEntity.startsWith("TODO") ? "Odin / OdinFlow" : company.legalEntity}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Confidentialité
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Conditions
            </Link>
            <Link href="/support" className="transition-colors hover:text-foreground">
              Support
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
