import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Studio Elia — Consulenza del Lavoro e Aziendale | Crotone',
  description:
    'Studio Elia offre consulenza del lavoro, aziendale e societaria a Crotone. Oltre 20 anni di esperienza in diritto del lavoro, welfare aziendale, previdenza e politiche attive.',
  keywords:
    'consulenza del lavoro crotone, studio elia crotone, consulente del lavoro crotone, diritto del lavoro crotone, welfare aziendale crotone, buste paga crotone',
  openGraph: {
    title: 'Studio Elia — Consulenza del Lavoro e Aziendale',
    description: 'Oltre 20 anni al servizio delle aziende e dei lavoratori di Crotone e provincia',
    url: 'https://www.studioconsulenzaelia.it',
    type: 'website',
    locale: 'it_IT',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
