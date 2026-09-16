"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { useContent } from "./content-provider";
import { Reveal, Section, SectionHeading } from "./ui";

export function Skills() {
  const { skillGroups } = useContent();
  const marquee = Array.from(
    new Set(skillGroups.flatMap((g) => g.skills.map((s) => s.icon)).filter((i) => i && i !== "ai")),
  );

  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="03 · Skills"
        title="A toolbox for the whole stack."
        description="Language-agnostic by principle: I pick the right tool for the product and go deep on it."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, gi) => (
          <Reveal key={g.title} delay={gi}>
            <div className="glass glow-border h-full rounded-2xl p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${g.accent}`} />
                <h3 className="font-semibold text-white">{g.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <motion.li
                    key={s.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 rounded-xl border border-border bg-white/[0.03] px-3 py-2 text-sm text-fg"
                  >
                    {!s.icon || s.icon === "ai" ? (
                      <Bot size={18} className="text-accent" />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={`https://skillicons.dev/icons?i=${s.icon}`} alt="" className="h-5 w-5" loading="lazy" />
                    )}
                    {s.name}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {marquee.length > 0 && (
        <Reveal className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max gap-6 animate-marquee">
            {[...marquee, ...marquee].map((i, idx) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={idx}
                src={`https://skillicons.dev/icons?i=${i}`}
                alt={i}
                className="h-12 w-12 opacity-70 transition hover:opacity-100"
                loading="lazy"
              />
            ))}
          </div>
        </Reveal>
      )}
    </Section>
  );
}
