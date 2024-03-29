import React, {useContext} from 'react'
import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Box,
  TagLabel,
  Tag,
  Flex,
} from '@chakra-ui/react'

import {useState} from 'react'
import {useEffect} from 'react'
import {colorsDD} from '@/components/ui/colors/colors'
import {CursorContext} from '@/components/ui/cursor/CursorProvider'
import Link from 'next/link'
import Image from 'next/image'
import SkeletonProjet from './SkeletonProjet'
export default function Cards({datas, currentIndex, length}) {
  const [pos, setPos] = useState('-50%')
  const [index, setIndex] = useState(1)
  const [transform, setTransform] = useState(0)
  const [scale, setScale] = useState(1)
  const [opcaticy, setOpacity] = useState(1)
  const [blur, setBlur] = useState('0px')
  const [className, setClassName] = useState('noanim')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (datas) {
      setLoading(false)
    }
  }, [datas])

  const diff = Math.abs(currentIndex - datas.id)
  useEffect(() => {
    if (datas.id === currentIndex) {
      setPos('-50%')
      setIndex(6)
      setTransform(0)
      setScale(1)
      setOpacity(1)
      setBlur('0px')
      setClassName('boxEffect')
    } else {
      const diff = datas.id - currentIndex
      if (diff === 1) {
        setPos('-100%')
        setIndex(4)
        setTransform(-10)
        setScale(0.8)
        setOpacity(0.7)
        setBlur('4px')
        setClassName('noanim')
      } else if (diff === -1) {
        setPos('0%')
        setIndex(4)
        setTransform(10)
        setScale(0.8)
        setOpacity(0.7)
        setBlur('4px')
        setClassName('noanim')
      } else if (diff === 2) {
        setPos('-150%')
        setIndex(3)
        setTransform(-20)
        setScale(0.4)
        setOpacity(0.2)
        setBlur('30px')
        setClassName('noanim')
      } else if (diff === -2) {
        setPos('50%')
        setIndex(3)
        setTransform(20)
        setScale(0.4)
        setOpacity(0.2)
        setBlur('30px')
        setClassName('noanim')
      } else if (diff === length) {
        setPos('-50%')
        setIndex(5)
        setTransform(0)
        setScale(1)
        setOpacity(1)
        setBlur('0px')
        setClassName('boxEffect')
      } else if (diff === length - 1) {
        setPos('0%')
        setIndex(4)
        setTransform(10)
        setScale(0.8)
        setOpacity(0.7)
        setBlur('4px')
        setClassName('noanim')
      } else if (diff === length - 2) {
        setPos('50%')
        setIndex(3)
        setTransform(20)
        setScale(0.4)
        setOpacity(0.2)
        setBlur('20px')
        setClassName('noanim')
      } else {
        setScale(0)
        setClassName('boxEffect')
      }
    }
  }, [currentIndex, datas.id, length])
  const [cursorData, setCursorData] = useContext(CursorContext)

  const handleMouseClick = () => {
    setCursorData(prevState => ({
      ...prevState,
      mouseEnter: 'Lg',
      mouseText: '👆',
    }))
  }

  const handleMouseLeave = () => {
    setCursorData(prevState => ({
      ...prevState,
      mouseEnter: 'default',
      mouseText: '',
    }))
  }
  if (loading) {
    return (
      <SkeletonProjet pos={(pos, transform, scale, index, opcaticy, blur)} />
    )
  } else
    return (
      <>
        <Card
          maxW="sm"
          w={{base: '250px', md: '250px', lg: '350px'}}
          position={'absolute'}
          top={'50%'}
          left={'50%'}
          transform={`translate(${pos},-50%) rotate(${transform}deg) scale(${scale})`}
          transition={'0.5s ease'}
          transformOrigin="center"
          zIndex={index}
          opacity={opcaticy}
          color={'white'}
          filter={`blur(${blur})`}
          borderRadius={10}
          bg={'#ffffff00'}
          overflow={'hidden'}
          p={1}
        >
          <Box className={className} bg={colorsDD.bgcolor2} borderRadius={10}>
            <CardBody p={4}>
              <Link href={`/${datas?.slug}`}>
                <Box
                  w="100%"
                  bgSize="cover"
                  bgPosition={'center'}
                  onMouseEnter={handleMouseClick}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleMouseLeave}
                  cursor={'none'}
                  borderRadius={10}
                  overflow="hidden"
                >
                  <Image
                    src={datas?.image}
                    width={350}
                    height={350}
                    alt={datas?.description}
                  />
                </Box>
              </Link>
              <Stack mt="6" spacing="3">
                <Heading
                  fontSize={{
                    base: '23px',
                    lg: 'clamp(20.0px, 21.09px + 1.48vw, 40.00px)',
                  }}
                >
                  {datas?.title}
                </Heading>
                <Text fontSize={{base: 'xs', md: 'sm', lg: 'lg'}}>
                  {datas?.description}
                </Text>
                <Flex gap={2} wrap={'wrap'}>
                  {datas.categories.map(name => (
                    <Tag key={name} variant="subtle" colorScheme="dew">
                      <TagLabel fontSize={{base: 'xs', md: 'sm', lg: 'md'}}>
                        {name}
                      </TagLabel>
                    </Tag>
                  ))}
                </Flex>
              </Stack>
            </CardBody>
          </Box>
        </Card>
      </>
    )
}
