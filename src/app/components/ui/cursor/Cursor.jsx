'use client'

import {useCallback, useContext, useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import {CursorContext} from './CursorProvider'
import {colorsDD} from '../colors/colors'
import './cursor.css'

export default function Cursor() {
  const [cursorData, setCursorData] = useContext(CursorContext)
  const [textCursor, setTextCursor] = useState('')
  const mouseMove = useCallback(
    e => {
      setCursorData(prevState => ({
        ...prevState,
        position: {
          x: e.clientX,
          y: e.clientY,
        },
      }))
    },
    [setCursorData],
  )

  useEffect(() => {
    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [mouseMove])

  const variants = {
    default: {
      height: 0,
      width: 0,
      background: '#ffffff',
      x: cursorData.position.x - 16,
      y: cursorData.position.y - 16,
    },
    text: {
      height: 100,
      width: 100,
      background: '#ffffff',
      x: cursorData.position.x - 40,
      y: cursorData.position.y - 40,
    },
    pos: {
      height: 70,
      width: 70,
      background: '#ffffff20',
      x: cursorData.position.x - 40,
      y: cursorData.position.y - 40,
    },
    SmFull: {
      height: 70,
      width: 70,
      background: '#ffffff',
      x: cursorData.position.x - 40,
      y: cursorData.position.y - 40,
    },
    SmP: {
      height: 70,
      width: 70,
      background: colorsDD.pink,
      x: cursorData.position.x - 40,
      y: cursorData.position.y - 40,
    },
    textg: {
      height: 70,
      width: 70,
      background: '#ffffff',
      x: cursorData.position.x - 40,
      y: cursorData.position.y - 40,
    },
  }

  useEffect(() => {
    if (cursorData.mouseEnter === 'Lg') {
      setCursorData(prevState => ({
        ...prevState,
        variant: 'text',
        orientation: 0,
      }))
      document.body.classList.add('hide_cursor')
    } else if (cursorData.mouseEnter === 'Sm') {
      setCursorData(prevState => ({
        ...prevState,
        variant: 'pos',
        orientation: 0,
      }))
      document.body.classList.add('hide_cursor')
    } else if (cursorData.mouseEnter === 'SmFull') {
      setCursorData(prevState => ({
        ...prevState,
        variant: 'SmFull',
        orientation: 0,
      }))
      document.body.classList.add('hide_cursor')
    } else if (cursorData.mouseEnter === 'SmP') {
      setCursorData(prevState => ({
        ...prevState,
        variant: 'SmP',
        orientation: 0,
      }))
      document.body.classList.add('hide_cursor')
    } else {
      setCursorData(prevState => ({
        ...prevState,
        variant: 'default',
        text: '',
        orientation: 90,
      }))
      document.body.classList.remove('hide_cursor')
    }
    setTextCursor(cursorData.mouseText)
  }, [cursorData.mouseEnter, cursorData.mouseText, setCursorData])

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorData.variant}
      id="customCursor"
    >
      <span
        style={{
          transform: `rotate(${cursorData.orientation}deg)`,
        }}
      >
        {textCursor}
      </span>
    </motion.div>
  )
}
