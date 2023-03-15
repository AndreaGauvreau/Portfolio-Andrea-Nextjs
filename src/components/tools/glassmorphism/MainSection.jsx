'use client'
import React, {useState} from 'react'
import {Box, Flex, Heading} from '@chakra-ui/react'
import GlassMorphismTool from '@/components/tools/glassmorphism/glassmorphismtool'
import Menu from '@/components/ui/Menu/Menu'
import {colorsDD} from '@/components/ui/colors/colors'
import './gradientbg.css'
import {motion} from 'framer-motion'
export default function MainSection() {
  const [blurValue, setBlurValue] = useState(8)
  const [transparency, setTransparency] = useState(0.3)
  const [checked, setChecked] = useState(true)
  const [checkedShadow, setCheckedShadow] = useState(false)
  const [displayColorPicker, setDisplayColorPicker] = useState(false)
  const [color, setColor] = useState({r: 0, g: 0, b: 0})
  return (
    <>
      <Menu />

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
      >
        <Flex
          position={'absolute'}
          justifyContent="center"
          alignItems="center"
          fontSize={40}
          bottom={'40px'}
          left={'50%'}
          transform={'translate(-50%,0px)'}
          w={'120px'}
          h={'120px'}
          borderRadius={10}
          backdropFilter={`blur(${blurValue}px)`}
          bg={`rgba( ${color.r}, ${color.g}, ${color.b}, ${transparency.toFixed(
            2,
          )} );`}
          zIndex={99}
          border={checked ? `1px solid rgba( 255,255,255, 0.22 );` : ''}
          boxShadow={
            checkedShadow ? `0 10px 30px 0 rgba( 20, 20, 20, 0.25  );` : ''
          }
          display={{base: 'none', lg: 'flex'}}
        >
          <motion.div
            initial={{scale: 0, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.15, 0.84, 0.27, 0.96],
            }}
          >
            ⬇️
          </motion.div>
        </Flex>
        <Flex
          w={{base: '90vw', md: '80vw', lg: '992px'}}
          h={{base: 'auto', lg: '400px'}}
          bg={colorsDD.bgcolor}
          flexDirection="column"
          justifyContent={'center'}
          alignItems={'center'}
          p={10}
          gap={20}
          borderRadius={10}
        >
          <Heading as={'h1'}>Générateur GlassMorphism CSS</Heading>
          <GlassMorphismTool
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
          />
        </Flex>
      </Flex>
    </>
  )
}
