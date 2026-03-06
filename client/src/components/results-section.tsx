import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ImagePlus, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useLocation } from "wouter";

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
    title: "Conservatory",
    before: "/gallery/videos/con1-before.mp4",
    after: "/gallery/videos/con1-after.mp4",
  },
];

const isVideo = (src: string) => src.endsWith(".mp4") || src.endsWith(".webm");

function BeforeAfterCard({ result, index }: { result: (typeof results)[0]; index: number }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSlider = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    setSliderPosition(Math.max(0, Math.min(100, (x / rect.width) * 100)));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => updateSlider(e.clientX);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => updateSlider(e.touches[0].clientX);

  const beforeIsVideo = isVideo(result.before);
  const afterIsVideo = isVideo(result.after);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 300, damping: 20 }}
      className="flex-shrink-0 w-full md:w-[450px]"
    >
      <Card className="overflow-hidden glass-card border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-card/60" data-testid={`card-result-${index}`}>
        <div className="p-5 sm:p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">
            {result.title}
          </h3>
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-inner cursor-crosshair group"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* Before — full size background */}
            {beforeIsVideo ? (
              <video
                src={result.before}
                autoPlay loop muted playsInline
                className="absolute inset-0 w-full h-full object-cover"
                data-testid={`img-result-before-${index}`}
              />
            ) : (
              <img
                src={result.before}
                alt={`${result.title} before cleaning`}
                className="absolute inset-0 w-full h-full object-cover"
                data-testid={`img-result-before-${index}`}
              />
            )}

            {/* After — clipped overlay */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              {afterIsVideo ? (
                <video
                  src={result.after}
                  autoPlay loop muted playsInline
                  className="w-full h-full object-cover"
                  style={{ width: containerRef.current?.offsetWidth ?? "100%" }}
                  data-testid={`img-result-after-${index}`}
                />
              ) : (
                <img
                  src={result.after}
                  alt={`${result.title} after cleaning`}
                  className="absolute inset-0 w-full h-full object-cover"
                  data-testid={`img-result-after-${index}`}
                />
              )}
            </div>

            {/* Divider line + handle */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)] pointer-events-none"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass rounded-full p-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-white/40">
                <div className="flex gap-1.5 opacity-80">
                  <ChevronLeft className="w-4 h-4 text-primary-foreground drop-shadow-md" />
                  <ChevronRight className="w-4 h-4 text-primary-foreground drop-shadow-md" />
                </div>
              </div>
            </div>

            <div className="absolute top-3 left-3 glass text-foreground text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg pointer-events-none">
              Before
            </div>
            <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg shadow-primary/30 pointer-events-none">
              After
            </div>

            {/* Hover hint */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 glass text-white/70 text-[10px] font-medium px-3 py-1 rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
              Move cursor to reveal
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function ResultsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [, navigate] = useLocation();

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 400;
    const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);
    scrollContainerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 300);
  };

  return (
    <section id="results" className="py-20 sm:py-28 bg-card" data-testid="section-results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16 relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-4 border border-primary/20 shadow-sm" data-testid="text-results-label">
            Our Results
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mt-2 mb-6 tracking-tight">
            See the <span className="text-gradient">Pristine</span> Difference
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Real transformations across homes and properties in the North East. Every clean delivers a visible difference.
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>

            {results.map((result, index) => (
              <BeforeAfterCard key={result.title} result={result} index={index} />
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: results.length * 0.1 }}
              className="flex-shrink-0 w-full md:w-[450px]"
            >
              <Card className="h-full flex items-center justify-center p-8 glass-card border-primary/20 border bg-primary/5 cursor-pointer group" data-testid="gallery-cta-card" onClick={() => navigate("/gallery")}>
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 rounded-2xl glass flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/20 border border-primary/20"
                  >
                    <ImagePlus className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">See All Transformations</h3>
                  <p className="text-base text-muted-foreground font-light mb-6">Videos, before & afters and photos from real North East homes.</p>
                  <Button onClick={() => navigate("/gallery")} className="btn-glow gap-2 rounded-full px-6">
                    Visit the Gallery <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>

          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 z-10 p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          )}

          {canScrollRight && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 z-10 p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
}
