import { SectionHead } from "@/components/SectionHead"

/* Replaces the template's "About David" biographical section. We know nothing
   about Joseph beyond his name, so this stays company-focused: verbatim from the
   Copy Master WHY CHOOSE US SECTION. */
const reasons = [
  {
    title: "Clear Communication",
    body: "We believe homeowners should never be left wondering what’s happening with their project.",
  },
  {
    title: "Professionalism",
    body: "From consultation to installation, we prioritize punctuality, organization, cleanliness, and respect.",
  },
  {
    title: "No High-Pressure Sales",
    body: "Our role is to educate and guide — not pressure you into decisions.",
  },
  {
    title: "Elevated Craftsmanship",
    body: "Attention to detail matters. We take pride in delivering installations that look clean, perform properly, and stand the test of time.",
  },
  {
    title: "Respect for Your Home",
    body: "We treat every home with care through organized workspaces, surface protection, and thorough cleanup.",
  },
  {
    title: "Dependable Support",
    body: "We stand behind our work and remain available after installation for continued support and service.",
  },
] as const

export function WhyChooseUs() {
  return (
    <section className="px-gutter pt-[34px] pb-1.5">
      <SectionHead kicker="Why Homeowners Choose Us" title="The Ascension Difference" />
      <div className="divide-y divide-border border-y border-border">
        {reasons.map(({ title, body }) => (
          <div key={title} className="py-4">
            <div className="text-[0.7rem] font-medium tracking-[0.16em] text-primary uppercase">
              {title}
            </div>
            <p className="mt-1.5 font-sans text-[0.95rem] leading-relaxed text-muted-foreground">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
