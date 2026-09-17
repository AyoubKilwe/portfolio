export const profile = {
  name: "Ayoub Jama Khalid",
  shortName: "Ayoub Kilwe",
  handle: "AyoubKilwe",
  title: "Software Engineer",
  tagline: "I design and build scalable web, mobile and AI-powered products.",
  location: "Hargeisa, Somaliland",
  email: "ayoubkilwe@gmail.com",
  avatar: "/avatar.jpg",
  resumeUrl: "cv.pdf",
  siteUrl: "https://ayoubkilwe.dev",
  socials: {
    github: "https://github.com/AyoubKilwe",
    linkedin: "https://www.linkedin.com/in/ayoub-kilwe-51b40a390",
    email: "mailto:ayoubkilwe@gmail.com",
  },
  about: [
    "I'm a Software Engineer who turns real-world problems into clean, scalable software. I work across the whole stack: polished web and mobile interfaces, secure REST APIs, and the databases behind them.",
    "Lately I've been focused on AI-powered platforms: multi-role systems with role-based access control, real-time dashboards and LLM assistants built on Gemini, Groq and Llama.",
    "I'm language-agnostic by principle. I pick the right tool for the product, then ship it with attention to performance, security and developer experience.",
  ],
  stats: [
    { label: "Projects shipped", value: 15, suffix: "+" },
    { label: "Technologies", value: 20, suffix: "+" },
    { label: "Commits on GitHub", value: 140, suffix: "+" },
    { label: "Coffee per week", value: 21, suffix: "" },
  ],
};

export type Skill = { name: string; icon: string };
export type SkillGroup = { title: string; accent: string; skills: Skill[] };

// icon = skillicons.dev id
export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    accent: "from-sky-400 to-cyan-300",
    skills: [
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
      { name: "Python", icon: "py" },
      { name: "Dart", icon: "dart" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
    ],
  },
  {
    title: "Frontend",
    accent: "from-violet-400 to-fuchsia-300",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Vue.js", icon: "vue" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Vite", icon: "vite" },
    ],
  },
  {
    title: "Mobile",
    accent: "from-pink-400 to-rose-300",
    skills: [
      { name: "React Native", icon: "react" },
      { name: "Flutter", icon: "flutter" },
      { name: "Expo", icon: "react" },
    ],
  },
  {
    title: "Backend",
    accent: "from-emerald-400 to-teal-300",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: ".NET Core", icon: "dotnet" },
      { name: "REST APIs", icon: "postman" },
    ],
  },
  {
    title: "Databases",
    accent: "from-amber-400 to-orange-300",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "MySQL", icon: "mysql" },
      { name: "Firebase", icon: "firebase" },
      { name: "SQLite", icon: "sqlite" },
    ],
  },
  {
    title: "AI & Tools",
    accent: "from-lime-400 to-green-300",
    skills: [
      { name: "Gemini · Groq · Llama", icon: "ai" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Figma", icon: "figma" },
      { name: "Linux", icon: "linux" },
      { name: "VS Code", icon: "vscode" },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  github: string;
  live?: string;
  featured: boolean;
  gradient: string;
  emoji: string;
};

export const projects: Project[] = [
  {
    slug: "ai-food-delivery",
    title: "AI-Powered Food Delivery Platform",
    tagline: "Multi-role delivery ecosystem with an AI assistant",
    description:
      "A complete food ordering and delivery platform with role-based access control and tailored real-time dashboards for customers, restaurant managers, delivery drivers and administrators, plus an intelligent AI chatbot that helps users order and track.",
    highlights: [
      "Secure RBAC with four distinct roles",
      "Real-time order tracking dashboards",
      "AI chatbot assistant for ordering support",
      "Deployed on Vercel with CI from GitHub",
    ],
    stack: ["TypeScript", "Next.js", "React", "Node.js", "Express", "MongoDB", "AI"],
    github: "https://github.com/AyoubKilwe/Ai-Powered-multi-role-food-delivery-platform",
    live: "https://ai-powered-multi-role-food-delivery.vercel.app",
    featured: true,
    gradient: "from-orange-500/30 via-rose-500/20 to-purple-600/30",
    emoji: "🍔",
  },
  {
    slug: "market-price-comparison",
    title: "Market Price Comparison & Availability",
    tagline: "Find the best price across Hargeisa shops",
    description:
      "MERN platform that compares market prices and checks product availability across local shops. Features nearby-shop discovery, price alerts, market trend analytics, vendor management and Gemini AI assistance.",
    highlights: [
      "Nearby shop discovery and price alerts",
      "Market trend analytics dashboard",
      "Vendor management portal",
      "Gemini AI shopping assistant",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "Gemini AI"],
    github:
      "https://github.com/AyoubKilwe/Market-Price-Comparison-and-Product-Availability-System-with-AI-Assistance",
    featured: true,
    gradient: "from-emerald-500/30 via-teal-500/20 to-sky-600/30",
    emoji: "🛒",
  },
  {
    slug: "smart-stationary",
    title: "Smart Stationary",
    tagline: "E-commerce with a React front and .NET back",
    description:
      "Stationery e-commerce web app with a React + Vite frontend and an ASP.NET Core (C#) backend on MongoDB, featuring product catalog, cart and order management.",
    highlights: ["React + Vite storefront", "ASP.NET Core REST API", "MongoDB catalog and orders"],
    stack: ["React", "Vite", "ASP.NET Core", "C#", "MongoDB"],
    github: "https://github.com/AyoubKilwe/Smart-Stationary",
    featured: true,
    gradient: "from-violet-500/30 via-indigo-500/20 to-blue-600/30",
    emoji: "🏪",
  },
  {
    slug: "restaurant-app",
    title: "Restaurant App",
    tagline: "Cross-platform ordering in React Native",
    description:
      "Cross-platform restaurant ordering mobile app built with React Native, featuring menu browsing, cart and order flow.",
    highlights: ["Android and iOS from one codebase", "Menu, cart and order flow"],
    stack: ["React Native", "JavaScript"],
    github: "https://github.com/AyoubKilwe/Resturent-app",
    featured: false,
    gradient: "from-pink-500/30 via-rose-500/20 to-orange-600/30",
    emoji: "🍽️",
  },
  {
    slug: "image-generator",
    title: "Image Generator",
    tagline: "Photo search app with history",
    description:
      "Image search mobile app: React Native (Expo) frontend with a Node.js backend powered by the Pexels API, with search history persisted in MongoDB Atlas.",
    highlights: ["Pexels API integration", "Search history in MongoDB", "Auto-detects backend host from Expo"],
    stack: ["React Native", "Expo", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/AyoubKilwe/Image-generator",
    featured: false,
    gradient: "from-sky-500/30 via-cyan-500/20 to-teal-600/30",
    emoji: "🖼️",
  },
  {
    slug: "hami-mini-market",
    title: "Hami Mini Market",
    tagline: "Capstone e-commerce web app",
    description:
      "Capstone e-commerce web app for Hami Mini Market with product filters, shopping cart and checkout flow.",
    highlights: ["Product filtering", "Cart and checkout"],
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/AyoubKilwe/Hami-Mini-Market-full-project-requirments",
    featured: false,
    gradient: "from-amber-500/30 via-yellow-500/20 to-lime-600/30",
    emoji: "🧺",
  },
];

export type Milestone = { period: string; title: string; org: string; points: string[] };

export const journey: Milestone[] = [
  {
    period: "2026",
    title: "AI-powered platforms",
    org: "Full-stack & AI",
    points: [
      "Built multi-role systems with RBAC and real-time dashboards",
      "Integrated Gemini, Groq and Llama into production apps",
      "TypeScript-first architecture with Next.js and Node.js",
    ],
  },
  {
    period: "2025",
    title: "Full-stack & mobile engineering",
    org: "MERN · React Native · .NET",
    points: [
      "Shipped MERN platforms and React Native apps",
      "Backend services with Express and ASP.NET Core on MongoDB",
      "Capstone e-commerce project for a local market",
    ],
  },
  {
    period: "2024",
    title: "Foundations",
    org: "Web fundamentals",
    points: [
      "HTML, CSS and JavaScript fundamentals",
      "First projects: UI clones, calculators and games",
      "Started contributing on GitHub",
    ],
  },
];

export const services = [
  {
    title: "Web Applications",
    description: "Fast, SEO-friendly web platforms with React and Next.js, backed by robust REST APIs.",
    icon: "Globe",
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform Android and iOS apps with React Native and Flutter from a single codebase.",
    icon: "Smartphone",
  },
  {
    title: "Backend & APIs",
    description: "Secure Node.js and .NET services with JWT auth, RBAC and clean database design.",
    icon: "Server",
  },
  {
    title: "AI Integration",
    description: "LLM-powered assistants, chatbots and recommendations using Gemini, Groq and Llama.",
    icon: "Sparkles",
  },
];
