"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { Github, Linkedin } from "./icons";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const roles = ["Software Engineer", "Full-Stack Developer", "Mobile Developer", "AI Integrator"];

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, index]);

  return (
    <span className="font-mono text-accent">
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section id="top" className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl items-center px-5 pt-28 pb-16 sm:px-8">
      <div className="grid w-full items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1.5 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new projects
            <span className="mx-1 text-border">·</span>
            <MapPin size={12} /> {profile.location}
          </motion.div>

          <motion.h1 variants={item} className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            Hi, I&apos;m <span className="text-gradient">{profile.shortName}</span>.
          </motion.h1>

          <motion.p variants={item} className="mt-4 text-2xl font-semibold text-white/90 sm:text-3xl">
            <Typewriter />
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline} From pixel-perfect interfaces to secure APIs and LLM-powered assistants, I ship
            products end to end.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-bg transition hover:bg-accent"
            >
              View my work
              <ArrowDown size={16} className="transition group-hover:translate-y-0.5" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-accent/50 hover:bg-white/[0.06]"
            >
              <Download size={16} /> Download CV
            </a>
            <div className="ml-1 flex items-center gap-1">
              {[
                { href: profile.socials.github, Icon: Github, label: "GitHub" },
                { href: profile.socials.linkedin, Icon: Linkedin, label: "LinkedIn" },
                { href: profile.socials.email, Icon: Mail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-xl border border-transparent p-3 text-muted transition hover:border-border hover:bg-white/[0.04] hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent via-accent-2 to-accent-3 opacity-40 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-[2rem] p-3">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-accent/20 via-transparent to-accent-3/20" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.avatar}
              alt={profile.name}
              width={480}
              height={480}
              className="relative aspect-square w-full rounded-[1.6rem] object-cover"
            />
            <div className="glass absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-white">{profile.name}</p>
                <p className="font-mono text-[11px] text-muted">@{profile.handle}</p>
              </div>
              <div className="flex -space-x-2">
                {["js", "ts", "react", "nodejs"].map((i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={`https://skillicons.dev/icons?i=${i}`}
                    alt={i}
                    className="h-7 w-7 rounded-full border-2 border-bg-soft"
                  />
                ))}
              </div>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-6 top-10 hidden rounded-2xl px-4 py-3 sm:block"
          >
            <p className="font-mono text-[11px] text-muted">Stack</p>
            <p className="text-sm font-semibold text-white">Web · Mobile · AI</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -right-6 bottom-24 hidden rounded-2xl px-4 py-3 sm:block"
          >
            <p className="font-mono text-[11px] text-muted">Open source</p>
            <p className="text-sm font-semibold text-white">50+ repos</p>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted transition hover:text-white md:block"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown size={20} />
        </motion.div>
      </a>
    </section>
  );
}
