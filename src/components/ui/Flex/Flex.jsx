import React from 'react'

const Flex = ({
  children,
  bgColor,
  _hover,
  padding,
  m,
  w,
  overflow,
  jC,
  aI,
  fD,
  onMouseEnter,
  onMouseLeave,
  gap,
}) => {
  const flexStyle = {
    display: 'flex',
    backgroundColor: bgColor,
    padding: padding,
    margin: m,
    width: w,
    overflow: overflow,
    justifyContent: jC,
    alignItems: aI,
    flexDirection: fD,
    gap: gap,
  }

  const flexHoverStyle = {
    backgroundColor: _hover?.bgColor,
  }

  return (
    <div
      style={Object.assign({}, flexStyle, _hover && flexHoverStyle)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  )
}

export default Flex
