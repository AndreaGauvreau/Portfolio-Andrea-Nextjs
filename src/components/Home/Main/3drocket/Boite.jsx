'use client'
import {useTexture, useGLTF, Float} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import {useEffect, useRef} from 'react'

export default function Boite({mousePos, setLoadingApi}) {
  const {nodes} = useGLTF('./model/box.glb')
  const bakedTexture = useTexture('./model/box.jpg')
  bakedTexture.flipY = false
  const mesh2 = useRef()

  useFrame(() => {
    const mouseX = (mousePos.x / window.innerWidth) * 2 - 1
    const mouseY = -(mousePos.y / window.innerHeight) * 2 + 1
    mesh2.current.position.x = (mouseX * 1.005) / 10
    mesh2.current.position.y = (mouseY * 1.005) / 10
    mesh2.current.rotation.y = -1.9 + (mouseX * 1.05) / 2
    mesh2.current.rotation.z = 0 + (mouseY * 1.05) / 10
  })
  useEffect(() => {
    setLoadingApi({main: true})
  }, [])
  return (
    <>
      <Float>
        <group position={[0, -1.3, 0]}>
          <mesh
            geometry={nodes.Cube004.geometry}
            rotation={[0, -2, 0]}
            scale={1}
            ref={mesh2}
          >
            <meshBasicMaterial map={bakedTexture} />
          </mesh>
        </group>
      </Float>
    </>
  )
}
