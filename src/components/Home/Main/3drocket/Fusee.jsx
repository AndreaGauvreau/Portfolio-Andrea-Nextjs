'use client'
import {useTexture, useGLTF, Float} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import {useRef} from 'react'

export default function Fusee({mousePos}) {
  const {nodes} = useGLTF('./model/fusee.glb')
  const bakedTexture = useTexture('./model/fusee.jpg')
  bakedTexture.flipY = false
  const mesh = useRef()

  useFrame(() => {
    const mouseX = (mousePos.x / window.innerWidth) * 2 - 1
    const mouseY = -(mousePos.y / window.innerHeight) * 2 + 1
    mesh.current.position.x = mouseX * 1.005
    mesh.current.position.z = 0.4 + (mouseX * 1.005) / 2
    mesh.current.position.y = (mouseY * 1.005) / 2
    mesh.current.rotation.y = -1.9 + (mouseX * 1.05) / 2
  })
  return (
    <>
      <Float speed={5}>
        <group position={[0, -1.2, 0]}>
          <mesh
            geometry={nodes.Sphere.geometry}
            rotation={[0, -2, 0]}
            ref={mesh}
          >
            <meshBasicMaterial map={bakedTexture} />
          </mesh>
        </group>
      </Float>
    </>
  )
}
