import Link from 'next/link'
import React, {useState} from 'react'
import {useEffect} from 'react'
import {colorsDD} from '../colors/colors'
import './Button.css'

export default function ButtonDD({
  text,
  link,
  colorThemeDD,
  indexB,
  colorButton,
  size,
}) {
  const [color, setColor] = useState('white')
  const [bgColor, setBgColor] = useState('pink')

  useEffect(() => {
    if (colorThemeDD === 'pink') {
      setColor(colorsDD.bgcolor)
      setBgColor(colorsDD.pink)
    } else if (colorThemeDD === 'green') {
      setColor(colorsDD.bgcolor)
      setBgColor(colorsDD.green)
    } else if (colorThemeDD === 'light') {
      setColor(colorsDD.bgcolor)
      setBgColor('white')
    } else if (colorThemeDD === 'custom') {
      setColor('white')
      setBgColor(colorButton)
    } else {
      setColor('white')
      setBgColor('gray')
    }
  }, [colorButton, colorThemeDD])

  const idsize = size === 'xs' ? 'linkofbuttonxs' : 'linkofbutton'
  const idsizeBtn = size === 'xs' ? 'actionBtnxs' : 'actionBtn'

  return (
    <div id={idsize} style={{zIndex: indexB}}>
      <Link
        id={idsizeBtn}
        style={{
          backgroundColor: `${bgColor}`,
          color: `${color}`,
        }}
        href={link ?? '/'}
        target="_blank"
      >
        {text}
      </Link>
      <div id="btnTopLeft" style={{borderLeftColor: `${bgColor}`}}></div>
      <div id="btnBotRight" style={{borderLeftColor: `${bgColor}`}}></div>
    </div>
  )
}
