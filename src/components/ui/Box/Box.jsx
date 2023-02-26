import React from 'react'

const Box = ({
  children,
  bgColor,
  _hover,
  padding,
  m,
  w,
  overflow,
  onMouseEnter,
  onMouseLeave,
}) => {
  const boxStyle = {
    backgroundColor: bgColor,
    padding: padding,
    margin: m,
    width: w,
    overflow: overflow,
  }

  const boxHoverStyle = {
    backgroundColor: _hover?.bgColor,
  }

  return (
    <div
      style={Object.assign({}, boxStyle, _hover && boxHoverStyle)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  )
}

export default Box
