import { Check } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  "Prompt service - often within 24 hours",
  "All cleaning products provided",
  "Trained & uniformed cleaning professionals",
  "Fully insured with public liability cover",
  "We'll beat any like-for-like quote",
  "No long-term contracts required",
  "Fresh flowers left after every deep clean",
  "Premium eco-friendly products used",
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-card" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-md overflow-hidden">
              <img
                src="/images/cleaning-supplies.png"
                alt="Professional cleaning supplies"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-primary text-primary-foreground rounded-md p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold">10%</div>
              <div className="text-xs sm:text-sm opacity-90">off your first<br />deep clean</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-muted-foreground text-sm font-semibold uppercase tracking-wider" data-testid="text-about-label">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
              Your Space, Our Passion
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              At Pristine Polish, we believe everyone deserves a clean space. Whether you run a busy household, own a small business, are a landlord, or manage student accommodation, we provide a personalised quality service tailored to work around you.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              As a busy mum myself, I understand the challenge of keeping on top of cleaning. That's why we created Pristine Polish - to take the stress away at affordable, fair prices. We don't just clean your space, we leave it looking and smelling fabulous.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
