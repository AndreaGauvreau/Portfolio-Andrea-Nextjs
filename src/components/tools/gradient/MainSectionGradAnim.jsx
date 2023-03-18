'use client'
import React, {useEffect, useState} from 'react'
import {Box, Flex, Heading} from '@chakra-ui/react'
import GradientTool from '@/components/tools/gradient/GradientTool'
import CodeSection from './CodeSection'
import './animatecssgrad.css'

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
  const animate = false
  const gradientValue = (
    <>
      {gradientColor}
      <br />
      {`
  background-size: 300% 300%;`}
      <br />
      {` animation: gradient-animation 10s ease infinite;
  `}
      <br />
      <br />
      {`
  @keyframes gradient-animation {
    `}
      <br />
      {`0% {
    background-position: 0% 50%;
  }`}
      <br />
      {` 50% {
    background-position: 100% 50%;
  }`}
      <br />
      {`  100% {
    background-position: 0% 50%;
  }
  `}
    </>
  )

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
          id={'animationgrad'}

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
            Générateur Dégradé Animé CSS
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
        <CodeSection
          copyValue={`.classElement{background:${gradientColor};
      background-size: 300% 300%  ;
      animation: gradient-animation 10s ease infinite;}
      @keyframes gradient-animation {
        0% {background-position: 0% 50%;
      } 50% {
        background-position: 100% 50%;
      } 100% {
        background-position: 0% 50%;}}`}
        >
          {gradientValue}
        </CodeSection>
      </Flex>
    </>
  )
}
