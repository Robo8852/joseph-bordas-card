import { useCallback } from 'react'

import { AboutCompany } from '@/components/AboutCompany'
import { AboutJoseph } from '@/components/AboutJoseph'
import { AvatarRing } from '@/components/AvatarRing'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Identity } from '@/components/Identity'
import { PrimaryCtas } from '@/components/PrimaryCtas'
import { QuickActions } from '@/components/QuickActions'
import { Resources } from '@/components/Resources'
import { Services } from '@/components/Services'
import { Toast, useToast } from '@/components/Toast'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { SITE_URL } from '@/lib/site'

/* Share — three tiers: native sheet, async clipboard, execCommand fallback. */
async function shareCard(showToast: (message: string) => void) {
  const url = SITE_URL
  const data = {
    title: 'Joseph Bordas — Ascension Glassworks',
    text: 'Connect with Joseph Bordas of Ascension Glassworks',
    url,
  }
  if (navigator.share) {
    try {
      await navigator.share(data)
      return
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') return // user dismissed the sheet
      // any other failure falls through to the clipboard path
    }
  }
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(url)
      showToast('Link copied!')
      return
    } catch {
      // insecure context or permission denied — fall through
    }
  }
  let copied = false
  try {
    const ta = document.createElement('textarea')
    ta.value = url
    ta.setAttribute('readonly', '')
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    copied = document.execCommand('copy')
    ta.remove()
  } catch {
    copied = false
  }
  showToast(copied ? 'Link copied!' : url)
}

/* Sections dropped from the template because no source content exists for them
   (see NOTES.md): Socials, Testimonials, Gallery + Lightbox. */
function App() {
  const { toast, showToast } = useToast()

  const handleShare = useCallback(() => {
    shareCard(showToast).catch(() => {}) // swallow rejections — never unhandled
  }, [showToast])

  const handleAddContact = useCallback(() => {
    showToast('Contact ready — open the download')
  }, [showToast])

  return (
    <>
      <div className="relative mx-auto min-h-dvh max-w-[480px] bg-card shadow-phone">
        <Hero />
        <AvatarRing />
        <Identity />
        <QuickActions />
        <PrimaryCtas onShare={handleShare} onAddContact={handleAddContact} />
        <AboutJoseph />
        <AboutCompany />
        <Services />
        <WhyChooseUs />
        <Resources onShare={handleShare} />
        <Footer />
      </div>
      <Toast message={toast.message} visible={toast.visible} />
    </>
  )
}

export default App
