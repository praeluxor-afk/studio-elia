import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'
import SchemaOrg from '@/components/SchemaOrg'

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
  metadataBase: new URL('https://www.studioconsulenzaelia.it'),
  title: {
    default: 'Studio Elia — Consulente del Lavoro a Crotone | Dal 2000',
    template: '%s | Studio Elia Crotone'
  },
  description: 'Studio Elia: consulente del lavoro a Crotone con oltre 20 anni di esperienza. Specializzati in buste paga, diritto del lavoro, welfare aziendale, previdenza e politiche attive. Iscritti Ordine CDL e ANCL. Via Largo I° Maggio 14, Crotone. Tel: 0962 906121.',
  keywords: [
    'consulente del lavoro Crotone',
    'studio consulenza lavoro Crotone',
    'buste paga Crotone',
    'diritto del lavoro Crotone',
    'welfare aziendale Crotone',
    'consulenza aziendale Crotone',
    'Studio Elia Crotone',
    'Elia Massimo consulente lavoro',
    'amministrazione personale Crotone',
    'previdenza pensionistica Crotone',
    'politiche attive lavoro Crotone',
    'consulenza lavoro Calabria',
    'ANCL Crotone',
    'ordine consulenti lavoro Crotone'
  ],
  authors: [{ name: 'Studio Elia', url: 'https://www.studioconsulenzaelia.it' }],
  creator: 'Studio Elia',
  publisher: 'Studio Elia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://www.studioconsulenzaelia.it',
    siteName: 'Studio Elia — Consulenza del Lavoro',
    title: 'Studio Elia — Consulente del Lavoro a Crotone',
    description: 'Oltre 20 anni di esperienza in consulenza del lavoro, welfare aziendale e diritto del lavoro a Crotone. Contattaci: 0962 906121.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Studio Elia — Consulenza del Lavoro a Crotone',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Elia — Consulente del Lavoro a Crotone',
    description: 'Oltre 20 anni di esperienza in consulenza del lavoro a Crotone.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'DA_INSERIRE_DOPO_VERIFICA_GOOGLE_SEARCH_CONSOLE',
  },
  alternates: {
    canonical: 'https://www.studioconsulenzaelia.it',
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <SchemaOrg />
      </head>
      <body className="min-h-screen antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
