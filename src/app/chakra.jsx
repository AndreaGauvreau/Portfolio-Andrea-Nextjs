'use client'
import {ChakraProvider} from '@chakra-ui/react'
import React from 'react'

export default function Chakra({children}) {
  return <ChakraProvider>{children}</ChakraProvider>
}
