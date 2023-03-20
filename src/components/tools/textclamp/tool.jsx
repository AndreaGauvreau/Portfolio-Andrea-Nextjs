'use client'
import React from 'react'
import {
  Flex,
  FormControl,
  FormLabel,
  Grid,
  NumberInput,
  NumberInputField,
  Select,
} from '@chakra-ui/react'
import {CodeBlock} from '@/components/ui/CodeBlock/CodeBlock'

export default function Tool(props) {
  const {
    fontSizeMin,
    setFontSizeMin,
    fontSizeMax,
    setFontSizeMax,
    viewportWidthMin,
    setViewportWidthMin,
    viewportWidthMax,
    setViewportWidthMax,
    fontSizeMinUnit,
    setFontSizeMinUnit,
    fontSizeMaxUnit,
    setFontSizeMaxUnit,
    viewportWidthMinUnit,
    setViewportWidthMinUnit,
    viewportWidthMaxUnit,
    setViewportWidthMaxUnit,
    codeCopy,
  } = props

  return (
    <Flex
      width={{base: 'auto', lg: '800px'}}
      height="auto"
      position={'relative'}
      flexDirection={{base: 'column', lg: 'column'}}
      justifyContent="center"
      alignItems={'center'}
    >
      <Grid templateColumns="repeat(2, 1fr)" gap={4} w={'full'}>
        {[
          {
            label: 'Font-size minimum',
            value: fontSizeMin,
            setValue: setFontSizeMin,
            unit: fontSizeMinUnit,
            setUnit: setFontSizeMinUnit,
          },
          {
            label: 'Font-size maximum',
            value: fontSizeMax,
            setValue: setFontSizeMax,
            unit: fontSizeMaxUnit,
            setUnit: setFontSizeMaxUnit,
          },
          {
            label: 'Viewport Width minimum',
            value: viewportWidthMin,
            setValue: setViewportWidthMin,
            unit: viewportWidthMinUnit,
            setUnit: setViewportWidthMinUnit,
          },
          {
            label: 'Viewport width maximum',
            value: viewportWidthMax,
            setValue: setViewportWidthMax,
            unit: viewportWidthMaxUnit,
            setUnit: setViewportWidthMaxUnit,
          },
        ].map((item, index) => (
          <FormControl key={index}>
            <FormLabel>{item.label}</FormLabel>
            <Flex>
              <NumberInput
                value={item.value}
                onChange={value => item.setValue(value)}
                min={0}
              >
                <NumberInputField />
              </NumberInput>
              <Select
                value={item.unit}
                onChange={e => item.setUnit(e.target.value)}
                width="5rem"
                ml={2}
              >
                <option value="px">px</option>
                <option value="rem">rem</option>
              </Select>
            </Flex>
          </FormControl>
        ))}
      </Grid>
      <Flex w={'full'} maxW={{base: '80vw', md: 'full'}}>
        <CodeBlock lineNB={false} language={'css'} code={codeCopy} />
      </Flex>
    </Flex>
  )
}
