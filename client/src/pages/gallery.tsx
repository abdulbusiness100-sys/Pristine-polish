import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, Play, ChevronLeft, ChevronRight, ImageIcon, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { galleryItems, galleryCategories, featuredHeroVideo, GalleryItem, GalleryCategory } from "@/data/gallery-data";

// ─── Lightbox ────────────────────────────────────────────────────────────────

function Lightbox({ item, items, onClose, onPrev, onNext }: {
  item: GalleryItem;
  items: GalleryItem[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const afterRef = useRef<HTMLVideoElement>(null);
  const beforeRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const isPair = item.type === "video-pair";
  const currentIndex = items.indexOf(item);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 flex-shrink-0" onClick={e => e.stopPropagation()}>
        <div>
          <span className="text-white/40 text-xs uppercase tracking-widest font-semibold">
            {currentIndex + 1} / {items.length}
          </span>
          <p className="text-white font-semibold text-lg leading-tight">{item.title}</p>
          {item.subtitle && <p className="text-white/50 text-sm">{item.subtitle}</p>}
        </div>
        <div className="flex items-center gap-3">
          <button onClick={onClose} className="glass rounded-full p-2.5 text-white/80 hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Media */}
      <div className="flex-1 flex items-center justify-center px-4 gap-4 min-h-0 overflow-hidden" onClick={e => e.stopPropagation()}>
        {isPair ? (
          // Side-by-side before / after
          <div className="flex gap-3 w-full max-w-6xl h-full max-h-[75vh]">
            <div className="flex-1 relative rounded-2xl overflow-hidden">
              <div className="absolute top-3 left-3 z-10 glass text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Before</div>
              <video
                ref={beforeRef}
                src={(item as Extract<GalleryItem, { type: "video-pair" }>).before}
                autoPlay loop muted playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 relative rounded-2xl overflow-hidden">
              <div className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg shadow-primary/40">After</div>
              <video
                ref={afterRef}
                src={(item as Extract<GalleryItem, { type: "video-pair" }>).after}
                autoPlay loop muted playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ) : item.type === "video-after" ? (
          <video
            ref={afterRef}
            src={item.after}
            autoPlay loop muted playsInline
            className="max-w-4xl w-full max-h-[75vh] rounded-2xl object-contain"
          />
        ) : (
          <img
            src={item.src}
            alt={item.title}
            className="max-w-4xl w-full max-h-[75vh] rounded-2xl object-contain"
          />
        )}
      </div>

      {/* Nav arrows */}
      <div className="flex items-center justify-center gap-6 py-5 flex-shrink-0" onClick={e => e.stopPropagation()}>
        <button
          onClick={onPrev}
          disabled={currentIndex <= 0}
          className="glass rounded-full p-3 text-white/70 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-white/50 text-sm font-medium tabular-nums min-w-[60px] text-center">
          {currentIndex + 1} <span className="text-white/30">/</span> {items.length}
        </span>
        <button
          onClick={onNext}
          disabled={currentIndex >= items.length - 1}
          className="glass rounded-full p-3 text-white/70 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}

// ─── Video Pair Card ─────────────────────────────────────────────────────────

function VideoPairCard({ item, onClick, index }: { item: GalleryItem & { type: "video-pair" }; onClick: () => void; index: number }) {
  const [hovered, setHovered] = useState(false);
  const beforeRef = useRef<HTMLVideoElement>(null);
  const afterRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (hovered) {
      beforeRef.current?.play();
      afterRef.current?.play();
    } else {
      beforeRef.current?.pause();
      afterRef.current?.pause();
    }
  }, [hovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, type: "spring", stiffness: 260, damping: 22 }}
      whileHover={{ y: -6, scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClick}
      className="cursor-pointer"
    >
      <div className="glass-card rounded-2xl overflow-hidden border-white/10 border shadow-[0_8px_30px_rgb(0,0,0,0.15)] group">
        {item.featured && (
          <div className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg shadow-primary/30">
            Featured
          </div>
        )}
        <div className="grid grid-cols-2 gap-0.5 relative">
          <div className="relative aspect-[4/3] overflow-hidden">
            <div className="absolute top-2 left-2 z-10 glass text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">Before</div>
            <video ref={beforeRef} src={item.before} muted playsInline loop preload="metadata"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <div className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">After</div>
            <video ref={afterRef} src={item.after} muted playsInline loop preload="metadata"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="glass rounded-full p-3 shadow-xl border border-white/30">
              <Play className="w-5 h-5 text-white fill-white" />
            </div>
          </div>
        </div>
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-foreground font-semibold text-sm">{item.title}</p>
              {item.subtitle && <p className="text-muted-foreground text-xs mt-0.5">{item.subtitle}</p>}
            </div>
            <div className="glass rounded-full px-2.5 py-1 flex items-center gap-1.5">
              <Film className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-semibold text-foreground/70 uppercase tracking-wide">Before & After</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Video After Card ─────────────────────────────────────────────────────────

function VideoAfterCard({ item, onClick, index }: { item: GalleryItem & { type: "video-after" }; onClick: () => void; index: number }) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (hovered) videoRef.current?.play();
    else videoRef.current?.pause();
  }, [hovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, type: "spring", stiffness: 260, damping: 22 }}
      whileHover={{ y: -6, scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClick}
      className="cursor-pointer"
    >
      <div className="glass-card rounded-2xl overflow-hidden border-white/10 border shadow-[0_8px_30px_rgb(0,0,0,0.15)] group">
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">After</div>
          <video ref={videoRef} src={item.after} muted playsInline loop preload="metadata"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="glass rounded-full p-3 shadow-xl border border-white/30">
              <Play className="w-5 h-5 text-white fill-white" />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 flex items-center justify-between">
          <div>
            <p className="text-foreground font-semibold text-sm">{item.title}</p>
            {item.subtitle && <p className="text-muted-foreground text-xs mt-0.5">{item.subtitle}</p>}
          </div>
          <div className="glass rounded-full px-2.5 py-1 flex items-center gap-1.5">
            <Film className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-semibold text-foreground/70 uppercase tracking-wide">Video</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Image Card ───────────────────────────────────────────────────────────────

function ImageCard({ item, onClick, index }: { item: GalleryItem & { type: "image" }; onClick: () => void; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.04, type: "spring", stiffness: 260, damping: 22 }}
      whileHover={{ y: -6, scale: 1.02 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <div className="glass-card rounded-2xl overflow-hidden border-white/10 border shadow-[0_8px_30px_rgb(0,0,0,0.1)] group">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={item.src} alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="flex items-center gap-1.5">
              <ImageIcon className="w-3.5 h-3.5 text-white/80" />
              <span className="text-white/80 text-xs font-medium">View Full</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Gallery Page ─────────────────────────────────────────────────────────────

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const [filterSticky, setFilterSticky] = useState(false);

  // Scroll to top on mount
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Set hero video playback speed to 1.5x
  useEffect(() => {
    const video = heroVideoRef.current;
    if (video) video.playbackRate = 1.5;
  }, []);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const filtered = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter(i => i.category === activeCategory);

  const lightboxFiltered = lightboxItem ? filtered : [];
  const lightboxIndex = lightboxItem ? lightboxFiltered.indexOf(lightboxItem) : -1;

  const openLightbox = useCallback((item: GalleryItem) => setLightboxItem(item), []);
  const closeLightbox = useCallback(() => setLightboxItem(null), []);
  const prevItem = useCallback(() => {
    if (lightboxIndex > 0) setLightboxItem(lightboxFiltered[lightboxIndex - 1]);
  }, [lightboxIndex, lightboxFiltered]);
  const nextItem = useCallback(() => {
    if (lightboxIndex < lightboxFiltered.length - 1) setLightboxItem(lightboxFiltered[lightboxIndex + 1]);
  }, [lightboxIndex, lightboxFiltered]);

  useEffect(() => {
    const el = filterRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([e]) => setFilterSticky(!e.isIntersecting), { threshold: 1, rootMargin: "-1px 0px 0px 0px" });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <div ref={heroRef} className="relative h-[90vh] flex items-end overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <video
            ref={heroVideoRef}
            src={featuredHeroVideo}
            autoPlay loop muted playsInline
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </motion.div>

        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span className="text-white/90 text-sm font-medium">Real results. Real homes.</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-4">
              The Pristine<br />
              <span className="text-gradient">Transformation</span><br />
              Gallery
            </h1>
            <p className="text-white/60 text-lg max-w-lg font-light">
              Every video, every photo — a real North East home we've had the privilege of restoring.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 right-8 flex flex-col items-center gap-1.5 text-white/30"
        >
          <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </div>

      {/* ── Filter Bar ── */}
      <div ref={filterRef} className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 py-3 overflow-x-auto scrollbar-none">
            {galleryCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {cat.label}
                <span className={`ml-2 text-xs font-normal ${activeCategory === cat.id ? "text-primary-foreground/70" : "text-muted-foreground/60"}`}>
                  {cat.id === "all" ? galleryItems.length : galleryItems.filter(i => i.category === cat.id).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Video pairs — featured, 2-col */}
            {filtered.some(i => i.type === "video-pair") && (
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-5 bg-primary rounded-full" />
                  <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Before & After</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {filtered.filter(i => i.type === "video-pair").map((item, i) => (
                    <VideoPairCard key={item.id} item={item as GalleryItem & { type: "video-pair" }} onClick={() => openLightbox(item)} index={i} />
                  ))}
                </div>
              </div>
            )}

            {/* After-only videos — 3-col */}
            {filtered.some(i => i.type === "video-after") && (
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-5 bg-emerald-500 rounded-full" />
                  <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Video Results</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filtered.filter(i => i.type === "video-after").map((item, i) => (
                    <VideoAfterCard key={item.id} item={item as GalleryItem & { type: "video-after" }} onClick={() => openLightbox(item)} index={i} />
                  ))}
                </div>
              </div>
            )}

            {/* Photos — auto-fill masonry-style columns */}
            {filtered.some(i => i.type === "image") && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-5 bg-teal-400 rounded-full" />
                  <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Photo Gallery</span>
                </div>
                <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
                  {filtered.filter(i => i.type === "image").map((item, i) => (
                    <div key={item.id} className="break-inside-avoid">
                      <ImageCard item={item as GalleryItem & { type: "image" }} onClick={() => openLightbox(item)} index={i} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {filtered.length === 0 && (
              <div className="text-center py-24 text-muted-foreground">No results in this category yet.</div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Quote CTA ── */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-emerald-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-5 tracking-tight">
              Want results like these?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 font-light">
              Every transformation you've seen started with a free consultation. Yours is next.
            </p>
            <Button size="lg" className="btn-glow h-14 px-10 text-base rounded-full" onClick={() => window.location.href = "/#booking"}>
              Book Your Free Consultation
            </Button>
          </motion.div>
        </div>
      </div>

      <Footer />

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxItem && (
          <Lightbox
            item={lightboxItem}
            items={lightboxFiltered}
            onClose={closeLightbox}
            onPrev={prevItem}
            onNext={nextItem}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
