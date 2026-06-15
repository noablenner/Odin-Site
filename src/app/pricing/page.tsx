import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pricing } from "@/content/site";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Découvrez les offres Odin : Free pour démarrer, Pro pour automatiser au quotidien, Business pour les besoins avancés. Sans engagement.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow={pricing.eyebrow}
        title={pricing.title}
        subtitle={pricing.subtitle}
      />
      <Pricing withHeader={false} />
      <FAQ />
      <FinalCTA />
    </>
  );
}
