# Vigya Portfolio (Next.js + Tailwind + Framer Motion)

A minimal, high-contrast portfolio featuring **Data** and **Product** work.
Design inspiration: unseen.co (bold, minimal, kinetic) and sheldonc.ca (clean, readable).

## Quickstart

```bash
npm install
npm run dev
```

Open http://localhost:3000

## File Structure

```
vigya-portfolio/
  app/
    about/
      page.tsx
    contact/
      page.tsx
    data/
      page.tsx
    product/
      page.tsx
    globals.css
    layout.tsx
    page.tsx
    robots.txt
    sitemap.xml
  components/
    CaseCard.tsx
    Footer.tsx
    MarqueeText.tsx
    Navbar.tsx
    Section.tsx
    SpotlightGrid.tsx
    VideoBackground.tsx
  public/
    og.png
    videos/
      README.txt        <-- Put your videos here:
                          - background1.mp4
                          - background2.mp4
  package.json
  tailwind.config.ts
  postcss.config.js
  next.config.mjs
  tsconfig.json
  .eslintrc.json
  next-env.d.ts
  README.md
```

## Add Your Background Videos

1. Create compressed, muted, looping MP4 files (H.264 preferred).
2. Place them at:
   - `public/videos/background1.mp4`
   - `public/videos/background2.mp4`
3. They are referenced in:
   - `app/page.tsx` → `/videos/background1.mp4`
   - `app/product/page.tsx` → `/videos/background1.mp4`
   - `app/data/page.tsx` → `/videos/background2.mp4`

> If you want different videos per section, just change the `src` passed to `<VideoBackground />`.

## Edit Content

- **Home**: `app/page.tsx`
- **Data**: `app/data/page.tsx`
- **Product**: `app/product/page.tsx`
- **About**: `app/about/page.tsx`
- **Contact**: `app/contact/page.tsx`
- **Navbar/Footer**: `components/Navbar.tsx` & `components/Footer.tsx`
- **Colors/Theme**: `tailwind.config.ts`

## Deploy to Vercel

1. Push to a GitHub repo (e.g., `VigyaAwasthi/portfolio`).
2. In Vercel, **New Project** → import the repo → Framework preset **Next.js**.
3. Build command: `next build` (auto). Output: `.next` (auto).
4. Set a custom domain if you want.

## Notes

- Fonts are via `next/font` (Inter). Change in `app/layout.tsx`.
- Styling aims for high contrast, big type, and subtle motion.
- Add analytics (`Vercel Analytics`) if desired.
