'use client'
import {Box, Text} from '@chakra-ui/react'
import Menu from './Menu/Menu'
import Cursor from '../ui/cursor/Cursor'
import dynamic from 'next/dynamic'
import {Suspense} from 'react'

export default function Home() {
  const Main = dynamic(() => import('./Main/Main'))
  const Project = dynamic(() => import('./Projects/Project'))
  const Competences = dynamic(() => import('./Competences/Competences'))
  const Parcours = dynamic(() => import('./Parcours/Parcours'))
  const Contact = dynamic(() => import('./Contact/Contact'))

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
      </Box>
    </>
  )
}
