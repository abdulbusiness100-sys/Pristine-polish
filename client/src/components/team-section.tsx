import { motion } from "framer-motion";

const teamMembers = [
  { src: "/images/cleaner-1.png", alt: "Pristine Polish team member" },
  { src: "/images/cleaner-2.png", alt: "Pristine Polish team member" },
  { src: "/images/cleaner-3.png", alt: "Pristine Polish team member" },
  { src: "/images/cleaner-4.png", alt: "Pristine Polish team member" },
  { src: "/images/cleaner-5.png", alt: "Pristine Polish team member" },
];

export function TeamSection() {
  return (
    <section id="team" className="py-20 sm:py-28 bg-background" data-testid="section-team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-muted-foreground text-sm font-semibold uppercase tracking-wider" data-testid="text-team-label">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Meet the Pristine Polish Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our trained and uniformed professionals are ready to make your space sparkle.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative rounded-md overflow-hidden"
            >
              <img
                src={member.src}
                alt={member.alt}
                className="w-full aspect-[3/4] object-cover"
                data-testid={`img-team-member-${index}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
