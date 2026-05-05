import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Studio Elia',
  description: "Informativa sul trattamento dei dati personali ai sensi dell'art. 13 GDPR — Studio Elia Consulenza del Lavoro, Crotone.",
}

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="mb-10 text-xs text-muted">Ultimo aggiornamento: 1 maggio 2025</p>

        <div className="space-y-8 text-sm font-light leading-relaxed text-muted">

          <section className="space-y-3">
            <h2 className="text-base font-medium text-warm tracking-wide">1. Titolare del trattamento</h2>
            <p>
              Il Titolare del trattamento dei dati personali è{' '}
              <strong className="text-warm font-medium">Studio Elia Consulenza del Lavoro</strong>,
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
            <h2 className="text-base font-medium text-warm tracking-wide">2. Dati raccolti</h2>
            <p>Il presente sito raccoglie le seguenti categorie di dati personali:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-warm/80">Dati di navigazione</strong>: indirizzi IP, parametri del browser,
                pagine visitate, timestamp — raccolti automaticamente dai sistemi informatici del sito.
              </li>
              <li>
                <strong className="text-warm/80">Dati forniti volontariamente tramite il modulo di contatto</strong>:
                nome e cognome, indirizzo e-mail, numero di telefono e contenuto del messaggio.
              </li>
            </ul>
            <p>
              Non vengono raccolti dati particolari ai sensi dell&apos;art. 9 GDPR né dati relativi a minori.
            </p>
          </section>

          <div className="divider-gold" />

          <section className="space-y-3">
            <h2 className="text-base font-medium text-warm tracking-wide">3. Finalità e base giuridica</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-warm/80">Risposta alle richieste di contatto</strong> — art. 6.1.b GDPR
                (esecuzione di misure precontrattuali su richiesta dell&apos;interessato).
              </li>
              <li>
                <strong className="text-warm/80">Adempimenti di legge</strong> connessi all&apos;attività di consulenza
                del lavoro — art. 6.1.c GDPR.
              </li>
              <li>
                <strong className="text-warm/80">Interesse legittimo</strong> nella sicurezza e nel corretto
                funzionamento del sito — art. 6.1.f GDPR.
              </li>
            </ul>
          </section>

          <div className="divider-gold" />

          <section className="space-y-3">
            <h2 className="text-base font-medium text-warm tracking-wide">4. Periodo di conservazione</h2>
            <p>
              I dati raccolti tramite il modulo di contatto sono conservati per un periodo massimo di{' '}
              <strong className="text-warm/80">12 mesi</strong> dalla ricezione della richiesta,
              salvo diversi obblighi di legge applicabili all&apos;attività professionale.
            </p>
          </section>

          <div className="divider-gold" />

          <section className="space-y-3">
            <h2 className="text-base font-medium text-warm tracking-wide">5. Comunicazione e diffusione</h2>
            <p>I dati personali non sono ceduti a terzi né diffusi, salvo:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Fornitori di servizi tecnici (es. hosting, servizi e-mail) nella qualità di Responsabili del
                trattamento ex art. 28 GDPR, con obbligo contrattuale di riservatezza.
              </li>
              <li>Autorità competenti su specifica richiesta di legge.</li>
            </ul>
            <p>I dati non vengono trasferiti fuori dall&apos;Unione Europea.</p>
          </section>

          <div className="divider-gold" />

          <section className="space-y-3">
            <h2 className="text-base font-medium text-warm tracking-wide">6. Diritti degli interessati (GDPR)</h2>
            <p>Ai sensi degli artt. 15–22 del Regolamento UE 2016/679 (GDPR), l&apos;interessato ha il diritto di:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-warm/80">Accesso</strong> ai propri dati personali (art. 15).</li>
              <li><strong className="text-warm/80">Rettifica</strong> dei dati inesatti o incompleti (art. 16).</li>
              <li><strong className="text-warm/80">Cancellazione</strong> («diritto all&apos;oblio»), nei limiti previsti dalla legge (art. 17).</li>
              <li><strong className="text-warm/80">Limitazione</strong> del trattamento (art. 18).</li>
              <li><strong className="text-warm/80">Portabilità</strong> dei dati in formato strutturato (art. 20).</li>
              <li><strong className="text-warm/80">Opposizione</strong> al trattamento per motivi legittimi (art. 21).</li>
            </ul>
            <p>
              Per esercitare tali diritti scrivere a{' '}
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
            <h2 className="text-base font-medium text-warm tracking-wide">7. Cookie</h2>
            <p>
              Per informazioni sull&apos;utilizzo dei cookie, consultare la{' '}
              <Link href="/cookie-policy" className="text-gold hover:underline">Cookie Policy</Link>.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
