"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { NodeGraph } from "./NodeGraph";
import { hero, trustBadges } from "@/content/site";

const easing = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      {/* Background spotlight + grid */}
      <div className="spotlight pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint [background-size:48px_48px] [mask-image:radial-gradient(70%_50%_at_50%_0%,black,transparent)] opacity-[0.35]" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easing }}
            className="section-eyebrow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: easing }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            {hero.title[0]}
            <br />
            {hero.title[1]} <span className="text-gradient">{hero.titleHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: easing }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: easing }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground"
          >
            {trustBadges.map((b) => (
              <li key={b} className="inline-flex items-center gap-1.5">
                <Icon name="check" className="h-3.5 w-3.5 text-primary" />
                {b}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: easing }}
          className="mt-16 grid items-center gap-8 lg:mt-20 lg:grid-cols-2"
        >
          <ChatDemo reduce={!!reduce} />
          <div className="order-first lg:order-last">
            <NodeGraph />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function ChatDemo({ reduce }: { reduce: boolean }) {
  return (
    <div className="relative">
      <div className="absolute -inset-px -z-10 rounded-3xl bg-brand-gradient opacity-20 blur-xl" />
      <div className="rounded-3xl border border-border bg-card/80 p-2 shadow-card backdrop-blur-md">
        {/* window chrome */}
        <div className="flex items-center gap-2 px-3 py-2">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-green-400/70" />
          <span className="ml-3 text-xs text-muted-foreground">Odin · agent en ligne</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="h-2 w-2 animate-pulse-glow rounded-full bg-green-400" />
            actif
          </span>
        </div>

        <div className="space-y-4 rounded-2xl bg-background/60 p-5">
          {/* user message */}
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-brand-gradient px-4 py-3 text-sm text-primary-foreground shadow-button"
          >
            {hero.chatPrompt}
          </motion.div>

          {/* agent reply */}
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex max-w-[90%] gap-3"
          >
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-card">
              <span className="h-2 w-2 rounded-full bg-primary" />
            </span>
            <div className="rounded-2xl rounded-bl-md border border-border bg-card px-4 py-3 text-sm leading-relaxed text-foreground">
              {hero.chatReply}
            </div>
          </motion.div>

          {/* action chips */}
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap gap-2 pl-10"
          >
            {["Gmail ✓", "Airtable ✓", "Agenda ✓"].map((c) => (
              <span
                key={c}
                className="rounded-full border border-border bg-muted/60 px-2.5 py-1 text-xs text-muted-foreground"
              >
                {c}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
