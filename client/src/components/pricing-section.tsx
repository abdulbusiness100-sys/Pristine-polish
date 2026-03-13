import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

const BOOKING_URL = "https://pristinepolish.bookingkoala.com/booknow";

const regularPlans = [
  {
    name: "Once a Month",
    price: "£80",
    unit: "/ month",
    visits: "1 visit",
    hours: "3 hrs",
    badge: null as string | null,
    features: [
      "Maintenance clean",
      "All products & equipment included",
      "No extra charge if we run over",
      "Flexible scheduling",
    ],
  },
  {
    name: "Fortnightly",
    price: "£100",
    unit: "/ month",
    visits: "2 visits",
    hours: "2.5 hrs per visit",
    badge: "MOST POPULAR" as string | null,
    features: [
      "Maintenance clean",
      "No extra charge if we run over",
      "Priority booking",
      "Flexible scheduling",
      "Premium / eco-friendly products",
      "Allergen check included",
      "Free in-home consultation",
    ],
  },
  {
    name: "Weekly Subscription",
    price: "From £37.50",
    unit: "/ week",
    visits: "Weekly",
    hours: "Min 2 hrs / visit",
    badge: "BEST VALUE" as string | null,
    features: [
      "Maintenance clean",
      "Free oven clean once a month",
      "No extra charge if we run over",
      "Priority booking",
      "Dedicated cleaner assigned",
      "Premium / eco-friendly products",
      "Free in-home consultation",
    ],
  },
];

const additionalServices = [
  {
    icon: "🧹",
    title: "One-Off Clean",
    price: "From £50",
    description: "Pick any room or space. Kitchen · Living Room · Bathroom · Bedroom · And more.",
    note: "+£20 for larger spaces or additional rooms",
    addons: null as string | null,
  },
  {
    icon: "🏠",
    title: "Initial Clean & End of Tenancy",
    price: "From £250",
    description: "Full property: bedrooms, kitchen, bathrooms, living areas. Perfect for landlords, Airbnb hosts, students.",
    note: "🔴 10% off when you add a carpet clean",
    addons: "Carpet clean +£100 · Oven clean +£50",
  },
  {
    icon: "📦",
    title: "Decluttering & Reorganisation",
    price: "From £100",
    description: "We remove unwanted items, clear clutter, and reorganise your space to keep it that way.",
    note: null as string | null,
    addons: null as string | null,
  },
];

function openBooking() {
  window.open(BOOKING_URL, "_blank", "noopener,noreferrer");
}

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-background" data-testid="section-pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-muted-foreground text-sm font-semibold uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mt-3 mb-4">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No hidden fees. No hourly surprises. Prices to suit every budget.
          </p>
        </motion.div>

        {/* Urgency Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-semibold px-5 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            10% off your first month — Limited time
          </span>
        </motion.div>

        {/* Regular Cleaning Plans label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6"
        >
          🧹 Regular Cleaning Plans — Keeping your space spotless, week after week
        </motion.p>

        {/* 3-tier grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {regularPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative rounded-2xl border flex flex-col transition-all duration-300 ${
                plan.badge === "MOST POPULAR"
                  ? "border-primary border-2 shadow-[0_20px_60px_rgba(20,184,166,0.15)] glass-card"
                  : plan.badge === "BEST VALUE"
                  ? "border-emerald-500/40 border-2 glass-card"
                  : "border-border glass-card"
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white whitespace-nowrap ${
                  plan.badge === "MOST POPULAR"
                    ? "bg-primary shadow-lg shadow-primary/30"
                    : "bg-emerald-500 shadow-lg shadow-emerald-500/30"
                }`}>
                  {plan.badge}
                </div>
              )}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-foreground mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold font-mono text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.unit}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="glass rounded-full px-2.5 py-1 text-xs font-medium text-foreground/70">{plan.visits}</span>
                  <span className="glass rounded-full px-2.5 py-1 text-xs font-medium text-foreground/70">{plan.hours}</span>
                </div>
                <div className="space-y-2.5 flex-1 mb-6">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-primary" />
                      </div>
                      <span className="text-sm text-foreground/80">{f}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className={`w-full rounded-xl ${plan.badge === "MOST POPULAR" ? "btn-glow" : "btn-soft"}`}
                  variant={plan.badge === "MOST POPULAR" ? "default" : "outline"}
                  onClick={openBooking}
                  data-testid={`button-pricing-quote-${index}`}
                >
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No-overcharge note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-foreground/70 mb-16 bg-primary/5 border border-primary/15 rounded-xl py-3 px-4 max-w-2xl mx-auto"
        >
          <strong className="text-foreground">No additional charges</strong> if we run over your quoted hours
        </motion.p>

        {/* Other Services label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6"
        >
          ✨ Other Services
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {additionalServices.map((svc, index) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-2xl border border-border p-6 flex flex-col"
            >
              <div className="text-3xl mb-3">{svc.icon}</div>
              <h3 className="text-base font-bold text-foreground mb-1">{svc.title}</h3>
              <div className="text-2xl font-bold font-mono text-primary mb-3">{svc.price}</div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{svc.description}</p>
              {svc.addons && (
                <p className="text-xs text-muted-foreground mt-2 glass rounded-lg px-3 py-2">{svc.addons}</p>
              )}
              {svc.note && (
                <p className="text-xs text-foreground/70 mt-3 font-medium">{svc.note}</p>
              )}
              <Button variant="outline" className="mt-5 w-full rounded-xl" onClick={openBooking}>
                Book This <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Free Consultation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl glass-card border border-primary/20 p-8 sm:p-10 text-center overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/8 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10">
            <div className="text-2xl mb-3">💬</div>
            <h3 className="text-xl font-bold text-foreground mb-2">Not Sure What You Need?</h3>
            <p className="text-muted-foreground mb-1 max-w-md mx-auto">
              Free consultation — no obligation. Tell us about your space, size, and budget and we'll recommend the perfect service.
            </p>
            <p className="text-sm font-semibold text-primary mb-6">"Prices to suit every budget"</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={openBooking} className="btn-glow rounded-full px-8">
                Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" className="btn-ghost-pill px-8" asChild>
                <a href="mailto:admin@pristine-polish.co.uk?subject=Free Consultation Request">
                  <Phone className="mr-2 w-4 h-4" /> Enquire by Email
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          All quotes are tailored to your needs. Contact us for a free in-home consultation.
        </p>
      </div>
    </section>
  );
}
