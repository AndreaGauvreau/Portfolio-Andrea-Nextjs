import dynamic from 'next/dynamic'
import Head from 'next/head'
import Loading from './loading'

export default function Main() {
  const Home = dynamic(() => import('./components/Home/Home'), {
    loading: () => <Loading />,
  })
  return (
    <>
      <Home />
    </>
  )
}
