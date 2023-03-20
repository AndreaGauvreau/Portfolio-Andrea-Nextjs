'use client'
import React, {useState} from 'react'
import {Box, Flex, Heading} from '@chakra-ui/react'
import Tool from '@/components/tools/boxshadow/tool'
import {colorsDD} from '@/components/ui/colors/colors'
import './gradientbg.css'

export default function MainSection() {
  const [blurValue, setBlurValue] = useState(100)
  const [lissage, setLissage] = useState(5)
  const [transparency, setTransparency] = useState(4)
  const [checked, setChecked] = useState(true)
  const [checkedShadow, setCheckedShadow] = useState(false)
  const [displayColorPicker, setDisplayColorPicker] = useState(false)
  const [displayColorPickerBack, setDisplayColorPickerBack] = useState(false)
  const [color, setColor] = useState({r: 0, g: 0, b: 0})
  const [colorBack, setColorBack] = useState({r: 175, g: 11, b: 255})
  const [position, setPosition] = useState({y: 100, x: 0})

  function generateBoxShadows(
    lissage,
    color,
    transparency,
    blurValue,
    position,
  ) {
    let boxShadow = ''

    const maxOffsetX = position.x
    const maxOffsetY = position.y
    const maxBlur = blurValue
    const minOpacity = 0.07
    const opacityStep = (minOpacity - 0.01) / lissage

    for (let i = 0; i < lissage; i++) {
      const offsetX = parseFloat((maxOffsetX / (i + 1)).toFixed(2))
      const offsetY = parseFloat((maxOffsetY / (i + 1)).toFixed(2))
      const blurRadius = parseFloat((maxBlur / (i + 1)).toFixed(1))
      const opacity = parseFloat(
        ((minOpacity - i * opacityStep) * transparency).toFixed(3),
      )
      let offsetXValue
      let offsetYValue

      if (i == lissage - 1) {
        offsetXValue = (offsetX / 10).toFixed(1)
        offsetYValue = (offsetY / 10).toFixed(1)
      } else if (i == lissage - 2) {
        offsetXValue = (offsetX / 3).toFixed(1)
        offsetYValue = (offsetY / 3).toFixed(1)
      } else {
        offsetXValue = offsetX.toFixed(1)
        offsetYValue = offsetY.toFixed(1)
      }

      boxShadow += `${offsetXValue}px ${offsetYValue}px ${blurRadius}px rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`

      if (i < lissage - 1) {
        boxShadow += ',\n       '
      }
    }

    return boxShadow
  }

  const codecopy = `
  .myClass{  
    box-shadow:
       ${generateBoxShadows(
         lissage,
         color,
         transparency,
         blurValue,
         position,
       )};}`
  const shadowStyle = `${generateBoxShadows(
    lissage,
    color,
    transparency,
    blurValue,
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
        bg={`rgba(${colorBack.r}, ${colorBack.g}, ${colorBack.b},1)`}
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
            setColorBack={setColorBack}
            colorBack={colorBack}
            displayColorPickerBack={displayColorPickerBack}
            setDisplayColorPickerBack={setDisplayColorPickerBack}
          />
        </Flex>
      </Flex>
    </>
  )
}
