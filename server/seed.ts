import { storage } from "./storage";
import type { InsertTestimonial } from "@shared/schema";

const seedTestimonials: InsertTestimonial[] = [
  {
    name: "Sarah Thompson",
    location: "Jesmond, Newcastle",
    rating: 5,
    text: "Pristine Polish transformed my flat before I moved out. The landlord was impressed and I got my full deposit back. Their attention to detail is incredible - they even cleaned areas I didn't think of. Highly recommend their end of tenancy service!",
    serviceType: "End of Tenancy",
  },
  {
    name: "James Robertson",
    location: "Gosforth, Newcastle",
    rating: 5,
    text: "We've been using Pristine Polish fortnightly for three months now and the house has never looked better. They're reliable, thorough, and always leave the place smelling wonderful. The free oven clean is a lovely bonus too!",
    serviceType: "Fortnightly Cleaning",
  },
  {
    name: "Amira Hassan",
    location: "Gateshead",
    rating: 5,
    text: "Called on Monday needing an urgent deep clean before family arrived on Wednesday. They had someone at my door by Tuesday morning! The quality was outstanding and the price was very fair. Fresh flowers at the end were such a thoughtful touch.",
    serviceType: "Deep Clean",
  },
  {
    name: "David Chen",
    location: "Heaton, Newcastle",
    rating: 5,
    text: "As an Airbnb host, quick turnaround cleaning is essential. Pristine Polish never lets me down. They respond quickly, clean to an impeccable standard, and my guests always comment on how spotless the place is. Worth every penny.",
    serviceType: "Domestic Cleaning",
  },
  {
    name: "Lisa Parker",
    location: "Low Fell, Gateshead",
    rating: 4,
    text: "Had a massive decluttering session done by Pristine Polish. They reorganised my entire kitchen and living room. It feels like a completely different house now! Very professional team who really listened to what I wanted.",
    serviceType: "Decluttering",
  },
  {
    name: "Mark Wilson",
    location: "Fenham, Newcastle",
    rating: 5,
    text: "I manage several student properties and Pristine Polish handles all our end of tenancy cleans. They're consistent, affordable, and always deliver a high standard. The best cleaning service I've used in the area by far.",
    serviceType: "End of Tenancy",
  },
];

export async function seedDatabase() {
  try {
    const count = await storage.getTestimonialCount();
    if (count === 0) {
      for (const testimonial of seedTestimonials) {
        await storage.createTestimonial(testimonial);
      }
      console.log("Seeded database with testimonials");
    }
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}
