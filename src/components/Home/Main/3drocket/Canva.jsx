'use client'
import {Box, Skeleton} from '@chakra-ui/react'
import {PresentationControls, useProgress} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Suspense, useEffect, useState} from 'react'
import Loader from '@/components/ui/3dLoader'
import Boite from './Boite'
import Fusee from './Fusee'
import {colorsDD} from '@/components/ui/colors/colors'

export default function Canvas3d({mousePos, setLoadingApi}) {
  const {progress} = useProgress()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <>
      {isMounted ? (
        <Suspense fallback={<Loader progress={progress} />}>
          <Box h={{base: '400px', md: '450px', lg: '550px'}} w={'400px'}>
            <Canvas
              flat
              camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [0, 1, 5],
              }}
            >
              <PresentationControls
                enabled={true} // the controls can be disabled by setting this to false
                global={false} // Spin globally or by dragging the model
                cursor={true} // Whether to toggle cursor style on drag
                snap={true} // Snap-back to center (can also be a spring config)
                speed={1} // Speed factor
                zoom={1} // Zoom factor when half the polar-max is reached
                rotation={[0, 0.3, 0]} // Default rotation
                polar={[0, Math.PI / 7]} // Vertical limits
                azimuth={[-1, Math.PI / 4]} // Horizontal limits
                config={{mass: 1, tension: 170, friction: 26}} // Spring config
              >
                <Boite mousePos={mousePos} setLoadingApi={setLoadingApi} />
                <Fusee mousePos={mousePos} />
              </PresentationControls>
            </Canvas>
          </Box>
        </Suspense>
      ) : (
        <Skeleton
          w="200px"
          h="300px"
          tartColor={colorsDD.pink}
          endColor={colorsDD.green}
        />
      )}
    </>
  )
}
