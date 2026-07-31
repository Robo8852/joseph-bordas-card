/* No brand photography exists yet (see NOTES.md), so the hero band is drawn:
   a faint gold hairline grid on ink under the tagline, scrimmed into the card. */
export function Hero() {
  return (
    <div className="hero-fade hero-grid relative flex aspect-[2.2/1] w-full items-center justify-center bg-background">
      <div className="relative z-2 px-gutter text-center">
        <div className="text-[0.62rem] font-medium tracking-[0.34em] text-primary uppercase">
          Windows &amp; Doors
        </div>
        <div className="mt-2 text-[1.05rem] leading-tight font-light tracking-[0.02em] text-foreground">
          Professional Window &amp; Door Installation
        </div>
      </div>
    </div>
  )
}
