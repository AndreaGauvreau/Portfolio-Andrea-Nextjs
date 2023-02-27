import React, {useEffect} from 'react'
import {useState} from 'react'
import './gradient.css'
export default function Gradient({versionG, colorG, indexG}) {
  const [version, setVersion] = useState({
    width: '10vw',
    height: '20vh',
    filter: 'blur(130px)',
  })

  useEffect(() => {
    if (versionG === 1) {
      setVersion({
        width: '50vw',
        height: '50vh',
        filter: 'blur(80px)',
        background: `linear-gradient(45deg, ${colorG} 0%, #ffffff00 60%)`,
        left: '50%',
        top: '20%',
      })
    } else if (versionG === 2) {
      setVersion({
        width: '50px',
        height: '150px',
        filter: 'blur(60px)',
        background: `linear-gradient(45deg, ${colorG} 0%, #ffffff00 60%)`,
        left: '20%',
        top: '20%',
      })
    } else if (versionG === 3) {
      setVersion({
        width: '200px',
        height: '80vh',
        filter: 'blur(60px)',
        background: `linear-gradient(45deg, ${colorG} 0%, #ffffff00 60%)`,
        right: '20%',
        bottom: '10%',
      })
    }
  }, [colorG, versionG])

  return (
    <div
      id="gradient"
      style={{background: colorG, ...version, zIndex: indexG}}
    ></div>
  )
}
