import {Box, Flex, Heading} from '@chakra-ui/react'
import React, {Suspense} from 'react'
import Canvas3d from './3drocket/Canva'
import Prenom from './Prenom'
import AnimationDD from './animationDd'

export default function Main() {
  return (
    <Flex
      h="100vh"
      w="100%"
      m="0"
      p={{base: '20px', md: '10px', lg: '0px'}}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      bgImage={'/images/path-background.svg'}
      bgSize="cover"
      boxSizing="border-box"
      overflow={'hidden'}
      position="relative"
    >
      <Flex
        w={{base: '100%', md: '100%', lg: '1024px'}}
        flexDirection={{base: 'column-reverse', md: 'column', lg: 'row'}}
        id={'maincover'}
        zIndex={2}
      >
        <Flex
          w={{base: '100%', md: '100%', lg: '50%'}}
          alignItems="center"
          justifyContent={'center'}
          h={'50vh'}
          position={'relative'}
          zIndex={2}
        >
          <Canvas3d />
          <AnimationDD />
        </Flex>
        <Flex
          w={{base: '100%', md: '100%', lg: '50%'}}
          alignItems="center"
          justifyContent={'center'}
          position="relative"
          zIndex={2}
        >
          <Prenom />
        </Flex>
      </Flex>
      <Heading
        fontSize={{base: '17px', md: '20px', lg: '30px'}}
        textAlign={'center'}
        color={'white'}
        as="h1"
        zIndex={2}
      >
        Votre développeur Front-end qui va propulser 🚀 votre projet
      </Heading>
    </Flex>
  )
}
