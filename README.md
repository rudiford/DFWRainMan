# Rain Man Irrigation — dfwrainman.com

Website for Rain Man Irrigation, a residential landscaping and irrigation company serving the Dallas-Fort Worth area.

**Owner:** Andrew Triplett
**Domain:** dfwrainman.com
**Stack:** Next.js 14 (App Router) + Tailwind CSS — static export ready for Vercel

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
```

Generates a static export in the `out/` directory, ready to deploy on Vercel or any static host.

## Adding Real Photos

Photos are currently placeholder colored divs. To replace them:

1. Add images to `public/images/` (WebP format recommended, max 1200px wide)
2. Update the placeholder `div` elements in each component with `<Image>` components:
   ```tsx
   import Image from "next/image";
   <Image src="/images/your-photo.webp" alt="Description" fill className="object-cover" />
   ```

### Photo checklist by section:
- **Hero** (`components/Hero.tsx`) — Full-width landscape/irrigation photo (1920×1080)
- **Services** (`components/Services.tsx`) — One photo per service card (800×600)
- **Gallery** (`components/Gallery.tsx`) — Replace placeholder items with real project photos
- **About** (`components/About.tsx`) — Owner photo (Andrew Triplett)

## Updating Content

| What | File |
|------|------|
| Phone number | Search for `214.333.xxxx` across all files |
| Email address | Search for `info@dfwrainman.com` |
| Services descriptions | `components/Services.tsx` |
| Gallery photos | `components/Gallery.tsx` |
| About text | `components/About.tsx` |
| City list | `components/ServiceArea.tsx` |
| SEO metadata | `app/layout.tsx` |

## Contact Form

The contact form currently simulates submission. To wire it up:

- **Netlify Forms:** Add `netlify` attribute to `<form>` tag
- **Formspree:** POST to your Formspree endpoint
- **Custom API:** Create an `app/api/contact/route.ts` endpoint

## Deploying to Vercel

1. Push to GitHub
2. Import the repository in Vercel
3. Vercel auto-detects Next.js — no config needed
4. Set custom domain to `dfwrainman.com`

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Green Primary | `#2D5A27` | Buttons, accents, headings |
| Green Dark | `#1E3D1A` | Hover states |
| Charcoal | `#2C2C2C` | Body text |
| Off-white | `#F5F5F0` | Alternate section backgrounds |
| Cream | `#F5F0E8` | Subtle accent backgrounds |
