export function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-[18px] text-center">
      <div className="text-[0.62rem] font-medium tracking-[0.3em] text-primary uppercase">
        {kicker}
      </div>
      <h2 className="mt-2 text-[1.25rem] font-light tracking-[0.06em] uppercase">{title}</h2>
      <div className="rule-gradient mx-auto mt-3 h-px w-16" />
    </div>
  )
}
