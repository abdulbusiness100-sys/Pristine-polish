import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteRequestSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/testimonials", async (_req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });

  app.post("/api/quotes", async (req, res) => {
    try {
      const data = insertQuoteRequestSchema.parse(req.body);
      const quote = await storage.createQuoteRequest(data);
      res.status(201).json(quote);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: fromZodError(error).message });
      } else {
        res.status(500).json({ message: "Failed to submit quote request" });
      }
    }
  });

  return httpServer;
}
