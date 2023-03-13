'use client'

import {Box} from '@chakra-ui/react'
import Cursor from './components/ui/cursor/Cursor'
import Menu from './components/ui/Menu/Menu'
import Main from './components/Home/Main/Main'
import Competences from './components/Home/Competences/Competences'
//import Project from './components/Home/Projects/Project'
import Parcours from './components/Home/Parcours/Parcours'
import Contact from './components/Home/Contact/Contact'
import Footer from './components/ui/Footer/Footer'
import dynamic from 'next/dynamic'

export default function Page() {
  const Project = dynamic(() => import('./components/Home/Projects/Project'))
  const Parcours = dynamic(() => import('./components/Home/Parcours/Parcours'))
  const Contact = dynamic(() => import('./components/Home/Contact/Contact'))
  const Competences = dynamic(() =>
    import('./components/Home/Competences/Competences'),
  )

  return (
    <>
      <Box bgColor="#0d0d12" padding={0} m={0} w={'100%'} overflow={'hidden'}>
        <Cursor />
        <Menu blur={7} />
        <Main />
        <Competences />
        <Project />
        <Parcours />
        <Contact />
        <Footer blur={7} />
      </Box>
    </>
  )
}
