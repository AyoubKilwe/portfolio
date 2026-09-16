"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { fetchContent, type Content } from "@/lib/sanity";

const ContentContext = createContext<Content | null>(null);

/**
 * Provides site content to every section.
 * - `initial` comes from the build (static HTML, good for SEO).
 * - On load we re-fetch from Sanity's CDN so edits in the Studio show up
 *   immediately, without waiting for a rebuild.
 */
export function ContentProvider({ initial, children }: { initial: Content; children: ReactNode }) {
  const [content, setContent] = useState<Content>(initial);

  useEffect(() => {
    let cancelled = false;
    fetchContent().then((fresh) => {
      if (!cancelled && fresh.source === "sanity") setContent(fresh);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
}

export function useContent(): Content {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContent must be used inside <ContentProvider>");
  return ctx;
}
