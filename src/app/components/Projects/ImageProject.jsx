import {Box, Flex, Image} from '@chakra-ui/react'
import React from 'react'

export default function ImageProject({image, scale}) {
  const widthImage = 100 * scale
  const widthImageBase = 100
  const heightImage = 80 * scale
  const heightImageBase = 40
  const heightImageMd = 50
  return (
    <>
      <Flex justifyContent={'center'} alignItems={'center'} w={'100vw'}>
        <Flex
          w={{base: '90vw', md: '90vw', lg: `1024px`}}
          position="relative"
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box
            backgroundImage={`url(${image})`}
            backgroundSize={'cover'}
            backgroundPosition={'center'}
            w={{
              base: `calc(${widthImageBase}% - 20px)`,
              md: `calc(${widthImageBase}% - 20px)`,
              lg: `calc(${widthImage}% - 20px)`,
            }}
            h={{
              base: `calc(${heightImageBase}vh - 20px)`,
              md: `calc(${heightImageMd}vh - 20px)`,
              lg: `calc(${heightImage}vh - 20px)`,
            }}
            borderRadius={20}
            position="absolute"
            transform={'translate(-50%,-50%'}
            top={'50%'}
            left={'50%'}
            filter="blur(10px)"
            p={10}
            zIndex={1}
          ></Box>{' '}
          <Box
            backgroundImage={`url(${image})`}
            backgroundSize={'cover'}
            backgroundPosition={'center'}
            w={{
              base: `calc(${widthImageBase}% - 20px)`,
              md: `calc(${widthImageBase}% - 20px)`,
              lg: `calc(${widthImage}% - 20px)`,
            }}
            h={{
              base: `calc(${heightImageBase}vh - 20px)`,
              md: `calc(${heightImageMd}vh - 20px)`,
              lg: `calc(${heightImage}vh - 20px)`,
            }}
            borderRadius={20}
            position="absolute"
            transform={'translate(-50%,-50%'}
            top={'50%'}
            left={'50%'}
            filter="blur(40px)"
            p={10}
            zIndex={1}
          ></Box>
          <Box
            backgroundImage={`url(${image})`}
            backgroundSize={'cover'}
            backgroundPosition={'center'}
            w={{
              base: `calc(${widthImageBase}% - 20px)`,
              md: `calc(${widthImageBase}% - 20px)`,
              lg: `calc(${widthImage}% - 20px)`,
            }}
            h={{
              base: `calc(${heightImageBase}vh - 20px)`,
              md: `calc(${heightImageMd}vh - 20px)`,
              lg: `calc(${heightImage}vh - 20px)`,
            }}
            borderRadius={20}
            zIndex={3}
            position="absolute"
            transform={'translate(-50%,-50%'}
            top={'50%'}
            left={'50%'}
          ></Box>
          <Box
            bg={'#ffffff20'}
            backdropFilter={'blur(10px)'}
            w={{
              base: `calc(${widthImageBase}% )`,
              md: `calc(${widthImageBase}% )`,
              lg: `calc(${widthImage}% )`,
            }}
            h={{
              base: `${heightImageBase}vh`,
              md: `${heightImageMd}vh`,
              lg: `${heightImage}vh`,
            }}
            borderRadius={20}
            position="absolute"
            transform={'translate(-50%,-50%'}
            top={'50%'}
            left={'50%'}
            zIndex={2}
            mixBlendMode="overlay"
          ></Box>
        </Flex>
      </Flex>
    </>
  )
}
