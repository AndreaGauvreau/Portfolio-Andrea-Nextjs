'use client'
import {Box, Flex} from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'

export default function ImageProject({image}) {
  const [scrollY, setScrollY] = useState(1)
  const [scaleValue, setScaleValue] = useState(1)

  function handleScroll() {
    const scrollSection = document.getElementById('scrollsection')
    const maxScroll = 100 - scrollSection?.clientHeight
    setScrollY(scrollSection?.scrollTop)
  }

  useEffect(() => {
    const scrollSection = document.getElementById('scrollsection')
    const maxScroll = 100 - scrollSection?.clientHeight
    scrollSection?.addEventListener('scroll', handleScroll)
    return () => {
      scrollSection?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const maxScroll =
      100 - document.getElementById('scrollsection')?.clientHeight
    if (scrollY === 0) {
      setScaleValue(1)
    } else if (scrollY < 0.5) {
      setScaleValue(0.5)
    } else {
      const newScaleValue = 1 + (scrollY / maxScroll) * 1.5
      setScaleValue(Math.max(0.5, newScaleValue))
    }
  }, [scrollY])
  const widthImage = 100 * scaleValue
  const widthImageBase = 100
  const heightImage = 80 * scaleValue
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
              lg: `calc(${heightImage}vh - 20px)`,
              base: `calc(${heightImageBase}vh - 20px)`,
              md: `calc(${heightImageMd}vh - 20px)`,
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
              lg: `calc(${heightImage}vh - 20px)`,
              base: `calc(${heightImageBase}vh - 20px)`,
              md: `calc(${heightImageMd}vh - 20px)`,
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
              lg: `calc(${heightImage}vh - 20px)`,
              base: `calc(${heightImageBase}vh - 20px)`,
              md: `calc(${heightImageMd}vh - 20px)`,
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
              lg: `${heightImage}vh`,
              base: `${heightImageBase}vh`,
              md: `${heightImageMd}vh`,
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
