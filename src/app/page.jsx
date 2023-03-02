import dynamic from 'next/dynamic'
import Head from 'next/head'
import Loading from './loading'
export default function Main() {
  const Home = dynamic(() => import('./components/Home/Home'), {
    loading: () => <Loading />,
  })
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
