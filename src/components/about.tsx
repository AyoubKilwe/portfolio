"use client";

import { useEffect, useRef } from "react";
import { useContent } from "./content-provider";
import { Reveal, Section, SectionHeading } from "./ui";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  // Server HTML shows the final number; JS only adds a short count-up when it scrolls into view.
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1200;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(eased * value) + suffix;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value, suffix]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export function About() {
  const { settings } = useContent();
  return (
    <Section id="about">
      <SectionHeading eyebrow="01 · About" title="Engineer by craft, builder by nature." />
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          {settings.about.map((p, i) => (
            <Reveal key={i} delay={i}>
              <p className="text-base leading-relaxed text-muted sm:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {settings.stats.map((s, i) => (
            <Reveal key={s.label} delay={i}>
              <div className="glass glow-border h-full rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1">
                <p className="text-3xl font-bold text-white sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix ?? ""} />
                </p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
