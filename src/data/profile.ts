export const profile = {
  name: "Ayoub Jama Khalid",
  shortName: "Ayoub Kilwe",
  handle: "AyoubKilwe",
  title: "Software Engineer",
  tagline: "I design and build web, mobile and AI-assisted products end to end: clean interfaces, secure APIs and the databases behind them.",
  location: "Hargeisa, Somaliland",
  email: "contact@ayoubkilwe.dev",
  avatar: "/avatar.jpg",
  resumeUrl: "cv.pdf",
  siteUrl: "https://ayoubkilwe.dev",
  socials: {
    github: "https://github.com/AyoubKilwe",
    linkedin: "https://www.linkedin.com/in/ayoub-kilwe-51b40a390",
    email: "mailto:contact@ayoubkilwe.dev",
  },
  about: [
    "I'm a Software Engineer from Hargeisa who turns real-world problems into clean, reliable software. I work across the whole stack: web and mobile interfaces, secure REST APIs and the databases behind them.",
    "My recent work includes multi-role platforms with role-based access control, real-time dashboards and AI-powered assistants integrated through modern LLM APIs.",
    "I pick the right tool for each product and ship it with attention to performance, security and maintainable code."
  ],
  stats: [
    {
      "label": "Years of coding",
      "value": 3,
      "suffix": "+"
    },
    {
      "label": "Projects built",
      "value": 10,
      "suffix": "+"
    },
    {
      "label": "Meta certificates",
      "value": 3,
      "suffix": ""
    },
    {
      "label": "Technologies",
      "value": 15,
      "suffix": "+"
    }
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
    ],
  },
  {
    title: "Frontend",
    accent: "from-violet-400 to-fuchsia-300",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "HTML & CSS", icon: "html" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    title: "Mobile",
    accent: "from-pink-400 to-rose-300",
    skills: [
      { name: "React Native", icon: "react" },
      { name: "Flutter", icon: "flutter" },
    ],
  },
  {
    title: "Backend",
    accent: "from-emerald-400 to-teal-300",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "ASP.NET Core", icon: "dotnet" },
      { name: "Django", icon: "django" },
      { name: "REST APIs", icon: "postman" },
    ],
  },
  {
    title: "Databases",
    accent: "from-amber-400 to-orange-300",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    title: "AI & Tools",
    accent: "from-indigo-400 to-blue-300",
    skills: [
      { name: "AI / LLM integration", icon: "ai" },
      { name: "Git & GitHub", icon: "github" },
      { name: "Figma", icon: "figma" },
      { name: "VS Code", icon: "vscode" },
      { name: "Linux", icon: "linux" },
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
  github?: string;
  live?: string;
  playStore?: string;
  featured: boolean;
  gradient: string;
  emoji: string;
};

export const projects: Project[] = [
  {
    slug: "e-xisaabi",
    title: "E-xisaabi",
    tagline: "Financial management platform for businesses and individuals",
    description:
      "E-xisaabi (\"Lacagtaada Nidaami\") is a live financial management platform that gives business owners and salary earners a system for their money: income and expense tracking, separating business from personal finances, clear reports, and a 12-month plan with setup, training and support. Available in Somali and English.",
    highlights: ["Business and personal finance modes", "Income, expense and profit tracking with clear reports", "Bilingual (Somali / English) web app with subscriptions", "Live product with paying customers"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    live: "https://exisaabi.app/en/home",
    featured: true,
    gradient: "from-emerald-500/30 via-teal-500/20 to-sky-600/30",
    emoji: "\ud83d\udcb5",
  },
  {
    slug: "fariid",
    title: "Fariid",
    tagline: "AI-powered English learning app (web + Android)",
    description:
      "Fariid is an English learning app with an AI coach in your pocket: real conversation practice with instant pronunciation and grammar feedback, self-paced lessons from beginner to advanced, a spaced-repetition vocabulary builder and weekly progress insights. Published on Google Play with a companion website.",
    highlights: ["AI conversation practice with instant feedback", "Level assessment and adaptive lesson plans", "Spaced-repetition vocabulary builder", "Progress analytics and achievements"],
    stack: ["React Native", "Next.js", "Node.js", "AI assistant"],
    live: "https://fariidapp.com/",
    playStore: "https://go.fariidapp.com/download",
    featured: true,
    gradient: "from-sky-500/30 via-indigo-500/20 to-violet-600/30",
    emoji: "\ud83c\udf93",
  },
  {
    slug: "biyo-dhawr",
    title: "Biyo Dhawr",
    tagline: "Water-source monitoring and drought early-warning platform",
    description:
      "Open-source platform that lets rural communities report broken or dry water sources by dialling a USSD code (no internet needed), while government and NGO staff verify reports on a live satellite map, rank villages by drought risk with an explainable risk engine plus AI narrative reports, and dispatch repairs. Seeded with 604 real water points. Won 1st place in a university competition.",
    highlights: ["USSD *999# reporting in Somali, no internet required", "Live map, triage and analytics dashboard for government staff", "Explainable drought-risk engine with AI-written reports", "Real-time updates over Socket.IO; 604 real water points"],
    stack: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Socket.IO", "React Native", "AI assistant"],
    github: "https://github.com/biyo-dhawr",
    featured: true,
    gradient: "from-cyan-500/30 via-blue-500/20 to-teal-600/30",
    emoji: "\ud83d\udca7",
  },
  {
    slug: "ai-food-delivery",
    title: "AI-Powered Food Delivery Platform",
    tagline: "Multi-role delivery platform with an AI assistant",
    description:
      "A complete food ordering and delivery platform with role-based access control and tailored real-time dashboards for customers, restaurant managers, delivery drivers and administrators, plus an AI chatbot that helps users order and track.",
    highlights: ["Role-based access for four user types", "Real-time order tracking dashboards", "AI chatbot for ordering support", "Built with Next.js and TypeScript"],
    stack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "AI assistant"],
    github: "https://github.com/AyoubKilwe/Ai-Powered-multi-role-food-delivery-platform",
    live: "https://ai-powered-multi-role-food-delivery.vercel.app",
    featured: false,
    gradient: "from-orange-500/30 via-rose-500/20 to-purple-600/30",
    emoji: "🍔",
  },
  {
    slug: "market-price-comparison",
    title: "Market Price Comparison & Availability",
    tagline: "Find the best price across Hargeisa shops",
    description:
      "MERN platform that compares market prices and checks product availability across local shops. Features nearby-shop discovery, price alerts, market trend analytics, vendor management and an AI shopping assistant.",
    highlights: ["Nearby shop discovery and price alerts", "Market trend analytics dashboard", "Vendor management portal", "AI shopping assistant"],
    stack: ["React", "Node.js", "Express", "MongoDB", "AI assistant"],
    github:
      "https://github.com/AyoubKilwe/Market-Price-Comparison-and-Product-Availability-System-with-AI-Assistance",
    featured: false,
    gradient: "from-emerald-500/30 via-teal-500/20 to-sky-600/30",
    emoji: "🛒",
  },
  {
    slug: "smart-stationary",
    title: "Smart Stationary",
    tagline: "E-commerce with a React front end and .NET back end",
    description:
      "Stationery e-commerce web app with a React front end and an ASP.NET Core back end on MongoDB, featuring product catalog, cart and order management.",
    highlights: ["React storefront", "ASP.NET Core REST API", "MongoDB catalog and orders"],
    stack: ["React", "ASP.NET Core", "MongoDB"],
    github: "https://github.com/AyoubKilwe/Smart-Stationary",
    featured: false,
    gradient: "from-violet-500/30 via-indigo-500/20 to-blue-600/30",
    emoji: "🏪",
  },
];

export type Milestone = { period: string; title: string; org: string; points: string[] };

export const journey: Milestone[] = [
  {
    period: "Jan 2026 – Present",
    title: "Full Stack Engineer",
    org: "Loola AI · Part-time · Hybrid",
    points: [
      "Build and maintain web and mobile product features across React, React Native and Node.js REST APIs",
      "Own features from requirements analysis and API integration through testing, release and documentation",
      "Work on AI-powered product experiences with LLM assistants and role-based access control",
    ],
  },
  {
    period: "2026",
    title: "BSc Software Engineering · Graduated with Honours",
    org: "Academic achievements",
    points: [
      "Graduated with Honours in Software Engineering",
      "1st place in a university hackathon competition",
      "University scholarship for strong academic performance",
      "Contributed to Somali-language data collection for AI systems",
    ],
  },
  {
    period: "Dec 2025 – Jul 2026",
    title: "Web Developer",
    org: "E-xisaabi · Part-time · Remote",
    points: [
      "Built responsive, accessible web interfaces focused on clean layout, usability and performance",
      "Connected front-end views to back-end services and improved user-facing digital services",
    ],
  },
  {
    period: "Jan 2025 – Dec 2025",
    title: "Quality Assurance Specialist",
    org: "Ramaas · Hybrid",
    points: [
      "Tested web and mobile features for functionality, usability and quality",
      "Reported bugs, verified fixes and documented QA results and test cases",
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
    description: "Secure Node.js, Django and ASP.NET Core services with JWT auth, role-based access and clean database design.",
    icon: "Server",
  },
  {
    title: "AI Integration",
    description: "AI-powered assistants, chatbots and smart features added to web and mobile products through LLM APIs.",
    icon: "Sparkles",
  },
];
