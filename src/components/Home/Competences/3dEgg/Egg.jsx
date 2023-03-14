'use client'
import {useTexture, useGLTF, Float} from '@react-three/drei'
import {useState, useRef} from 'react'
import {useFrame} from '@react-three/fiber'

export default function Egg({hoverEgg}) {
  const {nodes} = useGLTF('./model/egg-2.glb')
  const bakedTexture = useTexture('./model/egg-skin-2.jpg')
  bakedTexture.flipY = false

  const [scale, setScale] = useState(1)
  const targetScale = hoverEgg ? 1.2 : 1

  const eggRef = useRef()

  useFrame(({clock}, delta) => {
    const elapsedTime = clock.getElapsedTime()
    const newScale = scale + (targetScale - scale) * 0.1
    setScale(newScale)

    eggRef.current.rotation.y += delta / -1.5
  })

  return (
    <>
      <Float speed={5} rotationIntensity={2}>
        <mesh geometry={nodes.egg.geometry} ref={eggRef} scale={scale}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </Float>
    </>
  )
}
