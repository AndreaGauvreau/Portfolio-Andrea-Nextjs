'use client'
import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react'
import {
  Box,
  VStack,
  Text,
  Flex,
  SliderThumb,
  SliderFilledTrack,
  SliderTrack,
  Button,
  Slider,
  Icon,
  Tag,
  TagLabel,
  useToast,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  InputGroup,
  Input,
} from '@chakra-ui/react'
import {HuePicker, AlphaPicker} from 'react-color'
import {
  CircularInput,
  CircularTrack,
  CircularProgress,
  CircularThumb,
  useCircularInputContext,
} from 'react-circular-input'
import {
  hexToRgb,
  rgbaToHex,
  isColorTooDark,
} from '@/commons/helpers/function.js'
import {DeleteIcon, StarIcon} from '@chakra-ui/icons'
import {colorsDD} from '/src/components/ui/colors/colors'
import Image from 'next/image'
import Link from 'next/link'

export default function GradientTool(props) {
  const {
    angle,
    setAngle,
    alpha,
    setAlpha,
    hue,
    setHue,
    setGradientColor,
    isLoading,
    animate,
  } = props
  const [lastTouchedTracker, setLastTouchedTracker] = useState(null)
  const edithexa = useRef()
  const initialState = {
    trackers: [
      {id: Date.now() + 1, value: 0, color: colorsDD.pink, alpha: 1},
      {id: Date.now() + 2, value: 50, color: '#6b00ff', alpha: 1},
      {id: Date.now() + 3, value: 100, color: colorsDD.green, alpha: 1},
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
  const [inputColor, setInputColor] = useState('')
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

  const rgbaColor = {
    r: hue.r,
    g: hue.g,
    b: hue.b,
    a: alpha,
  }

  const updateGradientColor = () => {
    const sortedTrackers = [...state.trackers].sort((a, b) => a.value - b.value)
    const gradientColors = sortedTrackers
      .map(
        tracker =>
          `
      rgba(${hexToRgb(tracker.color)},${tracker.alpha}) ${tracker.value}%`,
      )
      .join(',')

    const newGradient = `linear-gradient(${Math.round(
      angle,
    )}deg,${gradientColors})`
    setGradientColor(newGradient)
  }

  useEffect(() => {
    updateGradientColor()
  }, [state.trackers, angle, alpha])
  function validateHexColor(color) {
    const hexColorRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/
    return hexColorRegex.test(color)
  }
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

  const toast = useToast()
  const popoverRef = useRef(null)

  const closePopover = useCallback(() => {
    popoverRef.current?.onClose()
  }, [])

  const handleKeyDown = (e, trackerId) => {
    if (e.key === 'Enter') {
      closePopover()
      updateTrackerColor(trackerId, inputColor)
    }
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
        description: 'Entrez une couleur hexadécimale valide',
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

  if (isLoading) {
    return (
      <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        position="relative"
      >
        <div style={{position: 'relative'}}>
          <Image
            src="/images/icones/icone-load-int-andrea.png"
            alt="icone-andrea-gauvreau"
            width={200}
            height={200}
          />
          <Image
            src="/images/icones/icone-ext-load-andrea.png"
            alt="andrea-gauvreau-banderole"
            width={200}
            height={200}
            className="spin"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        </div>
      </Flex>
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
        flexDirection={{base: 'column', lg: 'row'}}
        alignItems={{base: 'center', lg: 'flex-start'}}
      >
        <Flex
          flexDirection={{base: 'column', lg: 'column'}}
          alignItems="center"
          w={'200px'}
          pt={10}
        >
          <CircularRangeInput
            value={angle}
            onChange={setAngle}
            angle={angle}
            colorStroke={rgbaToHex(rgbaColor)}
          />
        </Flex>

        <Flex flexDirection={'column'} gap={2}>
          <HuePicker
            width={'auto'}
            color={rgbaColor}
            onChange={handleHueChange}
          />
          <AlphaPicker
            width={'auto'}
            color={getSelectedTrackerColor()}
            onChange={handleAlphaChange}
          />
          <Box
            position={'relative'}
            minW={{base: '100%', lg: '450px'}}
            maxW={{base: '100%', lg: '450px'}}
          >
            {state?.trackers?.map((tracker, index) => (
              <Box
                position={'absolute'}
                minW={{base: '100%', lg: '450px'}}
                maxW={{base: '100%', lg: '450px'}}
                key={index}
              >
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
            <Flex
              flexWrap={'wrap'}
              gap={2}
              w={'full'}
              maxH={'82px'}
              overflowX={'scroll'}
            >
              <Button
                colorScheme={'whiteAlpha'}
                onClick={() => addTracker('#ffffff', '0.5')}
                color={'white'}
              >
                +
              </Button>
              {state?.trackers?.map((tracker, index) => (
                <Popover key={index}>
                  <PopoverTrigger>
                    <Tag
                      bg={tracker?.color + 20}
                      transition={'0.5s'}
                      borderRadius={5}
                      justifyContent="center"
                      alignItems={'center'}
                      p={2}
                      onClick={() => setLastTouchedTracker(tracker.id)}
                      color={
                        isColorTooDark(tracker?.color)
                          ? 'white'
                          : tracker?.color
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
                      <TagLabel>{tracker?.color}</TagLabel>
                      {state?.trackers?.length < 3 ? (
                        ''
                      ) : (
                        <Icon
                          as={DeleteIcon}
                          color={
                            isColorTooDark(tracker?.color)
                              ? 'white'
                              : tracker?.color
                          }
                          onClick={() => deleteTracker(tracker.id)}
                          cursor={'pointer'}
                          ml={2}
                        />
                      )}
                    </Tag>
                  </PopoverTrigger>
                  <PopoverContent bg={colorsDD.bgcolor}>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Modifier la couleur</PopoverHeader>
                    <PopoverBody>
                      <InputGroup size="md">
                        <Input
                          placeholder="Entrez la couleur hex"
                          defaultValue={tracker?.color}
                          onChange={e => setInputColor(e.target?.value ?? '')}
                          onKeyDown={e => handleKeyDown(e, tracker.id)}
                        />
                      </InputGroup>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              ))}
            </Flex>
            <Link
              href={animate ? '/tools/gradient-animation' : '/tools/gradient'}
            >
              <Text
                p={2}
                mt={2}
                bg={animate ? '#ffffff50' : colorsDD.green + 20}
                color={animate ? '#ffffff40' : colorsDD.green}
                transition={'0.5s'}
                _hover={{bg: animate ? '#ffffff90' : colorsDD.green + 60}}
                borderRadius={5}
              >
                {animate ? 'animation désactivé' : 'animation activé'}
                <Icon ml={3} as={StarIcon} />
              </Text>
            </Link>
          </Flex>
        </Flex>
      </VStack>
    </Flex>
  )
}

const CircularRangeInput = ({
  value = 0,
  onChange = () => {},
  angle = 360,
  colorStroke,
}) => {
  const handleChange = newValue => {
    onChange(newValue * 360)
  }

  return (
    <Box width="136px" height="200px">
      <CircularInput
        value={value / 360}
        min={0}
        max={360}
        radius={70}
        onChange={handleChange}
      >
        <CircularTrack strokeWidth={40} stroke="#ffffff20" />
        <CircularProgress strokeWidth={40} stroke={`${colorStroke}`} />
        <CircularThumb fill="white" stroke={`${colorStroke}`} strokeWidth="5" />
        <CustomComponent colorStroke={colorStroke} />
      </CircularInput>
    </Box>
  )
}

function CustomComponent({colorStroke}) {
  const {getPointFromValue, value} = useCircularInputContext()
  const point = getPointFromValue()
  if (!point) return null
  return (
    <text
      {...point}
      textAnchor="middle"
      dy="0.35em"
      fill={colorStroke}
      style={{pointerEvents: 'none', fontWeight: 'bold'}}
    >
      {Math.round(value * 100)}
    </text>
  )
}
