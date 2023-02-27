import {Badge, Flex, Heading} from '@chakra-ui/react'
import React from 'react'
import {colorsDD} from '../../ui/colors/colors'

export default function Prenom() {
  return (
    <Flex
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Heading
        size={'3xl'}
        textAlign="center"
        fontFamily={'dunkel-sans-glatt, sans-serif'}
        color={colorsDD.green}
      >
        andréa
      </Heading>
      <Heading
        mt={-2}
        mb={2}
        size={'3xl'}
        fontFamily={'dunkel-sans-glatt, sans-serif'}
        textAlign="center"
        color={'white'}
      >
        Gauvreau
      </Heading>
      <Flex gap={1}>
        <Badge colorScheme={'dew'} padding={1} borderRadius={5}>
          Developpeur frontend
        </Badge>
        <Badge colorScheme={'dd'} padding={1} borderRadius={5}>
          React
        </Badge>
        <Badge colorScheme={'dd'} padding={1} borderRadius={5}>
          Next
        </Badge>
        <Badge colorScheme={'dd'} padding={1} borderRadius={5}>
          Three...
        </Badge>
      </Flex>
    </Flex>
  )
}
