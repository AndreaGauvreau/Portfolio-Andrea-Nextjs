'use client'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import React from 'react'
import {colorsDD} from './components/ui/colors/colors'
import {Poppins} from 'next/font/google'
import {Merienda} from 'next/font/google'

const fontBigPoppins = Poppins({
  subsets: ['latin'],
  weight: '900',
})
const fontMedPoppins = Poppins({
  subsets: ['latin'],
  weight: '400',
})
const fontBigMerianda = Merienda({
  subsets: ['latin'],
  weight: '900',
})

const theme = extendTheme({
  fonts: {
    body: fontMedPoppins.style.fontFamily,
    heading: fontBigMerianda.style.fontFamily,
  },
  colors: {
    dew: {
      100: colorsDD.green20,
      200: colorsDD.green20,
      300: colorsDD.green20,
      400: colorsDD.green20,
      500: colorsDD.green20,
      600: colorsDD.green,
      700: colorsDD.green,
      800: colorsDD.green,
      900: colorsDD.green,
    },
    dd: {
      100: colorsDD.pink20,
      200: colorsDD.pink20,
      300: colorsDD.pink20,
      400: colorsDD.pink20,
      500: colorsDD.pink20,
      600: colorsDD.pink,
      700: colorsDD.pink,
      800: colorsDD.pink,
      900: colorsDD.pink,
    },
  },
})

export default function Chakra({children}) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
