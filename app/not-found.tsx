import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bg px-6 text-center">

      {/* Watermark 404 */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        aria-hidden
      >
        <span
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(12rem, 35vw, 28rem)',
            fontWeight: 300,
            color: '#C8A96E',
            opacity: 0.06,
            lineHeight: 1,
            letterSpacing: '-0.04em',
          }}
        >
          404
        </span>
      </div>

      <div className="relative z-10 space-y-5">
        <span className="section-label">Errore</span>
        <h1
          className="font-display text-4xl font-light text-warm sm:text-5xl"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          Pagina non trovata
        </h1>
        <p className="mx-auto max-w-sm text-sm font-light text-muted">
          La pagina che cerchi non esiste o è stata spostata.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-block bg-gold px-8 py-3.5 text-sm font-medium text-bg tracking-wide transition-colors duration-300 hover:bg-gold-light"
          >
            Torna alla Home
          </Link>
        </div>
      </div>
    </div>
  )
}
