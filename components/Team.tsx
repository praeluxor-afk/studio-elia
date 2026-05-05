'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { FiLinkedin } from 'react-icons/fi'

const MEMBERS = [
  {
    img: '/images/massimo-elia.jpg',
    alt: 'Rag. Elia Massimo - Consulente del Lavoro Crotone - Fondatore Studio Elia',
    name: 'Rag. Elia Massimo',
    role: 'Fondatore · Consulente del Lavoro',
    bio: 'Oltre 20 anni di esperienza in consulenza del lavoro, aziendale e societaria. Attivamente impegnato nell\'Ordine Provinciale dei Consulenti del Lavoro di Crotone.',
    linkedin: null,
  },
  {
    img: '/images/salvatore-elia.jpg',
    alt: 'Dott. Elia Salvatore - Consulente del Lavoro Crotone - Studio Elia',
    name: 'Dott. Elia Salvatore',
    role: 'Consulente del Lavoro',
    bio: null,
    linkedin: 'https://www.linkedin.com/in/salvatore-elia-8020a6139/',
  },
  {
    img: '/images/bruno-pasquale.jpg',
    alt: 'Dott. Bruno Pasquale - Consulente del Lavoro - Studio Elia Crotone',
    name: 'Dott. Bruno Pasquale',
    role: 'Consulente del Lavoro',
    bio: null,
    linkedin: null,
  },
  {
    img: '/images/segretaria.jpg',
    alt: 'Rag. Elia Maria Serafina - Segreteria Studio Elia Crotone',
    name: 'Rag. Elia Maria Serafina',
    role: 'Segreteria e Amministrazione',
    bio: null,
    linkedin: null,
  },
]

const EASE = [0.22, 1, 0.36, 1] as const

export default function Team() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="team" ref={ref} className="relative overflow-hidden bg-bg py-24 lg:py-36">

      {/* Watermark */}
      <div className="watermark-num absolute -right-4 top-8 select-none" aria-hidden>02</div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16"
        >
          <span className="section-label">Il Team</span>
          <h2
            className="mt-3 font-display text-4xl font-light text-warm sm:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            I Professionisti
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {MEMBERS.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              className="group relative overflow-hidden"
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] w-full overflow-hidden sm:aspect-[3/4]" style={{ aspectRatio: '3/4' }}>
                <Image
                  src={m.img}
                  alt={m.alt}
                  fill
                  className="object-cover object-top photo-bw"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-xs font-medium leading-tight text-warm">{m.name}</p>
                <p className="mt-0.5 text-[0.65rem] font-light tracking-wide text-gold">{m.role}</p>

                {m.bio && (
                  <p className="mt-2 max-h-0 overflow-hidden text-[0.6rem] font-light leading-relaxed text-muted/80 transition-all duration-500 group-hover:max-h-24">
                    {m.bio}
                  </p>
                )}

                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-[0.6rem] text-gold/60 hover:text-gold transition-colors duration-200"
                    aria-label={`LinkedIn di ${m.name}`}
                  >
                    <FiLinkedin size={12} />
                    LinkedIn
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
