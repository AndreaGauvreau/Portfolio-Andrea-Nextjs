import {CursorProvider} from '../components/ui/cursor/CursorProvider'

export default function RootLayout({children}) {
  return (
    <html lang="fr">
      <body>
        <CursorProvider>{children}</CursorProvider>
      </body>
    </html>
  )
}
