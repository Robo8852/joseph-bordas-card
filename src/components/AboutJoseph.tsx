import { SectionHead } from "@/components/SectionHead"

/* Bio is verbatim from the client-supplied copy (2026-08-03). */
export function AboutJoseph() {
  return (
    <section className="px-gutter pt-[34px] pb-1.5">
      <SectionHead kicker="Your Contact" title="About Joseph Bordas" />
      <div className="space-y-3 font-sans text-[0.95rem] leading-relaxed text-muted-foreground">
        <p>
          I’m the founder of Ascension Glassworks, specializing in premium impact window and door
          installations across Florida. I believe exceptional craftsmanship, honest communication,
          and attention to detail are what transform a project from good to outstanding.
        </p>
        <p>
          I’m a builder at heart—a problem solver who enjoys taking on complex projects and finding
          practical solutions that last.
        </p>
        <p>
          Outside of work, you’ll usually find me hosting music trivia, discovering new artists,
          catching live shows, or diving into conversations about business, technology, psychology,
          and lifelong learning. Curiosity drives everything I do.
        </p>
        <p>
          Whether we’re working together on your home or connecting over a shared interest, my goal
          is always the same: build trust, create value, and leave people better than I found them.
        </p>
      </div>
    </section>
  )
}
