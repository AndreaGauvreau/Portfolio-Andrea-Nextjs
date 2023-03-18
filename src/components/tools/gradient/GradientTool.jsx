'use client'
import React, {useEffect, useReducer, useState} from 'react'
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
  Icon,
  Badge,
  Tag,
  TagLabel,
  Editable,
  EditablePreview,
  EditableInput,
  useToast,
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
import {CloseIcon, DeleteIcon} from '@chakra-ui/icons'
import {colorsDD} from '@/components/ui/colors/colors'

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
    gradientColor,
    setGradientColor,
  } = props
  const [lastTouchedTracker, setLastTouchedTracker] = useState(null)

  const initialState = {
    trackers: [
      {id: Date.now() + 1, value: 20, color: colorsDD.pink, alpha: 1},
      {id: Date.now() + 2, value: 70, color: colorsDD.green, alpha: 1},
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
              alpha: action.payload.alpha,
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
      case 'DELETE_TRACKER':
        return {
          ...state,
          trackers: state.trackers.filter(
            tracker => tracker.id !== action.payload.id,
          ),
        }
      case 'UPDATE_ALPHA':
        return {
          ...state,
          trackers: state.trackers.map(tracker =>
            tracker.id === action.payload.id
              ? {...tracker, alpha: action.payload.alpha}
              : tracker,
          ),
        }
      case 'UPDATE_TRACKER_COLOR':
        return {
          ...state,
          trackers: state.trackers.map(tracker =>
            tracker.id === action.payload.id
              ? {...tracker, color: action.payload.newColor}
              : tracker,
          ),
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(trackerReducer, initialState)

  const addTracker = (defaultColor, alpha) => {
    dispatch({
      type: 'ADD_TRACKER',
      payload: {id: Date.now(), value: 0, color: defaultColor, alpha: 1},
    })
  }

  const deleteTracker = id => {
    dispatch({type: 'DELETE_TRACKER', payload: {id}})
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
    if (lastTouchedTracker !== null) {
      dispatch({
        type: 'UPDATE_ALPHA',
        payload: {id: lastTouchedTracker, alpha: color.rgb.a},
      })
    }
  }

  function rgbaToHex(rgbaColor) {
    const r = rgbaColor.r.toString(16).padStart(2, '0')
    const g = rgbaColor.g.toString(16).padStart(2, '0')
    const b = rgbaColor.b.toString(16).padStart(2, '0')
    return `#${r}${g}${b}`
  }
  function hexToRgb(hexColor) {
    // Enlever le caractère "#" si présent
    if (hexColor[0] === '#') {
      hexColor = hexColor.substring(1)
    }

    // Convertir la couleur hex en valeurs RGB
    const red = parseInt(hexColor.substring(0, 2), 16)
    const green = parseInt(hexColor.substring(2, 4), 16)
    const blue = parseInt(hexColor.substring(4, 6), 16)

    return [red, green, blue]
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
  const updateGradientColor = () => {
    const sortedTrackers = [...state.trackers].sort((a, b) => a.value - b.value)
    const gradientColors = sortedTrackers
      .map(
        tracker =>
          `rgba(${hexToRgb(tracker.color)},${tracker.alpha}) ${tracker.value}%`,
      )
      .join(', ')

    const newGradient = `linear-gradient(${angle}deg, ${gradientColors})`
    setGradientColor(newGradient)
  }

  useEffect(() => {
    updateGradientColor()
  }, [state.trackers, angle, alpha])
  console.log(state, 'track', gradientColor)
  const getSelectedTrackerColor = () => {
    if (lastTouchedTracker !== null) {
      const selectedTracker = state.trackers.find(
        tracker => tracker.id === lastTouchedTracker,
      )
      if (selectedTracker) {
        return {
          r: hexToRgb(selectedTracker.color)[0],
          g: hexToRgb(selectedTracker.color)[1],
          b: hexToRgb(selectedTracker.color)[2],
          a: selectedTracker.alpha,
        }
      }
    }
    return rgbaColor // Retourner la couleur par défaut si aucun tracker n'est sélectionné
  }
  function isColorTooDark(hexColor) {
    // Enlever le caractère "#" si présent
    if (hexColor[0] === '#') {
      hexColor = hexColor.substring(1)
    }

    // Convertir la couleur hex en valeurs RGB
    const red = parseInt(hexColor.substring(0, 2), 16)
    const green = parseInt(hexColor.substring(2, 4), 16)
    const blue = parseInt(hexColor.substring(4, 6), 16)

    // Calculer la luminance de la couleur
    const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255

    // Si la luminance est inférieure à 0,5, la couleur est considérée comme trop foncée
    return luminance < 0.5
  }
  const toast = useToast()

  function validateHexColor(color) {
    const hexColorRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/
    return hexColorRegex.test(color)
  }
  function updateTrackerColor(id, newColor) {
    if (validateHexColor(newColor)) {
      dispatch({
        type: 'UPDATE_TRACKER_COLOR',
        payload: {id, newColor},
      })
    } else {
      toast({
        title: 'Couleur invalide',
        description: 'Entrez une couleur hexadecimal valide',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })

      dispatch({
        type: 'UPDATE_TRACKER_COLOR',
        payload: {id, newColor: '#ffffff'},
      })
    }
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
            color={getSelectedTrackerColor()}
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
                  <SliderTrack bg={'white'}>
                    <SliderFilledTrack bg={'white'} />
                  </SliderTrack>
                  <SliderThumb
                    key={`thumb-${tracker.id}`}
                    bg={
                      lastTouchedTracker === tracker?.id
                        ? tracker?.color
                        : tracker?.color + 50
                    }
                    onClick={() => setLastTouchedTracker(tracker.id)}
                    width={5}
                    h={8}
                    borderRadius={5}
                  />
                </Slider>
              </Box>
            ))}
          </Box>
          <Flex
            flexWrap={'wrap'}
            gap={2}
            maxW={'400px'}
            alignItems={'center'}
            mt={20}
          >
            <Button
              colorScheme={'whiteAlpha'}
              onClick={() => addTracker('#ffffff', '0.5')}
            >
              +
            </Button>
            {state?.trackers?.map((tracker, index) => (
              <Tag
                bg={tracker?.color + 20}
                key={index}
                transition={'0.5s'}
                borderRadius={5}
                justifyContent="center"
                alignItems={'center'}
                p={2}
                onClick={() => setLastTouchedTracker(tracker.id)}
                color={
                  isColorTooDark(tracker?.color) ? 'white' : tracker?.color
                }
                border={
                  lastTouchedTracker === tracker?.id
                    ? `2px solid ${
                        isColorTooDark(tracker?.color)
                          ? 'white'
                          : tracker?.color
                      }`
                    : '2px solid #ffffff00'
                }
              >
                <Editable
                  defaultValue={tracker?.color}
                  onSubmit={newColor =>
                    updateTrackerColor(tracker.id, newColor)
                  }
                >
                  <EditablePreview />
                  <EditableInput />
                </Editable>
                <Icon
                  as={DeleteIcon}
                  color={
                    isColorTooDark(tracker?.color) ? 'white' : tracker?.color
                  }
                  onClick={() => deleteTracker(tracker.id)}
                  cursor={'pointer'}
                  ml={2}
                />
              </Tag>
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
