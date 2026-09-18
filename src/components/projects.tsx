"use client";

import { ArrowUpRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { Github } from "./icons";
import { useContent } from "./content-provider";
import { Pill, Reveal, Section, SectionHeading } from "./ui";

export function Projects() {
  const { projects, settings } = useContent();
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="04 · Projects"
        title="Things I've built."
        description="Real products for real users: multi-role platforms, e-commerce, mobile apps and AI assistants."
      />

      <div className="space-y-6">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i}>
            <article
              className="transition-transform duration-300 hover:-translate-y-1 glass glow-border group grid overflow-hidden rounded-3xl md:grid-cols-[1fr_1.1fr]"
            >
              <div className={`relative min-h-[240px] overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                {p.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`${p.imageUrl}?w=1000&auto=format&q=75`}
                    alt={p.imageAlt || p.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <>
                    <div className="bg-grid absolute inset-0 opacity-60" />
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="text-[96px] drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition duration-500 group-hover:scale-110 group-hover:-rotate-6">
                        {p.emoji}
                      </span>
                    </div>
                  </>
                )}
                <div className="absolute left-5 top-5 rounded-full bg-black/40 px-3 py-1 font-mono text-[11px] text-white backdrop-blur">
                  Featured
                </div>
              </div>

              <div className="flex flex-col p-6 sm:p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">{p.tagline}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{p.description}</p>
                {p.highlights.length > 0 && (
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-fg/90">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-bg transition hover:bg-accent"
                    >
                      Live demo <ExternalLink size={15} />
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-white transition hover:border-accent/50 hover:bg-white/[0.04]"
                    >
                      <Github size={15} /> Source
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {more.length > 0 && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((p, i) => (
            <Reveal key={p.slug} delay={i}>
              <a
                href={p.live || p.github || "#"}
                target="_blank"
                rel="noreferrer"
                className="transition-transform duration-300 hover:-translate-y-1.5 glass glow-border group flex h-full flex-col overflow-hidden rounded-2xl"
              >
                {p.imageUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`${p.imageUrl}?w=640&h=360&fit=crop&auto=format&q=75`}
                    alt={p.imageAlt || p.title}
                    className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-start justify-between">
                    {!p.imageUrl && (
                      <span className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${p.gradient} text-2xl`}>
                        {p.emoji}
                      </span>
                    )}
                    <ArrowUpRight size={18} className="ml-auto text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                  </div>
                  <h3 className="font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 4).map((s) => (
                      <Pill key={s}>{s}</Pill>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      )}

      {settings.github && (
        <Reveal className="mt-10 text-center">
          <a
            href={`${settings.github}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-white"
          >
            See all repositories on GitHub <ArrowUpRight size={16} />
          </a>
        </Reveal>
      )}
    </Section>
  );
}
