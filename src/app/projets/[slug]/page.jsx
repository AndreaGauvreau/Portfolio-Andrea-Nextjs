'use client'
import {ArrowBackIcon, ArrowDownIcon} from '@chakra-ui/icons'
import {Badge, Box, Button, Flex, Heading, Image, Text} from '@chakra-ui/react'
import {useContext, useEffect, useState} from 'react'
import projetsdata from '../../../db/data-projets.jsx'
import Menu from '../../components/Home/Menu/Menu.jsx'
import {colorsDD} from '../../components/ui/colors/colors'
import {motion} from 'framer-motion' // Importer motion de framer-motion
import ImageProject from '../ImageProject'
import Gradient from '../../components/ui/GradientBgElems/Gradient'
import ButtonDD from '../../components/ui/ButtonDD/ButtonDD'
import Link from 'next/link.js'
import {CursorContext} from '../../components/ui/cursor/CursorProvider.jsx'
import Cursor from '../../components/ui/cursor/Cursor.jsx'
import '../gradient.css'
import {Abril_Fatface} from '@next/font/google'

const climatefont = Abril_Fatface({
  subsets: ['latin-ext'],
  weight: '400',
})

export default function Page({params}) {
  const [cursorData, setCursorData] = useContext(CursorContext)
  const datas = projetsdata
  const [projetDatas, setProjetDatas] = useState({
    id: 2,
    color1: '#398ffc',
    slug: 'schoolbooster',
    color2: 'red',
    title: 'SchoolBooster',
    dateStart: 'Janvier 2023',
    dateEnd: 'Mars 2023',
    description:
      "la Team V2 est une plateforme de gesttion de formation et d'équipe",
    contribution: `J'ai contribué à l'amélioration de lateamV2, je me suis principalement occupé de divers problème ui/ux, appels API avec react Query. J'ai eu la chance d'être épaulé par un developpeur senior tout au long de cette mission ce qui a grandement augmenté mes compétences de developpeur`,
    categories: ['React', 'React Query', 'Chakra Ui'],
    image: '/images/schoolbooster.jpg',
    hash: 'LkFslT%gE0Io%%ohRkWEE4M|xu%2',
    projectOwner: 'Mathis Thomas',
    comment: "Notre projet à vu le jour grâce au travail d'andréa",
    logo: '/images/logo-teachizi-blanc-450x102.png',
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
    <>
      <Box
        id="backgroundGradient"
        w={'100%'}
        padding={2}
        background={`linear-gradient(-45deg, ${projetDatas.color1}, ${projetDatas.color2},${projetDatas.color1}, ${projetDatas.color2})`}
        maxH={'100vh'}
      >
        <Cursor />
        <Menu
          color1={projetDatas.color1}
          color2={projetDatas.color2}
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
                  href={'/#projets'}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleMouseLeave}
                  onMouseEnter={handleMouseClick}
                >
                  <Button
                    bgColor={projetDatas.color1}
                    color={'white'}
                    leftIcon={<ArrowBackIcon />}
                    cursor={'none'}
                  >
                    retour
                  </Button>
                </Link>
                <Link
                  href={'#badge'}
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseClick}
                  onClick={handleMouseLeave}
                >
                  <Button
                    bgColor={projetDatas.color1}
                    color={'white'}
                    leftIcon={<ArrowDownIcon />}
                    cursor={'none'}
                    className={'badge'}
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
                  color={'white'}
                  fontSize={{base: '27px', md: '30px', lg: '40px'}}
                  colorBl
                  className={climatefont.className}
                >
                  {projetDatas.title}
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
                  {projetDatas.description}
                </Text>
              </motion.div>
            </Flex>
            <ImageProject image={projetDatas.image} scale={scaleValue} />
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
            {projetDatas.categories.map((e, index) => {
              return (
                <Badge
                  variant="subtle"
                  colorScheme={projetDatas.color1}
                  key={index}
                  backgroundColor={projetDatas.color1}
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
            <Gradient colorG={projetDatas.color2} />
            <Flex
              w={'calc(50% - 5px)'}
              bg={projetDatas.color2}
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
              <Text color={'black'}>{projetDatas.comment}</Text>
              <Flex>
                <Box color={'black'}>
                  <Text fontWeight="bold">{projetDatas.projectOwner}</Text>
                  <Text fontSize="sm">Project Owner</Text>
                </Box>
              </Flex>
            </Flex>
            <Flex
              w={'calc(50% - 5px)'}
              bg={projetDatas.color1}
              minH={'200px'}
              p={5}
              borderRadius={10}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Image src={projetDatas.logo} w={'70%'} h={'auto'} />
            </Flex>
            <Flex
              w={'100%'}
              bg={projetDatas.color1}
              minH={'200px'}
              p={5}
              borderRadius={10}
            >
              <Text color={'white'}>{projetDatas.contribution}</Text>
            </Flex>
            <Box mt={20}>
              <ButtonDD
                text={'Contactez-moi 🚀'}
                colorButton={projetDatas.color1}
                colorThemeDD={'custom'}
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
