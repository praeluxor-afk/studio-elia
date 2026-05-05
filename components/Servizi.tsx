'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiBriefcase, FiBook, FiHeart, FiUsers,
  FiShield, FiSearch, FiTrendingUp, FiCheckSquare,
} from 'react-icons/fi'

const SERVICES = [
  {
    icon: FiBriefcase,
    title: 'Amministrazione del Personale',
    desc: 'Elaborazione buste paga, retribuzioni, adempimenti contributivi e fiscali. Gestione completa del ciclo paghe.',
  },
  {
    icon: FiBook,
    title: 'Diritto del Lavoro',
    desc: 'Contrattualistica, procedimenti disciplinari, gestione rapporti di lavoro dalla costituzione alla risoluzione.',
  },
  {
    icon: FiHeart,
    title: 'Welfare Aziendale',
    desc: 'Progettazione e gestione piani welfare, premi di risultato, benefit aziendali per aumentare la produttività.',
  },
  {
    icon: FiUsers,
    title: 'Relazioni Sindacali',
    desc: 'Assistenza nelle controversie di lavoro, gestione esuberi, ammortizzatori sociali, trasferimenti d\'azienda.',
  },
  {
    icon: FiShield,
    title: 'Previdenza e Pensionistica',
    desc: 'Consulenza previdenziale, legislazione sociale, pensioni e trattamenti di fine rapporto.',
  },
  {
    icon: FiSearch,
    title: 'Selezione e Formazione',
    desc: 'Ricerca e selezione del personale, formazione aziendale, welfare e lavoro domestico (colf e badanti).',
  },
  {
    icon: FiTrendingUp,
    title: 'Politiche Attive del Lavoro',
    desc: 'Tirocini extracurriculari, alternanza scuola-lavoro, Garanzia Giovani, assegni di ricollocazione.',
  },
  {
    icon: FiCheckSquare,
    title: 'Assistenza Ispettiva',
    desc: 'Assistenza durante ispezioni del lavoro, INPS, INAIL. Gestione dei rapporti con gli enti previdenziali.',
  },
]

const EASE = [0.22, 1, 0.36, 1] as const

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: EASE },
  }),
}

export default function Servizi() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servizi" ref={ref} className="relative overflow-hidden bg-bg py-24 lg:py-36">

      {/* Watermark */}
      <div className="watermark-num absolute -left-4 top-8 select-none" aria-hidden>01</div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16"
        >
          <span className="section-label">Servizi</span>
          <h2
            className="mt-3 font-display text-4xl font-light text-warm sm:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            I Nostri Servizi
          </h2>
          <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-muted">
            Consulenza del lavoro, aziendale e previdenziale per aziende e professionisti di Crotone e provincia.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="group relative overflow-hidden border border-transparent bg-bg-2 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:bg-bg-3"
            >
              <svc.icon className="mb-5 text-gold" size={22} />
              <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-warm">
                {svc.title}
              </h3>
              <p className="text-xs font-light leading-relaxed text-muted">{svc.desc}</p>

              {/* Corner accent */}
              <div
                className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full"
                aria-hidden
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
