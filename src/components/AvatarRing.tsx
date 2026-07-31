/* Plain div + img on purpose — do NOT swap in shadcn Avatar.
   There is no photo of Joseph, so the avatar carries the brand mark instead.
   It is `logo-mark.svg` (the A-mark cropped out of the full lockup), NOT
   `logo.svg`: the lockup's ASCENSION / GLASSWORKS wordmark is unreadable at
   128px, and Identity sets the company name in type right below this anyway.
   Being artwork rather than a headshot, it uses object-contain inside a padded,
   ink-filled circle instead of object-cover. The mark is gold on transparent,
   so it reads against the ink fill and inside the gold conic ring. */
export function AvatarRing() {
  return (
    <div className="avatar-ring relative z-3 mx-auto -mt-16 h-32 w-32 rounded-full p-1 shadow-card">
      <div className="flex h-full w-full items-center justify-center rounded-full border-[3px] border-card bg-background p-6">
        <img
          className="block h-full w-full object-contain"
          src="/assets/logo-mark.svg"
          alt="Ascension Glassworks"
        />
      </div>
    </div>
  )
}
