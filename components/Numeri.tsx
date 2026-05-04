'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

const STATS = [
  { value: 20, suffix: '+', label: 'Anni di', sub: 'Esperienza', text: null },
  { value: null, suffix: null, label: 'Crotone', sub: 'Radicati nel territorio', text: 'Crotone' },
  { value: null, suffix: null, label: 'ANCL', sub: "Iscritti all'Ordine", text: 'ANCL' },
]

function AnimatedStat({ stat, index }: { stat: typeof STATS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [counted, setCounted] = useState(0)
  const didRun = useRef(false)

  useEffect(() => {
    if (!inView || didRun.current || stat.value === null) return
    didRun.current = true
    const target = stat.value
    const duration = 2000
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCounted(Math.round(ease * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, stat.value])

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center text-center"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
      }}
    >
      <span className="section-label mb-3">{stat.label}</span>
      <div
        className="font-display text-7xl font-light text-gold lg:text-8xl"
        style={{ fontFamily: 'var(--font-cormorant)' }}
      >
        {stat.value !== null ? (
          <>{counted}{stat.suffix}</>
        ) : (
          stat.text
        )}
      </div>
      <p className="mt-3 text-sm font-light text-warm">{stat.sub}</p>
    </div>
  )
}

export default function Numeri() {
  return (
    <section className="relative bg-bg-2 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-0">
          {STATS.map((stat, i) => (
            <div key={i} className="relative">
              <AnimatedStat stat={stat} index={i} />
              {i < STATS.length - 1 && (
                <div
                  className="absolute right-0 top-1/2 hidden -translate-y-1/2 md:block"
                  style={{ width: '1px', height: '60px', background: 'rgba(200,169,110,0.2)' }}
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
