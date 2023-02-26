import {useTexture, useGLTF} from '@react-three/drei'

export default function TopLight() {
  const {nodes} = useGLTF('./model/top-light.glb')
  const bakedTexture = useTexture('./model/top-light.jpg')
  bakedTexture.flipY = false

  return (
    <>
      <mesh geometry={nodes.top_light.geometry}>
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </>
  )
}
