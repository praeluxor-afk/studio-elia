'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bg px-6 text-center">

      {/* Watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        aria-hidden
      >
        <span
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(10rem, 28vw, 22rem)',
            fontWeight: 300,
            color: '#C8A96E',
            opacity: 0.05,
            lineHeight: 1,
          }}
        >
          Err
        </span>
      </div>

      <div className="relative z-10 space-y-5">
        <span className="section-label">Errore</span>
        <h1
          className="font-display text-4xl font-light text-warm sm:text-5xl"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          Si è verificato un errore
        </h1>
        <p className="mx-auto max-w-sm text-sm font-light text-muted">
          Qualcosa è andato storto. Puoi provare a ricaricare la pagina.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center pt-4">
          <button
            onClick={reset}
            className="bg-gold px-8 py-3.5 text-sm font-medium text-bg tracking-wide transition-colors duration-300 hover:bg-gold-light"
          >
            Ricarica la pagina
          </button>
          <Link
            href="/"
            className="border border-gold/50 px-8 py-3.5 text-sm font-medium text-gold tracking-wide transition-colors duration-300 hover:bg-gold/10"
          >
            Torna alla Home
          </Link>
        </div>
      </div>
    </div>
  )
}
