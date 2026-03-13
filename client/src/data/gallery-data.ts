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
