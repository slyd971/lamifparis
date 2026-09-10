import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import KeyFigures from "@/components/KeyFigures";
import Concept from "@/components/Concept";
import Experience from "@/components/Experience";
import Artists from "@/components/Artists";
import VideoSection from "@/components/VideoSection";
import TrustedBy from "@/components/TrustedBy";
import Gallery from "@/components/Gallery";
import Collaborations from "@/components/Collaborations";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <a
        href="#chiffres"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-charbon focus:px-4 focus:py-2 focus:text-cream"
      >
        Aller au contenu
      </a>

      <Navigation />

      <main>
        <Hero />
        <KeyFigures />
        <Concept />
        <Experience />
        <Artists />
        <VideoSection />
        <TrustedBy />
        <Gallery />
        <Collaborations />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
