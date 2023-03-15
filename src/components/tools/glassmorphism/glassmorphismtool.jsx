'use client'
import React, {useRef, useState} from 'react'
import {
  Box,
  VStack,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  Checkbox,
  Button,
  Flex,
  Input,
} from '@chakra-ui/react'
import {ChromePicker} from 'react-color'

export default function GlassMorphismTool() {
  const [blurValue, setBlurValue] = useState(4)
  const [transparency, setTransparency] = useState(0.4)
  const [checked, setChecked] = useState(false)
  const [checkedShadow, setCheckedShadow] = useState(false)
  const [displayColorPicker, setDisplayColorPicker] = useState(false)
  const [color, setColor] = useState({r: 0, g: 0, b: 0})

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

  const textRef = useRef()

  const copyToClipboard = () => {
    textRef.current.select()
    document.execCommand('copy')
    alert('Texte copié dans le presse-papiers')
  }

  return (
    <Flex width="800px" height="350px" position={'relative'}>
      <Box
        position={'absolute'}
        top={'-150px'}
        w={'200px'}
        h={'90px'}
        borderRadius={10}
        backdropFilter={`blur(${blurValue}px)`}
        bg={`rgba( ${color.r}, ${color.g}, ${color.b}, ${transparency.toFixed(
          2,
        )} );`}
        zIndex={99}
        border={checked ? `1px solid rgba( 255,255,255, 0.22 );` : ''}
        boxShadow={
          checkedShadow ? `0 10px 30px 0 rgba( 20, 20, 20, 0.37  );` : ''
        }
      />
      <Box
        position={'absolute'}
        bottom={'-90px'}
        right={20}
        w={'100px'}
        h={'90px'}
        borderRadius={10}
        backdropFilter={`blur(${blurValue}px)`}
        bg={`rgba( ${color.r}, ${color.g}, ${color.b}, ${transparency.toFixed(
          2,
        )} );`}
        zIndex={99}
        border={checked ? `1px solid rgba( 255,255,255, 0.22 );` : ''}
        boxShadow={`0 8px 32px 0 rgba( 20, 20, 20, 0.37  );`}
      />
      <VStack
        flex="0.8"
        justifyContent="space-around"
        borderRight="1px solid gray"
        paddingRight="10px"
        alignItems={'flex-start'}
      >
        <HStack>
          <Text>Blur value</Text>
          <Slider
            min={0}
            w={200}
            max={20}
            step={1}
            value={blurValue}
            onChange={value => setBlurValue(value)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </HStack>

        <HStack>
          <Text>Transparency</Text>
          <Slider
            w={200}
            min={0}
            max={1}
            step={0.01}
            value={transparency}
            onChange={value => setTransparency(value)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </HStack>

        <HStack>
          <Button onClick={handleClick}>Choisir une couleur</Button>
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
          />
        </HStack>
        <HStack>
          <Checkbox
            isChecked={checked}
            onChange={event => setChecked(event.target.checked)}
          >
            Bordures
          </Checkbox>
          <Checkbox
            isChecked={checkedShadow}
            onChange={event => setCheckedShadow(event.target.checked)}
          >
            Ombres
          </Checkbox>
        </HStack>
      </VStack>
      <VStack flex="1.2" justifyContent="center" alignItems="center">
        <Text>
          {checkedShadow
            ? `box-shadow: 0 8px 32px 0 rgba( 20, 20, 20, 0.37 );`
            : ''}
          <br></br>
          background: rgba({color.r}, {color.g}, {color.b},
          {transparency.toFixed(2)} );<br></br>
          backdrop-filter: blur( {blurValue}px );<br></br>
          -webkit-backdrop-filter: blur( {blurValue}px );<br></br>
          border-radius: 10px;<br></br>
          {checked ? `border: 1px solid rgba( 255,255,255, 0.18 );` : ''}
        </Text>
        <Button onClick={copyToClipboard} marginTop="10px">
          Copier le texte
        </Button>
        <textarea
          ref={textRef}
          value={`background: rgba( ${color.r}, ${color.g}, ${
            color.b
          }, ${transparency.toFixed(2)} );
box-shadow: 0 8px 32px 0 rgba( 20, 20, 20, 0.37  );
backdrop-filter: blur( ${blurValue}px );
-webkit-backdrop-filter: blur( ${blurValue}px );
border-radius: 10px;
${checked ? `border: 1px solid rgba( 255,255,255, 0.18 );` : ''}
      `}
          style={{
            position: 'absolute',
            left: '-9999px',
          }}
        />
      </VStack>
    </Flex>
  )
}
