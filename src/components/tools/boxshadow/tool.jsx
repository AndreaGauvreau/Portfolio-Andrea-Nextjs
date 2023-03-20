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
  Tooltip,
} from '@chakra-ui/react'
import {ChromePicker} from 'react-color'
import {CodeBlock} from '@/components/ui/CodeBlock/CodeBlock'
import {colorsDD} from '@/components/ui/colors/colors'
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
    setDisplayColorPickerBack,
    displayColorPickerBack,
    displayColorPicker,
    setColorBack,
    colorBack,
  } = props
  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker)
  }
  const handleClickBack = () => {
    setDisplayColorPickerBack(!displayColorPickerBack)
  }
  const handleClose = () => {
    setDisplayColorPicker(false)
  }
  const handleCloseBack = () => {
    setDisplayColorPickerBack(false)
  }

  const handleChange = color => {
    setColor(color.rgb)
  }
  const handleChangeback = color => {
    setColorBack(color.rgb)
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
  const [showTooltip, setShowTooltip] = React.useState(false)
  const [showTooltip1, setShowTooltip1] = React.useState(false)
  const [showTooltip2, setShowTooltip2] = React.useState(false)
  const [showTooltip3, setShowTooltip3] = React.useState(false)
  const [showTooltip4, setShowTooltip4] = React.useState(false)
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
        <Flex flexDirection={'row'}>
          <Flex flexDirection={'column'}>
            <Text fontSize={'md'}>Lissage</Text>
            <Slider
              min={1}
              w={100}
              max={10}
              step={1}
              colorScheme="pink"
              value={lissage}
              onChange={value => setLissage(value)}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip
                hasArrow
                bg={colorsDD.pink}
                color={colorsDD.bgcolor}
                placement="top"
                isOpen={showTooltip}
                label={`${lissage}`}
              >
                <SliderThumb boxSize={5} />
              </Tooltip>
            </Slider>
          </Flex>
          <Flex flexDirection={'column'}>
            <Text fontSize={'md'}>Flou</Text>
            <Slider
              min={0}
              w={100}
              max={200}
              step={10}
              colorScheme="pink"
              value={blurValue}
              onChange={value => setBlurValue(value)}
              onMouseEnter={() => setShowTooltip1(true)}
              onMouseLeave={() => setShowTooltip1(false)}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip
                hasArrow
                bg={colorsDD.pink}
                color={colorsDD.bgcolor}
                placement="top"
                isOpen={showTooltip1}
                label={`${blurValue}`}
              >
                <SliderThumb boxSize={5} />
              </Tooltip>
            </Slider>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'}>
          <Text fontSize={'md'}>Distance Y</Text>
          <Slider
            min={-200}
            w={200}
            max={200}
            step={5}
            colorScheme="pink"
            value={position?.y}
            onChange={value => setPosition({x: position?.x, y: value})}
            onMouseEnter={() => setShowTooltip2(true)}
            onMouseLeave={() => setShowTooltip2(false)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <Tooltip
              hasArrow
              bg={colorsDD.pink}
              color={colorsDD.bgcolor}
              placement="top"
              isOpen={showTooltip2}
              label={`${position?.y}`}
            >
              <SliderThumb boxSize={5} />
            </Tooltip>{' '}
          </Slider>
        </Flex>
        <Flex flexDirection={'column'}>
          <Text fontSize={'md'}>Distance X</Text>
          <Slider
            min={-200}
            w={200}
            max={200}
            step={5}
            colorScheme="pink"
            value={position?.x}
            onChange={value => setPosition({x: value, y: position?.y})}
            onMouseEnter={() => setShowTooltip3(true)}
            onMouseLeave={() => setShowTooltip3(false)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <Tooltip
              hasArrow
              bg={colorsDD.pink}
              color={colorsDD.bgcolor}
              placement="top"
              isOpen={showTooltip3}
              label={`${position?.x}`}
            >
              <SliderThumb boxSize={5} />
            </Tooltip>
          </Slider>
        </Flex>

        <Flex flexDirection={'column'}>
          <Text fontSize={'md'}>Transparence</Text>
          <Slider
            w={200}
            min={0}
            max={10}
            step={0.2}
            value={transparency}
            colorScheme="pink"
            onChange={value => setTransparency(value)}
            onMouseEnter={() => setShowTooltip4(true)}
            onMouseLeave={() => setShowTooltip4(false)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <Tooltip
              hasArrow
              bg={colorsDD.pink}
              color={colorsDD.bgcolor}
              placement="top"
              isOpen={showTooltip4}
              label={`${transparency}`}
            >
              <SliderThumb boxSize={5} />
            </Tooltip>
          </Slider>
        </Flex>

        <HStack>
          <Button
            border={'1px solid #ffffff40'}
            size={'md'}
            backgroundColor={`rgba(${colorBack.r}, ${colorBack.g}, ${colorBack.b},1)`}
            color={
              colorBack.r + colorBack.g + colorBack.b > 300 ? 'black' : 'white'
            }
            onClick={handleClickBack}
            _hover={{
              backgroundColor: `rgba(${colorBack.r}, ${colorBack.g}, ${colorBack.b},0.5)`,
            }}
          >
            fond
          </Button>
          {displayColorPickerBack ? (
            <Box style={popover}>
              <Box style={cover} onClick={handleCloseBack} />
              <ChromePicker color={colorBack} onChange={handleChangeback} />
            </Box>
          ) : null}

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
            ombre
          </Button>
          {displayColorPicker ? (
            <Box style={popover}>
              <Box style={cover} onClick={handleClose} />
              <ChromePicker color={color} onChange={handleChange} />
            </Box>
          ) : null}
        </HStack>
      </VStack>
      <Flex w={'full'}>
        <CodeBlock lineNB={false} language={'css'} code={codecopy} />
      </Flex>
    </Flex>
  )
}
