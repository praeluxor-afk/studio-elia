import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy — Studio Elia',
  description: "Informativa sull'utilizzo dei cookie sul sito Studio Elia Consulenza del Lavoro.",
}

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-bg px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">

        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-xs text-muted hover:text-gold transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
          Torna alla home
        </Link>

        <span className="section-label">Informativa</span>
        <h1
          className="mt-3 mb-2 font-display text-4xl font-light text-warm sm:text-5xl"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          Cookie Policy
        </h1>
        <p className="mb-10 text-xs text-muted">Ultimo aggiornamento: 1 maggio 2025</p>

        <div className="space-y-8 text-sm font-light leading-relaxed text-muted">

          <section className="space-y-3">
            <h2 className="text-base font-medium text-warm tracking-wide">1. Titolare del trattamento</h2>
            <p>
              Il Titolare del trattamento è <strong className="text-warm font-medium">Studio Elia Consulenza del Lavoro</strong>,
              con sede in Via Largo I° Maggio, n. 14 — 88900 Crotone (KR), P.IVA 02100260799.
            </p>
            <p>
              Contatto:{' '}
              <a href="mailto:massimo@studioconsulenzaelia.it" className="text-gold hover:underline">
                massimo@studioconsulenzaelia.it
              </a>
            </p>
          </section>

          <div className="divider-gold" />

          <section className="space-y-3">
            <h2 className="text-base font-medium text-warm tracking-wide">2. Cosa sono i cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti web visitati dall&apos;utente inviano al suo terminale
              (computer, tablet, smartphone), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti
              alla visita successiva.
            </p>
          </section>

          <div className="divider-gold" />

          <section className="space-y-3">
            <h2 className="text-base font-medium text-warm tracking-wide">3. Cookie utilizzati da questo sito</h2>
            <p>
              Il presente sito utilizza <strong className="text-warm/80">esclusivamente cookie tecnici necessari</strong> al
              corretto funzionamento del sito stesso. Non vengono utilizzati cookie di profilazione, di tracciamento,
              di marketing o di terze parti di alcun tipo.
            </p>
            <div className="border border-gold/15 bg-bg-2 p-5 rounded-sm">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-gold/10">
                    <th className="pb-2 text-left text-warm/80 font-medium">Nome</th>
                    <th className="pb-2 text-left text-warm/80 font-medium">Tipo</th>
                    <th className="pb-2 text-left text-warm/80 font-medium">Scopo</th>
                    <th className="pb-2 text-left text-warm/80 font-medium">Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 text-warm/70 font-mono">cookie-consent</td>
                    <td className="py-2">Tecnico</td>
                    <td className="py-2">Salva la preferenza di consenso ai cookie</td>
                    <td className="py-2">Persistente (localStorage)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Non vengono utilizzati cookie di sessione di terze parti né strumenti di analisi del traffico
              (es. Google Analytics) che comportino trasferimento di dati a soggetti terzi.
            </p>
          </section>

          <div className="divider-gold" />

          <section className="space-y-3">
            <h2 className="text-base font-medium text-warm tracking-wide">4. Come gestire o disabilitare i cookie</h2>
            <p>
              È possibile gestire o disabilitare i cookie dalle impostazioni del browser. La disabilitazione
              dei soli cookie tecnici potrebbe compromettere il corretto funzionamento di alcune funzionalità
              del sito.
            </p>
            <div className="space-y-4">
              {[
                { name: 'Google Chrome', instruction: 'Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti → Blocca tutti i cookie.' },
                { name: 'Mozilla Firefox', instruction: 'Impostazioni → Privacy e sicurezza → Cookie e dati dei siti web → Gestisci dati.' },
                { name: 'Apple Safari', instruction: 'Preferenze → Privacy → Gestisci dati dei siti web → Rimuovi tutto.' },
                { name: 'Microsoft Edge', instruction: 'Impostazioni → Cookie e autorizzazioni del sito → Gestisci e cancella cookie e dati dei siti.' },
              ].map(b => (
                <div key={b.name} className="border-l border-gold/20 pl-4">
                  <p className="font-medium text-warm/80 mb-0.5">{b.name}</p>
                  <p className="text-xs">{b.instruction}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="divider-gold" />

          <section className="space-y-3">
            <h2 className="text-base font-medium text-warm tracking-wide">5. Diritti dell&apos;utente (GDPR)</h2>
            <p>
              Ai sensi degli artt. 15–22 del Regolamento UE 2016/679 (GDPR), l&apos;utente ha il diritto di:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-warm/80">Accesso</strong> ai propri dati personali.</li>
              <li><strong className="text-warm/80">Rettifica</strong> dei dati inesatti o incompleti.</li>
              <li><strong className="text-warm/80">Cancellazione</strong> («diritto all&apos;oblio»), nei limiti previsti dalla legge.</li>
              <li><strong className="text-warm/80">Limitazione</strong> del trattamento.</li>
              <li><strong className="text-warm/80">Opposizione</strong> al trattamento per motivi legittimi.</li>
              <li><strong className="text-warm/80">Portabilità</strong> dei dati in formato strutturato.</li>
            </ul>
            <p>
              Per esercitare tali diritti o per qualsiasi informazione, scrivere a{' '}
              <a href="mailto:massimo@studioconsulenzaelia.it" className="text-gold hover:underline">
                massimo@studioconsulenzaelia.it
              </a>.
              È inoltre possibile proporre reclamo all&apos;Autorità Garante per la protezione dei dati personali
              ({' '}
              <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                www.garanteprivacy.it
              </a>
              ).
            </p>
          </section>

          <div className="divider-gold" />

          <section className="space-y-3">
            <h2 className="text-base font-medium text-warm tracking-wide">6. Informativa completa</h2>
            <p>
              Per informazioni più complete sul trattamento dei dati personali, consultare la{' '}
              <Link href="/privacy-policy" className="text-gold hover:underline">Privacy Policy</Link>.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
