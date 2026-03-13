import type { Server } from "http";
import express, { type Express } from "express";
import nodemailer from "nodemailer";

export async function registerRoutes(httpServer: Server, app: Express) {
  app.use(express.json());

  app.post("/api/quote", async (req, res) => {
    const { name, email, phone, service, propertyType, message, preferredDate } = req.body;

    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      const serviceLabels: Record<string, string> = {
        domestic: "Domestic Cleaning",
        end_of_tenancy: "End of Tenancy",
        deep_spring: "Deep / Spring Clean",
        fortnightly: "Fortnightly Clean",
        event: "Event Cleaning",
        decluttering: "Decluttering",
        reorganisation: "Reorganisation",
        general: "General Cleaning",
      };

      const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0D9488; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">New Quote Request</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0;">via pristine-polish.co.uk</p>
          </div>
          <div style="background: #f9fafb; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151; width: 140px;">Name</td><td style="padding: 8px 0; color: #111827;">${name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0D9488;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone</td><td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #0D9488;">${phone}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Service</td><td style="padding: 8px 0;">${serviceLabels[service] || service}</td></tr>
              ${propertyType ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Property</td><td style="padding: 8px 0;">${propertyType}</td></tr>` : ""}
              ${preferredDate ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Preferred Date</td><td style="padding: 8px 0;">${preferredDate}</td></tr>` : ""}
            </table>
            <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb;">
              <p style="font-weight: bold; color: #374151; margin: 0 0 8px;">Message</p>
              <p style="color: #4b5563; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            <div style="margin-top: 20px; padding: 12px; background: #ecfdf5; border-radius: 6px; border-left: 3px solid #0D9488;">
              <p style="margin: 0; font-size: 13px; color: #065f46;">Reply directly to this email to respond to ${name}.</p>
            </div>
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: `"Pristine Polish Website" <${process.env.GMAIL_USER}>`,
        to: "admin@pristine-polish.co.uk",
        replyTo: email,
        subject: `New Quote Request — ${serviceLabels[service] || service} (${name})`,
        html,
      });

      // Auto-reply to the customer
      await transporter.sendMail({
        from: `"Pristine Polish" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: "We've received your quote request — Pristine Polish",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #0D9488; padding: 24px; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 22px;">Thank you, ${name.split(" ")[0]}!</h1>
            </div>
            <div style="background: #f9fafb; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
              <p style="color: #374151;">We've received your quote request and will get back to you within <strong>24 hours</strong> with a personalised price.</p>
              <p style="color: #374151;">In the meantime, feel free to reach us on <a href="tel:07940551427" style="color: #0D9488; font-weight: bold;">07940 551 427</a>.</p>
              <p style="color: #6b7280; font-size: 14px; margin-top: 24px;">— The Pristine Polish Team</p>
            </div>
          </div>
        `,
      });

      return res.json({ success: true });
    } catch (error) {
      console.error("Email error:", error);
      return res.status(500).json({ error: "Failed to send email" });
    }
  });
}
