import React, {forwardRef, useEffect, useRef, useState} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {Sphere, PresentationControls} from '@react-three/drei'
import * as THREE from 'three'
import {useLoader} from '@react-three/fiber'
import {cityDatas} from './mapDatas'
import {colorsDD} from '@/components/ui/colors/colors'

export default function CanvaGlobe({
  onClickCountry,
  selectedCountry,
  data,
  loadingApi,
  setLoadingApi,
}) {
  useEffect(() => {
    setLoadingApi({list: true})
  }, [])
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <PresentationControls
        enabled={true} // the controls can be disabled by setting this to false
        global={false} // Spin globally or by dragging the model
        cursor={true} // Whether to toggle cursor style on drag
        snap={false} // Snap-back to center (can also be a spring config)
        speed={1} // Speed factor
        zoom={1} // Zoom factor when half the polar-max is reached
        rotation={[0, 3, 0]} // Default rotation
        polar={[-Infinity, Infinity]} // Vertical limits
        azimuth={[-Infinity, Infinity]} // Horizontal limits
        config={{mass: 1, tension: 170, friction: 26}} // Spring config
      >
        <Earth
          onClick={onClickCountry}
          selectedCountry={selectedCountry}
          data={data}
        />
      </PresentationControls>
    </Canvas>
  )
}

const Earth = forwardRef(({onClick, controlsRef, selectedCountry, data}) => {
  const meshRef = useRef()
  const [geoJsonData, setGeoJsonData] = useState()

  const texture = useLoader(THREE.TextureLoader, '/2k_earth_nightmap.jpg')
  const cityData = cityDatas
  useEffect(() => {
    setGeoJsonData(cityData)
  }, [])

  useFrame(() => {
    meshRef.current.rotation.y += 0.0003
  })

  const onClickPoint = (event, city) => {
    event.stopPropagation()
    onClick(city)
  }

  const latLongToVector3 = (lat, lon, radius) => {
    const phi = (90 - lat) * (Math.PI / 180)
    const theta = (lon + 180) * (Math.PI / 180)
    const x = -(radius * Math.sin(phi) * Math.cos(theta))
    const z = radius * Math.sin(phi) * Math.sin(theta)
    const y = radius * Math.cos(phi)
    return new THREE.Vector3(x, y, z)
  }

  const renderPoints = () => {
    if (!geoJsonData) {
      return null
    }

    return geoJsonData.features.map(city => {
      const position = latLongToVector3(
        city.geometry.coordinates[1],
        city.geometry.coordinates[0],
        1.01,
      )

      return (
        <>
          <mesh
            key={city?.id}
            position={position.toArray()}
            onClick={event => onClickPoint(event, city)}
            scale={1}
          >
            <sphereGeometry args={[0.02, 12, 12]} />
            <meshStandardMaterial
              color={city?.id === data?.id ? colorsDD.green : colorsDD.pink}
              emissive={city?.id === data?.id ? colorsDD.green : colorsDD.pink}
              emissiveIntensity={1}
              metalness={0}
              roughness={0}
              transparent={true}
              opacity={1}
            />
          </mesh>
          <pointLight
            key={`light-${city?.id}`}
            position={position.toArray()}
            color={city?.id === data?.id ? colorsDD.green : colorsDD.pink}
            distance={city?.id === data?.id ? 1 : 3}
            decay={2}
            intensity={city?.id === data?.id ? 50 : 20}
          />
        </>
      )
    })
  }

  return (
    <>
      <Sphere
        ref={meshRef}
        args={[1, 32, 32]}
        onClick={onClick}
        scale={2.2}
        controlsRef={controlsRef}
      >
        <meshPhongMaterial
          color={colorsDD.bgcolor2}
          bumpMap={texture ? texture : ''}
          bumpScale={0.3}
        />
        {renderPoints()}
      </Sphere>
    </>
  )
})
