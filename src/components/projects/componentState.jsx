import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Skeleton,
  Text,
} from '@chakra-ui/react'
import {ArrowBackIcon, ArrowDownIcon} from '@chakra-ui/icons'
import Link from 'next/link'
import React, {useContext, useState} from 'react'
import {CursorContext} from '@/components/ui/cursor/CursorProvider'
import Cursor from '@/components/ui/cursor/Cursor.jsx'
import Menu from '@/components/ui/Menu/Menu'
import {colorsDD} from '@/components/ui/colors/colors'
import {motion} from 'framer-motion'
import Gradient from '@/components/ui/GradientBgElems/Gradient'
import ButtonDD from '@/components/ui/ButtonDD/ButtonDD'
import Image from 'next/image'
import '@/components/projects/gradient.css'
import ImageProject from '@/components/projects/ImageProject'
import ReactPlayer from 'react-player'
import SkeletonProjetPage from './skeletonProjetPage'

export function ButtonPageElement({projetDatas}) {
  const [cursorData, setCursorData] = useContext(CursorContext)

  const handleMouseClick = () => {
    setCursorData(prevState => ({
      ...prevState,
      mouseEnter: 'SmFull',
      mouseText: '⬅️',
    }))
  }
  const handleMouseScrollClick = () => {
    setCursorData(prevState => ({
      ...prevState,
      mouseEnter: 'SmFull',
      mouseText: '⬇️',
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
        href={`/${projetDatas?.slug}#badge`}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseScrollClick}
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
          scroll pour découvrir
        </Button>
      </Link>
    </Flex>
  )
}
export function ContentPage({datas, loading, error}) {
  const color1 = coopacityColor(datas?.color1)
  if (loading) {
    return <SkeletonProjetPage datas={datas} />
  }
  const [loadingVideo, setLoadingVideo] = useState(true)

  const handleVideoLoad = () => {
    setLoadingVideo(false)
  }
  return (
    <>
      <Box
        id="backgroundGradient"
        w={'100%'}
        padding={2}
        background={`linear-gradient(-45deg, ${datas?.color1}, ${datas?.color2},${datas?.color1}, ${datas?.color2})`}
        maxH={{base: '100svh', md: '100vh'}}
      >
        <Flex>
          <Cursor />
          <Menu color1={datas?.color1} color2={datas?.color2} blur={0} />
          <Flex
            id={'scrollsection'}
            bg={colorsDD.bgcolor}
            m={0}
            w={'100%'}
            flexDirection={'column'}
            alignItems={'center'}
            maxH={{base: 'calc(100svh - 15px)', md: 'calc(100vh - 15px)'}}
            borderRadius={20}
            overflow={'scroll'}
            overflowX={'hidden'}
            gap={5}
          >
            <Flex
              minH={{base: '100svh', md: '100vh'}}
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
                <ButtonPageElement projetDatas={datas} />
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
                    {datas?.title}
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
                    {datas?.description}
                  </Text>
                </motion.div>
              </Flex>
              <ImageProject image={datas?.image} />
            </Flex>

            <Flex
              id={'stack'}
              minH={{base: 'auto', md: '100px', lg: '220px'}}
              justifyContent="flex-end"
              flexDirection={'column'}
              w={{base: '90%', md: '90%', lg: '500px'}}
              gap={3}
              alignItems="center"
            >
              <Heading p={2} color={'white'}>
                Stack
              </Heading>
              <Flex flexWrap={'wrap'} gap={2} justifyContent="center">
                {datas?.stack.map((e, index) => {
                  return (
                    <StackList
                      stack={e}
                      color={datas.color2}
                      key={index}
                      projetDatas={datas}
                    />
                  )
                })}
              </Flex>
            </Flex>

            {datas?.retourVideo ? (
              <Flex
                id={'retourclient'}
                flexDirection={'column'}
                gap={3}
                alignItems="center"
              >
                <Heading p={2} color={'white'}>
                  Retour Client
                </Heading>
                <Box
                  width={{base: '350px', md: '480px'}}
                  height={{base: '100%', md: '270x'}}
                  m={0}
                  p={0}
                  overflow="hidden"
                  borderRadius={10}
                  boxShadow={`0px 15px 50px 0px ${datas?.color1}10`}
                >
                  {loadingVideo ? (
                    <Skeleton
                      width="100%"
                      height="100%"
                      startColor={datas?.color1}
                      endColor={datas?.color2}
                    />
                  ) : (
                    ''
                  )}
                  <ReactPlayer
                    url={datas?.retourVideo}
                    width="100%"
                    height="100%"
                    onReady={handleVideoLoad}
                    controls
                  />
                </Box>
              </Flex>
            ) : (
              ''
            )}
            <Flex
              id={'details'}
              flexWrap={'wrap'}
              w={{base: '90%', md: '90%', lg: '500px'}}
              position="relative"
              gap={2}
              alignContent="flex-start"
              justifyContent={'center'}
            >
              <Heading p={2} color={'white'} w={'100%'} textAlign="center">
                Détails
              </Heading>
              <Gradient colorG={color1} versionG={1} />

              <Flex
                w={'calc(50% - 5px)'}
                bg={`linear-gradient(290deg,${colorsDD.bgcolor},${color1})`}
                minH={'200px'}
                p={5}
                borderRadius={10}
                alignItems={'flex-start'}
                flexDirection={'column'}
                gap={5}
                border={`0.5px solid ${datas?.color1}`}
              >
                <Badge
                  bg={color1}
                  color={datas?.color1}
                  p={1}
                  border={`0px solid ${color1}`}
                  borderRadius={5}
                >
                  avis client
                </Badge>
                <Text color={datas?.color1}>{datas?.comment}</Text>
                <Flex>
                  <Box color={datas?.color1}>
                    <Text fontWeight="bold">{datas?.projectOwner}</Text>
                    <Text fontSize="sm">Project Owner</Text>
                  </Box>
                </Flex>
              </Flex>
              <Flex
                w={'calc(50% - 5px)'}
                bg={datas?.color1}
                minH={'200px'}
                p={5}
                borderRadius={10}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Image
                  src={datas?.logo}
                  width={170}
                  height={70}
                  alt={datas?.description}
                />
              </Flex>
              <Flex
                w={'100%'}
                bg={datas?.color1}
                minH={'200px'}
                p={5}
                borderRadius={10}
              >
                <Text color={'white'}>{datas?.contribution}</Text>
              </Flex>
            </Flex>
            <Flex
              id={'mission'}
              flexDirection={'column'}
              gap={3}
              alignItems="center"
            >
              <Heading p={2} color={'white'}>
                Missions
              </Heading>
              {datas?.missions.map((e, index) => {
                return (
                  <MissionsList mission={e} color={datas?.color1} key={index} />
                )
              })}
            </Flex>

            <Box mt={20} mb={20}>
              <ButtonDD
                text={'Contactez-moi 🚀'}
                colorButton={datas?.color1}
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
  const color1 = coopacityColor(color)
  return (
    <>
      <Box
        bg={`linear-gradient(60deg,${colorsDD.bgcolor},${color1})`}
        p={2}
        borderRadius={5}
        width={{base: '350px', md: '500px'}}
        border={`0.5px solid ${color1}`}
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

const StackList = ({stack, color, projetDatas}) => {
  const color1 = coopacityColor(color)
  const delay = Math.random() * 2

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5, delay}}
    >
      <Box
        bg={color1}
        border={`1px solid ${projetDatas.color2}`}
        p={2}
        borderRadius={5}
        w={'auto'}
        transition={'0.5s ease'}
        _hover={{pl: 3, pr: 3}}
      >
        <Text color={'white'} fontSize={'13px'}>
          {stack}
        </Text>
      </Box>
    </motion.div>
  )
}

export const coopacityColor = color => {
  const newColor = color + '50'
  return newColor
}
