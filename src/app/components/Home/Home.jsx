import React from 'react'
import Box from '../../../components/ui/Box/Box'
import Cursor from '../../../components/ui/cursor/Cursor'
import Menu from './Menu/Menu'

export default function Home() {
  return (
    <>
      <Box bgColor={'#0d0d12'} padding={0} m={0} w={'100%'} overflow={'hidden'}>
        <Cursor />
        <Menu blur={7} />
        {/*    <Main />
        <Competences />
        <Project />
        <Parcours />
  <Contact />*/}
      </Box>
    </>
  )
}
