'use client'

import {Box} from '@chakra-ui/react'
import Cursor from '@/components/ui/cursor/Cursor'
import Menu from '@/components/ui/Menu/Menu'
import Main from '@/components/Home/Main/Main'
import Competences from '@/components/Home/Competences/Competences'
import Project from '@/components/Home/Projects/Project'
import Parcours from '@/components/Home/Parcours/Parcours'
import ListCompetence from '@/components/Home/ListCompetence/ListCompetence'
import Contact from '@/components/Home/Contact/Contact'
import Footer from '@/components/ui/Footer/Footer'
import dynamic from 'next/dynamic'
import {useEffect, useState} from 'react'
import Script from 'next/script'

export default function Page() {
  //const Project = dynamic(() => import('@/components/Home/Projects/Project'))
  //const Parcours = dynamic(() => import('@/components/Home/Parcours/Parcours'))
  //const Contact = dynamic(() => import('@/components/Home/Contact/Contact'))
  //const Competences = dynamic(() =>
  //import('@/components/Home/Competences/Competences'),
  // )
  const [mousePos, setMousePos] = useState({x: 150, y: 250})

  useEffect(() => {
    function handleMouseMove(event) {
      setMousePos({x: event.clientX, y: event.clientY})
    }

    function handleTouchMove(event) {
      const touch = event.touches[0]
      setMousePos({x: touch.clientX, y: touch.clientY})
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('touchmove', handleTouchMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])
  return (
    <>
      <Box bgColor="#0d0d12" padding={0} m={0} w={'100%'} overflow={'hidden'}>
        <Cursor />
        <Menu blur={7} />
        <Main mousePos={mousePos} />
        <Competences mousePos={mousePos} />
        <ListCompetence />
        <Project />
        <Parcours />
        <Contact />
        <Footer blur={7} />
      </Box>
    </>
  )
}
