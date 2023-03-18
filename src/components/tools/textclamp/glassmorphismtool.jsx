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
  SliderMark,
  IconButton,
} from '@chakra-ui/react'
import {ChromePicker} from 'react-color'
import {motion} from 'framer-motion'
import {colorsDD} from '@/components/ui/colors/colors'
import {CheckIcon, CopyIcon} from '@chakra-ui/icons'
export default function GlassMorphismTool(props) {
  const {
    blurValue,
    setBlurValue,
    transparency,
    setTransparency,
    checked,
    setChecked,
    checkedShadow,
    setCheckedShadow,
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

  const [isCopied, setIsCopied] = useState(false)

  const textRef = useRef(null)
  let timeoutId = null

  const copyToClipboard = () => {
    textRef.current.select()
    document.execCommand('copy')
    setIsCopied(true)
    timeoutId = setTimeout(() => setIsCopied(false), 2000)
  }

  const handleButtonClick = () => {
    clearTimeout(timeoutId)
    copyToClipboard()
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
      <Flex
        position={'absolute'}
        display={{base: 'none', lg: 'flex'}}
        justifyContent="center"
        alignItems="center"
        fontSize={40}
        top={'-190px'}
        left={'-150px'}
        w={'200px'}
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
          🚀
        </motion.div>
      </Flex>

      <Flex
        justifyContent="center"
        position={'absolute'}
        display={{base: 'none', lg: 'flex'}}
        alignItems="center"
        bottom={'50px'}
        right={'-150px'}
        fontSize={80}
        w={'clamp(6.25rem, -25rem + 50vw, 12.5rem)'}
        h={'clamp(6.25rem, -25rem + 50vw, 12.5rem)'}
        borderRadius={'50%'}
        backdropFilter={`blur(${blurValue}px)`}
        bg={`rgba( ${color.r}, ${color.g}, ${color.b}, ${transparency.toFixed(
          2,
        )} );`}
        zIndex={99}
        border={checked ? `1px solid rgba( 255,255,255, 0.22 );` : ''}
        boxShadow={
          checkedShadow ? `0 10px 30px 0 rgba( 20, 20, 20, 0.25  );` : ''
        }
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
          🐣
        </motion.div>
      </Flex>

      <VStack
        flex={1}
        justifyContent="space-around"
        paddingRight="20px"
        gap={5}
        alignItems={{base: 'center', lg: 'flex-start'}}
      >
        <HStack flexDirection={{base: 'column', lg: 'row'}}>
          <Text fontSize={'md'}>Intensité sur Flou</Text>
          <Slider
            min={0}
            w={200}
            max={20}
            step={1}
            colorScheme="pink"
            value={blurValue}
            onChange={value => setBlurValue(value)}
          >
            <SliderMark value={5} mt="3" ml="-2.5" fontSize="xs">
              5px
            </SliderMark>
            <SliderMark value={15} mt="3" ml="-2.5" fontSize="xs">
              15px
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={5} />
          </Slider>
        </HStack>

        <HStack flexDirection={{base: 'column', lg: 'row'}}>
          <Text fontSize={'md'}>Transparence</Text>
          <Slider
            w={200}
            min={0}
            max={1}
            step={0.05}
            value={transparency}
            colorScheme="pink"
            onChange={value => setTransparency(value)}
          >
            <SliderMark value={0.1} mt="3" ml="-2.5" fontSize="xs">
              10%
            </SliderMark>

            <SliderMark value={0.9} mt="3" ml="-2.5" fontSize="xs">
              90%
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={5} />
          </Slider>
        </HStack>

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
        <HStack>
          <Checkbox
            size="md"
            color={'white'}
            colorScheme={'whiteAlpha'}
            isChecked={checked}
            onChange={event => setChecked(event.target.checked)}
          >
            Bordures
          </Checkbox>
          <Checkbox
            size="md"
            color={'white'}
            colorScheme={'whiteAlpha'}
            isChecked={checkedShadow}
            onChange={event => setCheckedShadow(event.target.checked)}
          >
            Ombres
          </Checkbox>
        </HStack>
      </VStack>
      <VStack
        flex="1"
        justifyContent={{base: 'center', lg: 'flex-start'}}
        alignItems={{base: 'center', lg: 'flex-start'}}
        pl={'20px'}
        pt={'20px'}
        bg={'#ffffff10'}
        pb={'20px'}
        borderRadius={10}
      >
        <Text fontSize={'15px'}>
          {checkedShadow
            ? `box-shadow: 0 8px 32px 0 rgba( 20, 20, 20, 0.25 );`
            : ''}
          <br></br>
          background: rgba({color.r}, {color.g}, {color.b},
          {transparency.toFixed(2)} );<br></br>
          backdrop-filter: blur( {blurValue}px );<br></br>
          -webkit-backdrop-filter: blur( {blurValue}px );<br></br>
          border-radius: 10px;<br></br>
          {checked ? `border: 1px solid rgba( 255,255,255, 0.18 );` : ''}
        </Text>
        <IconButton
          colorScheme={'whiteAlpha'}
          onClick={handleButtonClick}
          marginTop="10px"
          pl={2}
          leftIcon={isCopied ? <CheckIcon /> : <CopyIcon />}
          disabled={isCopied}
        />
        <textarea
          ref={textRef}
          value={`background: rgba( ${color.r}, ${color.g}, ${
            color.b
          }, ${transparency.toFixed(2)} );
box-shadow: 0 8px 32px 0 rgba( 20, 20, 20, 0.25  );
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
