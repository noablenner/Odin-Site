"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { faq, company } from "@/content/site";
import { cn } from "@/lib/utils";

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-card/60 backdrop-blur-sm transition-colors",
        open ? "border-primary/40" : "border-border",
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
      >
        <span className="font-display text-base font-semibold text-foreground md:text-lg">
          {q}
        </span>
        <span
          className={cn(
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-transform duration-300",
            open && "rotate-45 border-primary/50 text-primary",
          )}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground md:px-6 md:pb-6">
              {a}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-surface/40">
      <SectionHeader
        eyebrow="FAQ"
        title="Les questions fréquentes"
        subtitle="Tout ce que vous devez savoir avant de créer votre agent. Une autre question ? Nous sommes là."
      />

      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {faq.map((item, i) => (
          <FaqItem
            key={item.q}
            q={item.q}
            a={item.a}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-card/60 p-6 text-center backdrop-blur-sm">
        <p className="text-sm text-muted-foreground">
          Vous avez encore besoin d&apos;aide ?
        </p>
        <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/support" size="md">
            Contacter le support
          </Button>
          <Button href={`mailto:${company.supportEmail}`} variant="secondary" size="md">
            {company.supportEmail}
          </Button>
        </div>
      </div>
    </Section>
  );
}
