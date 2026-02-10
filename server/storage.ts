import {
  type User,
  type InsertUser,
  type QuoteRequest,
  type InsertQuoteRequest,
  type Testimonial,
  type InsertTestimonial,
  users,
  quoteRequests,
  testimonials,
} from "@shared/schema";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createQuoteRequest(quote: InsertQuoteRequest): Promise<QuoteRequest>;
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  getTestimonialCount(): Promise<number>;
}

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);

import { eq, count } from "drizzle-orm";

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createQuoteRequest(quote: InsertQuoteRequest): Promise<QuoteRequest> {
    const [result] = await db.insert(quoteRequests).values(quote).returning();
    return result;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const [result] = await db.insert(testimonials).values(testimonial).returning();
    return result;
  }

  async getTestimonialCount(): Promise<number> {
    const [result] = await db.select({ value: count() }).from(testimonials);
    return result.value;
  }
}

export const storage = new DatabaseStorage();
