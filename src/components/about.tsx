"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { profile } from "@/data/profile";
import { Reveal, Section, SectionHeading } from "./ui";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1800, bounce: 0 });

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.round(v).toString() + suffix;
    });
    return unsub;
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="01 · About" title="Engineer by craft, builder by nature." />
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          {profile.about.map((p, i) => (
            <Reveal key={i} delay={i}>
              <p className="text-base leading-relaxed text-muted sm:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {profile.stats.map((s, i) => (
            <Reveal key={s.label} delay={i}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass glow-border h-full rounded-2xl p-5"
              >
                <p className="text-3xl font-bold text-white sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
