import {CursorProvider} from './components/ui/cursor/CursorProvider'
import Chakra from './chakra'
import './global.css'

export default function RootLayout({children}) {
  return (
    <html lang="fr">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="./favicon.ico" />
        <link rel="apple-touch-icon" href="./favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <Chakra>
          <CursorProvider>{children}</CursorProvider>
        </Chakra>
      </body>
    </html>
  )
}
