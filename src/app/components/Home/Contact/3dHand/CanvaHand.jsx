'use client'
import {Box, Flex, Skeleton} from '@chakra-ui/react'
import {
  Center,
  Float,
  PresentationControls,
  Sparkles,
  useProgress,
} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Suspense, useEffect, useRef, useState} from 'react'
import {colorsDD} from '../../../ui/colors/colors'
import Hand3d from './Hand3d'
import Loader from '../../../ui/3dLoader'

export default function CanvaHand() {
  const {progress} = useProgress()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <Flex
      mt={'-50px'}
      w={'100%'}
      alignItems="center"
      justifyContent={'center'}
      h={{base: '50vh', md: '60vh', lg: '100%'}}
    >
      {isMounted ? (
        <Suspense
          fallback={
            <Skeleton
              w="250px"
              h="300px"
              tartColor={colorsDD.pink}
              endColor={colorsDD.green}
            />
          }
        >
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
        </Suspense>
      ) : (
        <Skeleton
          w="250px"
          h="300px"
          tartColor={colorsDD.pink}
          endColor={colorsDD.green}
        />
      )}
    </Flex>
  )
}
