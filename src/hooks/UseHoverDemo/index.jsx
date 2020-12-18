import React from 'react'
import useHover from '../useHover'

function UseHoverDemo() {

  const [hoverRef, isHovered] = useHover()

  const style = {
    width: '100px',
    height: '100px',
    border: '2px solid red'
  }

  return (
    <div style={style} ref={hoverRef}>
      {isHovered ? 'hover' : 'no hover'}
    </div>
  )
}

export default UseHoverDemo

