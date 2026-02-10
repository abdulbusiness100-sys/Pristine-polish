import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const quoteRequests = pgTable("quote_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  serviceType: text("service_type").notNull(),
  propertySize: text("property_size").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const testimonials = pgTable("testimonials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  location: text("location").notNull(),
  rating: integer("rating").notNull(),
  text: text("text").notNull(),
  serviceType: text("service_type").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertQuoteRequestSchema = createInsertSchema(quoteRequests).omit({
  id: true,
  createdAt: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertQuoteRequest = z.infer<typeof insertQuoteRequestSchema>;
export type QuoteRequest = typeof quoteRequests.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
