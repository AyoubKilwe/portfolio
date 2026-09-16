"use client";

import { useContent } from "./content-provider";
import { Reveal, Section, SectionHeading } from "./ui";

export function Journey() {
  const { journey } = useContent();
  if (!journey.length) return null;
  return (
    <Section id="journey">
      <SectionHeading eyebrow="05 · Journey" title="How I got here." />
      <div className="relative ml-3 border-l border-border pl-8 sm:ml-6 sm:pl-12">
        {journey.map((m, i) => (
          <Reveal key={`${m.period}-${m.title}`} delay={i} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[41px] top-1.5 grid h-5 w-5 place-items-center rounded-full border border-accent/60 bg-bg sm:-left-[57px]">
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>
            <div className="glass glow-border rounded-2xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">{m.title}</h3>
                <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent">{m.period}</span>
              </div>
              {m.org && <p className="mt-1 text-sm text-muted">{m.org}</p>}
              <ul className="mt-4 space-y-2">
                {(m.points ?? []).map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-fg/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
