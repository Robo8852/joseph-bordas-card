import { SectionHead } from "@/components/SectionHead"

/* The template's services grid was photo tiles. There is no Ascension Glassworks
   project photography in any source, so these are text tiles: service name from
   the Copy Master SERVICES SECTION, with its own product bullets underneath.
   They are not links — no web domain exists to link to yet (see NOTES.md). */
const services = [
  {
    label: "Window Replacement",
    blurb:
      "Professionally installed windows designed for beauty, efficiency, durability, and Florida weather performance.",
    items: [
      "Impact Windows",
      "Energy Efficient Windows",
      "Vinyl Windows",
      "Modern Window Designs",
      "Custom Configurations",
      "Hurricane-Rated Windows",
    ],
  },
  {
    label: "Exterior Door Installation",
    blurb:
      "Enhance curb appeal, security, and performance with expertly installed exterior doors tailored to your home.",
    items: [
      "Entry Doors",
      "Sliding Glass Doors",
      "French Doors",
      "Patio Doors",
      "Impact Doors",
      "Custom Door Solutions",
    ],
  },
  {
    label: "Impact Products",
    blurb:
      "Impact-rated windows and doors engineered to withstand Florida storms while improving efficiency and security.",
    items: [],
  },
] as const

export function Services() {
  return (
    <section className="px-gutter pt-[34px] pb-1.5">
      <SectionHead kicker="What We Do" title="Windows &amp; Doors" />
      <div className="flex flex-col gap-3">
        {services.map(({ label, blurb, items }) => (
          <div
            key={label}
            className="tile relative overflow-hidden rounded-lg border border-border bg-card-elevated px-5 pt-4 pb-[18px]"
          >
            <b className="tile-rule relative inline-block pb-1.5 text-[0.72rem] font-medium tracking-[0.16em] text-primary uppercase">
              {label}
            </b>
            <p className="mt-2.5 font-sans text-[0.95rem] leading-relaxed text-muted-foreground">
              {blurb}
            </p>
            {items.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-2.5 py-1 text-[0.62rem] font-medium tracking-[0.1em] text-foreground/80 uppercase"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
