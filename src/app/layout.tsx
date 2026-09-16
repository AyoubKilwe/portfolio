import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.shortName} · ${profile.title}`,
    template: `%s · ${profile.shortName}`,
  },
  description: profile.tagline,
  keywords: [
    "Ayoub Kilwe",
    "Ayoub Jama Khalid",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "React Native",
    "Flutter",
    "Node.js",
    "Somaliland",
  ],
  authors: [{ name: profile.name, url: profile.socials.github }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: profile.siteUrl,
    title: `${profile.shortName} · ${profile.title}`,
    description: profile.tagline,
    siteName: profile.shortName,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: profile.shortName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.shortName} · ${profile.title}`,
    description: profile.tagline,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.shortName,
    jobTitle: profile.title,
    url: profile.siteUrl,
    email: profile.email,
    image: profile.avatar,
    address: { "@type": "PostalAddress", addressLocality: profile.location },
    sameAs: [profile.socials.github, profile.socials.linkedin],
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} dark`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
