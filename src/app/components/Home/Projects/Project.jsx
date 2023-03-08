import {Box, Flex, Heading, Text} from '@chakra-ui/react'
import React, {useRef} from 'react'
import ButtonDD from '../../ui/ButtonDD/ButtonDD'
import {colorsDD} from '../../ui/colors/colors'
import Gradient from '../../ui/GradientBgElems/Gradient'
import CardMap from './floatingCards/CardsContent'
import {Poppins} from 'next/font/google'

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '900'],
})
export default function Project() {
  const projetsRef = useRef(null)

  return (
    <Flex
      minH="100vh"
      w="100%"
      m="0"
      p={{base: '20px', md: '10px', lg: '0px'}}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      bgSize="cover"
      boxSizing="border-box"
      position={'relative'}
      id={'projets'}
      className={'projets'}
      ref={projetsRef}
      bg={'linear-gradient(180deg, #ffffff05, #ffffff00)'}
    >
      <Flex
        w={{base: '100%', md: '100%', lg: '1024px'}}
        flexDirection={{base: 'column', md: 'column', lg: 'column'}}
        gap={{base: 5, md: 0, lg: 0}}
      >
        <Gradient colorG={colorsDD.pink} versionG={1} />
        <Heading
          variant={'dew'}
          zIndex={10}
          color={'white'}
          textAlign="center"
          fontSize={{base: '27px', md: '30px', lg: '40px'}}
        >
          Projets après Projets
        </Heading>
        <Text
          fontSize={{base: '13px', md: '15px', lg: '18px'}}
          fontWeight={'600'}
          lineHeight={{base: '13px', md: '15px', lg: '18px'}}
          className={fontPoppins.className}
          textAlign={'center'}
          color={'white'}
          zIndex={10}
          mt={3}
        >
          Que de beaux projets ! <br></br>
          Peut-être serez-vous le prochain ?
        </Text>
        <CardMap />
      </Flex>
    </Flex>
  )
}
