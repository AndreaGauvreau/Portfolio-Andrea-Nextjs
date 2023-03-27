import {Badge, Box, Flex, Heading, Text} from '@chakra-ui/react'
import React, {useContext, useState} from 'react'
import {colorsDD} from '@/components/ui/colors/colors'
import {CursorContext} from '@/components/ui/cursor/CursorProvider'
import Gradient from '@/components/ui/GradientBgElems/Gradient'
import CanvasEgg from './3dEgg/Canva'
import Image from 'next/image'

export default function Competences({mousePos, setLoadingApi, loadingApi}) {
  const [isHovering, setIsHovering] = useState(false)
  const [cursorData, setCursorData] = useContext(CursorContext)

  const handleMouseEnter = () => {
    setIsHovering(true)
    setCursorData(prevState => ({
      ...prevState,
      mouseEnter: 'SmP',
      mouseText: '🐣',
    }))
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setCursorData(prevState => ({
      ...prevState,
      mouseEnter: 'default',
      mouseText: '',
    }))
  }

  return (
    <Flex
      h="90vh"
      w="100%"
      p={10}
      justifyContent="center"
      alignItems={{base: 'center', md: 'center', lg: 'center'}}
      gap={20}
      position="relative"
    >
      <Flex
        w={{base: '100%', md: '400px', lg: '1024px'}}
        flexDirection={{base: 'column', md: 'column', lg: 'row'}}
      >
        <Gradient colorG={colorsDD.green} versionG={3} />
        <Flex
          w={{base: '100%', md: '100%', lg: '40%'}}
          flexDirection={'column'}
          gap={{base: 0, md: 0, lg: 10}}
          maxW={{base: '400px', lg: '100%'}}
          position="relative"
          justifyContent={{base: 'center', md: 'flex-start', lg: 'center'}}
        >
          <Heading
            variant={'dew'}
            color={'white'}
            fontSize={'clamp(27.0px, 21.09px + 1.48vw, 40.00px)'}
            textAlign={{base: 'center', lg: 'left'}}
          >
            Des compétences pour faire{' '}
            <b
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{color: `${colorsDD.pink}`, fontWeight: '900'}}
            >
              éclore
            </b>{' '}
            votre projet
          </Heading>
          <Flex
            display={{base: 'flex', md: 'flex', lg: 'none'}}
            w="100%"
            h={'100%'}
            alignItems={'flex-end'}
            justifyContent={'center'}
            p={0}
            m={0}
            zIndex={1}
          >
            <Image
              src="/images/identite/andrea-thinking-lightup.png"
              alt="andrea-gauvreau-developpeur-front-end"
              width={200}
              loading="lazy"
              height={400}
            />
          </Flex>
          <Box p={5} borderRadius={20} bg={'#ffffff20'} position="relative">
            <Text
              color={'white'}
              display={{base: 'none', md: 'flex', lg: 'flex'}}
              fontSize={'15px'}
            >
              Mes compétences de Front-end développeur <br></br> vont
              transformer vos idées en réalisations <br></br> solides et
              concrètes pour propulser <br></br> votre projet au sommet !
            </Text>
            <Text
              color={'white'}
              display={{base: 'flex', md: 'none', lg: 'none'}}
            >
              Mes compétences de frontend développeur vont transformer vos idées
              en réalisations solides et concrètes pour propulser votre projet
              au sommet !
            </Text>
            <Box
              display={{base: 'none', lg: 'inline'}}
              position={'absolute'}
              top={{base: '80px', md: '80px', lg: '80px'}}
              right={'-50px'}
              w={{base: '200px', md: '200px', lg: '250px'}}
              h={{base: '200px', md: '200px', lg: '250px'}}
            >
              {loadingApi.main === false ? (
                ''
              ) : (
                <CanvasEgg
                  mousePos={mousePos}
                  loadingApi={loadingApi}
                  setLoadingApi={setLoadingApi}
                />
              )}
            </Box>
          </Box>
          <Flex gap={1} display={{base: 'none', md: 'none', lg: 'flex'}}>
            <Badge colorScheme={'dd'} padding={1} borderRadius={5}>
              Next
            </Badge>
            <Badge colorScheme={'dd'} padding={1} borderRadius={5}>
              React
            </Badge>
            <Badge
              background={colorsDD.pink20}
              color={colorsDD.pink}
              padding={1}
              borderRadius={5}
            >
              TypeScript
            </Badge>
            <Badge colorScheme={'dd'} padding={1} borderRadius={5}>
              Three...
            </Badge>
          </Flex>
        </Flex>
        <Flex
          display={{base: 'none', md: 'none', lg: 'flex'}}
          w="60%"
          h={'90vh'}
          alignItems={'flex-end'}
          justifyContent={'center'}
          zIndex={2}
        >
          <Box w={'1000px'}>
            <Image
              src="/images/identite/andrea-thinking-lightup.png"
              alt="andrea-gauvreau-developpeur-front-end"
              width={600}
              height={700}
              loading="lazy"
              quality={100}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
