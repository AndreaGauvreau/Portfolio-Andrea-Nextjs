import {Flex, Heading} from '@chakra-ui/react'
import React from 'react'
import Canvas3d from './3drocket/Canva'
import Prenom from './Prenom'

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
      bgImage={'./images/path-background.svg'}
      bgSize="cover"
      boxSizing="border-box"
    >
      <Flex
        w={{base: '100%', md: '100%', lg: '1024px'}}
        flexDirection={{base: 'column-reverse', md: 'column', lg: 'row'}}
      >
        <Flex
          w={{base: '100%', md: '100%', lg: '50%'}}
          alignItems="center"
          justifyContent={'center'}
          h={'50vh'}
        >
          <Canvas3d />
        </Flex>
        <Flex
          w={{base: '100%', md: '100%', lg: '50%'}}
          alignItems="center"
          justifyContent={'center'}
        >
          <Prenom />
        </Flex>
      </Flex>
      <Heading
        variant={'dew'}
        fontSize={{base: '17px', md: '20px', lg: '30px'}}
        textAlign={'center'}
        color={'white'}
      >
        Votre développeur Front-end qui va propulser 🚀 votre projet
      </Heading>
    </Flex>
  )
}
