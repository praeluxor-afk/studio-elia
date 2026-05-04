'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '#servizi', label: 'Servizi' },
  { href: '#team', label: 'Team' },
  { href: '#contatti', label: 'Contatti' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleNav = (href: string) => {
    setOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(8,9,10,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(200,169,110,0.12)' : '1px solid transparent',
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-9 w-9 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Studio Elia logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="font-display text-lg font-medium tracking-wide text-warm"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  STUDIO ELIA
                </span>
                <span className="text-[0.6rem] font-normal tracking-[0.15em] text-muted uppercase">
                  Consulenza del Lavoro
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-sm font-light tracking-wide text-muted transition-colors duration-200 hover:text-warm"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop right */}
            <div className="hidden md:flex items-center gap-5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse-dot" />
                <span className="text-xs text-muted">Aperto</span>
              </div>
              <button
                onClick={() => handleNav('#contatti')}
                className="border border-gold/60 px-5 py-2 text-sm text-gold transition-all duration-300 hover:bg-gold hover:text-bg hover:border-gold"
              >
                Contattaci
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Chiudi menu' : 'Apri menu'}
            >
              <span
                className="block h-px w-6 bg-warm transition-all duration-300 origin-center"
                style={{ transform: open ? 'rotate(45deg) translate(2px, 4px)' : 'none' }}
              />
              <span
                className="block h-px w-6 bg-warm transition-all duration-300"
                style={{ opacity: open ? 0 : 1 }}
              />
              <span
                className="block h-px w-6 bg-warm transition-all duration-300 origin-center"
                style={{ transform: open ? 'rotate(-45deg) translate(2px, -4px)' : 'none' }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          background: 'rgba(8,9,10,0.97)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transform: open ? 'translateY(0)' : 'translateY(100%)',
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10 px-8">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="font-display text-4xl font-light text-warm hover:text-gold transition-colors duration-200"
              style={{
                fontFamily: 'var(--font-cormorant)',
                transitionDelay: open ? `${i * 60}ms` : '0ms',
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 400ms ease, transform 400ms ease, color 200ms ease',
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contatti')}
            className="mt-4 w-full max-w-xs border border-gold bg-gold text-bg py-4 text-sm font-medium tracking-wide transition-opacity duration-200"
            style={{ opacity: open ? 1 : 0, transition: 'opacity 400ms ease 200ms' }}
          >
            Contattaci
          </button>
        </div>
      </div>
    </>
  )
}
