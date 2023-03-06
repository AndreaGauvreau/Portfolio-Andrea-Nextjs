'use client'
import {useTexture, useGLTF, Float, Sphere} from '@react-three/drei'

export default function Fusee() {
  const {nodes} = useGLTF('./model/fusee.glb')
  const bakedTexture = useTexture('./model/fusee.jpg')
  bakedTexture.flipY = false

  return (
    <>
      <Float speed={5}>
        <group position={[0, -1.2, 0]}>
          <mesh geometry={nodes.Sphere.geometry} rotation={[0, -2, 0]}>
            <meshBasicMaterial map={bakedTexture} />
          </mesh>
        </group>
      </Float>
    </>
  )
}
