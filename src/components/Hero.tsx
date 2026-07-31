/* No brand photography exists yet (see NOTES.md), so the hero band is plain
   ink — deliberately empty, not an unstyled placeholder. A drawn gold grid
   lived here before and was removed by request; don't reintroduce texture.

   The pb-16 offsets AvatarRing's -mt-16, which overlaps the bottom of this
   band: without it the tagline centres behind the ring and crowds it. Keep
   the two values in sync if either changes. */
export function Hero() {
  return (
    <div className="relative flex aspect-[2.2/1] w-full items-center justify-center pb-16 bg-background">
      <div className="relative z-2 px-gutter text-center">
        <div className="text-[0.62rem] font-medium tracking-[0.34em] text-primary uppercase">
          Windows &amp; Doors
        </div>
        <div className="mt-2 text-[1.05rem] leading-tight font-light tracking-[0.02em] text-foreground">
          Raising the Standard
        </div>
      </div>
    </div>
  )
}
