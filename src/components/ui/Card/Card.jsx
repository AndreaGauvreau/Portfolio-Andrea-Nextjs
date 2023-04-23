import React from 'react'
import {
  Heading,
  Box,
  Center,
  Image,
  Flex,
  Stack,
  Button,
} from '@chakra-ui/react'
import {colorsDD} from '../colors/colors'
import Link from 'next/link'

export default function Card({image, lien = '/', titre}) {
  return (
    <Center py={6} zIndex={2}>
      <Box
        maxW={'270px'}
        w={'270px'}
        bg={colorsDD.bgcolor}
        boxShadow={'2xl'}
        rounded={'md'}
        id={'boxconicanim'}
        p={'1px'}
        position={'relative'}
      >
        <Box
          position={'absolute'}
          w={'100%'}
          h={'100%'}
          rounded={'md'}
          id={'boxconicanim'}
          filter={'blur(10px)'}
          opacity={0.5}
          zIndex={0}
        />
        <Box
          position={'relative'}
          w={'100%'}
          h={'100%'}
          rounded={'md'}
          bg={'black'}
          overflow={'hidden'}
          zIndex={2}
        >
          <Image h={'170px'} w={'full'} src={image} objectFit={'cover'} />
          <Flex justify={'center'}></Flex>

          <Box p={4}>
            <Stack spacing={'20px'} align={'center'}>
              <Heading fontSize={'sm'} fontFamily={'Poppins'}>
                {titre}
              </Heading>
            </Stack>
            <Link href={lien}>
              <Button
                w={'full'}
                mt={4}
                bg={colorsDD.green20}
                color={colorsDD.green}
                rounded={'md'}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              >
                Accéder
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Center>
  )
}
