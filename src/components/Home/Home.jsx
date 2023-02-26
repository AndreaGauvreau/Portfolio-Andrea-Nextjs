import {Box} from '@chakra-ui/react'
import React, {useContext, useState} from 'react'
import Main from './Main/Main'
import Competences from './Competences/Competences'
import Menu from './Menu/Menu'
import Contact from './Contact/Contact'
import Project from './Projects/Project'
import Parcours from './Parcours/Parcours'
import Cursor from '../ui/cursor/Cursor'

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
      </Box>
    </>
  )
}
