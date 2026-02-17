import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "2 professional cleans per month",
  "Full home maintenance clean",
  "Free oven clean included",
  "No extra cost if job takes longer than recommended time",
  "Priority booking",
  "Flexible scheduling",
  "Premium / eco-friendly products included",
  "Allergen check included",
  "Free in-home consultation",
  "10% off your first month",
];

export function PricingSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-background" data-testid="section-pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-muted-foreground text-sm font-semibold uppercase tracking-wider" data-testid="text-pricing-label">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            One straightforward plan. No hidden fees. Everything you need to keep your home spotless.
          </p>
        </motion.div>

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <Card
              className="p-8 relative border-primary border-2"
              data-testid="card-pricing-0"
            >
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                Standard Plan
              </Badge>
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  Monthly Cleaning
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Keep your home consistently spotless with 2 professional cleans per month at one simple monthly price.
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-foreground">{"\u00A3"}100</span>
                  <span className="text-muted-foreground text-sm">/ month</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Includes 2 visits per month</p>
              </div>

              <div className="space-y-3 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className="w-full"
                onClick={() => scrollTo("#quote")}
                data-testid="button-pricing-quote-0"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          All quotes are tailored to your needs. Contact us for a free in-home consultation.
        </motion.p>
      </div>
    </section>
  );
}
