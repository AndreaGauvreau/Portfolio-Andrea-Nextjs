import React, {Suspense, useContext, useState} from 'react'
import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Box,
  TagLabel,
  Tag,
  Flex,
  SkeletonCircle,
  Skeleton,
} from '@chakra-ui/react'

import {colorsDD} from '../../../ui/colors/colors'

export default function SkeletonProjet({}) {
  const [className, setClassName] = useState('boxEffect')

  return (
    <Card
      maxW="sm"
      w={{base: '250px', md: '250px', lg: '350px'}}
      position={'absolute'}
      top={'50%'}
      left={'50%'}
      transform={'translate(-50%, -50%)'}
      transition={'0.5s ease'}
      transformOrigin="center"
      color={'white'}
      borderRadius={10}
      bg={'#ffffff00'}
      overflow={'hidden'}
      p={1}
    >
      <Box className={className} bg={colorsDD.bgcolor2} borderRadius={10}>
        <CardBody p={4}>
          <Skeleton
            w="100%"
            h="150px"
            tartColor={colorsDD.pink20}
            endColor={colorsDD.green20}
            borderRadius={10}
          />
          <Stack mt="6" spacing="3">
            <Skeleton
              w="100%"
              h="35px"
              tartColor={colorsDD.pink20}
              endColor={colorsDD.green20}
              borderRadius={5}
            />{' '}
            <Text fontSize={{base: 'xs', md: 'sm', lg: 'lg'}} />
            <Flex gap={2} wrap={'wrap'}>
              <Skeleton
                w="90%"
                h="20px"
                tartColor={colorsDD.pink20}
                endColor={colorsDD.green20}
                borderRadius={5}
              />{' '}
              <Skeleton
                w="30%"
                h="20px"
                tartColor={colorsDD.pink20}
                endColor={colorsDD.green20}
                borderRadius={5}
              />{' '}
              <Skeleton
                w="30%"
                h="20px"
                tartColor={colorsDD.pink20}
                endColor={colorsDD.green20}
                borderRadius={5}
              />
            </Flex>
          </Stack>
        </CardBody>
      </Box>
    </Card>
  )
}
