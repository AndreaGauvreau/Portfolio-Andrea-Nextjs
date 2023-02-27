import {useTexture, useGLTF, Float} from '@react-three/drei'
import {Bloom, EffectComposer} from '@react-three/postprocessing'
export default function Boite() {
  const {nodes} = useGLTF('/model/box.glb')
  const bakedTexture = useTexture('/model/box.jpg')
  bakedTexture.flipY = false

  return (
    <>
      <EffectComposer>
        <Bloom intensity={0.5} luminanceThreshold={0.2}></Bloom>
      </EffectComposer>
      <Float>
        <mesh
          geometry={nodes.Cube004.geometry}
          position={nodes.Cube004.position}
          rotation={[0, -2, 0]}
          emissiveIntensity={12}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </Float>
    </>
  )
}
