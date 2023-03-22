import {Box, Flex, Heading, Text} from '@chakra-ui/react'
import React from 'react'
import ButtonDD from '@/components/ui/ButtonDD/ButtonDD'
import {colorsDD} from '@/components/ui/colors/colors'
import Gradient from '@/components/ui/GradientBgElems/Gradient'
import CanvaHand from './3dHand/CanvaHand'
import {Poppins} from 'next/font/google'

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '900'],
})

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
        w={{base: '100vw', lg: '1024px'}}
        h={'70%'}
        flexDirection={{base: 'column', md: 'column', lg: 'row'}}
        p={{base: 5, md: 3, lg: 0}}
        gap={10}
        position="relative"
      >
        <Gradient versionG={1} colorG={'#ffffff20'} />
        <Flex w={{base: '100%', md: '100%', lg: '66%'}}>
          <Box
            minH={'50vh'}
            w={'100%'}
            background={`linear-gradient(50deg, ${colorsDD.pink} 0%, ${colorsDD.green} 100%)`}
            borderRadius={20}
            p={0}
            boxShadow={`-30px 20px 60px 0px ${colorsDD.pink20}, 30px 40px 100px 0px ${colorsDD.green20}`}
          >
            <Heading
              textAlign="center"
              color={colorsDD.bgcolor}
              fontSize={{base: '27px', md: '30px', lg: '35px'}}
              pt={10}
              pl={10}
              pr={10}
            >
              Échangeons autour d'un café
            </Heading>
            <Text
              fontSize={{base: '13px', md: '15px', lg: '18px'}}
              fontWeight={'600'}
              color={colorsDD.bgcolor}
              className={fontPoppins.className}
              textAlign="center"
              pl={5}
              pr={5}
            >
              Et voyons ensemble comment pouvons-nous <br></br>faire évoluer
              votre projet !
            </Text>
            <CanvaHand />
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
          <ButtonDD
            text={'Contactez-moi'}
            link={'https://calendly.com/andrea-formizi/30min'}
            colorThemeDD={'light'}
          />
          <Flex display={{base: 'none', md: 'none', lg: 'flex'}}>
            <Box w={'50%'} borderRight={'5px solid white'} h={'15vh'}></Box>
            <Box w={'50%'}></Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
