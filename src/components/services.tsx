"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Server, Sparkles, Database, Palette, Shield, Cloud } from "lucide-react";
import { useContent } from "./content-provider";
import { Reveal, Section, SectionHeading } from "./ui";

const icons = { Globe, Smartphone, Server, Sparkles, Database, Palette, Shield, Cloud } as const;

export function Services() {
  const { services } = useContent();
  if (!services.length) return null;
  return (
    <Section id="services" className="!pt-0">
      <SectionHeading eyebrow="02 · What I do" title="From idea to production." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const Icon = icons[s.icon as keyof typeof icons] ?? Globe;
          return (
            <Reveal key={s.title} delay={i}>
              <motion.div whileHover={{ y: -6 }} className="glass glow-border group h-full rounded-2xl p-6">
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent transition group-hover:from-accent group-hover:to-accent-2 group-hover:text-bg">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
