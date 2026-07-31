// Canonical public URL of the card. Used in the Connect SMS and Share actions so
// shared links never leak per-deployment Vercel URLs (which carry the team name
// and sit behind Vercel's deployment-protection login).
// TODO(deploy): this card has NOT been deployed — the URL below is a guess at the
// eventual Vercel project name. Update it once the card is live. See NOTES.md.
export const SITE_URL = "https://joseph-bordas-card.vercel.app"
