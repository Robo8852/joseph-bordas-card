/* Plain div + img on purpose — do NOT swap in shadcn Avatar.
   There is no photo of Joseph, so the avatar carries the brand mark instead.
   It is `logo-icon.svg` (the client-supplied gold-gradient A-mark), NOT
   `logo.svg`: the lockup's ASCENSION / GLASSWORKS wordmark is unreadable at
   128px, and Identity sets the company name in type right below this anyway.
   Note the icon is a raster PNG wrapped in an <svg>, so it cannot scale past
   its 310x225 native size — fine at 128px, but do not reuse it large.
   Being artwork rather than a headshot, it uses object-contain inside a padded,
   ink-filled circle instead of object-cover. The mark is gold on transparent,
   so it reads against the ink fill and inside the gold conic ring.

   Sizing is deliberate and hand-tuned, so don't "clean it up": the icon's own
   viewBox was retargeted to the artwork bounds (its source file carried ~24%
   empty margin), then p-3 plus a 3px lift was chosen by eye. The triangle is
   widest at its base exactly where the circle narrows, so going any larger
   (p-2) puts its feet on the ring and reads as clipping on a real phone —
   don't tighten this without checking the feet at mobile width. */
export function AvatarRing() {
  return (
    <div className="avatar-ring relative z-3 mx-auto -mt-16 h-32 w-32 rounded-full p-1 shadow-card">
      <div className="flex h-full w-full items-center justify-center rounded-full border-[3px] border-card bg-background p-3">
        <img
          className="block h-full w-full -translate-y-[3px] object-contain"
          src="/assets/logo-icon.svg"
          alt="Ascension Glassworks"
        />
      </div>
    </div>
  )
}
