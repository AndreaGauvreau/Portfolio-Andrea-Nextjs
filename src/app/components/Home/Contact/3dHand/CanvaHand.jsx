'use client'
import {Center, Float, PresentationControls, Sparkles} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import Hand3d from './Hand3d'

export default function CanvaHand() {
  return (
    <>
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
    </>
  )
}
