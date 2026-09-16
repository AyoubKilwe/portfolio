import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Journey } from "@/components/journey";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Background } from "@/components/background";
import { ContentProvider } from "@/components/content-provider";
import { fetchContent } from "@/lib/sanity";

export default async function Home() {
  const content = await fetchContent();

  return (
    <ContentProvider initial={content}>
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </ContentProvider>
  );
}
