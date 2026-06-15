import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { LegalLayout, LegalSection } from "@/components/layout/Legal";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  description:
    "Conditions générales d'utilisation du service Odin (OdinFlow) : compte, abonnement, usage acceptable, propriété, responsabilité, résiliation.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Légal"
        title="Conditions d'utilisation"
        subtitle="Les règles qui encadrent l'utilisation du service Odin. En créant un compte, vous les acceptez."
      />

      <LegalLayout lastUpdated="15 juin 2026">
        <LegalSection title="1. Objet & acceptation">
          <p>
            Les présentes conditions régissent l&apos;accès et l&apos;utilisation
            du service Odin, édité par {company.legalEntity}, accessible via{" "}
            {company.domain} et l&apos;application Odin. En créant un compte ou en
            utilisant le service, vous acceptez ces conditions.
          </p>
        </LegalSection>

        <LegalSection title="2. Description du service">
          <p>
            Odin est un agent IA personnalisable que vous configurez pour votre
            entreprise. Le service vous permet de paramétrer un agent, de lui
            fournir une base de connaissances, de connecter des outils tiers via
            OAuth, et de déployer l&apos;agent sur plusieurs canaux (chat web,
            WhatsApp, Telegram). Le service peut évoluer ; certaines
            fonctionnalités ou connecteurs peuvent être ajoutés, modifiés ou
            retirés.
          </p>
        </LegalSection>

        <LegalSection title="3. Compte">
          <p>
            Vous êtes responsable de l&apos;exactitude des informations fournies,
            de la confidentialité de vos identifiants et de toute activité
            réalisée depuis votre compte. Vous devez disposer de la capacité
            juridique pour contracter et, le cas échéant, du pouvoir d&apos;engager
            votre entreprise.
          </p>
        </LegalSection>

        <LegalSection title="4. Abonnement & paiement">
          <p>
            Odin propose une offre gratuite et des offres payantes (par paliers,
            par exemple Free, Pro, Business). Les fonctionnalités et tarifs sont
            décrits sur la page{" "}
            <Link href="/pricing" className="text-primary underline-offset-4 hover:underline">
              Tarifs
            </Link>
            . Les abonnements payants sont facturés selon la périodicité choisie.
            Sauf disposition contraire, ils se renouvellent automatiquement et
            sont résiliables à tout moment ; la résiliation prend effet à la fin
            de la période en cours. Les montants versés ne sont pas remboursables,
            sauf disposition légale impérative.
          </p>
        </LegalSection>

        <LegalSection title="5. Usage acceptable">
          <p>Vous vous engagez à ne pas utiliser le service pour :</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>enfreindre la loi ou les droits de tiers ;</li>
            <li>
              diffuser des contenus illégaux, haineux, trompeurs ou portant
              atteinte à la vie privée ;
            </li>
            <li>
              tenter de contourner la sécurité, surcharger ou perturber le
              service ;
            </li>
            <li>
              connecter des comptes ou des données pour lesquels vous n&apos;avez
              pas les autorisations nécessaires.
            </li>
          </ul>
          <p>
            Vous êtes responsable des contenus que vous importez et des actions
            que votre agent exécute via les outils que vous connectez.
          </p>
        </LegalSection>

        <LegalSection title="6. Propriété intellectuelle">
          <p>
            Le service, sa marque, son logo et ses composants restent la
            propriété de {company.legalEntity}. Vous conservez l&apos;ensemble
            des droits sur les contenus et données que vous importez. Vous nous
            accordez uniquement les droits nécessaires pour héberger et traiter
            ces contenus afin de fournir le service.
          </p>
        </LegalSection>

        <LegalSection title="7. Services tiers">
          <p>
            Lorsque vous connectez des outils tiers (Airtable, Google, Microsoft,
            etc.), leur utilisation est également soumise aux conditions et
            politiques de ces fournisseurs. Nous ne sommes pas responsables de la
            disponibilité ou des modifications de ces services tiers.
          </p>
        </LegalSection>

        <LegalSection title="8. Responsabilité">
          <p>
            Le service est fourni « en l&apos;état ». L&apos;agent IA peut
            produire des réponses inexactes ou incomplètes ; il vous appartient
            de vérifier les informations et les actions sensibles. Dans les
            limites autorisées par la loi, notre responsabilité est limitée aux
            montants que vous avez versés au titre du service au cours des douze
            derniers mois, et nous ne saurions être tenus responsables des
            dommages indirects.
          </p>
        </LegalSection>

        <LegalSection title="9. Résiliation">
          <p>
            Vous pouvez résilier votre compte à tout moment depuis vos
            paramètres. Nous pouvons suspendre ou clôturer un compte en cas de
            manquement aux présentes conditions. À la résiliation, votre accès
            cesse et vos données sont traitées conformément à notre{" "}
            <Link href="/privacy" className="text-primary underline-offset-4 hover:underline">
              politique de confidentialité
            </Link>
            .
          </p>
        </LegalSection>

        <LegalSection title="10. Droit applicable & litiges">
          <p>
            Les présentes conditions sont régies par le droit français. En cas de
            litige, et à défaut de résolution amiable, les tribunaux compétents
            seront ceux du ressort du siège social de l&apos;éditeur, sous réserve
            des règles impératives applicables aux consommateurs.
          </p>
        </LegalSection>

        <LegalSection title="11. Contact">
          <p>
            Pour toute question relative à ces conditions, contactez-nous à{" "}
            <a
              href={`mailto:${company.contactEmail}`}
              className="text-primary underline-offset-4 hover:underline"
            >
              {company.contactEmail}
            </a>{" "}
            ou via la page{" "}
            <Link href="/support" className="text-primary underline-offset-4 hover:underline">
              Support
            </Link>
            .
          </p>
        </LegalSection>
      </LegalLayout>
    </>
  );
}
