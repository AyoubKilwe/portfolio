import { profile, projects as localProjects, skillGroups as localSkillGroups, journey as localJourney, services as localServices } from "@/data/profile";

export const sanityConfig = {
  projectId: "2zdu6zb1",
  dataset: "production",
  apiVersion: "2025-01-01",
};

/** Query Sanity's CDN with plain fetch: no client library in the browser bundle. */
async function sanityQuery<T>(groq: string): Promise<T> {
  // Build (server) reads the uncached API so prerendered HTML is never stale; the browser uses the CDN.
  const host = typeof window === "undefined" ? "api" : "apicdn";
  const url =
    `https://${sanityConfig.projectId}.${host}.sanity.io/v${sanityConfig.apiVersion}` +
    `/data/query/${sanityConfig.dataset}?perspective=published&query=${encodeURIComponent(groq)}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Sanity ${res.status}`);
  return (await res.json()).result as T;
}

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
  playStore?: string;
  featured: boolean;
  gradient: string;
};

export type SkillGroup = { title: string; accent: string; skills: { name: string; icon: string }[] };
export type Service = { title: string; description: string; icon: string };
export type Milestone = { period: string; title: string; org: string; points: string[] };
export type Certificate = {
  title: string;
  issuer: string;
  platform?: string;
  date?: string;
  description?: string;
  imageUrl?: string;
  pdfUrl?: string;
  verifyUrl?: string;
  skills: string[];
  featured: boolean;
};

export type Content = {
  settings: Settings;
  projects: Project[];
  skillGroups: SkillGroup[];
  services: Service[];
  journey: Milestone[];
  certificates: Certificate[];
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
    emoji, highlights, stack, github, live, playStore, featured
  },
  "skillGroups": *[_type == "skillGroup"] | order(order asc){ title, accent, skills },
  "services": *[_type == "service"] | order(order asc){ title, description, icon },
  "journey": *[_type == "milestone"] | order(order asc){ period, title, org, points },
  "certificates": *[_type == "certificate"] | order(order asc){
    title, issuer, platform, date, description, verifyUrl, skills, featured,
    "imageUrl": image.asset->url, "pdfUrl": pdf.asset->url
  }
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
    roles: ["Software Engineer", "Full-Stack Developer", "Mobile App Developer"],
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
  certificates: [],
  source: "local",
};

/* ---------- Fetch (build time + runtime) ---------- */
export async function fetchContent(): Promise<Content> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = await sanityQuery<any>(query);
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
      certificates: (data.certificates ?? []).map((c: Certificate) => ({ ...c, skills: c.skills ?? [], featured: !!c.featured })),
      source: "sanity",
    };
  } catch {
    return localContent;
  }
}
