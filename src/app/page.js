import Head from 'next/head'
import Home from './components/Home/Home'

export default function Main() {
  return (
    <>
      <Head>
        <title>Andréa Gauvreau Developpeur frontend </title>
        <meta
          name="description"
          content="Developpeur frontend freelance react et nextJS. Aussi spécialisé ThreeJs pour intégrer de la 3d sur vos sites"
        />
      </Head>
      <Home />
    </>
  )
}
