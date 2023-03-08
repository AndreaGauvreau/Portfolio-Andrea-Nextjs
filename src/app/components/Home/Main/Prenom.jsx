import {Badge, Box, Flex, Heading, Text} from '@chakra-ui/react'
import React from 'react'
import {colorsDD} from '../../ui/colors/colors'
import {motion} from 'framer-motion'
import {Poppins} from 'next/font/google'

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '900'],
})
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
            <Text
              fontSize={{base: '50px', md: '70px'}}
              textAlign="center"
              color={colorsDD.green}
              fontWeight={'900'}
              lineHeight={{base: '50px', md: '70px'}}
              className={fontPoppins.className}
            >
              andréa
            </Text>
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
            <Text
              mt={-2}
              mb={2}
              textAlign="center"
              color={'white'}
              fontWeight={'900'}
              lineHeight={{base: '50px', md: '70px'}}
              fontSize={{base: '50px', md: '70px'}}
              className={fontPoppins.className}
            >
              Gauvreau
            </Text>
          </motion.div>
        </Box>{' '}
      </motion.div>

      <Flex gap={1}>
        <Badge
          colorScheme={'dew'}
          padding={1}
          borderRadius={5}
          className={fontPoppins.className}
          fontWeight={'600'}
        >
          Developpeur frontend
        </Badge>
        <Badge
          colorScheme={'dd'}
          padding={1}
          borderRadius={5}
          fontWeight={'600'}
          className={fontPoppins.className}
        >
          React
        </Badge>
        <Badge
          colorScheme={'dd'}
          padding={1}
          borderRadius={5}
          fontWeight={'600'}
          className={fontPoppins.className}
        >
          Next
        </Badge>
        <Badge
          colorScheme={'dd'}
          padding={1}
          borderRadius={5}
          fontWeight={'600'}
          className={fontPoppins.className}
        >
          Three...
        </Badge>
      </Flex>
    </Flex>
  )
}
