import dynamic from 'next/dynamic'

export default function Main() {
  const Home = dynamic(() => import('./components/Home/Home'))
  return (
    <>
      <Home />
    </>
  )
}
