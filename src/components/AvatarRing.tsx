/* Plain div + img on purpose — do NOT swap in shadcn Avatar.
   Client-supplied headshot (2026-08-03), object-cover in the gold conic ring.
   This replaces the interim A-mark treatment — if the logo ever needs to come
   back here, its hand-tuned sizing notes are in git history for this file. */
export function AvatarRing() {
  return (
    <div className="avatar-ring relative z-3 mx-auto -mt-16 h-32 w-32 rounded-full p-1 shadow-card">
      <div className="h-full w-full overflow-hidden rounded-full border-[3px] border-card">
        <img
          className="block h-full w-full object-cover"
          src="/assets/joseph-bordas.jpg"
          alt="Joseph Bordas"
        />
      </div>
    </div>
  )
}
