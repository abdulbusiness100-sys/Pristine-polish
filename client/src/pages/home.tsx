import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { PricingSection } from "@/components/pricing-section";
import { ResultsSection } from "@/components/results-section";
import { TeamSection } from "@/components/team-section";
import { QuoteSection } from "@/components/quote-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TeamSection />
        <PricingSection />
        <ResultsSection />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
}
