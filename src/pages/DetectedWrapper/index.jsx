import React from 'react'
import isMobile from '../../utils/isMobile'

function ByDevice({ children: { mobile, other } }) {
  return isMobile() ? mobile : other;
}

function DetectedWrapper() {
  return (
    <ByDevice>
      {{
        mobile: <div>Mobile detected!</div>,
        other: <div>Not a mobile device</div>
      }}
    </ByDevice>
  )
}

export default DetectedWrapper
