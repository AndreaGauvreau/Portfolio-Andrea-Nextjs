import React, {useRef} from 'react'
import {useTexture, useGLTF, ContactShadows} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'

export default function Hand3d() {
  const {nodes} = useGLTF('./model/cafe.glb')
  const bakedTexture = useTexture('./model/cafe.jpg')
  bakedTexture.flipY = false

  const meshRef = useRef()
  const timeRef = useRef(0)

  useFrame((state, delta) => {
    timeRef.current += delta
    meshRef.current.rotation.y = timeRef.current * 0.5
  })

  return (
    <group>
      <ContactShadows
        opacity={0.5}
        scale={10}
        blur={2}
        far={10}
        resolution={256}
        color="#000000"
        position={[0, -0.2, 0]}
      />
      <mesh
        ref={meshRef}
        geometry={nodes.cafe.geometry}
        rotation={[0.1, -0.7, 0]}
        receiveShadow
        castShadow
        scale={1}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  )
}
