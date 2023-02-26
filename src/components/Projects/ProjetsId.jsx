import {ArrowBackIcon, ArrowDownIcon} from '@chakra-ui/icons'
import {
  Badge,
  Box,
  Button,
  calc,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'
import React, {useContext, useEffect, useRef, useState} from 'react'
import {Link, useLocation, useParams} from 'react-router-dom'
import Menu from '../Home/Menu/Menu'
import projetsdata from '../Home/Projects/floatingCards/FakeData'
import {colorsDD} from '../ui/colors/colors'
import Cursor from '../ui/cursor/Cursor'
import {CursorContext} from '../ui/cursor/CursorProvider'
import './gradient.css'
import {motion} from 'framer-motion' // Importer motion de framer-motion
import ImageProject from './ImageProject'
import Gradient from '../ui/GradientBgElems/Gradient'
import ButtonDD from '../ui/ButtonDD/ButtonDD'
import Canvas3d from '../Home/Main/3drocket/Canva'

export default function ProjetsId() {
  const {id} = useParams()
  const projet = projetsdata.find(projet => projet.id === parseInt(id))
  const [cursorData, setCursorData] = useContext(CursorContext)

  const [scrollY, setScrollY] = useState(1)
  const [scaleValue, setScaleValue] = useState(1)

  function handleScroll() {
    const scrollSection = document.getElementById('scrollsection')
    setScrollY(scrollSection.scrollTop)
  }

  const maxScroll = 100 - window.innerHeight

  useEffect(() => {
    const scrollSection = document.getElementById('scrollsection')
    scrollSection.addEventListener('scroll', handleScroll)
    return () => {
      scrollSection.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (scrollY === 0) {
      setScaleValue(1)
    } else if (scrollY < 0.5) {
      setScaleValue(0.5)
    } else {
      const newScaleValue = 1 + (scrollY / maxScroll) * 1.5
      setScaleValue(Math.max(0.5, newScaleValue))
    }
  }, [scrollY, maxScroll])

  // Utilisez la valeur de scrollY ici pour vos besoins

  const handleMouseClick = () => {
    setCursorData(prevState => ({
      ...prevState,
      mouseEnter: 'SmFull',
      mouseText: '⬅️',
    }))
  }

  const handleMouseLeave = () => {
    setCursorData(prevState => ({
      ...prevState,
      mouseEnter: 'default',
      mouseText: '',
    }))
  }
  const location = useLocation()
  const badgeRef = useRef(null)

  useEffect(() => {
    if (location.hash && badgeRef.current) {
      badgeRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }, [location.hash])
  return (
    <Box
      id="backgroundGradient"
      w={'100%'}
      padding={2}
      background={`linear-gradient(-45deg, ${projet.color1}, ${projet.color2},${projet.color1}, ${projet.color2})`}
      maxH={'100vh'}
    >
      <Menu color1={projet.color1} color2={projet.color2} blur={0} />
      <Flex
        id={'scrollsection'}
        bg={colorsDD.bgcolor}
        m={0}
        w={'100%'}
        flexDirection={'column'}
        alignItems={'center'}
        maxH={'calc(100vh - 15px)'}
        borderRadius={20}
        overflow={'scroll'}
        overflowX={'hidden'}
      >
        <Cursor />
        <Flex
          minH={'100vh'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={5}
          position="relative"
        >
          <Gradient colorG={projet.color1} versionG={1} indexG={0} />
          <Flex
            h={{base: '50vh', md: '50vh', lg: '70vh'}}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={{
              base: 'flex-start',
              md: 'flex-start',
              lg: 'center',
            }}
            gap={10}
            w={{base: '90vw', md: '90vw', lg: '100%'}}
          >
            <Flex gap={2}>
              <Link
                to={'/#projets'}
                onMouseLeave={handleMouseLeave}
                onClick={handleMouseLeave}
                onMouseEnter={handleMouseClick}
              >
                <Button
                  bgColor={projet.color1}
                  color={'white'}
                  leftIcon={<ArrowBackIcon />}
                  cursor={'none'}
                >
                  retour
                </Button>
              </Link>
              <Link
                to={'#badge'}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseClick}
                onClick={handleMouseLeave}
              >
                <Button
                  bgColor={projet.color1}
                  color={'white'}
                  leftIcon={<ArrowDownIcon />}
                  cursor={'none'}
                  className={'badge'}
                  ref={badgeRef}
                >
                  Découvrir
                </Button>
              </Link>
            </Flex>
            <motion.div
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.3, duration: 0.5}}
            >
              <Heading
                variant={'dew'}
                color={'white'}
                fontSize={{base: '27px', md: '30px', lg: '40px'}}
                colorBl
              >
                {projet.title}
              </Heading>
            </motion.div>
            <motion.div
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.4, duration: 0.5}}
            >
              <Text
                color={'white'}
                display="flex"
                pl={5}
                pr={5}
                textAlign="center"
                w={'75%'}
                ml={'auto'}
                mr={'auto'}
              >
                {projet.description}
              </Text>
            </motion.div>
          </Flex>
          <ImageProject image={projet.image} scale={scaleValue} />
        </Flex>
        <Flex
          minH={{base: '0px', md: '100px', lg: '100px'}}
          w={'100vw'}
          flexDirection={'row'}
          justifyContent="center"
          gap={2}
          alignItems={'flex-end'}
          mt={5}
        >
          {projet.categories.map((e, index) => {
            return (
              <Badge
                variant="subtle"
                colorScheme={projet.color1}
                key={index}
                backgroundColor={projet.color1}
                color={'white'}
                p={1}
                borderRadius={5}
              >
                {e}
              </Badge>
            )
          })}
        </Flex>
        <Flex
          mt={{base: '30px', md: '40px', lg: '40px'}}
          minH={'100vh'}
          flexWrap={'wrap'}
          w={{base: '90%', md: '90%', lg: '500px'}}
          position="relative"
          gap={'10px'}
          alignContent="flex-start"
          justifyContent={'center'}
        >
          <Gradient colorG={projet.color2} />
          <Flex
            w={'calc(50% - 5px)'}
            bg={projet.color2}
            minH={'200px'}
            p={5}
            borderRadius={10}
            alignItems={'flex-start'}
            flexDirection={'column'}
            gap={5}
          >
            <Badge bg={'#00000030'} color={'black'} p={1} borderRadius={5}>
              avis client
            </Badge>
            <Text color={'black'}>{projet.comment}</Text>
            <Flex>
              <Box color={'black'}>
                <Text fontWeight="bold">{projet.projectOwner}</Text>
                <Text fontSize="sm">Project Owner</Text>
              </Box>
            </Flex>
          </Flex>
          <Flex
            w={'calc(50% - 5px)'}
            bg={projet.color1}
            minH={'200px'}
            p={5}
            borderRadius={10}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Image src={projet.logo} w={'70%'} h={'auto'} />
          </Flex>
          <Flex
            w={'100%'}
            bg={projet.color1}
            minH={'200px'}
            p={5}
            borderRadius={10}
          >
            <Text color={'white'}>{projet.contribution}</Text>
          </Flex>
          <Box mt={20}>
            <ButtonDD
              text={'Contactez-moi 🚀'}
              colorButton={projet.color1}
              colorThemeDD={'custom'}
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
