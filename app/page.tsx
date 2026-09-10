import SkipLink from "@/components/SkipLink";
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
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SkipLink />

      <Navigation />

      <main id="contenu" tabIndex={-1}>
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

      <SiteFooter />
    </>
  );
}
