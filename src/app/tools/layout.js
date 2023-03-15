'use client'
import '@/global.css'
import Menu from '@/components/ui/Menu/Menu'
import Footer from '@/components/ui/Footer/Footer'
import {Box} from '@chakra-ui/react'
import {colorsDD} from '@/components/ui/colors/colors'

export default function RootLayout({children}) {
  return (
    <>
      <Menu />
      <Box color={'white'} bg={colorsDD.bgcolor} minH={'100vh'}>
        {children}
      </Box>
      <Footer />
    </>
  )
}
