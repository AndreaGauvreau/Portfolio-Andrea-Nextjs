import React from 'react'
import {Box, Flex, Heading} from '@chakra-ui/react'
import GlassMorphismTool from '@/components/tools/glassmorphism/glassmorphismtool'
import Menu from '@/components/ui/Menu/Menu'
import {colorsDD} from '@/components/ui/colors/colors'
export default function MainSection() {
  return (
    <>
      <Menu />
      <Flex
        w={'100vw'}
        h={'100vh'}
        justifyContent="center"
        alignItems={'center'}
      >
        <Flex
          w={'xxl'}
          h={'400px'}
          bg={'#ffffff10'}
          flexDirection="column"
          justifyContent={'center'}
          alignItems={'center'}
          gap={10}
          p={10}
          borderRadius={10}
        >
          <Heading>GlassMorphism</Heading>
          <GlassMorphismTool />
        </Flex>
      </Flex>
    </>
  )
}
