import Image from 'next/image'
import Link from 'next/link'
import { FiFacebook, FiLinkedin } from 'react-icons/fi'

const PARTNERS = [
  {
    name: 'Ordine Consulenti del Lavoro',
    href: 'http://www.consulentidellavoro.it/',
    logo: '/images/logo-odcl.png',
    width: 120,
    height: 50,
  },
  {
    name: 'ANCL',
    href: 'https://anclsu.com/',
    logo: '/images/logo-ancl.png',
    width: 120,
    height: 50,
  },
  {
    name: 'Fondazione Lavoro',
    href: 'https://fondazionelavoro.it/',
    logo: '/images/logo-fondazione.png',
    width: 140,
    height: 50,
  },
]

export default function Footer() {
  return (
    <footer className="bg-bg-2 pt-16 pb-8" style={{ borderTop: '1px solid rgba(200,169,110,0.12)' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Top */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="relative mb-4 h-10 w-10">
            <Image src="/images/logo.png" alt="Studio Elia" fill className="object-contain" />
          </div>
          <p
            className="font-display text-xl font-medium tracking-wide text-warm"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            STUDIO ELIA
          </p>
          <p className="mt-1 text-[0.65rem] tracking-[0.15em] text-muted uppercase">
            Consulenza del Lavoro e Aziendale
          </p>
        </div>

        {/* Gold divider */}
        <div className="mb-10 flex justify-center">
          <div className="divider-gold" />
        </div>

        {/* Partners */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-10">
          {PARTNERS.map(p => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              title={p.name}
              className="opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={p.width}
                height={p.height}
                className="object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </a>
          ))}
        </div>

        {/* Gold divider */}
        <div className="mb-10 flex justify-center">
          <div className="divider-gold" />
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between">
          <p className="text-[0.65rem] font-light text-muted/60">
            Via Largo I° Maggio, 14 · 88900 Crotone (KR) · P.IVA 02100260799
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/studioconsulenzaelia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted/40 hover:text-gold transition-colors duration-200"
            >
              <FiFacebook size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/salvatore-elia-8020a6139/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted/40 hover:text-gold transition-colors duration-200"
            >
              <FiLinkedin size={15} />
            </a>
          </div>

          <p className="flex items-center gap-3 text-[0.65rem] font-light text-muted/40">
            <span>© 2025 Studio Elia</span>
            <span>·</span>
            <Link href="/privacy" className="hover:text-muted transition-colors duration-200">Privacy Policy</Link>
            <span>·</span>
            <Link href="/cookie" className="hover:text-muted transition-colors duration-200">Cookie Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
