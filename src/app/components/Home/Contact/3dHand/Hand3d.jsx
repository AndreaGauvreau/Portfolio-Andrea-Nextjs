'use client'
import React from 'react'
import {useTexture, useGLTF} from '@react-three/drei'

export default function Hand3d() {
  const {nodes} = useGLTF('./model/room.glb')
  const bakedTexture = useTexture('./model/room.jpg')
  bakedTexture.flipY = false

  return (
    <group>
      <mesh geometry={nodes.room001.geometry} rotation={[0.1, -0.7, 0]}>
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  )
}
