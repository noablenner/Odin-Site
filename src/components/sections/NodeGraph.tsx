"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type Node = {
  id: string;
  label: string;
  sub: string;
  x: number;
  y: number;
};

// Positions on a 0..100 viewBox-like grid
const nodes: Node[] = [
  { id: "airtable", label: "Airtable", sub: "Bases", x: 8, y: 16 },
  { id: "gmail", label: "Gmail", sub: "E-mails", x: 6, y: 50 },
  { id: "drive", label: "Drive", sub: "Documents", x: 8, y: 84 },
  { id: "whatsapp", label: "WhatsApp", sub: "Canal", x: 92, y: 18 },
  { id: "sheets", label: "Sheets", sub: "Tableurs", x: 94, y: 52 },
  { id: "api", label: "API REST", sub: "Webhooks", x: 92, y: 84 },
];

const center = { x: 50, y: 50 };

export function NodeGraph() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* Connection lines */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(258 90% 66%)" stopOpacity="0.15" />
            <stop offset="50%" stopColor="hsl(281 84% 56%)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(300 88% 64%)" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        {nodes.map((n, i) => {
          const mx = (n.x + center.x) / 2;
          const d = `M ${n.x} ${n.y} C ${mx} ${n.y}, ${mx} ${center.y}, ${center.x} ${center.y}`;
          return (
            <g key={n.id}>
              <path d={d} stroke="hsl(var(--border))" strokeWidth={0.4} />
              <motion.path
                d={d}
                stroke="url(#edge)"
                strokeWidth={0.6}
                strokeDasharray="4 10"
                initial={{ strokeDashoffset: 0 }}
                animate={reduce ? {} : { strokeDashoffset: -28 }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.25,
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Side nodes */}
      {nodes.map((n, i) => (
        <motion.div
          key={n.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
        >
          <div className="flex items-center gap-2 rounded-xl border border-border bg-card/90 px-3 py-2 shadow-card backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
            <span className="whitespace-nowrap">
              <span className="block text-xs font-semibold text-foreground">
                {n.label}
              </span>
              <span className="block text-[0.65rem] text-muted-foreground">
                {n.sub}
              </span>
            </span>
          </div>
        </motion.div>
      ))}

      {/* Center agent */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Rotating glow ring */}
          <div className="absolute inset-0 -m-6 rounded-full bg-brand-radial blur-2xl" />
          <motion.div
            className="absolute inset-0 -m-3 rounded-full border border-primary/30"
            animate={reduce ? {} : { rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            style={{ borderStyle: "dashed" }}
          />
          <div className="relative flex h-28 w-28 flex-col items-center justify-center rounded-full border border-primary/40 bg-card/95 shadow-glow-lg backdrop-blur-md">
            <Image
              src="/odin-mark-light.png"
              alt="Odin"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground">
              Odin
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
