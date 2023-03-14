'use client'
import {useTexture, useGLTF} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import {useRef} from 'react'

export default function TopLight({mousePos}) {
  const {nodes} = useGLTF('./model/top-light.glb')
  const bakedTexture = useTexture('./model/top-light.jpg')
  bakedTexture.flipY = false
  const lightref = useRef()

  useFrame(() => {
    const mouseX = (mousePos.x / window.innerWidth) * 2 - 1
    const mouseY = -(mousePos.y / window.innerHeight) * 2 + 1
    lightref.current.rotation.y = mouseX * 1.05
    lightref.current.rotation.x = mouseY / 1.05 / -10
  })

  return (
    <>
      <mesh geometry={nodes.top_light.geometry} ref={lightref}>
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </>
  )
}
