import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Mr & Mrs Johnson",
    location: "North East",
    rating: 5,
    text: "Pristine Polish have been cleaning our home for a while now and the standard is always exceptional. They are reliable, thorough, and always leave the place looking and smelling wonderful. We wouldn't trust anyone else with our home. Highly recommended!",
    serviceType: "Regular Cleaning",
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
            Testimonial
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy customers have to say about Pristine Polish.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full flex flex-col" data-testid={`card-testimonial-${index}`}>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-amber-400 fill-amber-400"
                          : "text-muted-foreground/20"
                      }`}
                    />
                  ))}
                </div>

                <div className="relative flex-1 mb-4">
                  <Quote className="w-8 h-8 text-primary/15 absolute -top-1 -left-1" />
                  <p className="text-base text-foreground/80 leading-relaxed pl-6">
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
