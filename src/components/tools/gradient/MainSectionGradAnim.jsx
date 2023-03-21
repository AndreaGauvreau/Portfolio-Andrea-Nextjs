'use client'
import React, {useEffect, useState} from 'react'
import {Box, Flex, Heading} from '@chakra-ui/react'
import GradientTool from '@/components/tools/gradient/GradientTool'
import './animatecssgrad.css'
import {CodeBlock} from '@/components/ui/CodeBlock/CodeBlock'

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

  useEffect(() => {
    if (gradientColor) {
      setIsLoading(false)
    } else {
      setIsLoading(true)
    }
  }, [gradientColor])
  const animate = false

  return (
    <>
      <Flex
        w={'100vw'}
        minH={'100vh'}
        maxW={'100vw'}
        overflow={'hidden'}
        justifyContent="flex-start"
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
          h={'full'}
          bg={gradientColor}
          id={'animationgrad'}
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
          mt={'10vh'}
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

        <CodeBlock
          lineNB={false}
          language={'css'}
          code={`.classElement{
      background:${gradientColor};
      background-size: 300% 300%;
      animation: gradient-animation 10s ease infinite;}

      @keyframes gradient-animation {
        0% {background-position: 0% 50%;} 
        50% {background-position: 100% 50%;} 
        100% {background-position: 0% 50%;}}`}
        />
      </Flex>
    </>
  )
}
