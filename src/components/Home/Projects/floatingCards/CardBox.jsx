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
import {colorsDD} from '../../../ui/colors/colors'
import {Link} from 'react-router-dom'
import {CursorContext} from '../../../ui/cursor/CursorProvider'
import {decode} from 'blurhash'
import {Blurhash} from 'react-blurhash'
export default function Cards({datas, currentIndex, length}) {
  const [pos, setPos] = useState('-50%')
  const [index, setIndex] = useState(1)
  const [transform, setTransform] = useState(0)
  const [scale, setScale] = useState(1)
  const [opcaticy, setOpacity] = useState(1)
  const [blur, setBlur] = useState('0px')

  const diff = Math.abs(currentIndex - datas.id)
  useEffect(() => {
    if (datas.id === currentIndex) {
      setPos('-50%')
      setIndex(6)
      setTransform(0)
      setScale(1)
      setOpacity(1)
      setBlur('0px')
    } else {
      const diff = datas.id - currentIndex
      if (diff === 1) {
        setPos('-100%')
        setIndex(4)
        setTransform(-10)
        setScale(0.8)
        setOpacity(0.7)
        setBlur('4px')
      } else if (diff === -1) {
        setPos('0%')
        setIndex(4)
        setTransform(10)
        setScale(0.8)
        setOpacity(0.7)
        setBlur('4px')
      } else if (diff === 2) {
        setPos('-150%')
        setIndex(3)
        setTransform(-20)
        setScale(0.4)
        setOpacity(0.2)
        setBlur('30px')
      } else if (diff === -2) {
        setPos('50%')
        setIndex(3)
        setTransform(20)
        setScale(0.4)
        setOpacity(0.2)
        setBlur('30px')
      } else if (diff === length) {
        setPos('-50%')
        setIndex(5)
        setTransform(0)
        setScale(1)
        setOpacity(1)
        setBlur('0px')
      } else if (diff === length - 1) {
        setPos('0%')
        setIndex(4)
        setTransform(10)
        setScale(0.8)
        setOpacity(0.7)
        setBlur('4px')
      } else if (diff === length - 2) {
        setPos('50%')
        setIndex(3)
        setTransform(20)
        setScale(0.4)
        setOpacity(0.2)
        setBlur('20px')
      } else {
        setScale(0)
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
  const hashData = datas?.hash
  const decodeImage = decode(hashData, 32, 32)
  console.log('hashData', hashData)
  console.log('decodeImage', decodeImage)

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
        bgColor={colorsDD.bgcolor2}
        color={'white'}
        filter={`blur(${blur})`}
        borderRadius={10}
      >
        <CardBody p={4}>
          <Blurhash hash={hashData} />
          <Link to={`/projets/${datas.id}`}>
            <Box
              bgImage={datas?.image}
              w="100%"
              h={{base: '150px', md: '150px', lg: '250px'}}
              bgSize="cover"
              bgPosition={'center'}
              borderRadius={10}
              onMouseEnter={handleMouseClick}
              onMouseLeave={handleMouseLeave}
              onClick={handleMouseLeave}
              cursor={'none'}
            />
          </Link>
          <Stack mt="6" spacing="3">
            <Heading
              variant="dew"
              fontFamily={'bely-display, sans-serif'}
              size={{base: 'sm', md: 'md', lg: 'xl'}}
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
      </Card>
    </>
  )
}
