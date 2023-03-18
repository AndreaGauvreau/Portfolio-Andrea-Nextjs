'use client'
import React, {useState} from 'react'
import {Box, Flex, Heading} from '@chakra-ui/react'
import Tool from '@/components/tools/boxshadow/tool'
import {colorsDD} from '@/components/ui/colors/colors'
import './gradientbg.css'

export default function MainSection() {
  const [blurValue, setBlurValue] = useState(8)
  const [lissage, setLissage] = useState(5)
  const [transparency, setTransparency] = useState(0.8)
  const [checked, setChecked] = useState(true)
  const [checkedShadow, setCheckedShadow] = useState(false)
  const [displayColorPicker, setDisplayColorPicker] = useState(false)
  const [color, setColor] = useState({r: 0, g: 0, b: 0})
  const [position, setPosition] = useState({y: 4, x: 4})

  function generateBoxShadows(
    numShadows,
    color,
    transparency,
    lissage,
    position,
  ) {
    const baseOffset = 2.5
    const baseBlur = 1.5
    const baseOpacity = 0.02
    const opacityStep = 0.012

    let boxShadow = ''

    for (let i = 0; i < numShadows; i++) {
      const offsetX = parseFloat((position?.x ** (i / 2)).toFixed(2))
      const offsetY = parseFloat((position?.y ** (i / 2)).toFixed(2))
      const blurRadius = parseFloat((lissage ** i).toFixed(1))
      const opacity = parseFloat((baseOpacity + i * opacityStep * 5).toFixed(3))

      boxShadow += `${offsetX}px ${offsetY}px ${blurRadius}px rgba(${
        color.r
      }, ${color.g}, ${color.b}, ${(opacity * transparency).toFixed(3)})`

      if (i < numShadows - 1) {
        boxShadow += ',\n       '
      }
    }

    return boxShadow
  }

  const codecopy = `
  .myClass{  
    box-shadow:
       ${generateBoxShadows(
         blurValue,
         color,
         transparency,
         lissage,
         position,
       )};}`
  const shadowStyle = `${generateBoxShadows(
    blurValue,
    color,
    transparency,
    lissage,
    position,
  )}`

  return (
    <>
      <Flex
        w={'100vw'}
        h={'100vh'}
        maxW={'100vw'}
        overflow={'hidden'}
        justifyContent="center"
        alignItems={'center'}
        color={'white'}
        bg={'#ffffff'}
        position="relative"
      >
        <Box
          w={'100vw'}
          position={'fixed'}
          bg={colorsDD.bgcolor}
          h={90}
          top={0}
          zIndex={4}
        />
        <Flex
          w={{base: '90vw', md: '80vw', lg: '992px'}}
          h={{base: 'auto', lg: 'auto'}}
          bg={colorsDD.bgcolor}
          flexDirection="column"
          justifyContent={'center'}
          alignItems={'center'}
          p={10}
          gap={20}
          borderRadius={10}
          boxShadow={shadowStyle}
        >
          <Heading as={'h1'} textAlign="center">
            Générateur Shadow CSS
          </Heading>
          <Tool
            blurValue={blurValue}
            setBlurValue={setBlurValue}
            transparency={transparency}
            setTransparency={setTransparency}
            checked={checked}
            setChecked={setChecked}
            checkedShadow={checkedShadow}
            setCheckedShadow={setCheckedShadow}
            color={color}
            setColor={setColor}
            setDisplayColorPicker={setDisplayColorPicker}
            displayColorPicker={displayColorPicker}
            codecopy={codecopy}
            lissage={lissage}
            position={position}
            setPosition={setPosition}
            setLissage={setLissage}
          />
        </Flex>
      </Flex>
    </>
  )
}
