'use client'
import {Skeleton} from '@chakra-ui/react'
import {PresentationControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {lazy, Suspense, useEffect, useState} from 'react'
import {colorsDD} from '../../../ui/colors/colors'
export default function Canvas3d() {
  const Boite = lazy(() => import('./Boite'))
  const Fusee = lazy(() => import('./Fusee'))
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      {isMounted ? (
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
            <Suspense
              fallback={
                <mesh>
                  <boxGeometry scale={[2, 3, 2]} args={[2, 2.8, 1.3]} />
                  <meshBasicMaterial wireframe color="purple" />
                </mesh>
              }
            >
              <Boite />
            </Suspense>
            <Suspense
              fallback={
                <mesh>
                  <sphereGeometry args={[0.6, 10, 10, 10]} positionX={-2} />
                  <meshBasicMaterial wireframe color="lime" />
                </mesh>
              }
            >
              <Fusee />
            </Suspense>
          </PresentationControls>
        </Canvas>
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
