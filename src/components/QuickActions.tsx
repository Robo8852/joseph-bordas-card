import { MessageSquare, Phone, Share } from "lucide-react"

import { cn } from "@/lib/utils"
import { SITE_URL } from "@/lib/site"

const tileBase =
  "flex flex-col items-center gap-[7px] rounded-lg border no-underline transition-[transform,border-color,background,box-shadow] duration-200 ease-card px-1.5 pt-3.5 pb-[11px] hover:-translate-y-0.5 active:scale-[.97]"

/* No email address appears in any of the source copy, so the Email tile from the
   template was dropped rather than filled with a guess — see NOTES.md. */
const PHONE = "+19412410002"

const connectMessage = "Hi Joseph, I found your card and I'd like to connect."

function connectSmsHref() {
  // iOS wants `sms:number&body=`, Android/RFC 5724 want `sms:number?body=`.
  // iPadOS reports itself as MacIntel, hence the maxTouchPoints check.
  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  const body = encodeURIComponent(`${connectMessage} ${SITE_URL}`)
  return `sms:${PHONE}${isIOS ? "&" : "?"}body=${body}`
}

const actions = [
  { label: "Call", href: `tel:${PHONE}`, Icon: Phone },
  { label: "Text", href: `sms:${PHONE}`, Icon: MessageSquare },
  {
    label: "Connect",
    // Static iOS-style fallback for no-JS; onClick rebuilds it per-platform with the live URL.
    href: `sms:${PHONE}&body=${encodeURIComponent(connectMessage)}`,
    Icon: Share,
    primary: true,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      location.href = connectSmsHref()
    },
  },
] as const

export function QuickActions() {
  return (
    <div className="grid grid-cols-3 gap-2.5 px-gutter pt-5 pb-1.5">
      {actions.map(({ label, href, Icon, ...rest }) => {
        const primary = "primary" in rest && rest.primary
        return (
          <a
            key={label}
            href={href}
            onClick={"onClick" in rest ? rest.onClick : undefined}
            className={cn(
              tileBase,
              primary
                ? "brand-gradient border-transparent text-primary-foreground shadow-brand focus-visible:shadow-[var(--shadow-brand),0_0_0_3px_var(--ring)]"
                : "border-border bg-card-elevated text-foreground hover:border-ring"
            )}
          >
            <Icon
              className={cn("size-[22px]", primary ? "text-primary-foreground" : "text-primary")}
              strokeWidth={1.5}
            />
            <span
              className={cn(
                "text-[0.66rem] font-medium tracking-[0.16em] uppercase",
                primary
                  ? "text-[color-mix(in_srgb,var(--primary-foreground)_90%,transparent)]"
                  : "text-muted-foreground"
              )}
            >
              {label}
            </span>
          </a>
        )
      })}
    </div>
  )
}
