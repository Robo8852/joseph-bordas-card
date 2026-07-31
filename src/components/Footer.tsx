export function Footer() {
  return (
    <footer className="px-gutter pt-9 pb-[30px] text-center text-[0.72rem] tracking-[0.08em] text-muted-foreground">
      <div className="mb-4 font-serif text-[1.05rem] tracking-normal text-primary italic">
        Clearly Raising Standards.
      </div>
      <div>© {new Date().getFullYear()} Ascension Glassworks LLC · Central Florida</div>
      <div className="mt-2 opacity-70">
        {/* Deliberately not a link yet — see NOTES.md at the repo root. */}
        Card by <span className="font-medium text-primary">Proclaim Agency</span>
      </div>
    </footer>
  )
}
