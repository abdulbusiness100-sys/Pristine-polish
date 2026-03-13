import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarCheck, ShieldCheck, Clock, MessageCircle } from "lucide-react";

const JOBBER_URL = "https://clienthub.getjobber.com/booking/30185328-54a9-4520-8760-603ac0b4fcd5";
const WHATSAPP_URL = "https://wa.me/447940551427?text=Hi%20Pristine%20Polish%2C%20I%27d%20like%20to%20enquire%20about%20your%20cleaning%20services.";

const trustSignals = [
  { icon: ShieldCheck, text: "Fully insured" },
  { icon: Clock, text: "Under 2 mins to book" },
  { icon: CalendarCheck, text: "No card required" },
];

export function QuoteSection() {
  return (
    <section id="booking" className="py-20 sm:py-28 bg-card" data-testid="section-quote">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Glow orb — now inside relative parent */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-[400px] h-[200px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative">
            <div className="w-16 h-16 rounded-2xl glass border border-primary/20 shadow-lg shadow-primary/20 flex items-center justify-center mx-auto mb-6">
              <CalendarCheck className="w-8 h-8 text-primary" />
            </div>

            <span className="text-muted-foreground text-sm font-semibold uppercase tracking-wider">Book Online</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mt-3 mb-4">Ready to Book?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto mb-6">
              Choose your service, pick a time, and confirm your booking in minutes — all through our secure booking portal.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
              {trustSignals.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-foreground/70">
                  <Icon className="w-4 h-4 text-primary" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
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

              <Button
                asChild
                variant="outline"
                size="lg"
                className="btn-ghost-pill h-14 px-8 text-base rounded-full border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-5">
              Secure booking · Takes less than 2 minutes · No card required upfront
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
