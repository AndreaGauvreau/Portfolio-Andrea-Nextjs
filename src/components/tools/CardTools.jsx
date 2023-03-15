import React from 'react'
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
} from '@chakra-ui/react'
import {colorsDD} from '../ui/colors/colors'
import Link from 'next/link'
export default function CardTools({data}) {
  return (
    <Center py={6} zIndex={2}>
      <Box
        maxW={'270px'}
        w={'270px'}
        bg={colorsDD.bgcolor}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Image h={'200px'} w={'full'} src={data?.image} objectFit={'cover'} />
        <Flex justify={'center'}></Flex>

        <Box p={4}>
          <Stack spacing={'20px'} align={'center'}>
            <Heading fontSize={'xl'}>{data?.name}</Heading>
          </Stack>
          <Link href={data.lien}>
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
    </Center>
  )
}
