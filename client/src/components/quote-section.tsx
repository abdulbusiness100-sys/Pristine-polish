import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function QuoteSection() {
  return (
    <section id="quote" className="py-20 sm:py-28 bg-background" data-testid="section-quote">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <span className="text-muted-foreground text-sm font-semibold uppercase tracking-wider" data-testid="text-quote-label">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
              Request a Free Quote
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Fill in the form and we'll get back to you within 24 hours with a personalised quote. All prices are negotiable and we'll always try to beat your current rate.
            </p>

            <div className="space-y-5">
              <a href="tel:07940551427" className="flex items-center gap-3 group" data-testid="link-phone">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Call us</p>
                  <p className="text-sm font-medium text-foreground">07940 551 427</p>
                </div>
              </a>
              <a href="mailto:admin@pristine-polish.co.uk" className="flex items-center gap-3 group" data-testid="link-email">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email us</p>
                  <p className="text-sm font-medium text-foreground">admin@pristine-polish.co.uk</p>
                </div>
              </a>
              <div className="flex items-center gap-3" data-testid="text-location">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-medium text-foreground">Serving the North East</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-4 bg-primary/5 rounded-md border border-primary/10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">10% Off Your First Month</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Subscribe to our monthly cleaning plan and get 10% off your first month. Mention this offer when you get in touch.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div id="embedded-form" data-testid="embedded-form-container" className="min-h-[300px] flex items-center justify-center rounded-md border border-border bg-card p-8">
              <p className="text-muted-foreground text-center text-sm">
                Your embedded form will appear here. Replace this placeholder with your form embed code.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
