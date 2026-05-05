'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY)
    if (!consent) setVisible(true)
  }, [])

  const dismiss = (value: 'accepted' | 'rejected') => {
    localStorage.setItem(STORAGE_KEY, value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="animate-slide-in-bottom fixed bottom-0 left-0 right-0 z-[9990] border-t bg-bg-2 px-6 py-5"
      style={{ borderColor: 'rgba(200,169,110,0.25)' }}
    >
      <button
        onClick={() => dismiss('rejected')}
        aria-label="Chiudi"
        className="absolute top-3 right-4 text-muted hover:text-gold transition-colors duration-200 text-lg leading-none"
      >
        ✕
      </button>

      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-light leading-relaxed text-muted max-w-2xl">
          Utilizziamo solo cookie tecnici necessari al funzionamento del sito. Nessun cookie di profilazione o tracciamento. Puoi continuare a navigare liberamente.{' '}
          <Link href="/cookie-policy" className="text-gold underline-offset-2 hover:underline">
            Cookie Policy
          </Link>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={() => dismiss('rejected')}
            className="border border-gold/40 px-5 py-2 text-xs text-gold transition-colors duration-200 hover:border-gold"
          >
            Rifiuta
          </button>
          <button
            onClick={() => dismiss('accepted')}
            className="bg-gold px-5 py-2 text-xs font-medium text-bg transition-colors duration-200 hover:bg-gold-light"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  )
}
