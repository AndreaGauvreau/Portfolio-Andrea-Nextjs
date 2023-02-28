import {CursorProvider} from './components/ui/cursor/CursorProvider'
import Chakra from './chakra'
import Head from 'next/head'
import './global.css'

export default function RootLayout({children}) {
  return (
    <html lang="fr">
      <body>
        <Head>
          <meta charset="utf-8" />
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="portfolio andrea"
            content="Web site created using create-react-app"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap"
            rel="stylesheet"
          />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        </Head>
        <Chakra>
          <CursorProvider>{children}</CursorProvider>
        </Chakra>
      </body>
    </html>
  )
}
