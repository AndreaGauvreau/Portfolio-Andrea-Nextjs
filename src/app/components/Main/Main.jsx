import {Box} from '@chakra-ui/react'
import React from 'react'
import Competences from './Competences/Competences'
import CardMap from './floatingCards/CardsContent'
import Home from './Home'
import Menu from './Menu/Menu'

export default function Main() {
  return (
    <>
      <Box bgColor="#0d0d12" padding={0} m={0}>
        <Menu />
        <Home />
        <Competences />
        <CardMap />
      </Box>
    </>
  )
}
