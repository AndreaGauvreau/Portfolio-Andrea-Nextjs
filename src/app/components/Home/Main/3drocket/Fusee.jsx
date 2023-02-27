import {useTexture, useGLTF, Float} from '@react-three/drei'

export default function Fusee() {
  const {nodes} = useGLTF('/model/fusee.glb')
  const bakedTexture = useTexture('/model/fusee.jpg')
  bakedTexture.flipY = false
  return (
    <>
      <Float speed={5}>
        <mesh geometry={nodes.Sphere.geometry} rotation={[0, -2, 0]}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </Float>
    </>
  )
}
