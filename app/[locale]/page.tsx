import HeroSection from '@/components/sections/HeroSection';
import StatsBand from '@/components/sections/StatsBand';
import AboutPreview from '@/components/sections/AboutPreview';
import FeaturedProject from '@/components/sections/FeaturedProject';
import ProcessSection from '@/components/sections/ProcessSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import GalleryPreview from '@/components/sections/GalleryPreview';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsBand />
      <AboutPreview />
      <FeaturedProject />
      <ProcessSection />
      <WhyChooseUs />
      <GalleryPreview />
      <ContactSection />
    </main>
  );
}