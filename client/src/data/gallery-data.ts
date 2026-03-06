/**
 * Pristine Polish — Gallery Data
 * ─────────────────────────────
 * To add new results:
 *  1. Drop files into client/public/gallery/videos/ or client/public/gallery/images/
 *  2. Add a new entry to the `galleryItems` array below.
 *
 * Types:
 *  "video-pair"  — has both a before + after video (shows side-by-side player)
 *  "video-after" — after video only (plays in full)
 *  "image"       — single after photo
 */

export type GalleryCategory = "all" | "living-room" | "kitchen" | "conservatory" | "photos";

export type GalleryItem =
  | {
      id: string;
      title: string;
      subtitle?: string;
      category: Exclude<GalleryCategory, "all">;
      type: "video-pair";
      before: string;
      after: string;
      featured?: boolean;
    }
  | {
      id: string;
      title: string;
      subtitle?: string;
      category: Exclude<GalleryCategory, "all">;
      type: "video-after";
      after: string;
      featured?: boolean;
    }
  | {
      id: string;
      title: string;
      subtitle?: string;
      category: Exclude<GalleryCategory, "all">;
      type: "image";
      src: string;
      featured?: boolean;
    };

export const galleryItems: GalleryItem[] = [
  // ── VIDEO PAIRS (before + after) ─────────────────────────────────────
  {
    id: "lr1",
    title: "Living Room",
    subtitle: "Full deep clean & restoration",
    category: "living-room",
    type: "video-pair",
    before: "/gallery/videos/lr1-before.mp4",
    after: "/gallery/videos/lr1-after.mp4",
    featured: true,
  },
  {
    id: "lr2",
    title: "Living Room",
    subtitle: "Top-to-bottom refresh",
    category: "living-room",
    type: "video-pair",
    before: "/gallery/videos/lr2-before.mp4",
    after: "/gallery/videos/lr2-after.mp4",
    featured: true,
  },
  {
    id: "k1",
    title: "Kitchen",
    subtitle: "Deep clean including oven & hob",
    category: "kitchen",
    type: "video-pair",
    before: "/gallery/videos/k1-before.mp4",
    after: "/gallery/videos/k1-after.mp4",
    featured: true,
  },
  {
    id: "con1",
    title: "Conservatory",
    subtitle: "Full interior & frame clean",
    category: "conservatory",
    type: "video-pair",
    before: "/gallery/videos/con1-before.mp4",
    after: "/gallery/videos/con1-after.mp4",
    featured: true,
  },
  {
    id: "con2",
    title: "Conservatory",
    subtitle: "Seasonal deep clean",
    category: "conservatory",
    type: "video-pair",
    before: "/gallery/videos/con2-before.mp4",
    after: "/gallery/videos/con2-after.mp4",
  },

  // ── AFTER-ONLY VIDEOS ────────────────────────────────────────────────
  {
    id: "lr3",
    title: "Living Room",
    subtitle: "Pristine finish",
    category: "living-room",
    type: "video-after",
    after: "/gallery/videos/lr3-after.mp4",
  },
  {
    id: "k3",
    title: "Kitchen",
    subtitle: "Spotless result",
    category: "kitchen",
    type: "video-after",
    after: "/gallery/videos/k3-after.mp4",
  },
  {
    id: "k4",
    title: "Kitchen",
    subtitle: "End of tenancy clean",
    category: "kitchen",
    type: "video-after",
    after: "/gallery/videos/k4-after.mp4",
  },
  {
    id: "con3",
    title: "Conservatory",
    subtitle: "Glass & frame restoration",
    category: "conservatory",
    type: "video-after",
    after: "/gallery/videos/con3-after.mp4",
  },

  // ── PHOTO RESULTS ────────────────────────────────────────────────────
  { id: "p01", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5270.jpg" },
  { id: "p02", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5271.jpg" },
  { id: "p03", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5272.jpg" },
  { id: "p04", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5273.jpg" },
  { id: "p05", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5274.jpg" },
  { id: "p06", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5275.jpg" },
  { id: "p07", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5276.jpg" },
  { id: "p08", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5277.jpg" },
  { id: "p09", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5278.jpg" },
  { id: "p10", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5279.jpg" },
  { id: "p11", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5280.jpg" },
  { id: "p12", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5281.jpg" },
  { id: "p13", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5282.jpg" },
  { id: "p14", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5283.jpg" },
  { id: "p15", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5284.jpg" },
  { id: "p16", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5285.jpg" },
  { id: "p17", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5286.jpg" },
  { id: "p18", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5287.jpg" },
  { id: "p19", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5288.jpg" },
  { id: "p20", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5289.jpg" },
  { id: "p21", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5290.jpg" },
  { id: "p22", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5291.jpg" },
  { id: "p23", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5292.jpg" },
  { id: "p24", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5293.jpg" },
  { id: "p25", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5294.jpg" },
  { id: "p26", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5295.jpg" },
  { id: "p27", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_5310.jpg" },
  { id: "p28", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_8639.jpg" },
  { id: "p29", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_8640.jpg" },
  { id: "p30", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_8641.jpg" },
  { id: "p31", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_8642.jpg" },
  { id: "p32", title: "Transformation", category: "photos", type: "image", src: "/gallery/images/IMG_8643.jpg" },
];

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "All Results" },
  { id: "living-room", label: "Living Room" },
  { id: "kitchen", label: "Kitchen" },
  { id: "conservatory", label: "Conservatory" },
  { id: "photos", label: "Photos" },
];

export const featuredHeroVideo = "/gallery/videos/lr1-after.mp4";
