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

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="animate-slide-in-bottom fixed bottom-0 left-0 right-0 z-[9990] border-t bg-bg-2 px-6 py-5"
      style={{ borderColor: 'rgba(200,169,110,0.25)' }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-light leading-relaxed text-muted max-w-2xl">
          Utilizziamo solo cookie tecnici necessari al funzionamento del sito. Nessun cookie di profilazione o tracciamento.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <Link
            href="/cookie-policy"
            className="border border-gold/40 px-5 py-2 text-xs text-gold transition-colors duration-200 hover:border-gold"
          >
            Scopri di più
          </Link>
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
