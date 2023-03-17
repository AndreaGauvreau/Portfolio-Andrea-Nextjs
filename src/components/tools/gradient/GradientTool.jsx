'use client'
import React, {useState} from 'react'
import {
  Box,
  VStack,
  Text,
  Flex,
  SliderThumb,
  SliderFilledTrack,
  SliderTrack,
  Slider,
} from '@chakra-ui/react'
import {HuePicker, AlphaPicker} from 'react-color'
import {
  CircularInput,
  CircularTrack,
  CircularProgress,
  CircularThumb,
  useCircularInputContext,
} from 'react-circular-input'

export default function GradientTool(props) {
  const {
    blurValue,
    setBlurValue,
    transparency,
    setTransparency,
    checked,
    setChecked,
    angle,
    setAngle,
    alpha,
    setAlpha,
    hue,
    setHue,
    setDisplayColorPicker,
    displayColorPicker,
  } = props
  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker)
  }

  const handleHueChange = color => {
    setHue(color.rgb)
  }

  const handleAlphaChange = color => {
    setAlpha(color.rgb.a)
  }

  const rgbaColor = {
    r: hue.r,
    g: hue.g,
    b: hue.b,
    a: alpha,
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

  const valueToCopy = `background: rgba( ${rgbaColor.r}, ${rgbaColor.g}, ${
    rgbaColor.b
  }, ${transparency.toFixed(2)} );
  box-shadow: 0 8px 32px 0 rgba( 20, 20, 20, 0.25  );
  backdrop-filter: blur( ${blurValue}px );
  -webkit-backdrop-filter: blur( ${blurValue}px );
  border-radius: 10px;
  ${checked ? `border: 1px solid rgba( 255,255,255, 0.18 );` : ''}
  `
  const [colorControllers, setColorControllers] = useState([
    {id: 0, value: 0},
    {id: 1, value: 100},
  ])

  const addColorController = e => {
    e.stopPropagation()
    const newValue = (e.nativeEvent.offsetX / e.target.clientWidth) * 100
    setColorControllers([
      ...colorControllers,
      {id: colorControllers.length, value: newValue},
    ])
  }

  const handleControllerChange = (id, value) => {
    setColorControllers(
      colorControllers.map(controller =>
        controller.id === id ? {...controller, value} : controller,
      ),
    )
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
        flexDirection={'row'}
        alignItems={{base: 'center', lg: 'flex-start'}}
      >
        <Flex
          flexDirection={{base: 'column', lg: 'column'}}
          alignItems="center"
          w={'200px'}
        >
          <Text fontSize={'md'} mb={10}>
            Orientation
          </Text>
          <CircularRangeInput value={angle} onChange={setAngle} angle={angle} />
        </Flex>

        <Flex flexDirection={'column'} gap={2}>
          <HuePicker
            width={'450px'}
            color={rgbaColor}
            onChange={handleHueChange}
          />
          <AlphaPicker
            width={'450px'}
            color={rgbaColor}
            onChange={handleAlphaChange}
          />
          <Box width="450px" height="40px" onClick={addColorController}>
            <Slider width="100%" height="100%" min={0} max={100}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>

              <SliderThumb
                boxSize="16px"
                borderRadius="50%"
                borderColor="white"
                bg="blue.500"
                value={20}
              />
              <SliderThumb
                boxSize="16px"
                borderRadius="50%"
                borderColor="white"
                bg="blue.500"
                value={30}
              />
            </Slider>
          </Box>
        </Flex>
      </VStack>

      {/*<CodeSection copyValue={valueToCopy}>
        <GradientCode
          checkedShadow={checkedShadow}
          color={color}
          transparency={transparency}
          blurValue={blurValue}
          checked={checked}
        />
          </CodeSection>*/}
    </Flex>
  )
}

const CircularRangeInput = ({value, onChange, angle}) => {
  const handleChange = newValue => {
    onChange(newValue * 360)
  }

  return (
    <Box width="136px" height="200px">
      <CircularInput value={value / 360} radius={70} onChange={handleChange}>
        <CircularTrack strokeWidth={40} stroke="#ffffff20" />
        <CircularProgress
          strokeWidth={40}
          stroke={`rgba(61, 153, 255,${value / 360})`}
        />
        <CircularThumb
          fill="white"
          stroke="rgb(61, 153, 255)"
          strokeWidth="5"
        />
        <CustomComponent />
      </CircularInput>
    </Box>
  )
}
const GradientCode = ({
  checkedShadow,
  color,
  transparency,
  blurValue,
  checked,
}) => {
  return (
    <>
      {checkedShadow ? (
        <Text>box-shadow: 0 8px 32px 0 rgba( 20, 20, 20, 0.25 );</Text>
      ) : (
        ''
      )}
      <Text>
        background: rgba({color.r}, {color.g}, {color.b},
        {transparency.toFixed(2)} )
      </Text>
      <Text>backdrop-filter: blur( {blurValue}px );</Text>
      <Text>-webkit-backdrop-filter: blur( {blurValue}px );</Text>
      <Text>border-radius: 10px;</Text>
      {checked ? `border: 1px solid rgba( 255,255,255, 0.18 );` : ''}
    </>
  )
}

function CustomComponent() {
  const {getPointFromValue, value} = useCircularInputContext()
  const point = getPointFromValue()
  if (!point) return null
  return (
    <text
      {...point}
      textAnchor="middle"
      dy="0.35em"
      fill="rgb(61, 153, 255)"
      style={{pointerEvents: 'none', fontWeight: 'bold'}}
    >
      {Math.round(value * 100)}
    </text>
  )
}
