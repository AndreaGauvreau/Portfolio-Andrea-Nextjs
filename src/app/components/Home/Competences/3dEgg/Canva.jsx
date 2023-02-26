import {Center, PresentationControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import ChargeStation from './ChargeStation'
import Egg from './Egg'
import TopLight from './TopLight'

export default function CanvasEgg({hoverEgg}) {
  return (
    <>
      <Canvas
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 50,
          position: [1, 2, 8],
        }}
      >
        <PresentationControls
          enabled={true} // the controls can be disabled by setting this to false
          global={false} // Spin globally or by dragging the model
          cursor={true} // Whether to toggle cursor style on drag
          snap={true} // Snap-back to center (can also be a spring config)
          speed={0.5} // Speed factor
          zoom={1} // Zoom factor when half the polar-max is reached
          rotation={[0, 0, 0]} // Default rotation
          polar={[0, Math.PI / 7]} // Vertical limits
          azimuth={[0, Math.PI / 2]} // Horizontal limits
          config={{mass: 1, tension: 170, friction: 26}} // Spring config
        >
          <Center>
            <Egg hoverEgg={hoverEgg} />
            <ChargeStation />
            <TopLight />
          </Center>
        </PresentationControls>
      </Canvas>
    </>
  )
}
