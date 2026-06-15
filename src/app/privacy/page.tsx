import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { LegalLayout, LegalSection } from "@/components/layout/Legal";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment Odin (OdinFlow) collecte, utilise et protège vos données personnelles et les données des outils que vous connectez. Conforme RGPD.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Légal"
        title="Politique de confidentialité"
        subtitle="Nous expliquons clairement quelles données nous traitons, pourquoi, et comment vous gardez le contrôle."
      />

      <LegalLayout lastUpdated="15 juin 2026">
        <LegalSection title="1. Éditeur & responsable du traitement">
          <p>
            Le service Odin (ci-après « Odin », « le service ») est édité par{" "}
            <strong>{company.legalEntity}</strong>
            {" "}({company.legalForm}), {company.capital}, immatriculée sous le
            numéro {company.siren}, dont le siège social est situé{" "}
            {company.address}.
          </p>
          <p>
            Directeur de la publication : {company.publisher}. Le site est
            accessible à l&apos;adresse {company.domain}. Pour toute question
            relative à vos données, contactez-nous à{" "}
            <a
              href={`mailto:${company.contactEmail}`}
              className="text-primary underline-offset-4 hover:underline"
            >
              {company.contactEmail}
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="2. Données que nous collectons">
          <p>Nous traitons trois grandes catégories de données :</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Données de compte</strong> : nom, adresse e-mail,
              informations d&apos;entreprise, identifiants de connexion et
              paramètres de votre agent (nom, personnalité, instructions).
            </li>
            <li>
              <strong>Contenu que vous importez</strong> : documents et fichiers
              ajoutés à la base de connaissances de votre agent, ainsi que les
              conversations échangées avec l&apos;agent.
            </li>
            <li>
              <strong>Données des outils que vous connectez</strong> : lorsque
              vous reliez un service tiers via OAuth (Airtable, Google Drive,
              Gmail, Google Sheets, Outlook/Excel, etc.), Odin accède aux données
              nécessaires à l&apos;exécution des actions que vous demandez, dans
              la limite des autorisations que vous accordez.
            </li>
            <li>
              <strong>Données techniques</strong> : journaux de connexion,
              adresse IP, type d&apos;appareil et de navigateur, à des fins de
              sécurité et de bon fonctionnement.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="3. Finalités & bases légales (RGPD)">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Fourniture du service</strong> (configuration de
              l&apos;agent, accès à vos outils, réponses multi-canal) —{" "}
              <em>exécution du contrat</em>.
            </li>
            <li>
              <strong>Sélection automatique du modèle d&apos;IA</strong> et
              traitement des requêtes — <em>exécution du contrat</em>.
            </li>
            <li>
              <strong>Sécurité, prévention de la fraude et amélioration</strong>{" "}
              du service — <em>intérêt légitime</em>.
            </li>
            <li>
              <strong>Communications & facturation</strong> —{" "}
              <em>exécution du contrat</em> et <em>obligation légale</em>.
            </li>
            <li>
              <strong>Communications marketing</strong> (le cas échéant) —{" "}
              <em>consentement</em>, révocable à tout moment.
            </li>
          </ul>
          <p>
            <strong>
              Les données issues des comptes que vous connectez sont utilisées
              uniquement pour fournir le service que vous demandez.
            </strong>{" "}
            Elles ne sont jamais revendues, ni partagées à des fins
            publicitaires, ni utilisées pour entraîner des modèles à
            destination de tiers.
          </p>
        </LegalSection>

        <LegalSection title="4. Sous-traitants & services tiers">
          <p>
            Pour fournir le service, nous faisons appel à des prestataires
            techniques agissant en tant que sous-traitants, encadrés par des
            accords de traitement des données :
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>OpenAI</strong> (et autres fournisseurs de modèles d&apos;IA)
              — traitement des requêtes envoyées à l&apos;agent.
            </li>
            <li>
              <strong>Supabase</strong> — base de données et authentification.
            </li>
            <li>
              <strong>Render</strong> — hébergement de l&apos;application Odin.
            </li>
            <li>
              <strong>Vercel</strong> — hébergement du site {company.domain}.
            </li>
            <li>
              <strong>Airtable, Google, Microsoft</strong> — uniquement lorsque
              vous connectez ces services via OAuth, pour accéder à vos données
              à votre demande.
            </li>
          </ul>
          <p>
            Certains prestataires peuvent traiter des données hors de
            l&apos;Union européenne ; dans ce cas, des garanties appropriées
            (clauses contractuelles types) sont mises en place.
          </p>
        </LegalSection>

        <LegalSection title="5. Durée de conservation">
          <p>
            Nous conservons vos données de compte et votre contenu tant que votre
            compte est actif. Après suppression de votre compte, les données sont
            effacées ou anonymisées dans un délai raisonnable, sauf obligation
            légale de conservation (par exemple, données de facturation). Les
            connexions OAuth et les jetons d&apos;accès sont supprimés dès que
            vous révoquez l&apos;accès ou supprimez le connecteur.
          </p>
        </LegalSection>

        <LegalSection title="6. Vos droits">
          <p>
            Conformément au RGPD, vous disposez des droits d&apos;accès, de
            rectification, d&apos;effacement, de limitation, d&apos;opposition et
            de portabilité de vos données, ainsi que du droit de retirer votre
            consentement. Pour exercer ces droits, écrivez-nous à{" "}
            <a
              href={`mailto:${company.contactEmail}`}
              className="text-primary underline-offset-4 hover:underline"
            >
              {company.contactEmail}
            </a>
            . Vous pouvez également introduire une réclamation auprès de la CNIL
            (www.cnil.fr).
          </p>
        </LegalSection>

        <LegalSection title="7. Révoquer un accès OAuth & supprimer vos données">
          <p>
            <strong>Révoquer un accès à un outil connecté :</strong>
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Depuis Odin : ouvrez les paramètres de votre compte, section «
              Intégrations / Connecteurs », puis déconnectez le service concerné.
            </li>
            <li>
              Depuis le fournisseur : vous pouvez aussi révoquer l&apos;accès
              directement (par exemple via la page « Applications tierces » de
              votre compte Google, Microsoft ou Airtable).
            </li>
          </ul>
          <p>
            <strong>Supprimer vos données :</strong> vous pouvez supprimer votre
            base de connaissances, vos conversations ou l&apos;intégralité de
            votre compte depuis les paramètres. La suppression du compte entraîne
            l&apos;effacement de vos données associées (sous réserve des
            obligations légales). Pour une demande assistée, contactez{" "}
            <a
              href={`mailto:${company.contactEmail}`}
              className="text-primary underline-offset-4 hover:underline"
            >
              {company.contactEmail}
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="8. Sécurité">
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles
            appropriées : chiffrement des données en transit, contrôle des accès,
            stockage sécurisé des jetons OAuth. Aucune méthode de transmission ou
            de stockage n&apos;étant totalement infaillible, nous ne pouvons
            garantir une sécurité absolue, mais nous nous engageons à protéger
            vos données.
          </p>
        </LegalSection>

        <LegalSection title="9. Modifications">
          <p>
            Nous pouvons mettre à jour cette politique. En cas de modification
            substantielle, nous vous en informerons. La date de dernière mise à
            jour figure en haut de cette page.
          </p>
        </LegalSection>

        <LegalSection title="10. Contact">
          <p>
            Questions sur cette politique ou sur vos données ? Écrivez-nous à{" "}
            <a
              href={`mailto:${company.contactEmail}`}
              className="text-primary underline-offset-4 hover:underline"
            >
              {company.contactEmail}
            </a>{" "}
            ou consultez notre page{" "}
            <Link href="/support" className="text-primary underline-offset-4 hover:underline">
              Support
            </Link>
            . Voir aussi nos{" "}
            <Link href="/terms" className="text-primary underline-offset-4 hover:underline">
              Conditions d&apos;utilisation
            </Link>
            .
          </p>
        </LegalSection>
      </LegalLayout>
    </>
  );
}
