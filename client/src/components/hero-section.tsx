import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, ClipboardCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center" data-testid="section-hero">
      <div className="absolute inset-0">
        <img
          src="/images/hero-living-room.png"
          alt="Beautifully clean living room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Serving the North East</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Professional Cleaning That Gives You Back
            <span className="block" style={{ color: "hsl(170 40% 75%)" }}> Your Time</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-4 max-w-lg leading-relaxed">
            Trusted, local & fully tailored cleaning services. We bring the sparkle back to your home or business.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
            <span className="text-white/70 text-sm flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" /> Fully insured & vetted team
            </span>
            <span className="text-white/70 text-sm flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Flexible, tailored plans
            </span>
            <span className="text-white/70 text-sm flex items-center gap-1.5">
              <ClipboardCheck className="w-3.5 h-3.5" /> Free consultations available
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Button
              size="lg"
              onClick={() => scrollTo("#quote")}
              className="text-base"
              data-testid="button-hero-quote"
            >
              Get Your Free Quote Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("#services")}
              className="text-base border-white/30 text-white bg-white/10 backdrop-blur-sm"
              data-testid="button-hero-services"
            >
              Our Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
