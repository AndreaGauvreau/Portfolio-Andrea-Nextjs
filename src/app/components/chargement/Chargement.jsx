import {Box, Flex} from '@chakra-ui/react'
import React from 'react'
import Lottie from 'react-lottie'
import {colorsDD} from '../ui/colors/colors'
import animationData from './icones-andrea-2.json'

export default function Chargement() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Flex
      w={'100vw'}
      h={'100vh'}
      position="fixed"
      bgColor={colorsDD.background}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Lottie options={defaultOptions} height={300} width={300} />
    </Flex>
  )
}
