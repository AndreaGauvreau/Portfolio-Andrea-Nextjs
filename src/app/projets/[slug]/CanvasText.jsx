import * as THREE from 'three'
import {useRef, useState, useMemo, useEffect} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {PresentationControls, Text, TrackballControls} from '@react-three/drei'
import {Box} from '@chakra-ui/react'
import {colorsDD} from '../../components/ui/colors/colors'
import {Poppins} from 'next/font/google'
const fontBigPoppins = Poppins({
  subsets: ['latin'],
  weight: '900',
})
export default function CanvasText({projetDatas}) {
  return (
    <Box
      h={{base: '350px', md: '500px'}}
      w={{base: '350px', md: '500px'}}
      p={5}
    >
      <Canvas
        dpr={[1, 2]}
        camera={{position: [0, 0, 35], fov: 90, near: 1, far: 100}}
      >
        <CircularStackAnim
          stack={projetDatas.stack}
          color1={projetDatas.color1}
          color2={projetDatas.color2}
        />
      </Canvas>
    </Box>
  )
}

function Word({children, color1, color2, ...props}) {
  const color = new THREE.Color()
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const [click, setClick] = useState(false)
  const over = e => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  useFrame(({camera}) => {
    ref.current.quaternion.copy(camera.quaternion)
    ref.current.material.color.lerp(color.set(hovered ? color2 : color1), 0.1)
    ref.current.material.color.lerp(color.set(click ? color2 : color1), 0.1)
  })
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      onClick={() => setClick(true)}
      {...props}
      fontSize={2.5}
      font={'/Poppins-Bold.ttf'}
      children={children}
    ></Text>
  )
}

function Cloud({count = 4, radius = 30, words, color1, color2}) {
  const cloudWords = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        const index = Math.floor(Math.random() * words.length)
        const word = words[index]
        const position = new THREE.Vector3().setFromSpherical(
          spherical.set(radius, phiSpan * i, thetaSpan * j),
        )
        temp.push([position, word])
      }
    }
    return temp
  }, [count, radius, words])
  return cloudWords.map(([pos, word], index) => (
    <Word
      key={index}
      position={pos}
      children={word}
      color1={color1}
      color2={color2}
    />
  ))
}

function CircularStackAnim({stack, color1, color2}) {
  return (
    <>
      <fog attach="fog" args={[colorsDD.bgcolor, 0, 60]} />
      <Cloud
        count={8}
        radius={40}
        words={stack}
        color1={color1}
        color2={color2}
      />
      <TrackballControls minDistance={60} maxDistance={60} />
    </>
  )
}
