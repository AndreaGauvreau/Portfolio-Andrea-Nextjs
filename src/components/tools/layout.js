import {CursorProvider} from '@/components/ui/cursor/CursorProvider'
import Chakra from '@/chakra'
import '@/global.css'
import {Suspense} from 'react'

export default function RootLayout({children}) {
  return (
    <html lang="fr">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="@/favicon.ico" />
        <link rel="shortcut icon" href="@/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="@/favicon.ico" />
        <link rel="apple-touch-icon" href="@/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content="développeur, front-end, freelance, react, Next, Three, Lyon, Gauvreau, Andréa"
        />
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
        <meta property="og:url" content="https://www.andrea-gauvreau.fr" />
        <meta
          property="og:image"
          content="https://www.andreagauvreau.com/images/andrea-gauvreau.jpg"
        />
        <meta property="business:contact_data:locality" content="Lyon" />
        <meta property="business:contact_data:country_name" content="France" />
        <meta
          property="business:contact_data:email"
          content="andrea@teachizi.fr"
        />
      </head>
      <body></body>
    </html>
  )
}
