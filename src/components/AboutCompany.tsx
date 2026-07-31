import { Button } from "@/components/ui/button"
import { SectionHead } from "@/components/SectionHead"

/* Copy is verbatim from "Ascension Glassworks Website Copy Master" (ABOUT SECTION). */
export function AboutCompany() {
  return (
    <section className="px-gutter pt-[34px] pb-1.5">
      <SectionHead kicker="The Company" title="Raising the Standard" />
      <div className="space-y-3 font-sans text-[0.95rem] leading-relaxed font-light text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground">
        <p>
          The window and door industry has earned a reputation for high-pressure sales, poor
          communication, and frustrating customer experiences.{" "}
          <strong>Ascension Glassworks was built to be different.</strong>
        </p>
        <p>
          Our mission is to provide homeowners with a more professional, transparent, and dependable
          approach to window and door replacement — where craftsmanship, communication, and customer
          care are never compromised.
        </p>
        <p>
          From your first consultation to your final walkthrough, our team is committed to making
          your project feel organized, informed, and stress-free.
        </p>
        <p>
          We believe professionalism matters. We believe communication matters. And we believe your
          home deserves elevated standards.
        </p>
      </div>
      {/* TODO(client): no Ascension Glassworks web domain appears in any source, so
          "Request an Estimate" dials the business line instead of opening a quote
          form. Point it at the real /contact URL once the site exists. */}
      <div className="flex flex-col gap-2.5 pt-[18px] pb-2">
        <Button asChild variant="brand" size="brand">
          <a href="tel:+19412410002">Request an Estimate</a>
        </Button>
      </div>
    </section>
  )
}
