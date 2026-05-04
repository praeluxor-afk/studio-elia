'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'studio-elia-cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY)
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="animate-slide-in-bottom fixed bottom-0 left-0 right-0 z-[9990] border-t bg-bg-2 px-6 py-5"
      style={{ borderColor: 'rgba(200,169,110,0.15)' }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-light leading-relaxed text-muted max-w-2xl">
          Utilizziamo cookie tecnici necessari per il corretto funzionamento del sito. Nessun dato di
          profilazione. Leggi la{' '}
          <Link href="/cookie" className="text-gold underline hover:text-gold-light">
            Cookie Policy
          </Link>{' '}
          e la{' '}
          <Link href="/privacy" className="text-gold underline hover:text-gold-light">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={reject}
            className="border border-gold/40 px-5 py-2 text-xs text-gold transition-colors duration-200 hover:border-gold"
          >
            Rifiuta
          </button>
          <button
            onClick={accept}
            className="bg-gold px-5 py-2 text-xs font-medium text-bg transition-colors duration-200 hover:bg-gold-light"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  )
}
