'use client'
import {Box, Text} from '@chakra-ui/react'
import Menu from '../ui/Menu/Menu'
import Footer from '../ui/Footer/Footer'
import Cursor from '../ui/cursor/Cursor'
import Main from './Main/Main'
import Competences from './Competences/Competences'
import Project from './Projects/Project'
import Parcours from './Parcours/Parcours'
import Contact from './Contact/Contact'

export default function Home() {
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
