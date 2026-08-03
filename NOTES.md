# Project Notes / TODOs

## TODO: still missing real info for this card

This card was cloned from the David Whitmire card and rebranded to **Ascension Glassworks**.
All company copy is verbatim from the client's *Ascension Glassworks Website Copy Master*
draft. The following are still unknown or unresolved and must be settled before it goes live:

- **Email address** — no email appears in any source, so the template's **Email quick-action
  tile was removed** (`src/components/QuickActions.tsx` is now a 3-up grid: Call / Text /
  Connect) and `EMAIL:` was left out of `public/Joseph-Bordas.vcf`. Add both once known.
- ~~**Joseph's job title**~~ — RESOLVED (2026-08-03): the client-supplied bio opens "I'm the
  founder of Ascension Glassworks", so the Identity badge now reads "Founder" and
  `TITLE:Founder` was added to the vCard.
- ~~**Bio**~~ — RESOLVED (2026-08-03): client supplied a personal bio; it's rendered verbatim
  in `src/components/AboutJoseph.tsx` ("Your Contact / About Joseph Bordas"), placed before
  the About Ascension section.
- ~~**Photo**~~ — RESOLVED (2026-08-03): client supplied a headshot. Square avatar crop at
  `public/assets/joseph-bordas.jpg`, untouched original at
  `reference/joseph-headshot-original.png`. Checked for AI watermarks (none found — appears
  to be a genuine studio shot). The A-mark avatar treatment it replaced is preserved in git
  history of `src/components/AvatarRing.tsx`, including its hand-tuned sizing notes.
- **Web domain / "Get a Quote" link** — no Ascension Glassworks domain appears in any source.
  Consequences, all of which should be revisited once the site exists:
  - `src/components/PrimaryCtas.tsx` — the template's "Website" button was replaced by
    "Schedule Your Consultation", which dials `tel:+19412410002`.
  - `src/components/AboutCompany.tsx` — "Request an Estimate" also dials the phone rather
    than opening a quote form.
  - `src/components/Resources.tsx` — the template's "Service Areas" and "Learning Hub" link
    buttons were dropped; the service-area list is rendered inline from the Copy Master instead.
  - `src/components/Services.tsx` — service tiles are text, not links.
  - `URL:` was omitted from the vCard.
- **Social links** — none appear in any source, so `Socials.tsx` was **deleted** and the
  `X-SOCIALPROFILE` lines were dropped from the vCard. Re-add the section when handles are known.
- **Testimonials** — the Copy Master's review section is an explicit *placeholder* with no
  actual customer quotes, so `Testimonials.tsx` was **deleted**. Restore it once real reviews
  are collected.
- **Gallery / project photography** — no Ascension Glassworks images exist in any source, and
  shipping the template's paver photos would be wrong. `Gallery.tsx` and `Lightbox.tsx` were
  **deleted**, and the hero photo was replaced by a drawn gold hairline-grid band
  (`.hero-grid` in `src/index.css`). Restore the gallery when real project photos arrive.
- **Service area wording** — the Copy Master says **Central Florida** (Sarasota, Bradenton,
  Lakewood Ranch, Venice, Tampa, St. Petersburg, Clearwater, Orlando). The older
  `proclaim/redesigns/ascension-glassworks.html` said "Florida Gulf Coast". The PDF wins
  here, but worth confirming with the client.
- **Deployed** — live at `https://joseph-bordas-card.vercel.app` (Vercel project
  `joseph-bordas-card`, auto-deploys from `main` on github.com/Robo8852/joseph-bordas-card).
  `src/lib/site.ts` and the `og:image` (a rasterized 1200x630 PNG of the lockup at
  `public/assets/og-image.png`) both point at that URL — update both if a custom domain
  is attached later. Favicon and apple-touch-icon were regenerated from the A-mark.

## Footer agency credit needs its link restored

The footer says "Card by **Proclaim Agency**" but is intentionally **plain text, not a link**
right now. The old link pointed to `https://costadelsolweb.com`, which is the wrong site for
the Proclaim Agency branding. Once the correct Proclaim Agency URL exists/is decided:

1. Edit `src/components/Footer.tsx` — wrap the agency name back in an `<a>` with
   `target="_blank" rel="noopener"` and the classes `font-medium text-primary no-underline`.
2. Remove this section from the notes.
