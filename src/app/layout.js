import {CursorProvider} from '@/components/ui/cursor/CursorProvider'
import Chakra from '@/chakra'
import '@/global.css'
import Script from 'next/script'
import QueryClientFirebase from '@/QueryClientFirebase'
export async function metadata() {
  return {
    title: 'Andréa Gauvreau - Developpeur Front End',
    description: `Développeur Front End freelance spécialisé en React, NextJS et ThreeJS. Création d'interfaces performantes et innovantes pour vos projets.`,
    publisher: 'Andréa Gauvreau',
    keywords: [
      'développeur',
      'front-end',
      'freelance',
      'react',
      'Next',
      'Three',
      'Lyon',
      'Gauvreau',
      'Andréa',
    ],
    creator: 'Andréa Gauvreau',
    authors: [
      {name: 'Gauvreau'},
      {name: 'andréa', url: 'https://andrea-gauvreau.fr'},
    ],
    metadataBase: new URL('https://www.andrea-gauvreau.fr/'),
    alternates: {
      canonical: `/`,
    },
    openGraph: {
      images: '/images/identite/portfolio-andrea-gauvreau.jpg',
      url: 'https://www.andrea-gauvreau.fr/',
    },
  }
}
export default function RootLayout({children}) {
  return (
    <html lang="fr">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="/images/icones/favicon.ico" />
        <link rel="shortcut icon" href="/images/icones/favicon.ico" />
        <link
          rel="icon"
          type="image/x-icon"
          href="/images/icones/favicon.ico"
        />
        <link rel="apple-touch-icon" href="/images/icones/favicon.ico" />
        <link rel="icon" href="/icones/icone-andrea-32.svg" sizes="32x32" />
        <link rel="icon" href="/icones/icone-andrea-16.svg" sizes="16x16" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          property="og:image"
          content="public/images/identite/background-andrea.png"
        />
        <meta
          property="og:title"
          content="Andrea Gauvreau - Développeur front-end freelance à Lyon"
        />
        <meta
          property="og:description"
          content="Andrea Gauvreau est un développeur front-end freelance"
        />
        <meta property="og:type" content="website" />
        <meta property="business:contact_data:locality" content="Lyon" />
        <meta property="business:contact_data:country_name" content="France" />
        <meta
          property="business:contact_data:email"
          content="andrea@teachizi.fr"
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-35JK2D6CRX"
        />
        <Script>
          {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-35JK2D6CRX');`}
        </Script>
      </head>
      <body>
        <QueryClientFirebase>
          <Chakra>
            <CursorProvider>{children}</CursorProvider>
          </Chakra>
        </QueryClientFirebase>
      </body>
    </html>
  )
}
