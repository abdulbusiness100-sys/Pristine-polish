import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "One-Off Clean",
    price: "80",
    unit: "from",
    description: "Perfect for a quick refresh of any single room or space in your home.",
    features: [
      "Any single room or space",
      "Kitchen, bathroom, or living room",
      "All products provided",
      "No commitment required",
      "Add extra rooms from \u00a320",
    ],
    popular: false,
  },
  {
    name: "Fortnightly Clean",
    price: "100",
    unit: "per month",
    description: "Keep your home consistently spotless with 2 visits per month at one simple monthly price.",
    features: [
      "2 visits per month",
      "Full home maintenance clean",
      "Free oven clean included",
      "No extra cost if job takes longer than recommended time",
      "Priority booking",
      "Flexible scheduling",
      "Products & equipment included",
      "10% off your first 3 months",
    ],
    popular: true,
  },
  {
    name: "Initial Deep Clean",
    price: "200",
    unit: "from",
    description: "Comprehensive top-to-bottom cleaning, ideal for end of tenancy or move-ins.",
    features: [
      "Full property deep clean",
      "Bedrooms, kitchen, bathrooms",
      "Carpet & floor cleaning",
      "Multiple cleaners dispatched",
      "Fresh flowers on completion",
    ],
    popular: false,
  },
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
            Affordable & Transparent
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fair pricing with no hidden fees. All quotes are negotiable and we'll always try to beat your current rate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card
                className={`p-6 h-full flex flex-col relative ${
                  plan.popular ? "border-primary border-2" : ""
                }`}
                data-testid={`card-pricing-${index}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-muted-foreground uppercase">{plan.unit}</span>
                    <span className="text-4xl font-bold text-foreground">\u00a3{plan.price}</span>
                  </div>
                </div>

                <div className="space-y-3 flex-1 mb-6">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-primary" />
                      </div>
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                  onClick={() => scrollTo("#quote")}
                  data-testid={`button-pricing-quote-${index}`}
                >
                  Get a Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          All prices are negotiable. Contact us for a personalised quote based on your specific needs.
        </motion.p>
      </div>
    </section>
  );
}
