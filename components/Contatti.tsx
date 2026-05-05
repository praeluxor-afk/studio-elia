'use client'

import { useRef, useState, FormEvent, ChangeEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiClock, FiFacebook, FiLinkedin } from 'react-icons/fi'

const TIPO_OPTIONS = [
  'Consulenza del lavoro',
  'Amministrazione personale',
  'Welfare aziendale',
  'Diritto del lavoro',
  'Altro',
]

interface FormState {
  nome: string
  email: string
  telefono: string
  tipo: string
  messaggio: string
  privacy: boolean
}

const INITIAL: FormState = {
  nome: '',
  email: '',
  telefono: '',
  tipo: '',
  messaggio: '',
  privacy: false,
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contatti() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState<FormState>(INITIAL)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<Status>('idle')

  const update = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
    setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormState, string>> = {}
    if (!form.nome.trim()) errs.nome = 'Campo obbligatorio'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Email non valida'
    if (!form.messaggio.trim()) errs.messaggio = 'Campo obbligatorio'
    if (!form.privacy) errs.privacy = 'Devi accettare la privacy policy'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (serviceId && templateId && publicKey) {
        const emailjs = await import('@emailjs/browser')
        await emailjs.send(serviceId, templateId, {
          nome: form.nome,
          email: form.email,
          telefono: form.telefono,
          tipo: form.tipo,
          messaggio: form.messaggio,
        }, publicKey)
      } else {
        await new Promise(r => setTimeout(r, 1200))
      }
      setStatus('success')
      setForm(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contatti" ref={ref} className="relative overflow-hidden bg-bg py-24 lg:py-36">

      {/* Watermark */}
      <div className="watermark-num absolute -left-4 top-8 select-none" aria-hidden>03</div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="section-label">Contatti</span>
          <h2
            className="mt-3 font-display text-4xl font-light text-warm sm:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Siamo qui per te
          </h2>
          <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-muted">
            Il nostro studio è a Crotone in Via Largo I° Maggio, 14. Contattaci per una consulenza.
          </p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <p
                className="font-display text-2xl font-light text-warm"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Studio Elia
              </p>
              <p className="mt-1 text-xs text-muted">Consulenza del Lavoro e Aziendale</p>
            </div>

            <div className="space-y-5 text-sm font-light">
              <a
                href="https://maps.google.com/?q=Via+Largo+I+Maggio+14+Crotone"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-muted hover:text-warm transition-colors duration-200"
              >
                <FiMapPin className="mt-0.5 flex-shrink-0 text-gold" size={15} />
                <span>Via Largo I° Maggio, n. 14<br />88900 Crotone (KR)</span>
              </a>
              <a
                href="tel:+390962906121"
                className="flex items-center gap-3 text-muted hover:text-warm transition-colors duration-200"
              >
                <FiPhone className="flex-shrink-0 text-gold" size={15} />
                0962 906121
              </a>
              <a
                href="mailto:studio.eliamassimo@gmail.com"
                className="flex items-center gap-3 text-muted hover:text-warm transition-colors duration-200"
              >
                <FiMail className="flex-shrink-0 text-gold" size={15} />
                studio.eliamassimo@gmail.com
              </a>
            </div>

            <div className="border-l border-gold/20 pl-5">
              <div className="flex items-center gap-2 mb-3">
                <FiClock className="text-gold" size={14} />
                <span className="section-label">Orari di apertura</span>
              </div>
              <p className="text-sm font-light text-muted">
                Lun – Ven<br />
                09:30 – 12:30<br />
                15:30 – 18:00
              </p>
            </div>

            <div className="pt-2">
              <p className="mb-4 text-[0.65rem] text-muted/60">P.IVA 02100260799</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/studioconsulenzaelia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-muted hover:text-gold transition-colors duration-200"
                >
                  <FiFacebook size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/salvatore-elia-8020a6139/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted hover:text-gold transition-colors duration-200"
                >
                  <FiLinkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {status === 'success' ? (
              <div className="flex h-full min-h-[360px] flex-col items-center justify-center gap-4 text-center">
                <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4 4 8-8" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p
                  className="font-display text-2xl text-warm"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  Messaggio inviato!
                </p>
                <p className="text-sm text-muted">Vi risponderemo entro 24 ore.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-xs text-gold hover:underline"
                >
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-7">

                {status === 'error' && (
                  <div className="border border-danger/30 bg-danger/5 px-4 py-3 text-xs text-danger">
                    Si è verificato un errore. Riprova o contattaci al 0962 906121.
                  </div>
                )}

                {/* Nome */}
                <div>
                  <label className="section-label block mb-2">Nome e Cognome *</label>
                  <input
                    name="nome"
                    value={form.nome}
                    onChange={update}
                    placeholder="Mario Rossi"
                    className="input-underline"
                  />
                  {errors.nome && <p className="mt-1 text-[0.65rem] text-danger">{errors.nome}</p>}
                </div>

                {/* Email + Telefono */}
                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label className="section-label block mb-2">Email *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={update}
                      placeholder="email@example.com"
                      className="input-underline"
                    />
                    {errors.email && <p className="mt-1 text-[0.65rem] text-danger">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="section-label block mb-2">Telefono</label>
                    <input
                      name="telefono"
                      type="tel"
                      value={form.telefono}
                      onChange={update}
                      placeholder="0962 000000"
                      className="input-underline"
                    />
                  </div>
                </div>

                {/* Tipo */}
                <div>
                  <label className="section-label block mb-2">Tipo di richiesta</label>
                  <select
                    name="tipo"
                    value={form.tipo}
                    onChange={update}
                    className="input-underline appearance-none"
                  >
                    <option value="" disabled>Seleziona...</option>
                    {TIPO_OPTIONS.map(opt => (
                      <option key={opt} value={opt} className="bg-bg-2 text-warm">{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Messaggio */}
                <div>
                  <label className="section-label block mb-2">Messaggio *</label>
                  <textarea
                    name="messaggio"
                    value={form.messaggio}
                    onChange={update}
                    rows={4}
                    placeholder="Descrivi la tua richiesta..."
                    className="input-underline resize-none"
                  />
                  {errors.messaggio && <p className="mt-1 text-[0.65rem] text-danger">{errors.messaggio}</p>}
                </div>

                {/* Privacy */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="privacy"
                      checked={form.privacy}
                      onChange={update}
                      className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 accent-gold"
                    />
                    <span className="text-[0.7rem] font-light leading-relaxed text-muted">
                      Ho letto e accetto la{' '}
                      <a href="/privacy" target="_blank" className="text-gold underline hover:text-gold-light">
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                  {errors.privacy && <p className="mt-1 text-[0.65rem] text-danger">{errors.privacy}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gold py-4 text-sm font-medium text-bg tracking-wide transition-all duration-300 hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Invio in corso...
                    </span>
                  ) : (
                    'Invia Messaggio'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
