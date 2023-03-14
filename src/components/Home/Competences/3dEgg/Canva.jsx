'use client'
import {Box, Skeleton, SkeletonCircle} from '@chakra-ui/react'
import {Center, PresentationControls, useProgress} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Suspense, useEffect, useRef, useState} from 'react'
import {colorsDD} from '@/components/ui/colors/colors'
import ChargeStation from './ChargeStation'
import Egg from './Egg'
import TopLight from './TopLight'
import Loader from '@/components/ui/3dLoader'

export default function CanvasEgg({hoverEgg, mousePos}) {
  const {progress} = useProgress()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      {isMounted ? (
        <Suspense fallback={<Loader progress={progress} />}>
          <Canvas
            flat
            camera={{
              fov: 45,
              near: 0.1,
              far: 50,
              position: [1, 2, 8],
            }}
          >
            <PresentationControls
              enabled={true} // the controls can be disabled by setting this to false
              global={false} // Spin globally or by dragging the model
              cursor={true} // Whether to toggle cursor style on drag
              snap={true} // Snap-back to center (can also be a spring config)
              speed={0.5} // Speed factor
              zoom={1} // Zoom factor when half the polar-max is reached
              rotation={[0, 0, 0]} // Default rotation
              polar={[0, Math.PI / 7]} // Vertical limits
              azimuth={[0, Math.PI / 2]} // Horizontal limits
              config={{mass: 1, tension: 170, friction: 26}} // Spring config
            >
              <Center>
                <Suspense fallback={null}>
                  <Egg hoverEgg={hoverEgg} />
                </Suspense>
                <Suspense fallback={null}>
                  <ChargeStation />
                </Suspense>

                <Suspense fallback={null}>
                  <TopLight mousePos={mousePos} />
                </Suspense>
              </Center>
            </PresentationControls>
          </Canvas>
        </Suspense>
      ) : (
        <Skeleton
          w="200px"
          h="220px"
          borderRadius={10}
          tartColor={colorsDD.pink}
          endColor={colorsDD.green}
        />
      )}
    </>
  )
}
