import { AboutSection } from "@/components/sections/AboutSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { JournalSection } from "@/components/sections/JournalSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ProductCarousel } from "@/components/sections/ProductCarousel";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { SustainabilitySection } from "@/components/sections/SustainabilitySection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function App() {
  useScrollReveal();

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F4F4F2]">
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <SustainabilitySection />
      <ProductCarousel />
      <JournalSection />
      <InstagramGrid />
      <SiteFooter />
    </main>
  );
}
