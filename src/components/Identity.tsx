export function Identity() {
  return (
    <div className="relative z-2 px-gutter pt-4 pb-1.5 text-center">
      {/* Montserrat Light + wide tracking — the brand's "black-tie" register. */}
      <h1 className="text-[1.55rem] font-light tracking-[0.12em] uppercase">Joseph Bordas</h1>
      <div className="mt-1.5 text-sm font-medium tracking-[0.2em] text-primary uppercase">
        Ascension Glassworks
      </div>
      <div className="mt-3 inline-block rounded-full border border-border px-3.5 py-1 text-[0.68rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
        Founder
      </div>
    </div>
  )
}
