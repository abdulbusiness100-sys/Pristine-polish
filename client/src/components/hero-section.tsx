import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, ClipboardCheck, Sparkles, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={containerRef} id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden" data-testid="section-hero">
      <motion.div style={{ y: yBg }} className="absolute inset-0">
        <img
          src="/images/hero-living-room.png"
          alt="Beautifully clean living room"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 backdrop-blur-[2px]" />
      </motion.div>

      {/* Decorative ambient elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

      <motion.div 
        style={{ opacity: opacityText, y: yText }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            <span className="text-white/95 text-sm font-medium tracking-wide border-l border-white/20 pl-2 ml-1">Serving the North East</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display text-white leading-[1.1] mb-6 tracking-tight">
            Professional Cleaning That Gives You Back
            <span className="block text-gradient mt-2 pb-2"> Your Time</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-lg leading-relaxed font-light">
            Trusted, local & fully tailored cleaning services. We bring the sparkle back to your home or business with uncompromising quality.
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-4 mb-10">
            <motion.span whileHover={{ x: 5 }} className="text-white/90 text-sm flex items-center gap-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Fully insured & vetted team
            </motion.span>
            <motion.span whileHover={{ x: 5 }} className="text-white/90 text-sm flex items-center gap-2 font-medium">
              <Sparkles className="w-4 h-4 text-emerald-400" /> Flexible, tailored plans
            </motion.span>
            <motion.span whileHover={{ x: 5 }} className="text-white/90 text-sm flex items-center gap-2 font-medium">
              <ClipboardCheck className="w-4 h-4 text-emerald-400" /> Free consultations available
            </motion.span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button
              size="lg"
              onClick={() => scrollTo("#booking")}
              className="btn-glow text-base h-14 px-8 rounded-full"
              data-testid="button-hero-quote"
            >
              Get Your Free Quote Now
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.div>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("#services")}
              className="btn-ghost-pill text-base h-14 px-8 border-white/30 text-white backdrop-blur-sm hover:bg-white/10"
              data-testid="button-hero-services"
            >
              Our Services
            </Button>
          </div>

          {/* Social proof strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-primary/30 border-2 border-black/30 flex items-center justify-center text-[10px] font-bold text-white/90">
                  {["RA", "SJ", "KM", "DT"][i - 1]}
                </div>
              ))}
            </div>
            <div className="text-white/70 text-sm font-light">
              <span className="text-white font-semibold">Trusted by families</span> across Newcastle, Gateshead & Sunderland
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll chevron */}
      <motion.button
        onClick={() => scrollTo("#services")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 2 }, y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white/80 transition-colors"
        aria-label="Scroll to services"
      >
        <ChevronDown className="w-7 h-7" />
      </motion.button>
    </section>
  );
}
