import {Badge, Box, Flex, Heading, Image, Text} from '@chakra-ui/react'
import React, {useContext, useState} from 'react'
import {colorsDD} from '../../ui/colors/colors'
import {CursorContext} from '../../ui/cursor/CursorProvider'
import Gradient from '../../ui/GradientBgElems/Gradient'
import CanvasEgg from './3dEgg/Canva'

export default function Competences() {
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
        w={{base: '100%', md: '100%', lg: '1024px'}}
        flexDirection={{base: 'column', md: 'column', lg: 'row'}}
      >
        <Gradient colorG={colorsDD.green} versionG={3} />
        <Flex
          w={{base: '100%', md: '100%', lg: '40%'}}
          flexDirection={'column'}
          gap={{base: 0, md: 0, lg: 10}}
          position="relative"
          justifyContent={{base: 'flex-start', md: 'flex-start', lg: 'center'}}
        >
          <Heading
            variant={'dew'}
            color={'white'}
            fontSize={{base: '27px', md: '30px', lg: '40px'}}
          >
            Des compétences pour vous aider à faire{' '}
            <b
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{color: `${colorsDD.pink}`, fontWeight: '400'}}
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
          >
            <Image
              src="./images/identite/andrea-light-think.png"
              w={'50%'}
              zIndex={1}
            />
          </Flex>
          <Box p={5} borderRadius={20} bg={'#ffffff20'} position="relative">
            <Text
              color={'white'}
              display={{base: 'none', md: 'flex', lg: 'flex'}}
            >
              Mes compétences de frontend développeur vont <br></br>transformer
              vos idées en réalisations <br></br> solides et concrètes pour
              propulser <br></br> votre projet au sommet !
            </Text>
            <Text
              color={'white'}
              display={{base: 'flex', md: 'none', lg: 'none'}}
            >
              Mes compétences de frontend <br></br>développeur vont transformer
              <br></br> vos idées en réalisations <br></br>solides et concrètes
              <br></br> pour propulser votre <br></br>projet au sommet !
            </Text>
            <Box
              position={'absolute'}
              top={{base: '80px', md: '80px', lg: '80px'}}
              right={'-50px'}
              w={{base: '200px', md: '200px', lg: '250px'}}
              h={{base: '200px', md: '200px', lg: '250px'}}
            >
              <CanvasEgg hoverEgg={isHovering} />
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
        >
          <Image
            src="./images/identite/andrea-light-think.png"
            w={'100%'}
            zIndex={1}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
