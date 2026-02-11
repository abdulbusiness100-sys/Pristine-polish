import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Thompson",
    location: "Jesmond, Newcastle",
    rating: 5,
    text: "Pristine Polish transformed my flat before I moved out. The landlord was impressed and I got my full deposit back. Their attention to detail is incredible - they even cleaned areas I didn't think of. Highly recommend their end of tenancy service!",
    serviceType: "End of Tenancy",
  },
  {
    id: 2,
    name: "James Robertson",
    location: "Gosforth, Newcastle",
    rating: 5,
    text: "We've been using Pristine Polish fortnightly for three months now and the house has never looked better. They're reliable, thorough, and always leave the place smelling wonderful. The free oven clean is a lovely bonus too!",
    serviceType: "Fortnightly Cleaning",
  },
  {
    id: 3,
    name: "Amira Hassan",
    location: "Gateshead",
    rating: 5,
    text: "Called on Monday needing an urgent deep clean before family arrived on Wednesday. They had someone at my door by Tuesday morning! The quality was outstanding and the price was very fair. Fresh flowers at the end were such a thoughtful touch.",
    serviceType: "Deep Clean",
  },
  {
    id: 4,
    name: "David Chen",
    location: "Heaton, Newcastle",
    rating: 5,
    text: "As an Airbnb host, quick turnaround cleaning is essential. Pristine Polish never lets me down. They respond quickly, clean to an impeccable standard, and my guests always comment on how spotless the place is. Worth every penny.",
    serviceType: "Domestic Cleaning",
  },
  {
    id: 5,
    name: "Lisa Parker",
    location: "Low Fell, Gateshead",
    rating: 4,
    text: "Had a massive decluttering session done by Pristine Polish. They reorganised my entire kitchen and living room. It feels like a completely different house now! Very professional team who really listened to what I wanted.",
    serviceType: "Decluttering",
  },
  {
    id: 6,
    name: "Mark Wilson",
    location: "Fenham, Newcastle",
    rating: 5,
    text: "I manage several student properties and Pristine Polish handles all our end of tenancy cleans. They're consistent, affordable, and always deliver a high standard. The best cleaning service I've used in the area by far.",
    serviceType: "End of Tenancy",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-card" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-muted-foreground text-sm font-semibold uppercase tracking-wider" data-testid="text-testimonials-label">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy customers have to say about Pristine Polish.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col" data-testid={`card-testimonial-${index}`}>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "text-amber-400 fill-amber-400"
                          : "text-muted-foreground/20"
                      }`}
                    />
                  ))}
                </div>

                <div className="relative flex-1 mb-4">
                  <Quote className="w-6 h-6 text-primary/15 absolute -top-1 -left-1" />
                  <p className="text-sm text-foreground/80 leading-relaxed pl-4">
                    {testimonial.text}
                  </p>
                </div>

                <div className="border-t border-border pt-4 mt-auto">
                  <p className="text-sm font-semibold text-foreground" data-testid={`text-testimonial-name-${index}`}>
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.location} &middot; {testimonial.serviceType}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
