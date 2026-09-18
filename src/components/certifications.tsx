"use client";

import { Award, BadgeCheck, ExternalLink, FileText } from "lucide-react";
import { useContent } from "./content-provider";
import { Pill, Reveal, Section, SectionHeading } from "./ui";

function formatDate(d?: string) {
  if (!d) return "";
  const dt = new Date(d);
  return isNaN(dt.getTime()) ? d : dt.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function Certifications() {
  const { certificates } = useContent();
  if (!certificates.length) return null;
  const featured = certificates.filter((c) => c.featured);
  const rest = certificates.filter((c) => !c.featured);

  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="05 · Certifications"
        title="Verified credentials."
        description="Industry-recognized programs, independently verifiable on Coursera."
      />

      <div className="space-y-6">
        {featured.map((c, i) => (
          <Reveal key={c.title} delay={i}>
            <article
              className="transition-transform duration-300 hover:-translate-y-1 glass glow-border group grid overflow-hidden rounded-3xl md:grid-cols-[1.15fr_1fr]"
            >
              <a
                href={c.verifyUrl || c.pdfUrl || "#"}
                target="_blank"
                rel="noreferrer"
                className="relative block min-h-[220px] overflow-hidden bg-white"
              >
                {c.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`${c.imageUrl}?w=1000&auto=format&q=75`}
                    alt={`${c.title} certificate`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                ) : (
                  <div className="grid h-full place-items-center bg-gradient-to-br from-accent/30 to-accent-2/30">
                    <Award size={72} className="text-white" />
                  </div>
                )}
                <div className="absolute left-5 top-5 flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-3 py-1 font-mono text-[11px] font-semibold text-white backdrop-blur">
                  <BadgeCheck size={13} /> Verified
                </div>
              </a>

              <div className="flex flex-col p-6 sm:p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  {c.issuer}
                  {c.platform ? ` · ${c.platform}` : ""}
                  {c.date ? ` · ${formatDate(c.date)}` : ""}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white">{c.title}</h3>
                {c.description && <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{c.description}</p>}
                {c.skills.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.skills.map((s) => (
                      <Pill key={s}>{s}</Pill>
                    ))}
                  </div>
                )}
                <div className="mt-6 flex flex-wrap gap-3">
                  {c.verifyUrl && (
                    <a
                      href={c.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-bg transition hover:bg-accent"
                    >
                      Verify on Coursera <ExternalLink size={15} />
                    </a>
                  )}
                  {c.pdfUrl && (
                    <a
                      href={c.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-white transition hover:border-accent/50 hover:bg-white/[0.04]"
                    >
                      <FileText size={15} /> PDF
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {rest.length > 0 && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((c, i) => (
            <Reveal key={c.title} delay={i}>
              <a
                href={c.verifyUrl || c.pdfUrl || "#"}
                target="_blank"
                rel="noreferrer"
                className="transition-transform duration-300 hover:-translate-y-1.5 glass glow-border group flex h-full flex-col overflow-hidden rounded-2xl"
              >
                {c.imageUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`${c.imageUrl}?w=640&auto=format&q=75`}
                    alt={`${c.title} certificate`}
                    className="aspect-[1.3] w-full bg-white object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-2 text-emerald-400">
                    <BadgeCheck size={16} />
                    <span className="font-mono text-[11px] uppercase tracking-widest">
                      {c.issuer}
                      {c.date ? ` · ${formatDate(c.date)}` : ""}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white">{c.title}</h3>
                  {c.description && <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{c.description}</p>}
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-muted transition group-hover:text-white">
                    Verify <ExternalLink size={12} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
