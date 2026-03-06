import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarCheck } from "lucide-react";

const JOBBER_URL = "https://clienthub.getjobber.com/booking/30185328-54a9-4520-8760-603ac0b4fcd5";

export function QuoteSection() {
  return (
    <section id="booking" className="py-20 sm:py-28 bg-card" data-testid="section-quote">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Glow orb */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative">
            <div className="w-16 h-16 rounded-2xl glass border border-primary/20 shadow-lg shadow-primary/20 flex items-center justify-center mx-auto mb-6">
              <CalendarCheck className="w-8 h-8 text-primary" />
            </div>

            <span className="text-muted-foreground text-sm font-semibold uppercase tracking-wider">Book Online</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">Ready to Book?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto mb-8">
              Choose your service, pick a time, and confirm your booking in minutes — all through our secure booking portal.
            </p>

            <Button
              asChild
              size="lg"
              className="btn-glow h-14 px-10 text-base rounded-full"
            >
              <a href={JOBBER_URL} target="_blank" rel="noopener noreferrer">
                Book Your Clean Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>

            <p className="text-xs text-muted-foreground mt-4">
              Secure booking · Takes less than 2 minutes · No card required upfront
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
