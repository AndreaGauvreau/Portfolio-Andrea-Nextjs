'use client'
import {Box, Flex, Skeleton} from '@chakra-ui/react'
import {Center, Float, PresentationControls, Sparkles} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {useEffect, useRef, useState} from 'react'
import {colorsDD} from '../../../ui/colors/colors'
import Hand3d from './Hand3d'

export default function CanvaHand() {
  const [active, setActive] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const skeletonref2 = useRef()

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    console.log(
      Math.round(scrollY / 100) * 100,
      skeletonref2.current.getBoundingClientRect(),
    )
    if (
      Math.round(skeletonref2.current.getBoundingClientRect().bottom / 100) *
        100 <
      1000
    ) {
      setActive(true)
    }
  }, [scrollY])
  return (
    <Flex
      mt={'-50px'}
      w={'100%'}
      alignItems="center"
      justifyContent={'center'}
      h={{base: '50vh', md: '60vh', lg: '100%'}}
      ref={skeletonref2}
    >
      {active ? (
        <Canvas
          flat
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [1, 0, 5],
          }}
        >
          <Center>
            <Float>
              <Hand3d />
            </Float>
          </Center>
        </Canvas>
      ) : (
        <Skeleton
          w="250px"
          h="350px"
          tartColor={colorsDD.pink}
          endColor={colorsDD.green}
        />
      )}
    </Flex>
  )
}
