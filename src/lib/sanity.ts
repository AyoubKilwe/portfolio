import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { profile, projects as localProjects, skillGroups as localSkillGroups, journey as localJourney, services as localServices } from "@/data/profile";

export const sanityConfig = {
  projectId: "2zdu6zb1",
  dataset: "production",
  apiVersion: "2025-01-01",
};

export const client = createClient({ ...sanityConfig, useCdn: true, perspective: "published" });

const builder = imageUrlBuilder(client);
export const urlFor = (source: SanityImageSource) => builder.image(source).auto("format");

/* ---------- Types ---------- */
export type Settings = {
  name: string;
  shortName: string;
  title: string;
  roles: string[];
  tagline: string;
  location: string;
  available: boolean;
  photoUrl: string;
  about: string[];
  stats: { label: string; value: number; suffix: string }[];
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  resumeUrl: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  emoji: string;
  highlights: string[];
  stack: string[];
  github?: string;
  live?: string;
  featured: boolean;
  gradient: string;
};

export type SkillGroup = { title: string; accent: string; skills: { name: string; icon: string }[] };
export type Service = { title: string; description: string; icon: string };
export type Milestone = { period: string; title: string; org: string; points: string[] };

export type Content = {
  settings: Settings;
  projects: Project[];
  skillGroups: SkillGroup[];
  services: Service[];
  journey: Milestone[];
  source: "sanity" | "local";
};

/* ---------- Queries ---------- */
const query = /* groq */ `{
  "settings": *[_type == "siteSettings"][0]{
    name, shortName, title, roles, tagline, location, available,
    "photoUrl": photo.asset->url,
    about, stats, email, github, linkedin, twitter,
    "resumeUrl": resume.asset->url
  },
  "projects": *[_type == "project"] | order(order asc, _createdAt asc){
    "slug": slug.current, title, tagline, description,
    "imageUrl": image.asset->url, "imageAlt": image.alt,
    emoji, highlights, stack, github, live, featured
  },
  "skillGroups": *[_type == "skillGroup"] | order(order asc){ title, accent, skills },
  "services": *[_type == "service"] | order(order asc){ title, description, icon },
  "journey": *[_type == "milestone"] | order(order asc){ period, title, org, points }
}`;

const gradients = [
  "from-orange-500/30 via-rose-500/20 to-purple-600/30",
  "from-emerald-500/30 via-teal-500/20 to-sky-600/30",
  "from-violet-500/30 via-indigo-500/20 to-blue-600/30",
  "from-pink-500/30 via-rose-500/20 to-orange-600/30",
  "from-sky-500/30 via-cyan-500/20 to-teal-600/30",
  "from-amber-500/30 via-yellow-500/20 to-lime-600/30",
];

/* ---------- Local fallback (used until Sanity has content) ---------- */
export const localContent: Content = {
  settings: {
    name: profile.name,
    shortName: profile.shortName,
    title: profile.title,
    roles: ["Software Engineer", "Full-Stack Developer", "Mobile Developer", "AI Integrator"],
    tagline: profile.tagline,
    location: profile.location,
    available: true,
    photoUrl: profile.avatar,
    about: profile.about,
    stats: profile.stats,
    email: profile.email,
    github: profile.socials.github,
    linkedin: profile.socials.linkedin,
    resumeUrl: profile.resumeUrl,
  },
  projects: localProjects.map((p) => ({ ...p })),
  skillGroups: localSkillGroups,
  services: localServices,
  journey: localJourney,
  source: "local",
};

/* ---------- Fetch (build time + runtime) ---------- */
export async function fetchContent(): Promise<Content> {
  try {
    const data = await client.fetch(query);
    if (!data?.settings && !(data?.projects?.length)) return localContent;
    const s = data.settings ?? {};
    return {
      settings: {
        ...localContent.settings,
        ...Object.fromEntries(Object.entries(s).filter(([, v]) => v !== null && v !== undefined && v !== "")),
        roles: s.roles?.length ? s.roles : localContent.settings.roles,
        about: s.about?.length ? s.about : localContent.settings.about,
        stats: s.stats?.length ? s.stats : localContent.settings.stats,
      },
      projects: data.projects?.length
        ? data.projects.map((p: Omit<Project, "gradient">, i: number) => ({
            ...p,
            emoji: p.emoji || "🚀",
            highlights: p.highlights ?? [],
            stack: p.stack ?? [],
            gradient: gradients[i % gradients.length],
          }))
        : localContent.projects,
      skillGroups: data.skillGroups?.length ? data.skillGroups : localContent.skillGroups,
      services: data.services?.length ? data.services : localContent.services,
      journey: data.journey?.length ? data.journey : localContent.journey,
      source: "sanity",
    };
  } catch {
    return localContent;
  }
}
