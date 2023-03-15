import React from 'react'
import {
  Skeleton,
  Box,
  Center,
  SkeletonCircle,
  SkeletonText,
  VStack,
  Button,
} from '@chakra-ui/react'
import {colorsDD} from '../ui/colors/colors'

export default function CardToolsSkeleton() {
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
        <Skeleton height="200px" width="full" />
        <Box p={4}>
          <VStack spacing={4} p={4} align="center">
            <Skeleton h={'33px'} w={'full'} noOfLines={1} />
          </VStack>

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
            isDisabled
          >
            <SkeletonText w={'full'} noOfLines={1} />
          </Button>
        </Box>
      </Box>
    </Center>
  )
}