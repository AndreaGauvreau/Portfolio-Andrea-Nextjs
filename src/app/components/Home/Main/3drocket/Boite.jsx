'use client'
import {useTexture, useGLTF, Float, useProgress, Html} from '@react-three/drei'
import {useEffect} from 'react'

export default function Boite() {
  const {nodes} = useGLTF('./model/box.glb')
  const bakedTexture = useTexture('./model/box.jpg')
  bakedTexture.flipY = false

  return (
    <>
      <Float>
        <group position={[0, -1.3, 0]}>
          <mesh geometry={nodes.Cube004.geometry} rotation={[0, -2, 0]}>
            <meshBasicMaterial map={bakedTexture} />
          </mesh>
        </group>
      </Float>
    </>
  )
}
