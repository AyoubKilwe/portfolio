"use client";

import { Mail } from "lucide-react";
import { Github, Linkedin } from "./icons";
import { useContent } from "./content-provider";

export function Footer() {
  const { settings: s } = useContent();
  const links = [
    { href: s.github, Icon: Github, label: "GitHub" },
    { href: s.linkedin, Icon: Linkedin, label: "LinkedIn" },
    { href: `mailto:${s.email}`, Icon: Mail, label: "Email" },
  ].filter((l) => l.href);

  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {s.name}. Built with Next.js, Tailwind & Sanity.
        </p>
        <div className="flex items-center gap-1">
          {links.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="rounded-lg p-2 text-muted transition hover:bg-white/5 hover:text-white"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
