import {CursorProvider} from './components/ui/cursor/CursorProvider'
import Chakra from './chakra'
import './global.css'
import Script from 'next/script'

export default function RootLayout({children}) {
  return (
    <html lang="fr">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="stylesheet" href="https://use.typekit.net/vhs0rwb.css" />
      </head>
      <body>
        <Chakra>
          <CursorProvider>{children}</CursorProvider>
        </Chakra>
      </body>
    </html>
  )
}
