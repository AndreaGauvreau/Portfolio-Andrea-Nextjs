'use client'
import React, {useEffect, useState} from 'react'
import {Box, Flex, Heading, Icon, Text} from '@chakra-ui/react'
import Tool from '@/components/tools/textclamp/tool'
import {motion} from 'framer-motion'

import {colorsDD} from '@/components/ui/colors/colors'
import './gradientbg.css'
import {DragHandleIcon, ViewIcon} from '@chakra-ui/icons'

export default function MainSection() {
  const [fontSizeMin, setFontSizeMin] = useState('20')
  const [fontSizeMax, setFontSizeMax] = useState('50')
  const [viewportWidthMin, setViewportWidthMin] = useState('400')
  const [viewportWidthMax, setViewportWidthMax] = useState('800')

  const [fontSizeMinUnit, setFontSizeMinUnit] = useState('px')
  const [fontSizeMaxUnit, setFontSizeMaxUnit] = useState('px')
  const [viewportWidthMinUnit, setViewportWidthMinUnit] = useState('px')
  const [viewportWidthMaxUnit, setViewportWidthMaxUnit] = useState('px')
  const generateClampValue = () => {
    if (fontSizeMin && fontSizeMax && viewportWidthMin && viewportWidthMax) {
      const minFontSize = `${fontSizeMin}${fontSizeMinUnit}`
      const maxFontSize = `${fontSizeMax}${fontSizeMaxUnit}`
      const minViewportWidth = `${viewportWidthMin}${viewportWidthMinUnit}`
      const maxViewportWidth = `${viewportWidthMax}${viewportWidthMaxUnit}`

      const slope =
        (fontSizeMax - fontSizeMin) / (viewportWidthMax - viewportWidthMin)
      const intercept = fontSizeMin - slope * viewportWidthMin

      return `font-size: clamp(${parseFloat(minFontSize).toFixed(
        1,
      )}px, ${parseFloat(intercept).toFixed(
        2,
      )}${fontSizeMinUnit} + ${parseFloat(slope * 100).toFixed(
        2,
      )}vw, ${parseFloat(maxFontSize).toFixed(2)}px);`
    }

    return 'font-size: 1rem;' // Valeur par défaut si les champs ne sont pas remplis
  }

  const codeCopy = generateClampValue()

  const [width, setWidth] = useState(400)
  const [height, setHeight] = useState(200)
  const [fontSize, setFontSize] = useState('1rem')

  const handleDragWidth = (e, info) => {
    setWidth(prevWidth => prevWidth + info.delta.x)
  }

  useEffect(() => {
    const slope =
      (fontSizeMax - fontSizeMin) / (viewportWidthMax - viewportWidthMin)
    const intercept = fontSizeMin - slope * viewportWidthMin

    const newFontSize = slope * width + parseFloat(intercept.toFixed(2))
    setFontSize(
      `${Math.round(
        Math.min(Math.max(newFontSize, fontSizeMin), fontSizeMax),
      )}px`,
    )
  }, [width, fontSizeMin, fontSizeMax, viewportWidthMin, viewportWidthMax])
  const bgcolor =
    fontSize === `${fontSizeMax}px` || fontSize === `${fontSizeMin}px`
      ? colorsDD.bgcolor
      : 'orange'
  const bgcolorBox =
    width >= viewportWidthMax || width <= viewportWidthMin
      ? colorsDD.bgcolor
      : 'orange'

  return (
    <>
      <Flex
        className="gradient-bg"
        w={'100vw'}
        h={'100vh'}
        maxW={'100vw'}
        overflow={'hidden'}
        justifyContent="center"
        alignItems={'center'}
        bgGradient={`linear(to-l, ${colorsDD.green}, ${colorsDD.pink},${colorsDD.green}, ${colorsDD.pink})`}
        color={'white'}
        position="relative"
        flexDir={'column'}
        gap={5}
      >
        <Flex
          w={{base: '90vw', md: '80vw', lg: '992px'}}
          h={{base: 'auto', lg: 'auto'}}
          bg={colorsDD.bgcolor}
          flexDirection="column"
          justifyContent={'center'}
          alignItems={'center'}
          p={10}
          gap={10}
          borderRadius={10}
        >
          <Heading as={'h1'} textAlign="center">
            Générateur Css Font-Size clamp()
          </Heading>
          <Tool
            fontSizeMin={fontSizeMin}
            setFontSizeMin={setFontSizeMin}
            fontSizeMax={fontSizeMax}
            setFontSizeMax={setFontSizeMax}
            viewportWidthMin={viewportWidthMin}
            setViewportWidthMin={setViewportWidthMin}
            viewportWidthMax={viewportWidthMax}
            setViewportWidthMax={setViewportWidthMax}
            fontSizeMinUnit={fontSizeMinUnit}
            setFontSizeMinUnit={setFontSizeMinUnit}
            fontSizeMaxUnit={fontSizeMaxUnit}
            setFontSizeMaxUnit={setFontSizeMaxUnit}
            viewportWidthMinUnit={viewportWidthMinUnit}
            setViewportWidthMinUnit={setViewportWidthMinUnit}
            viewportWidthMaxUnit={viewportWidthMaxUnit}
            codeCopy={codeCopy}
            setViewportWidthMaxUnit={setViewportWidthMaxUnit}
          />
        </Flex>
        <Flex
          w={{base: '90vw', md: '80vw', lg: '992px'}}
          h={{base: 'auto', lg: 'auto'}}
          flexDirection="column"
          justifyContent={'center'}
          alignItems={'center'}
          p={10}
          gap={10}
          borderRadius={10}
          maxW={{base: '90vw', md: '100vw'}}
          overflow={{base: 'scroll', md: 'visible'}}
        >
          <Box
            position="relative"
            width={`${width}px`}
            height={`${height}px`}
            borderRadius={10}
            bg={'#00000015'}
            h={'auto'}
            p={5}
          >
            <motion.div
              onDrag={handleDragWidth}
              drag="x"
              dragConstraints={{left: 0, right: 0}}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: -5,
                width: 10,
                cursor: 'ew-resize',
              }}
            >
              <Icon
                as={DragHandleIcon}
                position={'absolute'}
                top={'50%'}
                transform={'translateY(-50%)'}
                ml={'10px'}
              />
            </motion.div>
            <Heading
              as={'h2'}
              textAlign="center"
              fontSize={fontSize}
              noOfLines={1}
            >
              Resize la boite et test
            </Heading>

            <Text
              position="absolute"
              top={2}
              right={2}
              bg={bgcolorBox}
              p={1}
              borderRadius={5}
            >
              {Math.round(width)}px
            </Text>
            <Text
              position="absolute"
              left={2}
              bottom={2}
              bg={bgcolor}
              p={1}
              borderRadius={5}
            >
              {fontSize}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}
