# Pristine Polish - Business Website

## Overview
Professional cleaning service business website for **Pristine Polish**, based in Newcastle upon Tyne / Gateshead, UK. Purely static single-page marketing site - no backend or database.

## Recent Changes
- 2026-02-11: Converted to static site - removed backend API, database, and API calls. Testimonials hardcoded. Quote form replaced with placeholder for embedded form.
- 2026-02-11: Added official business logo to navbar and footer
- 2026-02-10: Initial build - Full marketing website with hero, services, about, pricing, testimonials sections

## Project Architecture
- **Frontend**: React + Vite, static single-page site
- **Styling**: Tailwind CSS with teal/mint brand colors (hue 170)
- **No backend or database** - purely static content
- **Build output**: `dist/public` directory

### Key Files
- `client/src/pages/home.tsx` - Main page composing all sections
- `client/src/components/` - All section components (navbar, hero, services, about, pricing, testimonials, quote-section, footer)
- `client/src/components/quote-section.tsx` - Has placeholder div (#embedded-form) for user to embed their own form
- `vite.config.ts` - Build config, outputs to dist/public

### Brand
- Business: Pristine Polish
- Logo: `attached_assets/download_(60)_1770737910930.png` (house outline with sparkle)
- Colors: Teal/mint green (hue 170)
- Font: Plus Jakarta Sans
- Phone: 07940 551 427
- Email: admin@pristine-polish.co.uk
- Location: Newcastle upon Tyne / Gateshead

## User Preferences
- Business owner wants professional positioning
- Affordable, prompt service messaging
- 10% off first deep clean promotion
- Wants static site deployable to Vercel
- Will embed their own form for collecting customer details
