import {CursorProvider} from './components/ui/cursor/CursorProvider'
import Chakra from './chakra'

export default function RootLayout({children}) {
  return (
    <html lang="fr">
      <body>
        <Chakra>
          <CursorProvider>{children}</CursorProvider>
        </Chakra>
      </body>
    </html>
  )
}
