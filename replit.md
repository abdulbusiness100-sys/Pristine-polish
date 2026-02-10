# Pristine Polish - Business Website

## Overview
Professional cleaning service business website for **Pristine Polish**, based in Newcastle upon Tyne / Gateshead, UK. Single-page marketing site with quote request functionality.

## Recent Changes
- 2026-02-10: Initial build - Full marketing website with hero, services, about, pricing, testimonials, and quote request form

## Project Architecture
- **Frontend**: React + Vite, single-page scroll site with sections
- **Backend**: Express API for quote requests and testimonials
- **Database**: PostgreSQL (Drizzle ORM) - stores quote requests and testimonials
- **Styling**: Tailwind CSS with teal/mint brand colors (hue 170)

### Key Files
- `client/src/pages/home.tsx` - Main page composing all sections
- `client/src/components/` - All section components (navbar, hero, services, about, pricing, testimonials, quote-section, footer)
- `server/routes.ts` - API routes (/api/testimonials GET, /api/quotes POST)
- `server/seed.ts` - Seeds testimonials on first run
- `shared/schema.ts` - Database schema (quoteRequests, testimonials tables)

### Brand
- Business: Pristine Polish
- Colors: Teal/mint green (hue 170)
- Font: Plus Jakarta Sans
- Phone: 07940 551 427
- Email: admin@pristine-polish.co.uk
- Location: Newcastle upon Tyne / Gateshead

## User Preferences
- Business owner wants professional positioning
- Affordable, prompt service messaging
- 10% off first deep clean promotion
