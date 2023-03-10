'use client'
import {Badge, Box, Button, Flex, Heading, Text} from '@chakra-ui/react'
import {ArrowBackIcon, ArrowDownIcon} from '@chakra-ui/icons'
import Link from 'next/link'
import React, {useContext, useEffect, useRef, useState} from 'react'
import {CursorContext} from '../../components/ui/cursor/CursorProvider'
import Cursor from '../../components/ui/cursor/Cursor.jsx'
import Menu from '../../components/ui/Menu/Menu'
import projetsdata from '../../../db/data-projets'
import {colorsDD} from '../../components/ui/colors/colors'
import {motion} from 'framer-motion'
import {Abril_Fatface} from '@next/font/google'
import Gradient from '../../components/ui/GradientBgElems/Gradient'
import ButtonDD from '../../components/ui/ButtonDD/ButtonDD'
import Image from 'next/image'
import '../gradient.css'
import ImageProject from '../ImageProject'
import {Canvas, useFrame} from '@react-three/fiber'
import {Center, PresentationControls, Text3D} from '@react-three/drei'
import CanvasText from './CanvasText'

const climatefont = Abril_Fatface({
  subsets: ['latin-ext'],
  weight: '400',
})
export default function ScrollElement({image}) {
  const [scrollY, setScrollY] = useState(1)
  const [scaleValue, setScaleValue] = useState(1)

  function handleScroll() {
    const scrollSection = document.getElementById('scrollsection')
    const maxScroll = 100 - scrollSection.clientHeight
    setScrollY(scrollSection.scrollTop)
  }

  useEffect(() => {
    const scrollSection = document.getElementById('scrollsection')
    const maxScroll = 100 - scrollSection.clientHeight
    scrollSection.addEventListener('scroll', handleScroll)
    return () => {
      scrollSection.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const maxScroll =
      100 - document.getElementById('scrollsection').clientHeight
    if (scrollY === 0) {
      setScaleValue(1)
    } else if (scrollY < 0.5) {
      setScaleValue(0.5)
    } else {
      const newScaleValue = 1 + (scrollY / maxScroll) * 1.5
      setScaleValue(Math.max(0.5, newScaleValue))
    }
  }, [scrollY])

  return <ImageProject image={image} scale={scaleValue} />
}

export function ButtonPageElement({projetDatas}) {
  const [cursorData, setCursorData] = useContext(CursorContext)

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
  return (
    <Flex gap={2}>
      <Link
        href={'/'}
        onMouseLeave={handleMouseLeave}
        onClick={handleMouseLeave}
        onMouseEnter={handleMouseClick}
      >
        <Button
          bgColor={projetDatas?.color1}
          color={'white'}
          leftIcon={<ArrowBackIcon />}
          cursor={'none'}
          _hover={{bg: projetDatas?.color2, color: projetDatas?.color1}}
          _active={{
            transform: 'scale(0.95)',
          }}
        >
          retour
        </Button>
      </Link>
      <Link
        href={`/projets/${projetDatas?.slug}#badge`}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseClick}
        onClick={handleMouseLeave}
      >
        <Button
          bgColor={projetDatas?.color1}
          color={'white'}
          leftIcon={<ArrowDownIcon />}
          cursor={'none'}
          className={'badge'}
          _hover={{bg: projetDatas?.color2, color: projetDatas?.color1}}
          _active={{
            transform: 'scale(0.95)',
          }}
        >
          Découvrir
        </Button>
      </Link>
    </Flex>
  )
}
export function ContentPage({params}) {
  const datas = projetsdata
  const [projetDatas, setProjetDatas] = useState({
    id: 8,
    color1: '#398ffc',
    color2: colorsDD?.green,
    title: 'SchoolBooster',
    slug: 'schoolBooster',
    dateStart: 'Janvier 2023',
    dateEnd: 'Mars 2023',
    description:
      "SchoolBooster est une plateforme de gestion de formation et d'équipe",
    contribution: `J'ai contribué à l'amélioration de lateamV2, je me suis principalement occupé de divers problème ui/ux, appels API avec react Query. J'ai eu la chance d'être épaulé par un developpeur senior tout au long de cette mission ce qui a grandement augmenté mes compétences de developpeur`,
    categories: ['React', 'React Query', 'Chakra Ui'],
    image: '/images/schoolbooster.jpg',
    hash: 'LkFslT%gE0Io%%ohRkWEE4M|xu%2',
    projectOwner: 'Mike Codeur',
    comment: 'Merci à andréa pour son aide apporté au projet',
    logo: '/images/logo-teachizi-blanc-450x102.png',
    stack: [
      'React',
      'Jest',
      'React Query',
      'Github',
      'Chakra UI',
      'TypeScript',
      'MDeditor',
      'AWS',
      'GraphQL',
      'Formik',
    ],
    missions: [
      '🚧 Construire des formulaires Formik',
      "🚧 Construire et améliorer l'ui/ux de l'app",
      "🚧 Construire et améliorer l'ui/ux du site",
      "🐣 Création d'espaces dédiées sur l'app pour les 2 types d'utilisateurs",
      "🐣 Création d'appels API avec GraphQl et React Query",
      "🏅 Optimisation Des Performances de l'app",
      "🤌 Travail d'équipe au quotidien sur Github",
      '🛟 Mise en place des tests avec JEST',
    ],
    retourVideo:
      'https://www.youtube.com/watch?v=y6oMutwJQCw&ab_channel=4KRelaxationChannel',
  })
  useEffect(() => {
    const theid = params?.slug
    if (theid) {
      console.log(theid)
      const job = datas.find(projet => projet.slug === theid)
      setProjetDatas(job)
    } else {
      console.log('passe pas')
    }
  }, [params?.slug])
  return (
    <>
      <Box
        id="backgroundGradient"
        w={'100%'}
        padding={2}
        background={`linear-gradient(-45deg, ${projetDatas?.color1}, ${projetDatas?.color2},${projetDatas?.color1}, ${projetDatas?.color2})`}
        maxH={'100vh'}
      >
        <Cursor />
        <Menu
          color1={projetDatas?.color1}
          color2={projetDatas?.color2}
          blur={0}
        />
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
          <Flex
            minH={'100vh'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={5}
            position="relative"
          >
            {' '}
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
              <ButtonPageElement projetDatas={projetDatas} />
              <motion.div
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.3, duration: 0.5}}
              >
                <Heading
                  color={'white'}
                  fontSize={{base: '27px', md: '30px', lg: '40px'}}
                  colorBl
                  fontWeight={400}
                >
                  {projetDatas?.title}
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
                  {projetDatas?.description}
                </Text>
              </motion.div>
            </Flex>
            <ScrollElement image={projetDatas?.image} />
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
            {projetDatas?.categories.map((e, index) => {
              return (
                <Badge
                  variant="subtle"
                  colorScheme={projetDatas?.color1}
                  key={index}
                  backgroundColor={projetDatas?.color1}
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
            <Gradient colorG={projetDatas?.color2} />
            <Flex
              w={'calc(50% - 5px)'}
              bg={projetDatas?.color2}
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
              <Text color={'black'}>{projetDatas?.comment}</Text>
              <Flex>
                <Box color={'black'}>
                  <Text fontWeight="bold">{projetDatas?.projectOwner}</Text>
                  <Text fontSize="sm">Project Owner</Text>
                </Box>
              </Flex>
            </Flex>
            <Flex
              w={'calc(50% - 5px)'}
              bg={projetDatas?.color1}
              minH={'200px'}
              p={5}
              borderRadius={10}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Image
                src={projetDatas?.logo}
                width={170}
                height={70}
                alt={projetDatas?.description}
              />
            </Flex>
            <Flex
              w={'100%'}
              bg={projetDatas?.color1}
              minH={'200px'}
              p={5}
              borderRadius={10}
            >
              <Text color={'white'}>{projetDatas?.contribution}</Text>
            </Flex>
            <Flex flexDirection={'column'} gap={3} alignItems="center">
              <Heading color={'white'}>Missions</Heading>
              {projetDatas.missions.map((e, index) => {
                return (
                  <MissionsList
                    mission={e}
                    color={projetDatas.color1}
                    key={index}
                  />
                )
              })}
              <Heading color={'white'}>Stack</Heading>
              <CanvasText projetDatas={projetDatas} />
            </Flex>

            <Box mt={20}>
              <ButtonDD
                text={'Contactez-moi 🚀'}
                colorButton={projetDatas?.color1}
                colorThemeDD={'custom'}
                link={'https://calendly.com/andrea-formizi/30min'}
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

const MissionsList = ({mission, color}) => {
  const color1 = color => {
    const newColor = color + '30'
    return newColor
  }
  const newColor = color1(color)
  console.log(newColor)
  return (
    <>
      <Box
        bg={`linear-gradient(60deg,${colorsDD.bgcolor},${newColor})`}
        p={2}
        borderRadius={5}
        width={{base: '350px', md: '500px'}}
        border={`0.5px solid ${newColor}`}
        transition={'0.5s ease'}
        _hover={{
          width: {base: 'calc(350px - 20px)', md: 'calc(500px - 20px)'},
          bg: `linear-gradient(60deg,${colorsDD.bgcolor},${color})`,
          border: `0.5px solid ${color}`,
        }}
      >
        <Text color={'white'} fontSize={'13px'}>
          {mission}
        </Text>
      </Box>
    </>
  )
}
