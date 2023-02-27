import {useTexture, useGLTF} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import {useRef} from 'react'
import {Bloom, EffectComposer} from '@react-three/postprocessing'
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
      <EffectComposer>
        <Bloom intensity={0.5} luminanceThreshold={0.2}></Bloom>
      </EffectComposer>
      <mesh geometry={nodes.chargebase.geometry} ref={chargeRef}>
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </>
  )
}
