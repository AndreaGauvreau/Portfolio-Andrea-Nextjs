'use client'
import React, {useReducer, useState} from 'react'
import {
  Box,
  VStack,
  Text,
  Flex,
  SliderThumb,
  SliderFilledTrack,
  SliderTrack,
  Button,
  RangeSlider,
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
import ReactSlider from 'react-slider'

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
  const [lastTouchedTracker, setLastTouchedTracker] = useState(null)

  const initialState = {
    trackers: [
      {id: Date.now() + 1, value: 20, color: '#ffffff'},
      {id: Date.now() + 2, value: 70, color: '#f0f0f0'},
    ],
  }

  function trackerReducer(state, action) {
    switch (action.type) {
      case 'ADD_TRACKER':
        return {
          ...state,
          trackers: [
            ...state.trackers,
            {
              id: action.payload.id,
              value: action.payload.value,
              color: action.payload.color,
            },
          ],
        }
      case 'UPDATE_TRACKER':
        return {
          ...state,
          trackers: state.trackers.map(tracker =>
            tracker.id === action.payload.id
              ? {...tracker, value: action.payload.value}
              : tracker,
          ),
        }
      case 'UPDATE_COLOR':
        return {
          ...state,
          trackers: state.trackers.map(tracker =>
            tracker.id === action.payload.id
              ? {...tracker, color: action.payload.color}
              : tracker,
          ),
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(trackerReducer, initialState)

  const addTracker = defaultColor => {
    dispatch({
      type: 'ADD_TRACKER',
      payload: {id: Date.now(), value: 0, color: defaultColor},
    })
  }

  const updateTrackerValue = (id, value) => {
    dispatch({type: 'UPDATE_TRACKER', payload: {id, value}})
  }

  const handleHueChange = color => {
    setHue(color.rgb)
    if (lastTouchedTracker !== null) {
      dispatch({
        type: 'UPDATE_COLOR',
        payload: {id: lastTouchedTracker, color: rgbaToHex(color.rgb)},
      })
    }
  }

  const handleAlphaChange = color => {
    setAlpha(color.rgb.a)
  }
  function rgbaToHex(rgbaColor) {
    const r = rgbaColor.r.toString(16).padStart(2, '0')
    const g = rgbaColor.g.toString(16).padStart(2, '0')
    const b = rgbaColor.b.toString(16).padStart(2, '0')
    return `#${r}${g}${b}`
  }

  const rgbaColor = {
    r: hue.r,
    g: hue.g,
    b: hue.b,
    a: alpha,
  }

  const hexColor = rgbaToHex(rgbaColor)

  const valueToCopy = `background: rgba( ${rgbaColor.r}, ${rgbaColor.g}, ${
    rgbaColor.b
  }, ${transparency.toFixed(2)} );
  box-shadow: 0 8px 32px 0 rgba( 20, 20, 20, 0.25  );
  backdrop-filter: blur( ${blurValue}px );
  -webkit-backdrop-filter: blur( ${blurValue}px );
  border-radius: 10px;
  ${checked ? `border: 1px solid rgba( 255,255,255, 0.18 );` : ''}
  `
  console.log(state.trackers, 'track')
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
          <Box position={'relative'} minW={'450px'} maxW={'450px'}>
            {state?.trackers?.map(tracker => (
              <Box position={'absolute'} minW={'450px'} maxW={'450px'}>
                <Slider
                  key={tracker?.id}
                  defaultValue={tracker.value}
                  min={0}
                  max={100}
                  step={1}
                  onChange={value => updateTrackerValue(tracker?.id, value)}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb
                    key={`thumb-${tracker.id}`}
                    bg={tracker?.color}
                    onClick={() => setLastTouchedTracker(tracker.id)}
                    width={5}
                    h={12}
                    borderRadius={5}
                  />
                </Slider>
              </Box>
            ))}{' '}
            <Button mt={20} onClick={() => addTracker('blue')}>
              Ajouter un tracker
            </Button>
          </Box>
          <Button mt={10} colorScheme={'whiteAlpha'} onClick={addTracker}>
            Ajouter un tracker
          </Button>
          <Flex flexWrap={'wrap'} gap={2} maxW={'400px'}>
            {state?.trackers?.map((tracker, index) => (
              <Box
                bg={'#ffffff10'}
                key={index}
                p={2}
                borderRadius={10}
                _hover={{bg: '#ffffff20'}}
              >
                Couleur {index + 1}: {tracker.color}
              </Box>
            ))}
          </Flex>
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
