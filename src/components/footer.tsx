import { Mail } from "lucide-react";
import { Github, Linkedin } from "./icons";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-1">
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
