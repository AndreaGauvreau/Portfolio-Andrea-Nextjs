'use client'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import React from 'react'
import {colorsDD} from './components/ui/colors/colors'

const theme = extendTheme({
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
  components: {
    Heading: {
      variants: {
        dew: {
          fontFamily: 'arial',
          fontSize: '40px',
          fontWeight: '400',
        },
        dd: {
          fontFamily: 'arial',
          fontSize: '40px',
          fontWeight: '600',
        },
      },
    },
  },
})
export default function Chakra({children}) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
