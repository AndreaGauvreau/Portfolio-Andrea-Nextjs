'use client'
import {useTexture, useGLTF, Float, Box} from '@react-three/drei'
import {Suspense} from 'react'
export default function Boite() {
  const {nodes} = useGLTF('./model/box.glb')
  const bakedTexture = useTexture('./model/box.jpg')
  bakedTexture.flipY = false

  const LoaderBox = () => {
    return (
      <Box args={[2, 3, 1]} position={[0, 1.5, 0]}>
        <meshBasicMaterial wireframe />
      </Box>
    )
  }

  return (
    <>
      <Suspense fallback={<LoaderBox />}>
        <Float>
          <mesh
            geometry={nodes.Cube004.geometry}
            position={nodes.Cube004.position}
            rotation={[0, -2, 0]}
            emissiveIntensity={12}
          >
            <meshBasicMaterial map={bakedTexture} />
          </mesh>
        </Float>
      </Suspense>
    </>
  )
}
