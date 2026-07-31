import { Button } from "@/components/ui/button"
import { SectionHead } from "@/components/SectionHead"

/* Areas verbatim from the Copy Master SERVICE AREA SECTION. The template's
   "Service Areas" and "Learning Hub" link buttons are gone — no domain exists
   to link to yet (see NOTES.md), so the areas are rendered inline instead. */
const areas = [
  "Sarasota",
  "Bradenton",
  "Lakewood Ranch",
  "Venice",
  "Tampa",
  "St. Petersburg",
  "Clearwater",
  "Orlando",
] as const

export function Resources({ onShare }: { onShare: () => void }) {
  return (
    <section className="px-gutter pt-[34px] pb-1.5">
      <SectionHead kicker="Where We Work" title="Proudly Serving Central Florida" />
      <p className="text-center font-sans text-[0.95rem] font-light leading-relaxed text-muted-foreground">
        Ascension Glassworks proudly serves homeowners throughout Central Florida with professional
        window and door installation services.
      </p>
      <ul className="mt-4 flex flex-wrap justify-center gap-2">
        {areas.map((area) => (
          <li
            key={area}
            className="rounded-full border border-border px-3 py-1 text-[0.62rem] font-medium tracking-[0.12em] text-foreground/80 uppercase"
          >
            {area}
          </li>
        ))}
        <li className="rounded-full border border-border px-3 py-1 text-[0.62rem] font-medium tracking-[0.12em] text-muted-foreground uppercase">
          &amp; Surrounding Areas
        </li>
      </ul>
      <div className="flex flex-col gap-2.5 pt-[22px] pb-2">
        <Button type="button" variant="brand" size="brand" onClick={onShare}>
          Share My Info
        </Button>
      </div>
    </section>
  )
}
