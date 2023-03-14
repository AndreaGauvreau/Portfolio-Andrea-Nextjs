'use client'
import {useTexture, useGLTF} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import {useRef} from 'react'
export default function LightLeft() {
  const {nodes} = useGLTF('./model/egg-charge.glb')
  const bakedTexture = useTexture('./model/torus.jpg')
  bakedTexture.flipY = false
  const chargeRef = useRef()

  useFrame((state, delta) => {
    chargeRef.current.rotation.y += delta / 2.5
  })
  return (
    <>
      <mesh geometry={nodes.chargebase.geometry} ref={chargeRef}>
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </>
  )
}
