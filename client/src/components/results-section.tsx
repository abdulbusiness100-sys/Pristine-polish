import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const results = [
  {
    title: "Luxury Apartment",
    before: "/images/result-apartment-before.png",
    after: "/images/result-apartment-after.png",
  },
  {
    title: "Detached House",
    before: "/images/result-house-before.png",
    after: "/images/result-house-after.png",
  },
  {
    title: "Penthouse Suite",
    before: "/images/result-penthouse-before.png",
    after: "/images/result-penthouse-after.png",
  },
  {
    title: "Grand Mansion",
    before: "/images/result-mansion-before.png",
    after: "/images/result-mansion-after.png",
  },
];

export function ResultsSection() {
  return (
    <section id="results" className="py-20 sm:py-28 bg-card" data-testid="section-results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-muted-foreground text-sm font-semibold uppercase tracking-wider" data-testid="text-results-label">
            Our Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            See the Pristine Difference
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real transformations across homes and properties in the North East. Every clean delivers a visible difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={result.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden" data-testid={`card-result-${index}`}>
                <div className="p-4 sm:p-5">
                  <h3 className="text-base font-semibold text-card-foreground mb-3">
                    {result.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative rounded-md overflow-hidden">
                      <img
                        src={result.before}
                        alt={`${result.title} before cleaning`}
                        className="w-full aspect-video object-cover"
                        data-testid={`img-result-before-${index}`}
                      />
                      <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                        Before
                      </div>
                    </div>
                    <div className="relative rounded-md overflow-hidden">
                      <img
                        src={result.after}
                        alt={`${result.title} after cleaning`}
                        className="w-full aspect-video object-cover"
                        data-testid={`img-result-after-${index}`}
                      />
                      <div className="absolute top-2 left-2 bg-primary/80 text-primary-foreground text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                        After
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
