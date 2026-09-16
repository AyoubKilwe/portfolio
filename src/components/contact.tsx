"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Mail, Send } from "lucide-react";
import { Github, Linkedin } from "./icons";
import { useContent } from "./content-provider";
import { Reveal, Section, SectionHeading } from "./ui";

export function Contact() {
  const { settings: s } = useContent();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(s.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  // Static site: the form opens the visitor's mail client with a pre-filled message.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${s.email}?subject=${subject}&body=${body}`;
  };

  const links = [
    { href: s.github, Icon: Github, label: "GitHub", handle: s.github?.replace(/^https?:\/\/(www\.)?/, "") },
    { href: s.linkedin, Icon: Linkedin, label: "LinkedIn", handle: s.name },
    { href: `mailto:${s.email}`, Icon: Mail, label: "Email", handle: s.email },
  ].filter((l) => l.href && l.href !== "mailto:undefined");

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="06 · Contact"
        title="Let's build something great."
        description="Have a product idea, a role to fill or a project that needs an engineer? My inbox is open."
      />

      <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="glass glow-border flex h-full flex-col justify-between rounded-3xl p-7">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent">Email</p>
              <button
                onClick={copyEmail}
                className="mt-2 flex items-center gap-2 text-left text-lg font-semibold text-white transition hover:text-accent"
              >
                {s.email}
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} className="text-muted" />}
              </button>
              <p className="mt-1 text-xs text-muted">{copied ? "Copied to clipboard" : "Click to copy"}</p>
            </div>

            <div className="mt-8 space-y-3">
              {links.map(({ href, Icon, label, handle }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-border bg-white/[0.02] p-4 transition hover:border-accent/50 hover:bg-white/[0.05]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-white">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">{label}</span>
                    <span className="block text-xs text-muted">{handle}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <form onSubmit={onSubmit} className="glass glow-border rounded-3xl p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-muted">Your name</span>
                <input
                  name="name"
                  required
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-border bg-bg/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-muted/60 focus:border-accent"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-muted">Your email</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className="w-full rounded-xl border border-border bg-bg/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-muted/60 focus:border-accent"
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs font-medium text-muted">Message</span>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-border bg-bg/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-muted/60 focus:border-accent"
              />
            </label>
            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-bg transition hover:bg-accent sm:w-auto"
            >
              Send message <Send size={16} />
            </motion.button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
