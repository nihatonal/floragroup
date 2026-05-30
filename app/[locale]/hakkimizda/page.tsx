import AboutApproach from "@/components/sections/about/AboutApproach";
import AboutExpertise from "@/components/sections/about/AboutExpertise";
import AboutFinalCTA from "@/components/sections/about/AboutFinalCTA";
import AboutFounderQuote from "@/components/sections/about/AboutFounderQuote";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutStats from "@/components/sections/about/AboutStats";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutStudioGallery from "@/components/sections/about/AboutStudioGallery";
import AboutValues from "@/components/sections/about/AboutValues";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutApproach />
      <AboutFounderQuote />
      <AboutValues />
      <AboutExpertise />
      <AboutStudioGallery />
      <AboutFinalCTA/>
    </>
  );
}
