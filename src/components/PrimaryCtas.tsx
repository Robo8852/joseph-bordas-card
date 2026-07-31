import { Button } from "@/components/ui/button"

export function PrimaryCtas({
  onShare,
  onAddContact,
}: {
  onShare: () => void
  onAddContact: () => void
}) {
  return (
    <div className="flex flex-col gap-2.5 px-gutter pt-[18px] pb-2">
      <div className="grid grid-cols-2 gap-2.5">
        {/* Add to Contacts is a static .vcf served next to this page (iOS Safari
            cannot download Blob-based vCards — NEVER convert this to a Blob).
            No preventDefault: the anchor's native href + download attribute does
            the real work; the toast is desktop feedback only. */}
        <Button asChild variant="brand" size="brand">
          <a href="/Joseph-Bordas.vcf" download="Joseph-Bordas.vcf" onClick={onAddContact}>
            Add to Contacts
          </a>
        </Button>
        <Button type="button" variant="brandSecondary" size="brand" onClick={onShare}>
          Share
        </Button>
      </div>
      {/* The template's "Website" button is gone: no Ascension Glassworks domain
          appears in any source. Restore it once the site is live — see NOTES.md. */}
      <Button asChild variant="brandSecondary" size="brand">
        <a href="tel:+19412410002">Schedule Your Consultation</a>
      </Button>
    </div>
  )
}
