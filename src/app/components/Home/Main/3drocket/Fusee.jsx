'use client'

import {useTexture, useGLTF, Float, Sphere} from '@react-three/drei'
import {Suspense} from 'react'

export default function Fusee() {
  const {nodes} = useGLTF('./model/fusee.glb')
  const bakedTexture = useTexture('./model/fusee.jpg')
  bakedTexture.flipY = false

  const LoaderSphere = () => {
    return (
      <Sphere args={[0.5, 1, 0.5]} position={[0, 1.5, 0]}>
        <meshBasicMaterial wireframe color={'red'} />
      </Sphere>
    )
  }

  return (
    <>
      <Suspense fallback={<LoaderSphere />}>
        <Float speed={5}>
          <group position={[0, -1.2, 0]}>
            <mesh geometry={nodes.Sphere.geometry} rotation={[0, -2, 0]}>
              <meshBasicMaterial map={bakedTexture} />
            </mesh>
          </group>
        </Float>
      </Suspense>
    </>
  )
}
