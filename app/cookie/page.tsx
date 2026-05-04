import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy — Studio Elia',
  description: 'Informativa sull\'utilizzo dei cookie sul sito Studio Elia.',
}

export default function Cookie() {
  return (
    <div className="min-h-screen bg-bg px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">

        {/* Back */}
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
        <p className="mb-10 text-xs text-muted">Ultimo aggiornamento: 1 gennaio 2025</p>

        <div className="space-y-8 text-sm font-light leading-relaxed text-muted">

          <section className="space-y-3">
            <h2 className="text-base font-medium text-warm tracking-wide">Cosa sono i cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti web visitati dall'utente inviano al suo terminale (computer, tablet, smartphone),
              dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.
            </p>
          </section>

          <div className="divider-gold" />

          <section className="space-y-3">
            <h2 className="text-base font-medium text-warm tracking-wide">Cookie utilizzati da questo sito</h2>
            <p>
              Il presente sito utilizza <strong className="text-warm/80">esclusivamente cookie tecnici necessari</strong> al corretto funzionamento del sito stesso.
              Non vengono utilizzati cookie di profilazione, di tracciamento o di marketing di alcun tipo.
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
                <tbody className="space-y-2">
                  <tr className="border-b border-gold/5">
                    <td className="py-2 text-warm/70 font-mono">studio-elia-cookie-consent</td>
                    <td className="py-2">Tecnico</td>
                    <td className="py-2">Salva le preferenze del consenso cookie</td>
                    <td className="py-2">Persistente (localStorage)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="divider-gold" />

          <section className="space-y-3">
            <h2 className="text-base font-medium text-warm tracking-wide">Come disabilitare i cookie</h2>
            <p>
              È possibile disabilitare i cookie dalle impostazioni del browser. Di seguito le istruzioni per i principali browser:
            </p>

            <div className="space-y-4">
              {[
                {
                  name: 'Google Chrome',
                  instruction: 'Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti → Blocca tutti i cookie.',
                },
                {
                  name: 'Mozilla Firefox',
                  instruction: 'Impostazioni → Privacy e sicurezza → Cookie e dati dei siti web → Gestisci dati.',
                },
                {
                  name: 'Apple Safari',
                  instruction: 'Preferenze → Privacy → Gestisci dati dei siti web → Rimuovi tutto.',
                },
                {
                  name: 'Microsoft Edge',
                  instruction: 'Impostazioni → Cookie e autorizzazioni del sito → Gestisci e cancella cookie e dati dei siti.',
                },
              ].map(b => (
                <div key={b.name} className="border-l border-gold/20 pl-4">
                  <p className="font-medium text-warm/80 mb-0.5">{b.name}</p>
                  <p className="text-xs">{b.instruction}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted/70">
              Nota: la disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento di alcune funzioni del sito.
            </p>
          </section>

          <div className="divider-gold" />

          <section className="space-y-3">
            <h2 className="text-base font-medium text-warm tracking-wide">Contatti</h2>
            <p>
              Per qualsiasi informazione o esercizio dei diritti, scrivere a{' '}
              <a href="mailto:studio.eliamassimo@gmail.com" className="text-gold hover:underline">
                studio.eliamassimo@gmail.com
              </a>.
              Consulta anche la nostra{' '}
              <Link href="/privacy" className="text-gold hover:underline">Privacy Policy</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
