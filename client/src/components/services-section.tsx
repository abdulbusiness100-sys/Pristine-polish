import { Card } from "@/components/ui/card";
import { Home, Building2, CalendarCheck, Sparkles, Trash2, LayoutGrid, PartyPopper, ArrowUpDown } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Home,
    title: "Domestic Cleaning",
    description: "Regular house cleaning tailored to your schedule. We keep your home spotless so you can focus on what matters.",
  },
  {
    icon: Building2,
    title: "End of Tenancy",
    description: "Comprehensive deep cleaning for landlords and tenants. Get your full deposit back with our thorough service.",
  },
  {
    icon: Sparkles,
    title: "Deep / Spring Cleaning",
    description: "Intensive cleaning from top to bottom. We tackle the areas that regular cleaning misses.",
  },
  {
    icon: CalendarCheck,
    title: "Fortnightly Cleaning",
    description: "Consistent upkeep with regular fortnightly visits. If the job takes longer than the recommended time, no additional cost is added.",
  },
  {
    icon: PartyPopper,
    title: "Event Cleaning",
    description: "Pre and post-event cleaning to make sure your venue is spotless. We handle the mess so you don't have to.",
  },
  {
    icon: Trash2,
    title: "Decluttering",
    description: "Professional organisation and decluttering to transform chaotic spaces into calm, tidy environments.",
  },
  {
    icon: ArrowUpDown,
    title: "Reorganisation",
    description: "Smart storage solutions and space optimisation. We help you make the most of every room.",
  },
  {
    icon: LayoutGrid,
    title: "General Cleaning",
    description: "Flexible one-off cleaning for any room or space. From kitchens to bathrooms, we've got you covered.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-background" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-muted-foreground text-sm font-semibold uppercase tracking-wider" data-testid="text-services-label">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From regular upkeep to deep cleans, we provide a full range of professional cleaning services to keep your space looking its best. Book a free in-home consultation for a service tailored to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card
                className="p-6 h-full hover-elevate transition-all duration-200 group"
                data-testid={`card-service-${index}`}
              >
                <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-card-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
