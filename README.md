# Joseph Bordas — Digital Business Card

A single-page digital business card for **Joseph Bordas** of **Ascension Glassworks LLC**, a
window and door installation company serving Central Florida. The page is a phone-shaped
black-and-gold card with quick contact actions (call / text / connect), an about section, a
services list, company value props, the service area, and share / add-to-contacts CTAs.

Adapted from the David Whitmire card template. All company copy is verbatim from the client's
*Ascension Glassworks Website Copy Master* draft; branding follows the Ascension Glassworks
brand sheet (`/home/owner/ascension-glassworks`).

## Tech stack

- [Vite](https://vite.dev/) + [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first config via `@theme` in `src/index.css` — there is no `tailwind.config.js`)
- [shadcn/ui](https://ui.shadcn.com/) (radix-nova preset; `Button` extended with `brand` / `brandSecondary` / `brandGhost` variants)
- [lucide-react](https://lucide.dev/) for the quick-action icons
- Fonts: Montserrat (Light/Medium — lockup and headings) + Cormorant Garamond (body/italic) via Google Fonts
- Palette: `#0B0B0B` ink / `#C8A96A` gold / `#FFFFFF` bone

## Commands

```sh
npm install       # once
npm run dev       # dev server with HMR
npm run build     # type-check (tsc -b) + production build to dist/
npm run preview   # serve the production build locally
```

## Notes

- **vCard**: `public/Joseph-Bordas.vcf` must stay a real static file served next to the page —
  iOS Safari cannot download Blob-generated vCards, so the "Add to Contacts" button is a plain
  anchor with a `download` attribute.
- **Logo assets**: `public/assets/logo.svg` is the brand's full stacked lockup (600×540 viewBox,
  copied verbatim from the brand kit) and is what `og:image` points at.
  `public/assets/logo-mark.svg` is the A-mark cropped out of it — the lockup's wordmark is
  unreadable at the 128px avatar size, so the avatar uses the mark and `Identity` sets the
  company name in type directly beneath. Being artwork rather than a headshot, `AvatarRing`
  uses `object-contain` inside a padded, ink-filled circle.
- **No photography**: there is no Ascension Glassworks imagery, so the hero is a drawn gold
  hairline grid (`.hero-grid`) and the services grid is text tiles, not photos.
- **Open TODOs** (email, job title, domain, socials, testimonials, gallery, deploy URL) are all
  tracked in `NOTES.md`. Read it before shipping.
