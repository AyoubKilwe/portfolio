export const profile = {
  name: "Ayoub Jama Khalid",
  shortName: "Ayoub Kilwe",
  handle: "AyoubKilwe",
  title: "Software Engineer",
  tagline: "I design and build web, mobile and AI-assisted products end to end: clean interfaces, secure APIs and the databases behind them.",
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
    tagline: "Multi-role delivery platform with an AI assistant",
    description:
      "A complete food ordering and delivery platform with role-based access control and tailored real-time dashboards for customers, restaurant managers, delivery drivers and administrators, plus an AI chatbot that helps users order and track.",
    highlights: ["Role-based access for four user types", "Real-time order tracking dashboards", "AI chatbot for ordering support", "Built with Next.js and TypeScript"],
    stack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "AI assistant"],
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
      "MERN platform that compares market prices and checks product availability across local shops. Features nearby-shop discovery, price alerts, market trend analytics, vendor management and an AI shopping assistant.",
    highlights: ["Nearby shop discovery and price alerts", "Market trend analytics dashboard", "Vendor management portal", "AI shopping assistant"],
    stack: ["React", "Node.js", "Express", "MongoDB", "AI assistant"],
    github:
      "https://github.com/AyoubKilwe/Market-Price-Comparison-and-Product-Availability-System-with-AI-Assistance",
    featured: true,
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
    featured: true,
    gradient: "from-violet-500/30 via-indigo-500/20 to-blue-600/30",
    emoji: "🏪",
  },
  {
    slug: "restaurant-app",
    title: "Restaurant App",
    tagline: "Cross-platform ordering app in React Native",
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
      "Image search mobile app: React Native front end with a Node.js backend powered by the Pexels API, with search history stored in MongoDB.",
    highlights: ["Pexels API integration", "Search history in MongoDB", "Node.js REST backend"],
    stack: ["React Native", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/AyoubKilwe/Image-generator",
    featured: false,
    gradient: "from-sky-500/30 via-cyan-500/20 to-teal-600/30",
    emoji: "🖼️",
  },
  {
    slug: "hami-mini-market",
    title: "Hami Mini Market",
    tagline: "E-commerce web app in vanilla JavaScript",
    description:
      "E-commerce web app for Hami Mini Market with product filters, shopping cart and checkout flow, built with HTML, CSS and JavaScript.",
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
