'use client'
import React from 'react'
import {
  Box,
  VStack,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  Button,
  Flex,
  SliderMark,
} from '@chakra-ui/react'
import {ChromePicker} from 'react-color'
import {CodeBlock} from '@/components/ui/CodeBlock/CodeBlock'
export default function Tool(props) {
  const {
    blurValue,
    setBlurValue,
    transparency,
    setTransparency,
    lissage,
    setLissage,
    position,
    setPosition,
    codecopy,
    color,
    setColor,
    setDisplayColorPicker,
    displayColorPicker,
  } = props
  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker)
  }

  const handleClose = () => {
    setDisplayColorPicker(false)
  }

  const handleChange = color => {
    setColor(color.rgb)
  }

  const popover = {
    position: 'absolute',
    zIndex: '2',
  }

  const cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  }

  return (
    <Flex
      width={{base: 'auto', lg: '800px'}}
      height="auto"
      position={'relative'}
      flexDirection={{base: 'column', lg: 'row'}}
      justifyContent="center"
      alignItems={'center'}
    >
      <VStack
        flex={1}
        justifyContent="space-around"
        paddingRight="20px"
        gap={5}
        alignItems={{base: 'center', lg: 'flex-start'}}
      >
        <Flex flexDirection={'column'}>
          <Text fontSize={'md'}>Lissage</Text>
          <Slider
            min={1}
            w={200}
            max={10}
            step={1}
            colorScheme="pink"
            value={blurValue}
            onChange={value => setBlurValue(value)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={5} />
          </Slider>
        </Flex>
        <Flex flexDirection={'column'}>
          <Text fontSize={'md'}>Flou</Text>
          <Slider
            min={1}
            w={200}
            max={10}
            step={1}
            colorScheme="pink"
            value={lissage}
            onChange={value => setLissage(value)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={5} />
          </Slider>
        </Flex>
        <Flex flexDirection={'row'}>
          <Flex flexDirection={'column'}>
            <Text fontSize={'md'}>Distance Y</Text>
            <Slider
              min={0}
              w={100}
              max={5}
              step={0.1}
              colorScheme="pink"
              value={position?.y}
              onChange={value => setPosition({x: position?.x, y: value})}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb boxSize={5} />
            </Slider>
          </Flex>
          <Flex flexDirection={'column'}>
            <Text fontSize={'md'}>Distance X</Text>
            <Slider
              min={0}
              w={100}
              max={5}
              step={0.1}
              colorScheme="pink"
              value={position?.x}
              onChange={value => setPosition({x: value, y: position?.y})}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb boxSize={5} />
            </Slider>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'}>
          <Text fontSize={'md'}>Transparence</Text>
          <Slider
            w={200}
            min={0}
            max={2}
            step={0.05}
            value={transparency}
            colorScheme="pink"
            onChange={value => setTransparency(value)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={5} />
          </Slider>
        </Flex>

        <HStack>
          <Button
            border={'1px solid #ffffff40'}
            size={'md'}
            backgroundColor={`rgba(${color.r}, ${color.g}, ${color.b},1)`}
            color={color.r + color.g + color.b > 300 ? 'black' : 'white'}
            onClick={handleClick}
            _hover={{
              backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b},0.5)`,
            }}
          >
            Choisir une couleur
          </Button>
          {displayColorPicker ? (
            <Box style={popover}>
              <Box style={cover} onClick={handleClose} />
              <ChromePicker color={color} onChange={handleChange} />
            </Box>
          ) : null}
          <Box
            onClick={handleClick}
            cursor={'pointer'}
            width="20px"
            height="20px"
            borderRadius="4px"
            backgroundColor={`rgb(${color.r}, ${color.g}, ${color.b})`}
            marginLeft="10px"
            border={'1px solid #ffffff40'}
          />
        </HStack>
      </VStack>
      <Flex w={'full'}>
        <CodeBlock lineNB={false} language={'css'} code={codecopy} />
      </Flex>
    </Flex>
  )
}
