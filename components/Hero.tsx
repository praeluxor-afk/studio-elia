'use client'

import { useEffect, useState } from 'react'
import { motion, type Variants } from 'framer-motion'

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9 },
  },
}

export default function Hero() {
  const [showScroll, setShowScroll] = useState(true)

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY < 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg pt-16">

      {/* Decorative watermark "E" */}
      <div
        className="pointer-events-none absolute bottom-[-8%] right-[-4%] select-none"
        aria-hidden
      >
        <span
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(18rem, 60vw, 55rem)',
            fontWeight: 300,
            color: '#C8A96E',
            opacity: 0.03,
            lineHeight: 1,
            letterSpacing: '-0.05em',
            display: 'block',
          }}
        >
          E
        </span>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={fadeIn} className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 border border-gold/20 bg-gold/5 px-4 py-1.5 text-[0.65rem] font-medium tracking-[0.25em] text-gold uppercase">
            Crotone · Dal 2000
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="mb-2 font-display text-5xl font-light leading-tight text-warm sm:text-6xl lg:text-8xl"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          La tua azienda.
        </motion.h1>
        <motion.h1
          variants={fadeUp}
          className="mb-6 font-display text-5xl font-semibold leading-tight text-gold sm:text-6xl lg:text-8xl"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          Il nostro impegno.
        </motion.h1>

        {/* Divider */}
        <motion.div variants={fadeIn} className="mb-6 flex justify-center">
          <div className="divider-gold" />
        </motion.div>

        {/* Sub */}
        <motion.p
          variants={fadeIn}
          className="mx-auto mb-10 max-w-md text-base font-light leading-relaxed text-muted sm:text-lg"
        >
          Consulenza del Lavoro e Aziendale a Crotone
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeIn}
          className="flex flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <button
            onClick={() => scrollTo('#servizi')}
            className="bg-gold px-8 py-4 text-sm font-medium text-bg tracking-wide transition-all duration-300 hover:bg-gold-light hover:scale-[1.02]"
          >
            Scopri i Servizi
          </button>
          <button
            onClick={() => scrollTo('#contatti')}
            className="border border-gold/60 px-8 py-4 text-sm font-medium text-gold tracking-wide transition-all duration-300 hover:bg-gold/10"
          >
            Contattaci
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500"
        style={{ opacity: showScroll ? 1 : 0 }}
        aria-hidden
      >
        <span className="text-[0.6rem] tracking-[0.3em] text-muted uppercase">Scorri</span>
        <div className="animate-bounce-subtle text-gold">
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <path d="M6 0v16M1 11l5 5 5-5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  )
}
