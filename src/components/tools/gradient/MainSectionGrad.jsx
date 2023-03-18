'use client'
import React, {Suspense, useEffect, useState} from 'react'
import {Box, Flex, Heading, Text} from '@chakra-ui/react'
import GradientTool from '@/components/tools/gradient/GradientTool'
import {colorsDD} from '@/components/ui/colors/colors'
import CodeSection from './CodeSection'
export default function MainSection() {
  const [blurValue, setBlurValue] = useState(8)
  const [isLoading, setIsLoading] = useState(true)
  const [transparency, setTransparency] = useState(0.3)
  const [checked, setChecked] = useState(true)
  const [checkedShadow, setCheckedShadow] = useState(false)
  const [displayColorPicker, setDisplayColorPicker] = useState(false)
  const [hue, setHue] = useState({r: 255, g: 0, b: 0})
  const [alpha, setAlpha] = useState(1)
  const [angle, setAngle] = useState(40)
  const [gradientColor, setGradientColor] = useState('')

  const rgbaColor = {
    r: hue.r,
    g: hue.g,
    b: hue.b,
    a: alpha,
  }
  useEffect(() => {
    if (gradientColor) {
      setIsLoading(false)
    } else {
      setIsLoading(true)
    }
  }, [gradientColor])
  const animate = true
  return (
    <>
      <Flex
        w={'100vw'}
        h={'100vh'}
        maxW={'100vw'}
        overflow={'hidden'}
        justifyContent="center"
        alignItems={'center'}
        bgImage={`url('/images/icones/damier-generator.jpg')`}
        bgRepeat="repeat"
        bgSize="20px"
        color={'white'}
        position="relative"
        flexDirection={'column'}
        gap={5}
        zIndex={0}
      >
        <Box
          position={'absolute'}
          w={'100vw'}
          h={'100vh'}
          bg={gradientColor}
          //bg={`linear-gradient(${angle}deg,rgba(${hue.r},${hue.g},${hue.b},${alpha}),blue)`}
        />
        <Flex
          w={{base: '90vw', md: '80vw', lg: '992px'}}
          h={{base: 'auto', lg: '400px'}}
          bg={'rgba(0,0,0,0.8)'}
          flexDirection="column"
          justifyContent={'center'}
          alignItems={'center'}
          p={10}
          gap={5}
          borderRadius={10}
          zIndex={2}
          backdropFilter={'blur(200px)'}
        >
          <Heading as={'h1'} textAlign="center">
            Générateur Dégradé CSS
          </Heading>
          <GradientTool
            blurValue={blurValue}
            setBlurValue={setBlurValue}
            transparency={transparency}
            setTransparency={setTransparency}
            checked={checked}
            setChecked={setChecked}
            checkedShadow={checkedShadow}
            setCheckedShadow={setCheckedShadow}
            hue={hue}
            setHue={setHue}
            alpha={alpha}
            setAlpha={setAlpha}
            angle={angle}
            setAngle={setAngle}
            setDisplayColorPicker={setDisplayColorPicker}
            displayColorPicker={displayColorPicker}
            gradientColor={gradientColor}
            setGradientColor={setGradientColor}
            isLoading={isLoading}
            animate={animate}
          />
        </Flex>
        <CodeSection copyValue={gradientColor}>{gradientColor}</CodeSection>
      </Flex>
    </>
  )
}
