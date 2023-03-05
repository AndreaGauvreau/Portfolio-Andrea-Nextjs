'use client'
import {Box} from '@chakra-ui/react'
import {Center, Float, PresentationControls, Sparkles} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {useState} from 'react'
import Hand3d from './Hand3d'

export default function CanvaHand() {
  const [loading, setLoading] = useState(false)

  return (
    <>
      {loading ? (
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
        <LoadingScreen />
      )}
    </>
  )
}
export function LoadingScreen() {
  return <Box w={'200px'} h={'300px'} bg="red" />
}
