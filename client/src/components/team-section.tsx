import { motion } from "framer-motion";

const teamMembers = [
  {
    src: "/images/cleaner-1.png",
    alt: "Pressure Cleaning specialist",
    role: "Pressure Cleaner",
    icon: "💧",
    desc: "Driveways, patios & exteriors",
  },
  {
    src: "/images/cleaner-1.png",
    alt: "Declutter expert",
    role: "Declutter Expert",
    icon: "📦",
    desc: "Clear & reclaim your space",
  },
  {
    src: "/images/cleaner-1.png",
    alt: "Professional organiser",
    role: "Organiser",
    icon: "🗂️",
    desc: "Systems that stay tidy",
  },
  {
    src: "/images/cleaner-1.png",
    alt: "Deep cleaning specialist",
    role: "Deep Cleaner",
    icon: "🧽",
    desc: "Every surface, every corner",
  },
  {
    src: "/images/cleaner-1.png",
    alt: "Polishing specialist",
    role: "Polisher",
    icon: "✨",
    desc: "Streak-free shine throughout",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-20 sm:py-28 bg-background" data-testid="section-team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16 relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-4 border border-primary/20 shadow-sm" data-testid="text-team-label">
            Our Team
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mt-2 mb-6 tracking-tight">
            Introducing the <span className="text-gradient">Pristine</span> Team
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Our trained and uniformed professionals are ready to make your space sparkle.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] group border border-white/5"
            >
              <img
                src={member.src}
                alt={member.alt}
                className="w-full aspect-[3/4] object-cover transition-all duration-700 group-hover:scale-110 filter grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
                data-testid={`img-team-member-${index}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <div className="glass rounded-xl px-3 py-2.5 border-white/20">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-base leading-none">{member.icon}</span>
                    <span className="text-white text-xs font-bold uppercase tracking-widest drop-shadow-md">{member.role}</span>
                  </div>
                  <p className="text-white/60 text-[10px] font-light leading-tight">{member.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
