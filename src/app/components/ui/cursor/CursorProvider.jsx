'use client'
import React, {useState, createContext} from 'react'
export const CursorContext = createContext()

export const CursorProvider = ({children}) => {
  const [cursorData, setCursorData] = useState({
    mouseEnter: false,
    position: {
      x: 0,
      y: 0,
    },
    variant: 'default',
  })

  return (
    <CursorContext.Provider value={[cursorData, setCursorData]}>
      {children}
    </CursorContext.Provider>
  )
}
