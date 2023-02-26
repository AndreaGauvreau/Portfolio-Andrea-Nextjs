import {Center, PresentationControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {useContext} from 'react'
import {CursorContext} from '../../../ui/cursor/CursorProvider'
import Boite from './Boite'
import Fusee from './Fusee'

export default function Canvas3d() {
  const [cursorData, setCursorData] = useContext(CursorContext)

  const handleMouseGrab = () => {
    setCursorData(prevState => ({
      ...prevState,
      mouseEnter: 'Sm',
      mouseText: '🚀',
    }))
  }

  const handleMouseLeave = () => {
    setCursorData(prevState => ({
      ...prevState,
      mouseEnter: 'default',
      mouseText: '',
    }))
  }
  return (
    <>
      <Canvas
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 1, 5],
        }}
        onMouseEnter={handleMouseGrab}
        onMouseLeave={handleMouseLeave}
      >
        <PresentationControls
          enabled={true} // the controls can be disabled by setting this to false
          global={false} // Spin globally or by dragging the model
          cursor={true} // Whether to toggle cursor style on drag
          snap={true} // Snap-back to center (can also be a spring config)
          speed={1} // Speed factor
          zoom={1} // Zoom factor when half the polar-max is reached
          rotation={[0, 0.3, 0]} // Default rotation
          polar={[0, Math.PI / 7]} // Vertical limits
          azimuth={[-1, Math.PI / 4]} // Horizontal limits
          config={{mass: 1, tension: 170, friction: 26}} // Spring config
        >
          <Center>
            <Boite />
            <Fusee />
          </Center>
        </PresentationControls>
      </Canvas>
    </>
  )
}
