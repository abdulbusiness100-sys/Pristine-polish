import { Check } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  "Prompt service - often within 24 hours",
  "Premium / eco-friendly products used & allergen check",
  "Trained & uniformed cleaning professionals",
  "Fully insured with public liability cover",
  "We'll beat any like-for-like quote",
  "No long-term contracts required",
  "Fresh flowers left after every deep clean",
  "Free in-home consultation for a tailored service",
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-card" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10 group">
              <img
                src="/images/cleaning-supplies.png"
                alt="Professional cleaning supplies"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 glass-card bg-primary/95 text-primary-foreground rounded-2xl p-5 sm:p-7 shadow-[0_10px_40px_rgba(20,184,166,0.4)] border border-white/20"
            >
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tighter drop-shadow-md">10%</div>
              <div className="text-xs sm:text-sm font-medium opacity-90 tracking-wide mt-1">off your first<br />month</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-4 border border-primary/20 shadow-sm" data-testid="text-about-label">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mt-2 mb-6 tracking-tight">
              Your Space, <span className="text-gradient">Our Passion</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4 font-light">
              Pristine Polish believes everyone deserves a clean space. Whether customers run a busy household, own a small business, are landlords, or manage student accommodation, the team provides a personalised quality service tailored to work around each client's schedule.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-light">
              Proudly serving the North East, Pristine Polish takes the stress out of cleaning at affordable, fair prices. The team doesn't just clean a space - they leave it looking and smelling fabulous.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.05) }}
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center mt-0.5 flex-shrink-0 shadow-sm border border-primary/10">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm text-foreground/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
