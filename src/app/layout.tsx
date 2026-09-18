import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";
import { GA_MEASUREMENT_ID } from "@/lib/integrations";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.shortName} | ${profile.title} & Full-Stack Developer`,
    template: `%s | ${profile.shortName}`,
  },
  description: `${profile.name} (Ayoub Kilwe) is a Software Engineer from Hargeisa, Somaliland building web, mobile and AI-powered products with React, Next.js, React Native, Flutter and Node.js. Portfolio, projects and contact.`,
  alternates: { canonical: profile.siteUrl },
  keywords: [
    "Ayoub Kilwe",
    "ayoubkilwe",
    "Ayoub Jama Khalid",
    "Ayoub Kilwe portfolio",
    "Ayoub Kilwe software engineer",
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
    "@graph": [
      {
        "@type": "Person",
        "@id": `${profile.siteUrl}/#person`,
        name: profile.name,
        alternateName: [profile.shortName, "ayoubkilwe", "Ayoub Kilwe"],
        jobTitle: profile.title,
        description: profile.tagline,
        url: profile.siteUrl,
        email: profile.email,
        image: new URL(profile.avatar, profile.siteUrl).href,
        address: { "@type": "PostalAddress", addressLocality: "Hargeisa", addressCountry: "SO" },
        knowsAbout: ["JavaScript", "TypeScript", "React", "Next.js", "React Native", "Flutter", "Node.js", "MongoDB", "AI"],
        sameAs: [profile.socials.github, profile.socials.linkedin],
      },
      {
        "@type": "WebSite",
        "@id": `${profile.siteUrl}/#website`,
        url: profile.siteUrl,
        name: `${profile.shortName} Portfolio`,
        description: profile.tagline,
        publisher: { "@id": `${profile.siteUrl}/#person` },
        inLanguage: "en",
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} dark`}>
      <head>
        {/* Security headers. GitHub Pages cannot set HTTP headers, so these are declared in the document. */}
        <meta
          httpEquiv="Content-Security-Policy"
          content={[
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data: https://cdn.sanity.io https://*.google-analytics.com https://*.googletagmanager.com",
            "font-src 'self'",
            "connect-src 'self' https://2zdu6zb1.apicdn.sanity.io https://2zdu6zb1.api.sanity.io https://api.web3forms.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self'",
            "upgrade-insecure-requests",
          ].join("; ")}
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {GA_MEASUREMENT_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}',{anonymize_ip:true});`,
              }}
            />
          </>
        )}
        {children}
      </body>
    </html>
  );
}
