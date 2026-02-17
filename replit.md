# Pristine Polish - Business Website

## Overview
Professional cleaning service business website for **Pristine Polish**, serving the North East, UK. Purely static single-page marketing site - no backend or database.

## Recent Changes
- 2026-02-11: Major content update - About section rewritten to 3rd person, removed personal owner references, location changed to "North East"
- 2026-02-11: Removed same-day service, added free in-home consultation
- 2026-02-11: Pricing updated - fortnightly is £100/month for 2 visits (not per visit), promo changed to 10% off first 3 months
- 2026-02-11: Removed window cleaning from services and pricing (requires separate insurance)
- 2026-02-11: Testimonials reduced to single review from Mr & Mrs Johnson
- 2026-02-11: Added Team section with 5 generated cleaner images (no faces, folded arms, teal uniforms)
- 2026-02-11: Added eco-friendly/allergen check and no-extra-cost-for-overtime highlights
- 2026-02-11: Converted to static site - removed backend API, database, and API calls
- 2026-02-11: Added official business logo to navbar and footer
- 2026-02-11: Added vercel.json for Vercel deployment config
- 2026-02-10: Initial build - Full marketing website

## Project Architecture
- **Frontend**: React + Vite, static single-page site
- **Styling**: Tailwind CSS with teal/mint brand colors (hue 170)
- **No backend or database** - purely static content
- **Build output**: `dist/public` directory
- **Deployment**: vercel.json configured (build: `npm run build`, output: `dist/public`)

### Key Files
- `client/src/pages/home.tsx` - Main page composing all sections
- `client/src/components/` - All section components (navbar, hero, services, about, team, pricing, testimonials, quote-section, footer)
- `client/src/components/quote-section.tsx` - Has placeholder div (#embedded-form) for user to embed their own form
- `client/src/components/team-section.tsx` - Team photos section (5 cleaner images)
- `vite.config.ts` - Build config, outputs to dist/public
- `vercel.json` - Vercel deployment configuration

### Brand
- Business: Pristine Polish
- Logo: `attached_assets/download_(60)_1770737910930.png` (house outline with sparkle)
- Colors: Teal/mint green (hue 170)
- Font: Plus Jakarta Sans
- Phone: 07940 551 427
- Email: admin@pristine-polish.co.uk
- Location: North East (previously Newcastle upon Tyne / Gateshead)

## User Preferences
- Business owner wants professional positioning
- All copy must be 3rd person, customer-focused - no personal owner references
- Affordable, prompt service messaging
- 10% off first 3 months promotion (subscription)
- No window cleaning (needs separate insurance/council approval)
- Fortnightly = £100/month for 2 visits, no extra cost if job runs over time
- Free in-home consultation for tailored service
- Premium/eco-friendly products & allergen check
- Wants static site deployable to Vercel
- Will embed their own form for collecting customer details
