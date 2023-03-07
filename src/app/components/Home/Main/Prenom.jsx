import {Badge, Box, Flex, Heading} from '@chakra-ui/react'
import React from 'react'
import {colorsDD} from '../../ui/colors/colors'
import {motion} from 'framer-motion'

export default function Prenom() {
  return (
    <Flex
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <motion.div
        initial={{y: 50, rotate: 20}}
        animate={{y: 0, rotate: 0}}
        transition={{
          duration: 1.4,
          delay: 0.4,
          ease: [0.15, 0.84, 0.27, 0.96],
        }}
      >
        <Box overflow="hidden">
          <motion.div
            initial={{y: 50, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.15, 0.84, 0.27, 0.96],
            }}
          >
            <Heading size={'3xl'} textAlign="center" color={colorsDD.green}>
              andréa
            </Heading>
          </motion.div>
        </Box>
      </motion.div>
      <motion.div
        initial={{y: 50, rotate: -20}}
        animate={{y: 0, rotate: 0}}
        transition={{
          duration: 1.4,
          delay: 0.1,
          ease: [0.15, 0.84, 0.27, 0.96],
        }}
      >
        <Box overflow="hidden">
          <motion.div
            initial={{y: 50, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.15, 0.84, 0.27, 0.96],
            }}
          >
            <Heading
              mt={-2}
              mb={2}
              size={'3xl'}
              textAlign="center"
              color={'white'}
            >
              Gauvreau
            </Heading>
          </motion.div>
        </Box>{' '}
      </motion.div>

      <Flex gap={1}>
        <Badge
          fontFamily={'Poppins'}
          colorScheme={'dew'}
          padding={1}
          borderRadius={5}
        >
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
