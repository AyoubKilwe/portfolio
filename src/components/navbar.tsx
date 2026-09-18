"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Github, Linkedin } from "./icons";
import { useContent } from "./content-provider";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { settings: s } = useContent();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`fade-down flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled ? "glass glass-blur shadow-[0_8px_40px_-12px_rgba(56,189,248,0.25)]" : "bg-transparent"
        }`}
      >
        <a href="#top" className="group flex items-center gap-2 font-mono text-sm font-semibold text-white">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-2 text-bg font-bold">
            A
          </span>
          <span className="hidden sm:inline">
            {s.shortName}
            <span className="text-accent animate-blink">_</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={s.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2 text-muted transition hover:bg-white/5 hover:text-white"
          >
            <Github size={18} />
          </a>
          <a
            href={s.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-2 text-muted transition hover:bg-white/5 hover:text-white"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="#contact"
            className="ml-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-bg transition hover:bg-accent"
          >
            Hire me
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="rounded-lg p-2 text-white md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
          <div className="fade-down glass absolute top-20 left-4 right-4 rounded-2xl p-4 md:hidden">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base text-fg hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl bg-white px-4 py-3 text-center font-semibold text-bg"
                >
                  Hire me
                </a>
              </li>
            </ul>
          </div>
        )}
    </header>
  );
}
