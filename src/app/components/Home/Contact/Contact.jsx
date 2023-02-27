import {Box, Flex, Heading} from '@chakra-ui/react'
import React from 'react'
import Canvas3d from '../Main/3drocket/Canva'
import ButtonDD from '../../ui/ButtonDD/ButtonDD'
import {colorsDD} from '../../ui/colors/colors'
import CanvaHand from './3dHand/CanvaHand'
import Gradient from '../../ui/GradientBgElems/Gradient'

export default function Contact() {
  return (
    <Flex
      h="100vh"
      justifyContent={'center'}
      alignItems={'center'}
      w={'100%'}
      position={'relative'}
    >
      <Flex
        w={'1024px'}
        h={'70%'}
        flexDirection={{base: 'column', md: 'column', lg: 'row'}}
        p={{base: 5, md: 5, lg: 0}}
        gap={10}
        position="relative"
      >
        <Gradient versionG={1} colorG={'#ffffff20'} />
        <Flex w={{base: '100%', md: '100%', lg: '66%'}}>
          <Box
            minH={'50vh'}
            w={'100%'}
            background={`linear-gradient(50deg, ${colorsDD.green20} 0%, ${colorsDD.green} 100%)`}
            borderRadius={20}
            p={0}
          >
            <Heading
              variant={'dew'}
              textAlign="center"
              color={colorsDD.background}
              fontSize={{base: '27px', md: '30px', lg: '40px'}}
              pt={10}
              pl={10}
              pr={10}
            >
              Échangeons autour d'un café
            </Heading>
            <Heading
              variant={'dd'}
              fontSize={{base: '13px', md: '15px', lg: '18px'}}
              color={colorsDD.background}
              textAlign="center"
              pl={5}
              pr={5}
            >
              Et voyons ensemble comment pouvons-bous <br></br>faire évoluer
              votre projet !
            </Heading>
            <Flex
              mt={'-50px'}
              w={'100%'}
              alignItems="center"
              justifyContent={'center'}
              h={{base: '50vh', md: '60vh', lg: '100%'}}
            >
              <CanvaHand />
            </Flex>
          </Box>
        </Flex>
        <Flex
          w={{base: '100%', md: '100%', lg: '34%'}}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          gap={20}
        >
          <Flex display={{base: 'none', md: 'none', lg: 'flex'}}>
            <Box w={'50%'} borderRight={'5px solid white'} h={'15vh'}></Box>
            <Box w={'50%'}></Box>
          </Flex>
          <ButtonDD text={'Contactez-moi'} link={'#'} colorThemeDD={'light'} />
          <Flex display={{base: 'none', md: 'none', lg: 'flex'}}>
            <Box w={'50%'} borderRight={'5px solid white'} h={'15vh'}></Box>
            <Box w={'50%'}></Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
