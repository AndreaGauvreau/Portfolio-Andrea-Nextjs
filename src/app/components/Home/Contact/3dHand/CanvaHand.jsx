import {Center, PresentationControls, Sparkles} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'

import Hand3d from './Hand3d'

export default function CanvaHand() {
  return (
    <>
      <Canvas
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [1, 0, 5],
        }}
      >
        <PresentationControls
          enabled={true} // the controls can be disabled by setting this to false
          global={false} // Spin globally or by dragging the model
          cursor={true} // Whether to toggle cursor style on drag
          snap={true} // Snap-back to center (can also be a spring config)
          speed={1} // Speed factor
          zoom={1} // Zoom factor when half the polar-max is reached
          rotation={[0, 0, 0]} // Default rotation
          polar={[-1, Math.PI / 10]} // Vertical limits
          azimuth={[0, Math.PI / 10]} // Horizontal limits
          config={{mass: 1, tension: 170, friction: 26}} // Spring config
        >
          <Center>
            <Hand3d />
          </Center>
        </PresentationControls>
        <Sparkles
          size={3}
          scale={[4, 4, 4]}
          position-y={1}
          speed={0.32}
          count={70}
        />
      </Canvas>
    </>
  )
}
