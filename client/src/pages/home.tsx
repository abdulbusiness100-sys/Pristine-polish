import { useEffect } from "react";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { PricingSection } from "@/components/pricing-section";
import { ResultsSection } from "@/components/results-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { QuoteSection } from "@/components/quote-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Home() {
  // Handle hash navigation from other pages (e.g. gallery → /#booking)
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const attempt = (retries: number) => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (retries > 0) {
        setTimeout(() => attempt(retries - 1), 150);
      }
    };
    attempt(5);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PricingSection />
        <ResultsSection />
        <TestimonialsSection />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
}
